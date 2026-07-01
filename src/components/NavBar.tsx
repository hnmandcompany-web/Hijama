"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-cream/95 border-b border-sage/10 shadow-[0_1px_0_0_rgba(116,147,120,0.08)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-8 lg:px-16 flex items-center justify-between h-16">
        <Link href="/" className="text-charcoal font-bold tracking-tight text-base">
          Hijama & More
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} active={pathname === link.href}>
              {link.label}
            </NavLink>
          ))}
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/request-appointment"
              className="bg-sage text-white text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full transition-colors hover:bg-sage/90"
            >
              Book Now
            </Link>
          </motion.div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-charcoal p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden bg-cream/98 backdrop-blur-md border-b border-sage/10 px-8 pb-8 pt-2 flex flex-col gap-5"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm ${
                pathname === link.href ? "text-sage font-semibold" : "text-charcoal/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/request-appointment"
            onClick={() => setOpen(false)}
            className="bg-sage text-white text-xs font-semibold uppercase tracking-widest px-5 py-3 rounded-full text-center mt-2"
          >
            Book Now
          </Link>
        </motion.div>
      )}
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="relative group text-xs font-medium uppercase tracking-[0.14em] text-charcoal/60 hover:text-charcoal transition-colors">
      <span className={active ? "text-sage" : ""}>{children}</span>
      <span className="absolute -bottom-0.5 left-0 h-px bg-gold w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
    </Link>
  );
}
