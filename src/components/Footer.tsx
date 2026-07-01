import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-cream border-t border-sage/10 py-12 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-charcoal font-bold tracking-tight">Hijama & More</p>
          <p className="text-sm text-charcoal/50 mt-1">Holistic Wellness & Cupping Therapy</p>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-charcoal/60">
          <Link href="/" className="hover:text-sage transition-colors">Home</Link>
          <Link href="/about" className="hover:text-sage transition-colors">About</Link>
          <Link href="/pricing" className="hover:text-sage transition-colors">Pricing</Link>
          <Link href="/additional-services" className="hover:text-sage transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-sage transition-colors">Contact</Link>
          <Link href="/request-appointment" className="hover:text-sage transition-colors">Book</Link>
        </nav>
        <p className="text-xs text-charcoal/40">
          &copy; {new Date().getFullYear()} Hijama and More. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
