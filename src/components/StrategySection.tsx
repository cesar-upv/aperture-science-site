import { philosophy, swot, webContent } from "../data/strategy"
import chamber from "../assets/test-chamber.jpg"
import architecture from "../assets/architecture.jpg"
import repulsion from "../assets/repulsion.jpg"
import portalGun from "../assets/portal-gun.png"
import atlas from "../assets/atlas.png"
import { ScienceMark } from "./ScienceVisuals"

const chapters = [
  ["filosofia", "Filosofía"], ["panorama", "Panorama"], ["objetivos", "Objetivos"],
  ["estrategias", "Estrategias"], ["accion", "Acción"],
]
const strategyImages = [chamber, repulsion, architecture]

export default function StrategySection() {
  return (
    <section className="company-section strategy-story company-dark" id="estrategia" aria-labelledby="strategy-title">
      <header className="strategy-cover">
        <div className="strategy-cover-image" aria-hidden="true"><img src={chamber} alt="" loading="lazy" /></div>
        <div className="wrap strategy-cover-layout">
          <div className="company-heading">
            <span className="mono">01 / VISIÓN DE FUTURO</span>
            <h2 id="strategy-title">Nuestra estrategia</h2>
            <p>Exploramos nuevas posibilidades. Convertimos cada descubrimiento en un siguiente paso.</p>
            <a className="story-explore" href="#filosofia">Explora nuestro siguiente paso <span aria-hidden="true">↓</span></a>
          </div>
          <div className="cover-coordinate" aria-hidden="true"><ScienceMark kind="portal" /><span className="mono">APERTURE SCIENCE<br />EL FUTURO ESTÁ CONECTADO.</span></div>
        </div>
        <nav className="wrap strategy-chapters" aria-label="Apartados de nuestra estrategia">
          {chapters.map(([id, label], i) => <a href={`#${id}`} key={id}><span className="mono">0{i + 1}</span>{label}<span aria-hidden="true">↗</span></a>)}
        </nav>
      </header>

      <section className="story-panel company-light" id="filosofia" aria-labelledby="philosophy-title">
        <div className="wrap story-split">
          <div className="story-side">
            <span className="chapter-label mono">01 / EL PUNTO DE PARTIDA</span>
            <h3 id="philosophy-title">Nuestra filosofía</h3>
            <div className="philosophy-art" aria-hidden="true"><ScienceMark kind="portal" /><span className="mono">DOS PUNTOS.<br />INFINITAS POSIBILIDADES.</span></div>
          </div>
          <div className="story-content">
            <div className="company-grid two philosophy-cards">
              <article className="company-card"><span className="mono">MISIÓN</span><h4>Ampliar lo posible.</h4><p>{philosophy.mission}</p></article>
              <article className="company-card"><span className="mono">VISIÓN</span><h4>Conectar el futuro.</h4><p>{philosophy.vision}</p></article>
            </div>
            <div className="company-values">{philosophy.values.map((value, i) => <article key={value.title}><span className="mono">0{i + 1}</span><h4>{value.title}</h4><p>{webContent.values[i]}</p></article>)}</div>
          </div>
        </div>
      </section>

      <section className="story-panel panorama-panel company-dark" id="panorama" aria-labelledby="panorama-title">
        <div className="wrap story-split">
          <div className="story-side">
            <span className="chapter-label mono">02 / LEER EL ENTORNO</span><h3 id="panorama-title">Nuestro panorama</h3>
            <p>Lo que nos impulsa, lo que debemos resolver y las posibilidades del entorno.</p>
            <figure className="panorama-window"><img src={architecture} alt="Estructuras e instalaciones de investigación de Aperture Science" loading="lazy" /><figcaption className="mono">UNA NUEVA PERSPECTIVA ↗</figcaption></figure>
          </div>
          <div className="company-grid two panorama-grid">{swot.map((group, i) => <article className={`company-card panorama-${group.id}`} key={group.id}><div className="panorama-card-top"><span className="mono">{group.context}</span><ScienceMark kind={i === 0 ? "spark" : i === 1 ? "orbit" : i === 2 ? "calibrate" : "shield"} /></div><h4>{group.title}</h4><ul>{group.items.map(item => <li key={item.title}>{item.title}</li>)}</ul></article>)}</div>
        </div>
      </section>

      <section className="story-panel objectives-panel company-light" id="objetivos" aria-labelledby="goals-title">
        <div className="wrap story-split">
          <div className="story-side">
            <span className="chapter-label mono">03 / EL SIGUIENTE SALTO</span><h3 id="goals-title">Hacia dónde vamos</h3><p>Metas del programa. Cada avance se compara con la medición inicial.</p>
            <div className="device-study" aria-hidden="true"><div className="device-study-ring" /><img src={portalGun} alt="" loading="lazy" /><span className="mono">ASHPD / DESARROLLO CONTINUO</span></div>
          </div>
          <div className="goal-rows">{webContent.goals.map((goal, i) => <article className="company-card goal-row" key={goal.title}><div className="goal-row-heading"><span className="mono">META / 0{i + 1}</span><h4>{goal.title}</h4></div><div className="goal-row-metric"><strong className="company-metric">{goal.metric}</strong><p>{goal.unit}</p></div><span className="company-tag">{goal.deadline}</span></article>)}</div>
        </div>
      </section>

      <section className="story-panel strategies-panel company-dark" id="estrategias" aria-labelledby="strategies-title">
        <div className="wrap">
          <div className="story-section-heading"><span className="chapter-label mono">04 / CONECTAR LAS IDEAS</span><h3 id="strategies-title">Nuestras estrategias</h3><ScienceMark kind="orbit" /></div>
          <div className="company-grid three strategy-editorial-cards">{webContent.goals.map((goal, i) => <article className="company-card" key={goal.title}><div className="strategy-card-photo"><img src={strategyImages[i]} alt="" loading="lazy" /><span className="mono">0{i + 1}</span></div><div className="strategy-card-body"><span className="mono">{goal.title}</span><h4>{goal.strategy}</h4><p>{goal.description}</p><p className="company-note">{goal.connection}</p></div></article>)}</div>
        </div>
      </section>

      <section className="story-panel action-panel company-light" id="accion" aria-labelledby="action-title">
        <div className="wrap">
          <div className="action-heading"><div className="story-section-heading"><span className="chapter-label mono">05 / HACER QUE SUCEDA</span><h3 id="action-title">De la estrategia a la acción</h3></div><div className="action-bot" aria-hidden="true"><img src={atlas} alt="" loading="lazy" /><span className="mono">LISTOS PARA<br />EL SIGUIENTE PASO.</span></div></div>
          <div className="company-grid three action-cards">{webContent.goals.map((goal, i) => <article className="company-card" key={goal.title}><div className="action-card-top"><span className="action-number" aria-hidden="true">0{i + 1}</span><span className="company-tag">{goal.deadline}</span></div><h4>{goal.strategy}</h4><ol>{goal.actions.map(action => <li key={action}>{action}</li>)}</ol><dl><dt>Responsable</dt><dd>{goal.owner}</dd><dt>Recursos</dt><dd>{goal.resources}</dd></dl></article>)}</div>
        </div>
      </section>
    </section>
  )
}
