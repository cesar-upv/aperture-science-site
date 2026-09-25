import { useRef, useState } from "react"
import type { CSSProperties, PointerEvent } from "react"
import { Arrow } from "./ui"
import portalGun from "../assets/portal-gun.png"
import chamber from "../assets/test-chamber.jpg"
import architecture from "../assets/architecture.jpg"

export default function Hero() {
  const [portal, setPortal] = useState<"blue" | "orange">("blue")
  const art = useRef<HTMLDivElement>(null)
  function move(event: PointerEvent<HTMLDivElement>) {
    if (
      event.pointerType !== "mouse" ||
      !event.currentTarget.closest(".motion-on")
    )
      return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    event.currentTarget.style.setProperty("--tilt-x", `${-y * 7}deg`)
    event.currentTarget.style.setProperty("--tilt-y", `${x * 9}deg`)
  }
  function reset() {
    art.current?.style.setProperty("--tilt-x", "0deg")
    art.current?.style.setProperty("--tilt-y", "0deg")
  }
  const orange = portal === "orange"
  return (
    <section
      className={`hero portal-state-${portal}`}
      id="inicio"
      aria-labelledby="hero-title"
      style={{ "--hero-background": `url(${architecture})` } as CSSProperties}
    >
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="hero-horizon" aria-hidden="true" />
      <div className="wrap hero-main">
        <div className="hero-copy">
          <div className="hero-edition mono">
            <span>ASHPD</span>
            <span>EL SIGUIENTE SALTO DE LA CIENCIA</span>
          </div>
          <h1 id="hero-title">
            La realidad.
            <br />
            <span className="hero-blue">
              Sin límites<span className="orange-period">.</span>
            </span>
          </h1>
          <p>
            El espacio ya no es una barrera.
            <br />
            Conecta dos puntos, cambia de perspectiva y descubre lo que hay al
            otro lado.
          </p>
          <div className="hero-actions">
            <a className="button button-blue" href="#portal-gun">
              Explorar Portal Gun <Arrow diagonal />
            </a>
          </div>
        </div>
        <div
          ref={art}
          className="hero-art"
          role="group"
          onPointerMove={move}
          onPointerLeave={reset}
          aria-label="Exhibición interactiva de la Portal Gun"
        >
          <div className="art-grid" aria-hidden="true" />
          <div className="orbital-ticks" aria-hidden="true" />
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="portal-coordinate coordinate-a" aria-hidden="true">
            A<span>↘</span>
          </div>
          <div className="portal-coordinate coordinate-b" aria-hidden="true">
            <span>↗</span>B
          </div>
          <div className="device-parallax">
            <div className="hero-portal">
              <img src={chamber} alt="" />
              <div className="portal-depth" />
              <div className="portal-sweep" />
            </div>
            <div className="orange-echo" />
            <div className="gun-shadow" />
            <div className="energy-tether" />
            <img
              className="hero-gun"
              src={portalGun}
              alt="Portal Gun de Aperture: carcasa blanca, núcleo negro y tres pinzas mecánicas"
              width="779"
              height="589"
              fetchPriority="high"
            />
          </div>
          <div className="hero-portal-selector">
            <span className="mono" aria-live="polite">
              {orange ? "02 / ESPECTRO NARANJA" : "01 / ESPECTRO AZUL"}
            </span>
            <div role="group" aria-label="Iluminación del portal principal">
              <button
                aria-label="Portal azul"
                aria-pressed={!orange}
                onClick={() => setPortal("blue")}
              >
                <i className="swatch swatch-blue" />
                <span>AZUL</span>
              </button>
              <button
                aria-label="Portal naranja"
                aria-pressed={orange}
                onClick={() => setPortal("orange")}
              >
                <i className="swatch swatch-orange" />
                <span>NARANJA</span>
              </button>
            </div>
          </div>
          <span className="vertical-note">
            EL FUTURO NO ESTÁ LEJOS. ESTÁ CONECTADO.
          </span>
        </div>
      </div>
      <div className="wrap hero-bottom">
        <div className="hero-facts">
          <div>
            <strong>01</strong>
            <span>DISPOSITIVO</span>
          </div>
          <div>
            <strong>02</strong>
            <span>PORTALES CONECTADOS</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>NUEVAS PERSPECTIVAS</span>
          </div>
        </div>
        <div className="hero-system">
          <i className="status-dot" /> APERTURE / CIENCIA EXPERIMENTAL
        </div>
      </div>
    </section>
  )
}
