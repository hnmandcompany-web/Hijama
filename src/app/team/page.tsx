import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { team } from "@/lib/team-config";
import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";

export const metadata = {
  title: "Meet Your Practitioner | Hijama and More",
  description:
    "Mufti Musab M. Shaikh — ʿĀlim, Muftī, nationally certified Physician Assistant and certified cupping practitioner.",
};

export default function Team() {
  return (
    <div className="pt-32 pb-24 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">
            The Team
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-charcoal leading-[1.04]">
            Meet Your<br />Practitioner
          </h1>
          <p className="mt-8 text-charcoal/45 text-base leading-relaxed max-w-xl">
            One practitioner, for now. Every session on this site is performed by the person below.
          </p>
        </AnimatedSection>

        {team.map((member) => (
          <div key={member.slug} className="mb-24 last:mb-0">
            {/* ── Bio ── */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] gap-14 lg:gap-20 items-start">
              <AnimatedSection>
                <div className="lg:sticky lg:top-24">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={640}
                      height={853}
                      className="w-full rounded-2xl object-cover aspect-[3/4]"
                    />
                  ) : (
                    <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-sage/20 to-sage/5 flex items-end p-8">
                      <p className="text-xs text-sage/40 uppercase tracking-widest">
                        Practitioner photo
                      </p>
                    </div>
                  )}
                  <h2 className="text-2xl font-bold tracking-tight text-charcoal mt-8">
                    {member.name}
                  </h2>
                  <p className="text-xs uppercase tracking-[0.16em] text-sage mt-3 font-semibold leading-relaxed">
                    {member.role}
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1} className="flex flex-col gap-6 pt-2">
                {member.bio.map((para) => (
                  <p
                    key={para.slice(0, 32)}
                    className="text-charcoal/65 leading-[1.85] text-[15px] max-w-[64ch]"
                  >
                    {para}
                  </p>
                ))}
              </AnimatedSection>
            </div>

            {/* ── Credentials ── */}
            <AnimatedSection className="mt-24 mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage pb-6 border-b border-sage/15">
                Credentials
              </p>
            </AnimatedSection>

            <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
              {member.credentials.map((group) => (
                <AnimatedChild key={group.heading}>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal/40 mb-6">
                    {group.heading}
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="w-1 h-1 rounded-full bg-sage mt-2.5 flex-shrink-0" />
                        <span className="text-sm text-charcoal/60 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedChild>
              ))}
            </AnimatedSection>
          </div>
        ))}

        {/* ── CTA ── */}
        <AnimatedSection className="mt-8 pt-14 border-t border-sage/10 flex flex-wrap gap-4">
          <Link
            href="/request-appointment"
            className="inline-flex items-center gap-2 bg-sage text-white font-medium px-8 py-4 rounded-full hover:bg-sage/90 transition-colors text-sm"
          >
            Request an Appointment
            <ArrowRight size={15} />
          </Link>
          <Link
            href="/evidence"
            className="inline-flex items-center gap-2 border border-charcoal/20 text-charcoal font-medium px-8 py-4 rounded-full hover:border-charcoal/40 transition-colors text-sm"
          >
            Evidence &amp; Questions
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}
