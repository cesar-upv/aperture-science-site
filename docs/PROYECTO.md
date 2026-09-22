# Metadatos del proyecto

| Campo | Valor |
| --- | --- |
| Nombre | Aperture Science · Beyond Possible |
| Versión de entrega | 3.0.0 |
| Fecha | 15 de septiembre de 2026 |
| Idioma de contenido | Español |
| Tipo | Sitio estático e interactivo, proyecto académico de fans |
| Universo de referencia | Portal y Portal 2, de Valve |
| Tecnología | React 19, TypeScript, Vite 8, Tailwind CSS 4 |
| Node.js recomendado | 24, definido en `.nvmrc` |
| Entrada | `index.html` → `src/main.tsx` |
| Compilación | `npm run build` → `dist/` |
| Hosting preparado | GitHub Pages, activación y ejecución manual |
| URL pública | Pendiente; no se ha creado ni publicado un repositorio |
| Captura de datos | Sin backend ni formularios |
| Recursos | Imágenes y fuentes locales; procedencia en `ASSETS.md` |

## Personalización al publicar

`index.html` contiene el título, la descripción, el color de interfaz, el favicon y metadatos Open Graph. No contiene una URL canónica, `og:url` ni imagen social remota inventada. Cuando conozcas el dominio final, puedes añadir esos metadatos usando URLs absolutas de tu sitio.

Los enlaces entre secciones usan anclas. La compilación usa `base: './'` para que las referencias generadas a scripts, estilos y assets sean relativas a la carpeta del sitio. Mantén `src/assets/` para imágenes importadas desde componentes, y `%BASE_URL%` para referencias del HTML a archivos de `public/`.

## Cobertura académica prevista

Filosofía empresarial con misión, visión y valores; veinte factores FODA; tres objetivos SMART; una estrategia por objetivo y un plan de acción por estrategia con cuatro fases cada uno. Estructura organizacional con organigrama gerencial interactivo, departamentos y subáreas, cultura de trabajo y compromisos de control. Los números corresponden al contenido del ejercicio, no a métricas de una compañía real.

## Fuente editorial vigente

El contenido empresarial se mantiene a partir de [SITE_CONTENT.md](SITE_CONTENT.md). `PLAN-EMPRESARIAL.md` es una referencia histórica, no la especificación de la página. La presentación puede resumir los textos, conservando objetivos, fases, departamentos, subáreas e indicadores.
