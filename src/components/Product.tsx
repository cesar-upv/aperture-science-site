import { useState } from "react"
import { Icon, SectionLabel } from "./ui"
import portalGun from "../assets/portal-gun.png"
const productFeatures = [
  {
    title: "Dos puntos. Un mismo espacio.",
    copy: "Abre un portal azul y uno naranja. Ambos conectan sus ubicaciones y permiten atravesarlos en las dos direcciones.",
    icon: "portals" as const,
  },
  {
    title: "Piensa fuera del recorrido.",
    copy: "Transforma una pared en un acceso y una caída en una nueva trayectoria. El entorno forma parte de la solución.",
    icon: "arrow" as const,
  },
  {
    title: "Todo un laboratorio en tus manos.",
    copy: "Coloca portales en superficies compatibles y manipula objetos para resolver cada prueba desde otra perspectiva.",
    icon: "cube" as const,
  },
]
const hotspots = [
  {
    label: "Emisor",
    detail: "Proyecta el portal seleccionado sobre una superficie compatible.",
    className: "spot-emitter",
  },
  {
    label: "Carcasa",
    detail:
      "La silueta blanca y el mecanismo expuesto identifican al dispositivo de Aperture.",
    className: "spot-shell",
  },
  {
    label: "Manipulación",
    detail:
      "Permite sostener y desplazar objetos cercanos durante las pruebas.",
    className: "spot-claw",
  },
]
export default function Product() {
  const [mode, setMode] = useState<"blue" | "orange">("blue")
  const [spot, setSpot] = useState(0)
  return (
    <section
      className="product section-space"
      id="portal-gun"
      aria-labelledby="product-title"
    >
      <div className="wrap">
        <SectionLabel number="01">
          TECNOLOGÍA QUE CAMBIA LAS REGLAS
        </SectionLabel>
        <div className="section-heading">
          <h2 id="product-title">
            Un dispositivo.
            <br />
            <span className="muted-heading">Infinitos caminos.</span>
          </h2>
          <p>
            Presentamos el Dispositivo Portátil de Portales de Aperture Science.
            Puedes llamarlo <strong>Portal Gun.</strong>
          </p>
        </div>
        <div className="product-layout">
          <div className={`product-view mode-${mode}`}>
            <div className="product-view-top">
              <span className="mono">ASHPD / EXPLORADOR DE PRODUCTO</span>
              <span className="mono">01—03</span>
            </div>
            <span className="product-watermark" aria-hidden="true">
              ASHPD
            </span>
            <div className="product-ring" />
            <div className="product-device">
              <img
                src={portalGun}
                alt="Portal Gun; selecciona los puntos para explorar sus componentes"
                width="779"
                height="589"
                loading="lazy"
              />
              {hotspots.map((item, i) => (
                <button
                  key={item.label}
                  className={`hotspot ${item.className} ${
                    spot === i ? "selected" : ""
                  }`}
                  onClick={() => setSpot(i)}
                  aria-label={`Explorar ${item.label}`}
                  aria-pressed={spot === i}
                >
                  +
                </button>
              ))}
            </div>
            <div className="product-hotspot-info" aria-live="polite">
              <span className="mono">
                0{spot + 1} / {hotspots[spot].label.toUpperCase()}
              </span>
              <p>{hotspots[spot].detail}</p>
            </div>
            <div className="mode-selector">
              <span className="mono">COLOR DEL PORTAL</span>
              <div role="group" aria-label="Color de iluminación">
                <button
                  aria-pressed={mode === "blue"}
                  onClick={() => setMode("blue")}
                >
                  <i className="swatch swatch-blue" />
                  Azul
                </button>
                <button
                  aria-pressed={mode === "orange"}
                  onClick={() => setMode("orange")}
                >
                  <i className="swatch swatch-orange" />
                  Naranja
                </button>
              </div>
            </div>
          </div>
          <div className="product-details">
            {productFeatures.map((feature, i) => (
              <article className="feature-row" key={feature.title}>
                <div className="feature-icon">
                  <Icon name={feature.icon} />
                </div>
                <div>
                  <span className="mono feature-index">
                    CAPACIDAD / 0{i + 1}
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </div>
              </article>
            ))}
            <p className="product-note mono">
              TECNOLOGÍA FICTICIA DEL UNIVERSO PORTAL.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
