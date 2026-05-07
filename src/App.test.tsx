import { render, screen } from '@testing-library/react'
import App from './App'

describe('FeatureFlagRolloutStudio', () => {
  it('renders rollout control content', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /control staged releases, guardrails, and kill switches from one growth-grade studio/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/flag portfolio/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /quality and commercial checks in motion/i })).toBeInTheDocument()
  })
})
