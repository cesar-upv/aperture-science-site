# Verificación de la entrega

Revisión local del 22 de septiembre de 2026. Fuente editorial vigente: [SITE_CONTENT.md](SITE_CONTENT.md).

## Comprobaciones automatizadas

- `npm run build`: TypeScript y compilación de producción correctos.
- `npm test`: seis pruebas de integridad del FODA, objetivos, estrategias, organización, cultura y compromisos. Se contrasta la jerarquía, los indicadores, la verificación y las fases con `SITE_CONTENT.md`.
- `git diff --check`: sin errores de espacios en el diff.

## Browser Preview

- Revisión visual de escritorio y móvil: portada, organigrama, cultura y compromisos.
- Comprobado el ancho del documento a 320, 390, 768, 1280 y 1440 px: sin desplazamiento horizontal de la página.
- Tamaño de texto base aumentado al 200% en ventanas de 390 y 1280 px: sin desbordamiento horizontal. La navegación y el organigrama se reorganizan según el espacio disponible.
- Lectura principal a 18 px, controles a 16 px y anotaciones a partir de 14 px con la configuración normal del navegador. Las unidades `rem` respetan el tamaño de letra del usuario.
- Pestañas del plan: cambio con flechas de teclado y foco conservado. Verificados los tres objetivos con cinco componentes SMART y las tres estrategias con cuatro fases cada una.
- Menú móvil: apertura, cierre con Escape y devolución del foco al botón.
- Desplegables de funciones: apertura y contenido de las subáreas.
- Portada simplificada: una sola llamada a la acción, «Explorar Portal Gun». Se retiraron la barra superior, las etiquetas decorativas solicitadas y la sección de contacto con todos sus enlaces.
- axe-core 4.10.3 ejecutado localmente en las vistas revisadas de escritorio y móvil: sin infracciones automáticas tras corregir contraste y semántica. La herramienta dejó comprobaciones de contraste para revisión manual, especialmente sobre imágenes y capas. No equivale a una certificación completa de accesibilidad.

El script de auditoría se utilizó de forma temporal y no es una dependencia ni un recurso del sitio. No se ha desplegado la página ni ejecutado flujos remotos.

Para repetir las comprobaciones locales: `npm test`, `npm run build` y `npm run dev`. Las pruebas visuales y de teclado se realizan en el navegador; no forman parte de la suite de Node.
