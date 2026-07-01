"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Shield, Heart, Leaf, Sun, Wind, Star, ArrowRight } from "lucide-react";
import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";
import { fadeUpVariants, buttonHover, buttonTap } from "@/lib/animations";
import { useRef } from "react";

const benefits = [
  { number: "01", icon: Shield, title: "Prophetically Guided", text: "Rooted in the Sunnah and centuries of prophetic tradition" },
  { number: "02", icon: Heart, title: "Holistic Healing", text: "Mind, body and spirit brought into alignment" },
  { number: "03", icon: Leaf, title: "Natural Detox", text: "Ancient purification through cupping therapy" },
  { number: "04", icon: Sun, title: "Hormonal Balance", text: "Natural support for endocrine and metabolic health" },
  { number: "05", icon: Wind, title: "Circulation & Energy", text: "Restored blood flow, clarity and vitality" },
  { number: "06", icon: Star, title: "Aftercare Plans", text: "Personalised guidance for lasting wellbeing" },
];

const stats = [
  { value: "500+", label: "Sessions Completed" },
  { value: "5★", label: "Client Rating" },
  { value: "3+", label: "Years in Practice" },
  { value: "100%", label: "Certified & Insured" },
];

const testimonials = [
  {
    quote: "The most calming and professional experience. My chronic back pain improved after just two sessions.",
    author: "Fatima A.",
  },
  {
    quote: "I was nervous at first, but the practitioner made me feel completely at ease. Truly transformative.",
    author: "Yusuf M.",
  },
  {
    quote: "I've tried many therapies. Hijama with this practitioner has been the most effective by far.",
    author: "Amira K.",
  },
];

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
              Holistic Wellness & Cupping Therapy
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
              Professional Hijama therapy rooted in prophetic medicine and modern wellness practice.
              Begin your journey to holistic wellbeing.
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
                  href="/about"
                  className="inline-block border border-charcoal/20 text-charcoal font-medium px-8 py-4 rounded-full hover:border-charcoal/40 transition-colors"
                >
                  Our Practice
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

      {/* ── STATS BAR ── */}
      <section className="py-20 px-8 lg:px-16 border-y border-sage/10 bg-white">
        <AnimatedSection
          stagger
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10"
        >
          {stats.map((stat) => (
            <AnimatedChild key={stat.label}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-charcoal/35 mt-3">
                  {stat.label}
                </p>
              </div>
            </AnimatedChild>
          ))}
        </AnimatedSection>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="py-44 px-8 lg:px-16">
        <AnimatedSection className="max-w-5xl mx-auto text-center">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal leading-[1.18]">
            &ldquo;The best remedy for man is blood-letting.&rdquo;
          </p>
          <p className="text-xs text-charcoal/35 mt-10 uppercase tracking-[0.28em]">
            Prophet Muhammad ﷺ &nbsp;&middot;&nbsp; Sahih Bukhari
          </p>
        </AnimatedSection>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-32 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-24">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">Why Hijama</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal max-w-md leading-[1.08]">
              Rooted in Wisdom,<br />Proven by Practice
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ number, icon: Icon, title, text }) => (
              <AnimatedChild key={title}>
                <div className="p-10 border-b border-sage/10 lg:[&:nth-child(3n)]:border-r-0 sm:border-r border-sage/10 group hover:bg-cream transition-colors">
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-xs font-bold text-charcoal/15 tracking-[0.2em]">{number}</span>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sage/10 group-hover:bg-sage/20 transition-colors">
                      <Icon size={17} className="text-sage" />
                    </div>
                  </div>
                  <h3 className="font-bold text-charcoal mb-3 text-base">{title}</h3>
                  <p className="text-sm text-charcoal/45 leading-relaxed">{text}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-40 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-24">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
              What Our Clients Say
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {testimonials.map((t) => (
              <AnimatedChild key={t.author}>
                <div className="relative pt-12">
                  <span className="absolute top-0 left-0 text-8xl font-bold text-sage/12 leading-none select-none">
                    &ldquo;
                  </span>
                  <p className="text-charcoal/65 leading-relaxed mb-10 relative z-10 text-[15px]">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-px bg-sage" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-charcoal/40">
                      {t.author}
                    </p>
                  </div>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-40 px-8 lg:px-16 bg-charcoal">
        <AnimatedSection className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-8">Begin Your Journey</p>
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
