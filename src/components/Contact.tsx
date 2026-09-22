import { useState, useEffect, useRef } from "react"
import type { FormEvent } from "react"
import { Arrow, SectionLabel } from "./ui"
export default function Contact() {
  const [sent, setSent] = useState(false)
  const success = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (sent) success.current?.focus()
  }, [sent])
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }
  return (
    <section
      className="contact section-space"
      id="contacto"
      aria-labelledby="contact-title"
    >
      <div className="wrap contact-layout">
        <div className="contact-copy">
          <SectionLabel number="07" light>
            TU SIGUIENTE GRAN IDEA
          </SectionLabel>
          <h2 id="contact-title">
            Da el
            <br />
            <span>siguiente</span>
            <br />
            paso<span className="orange-period">.</span>
          </h2>
          <p>
            La próxima posibilidad empieza con tu curiosidad. Explora cómo sería
            tu primera prueba con Aperture Science.
          </p>
          <div className="contact-bottom mono">
            <span className="status-dot" /> DEPARTAMENTO DE EXPERIMENTACIÓN
          </div>
        </div>
        <div className="contact-form-panel">
          {sent ? (
            <div
              className="form-success"
              ref={success}
              tabIndex={-1}
              role="status"
            >
              <div className="success-orbit">✓</div>
              <span className="mono">DEMOSTRACIÓN COMPLETADA</span>
              <h3>
                Curiosidad
                <br />
                confirmada.
              </h3>
              <p>
                Has completado el formulario de prueba. No se ha enviado ni
                almacenado ningún dato y no se ha realizado una reserva.
              </p>
              <p className="success-aside">
                Aperture agradece su interés por la ciencia.
              </p>
              <button
                className="button button-blue"
                onClick={() => setSent(false)}
              >
                Volver al formulario <Arrow />
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="form-heading">
                <span className="mono">SOLICITUD DE DEMOSTRACIÓN</span>
                <span className="form-badge">SIMULACIÓN</span>
              </div>
              <h3>Comienza por aquí.</h3>
              <p className="form-intro" id="form-description">
                Prueba la experiencia. Este formulario es conceptual: los datos
                no se envían ni se guardan.
              </p>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="full-name">
                    Nombre <span>*</span>
                  </label>
                  <input
                    id="full-name"
                    name="nombre"
                    autoComplete="name"
                    placeholder="Tu nombre completo"
                    required
                    maxLength={100}
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">
                    Correo electrónico <span>*</span>
                  </label>
                  <input
                    id="email"
                    name="correo"
                    type="email"
                    autoComplete="email"
                    placeholder="tu@correo.com"
                    required
                    maxLength={254}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="organization">
                  Organización <span className="optional">OPCIONAL</span>
                </label>
                <input
                  id="organization"
                  name="organizacion"
                  autoComplete="organization"
                  placeholder="Empresa, institución o proyecto"
                  maxLength={150}
                />
              </div>
              <div className="field">
                <label htmlFor="interest">¿Qué te gustaría explorar?</label>
                <select id="interest" name="interes" defaultValue="producto">
                  <option value="producto">Tecnología de portales</option>
                  <option value="investigacion">
                    Investigación y desarrollo
                  </option>
                  <option value="instalaciones">Instalaciones y pruebas</option>
                  <option value="general">Información general</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">
                  Tu idea <span className="optional">OPCIONAL</span>
                </label>
                <textarea
                  id="message"
                  name="mensaje"
                  rows={3}
                  placeholder="Cuéntanos qué hay al otro lado de tu idea…"
                  maxLength={2000}
                />
              </div>
              <button
                className="button button-blue submit-button"
                type="submit"
                aria-describedby="form-description"
              >
                Probar solicitud de demostración <Arrow diagonal />
              </button>
              <div className="form-footnote mono">
                * CAMPOS OBLIGATORIOS · SIN ENVÍO DE DATOS
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
