"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
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
      whileHover={{ scale: 1.02 }}
      className={`rounded-xl p-8 flex flex-col gap-6 bg-white ${
        highlighted ? "border border-gold/60" : "border border-sage/20"
      }`}
    >
      {highlighted && (
        <span className="text-xs font-semibold uppercase tracking-widest text-gold">
          Most Popular
        </span>
      )}
      <div>
        <h3 className="text-xl font-bold tracking-tight text-charcoal">{name}</h3>
        {description && (
          <p className="text-sm text-charcoal/50 mt-1">{description}</p>
        )}
        <p className="text-3xl font-bold text-charcoal mt-3">{price}</p>
      </div>
      <ul className="flex flex-col gap-3 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm text-charcoal/70">
            <Check size={16} className="text-sage flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link
          href="/request-appointment"
          className={`block text-center text-sm font-medium py-3 rounded-full transition-colors ${
            highlighted
              ? "bg-sage text-white hover:bg-sage/90"
              : "border border-sage text-sage hover:bg-sage/5"
          }`}
        >
          Get Started
        </Link>
      </motion.div>
    </motion.div>
  );
}
