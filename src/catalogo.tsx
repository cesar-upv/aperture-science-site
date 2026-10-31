import React, { useMemo, useState } from "react"
import ReactDOM from "react-dom/client"
import { Brand, Arrow } from "./components/ui"
import LineIcon from "./components/LineIcon"
import ProductCard from "./components/ProductCard"
import ProductDialog from "./components/ProductDialog"
import CatalogOffers from "./components/CatalogOffers"
import portalGun from "./assets/portal-gun.png"
import { catalog, catalogGroups, contactEmail, interestFreeMonths, promoValidity, type CatalogGroup } from "./data/catalog"
import "./index.css"
import "./styles/catalog.css"

type Filter = CatalogGroup | "todos"
type Sort = "destacados" | "menor" | "mayor"

const offersCount = catalog.filter((item) => item.prior).length

function CatalogPage() {
  const [filter, setFilter] = useState<Filter>("todos")
  const [sort, setSort] = useState<Sort>("destacados")
  const [selected, setSelected] = useState<string | null>(null)

  const visible = useMemo(() => {
    const items = catalog.filter((item) => filter === "todos" || item.group === filter)
    if (sort === "menor") return [...items].sort((a, b) => a.price - b.price)
    if (sort === "mayor") return [...items].sort((a, b) => b.price - a.price)
    return items
  }, [filter, sort])
  // Browse within the visible results when possible; offers can open items hidden by the filter.
  const dialogItems = visible.some((item) => item.id === selected) ? visible : catalog
  const filters = [{ id: "todos" as Filter, label: "Todos" }, ...catalogGroups]

  return (
    <>
      <a className="skip-link" href="#productos">Saltar al catálogo</a>
      <header className="catalog-header">
        <nav className="wrap catalog-nav" aria-label="Navegación del catálogo">
          <a href="./index.html#inicio" aria-label="Aperture Science, volver al inicio"><Brand /></a>
          <div className="catalog-nav-links">
            <a href="#ofertas">Ofertas</a>
            <a href="#productos">Catálogo</a>
            <a href="./index.html#atencion">Atención</a>
          </div>
          <a className="catalog-back" href="./index.html#inicio">← Volver al sitio</a>
        </nav>
      </header>
      <main id="catalogo">
        <section className="catalog-hero" aria-labelledby="catalog-hero-title">
          <div className="wrap">
            <div className="catalog-hero-art" aria-hidden="true">
              <span className="hero-ring ring-orange" />
              <span className="hero-ring ring-blue" />
              <img src={portalGun} alt="" />
            </div>
            <span className="mono catalog-eyebrow">APERTURE SCIENCE / NUESTROS PRODUCTOS Y SERVICIOS</span>
            <h1 id="catalog-hero-title">El futuro<br /><span>está en catálogo.</span></h1>
            <div className="catalog-intro">
              <div>
                <p>Diez formas de llevar la ciencia más allá de la cámara de pruebas. Explora dispositivos, compuestos, paquetes y servicios corporativos.</p>
                <div className="catalog-hero-actions">
                  <a className="button button-orange" href="#ofertas">Ver ofertas imperdibles <Arrow diagonal /></a>
                  <a className="catalog-text-link" href="#productos">Explorar catálogo <Arrow /></a>
                </div>
              </div>
              <dl className="catalog-hero-facts">
                <div><dt>Opciones de compra</dt><dd>{catalog.length}</dd></div>
                <div><dt>Ofertas activas</dt><dd>{offersCount}</dd></div>
                <div><dt>Meses sin intereses</dt><dd>{interestFreeMonths}</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <CatalogOffers onOpen={setSelected} />

        <section className="catalog-section wrap" id="productos" aria-labelledby="catalog-title">
          <div className="catalog-section-head">
            <div><span className="mono">CATÁLOGO DE PRODUCTOS Y SERVICIOS</span><h2 id="catalog-title">Elige tu próxima<br />gran idea.</h2></div>
            <p>Cada ficha muestra precio, cambios y devoluciones, y opciones de entrega. Toca la imagen para ampliarla.</p>
          </div>
          <div className="catalog-toolbar">
            <div className="catalog-filters" role="group" aria-label="Filtrar por tipo">
              {filters.map((option) => {
                const count = option.id === "todos" ? catalog.length : catalog.filter((item) => item.group === option.id).length
                return (
                  <button type="button" key={option.id} aria-pressed={filter === option.id} onClick={() => setFilter(option.id)}>
                    {option.label}<span className="mono">{count}</span>
                  </button>
                )
              })}
            </div>
            <label className="catalog-sort">
              <span className="mono">Ordenar</span>
              <select value={sort} onChange={(event) => setSort(event.target.value as Sort)}>
                <option value="destacados">Destacados</option>
                <option value="menor">Precio: menor a mayor</option>
                <option value="mayor">Precio: mayor a menor</option>
              </select>
            </label>
          </div>
          <p className="catalog-count mono" aria-live="polite">Mostrando {visible.length} de {catalog.length} opciones</p>
          <div className="catalog-grid">
            {visible.map((item) => (
              <ProductCard key={item.id} item={item} position={catalog.indexOf(item) + 1} total={catalog.length} onOpen={() => setSelected(item.id)} />
            ))}
            {/* Fills the free cells of the last row; CSS reads the remainder for 3 and 2 columns. */}
            <aside className="catalog-custom" data-rem3={(3 - (visible.length % 3)) % 3} data-rem2={visible.length % 2} aria-labelledby="custom-title">
              <span className="mono">PROYECTOS ESPECIALES</span>
              <h3 id="custom-title">¿Necesitas una solución a la medida?</h3>
              <p>Configuramos paquetes para laboratorios, naves industriales y corporativos, con instalación y capacitación.</p>
              <div className="catalog-custom-actions">
                <a className="button button-orange" href={`mailto:${contactEmail}?subject=${encodeURIComponent("Proyecto a la medida")}`}>Solicitar propuesta <Arrow diagonal /></a>
                <a className="catalog-custom-link" href="./index.html#chat-atencion">Hablar con un asesor <Arrow /></a>
              </div>
            </aside>
          </div>
          <p className="catalog-note">Precios en pesos mexicanos (MXN), IVA incluido. Promociones vigentes hasta el {promoValidity} o hasta agotar existencias. Imágenes ilustrativas.</p>
        </section>

        <section className="catalog-contact" aria-labelledby="catalog-contact-title">
          <div className="wrap">
            <div>
              <span className="mono">¿NECESITAS ORIENTACIÓN?</span>
              <h2 id="catalog-contact-title">Hablemos de tu proyecto.</h2>
              <p>Un asesor te ayuda a elegir, cotizar y programar la entrega. Escríbenos a <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
            </div>
            <div className="catalog-contact-actions">
              <a className="button button-orange" href="./index.html#chat-atencion">Abrir chat de atención <LineIcon name="chat" /></a>
              <a className="button catalog-contact-ghost" href="./index.html#quejas">Quejas y sugerencias <Arrow diagonal /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="catalog-footer"><div className="wrap"><span>APERTURE SCIENCE / CATÁLOGO DE PRODUCTOS Y SERVICIOS</span><a href="./index.html#inicio">Volver al inicio ↑</a></div></footer>
      <ProductDialog items={dialogItems} selectedId={selected} onSelect={setSelected} onClose={() => setSelected(null)} />
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")!).render(<React.StrictMode><CatalogPage /></React.StrictMode>)
