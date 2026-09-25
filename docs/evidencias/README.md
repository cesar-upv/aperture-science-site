# Evidencia de la Unidad 1

[Presentación editable: Unidad-1-Aperture-Science.pptx](Unidad-1-Aperture-Science.pptx)

15 diapositivas con capturas del sitio y títulos ordenados según los cuatro apartados solicitados. Los PNG se incluyen por separado para reutilizarlos. Los retratos reservados son intencionales.

## Correspondencia

| Apartado | Evidencia |
| --- | --- |
| 1. Nuestra estrategia / 1.1 Nuestra filosofía | 00–01 |
| 1.2 Nuestro panorama | 02 |
| 1.3 Hacia dónde vamos | 03 |
| 1.4 Nuestras estrategias | 04 |
| 1.5 De la estrategia a la acción | 05 |
| 2. Nuestra organización / 2.1 Nuestra estructura | 06 |
| 2.2 Nuestras áreas | 07 |
| 2.3 Nuestro equipo | 08–09 |
| 3. Nuestra forma de trabajar / 3.1 Nuestra cultura de trabajo | 10 |
| 3.2 Cómo lideramos / 3.3 Cómo nos comunicamos | 10–11 |
| 3.4 Cómo impulsamos a nuestro equipo / 3.5 Trabajamos en equipo | 11 |
| 4. Nuestro compromiso / 4.1 Nuestros estándares | 12 |
| 4.2 Medimos nuestros resultados | 13 |
| 4.3 Seguimiento y mejora | 14 |

## Evaluación y cambios

El punto de partida estaba sincronizado con `origin/main` en `e0e74e8`. Ya incluía los datos empresariales, pero la filosofía estaba fuera de la estrategia, faltaba la presentación de puestos y varios títulos no coincidían con lo solicitado. El contenido estratégico estaba oculto en pestañas y el sitio incluía referencias a un proyecto conceptual.

La versión revisada presenta los cuatro apartados como secciones hermanas, con los 16 subtítulos exactos. Integra misión, visión, cinco valores, cuatro grupos del panorama, tres objetivos cuantificables, sus estrategias y planes con responsables, recursos y plazos; conserva la jerarquía de dirección, cuatro departamentos y unidades especializadas. Añade cinco perfiles con retratos reservados, canales internos, reconocimiento, coordinación y un ciclo de mejora. El header utiliza cinco etiquetas cortas. La redacción pública mantiene la voz empresarial.

`../SITE_CONTENT.md` conserva el contenido base y documenta la síntesis editorial utilizada en la web. Las cifras se presentan como metas. La reducción relativa del 15% en fallas y el umbral absoluto inferior al 5% se explican como medidas complementarias.

## Verificación

- `npm test`: sincronización editorial y cuatro pruebas de integridad del contenido.
- `npm run build`: TypeScript y compilación de producción.
- `git diff --check`: sin errores de espacios.
- Chromium: títulos y jerarquía exactos, enlaces internos válidos, cinco retratos reservados, activación y reinicio de portales, apertura y cierre de galería, menú móvil y retorno de foco con Escape.
- Sin desbordamiento horizontal a 320, 390, 768, 1024, 1440 y 1920 px, ni con texto al 200% en escritorio; sin errores JavaScript durante las comprobaciones.

Browser Preview se utilizó para inspección y capturas iniciales; `preview-referencia.png` conserva una de ellas. Por su menor nitidez, las 15 capturas de entrega se regeneraron en Chromium a 1440 × 1080 CSS px, escala 2 (2880 × 2160 PNG). No se alteró el contenido del sitio para tomarlas. La presentación coloca una captura por diapositiva, sin recortarla.

## Regeneración

Con el servidor de desarrollo activo (`npm run dev`), instala en un entorno Python separado `playwright` y `python-pptx`, ejecuta `playwright install chromium` y después:

```bash
python scripts/capture-evidence.py
```

El script comprueba la estructura y las interacciones, reemplaza los PNG y genera la presentación. El navegador local de revisión no publica el sitio. El push, PR y entrega quedan a cargo del responsable del repositorio.

## Actualización visual

La estrategia se recorre ahora en cinco capítulos con fondos alternos, navegación por anclas, fotografías y laterales gráficos que acompañan la lectura en escritorio. Atlas y P-body ilustran la colaboración; los puestos conservan sus retratos reservados. Se incorporaron esquemas vectoriales propios y movimientos discretos que respetan la preferencia de movimiento reducido. Los recursos nuevos y su procedencia están en [LICENCIAS.md](../LICENCIAS.md).

Las capturas y la presentación se regeneraron tras el rediseño. La evidencia `00` muestra la portada de estrategia y la `01`, la filosofía completa. La verificación también cubre la navegación por capítulos, la permanencia del indicador de estrategia en el header y la ausencia de animación decorativa con movimiento reducido.
