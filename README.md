# Hydrotech Service Sagl

Recovered source for the Hydrotech Service website currently deployed at `hydrotech-service-site.vercel.app`.

## Stack

- Astro
- TypeScript
- Static site generation
- Vercel Function for `/api/quote`
- Italian and German routes

## Recovery note

The original project was deployed to Vercel through the CLI and was not linked to GitHub. This repository reconstructs the site structure, copy, routes, SEO metadata and styling from the live deployment.

The binary images are recovered automatically from the surviving Vercel deployment by:

```bash
npm run sync-assets
```

Both `npm run dev` and `npm run build` run the recovery step automatically.

## Local development

```bash
npm install
npm run dev
```

## Quote form

The reconstructed `/api/quote` endpoint uses Resend. Configure these Vercel environment variables before moving production to this repository:

- `RESEND_API_KEY`
- `QUOTE_FROM_EMAIL`
- `QUOTE_TO_EMAIL` (optional, defaults to `info@hydrotechservice.ch`)

## Production domain

Canonical domain in the source is `https://www.hydrotechservice.ch`.
