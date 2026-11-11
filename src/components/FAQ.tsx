import { SectionLabel } from "./ui"
const faqs = [
  [
    "¿Qué es exactamente la Portal Gun?",
    "El dispositivo de Aperture Science crea dos portales conectados y permite mover objetos durante las pruebas.",
  ],
  [
    "¿Los portales funcionan en ambas direcciones?",
    "Sí. Puedes entrar por cualquiera y salir por el otro. Los colores solo identifican cada portal.",
  ],
  [
    "¿Puedo abrir un portal en cualquier superficie?",
    "No. Debe ser compatible, plana y suficientemente grande. Identificarla forma parte de la prueba.",
  ],
  [
    "¿Cuántos portales se pueden abrir a la vez?",
    "Uno de cada color. Al abrir otro, reemplazas el del mismo color sin perder la conexión.",
  ],
  [
    "¿Cómo se participa en el programa de pruebas?",
    "Recursos Humanos selecciona y entrevista voluntarios. Para participar debes conocer las condiciones, completar tu expediente y dar tu consentimiento.",
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
            La curiosidad es bienvenida.
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
