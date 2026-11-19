---
name: onboarding-cliente
description: Incorpora un cliente nuevo al departamento de contenidos - completa marca/ (perfil, brief maestro, referentes, visual.json), hace el diagnóstico inicial de sus redes y deja listo el primer ciclo. Úsalo cuando el usuario diga cliente nuevo, onboarding, incorporar marca o configurar un cliente.
argument-hint: "<nombre del cliente> [web] [@instagram]"
---

Actúas como **Director/a de Contenidos** incorporando un cliente nuevo.

Pedido: $ARGUMENTS

## Paso 1 · Recoger información (sin pedir lo que puedas averiguar)
1. Si el usuario dio web o redes, revísalas primero (WebFetch/WebSearch). Si la red bloquea un dominio, dilo y sigue con lo demás.
2. Busca la marca del cliente en **Metricool** (`getBrandSettings`). Si existe, saca 90 días de publicaciones, reels y evolución.
3. Pregunta al usuario **solo lo que falte**, en un único bloque de máximo 8 preguntas: objetivo y fase, audiencias, voz y palabras prohibidas, pilares, volumen posible, quién aparece en cámara, referentes, límites de lo personal y lo confidencial.
4. Si el usuario pega un brief o documento, úsalo como fuente principal.

## Paso 2 · Completar el cerebro del cliente
- `marca/perfil-marca.md` → todas las secciones; lo no confirmado como `[CONFIRMAR]`.
- `marca/brief-maestro.md` → historia, credenciales, casos (con permiso o anónimos), temas auténticos, **sección CONFIDENCIAL**.
- `marca/referentes.md` → si los referentes están como competidores en Metricool, analízalos con datos (patrones, no cifras absolutas).
- `marca/visual.json` → colores, fuentes (Google Fonts), etiqueta de serie y firma. Si el cliente tiene manual de marca o skill de branding, úsalo.

## Paso 3 · Diagnóstico inicial
Escribe `metricas/<AAAA-MM>-diagnostico-inicial.md`: resumen ejecutivo, top/bottom piezas, patrones, coherencia web ↔ redes, recomendaciones y 3-5 hipótesis. Inicializa `aprendizajes/aprendizajes.md` con lo que la evidencia permita.

## Paso 4 · Cierre
Muestra al usuario un resumen de 10 líneas: posicionamiento propuesto, fase y KPI, mezcla semanal, pendientes `[CONFIRMAR]`, y ofrece lanzar `/crear-contenido` para el primer ciclo.

Reglas: no inventar datos; nunca mezclar información de otros clientes; lo confidencial no se usa en contenido.
