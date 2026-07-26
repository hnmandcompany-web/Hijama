/**
 * Single source of truth for contact details, socials and legal copy.
 *
 * ─── TO UPDATE ────────────────────────────────────────────────────────────
 * Replace the placeholder values below with the real ones. Anything marked
 * `null` is hidden from the site until a value is filled in, so the page
 * never shows a fake number or a dead link.
 * ──────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Hijama and More",
  shortName: "Hijama & More",
  domain: "hijamaandmore.com",
  url: "https://hijamaandmore.com",
};

export const contact = {
  email: "info@hijamaandmore.com",

  /** Set `display` and `href` (e.g. "tel:+14125550123") once the number is live. */
  phone: {
    display: null as string | null,
    href: null as string | null,
  },

  location: {
    city: "Pittsburgh, Pennsylvania",
    note: "Private treatment room. The exact address is shared once your appointment is confirmed.",
  },

  /** How long we take to reply to a request. */
  responseTime: "24 hours",
};

export const socials: { label: string; href: string }[] = [
  { label: "Instagram", href: "https://instagram.com/hijamaandmore" },
  { label: "YouTube", href: "https://youtube.com/@hijamaandmore" },
];

export const medicalDisclaimer =
  "Ḥijāma is a complementary therapy, not a substitute for medical care, and we don't present it as a treatment or cure for any specific disease. What we describe on this site is what clients commonly experience and what the practice has traditionally been used for. If you have a diagnosed condition, keep working with your physician — and tell them you're having ḥijāma done.";
