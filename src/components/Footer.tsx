import { Arrow, Brand } from "./ui"
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
            { label: "Contacto", id: "contacto" },
          ].map((link) => (
            <a href={`#${link.id}`} key={link.id}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <p>
            Proyecto conceptual de fans inspirado en <strong>Portal</strong> y{" "}
            <strong>Portal 2</strong>. Portal y Aperture Science pertenecen a
            Valve. Sin afiliación oficial. Sin venta real de productos.
          </p>
          <div className="footer-sources">
            <a
              href="https://store.steampowered.com/app/620/Portal_2/"
              target="_blank"
              rel="noreferrer"
            >
              CONOCE EL VIDEOJUEGO <Arrow diagonal />
            </a>
            <a
              href="https://theportalwiki.com/wiki/Handheld_Portal_Device"
              target="_blank"
              rel="noreferrer"
            >
              RECURSOS: PORTAL WIKI <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="footer-last mono">
          <span>APERTURE SCIENCE / PROYECTO CONCEPTUAL</span>
          <span>
            <i className="status-dot" /> LA CIENCIA CONTINÚA.
          </span>
        </div>
      </div>
    </footer>
  )
}
