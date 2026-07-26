"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Activity,
  Wind,
  Zap,
  Moon,
  Feather,
  Layers,
  Star,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";
import { buttonHover, buttonTap } from "@/lib/animations";
import { aboutHijama, whyWeDoIt, benefits, practiceMarks } from "@/lib/about-config";
import { useRef } from "react";

const icons: Record<string, LucideIcon> = {
  Activity,
  Wind,
  Zap,
  Moon,
  Feather,
  Layers,
  Star,
};

const heroWords = ["Healing", "Through", "Tradition"];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Breathing sage orb */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.07, 0.14, 0.07] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-sage pointer-events-none"
        />
        {/* Secondary gold orb */}
        <motion.div
          animate={{ scale: [1.06, 1, 1.06], opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -left-56 -bottom-20 w-[560px] h-[560px] rounded-full bg-gold pointer-events-none"
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative max-w-6xl mx-auto w-full px-8 lg:px-16 py-40"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-12"
          >
            <span className="w-8 h-px bg-sage" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage">
              Ḥijāma &middot; Cupping Therapy
            </p>
          </motion.div>

          {/* Word-by-word headline */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-bold tracking-tight text-charcoal leading-[0.92] mb-12">
            {heroWords.map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.0,
                    delay: 0.45 + i * 0.14,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {i === 2 ? <span className="text-sage">{word}</span> : word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Sub + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg"
          >
            <p className="text-lg text-charcoal/50 leading-relaxed mb-12">
              A sunnah performed to a clinical standard — single-use equipment, a private room,
              and an honest answer about whether ḥijāma is right for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Link
                  href="/request-appointment"
                  className="inline-flex items-center gap-2 bg-sage text-white font-medium px-8 py-4 rounded-full hover:bg-sage/90 transition-colors"
                >
                  Request Appointment
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Link
                  href="/pricing"
                  className="inline-block border border-charcoal/20 text-charcoal font-medium px-8 py-4 rounded-full hover:border-charcoal/40 transition-colors"
                >
                  See Pricing
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
            style={{ originY: "top" }}
            className="w-px h-14 bg-charcoal/25"
          />
        </motion.div>
      </section>

      {/* ── PRACTICE MARKS ── */}
      <section className="py-20 px-8 lg:px-16 border-y border-sage/10 bg-white">
        <AnimatedSection
          stagger
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10"
        >
          {practiceMarks.map((mark) => (
            <AnimatedChild key={mark.value}>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold tracking-tight text-charcoal">
                  {mark.value}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal/35 mt-3 leading-relaxed mx-auto max-w-[22ch]">
                  {mark.label}
                </p>
              </div>
            </AnimatedChild>
          ))}
        </AnimatedSection>
      </section>

      {/* ── ABOUT HIJAMA ── */}
      <section id="about-hijama" className="py-36 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] gap-14 lg:gap-24">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">
              About Ḥijāma
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal leading-[1.08]">
              A serious therapy,<br />in a serious setting
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="flex flex-col gap-6">
            {aboutHijama.map((para) => (
              <p
                key={para.slice(0, 32)}
                className="text-charcoal/60 leading-relaxed text-[15px] max-w-[62ch]"
              >
                {para}
              </p>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHY WE DO IT ── */}
      <section className="px-8 lg:px-16 pb-36">
        <AnimatedSection className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-sage/[0.07] border border-sage/15 px-8 py-14 md:px-16 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-8">
              Why We Do It
            </p>
            <p className="text-xl md:text-2xl text-charcoal/80 leading-[1.65] font-medium max-w-[54ch]">
              {whyWeDoIt}
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-32 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">Benefits</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal max-w-md leading-[1.08]">
              What People<br />Come In For
            </h2>
          </AnimatedSection>

          <AnimatedSection
            stagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-sage/10"
          >
            {benefits.map(({ number, icon, title, text }) => {
              const Icon = icons[icon];
              return (
                <AnimatedChild key={title} className="h-full">
                  <div className="h-full p-10 border-b border-sage/10 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 group hover:bg-cream transition-colors">
                    <div className="flex items-start justify-between mb-8">
                      <span className="text-xs font-bold text-charcoal/15 tracking-[0.2em]">{number}</span>
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sage/10 group-hover:bg-sage/20 transition-colors">
                        {Icon && <Icon size={17} className="text-sage" />}
                      </div>
                    </div>
                    <h3 className="font-bold text-charcoal mb-3 text-base">{title}</h3>
                    <p className="text-sm text-charcoal/45 leading-relaxed">{text}</p>
                  </div>
                </AnimatedChild>
              );
            })}
          </AnimatedSection>

          <AnimatedSection className="mt-12">
            <p className="text-xs text-charcoal/40 leading-relaxed max-w-[70ch]">
              Ḥijāma is a complementary therapy and is not a substitute for medical care. See the{" "}
              <Link href="/evidence#faq" className="text-sage hover:underline">
                questions page
              </Link>{" "}
              for the full picture, including when we&rsquo;ll ask you to speak to your physician first.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── EVIDENCE ── */}
      <section className="py-40 px-8 lg:px-16">
        <AnimatedSection className="max-w-5xl mx-auto text-center">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal leading-[1.18] mx-auto">
            &ldquo;The best of the remedies you treat yourselves with is cupping.&rdquo;
          </p>
          <p className="text-xs text-charcoal/35 mt-10 uppercase tracking-[0.28em]">
            Anas ibn Mālik ؓ &nbsp;&middot;&nbsp; Ṣaḥīḥ al-Bukhārī &amp; Ṣaḥīḥ Muslim
          </p>
          <motion.div whileHover={buttonHover} whileTap={buttonTap} className="inline-block mt-12">
            <Link
              href="/evidence"
              className="inline-flex items-center gap-2 border border-charcoal/20 text-charcoal font-medium px-8 py-4 rounded-full hover:border-charcoal/40 transition-colors text-sm"
            >
              Read the Qur&rsquo;anic and Prophetic evidence
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* ── CTA ── */}
      <section className="py-40 px-8 lg:px-16 bg-charcoal">
        <AnimatedSection className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-8">
              Begin Your Journey
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.04]">
              Ready to Experience<br />
              <span className="text-sage">True Healing?</span>
            </h2>
          </div>
          <motion.div whileHover={buttonHover} whileTap={buttonTap} className="flex-shrink-0">
            <Link
              href="/request-appointment"
              className="inline-flex items-center gap-3 bg-sage text-white font-medium px-10 py-5 rounded-full hover:bg-sage/90 transition-colors text-base"
            >
              Request Appointment
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </AnimatedSection>
      </section>
    </>
  );
}
