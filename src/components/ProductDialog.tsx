import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react"
import { Arrow } from "./ui"
import LineIcon from "./LineIcon"
import { DeliveryModes, PriceTag, policyIcons } from "./ProductCard"
import { catalogImage } from "../data/catalog-images"
import { discountPercent, inquiryHref, policyLabels, type CatalogItem } from "../data/catalog"

type Props = { items: CatalogItem[]; selectedId: string | null; onSelect: (id: string) => void; onClose: () => void }

export default function ProductDialog({ items, selectedId, onSelect, onClose }: Props) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [fullView, setFullView] = useState(false)
  const index = items.findIndex((item) => item.id === selectedId)
  const item = index >= 0 ? items[index] : null
  const open = item !== null

  useEffect(() => {
    if (open && !dialog.current?.open) {
      dialog.current?.showModal()
      dialog.current?.querySelector<HTMLButtonElement>(".product-dialog-close")?.focus()
    }
    if (!open) {
      dialog.current?.close()
      setFullView(false)
    }
  }, [open])

  // A new product starts reading from the top of its details.
  useEffect(() => {
    dialog.current?.querySelector(".product-dialog-info")?.scrollTo({ top: 0 })
  }, [selectedId])

  const go = (step: number) => onSelect(items[(index + step + items.length) % items.length].id)
  const onKeyDown = (event: KeyboardEvent) => {
    if (items.length < 2) return
    if (event.key === "ArrowRight") go(1)
    if (event.key === "ArrowLeft") go(-1)
  }

  return (
    <dialog
      ref={dialog}
      className={`product-dialog ${fullView ? "is-full" : ""}`}
      aria-labelledby="product-dialog-title"
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={(event) => { if (event.target === dialog.current) onClose() }}
    >
      {item && (
        <div className="product-dialog-layout">
          <figure className={`product-dialog-media ${item.imageFit === "contain" ? "is-contained" : ""}`}
            style={{ "--media": `url("${catalogImage(item)}")` } as CSSProperties}>
            <img src={catalogImage(item)} alt={item.imageDescription} />
            {discountPercent(item) > 0 && <span className="catalog-offer">−{discountPercent(item)}%</span>}
            <button type="button" className="product-dialog-zoom" onClick={() => setFullView(!fullView)} aria-pressed={fullView}>
              <LineIcon name={fullView ? "shrink" : "expand"} size={18} />
              {fullView ? "Ver ficha" : "Pantalla completa"}
            </button>
            <figcaption className="mono">{String(index + 1).padStart(2, "0")} / {items.length}<span className="product-dialog-note"> · Imagen ilustrativa</span></figcaption>
          </figure>
          <div className="product-dialog-info">
            <span className="mono catalog-category">{item.category}</span>
            <h2 id="product-dialog-title">{item.name}</h2>
            <p className="product-dialog-description">{item.description}</p>
            <PriceTag item={item} />
            <section className="product-dialog-block" aria-label="Condiciones de compra">
              <h3><LineIcon name="swap" size={18} />Condiciones de compra</h3>
              <p className={`catalog-policy policy-${item.returns.status}`}>
                <LineIcon name={policyIcons[item.returns.status]} size={18} />
                <span><strong>Cambios y devoluciones: {policyLabels[item.returns.status].toLowerCase()}.</strong> {item.returns.label}.</span>
              </p>
              <p>{item.conditions}</p>
            </section>
            <section className="product-dialog-block" aria-label="Opciones de entrega">
              <h3><LineIcon name="truck" size={18} />Entrega</h3>
              <DeliveryModes item={item} />
              <p>{item.delivery}</p>
            </section>
            <a className="button button-blue product-dialog-cta" href={inquiryHref(item)}>Solicitar cotización <Arrow diagonal /></a>
          </div>
          <div className="product-dialog-nav">
            {items.length > 1 && <>
              <button type="button" onClick={() => go(-1)} aria-label="Producto anterior"><LineIcon name="prev" /></button>
              <button type="button" onClick={() => go(1)} aria-label="Producto siguiente"><LineIcon name="next" /></button>
            </>}
            <button type="button" className="product-dialog-close" onClick={onClose} aria-label="Cerrar ficha"><LineIcon name="close" /></button>
          </div>
        </div>
      )}
    </dialog>
  )
}
