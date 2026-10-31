import { Arrow } from "./ui"
import LineIcon, { type IconName } from "./LineIcon"
import { catalogImage } from "../data/catalog-images"
import { catalog, discountPercent, flashDealId, formatPrice, interestFreeMinimum, interestFreeMonths, savings, type CatalogItem } from "../data/catalog"

const flashDeal = catalog.find((item) => item.id === flashDealId)!
const bundles = catalog.filter((item) => item.group === "paquetes" && item.prior)
const bestBundleDiscount = Math.max(...bundles.map(discountPercent))

const perks: { icon: IconName; title: string; detail: string }[] = [
  { icon: "card", title: `Hasta ${interestFreeMonths} meses sin intereses`, detail: `En compras desde ${formatPrice(interestFreeMinimum)} con tarjetas participantes.` },
  { icon: "tag", title: `Ahorra hasta ${bestBundleDiscount}% en paquetes`, detail: "Combina equipo, seguridad y compuestos en una sola compra." },
  { icon: "building", title: "Precio corporativo por volumen", detail: "¿Cinco unidades o más? Un asesor prepara tu cotización." },
]

function OfferPrice({ item }: { item: CatalogItem }) {
  return (
    <p className="offer-price">
      <span className="catalog-prior"><span className="sr-only">Antes: </span>{formatPrice(item.prior!)}</span>
      <strong>{formatPrice(item.price)}</strong>
    </p>
  )
}

export default function CatalogOffers({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <section className="catalog-offers" id="ofertas" aria-labelledby="offers-title">
      <div className="wrap">
        <div className="offers-head">
          <div>
            <span className="mono offers-kicker"><LineIcon name="bolt" size={16} />OFERTAS IMPERDIBLES</span>
            <h2 id="offers-title">Precios que desafían<br /><span>la gravedad.</span></h2>
          </div>
          <p className="offers-validity"><LineIcon name="clock" size={18} />Válidas hasta agotar existencias.</p>
        </div>
        <div className="offers-grid">
          <article className="offer-flash" aria-labelledby="offer-flash-title">
            <div className="offer-flash-media"><img src={catalogImage(flashDeal)} alt="" loading="lazy" /></div>
            <div className="offer-flash-copy">
              <span className="offer-badge">Oferta relámpago · −{discountPercent(flashDeal)}%</span>
              <h3 id="offer-flash-title">{flashDeal.name}</h3>
              <p className="offer-flash-description">{flashDeal.description}</p>
              <OfferPrice item={flashDeal} />
              <p className="offer-saving">Ahorras {formatPrice(savings(flashDeal))}</p>
              <button type="button" className="button button-orange" onClick={() => onOpen(flashDeal.id)}>Ver oferta <Arrow diagonal /></button>
            </div>
          </article>
          {bundles.map((item) => (
            <article className="offer-tile" key={item.id} aria-labelledby={`offer-${item.id}`}>
              <img src={catalogImage(item)} alt="" loading="lazy" />
              <div className="offer-tile-copy">
                <span className="mono">{item.category}</span>
                <h3 id={`offer-${item.id}`}>{item.name}</h3>
                <OfferPrice item={item} />
                <div className="offer-tile-foot">
                  <span className="offer-chip">−{discountPercent(item)}% · Ahorras {formatPrice(savings(item))}</span>
                  <button type="button" className="offer-link" onClick={() => onOpen(item.id)} aria-label={`Ver paquete: ${item.name}`}>Ver paquete <Arrow /></button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <ul className="offers-perks">
          {perks.map((perk) => (
            <li key={perk.title}><LineIcon name={perk.icon} size={26} /><div><strong>{perk.title}</strong><span>{perk.detail}</span></div></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
