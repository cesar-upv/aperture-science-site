import type { ReactNode } from "react"
import logo from "../assets/aperture-logo.png"
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      className="arrow"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function Icon({ name }: { name: "portals" | "cube" | "arrow" }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      aria-hidden="true"
    >
      {name === "portals" && (
        <>
          <ellipse cx="8" cy="16" rx="5" ry="11" />
          <ellipse cx="24" cy="16" rx="5" ry="11" />
          <path d="M13 16h6" />
        </>
      )}
      {name === "cube" && (
        <>
          <path d="m16 3 12 7v13l-12 7-12-7V10Z M4 10l12 7 12-7M16 17v13" />
          <path d="m10 6 12 7" />
        </>
      )}
      {name === "arrow" && (
        <>
          <path d="M3 16h25m-8-8 8 8-8 8" />
          <path d="M3 6h7M3 26h7" />
        </>
      )}
    </svg>
  )
}
export function SectionLabel({
  number,
  children,
  light = false,
}: {
  number: string
  children: ReactNode
  light?: boolean
}) {
  return (
    <div className={`section-label ${light ? "on-dark" : ""}`}>
      <span className="section-number">{number}</span>
      <span>{children}</span>
      <span className="label-line" />
    </div>
  )
}
export function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <img
      className={`brand ${inverted ? "brand-inverted" : ""}`}
      src={logo}
      alt="Aperture Science"
      width="188"
      height="48"
    />
  )
}
