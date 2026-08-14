# LifestyleIQ marketing site

Public marketing site for [LifestyleIQ](https://lifestyleiq.io): a personal health intelligence platform.

Brand, color, type, and logo rules follow **[LIQ OS](https://liq-os.lifestyleiq.io/)** (Brand Identity v1.1.0 and Design Language Volume 02). Do not invent one-off palette or wordmark treatments.

## What’s included

- SEO metadata, sitemap, robots, and JSON-LD
- Overview, feature list, legal disclaimers, and privacy policy
- App Store / Google Play links (empty env vars render as **Coming soon**)
- Contact form delivered to `NEXT_PUBLIC_CONTACT_EMAIL` via [FormSubmit](https://formsubmit.co)

## Local development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for sitemap, Open Graph, and form redirect |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Inbox for the contact form (currently `dustin@dustinriley.io`) |
| `NEXT_PUBLIC_APP_STORE_URL` | iOS listing. Leave blank to stub |
| `NEXT_PUBLIC_PLAY_STORE_URL` | Android listing. Leave blank to stub |

The first FormSubmit delivery to a new address requires an email confirmation from that inbox.

## Brand assets

`public/brand/` holds the product icon (from the LifestyleIQ app) and LIQ OS source SVGs. The horizontal SVG is a reviewed placeholder until optical refinement is approved in LIQ OS.

## Stack

- Next.js (App Router) and TypeScript
- Tailwind CSS mapped to LIQ OS tokens
- Inter via `next/font`
