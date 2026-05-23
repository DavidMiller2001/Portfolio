# Copilot instructions for this repository

Purpose
- Short guide for Copilot sessions working on this Astro portfolio site: build/test commands, high-level architecture, and repo-specific conventions.

Build / Run / Test / Lint
- Uses pnpm (preferred). Node >= 22.12.0 declared in package.json.
- Install: pnpm install
- Local dev server: pnpm dev (starts Astro dev server)
- Build production site: pnpm build (output: ./dist/)
- Preview build locally: pnpm preview
- Astro CLI: pnpm astro -- <args>

Notes about tests & linters
- No test or lint scripts are present in package.json. If tests are added, follow the chosen runner's CLI to run a single test (e.g., jest <file> or vitest <pattern>). Add a "test" script to package.json for convenience.

High-level architecture
- Framework: Astro (static site / SSR-capable) with TypeScript config extending `astro/tsconfigs/strict` (see tsconfig.json).
- Tooling: Vite is used by Astro; Tailwind is integrated via @tailwindcss/vite plugin in astro.config.mjs.
- Structure (key folders):
  - src/pages — route pages (index.astro is the home page)
  - src/layouts — layout components (Layout.astro wraps pages)
  - src/components — UI components (reusable .astro files)
  - src/assets — images and static assets
  - src/styles — global.css contains color tokens and reset styles
- Global styles: src/styles/global.css contains a color palette using CSS variables and a custom reset. Also imports Tailwind.

Key conventions and patterns
- Layout wrapper: Pages import Layout from src/layouts/Layout.astro and render content inside <Layout>…</Layout>. Keep shared header/footer/nav in Layout.
- CSS variables and utility classes: project mixes global CSS variables (color tokens) and Tailwind utility classes. Prefer Tailwind for layout/spacing; use CSS variables for the color system.
- TypeScript: tsconfig extends Astro's strict config — expect strict typing for components and scripts.
- Scripts: package.json only exposes dev/build/preview/astro. Add any test/lint scripts in package.json root when introducing those tools.

Where to look first
- package.json — scripts and dependencies
- astro.config.mjs — Vite/Tailwind plugin wiring
- src/layouts/Layout.astro — page wrapper and global imports
- src/pages/index.astro — example page and component usage
- src/styles/global.css — color palette and global reset

AI/assistant config
- No CLAUDE.md, AGENTS.md, AIDER_CONVENTIONS.md, .cursorrules, .windsurfrules, or other known assistant-config files detected. If you add one, include its short description here so Copilot sessions use it.

Maintenance notes for Copilot sessions
- If adding tests or linters, update package.json scripts and briefly document the runner and how to execute a single test.
- Keep Layout.astro as the single place for site chrome (nav, meta tags); Copilot suggestions that move or duplicate global UI should be reviewed.

---
Generated from README.md, package.json, astro.config.mjs, tsconfig.json, and key src files.
