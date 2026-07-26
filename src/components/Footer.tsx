import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { site, contact, socials, medicalDisclaimer } from "@/lib/site-config";

const nav = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/evidence", label: "Evidence & Questions" },
  { href: "/team", label: "Practitioner" },
  { href: "/services", label: "Additional Services" },
  { href: "/forms", label: "Waivers & Intake Forms" },
  { href: "/contact", label: "Contact" },
  { href: "/request-appointment", label: "Request Appointment" },
];

export function Footer() {
  return (
    <footer className="bg-cream border-t border-sage/10 py-16 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Identity */}
          <div>
            <p className="text-charcoal font-bold tracking-tight text-base mb-3">
              {site.shortName}
            </p>
            <p className="text-sm text-charcoal/40 leading-relaxed max-w-xs">
              Ḥijāma performed to a clinical standard — single-use equipment, a private room, and
              honest advice about whether it&rsquo;s right for you.
            </p>

            {socials.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-7">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-sage/20 px-4 py-2 text-xs text-charcoal/50 hover:border-sage/50 hover:text-sage transition-colors"
                  >
                    {social.label}
                    <ArrowUpRight size={11} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sage mb-6">
              Contact
            </p>
            <div className="flex flex-col gap-4 text-sm text-charcoal/50">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 hover:text-sage transition-colors"
              >
                <Mail size={14} className="text-sage flex-shrink-0" />
                {contact.email}
              </a>

              {contact.phone.display && contact.phone.href ? (
                <a
                  href={contact.phone.href}
                  className="flex items-center gap-3 hover:text-sage transition-colors"
                >
                  <Phone size={14} className="text-sage flex-shrink-0" />
                  {contact.phone.display}
                </a>
              ) : (
                <span className="flex items-center gap-3 text-charcoal/35">
                  <Phone size={14} className="text-sage flex-shrink-0" />
                  Phone line coming soon
                </span>
              )}

              <span className="flex items-start gap-3">
                <MapPin size={14} className="text-sage flex-shrink-0 mt-1" />
                <span>
                  {contact.location.city}
                  <span className="block text-xs text-charcoal/30 mt-1 leading-relaxed">
                    Address shared on confirmation
                  </span>
                </span>
              </span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sage mb-6">
              Pages
            </p>
            <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-y-3 text-sm text-charcoal/45">
              {nav.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-sage transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Medical disclaimer */}
        <div className="border-t border-sage/10 pt-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-charcoal/30 mb-4">
            Medical Disclaimer
          </p>
          <p className="text-xs text-charcoal/40 leading-relaxed max-w-4xl">{medicalDisclaimer}</p>
        </div>

        <div className="border-t border-sage/10 mt-10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-charcoal/30">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-charcoal/25">{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
