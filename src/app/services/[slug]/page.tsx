import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { services, getService } from "@/lib/services-config";
import { AnimatedSection } from "@/components/AnimatedSection";
import { contact } from "@/lib/site-config";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: `${service.title} | Hijama and More`,
    description: service.summary,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <div className="pt-32 pb-24 px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="mb-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/40 hover:text-sage transition-colors mb-10"
          >
            <ArrowLeft size={13} />
            All services
          </Link>

          {service.status === "tba" && (
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.24em] text-gold border border-gold/30 px-3 py-1.5 rounded-full mb-8">
              Details to follow
            </span>
          )}

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal leading-[1.06]">
            {service.title}
          </h1>
          <p className="mt-8 text-lg text-charcoal/55 leading-relaxed">{service.summary}</p>
        </AnimatedSection>

        {service.includes && service.includes.length > 0 && (
          <AnimatedSection className="mb-14">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.22em] text-sage pb-5 mb-8 border-b border-sage/15">
              What this covers
            </h2>
            <ul className="flex flex-col gap-4">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2.5 flex-shrink-0" />
                  <span className="text-[15px] text-charcoal/60 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        )}

        {service.body.length > 0 ? (
          <AnimatedSection className="flex flex-col gap-6 mb-14">
            {service.body.map((para) => (
              <p key={para.slice(0, 32)} className="text-charcoal/65 leading-[1.85] text-[15px]">
                {para}
              </p>
            ))}
          </AnimatedSection>
        ) : (
          <AnimatedSection className="mb-14">
            <div className="rounded-2xl border border-sage/15 bg-sage/[0.05] p-9">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sage mb-4">
                Coming soon
              </p>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                Full details for this service are still being written. If it&rsquo;s something you
                need in the meantime, get in touch and we&rsquo;ll talk it through directly —
                we&rsquo;d rather answer you than have you wait for a page to be finished.
              </p>
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection className="pt-10 border-t border-sage/10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-sage text-white font-medium px-8 py-4 rounded-full hover:bg-sage/90 transition-colors text-sm"
          >
            Ask about this service
            <ArrowRight size={15} />
          </Link>
          <a
            href={`mailto:${contact.email}`}
            className="text-sm text-charcoal/45 hover:text-sage transition-colors"
          >
            {contact.email}
          </a>
        </AnimatedSection>
      </div>
    </div>
  );
}
