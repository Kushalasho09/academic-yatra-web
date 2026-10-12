"use client";

import React from "react";
import ResourcesHero from "@/components/resources/ResourcesHero";
import ResourcesBlogGrid from "@/components/resources/ResourcesBlogGrid";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Animated Hero Section with Skiper8 & Video */}
      <ResourcesHero />

      {/* 2. Interactive Blog & Guide Grid */}
      <ResourcesBlogGrid />

      {/* 3. Consultation CTA Banner */}
      <ConsultationCTA />

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}
