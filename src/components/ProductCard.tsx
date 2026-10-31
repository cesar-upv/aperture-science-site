import { Arrow } from "./ui"
import LineIcon, { type IconName } from "./LineIcon"
import { catalogImage } from "../data/catalog-images"
import { deliveryLabels, discountPercent, formatPrice, inquiryHref, policyLabels, savings, type CatalogItem, type DeliveryMode, type PolicyStatus } from "../data/catalog"

export const deliveryIcons: Record<DeliveryMode, IconName> = { domicilio: "truck", sucursal: "store", sede: "building" }
export const policyIcons: Record<PolicyStatus, IconName> = { si: "check", condicional: "alert", no: "close" }

export function PriceTag({ item }: { item: CatalogItem }) {
  return (
    <div className="catalog-price">
      {item.prior && <span className="catalog-prior"><span className="sr-only">Precio anterior: </span>{formatPrice(item.prior)}</span>}
      <strong>{formatPrice(item.price)}</strong>
      {item.priceUnit && <span className="catalog-unit">{item.priceUnit}</span>}
      {item.prior && <span className="catalog-saving">Ahorras {formatPrice(savings(item))}</span>}
    </div>
  )
}

export function DeliveryModes({ item }: { item: CatalogItem }) {
  return (
    <ul className="catalog-modes">
      {item.deliveryModes.map((mode) => <li key={mode}><LineIcon name={deliveryIcons[mode]} size={18} />{deliveryLabels[mode]}</li>)}
    </ul>
  )
}

export default function ProductCard({ item, position, total, onOpen }: { item: CatalogItem; position: number; total: number; onOpen: () => void }) {
  const discount = discountPercent(item)
  return (
    <article className="catalog-card" id={item.id} aria-labelledby={`${item.id}-title`}>
      <button type="button" className={`catalog-image ${item.imageFit === "contain" ? "is-contained" : ""}`} onClick={onOpen} aria-label={`Ampliar imagen: ${item.name}`}>
        <img src={catalogImage(item)} alt={item.imageDescription} loading="lazy" width="1536" height="1024" />
        {discount > 0 && <span className="catalog-offer">−{discount}%</span>}
        <span className="catalog-number mono">{String(position).padStart(2, "0")} / {total}</span>
        <span className="catalog-zoom"><LineIcon name="expand" size={18} /></span>
      </button>
      <div className="catalog-card-body">
        <span className="mono catalog-category">{item.category}</span>
        <h3 id={`${item.id}-title`}>{item.name}</h3>
        <p className="catalog-description">{item.description}</p>
        <PriceTag item={item} />
        <dl className="catalog-facts">
          <div>
            <dt>Cambios y devoluciones</dt>
            <dd className={`catalog-policy policy-${item.returns.status}`}>
              <LineIcon name={policyIcons[item.returns.status]} size={18} />
              <span><span className="sr-only">{policyLabels[item.returns.status]}: </span>{item.returns.label}</span>
            </dd>
          </div>
          <div>
            <dt>Entrega</dt>
            <dd><DeliveryModes item={item} /></dd>
          </div>
        </dl>
        <div className="catalog-actions">
          <button type="button" className="button button-small button-outline" onClick={onOpen} aria-label={`Ver ficha completa: ${item.name}`}>Ver ficha completa</button>
          <a className="catalog-inquire" href={inquiryHref(item)} aria-label={`Cotizar ${item.name} por correo`}>Cotizar <Arrow diagonal /></a>
        </div>
      </div>
    </article>
  )
}
