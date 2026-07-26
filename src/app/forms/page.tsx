import Link from "next/link";
import { ArrowRight, FileText, ShieldCheck, PenLine } from "lucide-react";
import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";
import { contact, medicalDisclaimer } from "@/lib/site-config";

export const metadata = {
  title: "Waivers & Intake Forms | Hijama and More",
  description:
    "The health questionnaire and consent forms completed before a first ḥijāma appointment, signed electronically.",
};

/**
 * ─── TO UPDATE ──────────────────────────────────────────────────────────
 * When the real documents are ready, set `href` on the relevant entry to
 * the DocuSign signing link (or a PDF placed in /public). Any entry with a
 * `href` renders as a button; the rest show as "coming soon".
 * ────────────────────────────────────────────────────────────────────────
 */
const documents: { title: string; icon: typeof FileText; text: string; href: string | null }[] = [
  {
    title: "Health & Intake Questionnaire",
    icon: FileText,
    text: "Your medical history, current medications, allergies, and anything that affects whether ḥijāma is safe for you. This is what tells us when to ask for physician clearance first.",
    href: null,
  },
  {
    title: "Informed Consent & Waiver",
    icon: PenLine,
    text: "What the procedure involves, the marks and scabbing to expect, the risks, and your acknowledgement that ḥijāma is complementary rather than a replacement for medical care.",
    href: null,
  },
  {
    title: "Aftercare Acknowledgement",
    icon: ShieldCheck,
    text: "The instructions for the day of your session and the days that follow — rest, hydration, keeping the sites clean, and when to get in touch if something doesn't look right.",
    href: null,
  },
];

const process = [
  {
    step: "01",
    title: "Sent when you book",
    text: "Once your appointment is confirmed, the forms are emailed to you as a signing link. Nothing to print, nothing to bring.",
  },
  {
    step: "02",
    title: "Signed electronically",
    text: "Forms are sent for electronic signature through DocuSign, so your signature is timestamped, verifiable and legally recognised.",
  },
  {
    step: "03",
    title: "Reviewed before you arrive",
    text: "Your answers are read before your appointment. If anything needs a conversation or physician clearance, we raise it with you beforehand rather than at the door.",
  },
  {
    step: "04",
    title: "Kept confidential",
    text: "Completed forms are stored securely and are not shared with anyone. They are yours; a copy is sent to you at the point of signing.",
  },
];

export default function Forms() {
  return (
    <div className="pt-32 pb-24 px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* ── HEADER ── */}
        <AnimatedSection className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">
            Before Your First Visit
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-charcoal leading-[1.04]">
            Waivers &amp;<br />Intake Forms
          </h1>
          <p className="mt-8 text-charcoal/50 text-base leading-relaxed max-w-xl">
            Every new client completes a short health questionnaire and a consent form before their
            first session. It takes a few minutes and it is the reason we can tell you honestly
            when ḥijāma is a good fit and when it isn&rsquo;t.
          </p>
        </AnimatedSection>

        {/* ── DRAFT NOTICE ── */}
        <AnimatedSection className="mb-20">
          <div className="rounded-2xl border border-gold/30 bg-gold/[0.06] p-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold mb-3">
              Draft &mdash; forms not yet live
            </p>
            <p className="text-sm text-charcoal/60 leading-relaxed">
              The documents below are being finalised and will be available to sign here shortly.
              Until then they are sent to you directly when your appointment is confirmed, so
              nothing is held up. If you&rsquo;d like to see them in advance, just ask.
            </p>
          </div>
        </AnimatedSection>

        {/* ── DOCUMENTS ── */}
        <AnimatedSection className="mb-8">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.22em] text-sage pb-5 border-b border-sage/15">
            The Documents
          </h2>
        </AnimatedSection>

        <AnimatedSection stagger className="flex flex-col gap-5 mb-24">
          {documents.map(({ title, icon: Icon, text, href }) => (
            <AnimatedChild key={title}>
              <div className="rounded-2xl border border-sage/15 bg-white p-8">
                <div className="flex items-start justify-between gap-6 mb-4">
                  <h3 className="font-bold text-charcoal text-[17px] tracking-tight">{title}</h3>
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-sage/10">
                    <Icon size={16} className="text-sage" />
                  </div>
                </div>
                <p className="text-sm text-charcoal/50 leading-relaxed">{text}</p>
                {href ? (
                  <a
                    href={href}
                    className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-sage hover:underline"
                  >
                    Open and sign
                    <ArrowRight size={14} />
                  </a>
                ) : (
                  <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal/30 mt-6 font-semibold">
                    Sent to you when your appointment is confirmed
                  </p>
                )}
              </div>
            </AnimatedChild>
          ))}
        </AnimatedSection>

        {/* ── HOW IT WORKS ── */}
        <AnimatedSection className="mb-10">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.22em] text-sage pb-5 border-b border-sage/15">
            How Signing Works
          </h2>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-10 mb-24">
          {process.map((item) => (
            <AnimatedChild key={item.step}>
              <span className="text-xs font-bold text-charcoal/15 tracking-[0.2em] block mb-5">
                {item.step}
              </span>
              <h3 className="font-bold text-charcoal mb-3 text-[15px]">{item.title}</h3>
              <p className="text-sm text-charcoal/45 leading-relaxed">{item.text}</p>
            </AnimatedChild>
          ))}
        </AnimatedSection>

        {/* ── DISCLAIMER + CTA ── */}
        <AnimatedSection>
          <div className="rounded-2xl border border-sage/15 bg-sage/[0.05] p-9 mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sage mb-4">
              Important
            </p>
            <p className="text-sm text-charcoal/60 leading-relaxed">{medicalDisclaimer}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="flex flex-wrap items-center gap-4 pt-10 border-t border-sage/10">
          <Link
            href="/request-appointment"
            className="inline-flex items-center gap-2 bg-sage text-white font-medium px-8 py-4 rounded-full hover:bg-sage/90 transition-colors text-sm"
          >
            Request an Appointment
            <ArrowRight size={15} />
          </Link>
          <a
            href={`mailto:${contact.email}`}
            className="text-sm text-charcoal/45 hover:text-sage transition-colors"
          >
            Questions about the forms? {contact.email}
          </a>
        </AnimatedSection>
      </div>
    </div>
  );
}
