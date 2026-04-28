@AGENTS.md
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`diabloiv-millennial` is the personal-creator linktree site for the **DiabloIV_Millennial** persona — a multi-platform D4 streamer/creator hub. It is **separate from TheCodex** (the platform): TheCodex is a *product* with an authoritative voice; this site is a *person* with a warm, conversational voice. See [BRAND.md](BRAND.md) for voice and the boundary rules.

The site is a single linktree-style page that links out to YouTube, Twitch, TikTok, Instagram, Reddit, X, and a tip jar. Keep it small.

## Commands

- `npm run dev` — dev server (Next.js)
- `npm run build` — production static export → `out/`
- `npm start` — serve the production build (rarely useful here since output is static)
- `npm run lint` — ESLint

No test framework is configured.

## Deployment

Static export (`output: "export"`) deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`. The site is served at `/<repo-name>/`, so:

- `next.config.ts` sets `basePath` and `assetPrefix` to `/diabloiv-millennial` only when `NODE_ENV=production`
- `images.unoptimized: true` (Pages serves only static files)
- `<Image>` with `unoptimized: true` does **not** automatically prefix `basePath`. The page uses an explicit `ASSET_PREFIX` constant to prepend the prefix to image `src`s manually. If you add new images to `public/`, follow the same pattern (or use a helper).

## Stack

- Next.js 16.2.4 (App Router, RSC), React 19.2.4 — see `AGENTS.md`: Next 16 has breaking changes vs. training data; consult `node_modules/next/dist/docs/` before writing route or data-flow code
- Tailwind v4 via `@tailwindcss/postcss` (no `tailwind.config.*`; theme in `src/app/globals.css`)
- Fonts: Geist (sans) + Cinzel (display, used for headings/labels via `var(--font-cinzel)`)
- TypeScript, ESLint 9 (`eslint-config-next`)

## Architecture

Tiny by design:

```
src/app/
├── layout.tsx     # loads Geist + Cinzel, sets dark page background
├── page.tsx       # the linktree — `socials` array drives the rendered list
└── globals.css
public/images/     # backgrounds, emblems
```

`src/app/page.tsx` declares a `socials: SocialLink[]` array; each entry has `label`, `handle`, `href`, `icon` (inline SVG), and optional `featured` (used for the tip jar's stronger hover style). To add or change a link, edit that array — there's no CMS, no data layer.
