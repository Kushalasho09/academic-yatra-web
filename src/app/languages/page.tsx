"use client";

import React, { useState } from "react";
import LanguagesHero from "@/components/languages/LanguagesHero";
import LanguagesStatsStrip from "@/components/languages/LanguagesStatsStrip";
import LanguagesOverview from "@/components/languages/LanguagesOverview";
import ChooseYourPath from "@/components/languages/ChooseYourPath";
import PlatformPreview from "@/components/languages/PlatformPreview";
import LearningExperience from "@/components/languages/LearningExperience";
import CoursePrograms from "@/components/languages/CoursePrograms";
import StudentFeedback from "@/components/languages/StudentFeedback";
import LanguagesFAQ from "@/components/languages/LanguagesFAQ";
import TrialLessonBanner from "@/components/languages/TrialLessonBanner";

export default function LanguagesProgramsPage() {
  const [selectedExam, setSelectedExam] = useState<string>("IELTS AC");

  const handleSelectPath = (examKey: string) => {
    setSelectedExam(examKey);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section */}
      <LanguagesHero />

      {/* 2. 4-Stat Metric Strip */}
      <LanguagesStatsStrip />

      {/* 3. Everything You Need to Prepare Overview */}
      <LanguagesOverview />

      {/* 4. Choose Your Path (10 Pathways) */}
      <ChooseYourPath onSelectPath={handleSelectPath} />

      {/* 5. Complete Platform Preview (macOS Mockup with Interactive Tabs) */}
      <PlatformPreview />

      {/* 6. Learning Experience (Live, Interactive, Recorded) */}
      <LearningExperience />

      {/* 7. Course Programs (Interactive Pricing & Batches) */}
      <CoursePrograms
        selectedExam={selectedExam}
        onSelectExam={setSelectedExam}
      />

      {/* 8. Student Feedback Carousel */}
      <StudentFeedback />

      {/* 9. Frequently Asked Questions */}
      <LanguagesFAQ />

      {/* 10. Start Your Trial Lesson Lead Form Banner */}
      <TrialLessonBanner />
    </div>
  );
}
