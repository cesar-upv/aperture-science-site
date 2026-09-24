import { useRef, useState } from "react"
import type { KeyboardEvent } from "react"
import {
  planningContext,
  strategicGoals,
  swot,
} from "../data/strategy"
import type { StrategicGoal } from "../data/strategy"
import "./StrategySection.css"

const views = [
  { id: "foda", label: "Análisis FODA", number: "01", count: "20 factores" },
  {
    id: "objetivos",
    label: "Objetivos SMART",
    number: "02",
    count: "03 objetivos",
  },
  {
    id: "accion",
    label: "Estrategias y acción",
    number: "03",
    count: "03 planes",
  },
] as const

function TargetMetric({ goal }: { goal: StrategicGoal }) {
  return (
    <div className="strategy-target">
      <div>
        <strong>{goal.targetNumber}</strong>
        <span>{goal.targetUnit}</span>
      </div>
      <span className="strategy-deadline">
        META PROPUESTA
        <br />
        <b>{goal.deadline}</b>
      </span>
    </div>
  )
}

function SmartDetails({ goal }: { goal: StrategicGoal }) {
  return (
    <article
      className="strategy-goal-detail"
      aria-labelledby={`strategy-goal-${goal.id}`}
    >
      <div className="strategy-detail-heading">
        <span className="strategy-micro">OBJETIVO {goal.id} / SMART</span>
        <span className="strategy-proposal">POR EJECUTAR</span>
      </div>
      <h4 id={`strategy-goal-${goal.id}`}>{goal.title}</h4>
      <TargetMetric goal={goal} />

      <dl className="strategy-smart-grid">
        <div>
          <dt>
            <span>S</span> Específico
          </dt>
          <dd>
            {goal.specific}
          </dd>
        </div>
        <div>
          <dt>
            <span>M</span> Medible
          </dt>
          <dd>{goal.metric}</dd>
        </div>
        <div>
          <dt>
            <span>A</span> Alcanzable
          </dt>
          <dd>{goal.resources}</dd>
        </div>
        <div>
          <dt>
            <span>R</span> Relevante
          </dt>
          <dd>{goal.relevance}</dd>
        </div>
        <div>
          <dt>
            <span>T</span> Con plazo
          </dt>
          <dd>
            {goal.deadline}
          </dd>
        </div>

      </dl>

    </article>
  )
}

function ActionDetails({ goal }: { goal: StrategicGoal }) {
  return (
    <article
      className="strategy-action-detail"
      aria-labelledby={`strategy-action-${goal.id}`}
    >
      <div
        className="strategy-link-chain"
        role="group"
        aria-label={`Objetivo ${goal.id}, estrategia ${goal.strategy.id}, plan ${goal.plan.id}`}
      >
        <span>OBJETIVO {goal.id}</span>
        <i aria-hidden="true">→</i>
        <span>{goal.strategy.id}</span>
        <i aria-hidden="true">→</i>
        <span>{goal.plan.id}</span>
      </div>
      <h4 id={`strategy-action-${goal.id}`}>{goal.strategy.title}</h4>
      <p className="strategy-action-intro">{goal.strategy.description}</p>
      <div className="strategy-plan-meta">
        <div>
          <span className="strategy-micro">RESPONSABLE</span>
          <strong>{goal.plan.owner}</strong>
        </div>
        <div>
          <span className="strategy-micro">VENTANA DE EJECUCIÓN</span>
          <strong>{goal.plan.window}</strong>
        </div>
      </div>
      <p className="strategy-action-intro"><strong>Recursos: </strong>{goal.plan.resources}</p>
      <ol className="strategy-timeline">
        {goal.plan.steps.map((step, index) => (
          <li key={step.title}>
            <span className="strategy-timeline-marker" aria-hidden="true">
              0{index + 1}
            </span>
            <div className="strategy-step-body">

              <h5>{step.title}</h5>
              <p>{step.task}</p>

            </div>
          </li>
        ))}
      </ol>

    </article>
  )
}

