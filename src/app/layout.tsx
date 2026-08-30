import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HydrationFix from "@/components/HydrationFix";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Academic Yatra | IELTS, PTE, CELPIP, Duolingo, GMAT & Language Programs",
  description:
    "Prepare for IELTS, PTE, CELPIP, GMAT, German & French with Academic Yatra. Join expert online live classes, study abroad guidance, mock simulations & score guarantee pathways.",
  icons: {
    icon: "/images/academic_yatra_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${poppins.variable} ${dmSans.variable} ${playfair.variable}`}
    >
      <body
        suppressHydrationWarning
        className="font-sans text-slate-800 bg-white antialiased min-h-screen flex flex-col selection:bg-brand-primary selection:text-white"
      >
        <HydrationFix />
        <ScrollToTop />
        <FloatingWhatsApp />
        <Navbar />
        <main className="flex-grow relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
