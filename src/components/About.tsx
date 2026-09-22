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
            <p className="lead">Investigamos cómo conectar espacios y ampliar las posibilidades de nuestro entorno.</p>
            <a className="text-link" href="#estrategia">
              Explorar el plan empresarial <Arrow diagonal />
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
              Cuestionar. Probar.
              <br />
              Investigar. Aprender.
            </h3>
            <p>
              Cuestionamos, probamos e investigamos para aprender continuamente,
              combinando curiosidad, precisión y creatividad en cada solución.
            </p>

          </article>
        </div>

      </div>
    </section>
  )
}
