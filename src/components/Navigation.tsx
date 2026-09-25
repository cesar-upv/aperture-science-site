import { useState, useEffect, useRef } from "react"
import { Arrow, Brand } from "./ui"
import { navLinks } from "../data/navigation"
export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")
  const toggle = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        }),
      { rootMargin: "-15% 0px -65% 0px" },
    )
    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    const onResize = () => {
      if (window.innerWidth > 1250) setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    window.addEventListener("resize", onResize)
    return () => {
      document.removeEventListener("keydown", onKey)
      window.removeEventListener("resize", onResize)
    }
  }, [open])
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <nav className="wrap nav-bar" aria-label="Navegación principal">
          <a
            href="#inicio"
            className="brand-link"
            onClick={() => setOpen(false)}
            aria-label="Aperture Science, inicio"
          >
            <Brand />
          </a>
          <div className="desktop-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                className={active === link.id ? "active" : ""}
                href={`#${link.id}`}
                aria-current={active === link.id ? "location" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen(!open)}
          >
            <span className={open ? "is-open" : ""} />
            <span className={open ? "is-open" : ""} />
          </button>
        </nav>
        <div id="mobile-menu" className="mobile-menu" hidden={!open}>
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
            >
              <span className="mono">0{i + 1}</span>
              {link.label}
              <Arrow diagonal />
            </a>
          ))}
        </div>
      </header>
    </>
  )
}
