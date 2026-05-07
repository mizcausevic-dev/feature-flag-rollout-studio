# Feature Flag Rollout Studio

React + TypeScript rollout workspace for staged releases, segment targeting, experiment-linked delivery, and kill-switch-ready operational control.

## Recruiter Takeaway

This project shows operator-facing frontend systems design for feature releases that need more than a simple toggle. It translates experimentation and rollout pressure into segment readiness, guardrails, launch states, and explicit next actions.

## Tech Stack

[![React](https://img.shields.io/badge/React-19-111827?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=111827&color=0F172A)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-111827?style=for-the-badge&logo=vite&logoColor=FFD84D&labelColor=111827&color=6D28D9)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.X-111827?style=for-the-badge&logo=typescript&logoColor=E5F0FF&labelColor=111827&color=2563EB)](https://www.typescriptlang.org/)
[![CSS](https://img.shields.io/badge/CSS-Rollout%20UI-111827?style=for-the-badge&logo=css&logoColor=F8FAFC&labelColor=111827&color=38BDF8)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vitest](https://img.shields.io/badge/Vitest-Tested-111827?style=for-the-badge&logo=vitest&logoColor=ffffff&labelColor=111827&color=A855F7)](https://vitest.dev/)
[![License](https://img.shields.io/badge/License-MIT-111827?style=for-the-badge&logo=github&logoColor=ffffff&labelColor=111827&color=84CC16)](https://opensource.org/license/mit)

## Overview

| Area | What it covers |
| --- | --- |
| Executive snapshot | Active flags, gradual launches, kill switches, guardrail alerts |
| Rollout activity | Weekly release pressure across staged launches |
| Segment readiness | Audience targeting by channel and commercial posture |
| Flag portfolio | Live, paused, gradual, and rollback-sensitive releases |
| Guardrails | KPI and performance checks attached to launch decisions |
| Action queue | Immediate operator decisions and escalation items |

## Business Problem

Feature-flag tooling often stops at “on or off.” Real rollouts need more:

- audience-aware exposure
- experiment linkage
- risk-based pause and rollback decisions
- guardrails around revenue, latency, or conversion
- operator visibility when rollout pressure rises

Feature Flag Rollout Studio reframes rollout management as an operational workspace rather than a developer-only toggle panel.

## Architecture

```mermaid
flowchart LR
    A["Experiment or release request"] --> B["Target cohort definition"]
    B --> C["Guardrail mapping"]
    C --> D["Gradual rollout"]
    D --> E{"Healthy?"}
    E -- "Yes" --> F["Ramp audience exposure"]
    E -- "No" --> G["Pause or rollback"]
    F --> H["Live release state"]
    G --> I["Operator action queue"]
```

## What This Demonstrates

- Internal-tool UX for growth and release operations
- A visual language for rollout states, warnings, and guardrails
- Multi-panel product thinking rather than a single dashboard view
- Frontend system design aligned to experimentation and launch workflows

## Screenshots

### Hero Capture

![Hero capture](./screenshots/01-hero.svg)

### Rollout Activity

![Rollout activity](./screenshots/02-rollout.svg)

### Flag Portfolio

![Flag portfolio](./screenshots/03-portfolio.svg)

### Action Queue

![Action queue](./screenshots/04-queue.svg)

## Local Run

```powershell
Set-Location "C:\Users\chaus\dev\repos\feature-flag-rollout-studio"
npm install
npm test
npm run build
npm run dev
```

## Portfolio Links

- [Kinetic Gain](https://kineticgain.com/)
- [Skills / Portfolio](https://mizcausevic.com/skills/)
- [LinkedIn](https://www.linkedin.com/in/mirzacausevic)
- [Medium](https://medium.com/@mizcausevic)
- [GitHub](https://github.com/mizcausevic-dev)
