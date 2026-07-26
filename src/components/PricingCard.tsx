"use client";

import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/animations";

interface PricingCardProps {
  /** Small label above the price, e.g. "Up to 7 cups" */
  label: string;
  price: string;
  description?: string;
  highlighted?: boolean;
}

export function PricingCard({ label, price, description, highlighted = false }: PricingCardProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`h-full rounded-2xl p-8 flex flex-col ${
        highlighted ? "bg-charcoal border border-transparent" : "bg-white border border-sage/15"
      }`}
    >
      <p
        className={`text-[10px] font-bold uppercase tracking-[0.22em] mb-6 ${
          highlighted ? "text-sage" : "text-charcoal/35"
        }`}
      >
        {label}
      </p>
      <p
        className={`text-5xl font-bold tracking-tight ${
          highlighted ? "text-white" : "text-charcoal"
        }`}
      >
        {price}
      </p>
      {description && (
        <p
          className={`text-sm leading-relaxed mt-5 ${
            highlighted ? "text-white/50" : "text-charcoal/45"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
