import { Arrow, SectionLabel } from "./ui"
import LineIcon from "./LineIcon"
import CareChat from "./CareChat"
import FeedbackForm from "./FeedbackForm"
import { channels, followUpSteps } from "../data/customer-care"

export default function CustomerCare() {
  return (
    <section className="customer-care section-space" id="atencion" aria-labelledby="care-title">
      <div className="wrap">
        <SectionLabel number="08">ATENCIÓN AL CLIENTE</SectionLabel>
        <div className="care-heading">
          <div>
            <span className="mono care-kicker">01 / TU EXPERIENCIA IMPORTA</span>
            <h2 id="care-title">Estamos para<br /><span>ayudarte.</span></h2>
          </div>
          <div className="care-heading-copy">
            <p>¿Tienes dudas sobre nuestros productos, condiciones de compra o entregas? Escríbenos o abre el chat: te orientamos para elegir la solución adecuada.</p>
            <a className="button button-blue" href="./catalogo.html">Ver productos y servicios <Arrow diagonal /></a>
          </div>
        </div>
        <div className="care-help">
          <ul className="care-channels" aria-label="Medios de contacto">
            {channels.map((channel) => (
              <li className="care-channel" key={channel.id}>
                <span className="care-channel-icon"><LineIcon name={channel.icon} size={24} /></span>
                <div>
                  <h3>{channel.title}</h3>
                  {channel.id === "correo"
                    ? <p className="care-email">{channel.detail.split("@")[0]}@<wbr />{channel.detail.split("@")[1]}</p>
                    : <p>{channel.detail}</p>}
                  <span className="mono care-channel-meta"><LineIcon name="clock" size={14} />{channel.meta}</span>
                </div>
                {channel.action && <a className="care-channel-action" href={channel.action.href}>{channel.action.label} <Arrow diagonal /></a>}
              </li>
            ))}
          </ul>
          <CareChat />
        </div>

        <div className="care-feedback" id="quejas" aria-labelledby="feedback-title">
          <div className="care-feedback-copy">
            <span className="mono care-index">02 / TU OPINIÓN MUEVE LA CIENCIA</span>
            <h3 id="feedback-title">Atención a quejas<br />y sugerencias.</h3>
            <p>Si tuviste algún inconveniente con nuestros productos o servicios, o tienes una idea para mejorar, envíanos tu caso por este formulario. Nuestro equipo lo revisará y se pondrá en contacto contigo para ofrecerte una solución.</p>
            <ol className="care-steps" aria-label="Seguimiento de tu solicitud">
              {followUpSteps.map((step, i) => (
                <li key={step.title}>
                  <span className="care-step-number mono">0{i + 1}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <span>{step.detail}</span>
                  </div>
                  <span className="care-step-time mono">{step.time}</span>
                </li>
              ))}
            </ol>
          </div>
          <FeedbackForm />
        </div>
      </div>
    </section>
  )
}
