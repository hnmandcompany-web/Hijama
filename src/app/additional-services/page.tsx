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
    <div className="py-24 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-6">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage">Expanding Our Practice</p>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold px-3 py-1 border border-gold/40 rounded-full">
              Coming Soon 2028
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
            Additional Services
          </h1>
          <p className="mt-4 text-charcoal/50 leading-relaxed">
            We are continuously expanding our offering. The following services will launch in 2028.
          </p>
        </AnimatedSection>

        <AnimatedSection stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
          {services.map((service) => (
            <AnimatedChild key={service}>
              <div className="flex items-center justify-between p-6 rounded-xl border border-sage/20 bg-white">
                <p className="text-charcoal font-medium">{service}</p>
                <span className="text-xs text-charcoal/40 ml-4 flex-shrink-0">Launching 2028</span>
              </div>
            </AnimatedChild>
          ))}
        </AnimatedSection>

        <div className="max-w-xl border-t border-sage/10 pt-16">
          <AnimatedSection className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-charcoal">
              Be the First to Know
            </h2>
            <p className="mt-3 text-charcoal/50 text-sm leading-relaxed">
              Enter your email below and we will notify you when these services launch.
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
