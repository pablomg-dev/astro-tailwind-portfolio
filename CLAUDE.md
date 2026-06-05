# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Common Commands

| Command | Purpose |
|---|---|
| `pnpm install` | Install dependencies. This project uses `pnpm` and Node 18+. |
| `pnpm dev` |
| `pnpm start` | Run the development server (alias for `pnpm dev`). Shows the site on `http://localhost:4321` |
| `pnpm build` | Build static assets to `./dist` after type-check and Astro build validation. |
| `pnpm preview` | Serve the built site locally for final inspection. |
| `pnpm optimize-images` | Optional: Run a tiny image optimization script included in `scripts/optimize-images.js`. |
|
> **Tip**: Cycle dependencies once with `pnpm i -g node-gyp` if you run into pre‑build errors.
|
> **Note**: The repo does not ship any test framework. If you add tests, use your preferred framework and call them via `pnpm test`.

---

## Project Structure Overview

```
astro-tailwind-portfolio/
├─ src/
│  ├─ assets/          # PNG, SVG, and other static assets used by components
│  ├─ components/      # Re‑usable .astro components (Header, Footer, Hero, etc.)
│  ├─ icons/           # SVG component icons used in the UI
│  ├─ scripts/         # Misc scripts (e.g. image optimisation)
│  ├─ styles/          # Global CSS (currently empty, Tailwind handles styling)
│  ├─ types/           # TypeScript type definitions for static data
│  ├─ config/          # Configuration data (translations, Sentry, etc.)
│  └─ pages/           # Page routes – currently only `index.astro`
├─ public/              # Static files served at root (e.g. favicon)
├─ astro.config.mjs     # Astro configuration – integrates Tailwind + Partytown
├─ tailwind.config.mjs  # Tailwind utility classes – custom fonts, colors, animations
├─ package.json         # NPM/Yarn package configuration
└─ README.md            # Project documentation, commands, and usage
```

### Core Technologies

- **Astro (v4.16.18)** – Static site generator with component‑first rendering. The `src/pages/index.astro` entry point relies on `src/layouts/Layout.astro` to provide a consistent layout.
- **Tailwind CSS (v3.4.11)** – Utility‑first styling. All classes are generated from `src/**/*.{astro,ts,tsx,md,...}`.
- **Partytown** – Runs third‑party scripts (e.g. Google Analytics) inside a WebWorker so that they don’t block the main thread. Configuration: `forward: ['dataLayer.push']`.
- **TypeScript** – The project is a strict `module` TS configuration. Types for data are in `src/types/index.ts`.

### Key Page/Component Flow

1. **`src/pages/index.astro`** – Main entry point that imports `Hero`, `About`, `Projects`, `Contact`, etc., all wrapped in the `Layout` component.
2. **`src/layouts/Layout.astro`** – Includes `<head>` meta tags (pulled from `astro.config.mjs`), global CSS, and places for the page content via a `<slot />`.
3. **`src/components/`** – Most UI pieces live here. They are `<Astro/>` components (`.astro`) that consume data via the `translations` object (`src/config/translations.ts`).
4. **`src/config/translations.ts`** – Centralised key/value store for strings and image imports. Modifying the portfolio only requires updating this file.
5. **`src/assets/`** – Image imports used by components. The images are bundled via Vite during build.
6. **Google Analytics** – The site declares its GA4 integration in `astro.config.mjs` via the Partytown config.

### Running the Site Locally

```bash
# Fetch deps
pnpm install

# Start dev server
pnpm dev     # same as `pnpm start`
# Visit http://localhost:4321

# Build for production
pnpm build
# Serve preview
pnpm preview
```

If you want to ship optimized images before a build, run:

```bash
pnpm optimize-images
```

There are no built‑in tests, but if you add them (e.g., with Vitest or Jest) follow the standard `pnpm test` pattern.

---

## Cursor / Copilot Rules

No explicit cursor or Copilot rule files are present in this repository.

---

## Contributions & Maintenance

- Work on the components under `src/components` and layout changes in `src/layouts`. 
- All source files are TypeScript compatible and should adhere to the import style shown in the README.
- Keep the image assets in `src/assets` and reference them via relative imports.
- If you modify global Tailwind theme values, update `tailwind.config.mjs` accordingly.

---

**End of CLAUDE.md**