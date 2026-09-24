import { orgStructure, workCulture, companyCommitments } from "../data/strategy"
import { SectionLabel } from "./ui"
import "./OrgSection.css"

export default function OrgSection() {
  const { ceo, departments } = orgStructure
  return (
    <section className="org-section section-space" id="estructura" aria-labelledby="org-title">
      <div className="wrap">
        <SectionLabel number="05">ORGANIZACIÓN</SectionLabel>
        <div className="org-heading">
          <h2 id="org-title">Nuestra<br /><span>organización.</span></h2>
          <p>Una dirección común. Cuatro departamentos que convierten las ideas en dispositivos, materiales y pruebas.</p>
        </div>
        <section className="org-chart" aria-labelledby="org-chart-title">
          <h3 id="org-chart-title">Organigrama</h3>
          <ul className="org-tree" aria-label="Jerarquía de Aperture Science">
            <li>
              <div className="org-director"><h4>{ceo.title}</h4><p>{ceo.description}</p></div>
              <ul className="org-branches">
                {departments.map(dept => (
                  <li key={dept.id}>
                    <a className="org-node" href={`#department-${dept.id}`}>{dept.title.replace("Dpto. de ", "")}<span aria-hidden="true">↓</span></a>
                    {dept.subareas.length > 0 && <ul className="org-leaves">{dept.subareas.map(sub => <li key={sub.id}>{sub.title}</li>)}</ul>}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </section>
        <section className="org-functions" aria-labelledby="org-functions-title">
          <h3 id="org-functions-title">Responsabilidades por departamento</h3>
          <div className="org-department-details">
            {departments.map(dept => (
              <article key={dept.id} id={`department-${dept.id}`}>
                <h4>{dept.title.replace("Dpto. de ", "")}</h4>
                <p>{dept.description}</p>
                {dept.subareas.length > 0 && <details><summary>Funciones de {dept.subareas.length === 1 ? "su área" : "sus áreas"}</summary><dl>{dept.subareas.map(sub => <div key={sub.id}><dt>{sub.title}</dt><dd>{sub.description}</dd></div>)}</dl></details>}
              </article>
            ))}
          </div>
        </section>
      </div>
      <section id="forma-de-trabajar" className="org-culture" aria-labelledby="culture-title">
        <div className="wrap org-culture-layout">
          <div><span className="mono">CULTURA DE TRABAJO</span><h3 id="culture-title">Nuestra forma<br /><span>de trabajar.</span></h3></div>
          <div className="org-practices">{workCulture.pillars.map(pillar => <article key={pillar.title}><h4>{pillar.title}</h4><p>{pillar.description}</p></article>)}</div>
        </div>
      </section>
      <section id="compromiso" className="wrap org-commitments" aria-labelledby="commitments-title">
        <div className="org-heading"><h3 id="commitments-title">Nuestro<br />compromiso.</h3><p>Qué nos proponemos mejorar y cómo comprobaremos cada avance. Son metas del programa, aún por cumplir.</p></div>
        <div className="org-commitment-list">{companyCommitments.map(item => <article key={item.id}>
          <div><h4>{item.pillar}</h4><p>{item.commitment}</p></div>
          <dl><div><dt>Meta</dt><dd>{item.indicator}</dd></div><div><dt>Cómo se verifica</dt><dd>{item.verification}</dd></div></dl>
        </article>)}</div>
      </section>
    </section>
  )
}
