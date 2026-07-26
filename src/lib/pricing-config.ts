/**
 * Service tiers and pricing.
 *
 * ─── TO UPDATE ────────────────────────────────────────────────────────────
 * Prices are plain strings — edit them here and every page picks up the
 * change. Speciality treatments can be added to or removed from
 * `specialityTreatments` freely; the page lays them out automatically.
 * ──────────────────────────────────────────────────────────────────────────
 */

/* ── 1. Speciality cupping ─────────────────────────────────────────────── */

export const specialityTreatments = [
  { name: "Hormonal detox", note: "Endocrine and metabolic support" },
  { name: "Infertility / PCOS", note: "Reproductive and hormonal support" },
  { name: "Specific joints", note: "Knees, elbows, ankles, wrists and shoulders" },
  { name: "Colon detox", note: "Digestive and abdominal focus" },
  { name: "Stress relief", note: "A calming, tension-releasing session" },
  { name: "Weight loss", note: "Circulation and metabolic support" },
  { name: "Headaches & migraines", note: "Head, neck and upper back points" },
  { name: "Muscle aches", note: "Generalised muscular soreness" },
  { name: "Spiritual cleansing & ruqyah", note: "Ḥijāma paired with Qur'anic ruqyah" },
  { name: "Cellulite reduction", note: "Female clients, seen by a female practitioner" },
  { name: "Acute sports injury", note: "Recent strains and soft-tissue injury" },
  { name: "General sport recovery", note: "Between hard efforts and after competition" },
  { name: "Sciatica pain", note: "Lower back, glute and posterior leg" },
  { name: "Facial cupping", note: "Light suction, no incisions" },
  { name: "Head, neck & shoulders", note: "The most requested session we offer" },
];

/* ── 2. General detox ──────────────────────────────────────────────────── */

export const generalDetoxTiers = [
  {
    cups: "Up to 7 cups",
    price: "$75",
    description: "A focused session on a single area — where most first-time clients start.",
  },
  {
    cups: "8 – 10 cups",
    price: "$95",
    description: "Fuller coverage across the back, or two areas treated in one visit.",
  },
  {
    cups: "11 – 15 cups",
    price: "$110",
    description: "A comprehensive detox session across several areas.",
  },
  {
    cups: "16 – 20 cups",
    price: "$125",
    description: "Our most extensive session, for full coverage.",
  },
];

/* ── 3. Student discount ───────────────────────────────────────────────── */

export const studentDiscount = {
  headline: "25% off",
  secondary: "+ a further 15% off",
  secondaryCondition: "when you bring a new client with you",
  points: [
    "25% off any speciality or general detox session",
    "A further 15% off when you bring a new client with you",
    "Valid on presentation of a current student ID",
    "Open to full-time students at any school, college or university",
  ],
};

/* ── 4. Subscription ───────────────────────────────────────────────────── */

export const subscription = {
  price: "$1,000",
  headline: "12 sessions",
  points: [
    "12 sessions, used at your own pace",
    "Priority booking, including Sunnah days",
    "Well below the single-session rate",
    "Transferable within your immediate household",
  ],
  disclaimer:
    "Only certain specialities are included, and deals of 10 to 15 cups or less are included.",
};

/* ── Booking ───────────────────────────────────────────────────────────── */

export const bookingSteps = [
  {
    step: "01",
    title: "Send a request",
    text: "Fill in the appointment form with the treatment you're after, the days that suit you, and how you'd like to be reached.",
  },
  {
    step: "02",
    title: "It reaches me directly",
    text: "Every request notifies me straight away by text and email. Nothing sits in a queue and there's no receptionist between us.",
  },
  {
    step: "03",
    title: "I confirm with you",
    text: "I reply personally within 24 hours — by text or email, whichever you asked for — to settle the time and confirm the price before anything is booked.",
  },
  {
    step: "04",
    title: "Intake before your first visit",
    text: "You'll complete a short health questionnaire and consent form ahead of your first appointment so we can go through anything relevant properly.",
  },
];
