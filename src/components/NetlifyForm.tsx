"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/lib/animations";

interface Field {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  options?: string[];
}

interface NetlifyFormProps {
  formName: string;
  fields: Field[];
  submitLabel?: string;
  successMessage?: string;
}

export function NetlifyForm({
  formName,
  fields,
  submitLabel = "Submit",
  successMessage = "Thank you. I respond within 24 hours.",
}: NetlifyFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new URLSearchParams();
    data.append("form-name", formName);
    Object.entries(values).forEach(([k, v]) => data.append(k, v));

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data.toString(),
    });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-sage/20 bg-white p-10 text-center"
      >
        <p className="text-sage font-semibold text-lg">{successMessage}</p>
        <p className="text-charcoal/50 text-sm mt-2">We appreciate your interest.</p>
      </motion.div>
    );
  }

  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>
          Do not fill this out: <input name="bot-field" onChange={() => {}} />
        </label>
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-5"
      >
        {fields.map((field) => (
          <motion.div key={field.name} variants={fadeUpVariants}>
            <label
              htmlFor={field.name}
              className="block text-xs font-semibold uppercase tracking-widest text-charcoal/50 mb-2"
            >
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                rows={4}
                required={field.required}
                value={values[field.name] || ""}
                onChange={(e) => setValues({ ...values, [field.name]: e.target.value })}
                className="w-full border border-sage/20 rounded-xl px-4 py-3 text-sm text-charcoal bg-white resize-none focus:outline-none focus:ring-2 focus:ring-sage transition-all"
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                value={values[field.name] || ""}
                onChange={(e) => setValues({ ...values, [field.name]: e.target.value })}
                className="w-full border border-sage/20 rounded-xl px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-sage transition-all"
              >
                <option value="">Select an option</option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                value={values[field.name] || ""}
                onChange={(e) => setValues({ ...values, [field.name]: e.target.value })}
                className="w-full border border-sage/20 rounded-xl px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-sage transition-all"
              />
            )}
          </motion.div>
        ))}

        <motion.div variants={fadeUpVariants}>
          <motion.button
            type="submit"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-sage text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-sage/90 transition-colors"
          >
            {submitLabel}
          </motion.button>
        </motion.div>
      </motion.div>
    </form>
  );
}
