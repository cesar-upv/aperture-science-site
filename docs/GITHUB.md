# Subir el proyecto a GitHub

Guía revisada el **16 de septiembre de 2026**.

La entrega ya contiene el proyecto completo y su configuración. **Descomprime el ZIP una vez y sube el contenido de la carpeta que contiene `package.json`.** No necesitas reconstruirlo archivo por archivo ni crear una copia por cada cambio.

Subir el código a un repositorio permite guardarlo y compartirlo. Publicar la página es un segundo paso opcional. Los flujos incluidos comprueban el código automáticamente; solo publican el sitio cuando ejecutas el flujo manual de Pages.

## 1. Preparar la carpeta

Extrae el ZIP a una carpeta propia, abre esa carpeta y localiza `package.json`. En ese mismo nivel deben aparecer:

```text
.github/
docs/
public/
src/
tests/
.gitattributes
.gitignore
.nvmrc
ASSETS.md
index.html
package-lock.json
package.json
README.md
tsconfig.json
vite.config.ts
```

Incluye los archivos que empiezan con punto. Activa la visualización de archivos ocultos en tu explorador si no aparecen. **`.github/workflows/ci.yml` y `.github/workflows/pages.yml` deben conservar sus carpetas**, porque GitHub los busca en esa ubicación.

No subas `node_modules/`, `dist/`, el ZIP de entrega ni archivos de vista previa independientes. `.gitignore` ya excluye los archivos locales y de compilación.

## 2. Comprobar la página localmente

Con Node.js 24 instalado, abre PowerShell o una terminal dentro de la carpeta del proyecto:

```bash
npm ci
npm run dev
```

Abre la dirección que muestre la terminal. Para revisar la versión que se publicará, detén el servidor con Ctrl+C y ejecuta:

```bash
npm test
npm run build
npm run preview
```

La compilación genera `dist/`. GitHub Actions repetirá la instalación, las pruebas de integridad y la compilación usando el lockfile incluido.

## 3. Subir con Git — recomendado

En GitHub crea un **repositorio vacío** con el nombre que prefieras. En ese formulario no agregues README, `.gitignore` ni licencia: el proyecto ya tiene sus archivos. Copia la URL HTTPS del repositorio.

Desde la terminal abierta dentro del proyecto, ejecuta:

```bash
git init -b main
git add .
git status
git commit -m "Agregar sitio de Aperture Science"
```

En el siguiente comando, sustituye `TU_USUARIO` y `TU_REPOSITORIO` por los datos reales de la URL que acabas de copiar:

