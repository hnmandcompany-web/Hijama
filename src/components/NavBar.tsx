"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/additional-services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-cream/90 border-b border-sage/10">
      <nav className="max-w-6xl mx-auto px-8 lg:px-16 flex items-center justify-between h-16">
        <Link href="/" className="text-charcoal font-bold tracking-tight text-lg">
          Hijama & More
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} active={pathname === link.href}>
              {link.label}
            </NavLink>
          ))}
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/request-appointment"
              className="bg-sage text-white text-sm font-medium px-5 py-2 rounded-full transition-colors hover:bg-sage/90"
            >
              Book Now
            </Link>
          </motion.div>
        </div>

        <button
          className="md:hidden text-charcoal"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-cream border-b border-sage/10 px-8 pb-6 flex flex-col gap-4"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm ${pathname === link.href ? "text-sage font-semibold" : "text-charcoal"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/request-appointment"
            onClick={() => setOpen(false)}
            className="bg-sage text-white text-sm font-medium px-5 py-2 rounded-full text-center"
          >
            Book Now
          </Link>
        </motion.div>
      )}
    </header>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative group text-sm text-charcoal">
      <span className={active ? "text-sage font-semibold" : ""}>{children}</span>
      <span className="absolute -bottom-0.5 left-0 h-px bg-gold w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
    </Link>
  );
}
