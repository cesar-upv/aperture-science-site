import { Arrow, SectionLabel } from "./ui"

const contactEmail = "atencion@aperturescience.example"

export default function CustomerCare() {
  return (
    <section className="customer-care section-space" id="atencion" aria-labelledby="care-title">
      <div className="wrap">
        <SectionLabel number="08">ATENCIÓN AL CLIENTE</SectionLabel>
        <div className="care-heading">
          <div>
            <span className="mono care-kicker">TU EXPERIENCIA IMPORTA</span>
            <h2 id="care-title">Estamos para<br /><span>ayudarte.</span></h2>
          </div>
          <p>¿Tienes dudas sobre nuestros productos, condiciones de compra o entregas? Nuestro equipo te orienta para que elijas la solución adecuada.</p>
        </div>
        <div className="care-grid">
          <article className="care-card">
            <span className="mono care-index">01 / INFORMACIÓN</span>
            <h3>Hablemos de tu proyecto.</h3>
            <p>Escríbenos con el producto que te interesa y tus preguntas. También puedes explorar las diez opciones de compra en nuestro catálogo.</p>
            <p>Correo de atención: <a className="care-email" href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
            <a className="button button-blue" href="./catalogo.html">
              Ver productos y servicios <Arrow diagonal />
            </a>
            <a className="care-text-link" href={`mailto:${contactEmail}?subject=Consulta%20de%20producto`}>Enviar consulta por correo ↗</a>
          </article>
          <article className="care-card care-card-dark">
            <span className="mono care-index">02 / QUEJAS Y SUGERENCIAS</span>
            <h3>Tu opinión mueve la ciencia.</h3>
            <p>Si tuviste un inconveniente o tienes una propuesta, envíanos los detalles, el producto y tu número de pedido, si aplica.</p>
            <p>Al recibir tu mensaje, nuestro equipo confirmará la recepción, asignará un folio y se pondrá en contacto contigo para dar seguimiento y proponer una solución.</p>
            <a className="button button-orange" href={`mailto:${contactEmail}?subject=Queja%20o%20sugerencia`}>
              Enviar queja o sugerencia <Arrow diagonal />
            </a>
          </article>
        </div>
        <p className="care-disclaimer mono">CORREO DE DEMOSTRACIÓN: {contactEmail} · SUSTITUIR POR UN CANAL REAL ANTES DE PUBLICAR.</p>
      </div>
    </section>
  )
}
