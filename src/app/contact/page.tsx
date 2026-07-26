import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { NetlifyForm } from "@/components/NetlifyForm";
import { AnimatedSection } from "@/components/AnimatedSection";
import { contact, socials } from "@/lib/site-config";
import { contactFields } from "@/lib/form-fields";

export const metadata = {
  title: "Contact | Hijama and More",
  description:
    "Email, phone, location and socials for Hijama and More — plus a message form that reaches the practitioner directly.",
};

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">
            Get in Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-charcoal leading-[1.04]">
            Contact Us
          </h1>
          <p className="mt-8 text-charcoal/45 text-base max-w-xl leading-relaxed">
            Messages reach the practitioner directly — there&rsquo;s no reception desk in between.
            We reply within {contact.responseTime}.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <AnimatedSection className="flex flex-col gap-12">
            {/* Direct contact */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-8">
                Direct Contact
              </h2>
              <div className="flex flex-col gap-5">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 text-sm text-charcoal/60 hover:text-sage transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center group-hover:bg-sage/20 transition-colors flex-shrink-0">
                    <Mail size={15} className="text-sage" />
                  </div>
                  {contact.email}
                </a>

                {contact.phone.display && contact.phone.href ? (
                  <a
                    href={contact.phone.href}
                    className="flex items-center gap-4 text-sm text-charcoal/60 hover:text-sage transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center group-hover:bg-sage/20 transition-colors flex-shrink-0">
                      <Phone size={15} className="text-sage" />
                    </div>
                    {contact.phone.display}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 text-sm text-charcoal/40">
                    <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={15} className="text-sage" />
                    </div>
                    Phone line coming soon &mdash; email is the fastest way to reach us
                  </div>
                )}

                <div className="flex items-start gap-4 text-sm text-charcoal/60">
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={15} className="text-sage" />
                  </div>
                  <div>
                    <p>{contact.location.city}</p>
                    <p className="text-charcoal/40 text-xs mt-1.5 leading-relaxed">
                      {contact.location.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-8">
                Follow Us
              </h2>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-sage/20 px-5 py-2.5 text-sm text-charcoal/55 hover:border-sage/50 hover:text-sage transition-colors"
                  >
                    {social.label}
                    <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-sage/5 border border-sage/10 p-8">
              <p className="text-sm text-charcoal/50 leading-relaxed">
                We typically respond within{" "}
                <strong className="text-charcoal font-semibold">{contact.responseTime}</strong>. To
                book a session, use the{" "}
                <a href="/request-appointment" className="text-sage hover:underline">
                  appointment request form
                </a>{" "}
                instead — it reaches us the same way but tells us what we need up front.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <NetlifyForm
              formName="contact"
              fields={contactFields}
              submitLabel="Send Message"
              successMessage={`Thank you. We respond within ${contact.responseTime}.`}
            />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
