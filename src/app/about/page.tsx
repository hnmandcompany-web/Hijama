"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { fadeUpVariants } from "@/lib/animations";

const certifications = [
  "Certified Hijama Practitioner (Level 3)",
  "First Aid & CPR Certified",
  "Islamic Medicine & Prophetic Health Diploma",
  "Member of British Cupping Society",
];

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <div className="py-24 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Our Practitioner</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
            About the Practitioner
          </h1>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div ref={imageRef} className="overflow-hidden rounded-xl">
            <motion.div
              style={{ y }}
              className="w-full max-w-md mx-auto lg:mx-0"
            >
              <div className="aspect-[3/4] rounded-xl bg-sage/10 flex items-center justify-center">
                <p className="text-sage/40 text-sm">Professional Headshot</p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-8">
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-5"
            >
              <p className="text-charcoal/70 leading-relaxed">
                With a deep commitment to prophetic medicine and holistic wellness, I am a certified Hijama
                practitioner dedicated to providing safe, professional, and spiritually grounded cupping therapy.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                My journey into Hijama began through a personal experience with the profound benefits of this
                ancient healing practice. After years of study, clinical training, and certification, I now
                offer this transformative therapy to individuals seeking natural relief and holistic balance.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                Every session is conducted with meticulous care, adhering to the highest standards of hygiene
                and clinical safety. I take a personalised approach, ensuring each client receives tailored
                aftercare guidance and ongoing support.
              </p>
            </motion.div>

            <AnimatedSection delay={0.2}>
              <h2 className="text-lg font-bold tracking-tight text-charcoal mb-5">
                Qualifications & Certifications
              </h2>
              <ul className="flex flex-col gap-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3 text-sm text-charcoal/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
