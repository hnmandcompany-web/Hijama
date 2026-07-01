import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-cream border-t border-sage/10 py-16 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-14">
          <div className="max-w-xs">
            <p className="text-charcoal font-bold tracking-tight text-base mb-3">Hijama & More</p>
            <p className="text-sm text-charcoal/40 leading-relaxed">
              Professional Hijama therapy rooted in prophetic medicine and modern wellness practice.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-10 gap-y-4 text-xs uppercase tracking-[0.14em] text-charcoal/40">
            <Link href="/" className="hover:text-sage transition-colors">Home</Link>
            <Link href="/about" className="hover:text-sage transition-colors">About</Link>
            <Link href="/pricing" className="hover:text-sage transition-colors">Pricing</Link>
            <Link href="/additional-services" className="hover:text-sage transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-sage transition-colors">Contact</Link>
            <Link href="/request-appointment" className="hover:text-sage transition-colors">Book</Link>
          </nav>
        </div>
        <div className="border-t border-sage/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-charcoal/30">
            &copy; {new Date().getFullYear()} Hijama and More. All rights reserved.
          </p>
          <p className="text-xs text-charcoal/25">hijamaandmore.com</p>
        </div>
      </div>
    </footer>
  );
}
