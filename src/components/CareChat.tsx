import { useEffect, useRef, useState } from "react"
import LineIcon from "./LineIcon"
import { chatGreeting, chatTopics, type CareLink } from "../data/customer-care"

type Message = { id: number; from: "asistente" | "cliente"; text: string; link?: CareLink }

const greeting: Message = { id: 0, from: "asistente", text: chatGreeting }

export default function CareChat() {
  const [messages, setMessages] = useState<Message[]>([greeting])
  const log = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll only the conversation, never the page.
    log.current?.scrollTo({ top: log.current.scrollHeight })
  }, [messages])

  const ask = (topicId: string) => {
    const topic = chatTopics.find((item) => item.id === topicId)!
    setMessages((current) => [
      ...current,
      { id: current.length, from: "cliente", text: topic.question },
      { id: current.length + 1, from: "asistente", text: topic.answer, link: topic.link },
    ])
  }

  return (
    <section className="care-chat" id="chat-atencion" aria-labelledby="chat-title">
      <header className="care-chat-head">
        <span className="care-chat-avatar"><LineIcon name="chat" size={22} /></span>
        <div>
          <h3 id="chat-title">Chat de atención</h3>
          <span className="care-chat-status"><i className="status-dot" />En línea · Respuesta inmediata</span>
        </div>
        {messages.length > 1 && (
          <button type="button" className="care-chat-reset" onClick={() => setMessages([greeting])}>Reiniciar</button>
        )}
      </header>
      <div className="care-chat-log" ref={log} role="log" aria-live="polite" aria-label="Conversación" tabIndex={0}>
        {messages.map((message) => (
          <div key={message.id} className={`care-bubble from-${message.from}`}>
            <span className="sr-only">{message.from === "cliente" ? "Tú: " : "Aperture Science: "}</span>
            <p>{message.text}</p>
            {message.link && <a href={message.link.href}>{message.link.label} →</a>}
          </div>
        ))}
      </div>
      <div className="care-chat-topics" role="group" aria-label="Temas frecuentes">
        {chatTopics.map((topic) => (
          <button type="button" key={topic.id} onClick={() => ask(topic.id)}>{topic.question}</button>
        ))}
      </div>
    </section>
  )
}
