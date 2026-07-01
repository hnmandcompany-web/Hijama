"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { fadeUpVariants } from "@/lib/animations";

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  highlighted: boolean;
  description?: string;
}

export function PricingCard({ name, price, features, highlighted, description }: PricingCardProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl p-8 flex flex-col gap-8 ${
        highlighted
          ? "bg-charcoal text-white border border-transparent"
          : "bg-white border border-sage/15"
      }`}
    >
      <div>
        {highlighted && (
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-sage block mb-4">
            Most Popular
          </span>
        )}
        <h3 className={`text-lg font-bold tracking-tight mb-1 ${
          highlighted ? "text-white" : "text-charcoal"
        }`}>{name}</h3>
        {description && (
          <p className={`text-xs leading-relaxed ${
            highlighted ? "text-white/40" : "text-charcoal/40"
          }`}>{description}</p>
        )}
        <p className={`text-5xl font-bold mt-6 tracking-tight ${
          highlighted ? "text-white" : "text-charcoal"
        }`}>{price}</p>
      </div>

      <ul className="flex flex-col gap-4 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Check size={14} className={highlighted ? "text-sage" : "text-sage"} />
            <span className={`text-sm ${
              highlighted ? "text-white/70" : "text-charcoal/55"
            }`}>{feature}</span>
          </li>
        ))}
      </ul>

      <motion.div whileHover={{ x: 2 }} whileTap={{ scale: 0.97 }}>
        <Link
          href="/request-appointment"
          className={`flex items-center justify-between text-sm font-semibold py-4 px-6 rounded-full transition-colors ${
            highlighted
              ? "bg-sage text-white hover:bg-sage/90"
              : "border border-sage/30 text-charcoal hover:border-sage transition-colors"
          }`}
        >
          Get Started
          <ArrowRight size={15} />
        </Link>
      </motion.div>
    </motion.div>
  );
}
