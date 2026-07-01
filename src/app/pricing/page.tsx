import { pricingTiers } from "@/lib/pricing-config";
import { PricingCard } from "@/components/PricingCard";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata = {
  title: "Pricing | Hijama and More",
  description: "Transparent pricing for Hijama therapy sessions, wellness packages, and family plans.",
};

export default function Pricing() {
  return (
    <div className="py-24 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Transparent Pricing</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
            Choose Your Plan
          </h1>
          <p className="mt-4 text-charcoal/50 text-lg">
            All sessions include an initial consultation and aftercare guidance.
          </p>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </AnimatedSection>

        <AnimatedSection className="mt-16 text-center">
          <p className="text-sm text-charcoal/50">
            Prices are subject to change. Contact us for corporate or large group enquiries.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
