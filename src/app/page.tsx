"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Heart, Leaf, Sun, Wind, Star } from "lucide-react";
import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";
import { fadeUpVariants, buttonHover, buttonTap } from "@/lib/animations";

const benefits = [
  { icon: Shield, text: "Prophetically guided practice" },
  { icon: Heart, text: "Holistic mind-body healing" },
  { icon: Leaf, text: "Natural detoxification therapy" },
  { icon: Sun, text: "Hormonal balance support" },
  { icon: Wind, text: "Improved circulation & energy" },
  { icon: Star, text: "Personalised aftercare plans" },
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

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center px-8 lg:px-16 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUpVariants}
              className="text-xs font-semibold uppercase tracking-widest text-sage mb-6"
            >
              Holistic Wellness & Cupping Therapy
            </motion.p>
            <motion.h1
              variants={fadeUpVariants}
              className="text-5xl md:text-7xl font-bold tracking-tight text-charcoal leading-[1.08]"
            >
              Healing Through
              <br />
              <span className="text-sage">Tradition</span>
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              className="mt-6 text-lg text-charcoal/60 leading-relaxed"
            >
              Professional Hijama therapy rooted in prophetic medicine and modern wellness practice.
              Begin your journey to holistic wellbeing.
            </motion.p>
            <motion.div variants={fadeUpVariants} className="mt-10 flex flex-wrap gap-4">
              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Link
                  href="/request-appointment"
                  className="inline-block bg-sage text-white font-medium px-8 py-4 rounded-full hover:bg-sage/90 transition-colors"
                >
                  Request Appointment
                </Link>
              </motion.div>
              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Link
                  href="/about"
                  className="inline-block border border-sage/30 text-charcoal font-medium px-8 py-4 rounded-full hover:border-sage/60 transition-colors"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Why Hijama</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
              Rooted in Wisdom, Proven by Practice
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, text }) => (
              <AnimatedChild key={text}>
                <div className="flex items-start gap-4 p-6 rounded-xl border border-sage/10 bg-cream">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sage/10 flex-shrink-0">
                    <Icon size={18} className="text-sage" />
                  </div>
                  <p className="text-sm font-medium text-charcoal leading-snug">{text}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
              What Our Clients Say
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <AnimatedChild key={t.author}>
                <div className="p-8 rounded-xl border border-sage/20 bg-white flex flex-col gap-6">
                  <p className="text-charcoal/70 text-sm leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-sage">
                    &mdash; {t.author}
                  </p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-8 lg:px-16 bg-sage">
        <AnimatedSection className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-white/70 mb-10">
            Book a session with a certified practitioner and take the first step.
          </p>
          <motion.div whileHover={buttonHover} whileTap={buttonTap} className="inline-block">
            <Link
              href="/request-appointment"
              className="inline-block bg-white text-sage font-medium px-8 py-4 rounded-full hover:bg-cream transition-colors"
            >
              Request Appointment
            </Link>
          </motion.div>
        </AnimatedSection>
      </section>
    </>
  );
}
