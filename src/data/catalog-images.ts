import type { CatalogItem } from "./catalog"

const images = import.meta.glob<string>(["../assets/catalog/*.webp", "../assets/portal-gun.png"], {
  eager: true,
  import: "default",
})

export const catalogImage = (item: CatalogItem) => images[`../assets/${item.image}`]
