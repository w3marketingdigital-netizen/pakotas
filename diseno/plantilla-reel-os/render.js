// Uso: node render.js guion.json salida.mp4 [marca/visual.json]
// La identidad visual sale de marca/visual.json del cliente (o del 3er argumento).
const { chromium } = require('playwright'); const fs=require('fs'), path=require('path'), {execSync}=require('child_process');
(async()=>{
  const spec=JSON.parse(fs.readFileSync(process.argv[2],'utf8')); const out=path.resolve(process.argv[3]);
  const brandPath=process.argv[4]||path.join(__dirname,'..','..','marca','visual.json');
  spec.brand=Object.assign({},JSON.parse(fs.readFileSync(brandPath,'utf8')),spec.brand||{});
  const tmp=fs.mkdtempSync('/tmp/claude-0/-home-user/4b408fca-9340-58d4-ac1a-7977d5b16c56/scratchpad/reel-');
  const html=fs.readFileSync(path.join(__dirname,'reel.html'),'utf8').replace('/*__SPEC__*/null', JSON.stringify(spec));
  fs.writeFileSync(path.join(tmp,'r.html'),html);
  const fps=30, total=spec.scenes.reduce((a,s)=>a+s.dur,0);
  const b=await chromium.launch(); const p=await b.newPage({viewport:{width:1080,height:1920}});
  await p.goto('file://'+tmp+'/r.html'); await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(400);
  for(let f=0; f<Math.round(fps*total); f++){ await p.evaluate(t=>window.render(t), f/fps);
    await p.screenshot({path:`${tmp}/f${String(f).padStart(4,'0')}.jpg`,type:'jpeg',quality:92}); }
  await b.close();
  // audio: notificación si la 1ª escena tiene chat, golpe suave en cada cambio de escena, fondo bajo
  let starts=[], t=0; spec.scenes.forEach((s,i)=>{ if(i) starts.push(t); t+=s.dur; });
  const hasChat=spec.scenes[0].items.some(i=>i.kind==='chat');
  let inputs=`-f lavfi -i "sine=f=110:d=${total}" -f lavfi -i "sine=f=165:d=${total}" `, fc=`[0][1]amix=inputs=2,volume=0.06,afade=t=in:d=1.5,afade=t=out:st=${total-1.5}:d=1.5[pad];`, mix=['[pad]'], n=2;
  if(hasChat){ inputs+=`-f lavfi -i "sine=f=880:d=0.18" -f lavfi -i "sine=f=1320:d=0.25" `; fc+=`[2]afade=t=out:st=0.05:d=0.13,volume=0.35,adelay=550|550[d1];[3]afade=t=out:st=0.05:d=0.2,volume=0.3,adelay=700|700[d2];`; mix.push('[d1]','[d2]'); n=4; }
  starts.forEach((s,i)=>{ inputs+=`-f lavfi -i "sine=f=520:d=0.07" `; fc+=`[${n+i}]afade=t=out:st=0.02:d=0.05,volume=0.25,adelay=${Math.round(s*1000)}|${Math.round(s*1000)}[k${i}];`; mix.push(`[k${i}]`); });
  fc+=`${mix.join('')}amix=inputs=${mix.length}:normalize=0,apad=whole_dur=${total}[a]`;
  execSync(`ffmpeg -y -loglevel error ${inputs} -filter_complex "${fc}" -map "[a]" -t ${total} -ar 44100 -ac 2 ${tmp}/a.wav`);
  execSync(`ffmpeg -y -loglevel error -framerate ${fps} -i ${tmp}/f%04d.jpg -i ${tmp}/a.wav -c:v libx264 -pix_fmt yuv420p -crf 18 -preset medium -c:a aac -b:a 160k -shortest -movflags +faststart "${out}"`);
  const mid=spec.scenes.map((s,i)=>Math.round(30*(spec.scenes.slice(0,i).reduce((a,x)=>a+x.dur,0)+s.dur*0.8)));
  execSync(`ffmpeg -y -loglevel error -i "${out}" -vf "select='${mid.map(m=>`eq(n\\,${m})`).join('+')}',scale=216:-1,tile=${mid.length}x1" -frames:v 1 "${out.replace('.mp4','-preview.png')}"`);
  fs.rmSync(tmp,{recursive:true}); console.log('ok', out, total+'s');
})();
