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
npm run typecheck
npm run build
npm start
```

The production build exports to `out/`. `npm start` serves the static export. Hosting configuration is in `.openai/hosting.json`.

## Editing

- `data/portfolio.ts` — profile, about copy, products, selected work, experience, technologies, social links, and contact details.
- `app/page.tsx` — portfolio sections and contact layout.
- `components/` — shared navigation, profile, cards, and social links.
- `app/layout.tsx` — metadata and footer.
- `app/globals.css` — Tailwind theme and global styles.
- `app/icon.svg` — TM monogram favicon.
- `public/assets/` — locally hosted fonts.

Get in Touch opens an email to hello@theinmarma.dev. The Contact section also includes the alternate email and Upwork profile. JMG Digital Studios has no outbound project link because none was supplied.
