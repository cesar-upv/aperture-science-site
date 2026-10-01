import { orgStructure, webContent } from "../data/strategy"
import "./OrgSection.css"
import { CooperativeVisual, ScienceMark } from "./ScienceVisuals"
import chamber from "../assets/test-chamber.jpg"
import cesarPortrait from "../assets/cesar-aperture.png"
import jesusPortrait from "../assets/jesus-aperture.png"
import donPolloPortrait from "../assets/don-pollo-aperture.png"
import eliasPortrait from "../assets/elias-aperture.png"
import israelPortrait from "../assets/israel-aperture.png"

const teamPortraits: Record<string, string> = {
  "César": cesarPortrait,
  "Elías": eliasPortrait,
  "Jesús": jesusPortrait,
  "Israel": israelPortrait,
  "Don Pollo": donPolloPortrait,
}

export default function OrgSection() {
  const { ceo, departments } = orgStructure
  return <>
    <section className="company-section company-light" id="estructura" aria-labelledby="org-title"><div className="wrap">
      <header className="company-heading"><span className="mono">02 / PERSONAS Y ESTRUCTURA</span><h2 id="org-title">Nuestra organización</h2><p>Una dirección común. Cuatro áreas que convierten ideas en dispositivos, materiales y pruebas.</p></header>
      <section className="company-block org-chart" id="organigrama"><h3>Nuestra estructura</h3><ul className="org-tree" aria-label="Jerarquía de Aperture Science"><li><div className="org-director"><span className="mono">DIRECCIÓN</span><h4>{ceo.title}</h4></div><ul className="org-branches">{departments.map(dept => <li key={dept.id}><a className="org-node" href={`#department-${dept.id}`}>{dept.title.replace("Dpto. de ", "")}<span aria-hidden="true">↓</span></a>{dept.subareas.length > 0 && <ul className="org-leaves">{dept.subareas.map(sub => <li key={sub.id}>{sub.title}</li>)}</ul>}</li>)}</ul></li></ul><p className="company-note">Dirección General → Departamentos → Unidades especializadas</p></section>
      <section className="company-block" id="areas"><h3>Nuestras áreas</h3><div className="company-grid two">{departments.map(dept => <article className="company-card" key={dept.id} id={`department-${dept.id}`}><h4>{dept.title.replace("Dpto. de ", "")}</h4><p>{dept.description}</p>{dept.subareas.length > 0 && <details><summary>Unidades especializadas</summary><dl>{dept.subareas.map(sub => <div key={sub.id}><dt>{sub.title}</dt><dd>{sub.description}</dd></div>)}</dl></details>}</article>)}</div></section>
      <section className="company-block" id="equipo"><h3>Nuestro equipo</h3><p className="company-intro">Responsabilidades claras en cada etapa, desde la primera idea hasta la última verificación.</p><div className="company-grid team-grid">{webContent.roles.map((role,i) => {
        const portrait = teamPortraits[role.name]
        return <article className="company-card team-card" key={role.name}>
          <div className={`team-portrait${portrait ? " has-photo" : ""}`} role={portrait ? undefined : "img"} aria-label={portrait ? undefined : `Espacio reservado para retrato de ${role.title}`}>
            {portrait ? <img src={portrait} alt={`Retrato de ${role.name}, ${role.title}`} loading="lazy" decoding="async" /> : <span className="portrait-silhouette" aria-hidden="true"><i /></span>}
            <span className="mono">RETRATO / 0{i+1}</span>
          </div>
          <span className="team-member-name mono">{role.name}</span><h4>{role.title}</h4><p>{role.function}</p><dl><dt>Responsabilidades</dt><dd>{role.responsibility}</dd></dl>
        </article>
      })}</div></section>
    </div></section>
    <section className="company-section company-dark culture-story" id="forma-de-trabajar" aria-labelledby="culture-title"><div className="wrap"><div className="culture-intro"><header className="company-heading"><span className="mono">03 / COLABORACIÓN</span><h2 id="culture-title">Nuestra forma de trabajar</h2><p>El siguiente descubrimiento comienza con una buena coordinación.</p></header><CooperativeVisual /></div><div className="culture-grid">{webContent.culture.map((item,i) => <section className="company-card" id={`cultura-${i+1}`} key={item.title}><div className="culture-card-top"><span className="mono">03 / 0{i+1}</span><ScienceMark kind={i === 0 ? "spark" : i === 1 ? "orbit" : i === 2 ? "portal" : i === 3 ? "calibrate" : "shield"} /></div><h3>{item.title}</h3><p>{item.text}</p><div className="company-tags">{item.tags.map(tag => <span className="company-tag" key={tag}>{tag}</span>)}</div></section>)}</div></div></section>
    <section className="company-section company-light commitment-story" id="compromiso" aria-labelledby="commitments-title"><div className="wrap"><div className="commitment-intro"><header className="company-heading"><span className="mono">04 / MEJORA CONTINUA</span><h2 id="commitments-title">Nuestro compromiso</h2><p>La confianza se construye con criterios claros, resultados verificables y acciones de mejora.</p></header><div className="commitment-image"><img src={chamber} alt="Cámara de pruebas de Aperture Science" loading="lazy" /><div className="commitment-seal"><ScienceMark kind="shield" /><span className="mono">OBSERVAR.<br />VERIFICAR.<br />MEJORAR.</span></div></div></div>
      <section className="company-block" id="estandares"><h3>Nuestros estándares</h3><div className="company-grid three">{webContent.standards.map(item => <article className="company-card" key={item.title}><ScienceMark kind={item.title === "Fiabilidad" ? "shield" : item.title === "Eficiencia" ? "calibrate" : "portal"} /><h4>{item.title}</h4><p>{item.text}</p></article>)}</div></section>
      <section className="company-block" id="resultados"><h3>Medimos nuestros resultados</h3><p className="company-intro">Indicadores de seguimiento y metas por alcanzar; no representan resultados obtenidos.</p><div className="company-grid three">{webContent.standards.map(item => <article className="company-card" key={item.title}><h4>{item.title}</h4><strong className="company-metric">{item.metric}</strong><p>{item.unit}</p></article>)}</div><p className="company-note">Fiabilidad: el umbral de fallas inferior al 5% complementa la meta de reducir la tasa inicial en un 15%.</p></section>
      <section className="company-block" id="mejora"><h3>Seguimiento y mejora</h3><div className="company-grid three">{webContent.standards.map(item => <article className="company-card" key={item.title}><h4>{item.owner}</h4><p>{item.review}</p></article>)}</div><ol className="improvement-cycle"><li><strong>01 / Revisar</strong><span>Comparar registros con las metas.</span></li><li><strong>02 / Corregir</strong><span>Identificar causas y asignar acciones, responsable y plazo.</span></li><li><strong>03 / Verificar</strong><span>Comprobar el efecto y actualizar los procedimientos.</span></li></ol></section>
    </div></section>
  </>
}
