import { philosophy, swot, webContent } from "../data/strategy"
import "./StrategySection.css"
import "../styles/company.css"

export default function StrategySection() {
  return <section className="company-section company-dark" id="estrategia" aria-labelledby="strategy-title">
    <div className="wrap">
      <header className="company-heading"><span className="mono">01 / VISIÓN DE FUTURO</span><h2 id="strategy-title">Nuestra estrategia</h2><p>Exploramos nuevas posibilidades. Convertimos cada descubrimiento en un siguiente paso.</p></header>
      <section className="company-block" id="filosofia"><h3>Nuestra filosofía</h3>
        <div className="company-grid two"><article className="company-card"><span className="mono">MISIÓN</span><h4>Ampliar lo posible.</h4><p>{philosophy.mission}</p></article><article className="company-card"><span className="mono">VISIÓN</span><h4>Conectar el futuro.</h4><p>{philosophy.vision}</p></article></div>
        <div className="company-values">{philosophy.values.map((value, i) => <article key={value.title}><span className="mono">0{i+1}</span><h4>{value.title}</h4><p>{webContent.values[i]}</p></article>)}</div>
      </section>
      <section className="company-block" id="panorama"><h3>Nuestro panorama</h3><p className="company-intro">Lo que nos impulsa, lo que debemos resolver y las posibilidades del entorno.</p><div className="company-grid two">{swot.map(group => <article className={`company-card panorama-${group.id}`} key={group.id}><span className="mono">{group.context}</span><h4>{group.title}</h4><ul>{group.items.map(item => <li key={item.title}>{item.title}</li>)}</ul></article>)}</div></section>
      <section className="company-block" id="objetivos"><h3>Hacia dónde vamos</h3><p className="company-intro">Metas del programa. Cada avance se compara con la medición inicial.</p><div className="company-grid three">{webContent.goals.map(goal => <article className="company-card" key={goal.title}><h4>{goal.title}</h4><strong className="company-metric">{goal.metric}</strong><p>{goal.unit}</p><span className="company-tag">{goal.deadline}</span></article>)}</div></section>
      <section className="company-block" id="estrategias"><h3>Nuestras estrategias</h3><div className="company-grid three">{webContent.goals.map((goal,i) => <article className="company-card" key={goal.title}><span className="mono">0{i+1} / {goal.title}</span><h4>{goal.strategy}</h4><p>{goal.description}</p><p className="company-note">{goal.connection}</p></article>)}</div></section>
      <section className="company-block" id="accion"><h3>De la estrategia a la acción</h3><div className="company-grid three">{webContent.goals.map(goal => <article className="company-card" key={goal.title}><span className="company-tag">{goal.deadline}</span><h4>{goal.strategy}</h4><ol>{goal.actions.map(action => <li key={action}>{action}</li>)}</ol><dl><dt>Responsable</dt><dd>{goal.owner}</dd><dt>Recursos</dt><dd>{goal.resources}</dd></dl></article>)}</div></section>
    </div>
  </section>
}
