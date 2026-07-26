import type { Metadata } from "next";
import { Inter, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * Inter has no glyphs for ﷺ (U+FDFA) or ؓ (U+0613), which appear throughout
 * the evidence pages — without this they render as empty boxes. Listed after
 * Inter in the font stack so it only picks up the characters Inter lacks.
 */
const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-naskh",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Hijama and More | Cupping Therapy in Pittsburgh",
  description:
    "Ḥijāma performed to a clinical standard — single-use sterile equipment, a private treatment room, and an honest answer about whether cupping is right for you.",
  keywords: [
    "hijama",
    "cupping therapy",
    "prophetic medicine",
    "hijama Pittsburgh",
    "Islamic medicine",
    "sunnah cupping",
  ],
  openGraph: {
    title: "Hijama and More | Cupping Therapy in Pittsburgh",
    description:
      "Ḥijāma performed to a clinical standard, by a certified cupping practitioner who is also a Muftī and a nationally certified Physician Assistant.",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${naskh.variable}`}>
      <body className="bg-cream text-charcoal font-sans">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
