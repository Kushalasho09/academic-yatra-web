"use client";

import React from "react";
import WindingRoadmap, { WindingStep } from "@/components/ui/WindingRoadmap";
import { GraduationCap, Target, Clock, TrendingUp } from "lucide-react";

const TEST_PREP_STEPS: WindingStep[] = [
  {
    number: "01",
    title: "Learn The Logic Behind The Test",
    tagline: "CONCEPTS THAT BUILD YOUR FOUNDATION",
    description:
      "Master core concepts with structured lessons, expert instruction, and targeted practice across the sections that matter.",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Practise With A Strategy",
    tagline: "SMARTER PRACTICE. BETTER CONTROL.",
    description:
      "Work through topic-wise exercises and sectional practice designed to improve accuracy, timing, and test-taking approach.",
    icon: Target,
  },
  {
    number: "03",
    title: "Train Under Real Test Conditions",
    tagline: "PRACTICE THE WAY YOU’LL TEST",
    description:
      "Put your preparation to the test with full-length mock exams, timed practice, and exam-style simulations.",
    icon: Clock,
  },
  {
    number: "04",
    title: "Turn Performance Into Progress",
    tagline: "EVERY ATTEMPT TELLS YOU SOMETHING",
    description:
      "Analyse your performance, spot recurring gaps, refine your approach, and keep building towards your target score.",
    icon: TrendingUp,
  },
];

export default function TestPrepLearningExperience() {
  return (
    <WindingRoadmap
      headingLine1="Prepare With Purpose."
      headingLine2="Perform With Precision."
      subtitle="From concepts to full-length mocks, every part of your preparation is structured to help you understand the test, sharpen your approach, and perform under pressure."
      steps={TEST_PREP_STEPS}
    />
  );
}
