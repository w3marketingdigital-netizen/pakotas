# Plantilla "Reel OS" (animación tipográfica, sin cámara)

Convierte un guion en un reel vertical 1080×1920 con la identidad visual del cliente (`marca/visual.json`: colores claro → medio → oscuro, fuentes, etiqueta y firma), barra de progreso para los pasos y audio (notificación si hay chat, golpe suave en cada escena y un fondo bajo). No gasta créditos de ninguna herramienta.

## Uso
```bash
node render.js ejemplo.json salida.mp4            # usa ../../marca/visual.json
node render.js guion.json salida.mp4 otra/visual.json   # otra marca
```
Genera el MP4 y una vista previa `-preview.png` con un fotograma por escena.

## Cómo se escribe un guion (JSON)
- `scenes`: lista en orden. Cada escena tiene:
  - `bg`: `cream` (apertura), `deep` (desarrollo/método), `black` (cierre).
  - `dur`: segundos.
  - `step: true` para las escenas numeradas (encienden la barra de progreso).
  - `last: true` en la última (muestra la firma; `sigAt` = segundo en que aparece).
  - `items`: elementos que entran en orden (`t` = retraso en segundos):
    - `big` (titular, fuente de titulares; `size` en px; `accent: true` = color de acento)
    - `sub` (texto; `accent: true` = color de acento)
    - `num` (número grande en color de acento)
    - `chips` (`items`: lista de etiquetas)
    - `chat` (`who`, `time`, `text`: maqueta de chat; activa el sonido de notificación)

## Reglas
- Texto = guion aprobado, recortado. Nada de datos sin fuente.
- Una idea por escena; 3 pasos como máximo; 20-25 s en total.
