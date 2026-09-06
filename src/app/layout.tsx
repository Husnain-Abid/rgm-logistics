import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "RGM Goods & Car Carrier Services | Car Transport Pakistan",
    template: "%s | RGM Car Carrier Services",
  },
  description:
    "RGM Goods & Car Carrier Services — Pakistan's trusted vehicle transportation company with 20+ years of experience. Car transport, door-to-door service, accidental recovery across Pakistan.",
  keywords: [
    "car transport Pakistan",
    "car carrier Pakistan",
    "vehicle transportation Pakistan",
    "door to door car transport",
    "car transport Karachi Lahore",
    "car transport Karachi Islamabad",
    "accidental car recovery Pakistan",
    "bike transport Pakistan",
    "RGM car carrier",
  ],
  openGraph: {
    title: "RGM Goods & Car Carrier Services",
    description:
      "Safe & Reliable Car Transportation Across Pakistan. 20+ years experience. Apki Ghari Hamari Zimadari.",
    type: "website",
    locale: "en_PK",
    siteName: "RGM Goods & Car Carrier Services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="antialiased bg-white text-gray-900 font-sans">
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
