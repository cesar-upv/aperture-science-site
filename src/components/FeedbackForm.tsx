import { useEffect, useRef, useState, type FormEvent } from "react"
import { Arrow } from "./ui"
import LineIcon from "./LineIcon"
import { catalog } from "../data/catalog"
import {
  createFolio, emptyRequest, minMessageLength, requestMailto, requestTypes, validateRequest,
  type FeedbackErrors, type FeedbackRequest,
} from "../data/customer-care"

const fieldOrder: (keyof FeedbackRequest)[] = ["name", "email", "message", "consent"]

export default function FeedbackForm() {
  const [request, setRequest] = useState<FeedbackRequest>(emptyRequest)
  const [errors, setErrors] = useState<FeedbackErrors>({})
  const [sent, setSent] = useState<{ folio: string; href: string; summary: string } | null>(null)
  const done = useRef<HTMLDivElement>(null)
  useEffect(() => { if (sent) done.current?.focus() }, [sent])

  const update = <K extends keyof FeedbackRequest>(key: K, value: FeedbackRequest[K]) => {
    setRequest((current) => ({ ...current, [key]: value }))
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }))
  }
  const describedBy = (key: keyof FeedbackRequest, hint?: string) =>
    [hint, errors[key] && `fb-${key}-error`].filter(Boolean).join(" ") || undefined

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const found = validateRequest(request)
    setErrors(found)
    const first = fieldOrder.find((key) => found[key])
    if (first) {
      document.getElementById(`fb-${first}`)?.focus()
      return
    }
    const folio = createFolio(request.type, new Date(), Math.floor(Math.random() * 10_000))
    const href = requestMailto(request, folio)
    const type = requestTypes.find((item) => item.id === request.type)!.label
    setSent({ folio, href, summary: `${type} · ${request.product || "Atención general"}` })
    window.location.href = href
  }

  if (sent) {
    return (
      <div className="care-form care-form-done" role="status" ref={done} tabIndex={-1}>
        <span className="care-done-icon"><LineIcon name="check" size={30} /></span>
        <span className="mono">FOLIO DE SEGUIMIENTO</span>
        <strong className="care-folio">{sent.folio}</strong>
        <span className="care-summary">{sent.summary}</span>
        <p>Abrimos tu aplicación de correo con la solicitud y el folio. Envía el mensaje para que nuestro equipo la reciba; confirmaremos la recepción y te contactaremos en un máximo de 5 días hábiles.</p>
        <div className="care-done-actions">
          <a className="button button-blue" href={sent.href}>Abrir correo de nuevo <Arrow diagonal /></a>
          <button type="button" className="care-text-button" onClick={() => { setRequest(emptyRequest); setSent(null) }}>Registrar otra solicitud</button>
        </div>
      </div>
    )
  }

  return (
    <form className="care-form" onSubmit={submit} noValidate aria-labelledby="feedback-form-title">
      <h4 id="feedback-form-title">Formulario de quejas y sugerencias</h4>
      <fieldset className="care-types">
        <legend>Tipo de solicitud</legend>
        {requestTypes.map((type) => (
          <label key={type.id}>
            <input type="radio" name="tipo" value={type.id} checked={request.type === type.id} onChange={() => update("type", type.id)} />
            <span>{type.label}</span>
          </label>
        ))}
      </fieldset>
      <div className="care-fields">
        <div className="care-field">
          <label htmlFor="fb-name">Nombre completo</label>
          <input id="fb-name" autoComplete="name" required value={request.name} onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name} aria-describedby={describedBy("name")} />
          {errors.name && <span className="care-error" id="fb-name-error">{errors.name}</span>}
        </div>
        <div className="care-field">
          <label htmlFor="fb-email">Correo electrónico</label>
          <input id="fb-email" type="email" autoComplete="email" required value={request.email} onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email} aria-describedby={describedBy("email")} />
          {errors.email && <span className="care-error" id="fb-email-error">{errors.email}</span>}
        </div>
        <div className="care-field">
          <label htmlFor="fb-product">Producto o servicio <span>(opcional)</span></label>
          <select id="fb-product" value={request.product} onChange={(e) => update("product", e.target.value)}>
            <option value="">Atención general</option>
            {catalog.map((item) => <option key={item.id} value={item.name}>{item.name}</option>)}
          </select>
        </div>
        <div className="care-field">
          <label htmlFor="fb-order">Número de pedido <span>(opcional)</span></label>
          <input id="fb-order" placeholder="Ej. AS-104582" value={request.order} onChange={(e) => update("order", e.target.value)} />
        </div>
        <div className="care-field care-field-wide">
          <label htmlFor="fb-message">Cuéntanos qué pasó o qué propones</label>
          <textarea id="fb-message" rows={4} required maxLength={1000} value={request.message} onChange={(e) => update("message", e.target.value)}
            aria-invalid={!!errors.message} aria-describedby={describedBy("message", "fb-message-hint")} />
          <span className="care-hint" id="fb-message-hint">Mínimo {minMessageLength} caracteres · {request.message.trim().length}/1000</span>
          {errors.message && <span className="care-error" id="fb-message-error">{errors.message}</span>}
        </div>
      </div>
      <div className="care-consent">
        <label>
          <input id="fb-consent" type="checkbox" checked={request.consent} onChange={(e) => update("consent", e.target.checked)}
            aria-invalid={!!errors.consent} aria-describedby={describedBy("consent")} />
          <span>Autorizo a Aperture Science a usar estos datos únicamente para dar seguimiento a mi solicitud.</span>
        </label>
        {errors.consent && <span className="care-error" id="fb-consent-error">{errors.consent}</span>}
      </div>
      <div className="care-submit">
        <button type="submit" className="button button-orange">Enviar solicitud <LineIcon name="send" size={18} /></button>
        <p>Se abrirá tu correo con la solicitud lista y un folio de seguimiento.</p>
      </div>
    </form>
  )
}
