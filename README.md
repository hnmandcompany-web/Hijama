# Hijama and More

Professional Hijama (cupping therapy) website. Next.js 14 App Router, Tailwind CSS, framer-motion.

**Domain:** hijamaandmore.com

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS (custom design tokens: sage, gold, cream, charcoal)
- framer-motion (organic luxury animations)
- lucide-react (icons)
- Netlify (deployment + serverless forms)

## Pages

| Route | Description |
|---|---|
| `/` | Hero, benefits grid, testimonials, CTA |
| `/about` | Practitioner bio, certifications, parallax image |
| `/pricing` | 3-tier pricing cards from `pricing-config.ts` |
| `/request-appointment` | Netlify form: name, phone, email, service, notes |
| `/contact` | Contact info + message form |
| `/additional-services` | Coming soon 2028, email notify form |

## Development

```bash
npm install
npm run dev
```

## Deployment

Deploy via Netlify. Point domain `hijamaandmore.com` to Netlify DNS.
The `@netlify/plugin-nextjs` plugin handles SSR/ISR and form processing.

## Updating Prices

Edit `src/lib/pricing-config.ts` — change `price: "TBD"` to the actual price string.
