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
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <div className="py-32 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">Our Practitioner</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-charcoal leading-[1.04]">
            About the<br />Practitioner
          </h1>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div ref={imageRef} className="overflow-hidden rounded-2xl">
            <motion.div style={{ y }} className="w-full max-w-md mx-auto lg:mx-0">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-sage/20 to-sage/5 flex items-end p-8">
                <p className="text-xs text-sage/40 uppercase tracking-widest">Practitioner Photo</p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-12 pt-4">
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              <p className="text-charcoal/60 leading-relaxed text-[15px]">
                With a deep commitment to prophetic medicine and holistic wellness, I am a certified Hijama
                practitioner dedicated to providing safe, professional, and spiritually grounded cupping therapy.
              </p>
              <p className="text-charcoal/60 leading-relaxed text-[15px]">
                My journey into Hijama began through a personal experience with the profound benefits of this
                ancient healing practice. After years of study, clinical training, and certification, I now
                offer this transformative therapy to individuals seeking natural relief and holistic balance.
              </p>
              <p className="text-charcoal/60 leading-relaxed text-[15px]">
                Every session is conducted with meticulous care, adhering to the highest standards of hygiene
                and clinical safety. I take a personalised approach, ensuring each client receives tailored
                aftercare guidance and ongoing support.
              </p>
            </motion.div>

            <AnimatedSection delay={0.2}>
              <div className="border-t border-sage/10 pt-10">
                <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-8">
                  Qualifications & Certifications
                </h2>
                <ul className="flex flex-col gap-5">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-start gap-4">
                      <span className="w-1 h-1 rounded-full bg-sage mt-2.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/60">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
