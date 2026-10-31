# Evidencia de la Unidad 2

Capturas a 1440 × 1080 CSS px, escala 2 (2880 × 2160 PNG), listas para agregarse al final de la presentación de la Unidad 1 sin recortarlas.

## Correspondencia

| Apartado | Evidencia |
| --- | --- |
| 1. Atención al cliente / 1.1 Estamos para ayudarte | 01 |
| 1.2 Atención a quejas y sugerencias | 02–03 |
| 2. Nuestros productos o servicios | 04 |
| 2.2 Ofertas imperdibles | 05 |
| 2.1 Catálogo de productos o servicios (10 opciones) | 06–09 |
| 2.1 Ficha: condiciones de compra, cambios y devoluciones, entrega | 10 |
| Imagen ampliada del producto | 11 |
| Filtro por tipo (paquetes) | 12 |
| 3. Avance físico del prototipo | Fotografías del equipo (no se publican en el sitio) |

## Qué muestra cada sección

- **Estamos para ayudarte:** correo, chat de atención con temas frecuentes, atención presencial y horario. El chat responde sobre compras, entregas, cambios y devoluciones, pagos, quejas y asesoría.
- **Atención a quejas y sugerencias:** formulario con tipo de solicitud (queja, reclamación o sugerencia), producto, número de pedido y autorización de datos; seguimiento en cuatro pasos con plazos. Al enviarlo se asigna un folio y se abre el correo del cliente con la solicitud.
- **Catálogo:** diez opciones de compra (seis productos, tres paquetes y un servicio). Cada ficha incluye nombre, imagen, descripción, precio, descuento cuando aplica, cambios y devoluciones, y opciones de entrega. La imagen y el botón **Ver ficha completa** abren la ficha ampliada; las flechas del teclado recorren el catálogo.
- **Ofertas imperdibles:** oferta relámpago, tres paquetes con precio anterior y ahorro, meses sin intereses y precio por volumen, válidos hasta agotar existencias.

## Regeneración

Con `npm run dev` activo y Playwright para Python instalado:

```bash
python scripts/capture-unidad-2.py
```

El script valida el chat, la validación y el folio del formulario, las diez fichas, filtros, ficha ampliada, navegación por teclado y la ausencia de desbordamiento horizontal entre 320 y 1920 px, y reemplaza los PNG. Si Chromium ya está instalado en otra ruta, indícala con `CHROMIUM_PATH`.
