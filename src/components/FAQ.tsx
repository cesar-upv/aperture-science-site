import { SectionLabel } from "./ui"
const faqs = [
  [
    "¿Qué es exactamente la Portal Gun?",
    "Es el dispositivo ficticio de Aperture Science en los videojuegos Portal y Portal 2. Permite colocar dos portales conectados y manipular objetos del entorno durante las pruebas.",
  ],
  [
    "¿Los portales funcionan en ambas direcciones?",
    "Sí. Puedes entrar por el azul y salir por el naranja, o hacerlo al revés. Los colores identifican cada portal; no limitan la dirección del recorrido.",
  ],
  [
    "¿Puedo abrir un portal en cualquier superficie?",
    "No. La superficie debe ser compatible, plana y suficientemente grande. Dentro del juego, reconocer dónde colocar cada portal es parte del desafío.",
  ],
  [
    "¿Cuántos portales se pueden abrir a la vez?",
    "El dispositivo mantiene un portal de cada color. Al colocar uno nuevo, se sustituye el anterior del mismo color y se conserva la conexión con el otro.",
  ],
  [
    "¿Puedo comprar el dispositivo o reservar una prueba real?",
    "Este sitio es un proyecto conceptual de fans, no una tienda ni una página oficial de Valve. La demostración y el formulario son simulaciones: no realizan compras, reservas ni envían datos.",
  ],
]
export default function FAQ() {
  return (
    <section
      className="faq section-space"
      id="preguntas"
      aria-labelledby="faq-title"
    >
      <div className="wrap faq-layout">
        <div>
          <SectionLabel number="07">ANTES DE ENTRAR</SectionLabel>
          <h2 id="faq-title">
            Buenas
            <br />
            preguntas.
          </h2>
          <p>
            La curiosidad está permitida.
            <br />
            De hecho, la recomendamos.
          </p>
          <div className="faq-sign" aria-hidden="true">
            ?
          </div>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], i) => (
            <details key={question}>
              <summary>
                <span className="mono">0{i + 1}</span>
                <h3>{question}</h3>
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
