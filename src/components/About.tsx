import { Arrow, SectionLabel } from "./ui"
export default function About() {
  return (
    <section
      className="about section-space"
      id="nosotros"
      aria-labelledby="about-title"
    >
      <div className="wrap">
        <SectionLabel number="03">FILOSOFÍA EMPRESARIAL</SectionLabel>
        <div className="about-intro">
          <div>
            <h2 id="about-title">
              La ciencia de
              <br />
              ir <span>más allá.</span>
            </h2>
            <div className="about-signature">
              <span className="tiny-cross">+</span> APERTURE SCIENCE /
              INVESTIGACIÓN Y DESARROLLO
            </div>
          </div>
          <div className="about-description">
            <p className="lead">
              Las grandes ideas empiezan con una pregunta.
              <br />
              Las nuestras, con una cámara de pruebas.
            </p>
            <p>
              En Aperture Science imaginamos nuevas formas de relacionarnos con
              el espacio. Combinamos investigación, ingeniería y una curiosidad
              persistente para convertir lo imposible en el siguiente
              experimento.
            </p>
            <a className="text-link" href="#instalaciones">
              Entra en nuestras instalaciones <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="values-grid">
          <article className="value-card">
            <span className="mono">01 / MISIÓN</span>
            <div className="value-graphic mission-graphic" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>+</span>
            </div>
            <h3>
              Hacer posible
              <br />
              lo impensable.
            </h3>
            <p>
              Desarrollar tecnologías experimentales que amplíen las
              posibilidades de interacción con nuestro entorno.
            </p>
          </article>
          <article className="value-card">
            <span className="mono">02 / VISIÓN</span>
            <div className="value-graphic vision-graphic" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>
            <h3>
              Un mundo
              <br />
              sin distancias.
            </h3>
            <p>
              Imaginar un futuro donde conectar espacios abra nuevas
              oportunidades para la ciencia y las personas.
            </p>
          </article>
          <article className="value-card">
            <span className="mono">03 / VALORES</span>
            <div className="value-graphic values-graphic" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>
            <h3>
              Cuestionar.
              <br />
              Probar. Aprender.
            </h3>
            <p>
              Curiosidad para preguntar, precisión para investigar y
              responsabilidad para experimentar. La innovación se construye en
              equipo.
            </p>
            <ul className="value-tags">
              <li>Innovación</li>
              <li>Precisión</li>
              <li>Curiosidad</li>
              <li>Responsabilidad</li>
              <li>Colaboración</li>
            </ul>
          </article>
        </div>
        <p className="editorial-note mono">
          DECLARACIONES CORPORATIVAS CREADAS PARA ESTE PROYECTO CONCEPTUAL.
        </p>
      </div>
    </section>
  )
}
