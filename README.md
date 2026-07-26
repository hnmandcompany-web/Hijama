# Hijama and More

Ḥijāma (cupping therapy) website. Next.js 14 App Router, Tailwind CSS, framer-motion.

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
| `/` | Hero, About Ḥijāma, Why We Do It, benefits, evidence teaser, CTA |
| `/pricing` | The four service tiers + how booking works |
| `/evidence` | Qur'ān, ḥadīth, scholarly statements, historical note, FAQ |
| `/team` | Meet Your Practitioner — bio and credentials |
| `/services` | Additional services hub |
| `/services/[slug]` | One page per additional service (all currently TBA) |
| `/forms` | Waivers & intake forms (draft; DocuSign flow described) |
| `/contact` | Email, phone, location, socials + message form |
| `/request-appointment` | Appointment request form |
| `/about` → `/team`, `/additional-services` → `/services` | Redirects for old links |

## Editing content

Almost all copy lives in `src/lib/`, so pages rarely need touching:

| File | What it holds |
|---|---|
| `site-config.ts` | Email, **phone**, location, socials, medical disclaimer |
| `pricing-config.ts` | All four tiers, speciality list, prices, booking steps |
| `about-config.ts` | About Ḥijāma, Why We Do It, the seven benefits |
| `evidence-config.ts` | Verses, ḥadīth, scholarly statements, history, FAQ |
| `team-config.ts` | Practitioner bio, credentials, headshot path |
| `services-config.ts` | Additional services and their individual pages |
| `form-fields.ts` | Fields for every form on the site |

### Things left as placeholders

- **Phone number** — `contact.phone` in `site-config.ts` is `null`, so the site
  shows "Phone line coming soon" instead of a made-up number. Set `display` and
  `href` to switch it on everywhere.
- **Practitioner photo** — `team-config.ts`, `photo: null`. Drop an image in
  `public/` and set the path.
- **Social links** — the Instagram/YouTube URLs in `site-config.ts` are guesses
  carried over from the original site; confirm or replace them.
- **Waiver / intake documents** — `documents[].href` in `src/app/forms/page.tsx`
  is `null` for each one. Set it to the DocuSign signing link (or a PDF in
  `public/`) and the card turns into a working button.
- **Additional service pages** — every entry in `services-config.ts` has an
  empty `body`. Add paragraphs and the "coming soon" notice disappears on its
  own.

## Appointment notifications

The appointment form posts to Netlify Forms. To make a request reach the
practitioner by **text and email**, configure notifications in the Netlify UI:

**Site settings → Forms → Form notifications**
- *Email notification* → the practitioner's inbox
- *Outgoing webhook* → an SMS provider (e.g. Twilio) for the text message

Form field names are declared in both `src/lib/form-fields.ts` and
`public/netlify-forms.html` (Netlify parses static HTML at build time to detect
forms). Keep the two in sync when adding a field.

## Development

```bash
npm install
npm run dev
```
