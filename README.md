# Plectara marketing site

Public marketing site for [Plectara](https://lifestyleiq.io): a personal health intelligence platform.

Brand, color, type, and logo rules follow **[PL-OS / LIQ OS](https://liq-os.lifestyleiq.io/)** (Plectara brand kit v2.0.0 and Design Language Volume 02). Do not invent one-off palette or wordmark treatments, and do not recreate the wordmark with a font.

## What’s included

- SEO metadata, sitemap, robots, and JSON-LD
- Overview, feature list, product support, legal disclaimers, and privacy policy
- App Store / Google Play links (empty env vars render as **Coming soon**)
- Homepage contact form delivered to `NEXT_PUBLIC_CONTACT_EMAIL` via [FormSubmit](https://formsubmit.co)
- Product support form delivered to `support@plectara.com`

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
| `NEXT_PUBLIC_CONTACT_EMAIL` | Inbox for the homepage contact form (currently `info@plectara.com`) |
| `NEXT_PUBLIC_APP_STORE_URL` | iOS listing. Leave blank to stub |
| `NEXT_PUBLIC_PLAY_STORE_URL` | Android listing. Leave blank to stub |

The first FormSubmit delivery to a new address requires an email confirmation from that inbox.

## Brand assets

`public/brand/` holds the approved Plectara lockups, symbol, app tile, and social card from the PL-OS brand kit.

## Stack

- Next.js (App Router) and TypeScript
- Tailwind CSS mapped to Plectara / PL-OS tokens
- Inter via `next/font`
