# Verificación de la entrega

Revisión documental y comprobaciones locales: **16 de septiembre de 2026**, con Node.js 24.19 y Microsoft Edge 153.

- TypeScript estricto y compilación de producción completados.
- Sitio probado desde una subcarpeta `/aperture-demo/`, como ocurre al publicarlo en GitHub Pages: scripts, fuentes e imágenes cargan correctamente.
- Revisados los anchos de 320, 390, 768, 1024, 1440 y 1920 px, en las tres vistas de planeación: sin desbordamiento horizontal.
- Probados el color del portal de portada, color y componentes del producto, activación y transferencia del cubo, reinicio, galería y cierre con Escape, preguntas frecuentes y menú móvil.
- Comprobadas las pestañas del plan con teclado, los cuatro objetivos y sus cuatro estrategias y planes. Cada plan tiene tres acciones con evidencia, responsables y plazo.
- FODA: cinco factores por categoría. Filosofía: misión, visión y cinco valores.
- Formulario: validación de campos y confirmación de simulación, sin peticiones de escritura a servicios externos.
- Movimiento reducido respetado. El modo de impresión muestra todos los objetivos y planes, aunque estén en pestañas inactivas.
- Sin excepciones JavaScript detectadas durante estas pruebas.
- Vista previa HTML independiente abierta con `file://` y conexión deshabilitada: imágenes y fuentes integradas, transferencia del cubo y pestañas del plan funcionales, sin solicitudes remotas.

`npm test` ejecuta pruebas de integridad del contenido con el runner integrado de Node; GitHub Actions ejecuta esas pruebas además de compilar. La revisión de navegador se hizo localmente y no se ejecuta en el workflow incluido.

Para repetir las comprobaciones automatizadas después de instalar las dependencias, ejecuta `npm test` y `npm run build`. Usa `npm run preview` para revisar visualmente la compilación resultante.

La preparación de esta entrega no ejecuta GitHub Actions en tu cuenta ni crea o publica un repositorio. Esa comprobación remota se realizará cuando subas el proyecto. No constituye una auditoría completa de accesibilidad ni una validación del funcionamiento real de una tecnología ficticia.
