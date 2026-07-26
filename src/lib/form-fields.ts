import { specialityTreatments, generalDetoxTiers } from "@/lib/pricing-config";

export interface Field {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  /** Small helper line rendered under the label. */
  hint?: string;
}

/**
 * Options for the "what are you booking" select. Built from the pricing
 * config so adding a speciality in one place updates the form too.
 */
export const serviceOptions: string[] = [
  "General detox",
  ...specialityTreatments.map((t) => `Speciality — ${t.name}`),
  "Subscription — 12 sessions",
  "Not sure yet — please advise",
];

export const cupCountOptions: string[] = [
  ...generalDetoxTiers.map((t) => `${t.cups} (${t.price})`),
  "Not sure — decide at the consultation",
];

export const contactMethodOptions = [
  "Text message",
  "Email",
  "Either is fine",
  "Phone call",
];

export const appointmentFields: Field[] = [
  { name: "name", label: "Full Name", type: "text", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  {
    name: "service",
    label: "What are you booking?",
    type: "select",
    required: true,
    options: serviceOptions,
  },
  {
    name: "cups",
    label: "Approximate number of cups",
    type: "select",
    required: false,
    options: cupCountOptions,
    hint: "Only a guide — we agree this together at the consultation.",
  },
  {
    name: "contact-method",
    label: "How should we reply?",
    type: "select",
    required: true,
    options: contactMethodOptions,
    hint: "Your request notifies the practitioner by text and email straight away.",
  },
  {
    name: "preferred-days",
    label: "Days & times that suit you",
    type: "text",
    required: false,
    hint: "Let us know if you'd like a Sunnah day (17th, 19th or 21st of the lunar month).",
  },
  {
    name: "student",
    label: "Student discount?",
    type: "select",
    required: false,
    options: [
      "Not applicable",
      "Yes — I'm a full-time student",
      "Yes — and I'm bringing a new client",
    ],
  },
  {
    name: "notes",
    label: "What's bringing you in?",
    type: "textarea",
    required: false,
    hint: "Anything relevant — symptoms, previous sessions, or questions.",
  },
];

export const contactFields: Field[] = [
  { name: "name", label: "Full Name", type: "text", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "message", label: "Message", type: "textarea", required: true },
];

export const notifyFields: Field[] = [
  { name: "email", label: "Email Address", type: "email", required: true },
];
