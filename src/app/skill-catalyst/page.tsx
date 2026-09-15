"use client";

import React, { useState } from "react";
import SkillCatalystHero from "@/components/skill-catalyst/SkillCatalystHero";
import SkillCatalystStatsStrip from "@/components/skill-catalyst/SkillCatalystStatsStrip";
import SkillCatalystOverview from "@/components/skill-catalyst/SkillCatalystOverview";
import SkillCatalystChooseYourPath from "@/components/skill-catalyst/SkillCatalystChooseYourPath";
import SkillCatalystPlatformPreview from "@/components/skill-catalyst/SkillCatalystPlatformPreview";
import SkillCatalystLearningExperience from "@/components/skill-catalyst/SkillCatalystLearningExperience";
import SkillCatalystCoursePrograms from "@/components/skill-catalyst/SkillCatalystCoursePrograms";
import SkillCatalystStudentFeedback from "@/components/skill-catalyst/SkillCatalystStudentFeedback";
import SkillCatalystFAQ from "@/components/skill-catalyst/SkillCatalystFAQ";
import SkillCatalystTrialBanner from "@/components/skill-catalyst/SkillCatalystTrialBanner";

export default function SkillCatalystPage() {
  const [selectedProgram, setSelectedProgram] = useState<string>("ALL");

  const handleSelectPath = (programKey: string) => {
    setSelectedProgram(programKey);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section: Video background, words preloader, liquid glass buttons */}
      <SkillCatalystHero />

      {/* 2. 4-Stat Metric Strip (100% Online Dashboard, 100% Tracking, 99% Accuracy, 100% Attendance) */}
      <SkillCatalystStatsStrip />

      {/* 3. Learn Skills That Matter in the Modern Workplace Overview */}
      <SkillCatalystOverview />

      {/* 4. Choose Your Path (Career Essentials, BizzTech, Google Suite Hub, Combo with glowing shelves) */}
      <SkillCatalystChooseYourPath onSelectPath={handleSelectPath} />

      {/* 5. Complete Platform Preview (macOS Window Mockup with Student Dashboard Image) */}
      <SkillCatalystPlatformPreview />

      {/* 6. Learning Experience (Live Trainer Sessions, Interactive Learning, Recorded Vault, Capstones) */}
      <SkillCatalystLearningExperience />

      {/* 7. Course Programs (Structured Pricing & Plans: Career Essentials, BizzTech, Google Suite, Combo) */}
      <SkillCatalystCoursePrograms
        selectedProgram={selectedProgram}
        onSelectProgram={setSelectedProgram}
      />

      {/* 8. Student Results & Feedback Carousel */}
      <SkillCatalystStudentFeedback />

      {/* 9. Frequently Asked Questions with Animated Collapsible Accordions */}
      <SkillCatalystFAQ />

      {/* 10. Start Your Preparation With Confidence Lead Banner & WhatsApp action */}
      <SkillCatalystTrialBanner />
    </div>
  );
}
