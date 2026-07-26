import {
  quranicVerses,
  hadithGroups,
  additionalReports,
  additionalReportsNote,
  scholarlyStatements,
  historicalNote,
  faqSections,
} from "@/lib/evidence-config";
import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";
import { medicalDisclaimer } from "@/lib/site-config";

export const metadata = {
  title: "Evidence & Questions | Hijama and More",
  description:
    "The Qur'anic verses, ḥadīth and scholarly statements on ḥijāma, with the contested reports marked as such — followed by answers to the questions we're asked most.",
};

const sectionLinks = [
  { id: "quran", label: "Qur'ān" },
  { id: "hadith", label: "Ḥadīth" },
  { id: "additional", label: "Additional Reports" },
  { id: "scholars", label: "Scholarly Statements" },
  { id: "history", label: "Historical Note" },
  { id: "faq", label: "Questions" },
];

export default function Evidence() {
  return (
    <div className="pt-32 pb-24">
      {/* ── HEADER ── */}
      <div className="px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">
              Resources
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-charcoal leading-[1.04]">
              Evidence &amp;<br />Questions
            </h1>
            <p className="mt-8 text-charcoal/50 text-base leading-relaxed max-w-xl">
              What is authentically established about ḥijāma, and what is merely often repeated,
              kept apart from one another. Sources are named for every narration, and the reports
              whose chains are contested are collected separately rather than mixed in.
            </p>
          </AnimatedSection>

          <AnimatedSection className="mb-24">
            <nav className="flex flex-wrap gap-x-6 gap-y-3 pt-8 border-t border-sage/15">
              {sectionLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/40 hover:text-sage transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </AnimatedSection>
        </div>
      </div>

      {/* ── QUR'AN ── */}
      <section id="quran" className="px-8 lg:px-16 py-20 scroll-mt-24 bg-white border-y border-sage/10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">
              Qur&rsquo;ānic Verses
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal leading-[1.1]">
              Healing Belongs to Allah
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="flex flex-col gap-10">
            {quranicVerses.map((verse) => (
              <AnimatedChild key={verse.reference}>
                <blockquote className="border-l-2 border-sage pl-8 py-1">
                  <p className="text-xl md:text-2xl text-charcoal leading-[1.6] font-medium">
                    &ldquo;{verse.text}&rdquo;
                  </p>
                  <cite className="not-italic block text-[11px] font-bold uppercase tracking-[0.2em] text-sage mt-5">
                    {verse.reference}
                  </cite>
                  {verse.note && (
                    <p className="text-sm text-charcoal/45 mt-5 leading-relaxed">{verse.note}</p>
                  )}
                </blockquote>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── HADITH ── */}
      <section id="hadith" className="px-8 lg:px-16 py-24 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">
              Prophetic Narrations
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal leading-[1.1]">
              Ḥadīth
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-20">
            {hadithGroups.map((group) => (
              <AnimatedSection key={group.title}>
                <div className="pb-6 mb-10 border-b border-sage/15">
                  <h3 className="text-xl font-bold tracking-tight text-charcoal mb-3">
                    {group.title}
                  </h3>
                  <p className="text-sm text-charcoal/45 leading-relaxed">{group.blurb}</p>
                </div>

                <ol className="flex flex-col gap-10">
                  {group.narrations.map((n, i) => (
                    <li key={i} className="flex gap-6">
                      <span className="text-[11px] font-bold text-charcoal/15 tracking-[0.2em] pt-1.5 flex-shrink-0 w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        {n.narrator && (
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/40 mb-3">
                            {n.narrator}
                          </p>
                        )}
                        <p className="text-charcoal/80 leading-[1.75] text-[15px]">{n.text}</p>
                        <p className="text-[11px] uppercase tracking-[0.16em] text-sage mt-4 font-semibold">
                          {n.source}
                        </p>
                        {n.grade && (
                          <p className="text-[11px] text-charcoal/35 mt-1.5">{n.grade}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL REPORTS ── */}
      <section
        id="additional"
        className="px-8 lg:px-16 py-24 scroll-mt-24 bg-white border-y border-sage/10"
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">
              Held Separately
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal leading-[1.1] mb-6">
              Additional Reports
            </h2>
            <div className="rounded-2xl border border-gold/30 bg-gold/[0.06] p-7">
              <p className="text-sm text-charcoal/60 leading-relaxed">{additionalReportsNote}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection stagger className="flex flex-col">
            {additionalReports.map((r, i) => (
              <AnimatedChild key={i}>
                <div className="py-7 border-b border-sage/10">
                  <p className="text-charcoal/70 leading-relaxed text-[15px]">{r.text}</p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-charcoal/35 mt-3 font-semibold">
                    {r.source}
                  </p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── SCHOLARLY STATEMENTS ── */}
      <section id="scholars" className="px-8 lg:px-16 py-24 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">
              From the Scholars
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal leading-[1.1]">
              Scholarly Statements<br />&amp; Practice
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="flex flex-col gap-6">
            {scholarlyStatements.map((s) => (
              <AnimatedChild key={s.authority}>
                <div className="rounded-2xl border border-sage/15 bg-white p-9">
                  <h3 className="font-bold text-charcoal text-lg tracking-tight">{s.authority}</h3>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-sage mt-2 mb-6 font-semibold">
                    {s.work}
                  </p>
                  <p className="text-charcoal/65 leading-[1.8] text-[15px]">{s.text}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── HISTORICAL NOTE ── */}
      <section
        id="history"
        className="px-8 lg:px-16 py-24 scroll-mt-24 bg-white border-y border-sage/10"
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">
              Context
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal leading-[1.1]">
              Historical Note
            </h2>
          </AnimatedSection>

          <AnimatedSection className="flex flex-col gap-6">
            {historicalNote.map((para) => (
              <p key={para.slice(0, 32)} className="text-charcoal/65 leading-[1.85] text-[15px]">
                {para}
              </p>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="px-8 lg:px-16 py-24 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">
              Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal leading-[1.1]">
              What People Ask
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-20">
            {faqSections.map((section) => (
              <AnimatedSection key={section.heading}>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-sage pb-5 mb-10 border-b border-sage/15">
                  {section.heading}
                </h3>
                <dl className="flex flex-col gap-10">
                  {section.items.map((item) => (
                    <div key={item.q}>
                      <dt className="font-bold text-charcoal text-[17px] tracking-tight mb-4">
                        {item.q}
                      </dt>
                      <dd className="flex flex-col gap-4">
                        {item.a.map((para) => (
                          <p
                            key={para.slice(0, 32)}
                            className="text-charcoal/60 leading-[1.8] text-[15px]"
                          >
                            {para}
                          </p>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-20">
            <div className="rounded-2xl border border-sage/15 bg-sage/[0.05] p-9">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sage mb-4">
                Important
              </p>
              <p className="text-sm text-charcoal/60 leading-relaxed">{medicalDisclaimer}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
