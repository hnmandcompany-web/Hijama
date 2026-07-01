import { pricingTiers } from "@/lib/pricing-config";
import { PricingCard } from "@/components/PricingCard";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata = {
  title: "Pricing | Hijama and More",
  description: "Transparent pricing for Hijama therapy sessions, wellness packages, and family plans.",
};

export default function Pricing() {
  return (
    <div className="py-32 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">Transparent Pricing</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-charcoal leading-[1.04]">
            Choose Your Plan
          </h1>
          <p className="mt-6 text-charcoal/45 text-base max-w-md leading-relaxed">
            All sessions include an initial consultation, the therapy itself, and personalised aftercare guidance.
          </p>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </AnimatedSection>

        <AnimatedSection className="mt-20 pt-10 border-t border-sage/10">
          <p className="text-xs text-charcoal/35 uppercase tracking-[0.18em]">
            All prices subject to change &nbsp;&middot;&nbsp; Contact us for group or corporate enquiries
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
