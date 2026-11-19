# Departamento de Contenidos OS

Metodología de marketing de contenidos operada por agentes de Claude Code: investigación → ideas → producción (hook, guion/copy, caption) para reels, carruseles y posts → revisión → métricas → aprendizajes.

**Este repositorio es la plantilla.** No contiene datos de clientes.

## Cliente nuevo
1. En GitHub: **Use this template → Create a new repository** → nombre `cliente-<nombre>` (privado).
2. Abre ese repo en Claude Code (escritorio o claude.ai/code).
3. Escribe `/onboarding-cliente` y sigue las preguntas: completa `marca/` y hace el diagnóstico inicial.
4. Produce: `/crear-contenido <tema o periodo>` · Mide: `/analizar-metricas <periodo>`.

## Estructura
| Carpeta | Qué es |
|---|---|
| `.claude/agents/` | Los 12 agentes (investigador, estratega, hook/guion/caption por formato, analista) |
| `.claude/skills/` | `/onboarding-cliente`, `/crear-contenido`, `/analizar-metricas` |
| `CLAUDE.md` | Manual del departamento (flujo y reglas) |
| `marca/` | Plantillas del cerebro del cliente: perfil, brief maestro, referentes, `visual.json` |
| `aprendizajes/` | Plantilla del registro de aprendizajes |
| `contenido/`, `metricas/` | Vacías: se llenan en el repo de cada cliente |
| `diseno/plantilla-reel-os/` | Motor de reels animados sin cámara; toma la identidad de `marca/visual.json` |

## Reglas
- Ningún dato de cliente se sube a este repositorio.
- Videos, audios e imágenes pesadas van a Google Drive, no a Git.
- Nada de claves en archivos: las credenciales se guardan en el entorno.
