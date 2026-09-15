import React from "react";
import type { Metadata } from "next";
import AboutUsHero from "@/components/about-us/AboutUsHero";
import AboutUsStatsStrip from "@/components/about-us/AboutUsStatsStrip";
import AboutCorporateEcosystem from "@/components/about-us/AboutCorporateEcosystem";
import AboutLanguagesTicker from "@/components/about-us/AboutLanguagesTicker";
import AboutProgramsGrid from "@/components/about-us/AboutProgramsGrid";
import AboutDigitalEcosystem from "@/components/about-us/AboutDigitalEcosystem";
import AboutLegalDisclosure from "@/components/about-us/AboutLegalDisclosure";
import AboutContactSection from "@/components/about-us/AboutContactSection";

export const metadata: Metadata = {
  title: "About Us | Academic Yatra — Empowering Global Education & Career Success",
  description:
    "Academic Yatra, by Future Yatra Private Limited, empowers students and professionals through expert language training, test preparation, and digital learning solutions.",
  openGraph: {
    title: "About Academic Yatra — Making Global Education Easy",
    description:
      "Integrated education, language training, and academic development solutions by Future Yatra Private Limited, New Delhi.",
  },
};

export default function AboutUsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* 1. Cinematic Hero Section with Dennis Snellenberg Preloader & Liquid Glass CTAs */}
      <AboutUsHero />

      {/* 2. Key Numbers & Metric Counter Strip */}
      <AboutUsStatsStrip />

      {/* 3. Corporate Group Profile & 3 Consumer Brands (Academic, University, Medico) */}
      <AboutCorporateEcosystem />

      {/* 4. Continuous Flowing Languages & Exams Marquee Ticker */}
      <AboutLanguagesTicker />

      {/* 5. Core Programs Grid: English Proficiency, Entrance Exams, and Foreign Languages */}
      <AboutProgramsGrid />

      {/* 6. Digital Learning Ecosystem (Included with All Enrolled Programs) & MacBook LMS Preview */}
      <AboutDigitalEcosystem />

      {/* 7. Institutional & Legal Transparency Disclosure */}
      <AboutLegalDisclosure />

      {/* 8. Contact Form & Instant WhatsApp Connect */}
      <AboutContactSection />
    </main>
  );
}
