import { Brand } from "./ui"
import { navLinks } from "../data/navigation"
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-main">
          <a href="#inicio" aria-label="Volver al inicio">
            <Brand inverted />
          </a>
          <p>
            La ciencia continúa.
            <br />
            <span>La curiosidad, también.</span>
          </p>
          <a className="back-top" href="#inicio">
            VOLVER ARRIBA <span>↑</span>
          </a>
        </div>
        <div className="footer-links">
          {[
            ...navLinks,
            { label: "Preguntas frecuentes", id: "preguntas" },
          ].map((link) => (
            <a href={`#${link.id}`} key={link.id}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <p>
            Aperture Science · Investigación, desarrollo y tecnologías experimentales.
          </p>
        </div>
        <div className="footer-last mono">
          <span>APERTURE SCIENCE / INVESTIGACIÓN Y DESARROLLO</span>
          <span>
            <i className="status-dot" /> LA CIENCIA CONTINÚA.
          </span>
        </div>
      </div>
    </footer>
  )
}
