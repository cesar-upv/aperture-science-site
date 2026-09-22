# Recursos, licencias y atribuciones

Este proyecto es una propuesta académica de fans basada en **Portal y Portal 2**, de Valve. No es un sitio oficial, no cuenta con una afiliación declarada con Valve y no constituye una oferta real de venta.

## Imágenes y marcas del videojuego

El logotipo de Aperture, la Portal Gun, el Companion Cube y las capturas del juego representan material de Valve. El inventario de procedencia se incluye más abajo.

Los recursos de Portal Wiki y la ficha de Steam no se presentan como material con licencia abierta. La disponibilidad de una descarga o la licencia del texto de una wiki no equivale a una autorización general sobre las imágenes del videojuego. Este archivo documenta la procedencia; no concede derechos de terceros.

## Tipografías

Barlow, Barlow Condensed y JetBrains Mono se almacenan localmente. Sus avisos SIL Open Font License están en [src/assets/licenses](../src/assets/licenses/). Conserva esos archivos al compartir el proyecto. No son las tipografías oficiales del videojuego.

## Interfaz y textos de la propuesta

La interfaz, diagramas, favicon, animaciones y contenido corporativo se prepararon para este proyecto. La filosofía empresarial, el análisis FODA, los objetivos SMART, las estrategias y los planes de acción son una propuesta académica, no citas oficiales ni hechos canónicos.

No se ha añadido una licencia global de distribución del código. Si posteriormente se elige una licencia para el código propio, deberá indicar con claridad su alcance y excluir los assets y tipografías de terceros, que mantienen sus condiciones originales.

## Dependencias

React, Vite, TypeScript, Tailwind CSS y el resto de paquetes conservan sus respectivas licencias. Las versiones están registradas en [package-lock.json](../package-lock.json); la instalación incluye los avisos de los paquetes en `node_modules/`.

## Inventario de recursos

Rutas relativas a la raíz del repositorio. Procedencia registrada en la entrega del 14 de septiembre de 2026; no implica una nueva verificación de permisos.

### Imágenes del dispositivo y marca

- `src/assets/portal-gun.png`: render del dispositivo de Portal. Fuente: https://theportalwiki.com/wiki/File:Portal_PortalGun.png — archivo: https://i1.theportalwiki.net/img/d/db/Portal_PortalGun.png
- `src/assets/aperture-logo.png`: variante Aperture Laboratories. Fuente: https://theportalwiki.com/wiki/File:ApertureLogo.png — archivo: https://i1.theportalwiki.net/img/d/d0/ApertureLogo.png
- `src/assets/companion-cube.png`: Companion Cube. Fuente: https://theportalwiki.com/wiki/File:Companion_Cube.png — archivo: https://i1.theportalwiki.net/img/6/6b/Companion_Cube.png

Estos assets representan material de Valve distribuido en Portal Wiki. No se asume que la licencia del texto de la wiki cubra el arte del videojuego.

### Capturas de Portal 2

Capturas oficiales incluidas en la ficha del videojuego: https://store.steampowered.com/app/620/Portal_2/

- `test-chamber.jpg`: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/ss_8a772608d29ffd56ac013d2ac7c4388b96e87a21.1920x1080.jpg
- `architecture.jpg`: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/ss_ec35a739b4b33270eb170d9e561c5b016cba50a6.1920x1080.jpg
- `repulsion.jpg`: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/ss_358127df30a766a1516ad139083c2bcec3fe0975.1920x1080.jpg

### Fuentes

Barlow, Barlow Condensed y JetBrains Mono, obtenidas de Google Fonts y almacenadas localmente. Las licencias SIL Open Font License correspondientes están en `src/assets/licenses/`.

- https://github.com/google/fonts/tree/main/ofl/barlow
- https://github.com/google/fonts/tree/main/ofl/barlowcondensed
- https://github.com/google/fonts/tree/main/ofl/jetbrainsmono

`fonts.css` identifica la familia y el peso de cada archivo `font-*.ttf`. Ninguna fuente se presenta como tipografía oficial de Portal.
