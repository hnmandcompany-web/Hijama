import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hijama and More | Holistic Wellness & Cupping Therapy",
  description:
    "Professional Hijama (cupping therapy) rooted in prophetic medicine. Book your session at hijamaandmore.com and begin your journey to holistic wellness.",
  keywords: ["hijama", "cupping therapy", "prophetic medicine", "holistic wellness", "Islamic medicine"],
  openGraph: {
    title: "Hijama and More | Holistic Wellness & Cupping Therapy",
    description:
      "Professional Hijama therapy rooted in prophetic medicine and modern wellness practice.",
    url: "https://hijamaandmore.com",
    siteName: "Hijama and More",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-cream text-charcoal font-sans">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
