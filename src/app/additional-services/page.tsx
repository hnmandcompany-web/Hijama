import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";
import { NetlifyForm } from "@/components/NetlifyForm";

export const metadata = {
  title: "Additional Services | Hijama and More",
  description: "Upcoming wellness services launching in 2028 at Hijama and More.",
};

const services = [
  "Herbal Remedies & Consultations",
  "Ruqyah Wellness Sessions",
  "Nutritional & Lifestyle Coaching",
  "Women's Health Specialisation",
];

const notifyFields = [
  { name: "email", label: "Email Address", type: "email" as const, required: true },
];

export default function AdditionalServices() {
  return (
    <div className="py-32 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold border border-gold/30 px-3 py-1.5 rounded-full">
              Coming Soon 2028
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-charcoal leading-[1.04]">
            Additional Services
          </h1>
          <p className="mt-6 text-charcoal/45 text-base max-w-md leading-relaxed">
            We are continuously expanding our offering. The following services will launch in 2028.
          </p>
        </AnimatedSection>

        <AnimatedSection stagger className="mb-32">
          {services.map((service, i) => (
            <AnimatedChild key={service}>
              <div className="flex items-center justify-between py-7 border-b border-sage/10 group">
                <div className="flex items-center gap-6">
                  <span className="text-xs text-charcoal/20 font-bold tracking-[0.2em] w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-charcoal font-medium group-hover:text-sage transition-colors">{service}</p>
                </div>
                <span className="text-[10px] text-charcoal/30 uppercase tracking-[0.2em]">Launching 2028</span>
              </div>
            </AnimatedChild>
          ))}
        </AnimatedSection>

        <div className="max-w-md">
          <AnimatedSection className="mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-charcoal mb-3">
              Be the First to Know
            </h2>
            <p className="text-sm text-charcoal/45 leading-relaxed">
              Enter your email and we will notify you when these services launch.
            </p>
          </AnimatedSection>
          <NetlifyForm
            formName="notify-me"
            fields={notifyFields}
            submitLabel="Notify Me"
            successMessage="You're on the list. We'll be in touch when we launch."
          />
        </div>
      </div>
    </div>
  );
}
