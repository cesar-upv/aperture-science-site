import React from "react"
import ReactDOM from "react-dom/client"
import { Brand, Arrow } from "./components/ui"
import { catalog } from "./data/catalog"
import "./index.css"
import "./styles/catalog.css"

function CatalogPage() {
  return (
    <>
      <a className="skip-link" href="#catalogo">Saltar al catálogo</a>
      <header className="catalog-header">
        <nav className="wrap catalog-nav" aria-label="Navegación del catálogo">
          <a href="./index.html#inicio" aria-label="Aperture Science, volver al inicio"><Brand /></a>
          <a className="catalog-back" href="./index.html#atencion">← Volver al sitio</a>
        </nav>
      </header>
      <main id="catalogo">
        <section className="catalog-hero">
          <div className="wrap">
            <span className="mono catalog-eyebrow">APERTURE SCIENCE / SOLUCIONES DISPONIBLES</span>
            <h1>El futuro<br /><span>está en catálogo.</span></h1>
            <div className="catalog-intro"><p>Diez formas de llevar la ciencia más allá de la cámara de pruebas. Explora dispositivos, compuestos, paquetes y servicios corporativos.</p><span className="mono">10 OPCIONES DE COMPRA · PRECIOS EN MXN</span></div>
          </div>
        </section>
        <section className="catalog-section wrap" aria-labelledby="catalog-title">
          <div className="catalog-section-head"><div><span className="mono">01 / NUESTROS PRODUCTOS Y SERVICIOS</span><h2 id="catalog-title">Elige tu próxima<br />gran idea.</h2></div><p>Consulta características, precios, condiciones de compra y opciones de entrega en cada ficha.</p></div>
          <div className="catalog-grid">
            {catalog.map((item, index) => (
              <article className="catalog-card" key={item.name}>
                <div className="catalog-image"><img src={item.image} alt={item.imageDescription} loading="lazy" />{item.offer && <span className="catalog-offer">{item.offer}</span>}<span className="catalog-number mono">{String(index + 1).padStart(2, "0")} / 10</span></div>
                <div className="catalog-card-body">
                  <span className="mono catalog-category">{item.category}</span>
                  <h3>{item.name}</h3>
                  <p className="catalog-description">{item.description}</p>
                  <div className="catalog-price">{item.prior && <span className="catalog-prior">Antes: {item.prior}</span>}<strong>{item.price}</strong></div>
                  <dl className="catalog-terms"><div><dt>Condiciones de compra</dt><dd>{item.conditions}</dd></div><div><dt>Entrega</dt><dd>{item.delivery}</dd></div></dl>
                  <a className="catalog-inquire" href={`mailto:atencion@aperturescience.example?subject=${encodeURIComponent(`Consulta: ${item.name}`)}`}>Consultar disponibilidad <Arrow diagonal /></a>
                </div>
              </article>
            ))}
          </div>
          <p className="catalog-note mono">CATÁLOGO CONCEPTUAL PARA PRESENTACIÓN ACADÉMICA. EL CORREO DE CONTACTO ES DE DEMOSTRACIÓN.</p>
        </section>
        <section className="catalog-contact"><div className="wrap"><span className="mono">¿NECESITAS ORIENTACIÓN?</span><h2>Hablemos de tu proyecto.</h2><p>Revisa nuestros canales de atención, quejas y sugerencias en el sitio principal.</p><a className="button button-orange" href="./index.html#atencion">Ir a atención al cliente <Arrow diagonal /></a></div></section>
      </main>
      <footer className="catalog-footer"><div className="wrap"><span>APERTURE SCIENCE / CATÁLOGO</span><a href="./index.html#inicio">Volver al inicio ↑</a></div></footer>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")!).render(<React.StrictMode><CatalogPage /></React.StrictMode>)