export default function StrategySection() {
  const [activeView, setActiveView] =
    useState<typeof views[number]["id"]>("foda")
  const [activeGoal, setActiveGoal] = useState("01")
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  function onTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let next = index
    if (event.key === "ArrowRight") next = (index + 1) % views.length
    else if (event.key === "ArrowLeft")
      next = (index + views.length - 1) % views.length
    else if (event.key === "Home") next = 0
    else if (event.key === "End") next = views.length - 1
    else return
    event.preventDefault()
    setActiveView(views[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <section
      className="strategy-section"
      id="estrategia"
      aria-labelledby="strategy-title"
    >
      <div className="strategy-grid-decoration" aria-hidden="true" />
      <div className="strategy-wrap">
        <div className="strategy-kicker">
          <span className="strategy-section-index">04</span>
          <span>APERTURE / DIRECCIÓN ESTRATÉGICA</span>
          <span className="strategy-kicker-line" />
          <span className="strategy-status">
            <i /> PLAN PROPUESTO
          </span>
        </div>
        <div className="strategy-heading">
          <div>
            <span className="strategy-micro">
              LA CIENCIA NECESITA UNA DIRECCIÓN.
            </span>
            <h2 id="strategy-title">
              Nuestra
              <br />
              <span>estrategia.</span>
            </h2>
          </div>
          <div className="strategy-heading-copy">
            <p>
              Menos fallas, menores costos y participación voluntaria. Tres objetivos para los próximos 12 meses.
            </p>
            <span className="strategy-period">
              HORIZONTE / 12 MESES <i aria-hidden="true">↗</i>
            </span>
          </div>
        </div>
        <p className="strategy-context">{planningContext.assumptions}</p>
        <div
          className="strategy-tabs"
          role="tablist"
          aria-label="Secciones del plan empresarial"
        >
          {views.map((view, index) => (
            <button
              key={view.id}
              id={`strategy-tab-${view.id}`}
              ref={(node) => {
                tabRefs.current[index] = node
              }}
              type="button"
              role="tab"
              aria-selected={activeView === view.id}
              aria-controls={`strategy-panel-${view.id}`}
              tabIndex={activeView === view.id ? 0 : -1}
              onClick={() => setActiveView(view.id)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
            >
              <span className="strategy-tab-number">{view.number}</span>
              <span>
                {view.label}
                <small>{view.count}</small>
              </span>
              <span className="strategy-tab-arrow" aria-hidden="true">
                ↗
              </span>
            </button>
          ))}
        </div>

        {/* Panel 01: FODA */}
        <div
          id="strategy-panel-foda"
          className="strategy-panel"
          role="tabpanel"
          aria-labelledby="strategy-tab-foda"
          tabIndex={0}
          hidden={activeView !== "foda"}
        >
          <div className="strategy-panel-heading">
            <div>
              <span className="strategy-micro">
                DIAGNÓSTICO / 5 FACTORES POR CUADRANTE
              </span>
              <h3>
                Análisis FODA.
              </h3>
            </div>
            <p>
              Hipótesis de análisis para Aperture Science. Los factores
              externos requieren validación continua antes de escalar operaciones.
            </p>
          </div>
          <div className="strategy-swot-grid">
            {swot.map((quadrant) => (
              <article
                className={`strategy-swot-card strategy-tone-${quadrant.tone}`}
                key={quadrant.id}
              >
                <div className="strategy-swot-top">
                  <div>
                    <span className="strategy-micro">{quadrant.context}</span>
                    <h4>{quadrant.title}</h4>
                  </div>
                  <span className="strategy-swot-letter" aria-hidden="true">
                    {quadrant.letter}
                  </span>
                </div>
                <ol>
                  {quadrant.items.map((item, index) => (
                    <li key={item.title}>
                      <span className="strategy-factor-id">
                        {quadrant.letter}
                        {index + 1}
                      </span>
                      <div>
                        <h5>{item.title}</h5>

                      </div>
                    </li>
                  ))}
                </ol>
                <div className="strategy-swot-footer">
                  <span>
                    FACTOR{" "}
                    {quadrant.letter === "F" || quadrant.letter === "D"
                      ? "INTERNO"
                      : "EXTERNO"}
                  </span>
                  <span>05 / 05</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Panel 02 & 03: Objetivos SMART y Estrategias */}
        {views
          .filter((view) => view.id === "objetivos" || view.id === "accion")
          .map((view) => (
            <div
              key={view.id}
              id={`strategy-panel-${view.id}`}
              className="strategy-panel"
              role="tabpanel"
              aria-labelledby={`strategy-tab-${view.id}`}
              tabIndex={0}
              hidden={activeView !== view.id}
            >
              <div className="strategy-panel-heading">
                <div>
                  <span className="strategy-micro">
                    {view.id === "objetivos"
                      ? "METAS / ESPECÍFICAS Y VERIFICABLES"
                      : "TRAZABILIDAD / UN OBJETIVO → UNA ESTRATEGIA → UN PLAN"}
                  </span>
                  <h3>
                    {view.id === "objetivos"
                      ? "Objetivos SMART."
                      : "Estrategias y plan de acción."}
                  </h3>
                </div>
                <p>
                  {view.id === "objetivos"
                    ? "Selecciona un objetivo para consultar su meta, recursos y plazo."
                    : "Consulta las acciones, responsables, recursos y plazos de cada estrategia."}
                </p>
              </div>
              <div className="strategy-objectives-layout">
                <div
                  className="strategy-goal-selector"
                  role="group"
                  aria-label={
                    view.id === "objetivos"
                      ? "Seleccionar objetivo SMART"
                      : "Seleccionar estrategia y plan"
                  }
                >
                  {strategicGoals.map((goal) => (
                    <button
                      type="button"
                      key={goal.id}
                      aria-pressed={activeGoal === goal.id}
                      aria-controls={`strategy-${view.id}-detail-${goal.id}`}
                      onClick={() => setActiveGoal(goal.id)}
                    >
                      <span className="strategy-goal-selector-top">
                        <span>OBJETIVO {goal.id}</span>
                        <span>{goal.deadline.toUpperCase()}</span>
                      </span>
                      <strong>{goal.shortTitle}</strong>
                      <span className="strategy-selector-bottom">
                        {goal.targetUnit}
                        <i aria-hidden="true">↗</i>
                      </span>
                    </button>
                  ))}

                </div>
                <div className="strategy-detail-container">
                  {strategicGoals.map((goal) => (
                    <div
                      id={`strategy-${view.id}-detail-${goal.id}`}
                      key={goal.id}
                      className="strategy-goal-panel"
                      hidden={activeGoal !== goal.id}
                    >
                      {view.id === "objetivos" ? (
                        <SmartDetails goal={goal} />
                      ) : (
                        <ActionDetails goal={goal} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