```bash
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

Git puede pedir que inicies sesión con GitHub. Si Git solicita identidad para crear el commit, configura tu propio nombre y correo en este repositorio y repite el commit:

```bash
git config user.name "TU_NOMBRE"
git config user.email "TU_CORREO_DE_GIT"
```

Los datos en mayúsculas son marcadores que debes sustituir, no credenciales incluidas en el proyecto. Este procedimiento sigue la [guía oficial para añadir código local a GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github).

Al abrir el repositorio en el navegador, `package.json` debe estar en la raíz. Si solo aparece un ZIP o una carpeta que a su vez contiene todo el proyecto, el nivel de carga no es el correcto.

## Alternativa sin terminal

Puedes usar GitHub Desktop para gestionar y publicar esta carpeta como repositorio local. Es una forma cómoda de conservar los archivos con punto y revisar todo el conjunto antes de subirlo.

Si prefieres **Add file → Upload files** en el navegador, arrastra el contenido de la carpeta del proyecto y confirma la carga. Revisa después que `.github/workflows/` y los demás archivos con punto estén presentes; algunas combinaciones de navegador y explorador pueden omitirlos al arrastrar. Si faltan, usa Git o GitHub Desktop, o créalos en GitHub con **Add file → Create new file**, respetando sus rutas y copiando su contenido. Conserva `src/assets/` con su estructura.

No subas cada imagen como un archivo suelto en la raíz: los imports del código dependen de la carpeta `src/assets/`.

## 4. Verificar que GitHub puede compilarlo

Abre **Actions → Verificar proyecto**. El flujo usa Node.js 24, ejecuta `npm ci`, `npm run build` y `npm test`. Una ejecución correcta confirma que TypeScript y Vite compilaron esa revisión y que pasó las pruebas de integridad del contenido empresarial. Este flujo **no publica la página**.

## 5. Publicar con GitHub Pages — opcional

1. Abre **Settings → Pages** del repositorio.
2. En **Build and deployment → Source**, selecciona **GitHub Actions**. No necesitas generar otro workflow; este proyecto ya incluye uno.
3. Abre **Actions → Publicar en GitHub Pages (manual)**.
4. Pulsa **Run workflow**, selecciona tu rama predeterminada y confirma **Run workflow**. Por defecto, los comandos anteriores crean `main`.
5. Espera a que terminen **Preparar sitio** y **Publicar sitio**. El resultado mostrará la URL asignada por GitHub Pages; también estará en **Settings → Pages**.

La configuración del origen y los flujos personalizados se explican en la [documentación oficial de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) y en su [guía de workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

El flujo solo permite desplegar desde la rama predeterminada del repositorio. Si lo ejecutas desde otra rama, el trabajo de publicación se omite. Subir nuevos cambios vuelve a verificar el código; para actualizar la página pública, ejecuta de nuevo el flujo manual.

## Rutas, imágenes y nombre del repositorio

`vite.config.ts` utiliza `base: './'`. Vite genera rutas relativas para scripts, estilos e imágenes importadas, de modo que esta página con navegación por anclas puede alojarse en la raíz de un dominio o dentro de una carpeta con el nombre de tu repositorio. No necesitas introducir ese nombre en el código. Consulta [rutas relativas en Vite](https://vite.dev/guide/build#relative-base) y la [opción base](https://vite.dev/config/shared-options#base).

Mantén las imágenes importadas desde `src/assets/`. Para futuros recursos en `public/`, usa `%BASE_URL%` desde `index.html` o `import.meta.env.BASE_URL` desde JavaScript. Evita escribir rutas como `/assets/imagen.png`, que apuntarían a la raíz del dominio y podrían fallar en una URL con subcarpeta.

## Si algo no aparece

| Situación | Comprobación |
| --- | --- |
| No aparece el flujo en Actions | Revisa que `.github/workflows/` se haya subido y que los archivos estén en la rama predeterminada. |
| No se encuentra `package.json` en Actions | El proyecto debe comenzar en la raíz del repositorio, sin otra carpeta exterior. |
| Pages no está habilitado | Selecciona GitHub Actions en Settings → Pages antes de ejecutar el flujo manual. |
| El trabajo de publicación está omitido | Ejecuta el flujo sobre la rama predeterminada. |
| Faltan imágenes o fuentes | Revisa que se subió `src/assets/` completo, incluidos los nombres originales y las licencias. |
| Ves el sitio anterior | Comprueba que ejecutaste nuevamente el flujo de Pages para la revisión nueva y después recarga el navegador. |
| El formulario no manda correos | Es una simulación de interfaz; no hay servicio de envío ni base de datos. |

## Fuentes de configuración

Consultadas el **15 de septiembre de 2026**. Se usaron versiones publicadas por los proyectos oficiales:

- [actions/checkout v7.0.1](https://github.com/actions/checkout/releases/tag/v7.0.1).
- [actions/setup-node v7.0.0](https://github.com/actions/setup-node/releases/tag/v7.0.0).
- [actions/configure-pages v6.0.0](https://github.com/actions/configure-pages/releases/tag/v6.0.0).
- [actions/upload-pages-artifact v5.0.0](https://github.com/actions/upload-pages-artifact/releases/tag/v5.0.0).
- [actions/deploy-pages v5.0.1](https://github.com/actions/deploy-pages/releases/tag/v5.0.1).
- [Publicar sitios estáticos con Vite](https://vite.dev/guide/static-deploy).

La entrega prepara la configuración local; no crea un repositorio, no configura una cuenta y no publica nada por sí sola.
