import { useState, useEffect, useRef } from "react"
import { Arrow, SectionLabel } from "./ui"
import chamber from "../assets/test-chamber.jpg"
import architecture from "../assets/architecture.jpg"
import repulsion from "../assets/repulsion.jpg"
const facilities = [
  {
    image: chamber,
    title: "Cámaras de pruebas",
    tag: "01 / EXPERIMENTACIÓN",
    description:
      "Cada superficie es una posibilidad. Cada recorrido, una nueva pregunta.",
    alt: "Cámara de Portal 2 con paneles blancos, vegetación y señalización de salida",
  },
  {
    image: architecture,
    title: "Ingeniería en movimiento",
    tag: "02 / INFRAESTRUCTURA",
    description:
      "Mecanismos, paneles y estructuras que transforman el entorno de pruebas.",
    alt: "Paneles mecánicos y pasarelas en las instalaciones de Portal 2",
  },
  {
    image: repulsion,
    title: "Ciencia aplicada",
    tag: "03 / INVESTIGACIÓN",
    description:
      "Materiales experimentales para encontrar formas inesperadas de avanzar.",
    alt: "Gel de repulsión azul en una cámara de pruebas de Portal 2",
  },
]
export default function Facilities() {
  const [selected, setSelected] = useState<number | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    if (selected !== null) dialog.current?.showModal()
    else dialog.current?.close()
  }, [selected])
  return (
    <section
      className="facilities section-space"
      id="instalaciones"
      aria-labelledby="facilities-title"
    >
      <div className="wrap">
        <SectionLabel number="06">
          BIENVENIDO AL CENTRO DE ENRIQUECIMIENTO
        </SectionLabel>
        <div className="section-heading">
          <h2 id="facilities-title">
            Aquí probamos
            <br />
            <span className="muted-heading">el mañana.</span>
          </h2>
          <p>
            Un vistazo al lugar donde la curiosidad se convierte en
            experimentación.
          </p>
        </div>
        <div className="facilities-grid">
          {facilities.map((facility, i) => (
            <button
              key={facility.title}
              className={`facility-card facility-${i}`}
              onClick={() => setSelected(i)}
              aria-label={`Ampliar imagen: ${facility.title}`}
            >
              <img
                src={facility.image}
                alt={facility.alt}
                loading="lazy"
                width="1920"
                height="1080"
              />
              <span className="facility-top mono">
                {facility.tag}
                <span className="facility-expand">
                  <Arrow diagonal />
                </span>
              </span>
              <span className="facility-copy">
                <strong>{facility.title}</strong>
                <span>{facility.description}</span>
              </span>
            </button>
          ))}
        </div>
        <div className="facility-caption mono">
          <span>ARCHIVO VISUAL / CAPTURAS OFICIALES DE PORTAL 2</span>
          <span>IMÁGENES © VALVE</span>
        </div>
        <dialog
          ref={dialog}
          className="image-dialog"
          onCancel={() => setSelected(null)}
          onClose={() => setSelected(null)}
          onClick={(event) => {
            if (event.target === dialog.current) setSelected(null)
          }}
          aria-labelledby="dialog-title"
        >
          {selected !== null && (
            <div className="dialog-content">
              <button
                className="dialog-close"
                onClick={() => setSelected(null)}
                aria-label="Cerrar imagen"
              >
                ×
              </button>
              <img
                src={facilities[selected].image}
                alt={facilities[selected].alt}
              />
              <div className="dialog-caption">
                <h3 id="dialog-title">{facilities[selected].title}</h3>
                <p>{facilities[selected].description}</p>
                <span className="mono">PORTAL 2 / © VALVE</span>
              </div>
            </div>
          )}
        </dialog>
      </div>
    </section>
  )
}
