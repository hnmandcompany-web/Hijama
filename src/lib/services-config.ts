/**
 * Additional services beyond ḥijāma.
 *
 * ─── TO UPDATE ────────────────────────────────────────────────────────────
 * Each entry generates its own page at /services/<slug>. All of them are
 * currently placeholders: add a `body` array of paragraphs and, if useful,
 * an `includes` list, and the "details to follow" notice disappears
 * automatically. Set `status` to "available" once a service is live.
 * ──────────────────────────────────────────────────────────────────────────
 */

export interface Service {
  slug: string;
  title: string;
  summary: string;
  status: "tba" | "available";
  /** Paragraphs of page copy. Empty means the page shows the TBA notice. */
  body: string[];
  /** Optional bullet list of what the service covers. */
  includes?: string[];
}

export const services: Service[] = [
  {
    slug: "counseling",
    title: "Counseling",
    summary:
      "One-to-one counseling grounded in Islamic principles, for individuals working through personal, family or faith-related difficulty.",
    status: "tba",
    body: [],
  },
  {
    slug: "umrah-and-hajj",
    title: "Umrah & Hajj",
    summary:
      "Preparation, guidance and accompaniment for the journey — the fiqh of the rites, the practicalities, and what to expect once you're there.",
    status: "tba",
    body: [],
  },
  {
    slug: "wedding-services",
    title: "Wedding Services",
    summary:
      "Support across the whole arc of a marriage: what comes before it, the nikāḥ itself, and the years that follow.",
    status: "tba",
    body: [],
    includes: [
      "Wedding planning",
      "Pre-marriage preparation and compatibility discussion",
      "Officiating the nikāḥ — certified marriage officiant, Commonwealth of Pennsylvania",
      "Post-marriage guidance",
    ],
  },
  {
    slug: "spiritual-counseling",
    title: "Spiritual Counseling",
    summary:
      "For questions of faith, doubt, purpose and practice — worked through with someone trained in the tradition rather than talked around.",
    status: "tba",
    body: [],
  },
  {
    slug: "intimacy-coaching",
    title: "Intimacy & Marital Coaching",
    summary:
      "Frank, discreet guidance on intimacy within marriage, addressed with both the fiqh and the human reality taken seriously.",
    status: "tba",
    body: [],
  },
  {
    slug: "islamic-q-and-a",
    title: "Islamic Q & A",
    summary:
      "Answers to questions of fiqh and practice from a qualified Muftī, with the reasoning shown rather than a verdict handed down.",
    status: "tba",
    body: [],
  },
  {
    slug: "quran-courses",
    title: "Private Qur'an Courses",
    summary:
      "Private tuition in recitation, tajwīd and memorisation, paced to the student rather than a syllabus.",
    status: "tba",
    body: [],
  },
  {
    slug: "convert-intensive",
    title: "Convert Intensive Course",
    summary:
      "A structured course for new Muslims covering belief, prayer, purification and the practical shape of daily life.",
    status: "tba",
    body: [],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
