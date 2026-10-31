# Aperture Science

Sitio estático e interactivo inspirado en Portal y Portal 2: presentación de la Portal Gun, demostración de portales, filosofía empresarial, planeación estratégica, organización, galería de instalaciones, atención al cliente y catálogo de productos y servicios.

React 19 · TypeScript · Vite 8 · Tailwind CSS 4. Créditos de recursos en [docs/LICENCIAS.md](docs/LICENCIAS.md).

## Desarrollo

Usa Node.js 24, definido en `.nvmrc`:

```bash
npm ci
npm run dev
```

Abre la URL que indique Vite (por defecto, `http://127.0.0.1:5173`).

| Comando | Función |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run typecheck` | Comprobar tipos de TypeScript |
| `npm test` | Verificar contenido empresarial, catálogo y atención al cliente |
| `npm run build` | Comprobar tipos y generar `dist/` |
| `npm run preview` | Servir la compilación localmente |

## Contenido y mantenimiento

La página principal incluye la sección `#atencion`: canales de contacto, un chat de atención con respuestas guiadas (`#chat-atencion`) y un formulario de quejas y sugerencias (`#quejas`) que valida los datos, asigna un folio y abre el correo del cliente con la solicitud lista. El sitio no tiene backend: el envío depende de que el cliente mande ese correo.

El botón **Ver productos y servicios** abre `catalogo.html`: ofertas imperdibles (`#ofertas`) y diez opciones de compra (`#productos`) con filtros por tipo, orden por precio y una ficha ampliada con imagen a pantalla completa, condiciones de compra y entrega. El correo `atencion@aperturescience.example` es ilustrativo: debe sustituirse por un canal real antes de publicar o usar las consultas. Las promociones, los meses sin intereses y la vigencia se definen en `src/data/catalog.ts`.

[docs/SITE_CONTENT.md](docs/SITE_CONTENT.md) es la fuente editorial vigente. La página puede resumir su redacción, conservando objetivos, fases, departamentos, subáreas e indicadores. Las cifras son metas del programa, no resultados obtenidos.

- `src/data/strategy.ts`: datos del FODA, objetivos, estrategias, planes, organización, cultura y compromisos.
- `src/data/catalog.ts` y `src/data/customer-care.ts`: productos, precios, ofertas, canales, temas del chat, seguimiento y validación del formulario. No importan recursos, para que Node pueda probarlos; `catalog-images.ts` resuelve las imágenes.
- `src/data/navigation.ts`: enlaces compartidos de navegación.
- `src/components/`: secciones e interacciones; los textos de presentación también se mantienen aquí.
- `src/styles/` y `src/index.css`: estilos generales y ajustes de legibilidad; organización y planeación tienen CSS junto a sus componentes.
- `src/assets/`: imágenes, fuentes locales y avisos de licencia. Procedencia en [docs/LICENCIAS.md](docs/LICENCIAS.md).
- `public/`: recursos estáticos, como el favicon.
- `tests/strategy.test.mjs`: integridad del contenido y correspondencia con la fuente editorial.
- `tests/catalog.test.mjs` y `tests/customer-care.test.mjs`: fichas completas, imágenes existentes, descuentos coherentes, validación, folios, enlaces internos y redacción sin referencias escolares.

Las versiones anteriores del contenido y la documentación de entrega se conservan en el historial de Git.

## Verificación

Antes de confirmar cambios:

```bash
npm test
npm run build
git diff --check
```

Si cambias la interfaz, revisa también en el navegador:

- Escritorio y móvil (320–1440 px), además de texto al 200%: lectura y ausencia de desbordamiento horizontal.
- Navegación por teclado: menú móvil, controles del producto y demostración, desplegables y galería.
- Contraste, foco visible y preferencia del sistema de movimiento reducido.

Las pruebas de Node no sustituyen la revisión visual ni una auditoría de accesibilidad.

## Compilación y automatización

`dist/` contiene el sitio estático para servir por HTTP. `vite.config.ts` usa `base: './'` y navegación por anclas para permitir alojamiento en una subcarpeta. Las imágenes de componentes se importan desde `src/assets/`; el HTML referencia recursos de `public/` mediante `%BASE_URL%`.

- [.github/workflows/ci.yml](.github/workflows/ci.yml) instala dependencias, compila y ejecuta las pruebas en pushes y pull requests, o manualmente.
- [.github/workflows/pages.yml](.github/workflows/pages.yml) conserva la publicación opcional en Pages, mediante ejecución manual sobre la rama predeterminada. Subir código no activa este despliegue. Su uso depende de la configuración y disponibilidad de Pages para el repositorio.

`node_modules/`, `dist/`, archivos de entorno y artefactos locales están excluidos por `.gitignore`. El lockfile se versiona para reproducir la instalación.

## Actualizar contenido empresarial

Edita `docs/SITE_CONTENT.md` y ejecuta `npm run content:sync` para regenerar los datos tipados del sitio. Conserva los encabezados y etiquetas del documento. Guarda ambos archivos en el mismo commit. `npm test` verifica la sincronización antes de probar el contenido; CI y Pages ejecutan las pruebas antes de compilar. Usa la versión de Node de `.nvmrc` (24).

## Evidencia de la Unidad 1

Capturas organizadas, presentación editable y matriz de cumplimiento en [docs/evidencias/README.md](docs/evidencias/README.md).

## Evidencia de la Unidad 2

Capturas de atención al cliente, catálogo y ofertas en [docs/evidencias/unidad-2/README.md](docs/evidencias/unidad-2/README.md).
