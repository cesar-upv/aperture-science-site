import atlas from "../assets/atlas.png"
import pbody from "../assets/p-body.png"

type MarkKind = "portal" | "spark" | "orbit" | "calibrate" | "shield"

/** Decorative schematics; the adjacent text carries all meaning. */
export function ScienceMark({ kind }: { kind: MarkKind }) {
  return <svg className={`science-mark mark-${kind}`} viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    {kind === "portal" ? <><ellipse cx="40" cy="60" rx="22" ry="43" transform="rotate(20 40 60)" /><ellipse className="mark-orange" cx="80" cy="60" rx="22" ry="43" transform="rotate(20 80 60)" /><path strokeDasharray="3 5" d="M16 60h88M60 8v104" /><circle cx="60" cy="60" r="4" fill="currentColor" /></> :
      kind === "spark" ? <><path d="M60 12v96M12 60h96M26 26l68 68M26 94l68-68" /><circle cx="60" cy="60" r="28" /><circle cx="60" cy="60" r="7" fill="currentColor" /></> :
      kind === "orbit" ? <><circle cx="60" cy="60" r="39" strokeDasharray="4 5" /><ellipse cx="60" cy="60" rx="53" ry="20" transform="rotate(-35 60 60)" /><circle cx="60" cy="60" r="12" /><circle cx="100" cy="30" r="5" fill="currentColor" /></> :
      kind === "calibrate" ? <><path d="M20 30h80M20 60h80M20 90h80" /><rect x="38" y="20" width="12" height="20" fill="var(--company-card)" /><rect x="75" y="50" width="12" height="20" fill="var(--company-card)" /><rect x="29" y="80" width="12" height="20" fill="var(--company-card)" /></> :
      <><path d="m60 12 37 15v30c0 24-21 41-37 51-16-10-37-27-37-51V27Z" /><path d="m42 59 13 13 25-29" /><path d="M60 19v12M30 36h12M78 36h12" /></>}
  </svg>
}

export function CooperativeVisual() {
  return <figure className="cooperative-visual" aria-label="Atlas y P-body, robots de pruebas cooperativas de Aperture Science">
    <div className="cooperative-orbit" aria-hidden="true" />
    <img className="cooperative-atlas" src={atlas} alt="Atlas" loading="lazy" />
    <img className="cooperative-pbody" src={pbody} alt="P-body" loading="lazy" />
    <figcaption className="mono"><span>ATLAS + P-BODY</span><span>EL AVANCE ES COMPARTIDO.</span></figcaption>
  </figure>
}
