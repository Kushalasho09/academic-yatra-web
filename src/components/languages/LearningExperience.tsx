"use client";

import React from "react";
import WindingRoadmap, { WindingStep } from "@/components/ui/WindingRoadmap";
import { Users, BookOpen, Clock, TrendingUp } from "lucide-react";

const LANGUAGE_STEPS: WindingStep[] = [
  {
    number: "01",
    title: "Learn With Expert Guidance",
    tagline: "LIVE LEARNING, REAL-TIME SUPPORT",
    description:
      "Build your language skills through structured lessons with experienced trainers, live interaction, and dedicated doubt-solving.",
    icon: Users,
  },
  {
    number: "02",
    title: "Turn Lessons Into Practice",
    tagline: "LESS THEORY. MORE APPLICATION.",
    description:
      "Put every concept into action through speaking activities, exercises, quizzes, and practical communication tasks.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Learn Around Your Life",
    tagline: "YOUR COURSE. YOUR PACE.",
    description:
      "Combine live classes with recorded lessons and digital resources, so you can keep learning even when your schedule changes.",
    icon: Clock,
  },
  {
    number: "04",
    title: "Know Where You’re Improving",
    tagline: "FEEDBACK THAT MOVES YOU FORWARD",
    description:
      "Get clear feedback on your performance, identify areas to work on, and build stronger communication skills session by session.",
    icon: TrendingUp,
  },
];

export default function LearningExperience() {
  return (
    <WindingRoadmap
      headingLine1="Built for Conversations"
      headingLine2="Beyond Home."
      subtitle="A language course built beyond vocabulary and grammar — with live practice, structured progression, and feedback that helps you communicate with confidence."
      steps={LANGUAGE_STEPS}
    />
  );
}
