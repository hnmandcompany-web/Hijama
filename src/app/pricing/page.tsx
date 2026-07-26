import Link from "next/link";
import { ArrowRight, GraduationCap, Repeat, Sparkles, Droplets } from "lucide-react";
import {
  specialityTreatments,
  generalDetoxTiers,
  studentDiscount,
  subscription,
  bookingSteps,
} from "@/lib/pricing-config";
import { PricingCard } from "@/components/PricingCard";
import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";

export const metadata = {
  title: "Services & Pricing | Hijama and More",
  description:
    "Speciality cupping, general detox by cup count, student discounts and a 12-session subscription. Clear prices, confirmed before anything is booked.",
};

const tiers = [
  { id: "speciality", label: "Speciality Cupping", icon: Sparkles },
  { id: "student", label: "Student Discount", icon: GraduationCap },
  { id: "subscription", label: "Subscription", icon: Repeat },
  { id: "general-detox", label: "General Detox", icon: Droplets },
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-24">
      {/* ── HEADER ── */}
      <div className="px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">
              Services &amp; Pricing
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-charcoal leading-[1.04]">
              Four Ways<br />to Book
            </h1>
            <p className="mt-8 text-charcoal/50 text-base max-w-xl leading-relaxed">
              Every session includes a consultation before we start, the treatment itself, and
              aftercare guidance. Prices are confirmed with you before anything is booked — there
              are no add-ons at the door.
            </p>
          </AnimatedSection>

          {/* Tier jump nav */}
          <AnimatedSection stagger className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-28">
            {tiers.map(({ id, label, icon: Icon }, i) => (
              <AnimatedChild key={id} className="h-full">
                <a
                  href={`#${id}`}
                  className="h-full flex flex-col justify-between gap-6 rounded-2xl border border-sage/15 bg-white p-6 hover:border-sage/50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-charcoal/15 tracking-[0.2em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon size={16} className="text-sage" />
                  </div>
                  <p className="text-sm font-semibold text-charcoal group-hover:text-sage transition-colors">
                    {label}
                  </p>
                </a>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </div>

      {/* ── 1. SPECIALITY CUPPING ── */}
      <section id="speciality" className="px-8 lg:px-16 py-24 scroll-mt-24 bg-white border-y border-sage/10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">
                Tier One
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal leading-[1.1]">
                Speciality Cupping
              </h2>
              <p className="mt-6 text-charcoal/50 text-[15px] leading-relaxed max-w-xl">
                A session mapped to one specific complaint, using the points traditionally
                indicated for it. Tell us what&rsquo;s bringing you in and we&rsquo;ll confirm the
                right option — or tell you honestly if ḥijāma isn&rsquo;t the right answer for it.
              </p>
            </div>
            <div className="flex-shrink-0 rounded-2xl border border-sage/20 bg-sage/[0.06] px-7 py-6 lg:max-w-xs">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sage mb-3">
                Pricing
              </p>
              <p className="text-2xl font-bold tracking-tight text-charcoal mb-3">By cup count</p>
              <p className="text-xs text-charcoal/50 leading-relaxed">
                Speciality sessions are priced on the number of cups used — see the{" "}
                <a href="#general-detox" className="text-sage hover:underline">
                  rates below
                </a>
                . We confirm the exact cost with you before your appointment.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-sage/10 border border-sage/10 rounded-2xl overflow-hidden">
            {specialityTreatments.map((t, i) => (
              <AnimatedChild key={t.name} className="h-full">
                <div className="h-full bg-white p-7 hover:bg-cream transition-colors">
                  <span className="text-[10px] font-bold text-charcoal/15 tracking-[0.2em] block mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold text-charcoal text-[15px] mb-2">{t.name}</h3>
                  <p className="text-xs text-charcoal/40 leading-relaxed">{t.note}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>

          <AnimatedSection>
            <p className="mt-8 text-xs text-charcoal/35 leading-relaxed">
              This list grows and changes. If what you&rsquo;re after isn&rsquo;t here, ask —
              it may still be something we do.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2. STUDENT DISCOUNT ── */}
      <section id="student" className="px-8 lg:px-16 py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] gap-12 lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">
                Tier Two
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal leading-[1.1] mb-8">
                Student Discount
              </h2>
              <p className="text-6xl md:text-7xl font-bold tracking-tight text-sage leading-none">
                {studentDiscount.headline}
              </p>
              <p className="mt-6 text-xl font-semibold text-charcoal">{studentDiscount.secondary}</p>
              <p className="text-sm text-charcoal/45 mt-1">{studentDiscount.secondaryCondition}</p>
            </div>

            <div className="rounded-2xl border border-sage/15 bg-white p-9 flex flex-col justify-center">
              <ul className="flex flex-col gap-5">
                {studentDiscount.points.map((point) => (
                  <li key={point} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2.5 flex-shrink-0" />
                    <span className="text-[15px] text-charcoal/60 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-charcoal/35 mt-8 pt-8 border-t border-sage/10 leading-relaxed">
                Mention your student status when you send your request so the discount is applied
                to the price we quote you.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 3. SUBSCRIPTION ── */}
      <section id="subscription" className="px-8 lg:px-16 py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="rounded-3xl bg-charcoal px-8 py-14 md:px-14 md:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">
                    Tier Three &middot; Subscription
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.1] mb-10">
                    {subscription.headline}
                  </h2>
                  <p className="text-6xl md:text-7xl font-bold tracking-tight text-white leading-none">
                    {subscription.price}
                  </p>
                  <p className="text-sm text-white/40 mt-4">
                    for all twelve &mdash; paid up front
                  </p>
                </div>

                <div>
                  <ul className="flex flex-col gap-5 mb-10">
                    {subscription.points.map((point) => (
                      <li key={point} className="flex items-start gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2.5 flex-shrink-0" />
                        <span className="text-[15px] text-white/70 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sage mb-3">
                      Please note
                    </p>
                    <p className="text-xs text-white/50 leading-relaxed">
                      {subscription.disclaimer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 4. GENERAL DETOX ── */}
      <section
        id="general-detox"
        className="px-8 lg:px-16 py-24 scroll-mt-24 bg-white border-y border-sage/10"
      >
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">
              Tier Four
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal leading-[1.1]">
              General Detox
            </h2>
            <p className="mt-6 text-charcoal/50 text-[15px] leading-relaxed max-w-xl">
              The standard session, priced purely on how many cups are used. These are also the
              rates that speciality sessions are priced against.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {generalDetoxTiers.map((tier, i) => (
              <AnimatedChild key={tier.cups} className="h-full">
                <PricingCard
                  label={tier.cups}
                  price={tier.price}
                  description={tier.description}
                  highlighted={i === 1}
                />
              </AnimatedChild>
            ))}
          </AnimatedSection>

          <AnimatedSection>
            <p className="mt-8 text-xs text-charcoal/35 leading-relaxed max-w-[70ch]">
              Not sure how many cups you need? You don&rsquo;t have to decide in advance — we agree
              it together at the consultation, and you&rsquo;ll know the price before we begin.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── HOW BOOKING WORKS ── */}
      <section id="booking" className="px-8 lg:px-16 py-28 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">
              Scheduling
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal leading-[1.1]">
              How Booking Works
            </h2>
            <p className="mt-6 text-charcoal/50 text-[15px] leading-relaxed max-w-xl">
              There is no automated calendar and no third-party booking service. You send a
              request, it reaches me directly, and I reply to you myself.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-sage/10 border border-sage/10 rounded-2xl overflow-hidden">
            {bookingSteps.map((step) => (
              <AnimatedChild key={step.step} className="h-full">
                <div className="h-full bg-cream p-8">
                  <span className="text-xs font-bold text-charcoal/15 tracking-[0.2em] block mb-6">
                    {step.step}
                  </span>
                  <h3 className="font-bold text-charcoal mb-3 text-[15px]">{step.title}</h3>
                  <p className="text-sm text-charcoal/45 leading-relaxed">{step.text}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>

          <AnimatedSection className="mt-14 flex flex-wrap items-center gap-4">
            <Link
              href="/request-appointment"
              className="inline-flex items-center gap-2 bg-sage text-white font-medium px-8 py-4 rounded-full hover:bg-sage/90 transition-colors text-sm"
            >
              Request an Appointment
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/forms"
              className="inline-flex items-center gap-2 border border-charcoal/20 text-charcoal font-medium px-8 py-4 rounded-full hover:border-charcoal/40 transition-colors text-sm"
            >
              Waivers &amp; Intake Forms
            </Link>
          </AnimatedSection>

          <AnimatedSection className="mt-16 pt-10 border-t border-sage/10">
            <p className="text-xs text-charcoal/35 uppercase tracking-[0.18em]">
              Prices subject to change &nbsp;&middot;&nbsp; Group and corporate enquiries welcome
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
