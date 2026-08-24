# Production Readiness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn Colegio Horizonte into an educational production-readiness reference without introducing an unnecessary monorepo.

**Architecture:** Keep one React/Vite application with explicit quality, documentation, telemetry and deployment boundaries. Add configuration-driven Google integrations and consent-gated analytics while preserving portability.

**Tech Stack:** React 19, TypeScript 6, Vite 8, React Router 7, React Helmet Async, Tailwind CSS 4, Oxlint, Lighthouse CI, GitHub Actions, Vercel.

**Spec:** `docs/superpowers/specs/2026-08-24-production-readiness-design.md`

## Global Constraints

- Keep `main` untouched; implement on `chore/production-readiness`.
- Do not migrate to monorepo until a second deployable app or genuinely shared package exists.
- Do not use emoji as documentation or UI iconography.
- Prefer SVG for visual documentation assets.
- Keep Google IDs out of source control; use Vite environment variables.
- Analytics must remain disabled until the visitor explicitly consents.
- Preserve standard Vite deployment portability.

---

### Task 1: Licensing and asset provenance

**Files:**
- Create: `LICENSE`
- Create: `docs/THIRD_PARTY_ASSETS.md`

- [ ] Add a proprietary source-available license that allows viewing for portfolio/reference while reserving copying, redistribution, rebranding, derivative deployment and commercial rights.
- [ ] Explicitly preserve third-party license ownership.
- [ ] Add a provenance register for Lucide, Simple Icons and project-owned README SVGs.
- [ ] Review text for conflicts with public GitHub visibility.

### Task 2: README visual system

**Files:**
- Create: `docs/assets/readme/hero.svg`
- Create: `docs/assets/readme/architecture.svg`
- Create: `docs/assets/readme/quality-pipeline.svg`
- Modify: `README.md`

- [ ] Create project-owned, text-readable SVG diagrams with no external fonts or embedded scripts.
- [ ] Rewrite README as the repository landing page.
- [ ] Explain fictitious data, architecture, quality pipeline, SEO, analytics, legal model, deployment and future monorepo criteria.
- [ ] Remove emoji from README.

### Task 3: Lighthouse quality gates

**Files:**
- Create: `lighthouserc.json`
- Modify: `package.json`
- Create: `.github/workflows/quality.yml`

- [ ] Add Lighthouse CI as a development dependency.
- [ ] Add `quality`, `lighthouse` and `lighthouse:ci` scripts.
- [ ] Audit representative SPA routes from the built `dist` directory with three runs.
- [ ] Add CI for install, lint, build and Lighthouse CI.

### Task 4: Search Console and consent-gated GA4

**Files:**
- Create: `.env.example`
- Create: `src/components/analytics/AnalyticsConsent.tsx`
- Modify: `src/components/layout/SEO.tsx`
- Modify: `src/main.tsx`
- Modify: `vercel.json`
- Modify: `_headers`

- [ ] Emit Google Search Console verification only when `VITE_GOOGLE_SITE_VERIFICATION` is configured.
- [ ] Implement a small consent banner that stores `accepted` or `declined` in localStorage.
- [ ] Inject `gtag.js` only after consent and only when `VITE_GA_MEASUREMENT_ID` is configured.
- [ ] Expand CSP minimally for `googletagmanager.com` and `google-analytics.com`.
- [ ] Keep analytics inert in local/default builds without an ID.

### Task 5: Legal transparency

**Files:**
- Modify: `src/pages/Privacidad.tsx`
- Modify: `src/pages/Terminos.tsx`

- [ ] State prominently that Colegio Horizonte and its contact data are fictitious demonstration content.
- [ ] Explain optional consent-gated analytics behavior and local consent storage.
- [ ] Avoid presenting fictitious institutional data as the legal identity of a real controller.
- [ ] Preserve the educational intent of the pages.

### Task 6: Verification

- [ ] Verify JSON and TypeScript changes by CI.
- [ ] Confirm the quality workflow reaches install, lint, build and Lighthouse steps.
- [ ] Review branch diff against `main` for accidental scope creep.
- [ ] Record any external-credential steps that cannot be completed in source control: Vercel project connection, GA4 measurement ID and Search Console verification value.
