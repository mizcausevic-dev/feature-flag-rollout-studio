export type FlagState = 'Live' | 'Gradual' | 'Paused' | 'Rollback'

export const heroMetrics = [
  { label: 'Active flags', value: '48', detail: '12 tied to experiments' },
  { label: 'Gradual rollouts', value: '9', detail: '3 need operator review' },
  { label: 'Kill switches armed', value: '6', detail: '2 revenue-critical' },
  { label: 'Guardrail alerts', value: '4', detail: '1 executive-visible' },
]

export const rolloutTrend = [
  { name: 'Mon', value: 22 },
  { name: 'Tue', value: 27 },
  { name: 'Wed', value: 31 },
  { name: 'Thu', value: 29 },
  { name: 'Fri', value: 38 },
  { name: 'Sat', value: 41 },
]

export const flags = [
  {
    name: 'revenue_checkout_redesign',
    owner: 'Growth Engineering',
    state: 'Gradual' as FlagState,
    audience: '10% of enterprise traffic',
    guardrail: 'Checkout conversion stable',
    experiment: 'EXP-204',
  },
  {
    name: 'self_serve_trial_pricing',
    owner: 'RevOps',
    state: 'Paused' as FlagState,
    audience: 'North America SMB',
    guardrail: 'AOV drift triggered',
    experiment: 'EXP-219',
  },
  {
    name: 'partner_referral_banner',
    owner: 'Channel Growth',
    state: 'Live' as FlagState,
    audience: '100% of partner landing pages',
    guardrail: 'Healthy',
    experiment: 'EXP-198',
  },
  {
    name: 'identity_sso_upgrade',
    owner: 'Platform Security',
    state: 'Rollback' as FlagState,
    audience: 'EMEA admin cohort',
    guardrail: 'Latency spike',
    experiment: 'OPS-144',
  },
]

export const targetSegments = [
  { label: 'Enterprise traffic', percentage: 82, color: '#7dd3fc' },
  { label: 'SMB acquisition', percentage: 56, color: '#f59e0b' },
  { label: 'Partner routes', percentage: 44, color: '#c084fc' },
  { label: 'Admin surface', percentage: 28, color: '#fb7185' },
]

export const rolloutStages = [
  { title: 'Design gate', detail: 'Product and analytics sign-off before targeting opens.', status: 'Cleared' },
  { title: 'Guardrail definition', detail: 'Conversion, latency, and revenue health checks mapped.', status: 'Monitoring' },
  { title: 'Segment exposure', detail: 'Tiered release by audience, territory, and revenue criticality.', status: 'Active' },
  { title: 'Rollout command', detail: 'Pause, ramp, rollback, and approval routing handled here.', status: 'Ready' },
]

export const actionQueue = [
  { priority: 'P1', title: 'Pause trial pricing flag until AOV stabilizes', owner: 'RevOps', count: 2 },
  { priority: 'P1', title: 'Investigate admin latency before resuming SSO upgrade', owner: 'Platform Security', count: 3 },
  { priority: 'P2', title: 'Ramp checkout redesign to 25% after conversion confidence clears', owner: 'Growth Engineering', count: 1 },
  { priority: 'P3', title: 'Retire stale partner banner flags and archive linked notes', owner: 'Channel Growth', count: 4 },
]

export const guardrails = [
  { metric: 'Checkout conversion', status: 'Healthy', note: '+3.2% vs control' },
  { metric: 'AOV drift', status: 'Warning', note: '-6.1% vs baseline' },
  { metric: 'Admin latency', status: 'Critical', note: '+440ms on rollout cohort' },
  { metric: 'Referral activation', status: 'Healthy', note: '+8.4% MoM lift' },
]
