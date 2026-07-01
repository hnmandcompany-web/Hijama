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
    <div className="py-24 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal">Contact Us</h1>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection className="flex flex-col gap-8">
            <div>
              <h2 className="text-lg font-bold tracking-tight text-charcoal mb-5">Direct Contact</h2>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:info@hijamaandmore.com"
                  className="flex items-center gap-3 text-sm text-charcoal/70 hover:text-sage transition-colors"
                >
                  <Mail size={16} className="text-sage" />
                  info@hijamaandmore.com
                </a>
                <a
                  href="tel:+441234567890"
                  className="flex items-center gap-3 text-sm text-charcoal/70 hover:text-sage transition-colors"
                >
                  <Phone size={16} className="text-sage" />
                  +44 1234 567 890
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold tracking-tight text-charcoal mb-5">Follow Us</h2>
              <div className="flex gap-6">
                <a
                  href="https://instagram.com/hijamaandmore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-charcoal/60 hover:text-sage transition-colors group"
                >
                  <Globe size={18} className="group-hover:text-sage transition-colors" />
                  Instagram
                </a>
                <a
                  href="https://youtube.com/@hijamaandmore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-charcoal/60 hover:text-sage transition-colors group"
                >
                  <PlayCircle size={18} className="group-hover:text-sage transition-colors" />
                  YouTube
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-sage/20 bg-white p-6">
              <p className="text-sm text-charcoal/60 leading-relaxed">
                We typically respond to all enquiries within{" "}
                <strong className="text-charcoal">24 hours</strong>. For urgent matters, please call directly.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
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
