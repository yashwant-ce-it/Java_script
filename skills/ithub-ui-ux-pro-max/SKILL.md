# ithub ui ux pro max skill

## Summary
A reusable skill to guide UI/UX design workflows for web projects using an "ithub"-centred process. Produces a checklist-driven, repeatable flow from discovery through handoff, with decision points, acceptance criteria, and example prompts.

## Purpose
Help engineers and designers run pragmatic, consistent UI/UX sprints for features or small products. Outputs a concise artifact set: research notes, wireframe checklist, clickable prototype guidance, accessibility checklist, handoff package.

## Scope
- Workspace-scoped by default; place this SKILL.md in a project folder to keep generated artifacts local.
- Intended for feature-level or small product flows (1–4 week effort).

## When to use
- Starting a new UI/UX task or sprint for a feature
- Preparing a design review or stakeholder demo
- Producing developer handoff artifacts

## Step-by-step workflow
1. Clarify outcome and constraints
   - Ask: target users, goals, metrics, platform, deadlines, constraints.
2. Quick discovery (1–2 days)
   - Gather existing analytics, user feedback, and competitive references.
   - Produce a 1-page summary of findings.
3. Define success criteria
   - Write measurable outcomes (e.g., +10% conversion on X, reduce clicks by 2).
4. Low-fidelity exploration
   - Generate 3 microflows or wireframes addressing success criteria.
   - Choose one flow for high-fidelity prototype.
5. Prototype & test
   - Build a clickable prototype (Figma/HTML) and run 3–5 quick tests.
6. Accessibility & performance checks
   - Run an accessibility audit (WCAG basics) and note required fixes.
7. Handoff pack
   - Create component list, states, assets, tokens, and a short implementation guide.

## Decision points and branching logic
- If analytics show multiple dominant user flows → prototype the top 2 and A/B test.
- If deadline < 3 days → skip high-fidelity prototype and deliver annotated wireframes.
- If accessibility risk high (core task) → prioritize fixes in prototype iteration.

## Quality criteria / Acceptance checks
- Research summary covers sources and one insight per source.
- Wireframe accepted by stakeholders (one sign-off) before prototyping.
- Prototype passes basic usability test (no critical blockers in 3 sessions).
- Accessibility: contrast and keyboard navigation evaluated, major issues documented.

## Outputs / Artifacts
- `research-summary.md` — 1 page with insights and citations.
- `wireframes/` — annotated wireframes (PNG or Figma links).
- `prototype/` — link to Figma or local HTML prototype.
- `handoff/` — component list, tokens, and a short implementation guide.

## Example prompts
- "Run the discovery step: summarize existing analytics and list 5 user pain points for the checkout flow."
- "Generate 3 low-fidelity wireframe options for a mobile onboarding screen, include accessibility notes."
- "Create a handoff checklist for developers including CSS tokens and exportable assets."

## Suggested template files to create
- `research-summary.md` (one-paragraph per finding)
- `wireframes/README.md` (how to view and annotate)
- `handoff/implementation-guide.md` (component map + tokens)

## Follow-ups and customizations
- Add automated checks: integrate Lighthouse or axe-core audit steps.
- Add project-specific constraints (branding, token names) to a small config section.

## Maintenance notes
- Review and refine this skill after 2–3 uses to capture project-specific patterns.
