# Aperture Science

Sitio estático e interactivo inspirado en Portal y Portal 2: presentación de la Portal Gun, demostración de portales, filosofía empresarial, planeación estratégica, organización y galería de instalaciones.

Proyecto académico de fans, sin afiliación con Valve, ventas reales ni captura de datos. React 19 · TypeScript · Vite 8 · Tailwind CSS 4.

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
| `npm test` | Verificar contenido y relaciones del plan empresarial |
| `npm run build` | Comprobar tipos y generar `dist/` |
| `npm run preview` | Servir la compilación localmente |

## Contenido y mantenimiento

[docs/SITE_CONTENT.md](docs/SITE_CONTENT.md) es la fuente editorial vigente. La página puede resumir su redacción, conservando objetivos, fases, departamentos, subáreas e indicadores. Las metas son propuestas académicas, no resultados reales.

- `src/data/strategy.ts`: datos del FODA, objetivos, estrategias, planes, organización, cultura y compromisos.
- `src/data/navigation.ts`: enlaces compartidos de navegación.
- `src/components/`: secciones e interacciones; los textos de presentación también se mantienen aquí.
- `src/styles/` y `src/index.css`: estilos generales y ajustes de legibilidad; organización y planeación tienen CSS junto a sus componentes.
- `src/assets/`: imágenes, fuentes locales y avisos de licencia. Procedencia en [docs/LICENCIAS.md](docs/LICENCIAS.md).
- `public/`: recursos estáticos, como el favicon.
- `tests/strategy.test.mjs`: integridad del contenido y correspondencia con la fuente editorial.

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
- Navegación por teclado: menú móvil, pestañas del plan, controles del producto y demostración, desplegables y galería.
- Contraste, foco visible y preferencia del sistema de movimiento reducido.

Las pruebas de Node no sustituyen la revisión visual ni una auditoría de accesibilidad.

## Compilación y automatización

`dist/` contiene el sitio estático para servir por HTTP. `vite.config.ts` usa `base: './'` y navegación por anclas para permitir alojamiento en una subcarpeta. Las imágenes de componentes se importan desde `src/assets/`; el HTML referencia recursos de `public/` mediante `%BASE_URL%`.

- [.github/workflows/ci.yml](.github/workflows/ci.yml) instala dependencias, compila y ejecuta las pruebas en pushes y pull requests, o manualmente.
- [.github/workflows/pages.yml](.github/workflows/pages.yml) conserva la publicación opcional en Pages, mediante ejecución manual sobre la rama predeterminada. Subir código no activa este despliegue. Su uso depende de la configuración y disponibilidad de Pages para el repositorio.

`node_modules/`, `dist/`, archivos de entorno y artefactos locales están excluidos por `.gitignore`. El lockfile se versiona para reproducir la instalación.
