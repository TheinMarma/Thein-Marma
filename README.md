# Portfolio

A Next.js App Router recreation of [piyushgarg.dev](https://www.piyushgarg.dev/), built with React, TypeScript, Tailwind CSS, and npm. The project lives directly in this repository root.

## Development

Requires Node.js 20.9 or newer (Node.js 24 recommended).

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Edit files in `app/`, `components/`, and `data/`; Next.js refreshes the page as you work.

## Production

```sh
npm run typecheck
npm run build
npm start
```

`npm run build` produces a static export in `out/`. `npm start` serves that export on port 3000. This project intentionally uses static export, so it does not use `next start`. Hosting configuration is in `.openai/hosting.json`.

## Structure

- `app/` — routes for home, courses, gadgets, and guestbook; layout, metadata, fonts, and global styles.
- `components/` — navigation, profile, activity calendar, cards, social links, cohorts, and the guestbook form.
- `data/` — editable content and snapshots of videos, activity, courses, products, and guestbook entries.
- `public/assets/` — locally hosted images and fonts.
- `postcss.config.mjs` — Tailwind CSS v4 PostCSS integration; theme values live in `app/globals.css`.
- `next.config.ts` — Next.js static-export configuration.

The npm lockfile is committed for repeatable installs. Generated output and dependencies are ignored by Git.

## Behavior

The design and public links follow the reference captured November 15, 2026. Activity, statistics, and original guestbook entries are snapshots. Guestbook submissions use browser local storage, preserving the previous `portfolio-guestbook-v1` entries. No GitHub authentication, shared database, or remote posting is configured.
