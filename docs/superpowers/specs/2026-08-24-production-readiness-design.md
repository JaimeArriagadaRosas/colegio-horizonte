# Production Readiness Design

## Goal

Evolve Colegio Horizonte from a fast portfolio prototype into an educational reference project that demonstrates a realistic frontend engineering lifecycle: architecture, accessibility, performance, SEO, analytics readiness, legal transparency, security, CI and deployment.

## Repository architecture

The repository remains a single modular React/Vite application. A monorepo is intentionally deferred because there is currently one deployable application and no shared package with multiple consumers.

A monorepo migration becomes justified when at least one of these conditions exists:

- a second independently deployable application such as an API, admin panel or documentation site;
- a shared package consumed by two or more applications;
- independently versioned tooling or design-system packages with clear ownership boundaries.

Until then, organization is expressed with focused source directories, `docs/`, `scripts/`, quality configuration and CI.

## Quality model

The production build is the source of truth for audits. The project adds Lighthouse CI with initial thresholds that are strict enough to detect regressions without encouraging score gaming:

- Performance >= 0.85 (warning)
- Accessibility >= 0.95 (error)
- Best Practices >= 0.95 (error)
- SEO >= 0.95 (error)

Lint, TypeScript build and Lighthouse CI are exposed as explicit npm scripts and run in GitHub Actions.

## Visual assets

The repository avoids emoji as interface or documentation iconography. Existing Lucide React SVG icons remain the default UI icon set. README-specific diagrams and banners are project-owned SVG files under `docs/assets/readme/`.

External assets must be documented in `docs/THIRD_PARTY_ASSETS.md` with source, license, local path and modifications. Simple Icons and Lucide are preferred sources when third-party vector assets are necessary.

## README

The README becomes the product landing page for the repository. It must explain:

- the fictitious nature of the school and data;
- the educational engineering objective;
- architecture and repository organization;
- stack and quality pipeline;
- Lighthouse and Core Web Vitals strategy;
- SEO, Search Console and Analytics readiness;
- accessibility and security;
- legal pages and licensing;
- local development, build, preview and deployment;
- the criteria for a future monorepo migration.

Custom SVG diagrams provide the visual layer instead of emoji.

## Analytics and Search Console

Google integrations are configuration-driven and disabled by default.

- `VITE_GOOGLE_SITE_VERIFICATION` optionally emits the Search Console verification meta tag.
- `VITE_GA_MEASUREMENT_ID` identifies the GA4 property.
- Analytics is initialized only after explicit browser consent.
- Consent is stored locally and can be declined.
- No Google identifier or secret is committed to source control.

The CSP is extended only for the minimum Google Analytics origins required by this opt-in integration.

## Legal transparency

The legal pages clearly state that Colegio Horizonte is fictitious and that the deployed site is a demonstration. Privacy documentation distinguishes the demonstration content from actual telemetry behavior and explains that optional analytics runs only after consent.

## License

The project uses a proprietary source-available license: public viewing for portfolio and educational reference is allowed, but copying, redistribution, rebranding, derivative deployment and commercial exploitation require prior written permission. Third-party dependencies and assets retain their original licenses.

## Deployment

Vercel remains the recommended zero-cost deployment target for the current educational/non-commercial version. The application must remain portable: standard `npm run build` output is the deployment artifact, and application logic must not depend on Vercel-specific runtime APIs.
