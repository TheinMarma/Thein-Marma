# Thein Marma — Portfolio

Personal portfolio for a WordPress developer and SaaS builder based in Bangladesh. Built with Next.js App Router, React, TypeScript, Tailwind CSS, and npm.

## Development

Requires Node.js 20.9 or newer (Node.js 24 recommended).

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Production

```sh
npm run build
npm run typecheck
npm start
```

The production build exports to `out/`. `npm start` serves the static export locally.

For static hosting, use `npm ci` to install dependencies, `npm run build` as the build command, and `out` as the publish directory. Upload the contents of `out/`, not the source folder or `node_modules/`. No environment variables or backend server are required. The Node version is pinned in `.nvmrc`.

The existing Sites deployment uses `.openai/hosting.json`; preserve its project ID. Its audience remains private until explicitly changed in Sites. Search indexing is enabled in the page metadata for public hosting, but private access still prevents public discovery.

`node_modules/`, `.next/`, `out/`, and `*.tsbuildinfo` are generated and ignored by Git. Keep the lockfile for reproducible installs and the font license files for redistribution.

## Editing

- `data/portfolio.ts` — profile, about copy, products, selected work, experience, technologies, social links, and contact details.
- `app/page.tsx` — portfolio sections and contact layout.
- `components/` — shared navigation, profile, cards, and social links.
- `app/layout.tsx` — metadata and footer.
- `app/globals.css` — Tailwind theme and global styles.
- `app/icon.svg` — circular profile-photo favicon.
- `public/assets/` — Whatisdue and aaine SVG icons.
- `components/dynamic-year.tsx` — browser-updated copyright year and experience counts. The experience start year is configured in `data/portfolio.ts` (currently 2022).
- `app/fonts/` — self-hosted IBM Plex Sans and IBM Plex Mono, loaded through `next/font/local`, with their licenses.

Get in Touch opens an email to hello@theinmarma.dev. The Contact section also includes the alternate email and Upwork profile.
