"use client";

import React, { useState } from "react";
import TestPrepHero from "@/components/test-prep/TestPrepHero";
import TestPrepStatsStrip from "@/components/test-prep/TestPrepStatsStrip";
import TestPrepChooseYourPath from "@/components/test-prep/TestPrepChooseYourPath";
import TestPrepPlatformPreview from "@/components/test-prep/TestPrepPlatformPreview";
import TestPrepLearningExperience from "@/components/test-prep/TestPrepLearningExperience";
import TestPrepCoursePrograms from "@/components/test-prep/TestPrepCoursePrograms";
import TestPrepStudentFeedback from "@/components/test-prep/TestPrepStudentFeedback";
import TestPrepFAQ from "@/components/test-prep/TestPrepFAQ";
import TestPrepTrialBanner from "@/components/test-prep/TestPrepTrialBanner";

export default function TestPrepPage() {
  const [selectedExam, setSelectedExam] = useState<string>("SAT");

  const handleSelectPath = (examKey: string) => {
    setSelectedExam(examKey);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section: Video background, Dennis Snellenberg preloader, liquid glass buttons */}
      <TestPrepHero />

      {/* 2. 4-Stat Metric Strip (100% Online Dashboard, 100% Tracking, 99% Accuracy, 100% Attendance) */}
      <TestPrepStatsStrip />

      {/* 3. Choose Your Path (SAT, GRE, GMAT, Combo Pathways) */}
      <TestPrepChooseYourPath onSelectPath={handleSelectPath} />

      {/* 5. Complete Platform Preview (macOS Window Mockup with Interactive Tabs) */}
      <TestPrepPlatformPreview />

      {/* 6. Learning Experience (Live Masterclasses, Computer-Adaptive Testing, 1-on-1 Mentorship) */}
      <TestPrepLearningExperience />

      {/* 7. Course Programs (Interactive Pricing & Batches for SAT, GRE, GMAT & Combos) */}
      <TestPrepCoursePrograms
        selectedExam={selectedExam}
        onSelectExam={setSelectedExam}
      />

      {/* 8. Student Results & Feedback Carousel */}
      <TestPrepStudentFeedback />

      {/* 9. Frequently Asked Questions (Exact matching user FAQ questions & accordion) */}
      <TestPrepFAQ />

      {/* 10. Start Your Preparation With Confidence Lead Banner */}
      <TestPrepTrialBanner />
    </div>
  );
}
