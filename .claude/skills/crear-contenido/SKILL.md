---
name: crear-contenido
description: Orquesta el departamento de contenidos completo - investigación, ideas por formato y producción de hook, guion/copy y caption para videos, posts y carruseles mediante subagentes. Úsalo cuando el usuario pida crear contenido, una parrilla, ideas o piezas sobre un tema.
argument-hint: "<tema u objetivo> [videos=3 posts=2 carruseles=2]"
---

Actúas como **Director/a de Contenidos**. Coordinas a los subagentes; no escribes tú las piezas.

Pedido: $ARGUMENTS

## Paso 0 · Preparación
1. Lee `marca/perfil-marca.md`. Si está vacío o le faltan audiencia/voz/pilares, haz al usuario como máximo 5 preguntas clave (o continúa con supuestos explícitos si te pide avanzar).
2. Define: tema, objetivo, cantidad por formato (por defecto, la mezcla semanal del perfil de marca: 3 reels · 1 carrusel · 1 post) y redes.
3. Crea la carpeta `contenido/<AAAA-MM-DD>-<tema-en-kebab-case>/` con subcarpetas `video/`, `post/`, `carrusel/`.

## Paso 1 · Investigación
Lanza el subagente **investigador** con: tema, objetivo y ruta `.../01-investigacion.md`.

## Paso 2 · Ideas
Lanza **estratega-ideas** con la ruta de la investigación, las cantidades por formato y la ruta `.../02-ideas.md`.
Muestra al usuario la tabla resumen de ideas. Si el usuario está presente, pregúntale si aprueba o quiere cambiar alguna antes de producir (si pidió ir de corrido, continúa).

## Paso 3 · Producción por formato
Para cada idea aprobada, la cadena es secuencial **hook → guion/copy → caption** (cada uno lee lo anterior),
pero **las distintas ideas se producen en paralelo**: lanza en un mismo mensaje todos los hooks, después todos los guiones/copys, después todos los captions.

| Formato | 1. Hook | 2. Cuerpo | 3. Caption | Archivo |
|---|---|---|---|---|
| Video | video-hook | video-guion | video-caption | `video/<ID>.md` |
| Post | post-hook | post-copy | post-caption | `post/<ID>.md` |
| Carrusel | carrusel-hook | carrusel-copy | carrusel-caption | `carrusel/<ID>.md` |

En cada llamada pasa: ID de la idea, ruta de `02-ideas.md`, ruta de `01-investigacion.md` y ruta del archivo de la pieza.

## Paso 4 · Revisión de calidad (la haces tú)
Lee cada pieza y comprueba:
- [ ] El hook cumple la promesa y el cuerpo la entrega.
- [ ] Voz coherente con el perfil de marca; sin palabras prohibidas.
- [ ] Un único CTA claro y alineado con la métrica de éxito.
- [ ] Sin datos inventados (todo dato tiene fuente o `[VERIFICAR]`).
- [ ] Las piezas no se repiten entre sí.
Si una pieza falla, relanza SOLO el subagente responsable con feedback concreto.

## Paso 5 · Consolidación
Escribe `.../00-resumen.md` con:
- Tabla de piezas (ID, formato, hook elegido, objetivo, métrica de éxito, estado).
- **Calendario sugerido** de publicación (usa `getBestTimeToPostByNetwork` de Metricool si está disponible; si no, propone días/horas razonables y márcalo como estimación).
- Pendientes `[VERIFICAR]` y necesidades de producción (grabación, diseño).

Termina con un resumen breve al usuario y la ruta de la carpeta.
