import { Globe, PlayCircle, Mail, Phone } from "lucide-react";
import { NetlifyForm } from "@/components/NetlifyForm";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata = {
  title: "Contact | Hijama and More",
  description: "Get in touch with Hijama and More. We are happy to answer any questions.",
};

const contactFields = [
  { name: "name", label: "Full Name", type: "text" as const, required: true },
  { name: "email", label: "Email Address", type: "email" as const, required: true },
  { name: "message", label: "Message", type: "textarea" as const, required: true },
];

export default function Contact() {
  return (
    <div className="py-32 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-charcoal leading-[1.04]">Contact Us</h1>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <AnimatedSection className="flex flex-col gap-12">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-8">Direct Contact</h2>
              <div className="flex flex-col gap-5">
                <a
                  href="mailto:info@hijamaandmore.com"
                  className="flex items-center gap-4 text-sm text-charcoal/60 hover:text-sage transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center group-hover:bg-sage/20 transition-colors">
                    <Mail size={15} className="text-sage" />
                  </div>
                  info@hijamaandmore.com
                </a>
                <a
                  href="tel:+441234567890"
                  className="flex items-center gap-4 text-sm text-charcoal/60 hover:text-sage transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center group-hover:bg-sage/20 transition-colors">
                    <Phone size={15} className="text-sage" />
                  </div>
                  +44 1234 567 890
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-8">Follow Us</h2>
              <div className="flex gap-5">
                <a
                  href="https://instagram.com/hijamaandmore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-charcoal/50 hover:text-sage transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full border border-sage/20 flex items-center justify-center group-hover:border-sage/50 transition-colors">
                    <Globe size={15} className="text-charcoal/40 group-hover:text-sage transition-colors" />
                  </div>
                  Instagram
                </a>
                <a
                  href="https://youtube.com/@hijamaandmore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-charcoal/50 hover:text-sage transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full border border-sage/20 flex items-center justify-center group-hover:border-sage/50 transition-colors">
                    <PlayCircle size={15} className="text-charcoal/40 group-hover:text-sage transition-colors" />
                  </div>
                  YouTube
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-sage/5 border border-sage/10 p-8">
              <p className="text-sm text-charcoal/50 leading-relaxed">
                We typically respond within{" "}
                <strong className="text-charcoal font-semibold">24 hours</strong>.
                For urgent matters, please call directly.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <NetlifyForm
              formName="contact"
              fields={contactFields}
              submitLabel="Send Message"
              successMessage="Thank you. I respond within 24 hours."
            />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
