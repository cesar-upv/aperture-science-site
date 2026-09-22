import { useState, useEffect, useRef } from "react"
import { Arrow, Icon, SectionLabel } from "./ui"
import companionCube from "../assets/companion-cube.png"
export default function PortalDemo() {
  const [phase, setPhase] = useState<"idle" | "ready" | "moving" | "arrived">(
    "idle",
  )
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current)
    },
    [],
  )
  function reset() {
    if (timer.current) clearTimeout(timer.current)
    setPhase("idle")
  }
  function advance() {
    if (phase === "idle") setPhase("ready")
    else if (phase === "ready") {
      setPhase("moving")
      timer.current = setTimeout(() => setPhase("arrived"), 1900)
    } else if (phase === "arrived") setPhase("ready")
  }
  const messages = {
    idle: "Cámara en espera. Activa los portales para comenzar.",
    ready: "Conexión establecida. El cubo está listo para atravesar.",
    moving: "Transferencia en curso…",
    arrived: "Prueba completada. El cubo ha llegado al otro lado.",
  }
  return (
    <section
      className="technology section-space"
      id="tecnologia"
      aria-labelledby="technology-title"
    >
      <div className="wrap">
        <SectionLabel number="02" light>
          MENOS TEORÍA. MÁS CIENCIA.
        </SectionLabel>
        <div className="section-heading">
          <h2 id="technology-title">
            Entenderlo es bueno.
            <br />
            <span>Atravesarlo, mejor.</span>
          </h2>
          <p>
            Una conexión que puedes explorar.
            <br />
            Activa los portales y envía el cubo al otro lado.
          </p>
        </div>
        <div className={`demo-panel demo-${phase}`}>
          <div className="demo-toolbar">
            <span>
              <i className="status-dot" /> CÁMARA DE PRUEBAS / INTERACTIVA
            </span>
            <span className="demo-state">
              {phase === "idle"
                ? "EN ESPERA"
                : phase === "moving"
                  ? "EN TRÁNSITO"
                  : "CONEXIÓN ESTABLE"}
            </span>
          </div>
          <div
            className="test-stage"
            role="img"
            aria-label={`Demostración esquemática de un cubo que cruza dos portales. ${messages[phase]}`}
          >
            <div className="chamber-wall" />
            <div className="chamber-floor" />
            <div className="ceiling-light light-one" />
            <div className="ceiling-light light-two" />
            <div className="chamber-sign">
              <span>02</span>
              <Icon name="portals" />
              <small>
                PRUEBA DE
                <br />
                CONEXIÓN ESPACIAL
              </small>
            </div>
            <div className="demo-portal demo-portal-blue">
              <span />
            </div>
            <div className="demo-portal demo-portal-orange">
              <span />
            </div>
            <div className="portal-label label-blue">
              A <span>PORTAL AZUL</span>
            </div>
            <div className="portal-label label-orange">
              B <span>PORTAL NARANJA</span>
            </div>
            <div className="transfer-line">
              {Array.from({ length: 8 }, (_, i) => (
                <span key={i} />
              ))}
            </div>
            <img
              className="demo-cube cube-start"
              src={companionCube}
              alt=""
              loading="lazy"
            />
            <img
              className="demo-cube cube-end"
              src={companionCube}
              alt=""
              loading="lazy"
            />
            <span className="stage-note">
              VISUALIZACIÓN CONCEPTUAL · CONEXIÓN BIDIRECCIONAL
            </span>
          </div>
          <div className="demo-controls">
            <div className="demo-status">
              <span className="mono">REGISTRO DE PRUEBA</span>
              <p aria-live="polite" role="status">
                {messages[phase]}
              </p>
            </div>
            <div className="demo-buttons">
              <button
                className="reset-button"
                onClick={reset}
                disabled={phase === "idle"}
                aria-label="Reiniciar demostración"
              >
                ↺
              </button>
              <button
                className="button button-orange"
                onClick={advance}
                disabled={phase === "moving"}
              >
                {phase === "idle"
                  ? "Activar portales"
                  : phase === "ready"
                    ? "Enviar cubo"
                    : phase === "moving"
                      ? "Atravesando…"
                      : "Repetir prueba"}
                <Arrow />
              </button>
            </div>
          </div>
        </div>
        <div className="steps">
          {[
            [
              "01",
              "Elige la superficie.",
              "Identifica una superficie compatible dentro de la cámara de pruebas.",
            ],
            [
              "02",
              "Conecta dos puntos.",
              "Coloca los portales azul y naranja en las ubicaciones que quieras conectar.",
            ],
            [
              "03",
              "Cambia de perspectiva.",
              "Atraviesa cualquiera de los dos. El otro lado está a un paso.",
            ],
          ].map(([num, title, copy]) => (
            <article key={num}>
              <span className="step-number">{num}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="demo-footnote mono">
          EL CUBO NO HA PRESENTADO QUEJAS. CONSIDERAMOS QUE ES UNA BUENA SEÑAL.
        </p>
      </div>
    </section>
  )
}
