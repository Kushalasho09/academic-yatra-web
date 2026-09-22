import React from "react";
import type { Metadata } from "next";
import AboutUsHero from "@/components/about-us/AboutUsHero";
import AboutWhatWeDo from "@/components/about-us/AboutWhatWeDo";
import AboutHowWeTeach from "@/components/about-us/AboutHowWeTeach";
import AboutOurPurpose from "@/components/about-us/AboutOurPurpose";
import AboutUsStatsStrip from "@/components/about-us/AboutUsStatsStrip";
import AboutCorporateEcosystem from "@/components/about-us/AboutCorporateEcosystem";
import AboutLanguagesTicker from "@/components/about-us/AboutLanguagesTicker";
import AboutDigitalEcosystem from "@/components/about-us/AboutDigitalEcosystem";
import AboutLegalDisclosure from "@/components/about-us/AboutLegalDisclosure";
import AboutContactSection from "@/components/about-us/AboutContactSection";

export const metadata: Metadata = {
  title: "About Us | Academic Yatra — For the language your dreams speak",
  description:
    "Academic Yatra is a digital learning platform for language training, test preparation, and practical skill development, built for students and professionals.",
  openGraph: {
    title: "About Academic Yatra — For the language your dreams speak",
    description:
      "Digital learning platform for language training, test preparation, and practical skill development.",
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function AboutUsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* 01. Brand Introduction Hero */}
      <AboutUsHero />

      {/* 02. What We Do: 3 Vertical Cards Stacking on Scroll */}
      <AboutWhatWeDo />

      {/* 03. How We Teach: 4-Step Learning Loop Infographic */}
      <AboutHowWeTeach />

      {/* 04. Our Purpose: 4 Pillars */}
      <AboutOurPurpose />

      {/* Key Numbers & Metric Counter Strip */}
      <AboutUsStatsStrip />

      {/* Corporate Group Profile & 3 Consumer Brands */}
      <AboutCorporateEcosystem />

      {/* Continuous Flowing Languages & Exams Marquee Ticker */}
      <AboutLanguagesTicker />

      {/* Digital Learning Ecosystem & LMS Preview */}
      <AboutDigitalEcosystem />

      {/* 7. Institutional & Legal Transparency Disclosure */}
      <AboutLegalDisclosure />

      {/* 8. Contact Form & Instant WhatsApp Connect */}
      <AboutContactSection />
    </main>
  );
}
