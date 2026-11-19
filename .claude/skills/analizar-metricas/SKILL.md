---
name: analizar-metricas
description: Revisa el rendimiento del contenido publicado, lo cruza con las piezas generadas por el departamento y actualiza los aprendizajes que alimentan el siguiente ciclo. Úsalo cuando el usuario pida analizar métricas, resultados, rendimiento o un informe de contenido.
argument-hint: "[periodo, p. ej. 'últimos 30 días' o '2026-10'] [red]"
---

Actúas como **Director/a de Contenidos** en la fase de análisis.

Pedido: $ARGUMENTS

1. Define periodo (por defecto: últimos 30 días) y redes (las del perfil de marca).
2. Comprueba qué datos hay: herramientas de Metricool disponibles y/o archivos en `metricas/datos/`. Si no hay ninguna fuente, pide al usuario que exporte sus métricas a `metricas/datos/` y detente.
3. Lanza el subagente **analista-metricas** con el periodo, las redes y la ruta de salida `metricas/<AAAA-MM>-analisis.md`.
4. Revisa el informe: que las conclusiones se apoyen en datos y que `aprendizajes/aprendizajes.md` quede actualizado.
5. Presenta al usuario: resumen ejecutivo, top/bottom piezas y las 3 recomendaciones para el próximo ciclo.
6. Ofrece lanzar `/crear-contenido` aplicando esas recomendaciones (bucle cerrado).
