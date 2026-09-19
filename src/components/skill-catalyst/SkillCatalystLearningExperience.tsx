"use client";

import React from "react";
import WindingRoadmap, { WindingStep } from "@/components/ui/WindingRoadmap";
import { Users, Compass, Award, Sparkles } from "lucide-react";

const SKILL_CATALYST_STEPS: WindingStep[] = [
  {
    number: "01",
    title: "Learn From People Who Do It",
    tagline: "PRACTICAL KNOWLEDGE. EXPERT PERSPECTIVE.",
    description:
      "Learn through structured lessons and expert-led sessions built around skills that matter in real academic and professional settings.",
    icon: Users,
  },
  {
    number: "02",
    title: "Learn By Building",
    tagline: "LESS THEORY. MORE DOING.",
    description:
      "Turn concepts into practice through hands-on exercises, assignments, and projects that make learning tangible.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Create Work You Can Show",
    tagline: "BUILD YOUR SKILL PORTFOLIO",
    description:
      "Apply what you learn to real-world deliverables and projects that help you demonstrate your capabilities beyond a certificate.",
    icon: Award,
  },
  {
    number: "04",
    title: "Get Feedback. Refine. Repeat.",
    tagline: "IMPROVEMENT IS PART OF THE COURSE.",
    description:
      "Receive expert feedback, identify gaps, refine your work, and keep raising the quality of what you create.",
    icon: Sparkles,
  },
];

export default function SkillCatalystLearningExperience() {
  return (
    <WindingRoadmap
      headingLine1="Learn Skills That"
      headingLine2="Leave The Classroom."
      subtitle="Go beyond watching lessons. Learn through expert guidance, practical application, real-world projects, and work that gives your skills something to show for."
      steps={SKILL_CATALYST_STEPS}
    />
  );
}
