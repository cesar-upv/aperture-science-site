import { contactEmail, interestFreeMinimum, interestFreeMonths } from "./catalog.ts"

export type ChannelIcon = "mail" | "chat" | "pin"
export type CareLink = { label: string; href: string }

export const serviceHours = "Lunes a viernes, 9:00 a 18:00 h"

export const channels: { id: string; icon: ChannelIcon; title: string; detail: string; meta: string; action?: CareLink }[] = [
  {
    id: "correo", icon: "mail", title: "Correo de atención", detail: contactEmail,
    meta: "Respuesta en menos de 24 h hábiles",
    action: { label: "Escribir correo", href: `mailto:${contactEmail}?subject=${encodeURIComponent("Consulta de producto")}` },
  },
  {
    id: "chat", icon: "chat", title: "Chat de atención", detail: "Respuestas inmediatas a las dudas más frecuentes.",
    meta: `Asesores: ${serviceHours}`,
    action: { label: "Abrir chat", href: "#chat-atencion" },
  },
  {
    id: "presencial", icon: "pin", title: "Atención presencial", detail: "Centro de Enriquecimiento, Sector C. Entrega de pedidos en Muelle 4.",
    meta: serviceHours,
  },
]

export type ChatTopic = { id: string; question: string; answer: string; link?: CareLink }

export const chatGreeting = "Hola, te damos la bienvenida a Aperture Science. ¿En qué podemos ayudarte hoy? Elige un tema."

export const chatTopics: ChatTopic[] = [
  {
    id: "comprar", question: "¿Cómo compro un producto?",
    answer: "Elige tu producto en el catálogo y solicita tu cotización desde su ficha. Un asesor confirma existencias, precio final y forma de entrega.",
    link: { label: "Ir al catálogo", href: "./catalogo.html" },
  },
  {
    id: "entregas", question: "Opciones de entrega",
    answer: "Enviamos a domicilio en todo el país con transporte especializado según el producto. Varios artículos también pueden recogerse en el Centro de Enriquecimiento.",
  },
  {
    id: "devoluciones", question: "Cambios y devoluciones",
    answer: "Cada ficha indica sus condiciones. Atendemos cambios por defectos de fábrica y devoluciones con precinto o envase intacto, según el producto.",
    link: { label: "Consultar condiciones", href: "./catalogo.html#productos" },
  },
  {
    id: "pagos", question: "Formas de pago",
    answer: `Transferencia, tarjeta de crédito o débito y hasta ${interestFreeMonths} meses sin intereses en compras desde $${interestFreeMinimum.toLocaleString("es-MX")} MXN con tarjetas participantes.`,
  },
  {
    id: "queja", question: "Presentar una queja o sugerencia",
    answer: "Usa nuestro formulario de quejas y sugerencias. Te asignamos un folio y damos seguimiento hasta resolver tu caso.",
    link: { label: "Ir al formulario", href: "#quejas" },
  },
  {
    id: "asesor", question: "Hablar con un asesor",
    answer: `Escríbenos a ${contactEmail}. Un asesor te responde en menos de 24 horas hábiles (${serviceHours.toLowerCase()}).`,
    link: { label: "Escribir correo", href: `mailto:${contactEmail}?subject=${encodeURIComponent("Quiero hablar con un asesor")}` },
  },
]

export const followUpSteps = [
  { title: "Recibimos tu caso", detail: "Confirmamos la recepción con tu folio de seguimiento.", time: "Mismo día" },
  { title: "Lo analizamos", detail: "Un especialista revisa tu caso y el producto involucrado.", time: "1 a 2 días hábiles" },
  { title: "Te proponemos una solución", detail: "Te contactamos con la respuesta: cambio, reparación, reembolso o mejora.", time: "Hasta 5 días hábiles" },
  { title: "Cerramos contigo", detail: "Confirmamos que el caso quedó resuelto y registramos tu opinión.", time: "Encuesta de cierre" },
]

export type RequestType = "queja" | "reclamacion" | "sugerencia"

export const requestTypes: { id: RequestType; label: string; prefix: string }[] = [
  { id: "queja", label: "Queja", prefix: "QJA" },
  { id: "reclamacion", label: "Reclamación", prefix: "REC" },
  { id: "sugerencia", label: "Sugerencia", prefix: "SUG" },
]

export type FeedbackRequest = {
  type: RequestType
  name: string
  email: string
  product: string
  order: string
  message: string
  consent: boolean
}

export type FeedbackErrors = Partial<Record<keyof FeedbackRequest, string>>

export const emptyRequest: FeedbackRequest = { type: "queja", name: "", email: "", product: "", order: "", message: "", consent: false }
export const minMessageLength = 20

export function validateRequest(request: FeedbackRequest): FeedbackErrors {
  const errors: FeedbackErrors = {}
  if (request.name.trim().length < 3) errors.name = "Escribe tu nombre completo."
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(request.email.trim())) errors.email = "Escribe un correo válido, por ejemplo nombre@empresa.com."
  if (request.message.trim().length < minMessageLength) errors.message = `Cuéntanos un poco más (mínimo ${minMessageLength} caracteres).`
  if (!request.consent) errors.consent = "Necesitamos tu autorización para dar seguimiento a tu caso."
  return errors
}

export function createFolio(type: RequestType, date: Date, sequence: number) {
  const prefix = requestTypes.find((item) => item.id === type)!.prefix
  const stamp = [date.getFullYear() % 100, date.getMonth() + 1, date.getDate()].map((n) => String(n).padStart(2, "0")).join("")
  return `${prefix}-${stamp}-${String(sequence % 10_000).padStart(4, "0")}`
}

export function requestMailto(request: FeedbackRequest, folio: string) {
  const type = requestTypes.find((item) => item.id === request.type)!.label
  const subject = `[${folio}] ${type}: ${request.product || "Atención general"}`
  const body = [
    `Folio: ${folio}`,
    `Tipo: ${type}`,
    `Nombre: ${request.name.trim()}`,
    `Correo: ${request.email.trim()}`,
    `Producto o servicio: ${request.product || "Atención general"}`,
    `Número de pedido: ${request.order.trim() || "No aplica"}`,
    "",
    request.message.trim(),
  ].join("\n")
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
