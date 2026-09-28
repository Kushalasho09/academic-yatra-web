"use client";

import React from "react";
import TokyoSkylineHero from "@/components/ui/tokyo-skyline-hero";

export default function AboutUsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#031643]">
      <TokyoSkylineHero
        videoSrc="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
        skylineSrc="/images/education_skyline_cutout.png"
        title="For the language your dreams speak"
        subtitle="Academic Yatra is a comprehensive digital learning platform for language training, test preparation, and practical skill development, preparing students and professionals for international opportunities."
        brandMark="ACADEMIC YATRA"
        brandSubmark="YOUR GLOBAL LEARNING EXPEDITION"
        scrollHint="SCROLL TO EXPLORE"
        navItems={[]}
        signature={{
          name: "Academic Yatra",
          url: "https://academicyatra.com",
        }}
        scrubDistance={2800}
      />
    </section>
  );
}
