# Hydrotech Service Sagl

Production source for the Hydrotech Service website.

## Stack

- Astro
- TypeScript
- Static site generation
- Vercel Function for `/api/quote`
- Italian and German routes

## Assets

All production assets are committed directly under `public/`, including the favicon, Hydrotech logo and JPG/WebP/AVIF versions of the site imagery.

The build is self-contained and does not download assets from the old website or from a previous Vercel deployment.

## Local development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run check
npm run build
```

GitHub Actions uses the committed `package-lock.json` with `npm ci` and validates the production output, required source and built assets, current office address/hours, bilingual sitemap metadata, confirmation pages and absence of stale CTA copy.

## Quote form

The `/api/quote` endpoint sends requests through Resend and redirects successful browser submissions to `/grazie/` or `/de/danke/`.

Configure these Vercel environment variables before production cutover:

- `RESEND_API_KEY`
- `QUOTE_FROM_EMAIL`
- `QUOTE_TO_EMAIL` (optional, defaults to `info@hydrotechservice.ch`)

Never commit these values to GitHub.

## Production domain

Canonical domain: `https://www.hydrotechservice.ch`.

`vercel.json` contains permanent redirects from the indexed legacy `.html` routes to the current Italian and German routes, plus baseline security headers.

## Production cutover checklist

Before pointing the existing domain at the new deployment:

1. Confirm the GitHub Actions build is green on the exact commit being shipped.
2. Configure the Resend environment variables in the Vercel production environment.
3. Submit one real Italian form and one real German form and confirm delivery to the business inbox.
4. Verify legacy `.html` URLs return permanent redirects to their replacement pages.
5. Verify `robots.txt`, `sitemap.xml`, canonical URLs and both language versions on the production domain.
6. Only then move the domain/DNS to the new Vercel project.
