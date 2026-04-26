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

---

# Behavioral guidelines

These reduce common LLM coding mistakes. Tradeoff: bias toward caution over speed; for trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
