import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services-config";
import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";
import { NetlifyForm } from "@/components/NetlifyForm";
import { notifyFields } from "@/lib/form-fields";

export const metadata = {
  title: "Additional Services | Hijama and More",
  description:
    "Beyond ḥijāma: counseling, Umrah and Hajj guidance, wedding services, private Qur'an tuition, Islamic Q&A and more.",
};

export default function Services() {
  return (
    <div className="pt-32 pb-24 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">
            Beyond Ḥijāma
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-charcoal leading-[1.04]">
            Additional<br />Services
          </h1>
          <p className="mt-8 text-charcoal/45 text-base max-w-xl leading-relaxed">
            The work below sits alongside the cupping practice. Details for each are still being
            written — the pages are here so you can see what&rsquo;s coming, and ask about anything
            you need sooner.
          </p>
        </AnimatedSection>

        <AnimatedSection stagger className="border-t border-sage/10 mb-28">
          {services.map((service, i) => (
            <AnimatedChild key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-10 py-8 border-b border-sage/10 group hover:bg-white transition-colors sm:px-4 sm:-mx-4"
              >
                <div className="flex items-start gap-6 min-w-0">
                  <span className="text-xs text-charcoal/20 font-bold tracking-[0.2em] w-6 flex-shrink-0 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="text-charcoal font-semibold group-hover:text-sage transition-colors">
                      {service.title}
                    </p>
                    <p className="text-sm text-charcoal/45 leading-relaxed mt-2 max-w-[60ch]">
                      {service.summary}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0 pl-12 sm:pl-0">
                  <span className="text-[10px] text-charcoal/30 uppercase tracking-[0.2em]">
                    {service.status === "tba" ? "Details to follow" : "Available"}
                  </span>
                  <ArrowRight
                    size={15}
                    className="text-charcoal/25 group-hover:text-sage group-hover:translate-x-1 transition-all"
                  />
                </div>
              </Link>
            </AnimatedChild>
          ))}
        </AnimatedSection>

        <div className="max-w-md">
          <AnimatedSection className="mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-charcoal mb-3">
              Be the First to Know
            </h2>
            <p className="text-sm text-charcoal/45 leading-relaxed">
              Leave your email and we&rsquo;ll let you know as each of these opens up.
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
