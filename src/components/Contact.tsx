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
          <SectionLabel number="08" light>
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
                <div>
                  <label htmlFor="nombre">Tu nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    autoComplete="name"
                    placeholder="Dra. Caroline"
                    required
                    aria-describedby="form-description"
                  />
                </div>
                <div>
                  <label htmlFor="organizacion">Organización</label>
                  <input
                    type="text"
                    id="organizacion"
                    name="organizacion"
                    autoComplete="organization"
                    placeholder="Aperture Laboratories"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="correo">Correo de contacto</label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  autoComplete="email"
                  placeholder="investigacion@aperture.com"
                  required
                />
              </div>
              <fieldset className="form-fieldset">
                <legend>Interés principal</legend>
                <div className="radio-pills">
                  <label>
                    <input
                      type="radio"
                      name="interes"
                      value="innovacion"
                      defaultChecked
                    />
                    <span>Investigación e innovación</span>
                  </label>
                  <label>
                    <input type="radio" name="interes" value="logistica" />
                    <span>Aplicaciones industriales</span>
                  </label>
                  <label>
                    <input type="radio" name="interes" value="curiosidad" />
                    <span>Curiosidad científica</span>
                  </label>
                </div>
              </fieldset>
              <div>
                <label htmlFor="comentarios">
                  ¿Cómo imaginas aplicar esta tecnología?
                </label>
                <textarea
                  id="comentarios"
                  name="comentarios"
                  rows={4}
                  placeholder="Nos interesa conocer qué problema quieres resolver..."
                  required
                />
              </div>
              <button type="submit" className="button button-orange submit-btn">
                Completar simulación <Arrow />
              </button>
              <p className="form-note">
                Formulario demostrativo. No recopilamos datos personales.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
