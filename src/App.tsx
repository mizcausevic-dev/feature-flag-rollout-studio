import './styles.css'
import {
  actionQueue,
  flags,
  guardrails,
  heroMetrics,
  rolloutStages,
  rolloutTrend,
  targetSegments,
} from './data'

function TrendChart() {
  const width = 420
  const height = 150
  const padding = 20
  const max = 45
  const min = 20
  const points = rolloutTrend
    .map((point, index) => {
      const x = padding + (index * (width - padding * 2)) / (rolloutTrend.length - 1)
      const y = height - padding - ((point.value - min) / (max - min)) * (height - padding * 2)
      return `${x},${y}`
    })
    .join(' ')

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="trend-chart" role="img" aria-label="Gradual rollout activity">
      {[25, 30, 35, 40, 45].map((grid) => {
        const y = height - padding - ((grid - min) / (max - min)) * (height - padding * 2)
        return <line key={grid} x1={padding} x2={width - padding} y1={y} y2={y} className="chart-grid" />
      })}
      <polyline points={points} fill="none" stroke="#7dd3fc" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {rolloutTrend.map((point, index) => {
        const x = padding + (index * (width - padding * 2)) / (rolloutTrend.length - 1)
        const y = height - padding - ((point.value - min) / (max - min)) * (height - padding * 2)
        return (
          <g key={point.name}>
            <circle cx={x} cy={y} r="5" fill="#09111d" stroke="#f59e0b" strokeWidth="3" />
            <text x={x} y={height - 2} textAnchor="middle" className="chart-label">
              {point.name}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

function SegmentBars() {
  return (
    <div className="segment-bars">
      {targetSegments.map((segment) => (
        <div key={segment.label} className="segment-row">
          <div>
            <p className="eyebrow">{segment.label}</p>
            <strong>{segment.percentage}% ready</strong>
          </div>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: `${segment.percentage}%`, background: segment.color }} />
          </div>
        </div>
      ))}
    </div>
  )
}

function App() {
  return (
    <main className="app-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="kicker">Feature Flag Rollout Studio</p>
          <h1>Control staged releases, guardrails, and kill switches from one growth-grade studio.</h1>
          <p className="lead">
            A premium frontend workspace for experiment-linked rollouts, cohort targeting, operator approvals,
            and rollback-ready decisioning.
          </p>
          <div className="hero-actions">
            <a href="https://kineticgain.com/" target="_blank" rel="noreferrer" className="primary-link">
              Kinetic Gain
            </a>
            <a href="https://mizcausevic.com/skills/" target="_blank" rel="noreferrer" className="secondary-link">
              Skills / Portfolio
            </a>
          </div>
        </div>
        <div className="hero-card">
          <p className="eyebrow">Executive snapshot</p>
          <div className="metrics-grid">
            {heroMetrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.detail}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dashboard-grid">
        <article className="panel panel-wide">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Rollout activity</p>
              <h2>Operator pressure is rising as more experiments move from test to release.</h2>
            </div>
            <span className="annotation">This week’s gradual release actions</span>
          </div>
          <TrendChart />
        </article>

        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Segment readiness</p>
              <h2>Audience targeting by channel and risk posture</h2>
            </div>
          </div>
          <SegmentBars />
        </article>
      </section>

      <section className="dashboard-grid">
        <article className="panel panel-wide">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Flag portfolio</p>
              <h2>Active, paused, and rollback-sensitive launches</h2>
            </div>
          </div>
          <div className="flag-table">
            {flags.map((flag) => (
              <article key={flag.name} className="flag-row">
                <div>
                  <strong>{flag.name}</strong>
                  <p>{flag.owner}</p>
                </div>
                <span className={`state-pill state-${flag.state.toLowerCase()}`}>{flag.state}</span>
                <div>
                  <small>Audience</small>
                  <p>{flag.audience}</p>
                </div>
                <div>
                  <small>Guardrail</small>
                  <p>{flag.guardrail}</p>
                </div>
                <div>
                  <small>Experiment</small>
                  <p>{flag.experiment}</p>
                </div>
              </article>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Release model</p>
              <h2>What the studio orchestrates</h2>
            </div>
          </div>
          <div className="stage-list">
            {rolloutStages.map((stage) => (
              <article key={stage.title} className="stage-card">
                <strong>{stage.title}</strong>
                <p>{stage.detail}</p>
                <span>{stage.status}</span>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="dashboard-grid">
        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Guardrails</p>
              <h2>Quality and commercial checks in motion</h2>
            </div>
          </div>
          <div className="guardrail-list">
            {guardrails.map((guardrail) => (
              <article key={guardrail.metric} className="guardrail-card">
                <div>
                  <strong>{guardrail.metric}</strong>
                  <p>{guardrail.note}</p>
                </div>
                <span className={`state-pill state-${guardrail.status.toLowerCase()}`}>{guardrail.status}</span>
              </article>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Action queue</p>
              <h2>Immediate rollout decisions</h2>
            </div>
          </div>
          <div className="queue-list">
            {actionQueue.map((item) => (
              <article key={item.title} className="queue-card">
                <div>
                  <span className="priority">{item.priority}</span>
                  <strong>{item.title}</strong>
                </div>
                <p>{item.owner}</p>
                <b>{item.count} open tasks</b>
              </article>
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
