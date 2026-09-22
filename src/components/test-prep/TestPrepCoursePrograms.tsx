"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SubscriptionCard from "@/components/ui/SubscriptionCard";

export interface ProgramFeature {
  text: string;
  included: boolean;
}

export interface ProgramPlan {
  id: string;
  name: string;
  badge?: string;
  badgeDotColor?: "yellow" | "green" | "emerald";
  styleType: "neutral" | "featured" | "warm";
  price: string;
  period: string;
  totalText: string;
  validityText: string;
  description?: string;
  features: ProgramFeature[];
}

export const TEST_PREP_EXAM_PROGRAMS: Record<
  string,
  { examName: string; plans: ProgramPlan[] }
> = {
  SAT: {
    examName: "D-SAT",
    plans: [
      {
        id: "sat-self",
        name: "Self Preparation Pack",
        badge: "Standard",
        badgeDotColor: "yellow",
        styleType: "neutral",
        price: "3,833",
        period: "/ month (INR)",
        totalText: "Total: ₹22,999 (incl. 18% GST)",
        validityText: "6 Months Validity",
        description:
          "Self-paced learning with extensive practice tests, Bluebook-style mocks, and complete dashboard access.",
        features: [
          { text: "39 Practice Tests", included: true },
          { text: "11 Mock Tests", included: true },
          { text: "90+ Hours Video Lessons", included: true },
          { text: "Student Dashboard Access", included: true },
          { text: "Expert Feedback", included: true },
          { text: "No Live Lectures", included: false },
        ],
      },
      {
        id: "sat-champ",
        name: "Champion Pack",
        badge: "Most Popular • 1500+ Target",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "9,000",
        period: "/ month (INR)",
        totalText: "Total: ₹53,999 (incl. 18% GST)",
        validityText: "6 Months Validity",
        description:
          "Comprehensive live masterclasses, mock exams, and personalized score mentoring for top global universities.",
        features: [
          { text: "39 Practice Tests", included: true },
          { text: "11 Mock Tests", included: true },
          { text: "120+ Hours Live Lectures", included: true },
          { text: "Student Dashboard Access", included: true },
          { text: "Expert Feedback & Strategy", included: true },
          { text: "Full Video Library Access", included: true },
        ],
      },
      {
        id: "sat-live",
        name: "Live Class Pack",
        badge: "3-Month Sprint",
        badgeDotColor: "green",
        styleType: "warm",
        price: "9,666",
        period: "/ month (INR)",
        totalText: "Total: ₹28,999 (incl. 18% GST)",
        validityText: "3 Months Validity",
        description:
          "Fast-track live coaching with recorded class archives and in-depth performance diagnostics.",
        features: [
          { text: "Live Strategy Masterclasses", included: true },
          { text: "Recorded Lessons Archive", included: true },
          { text: "Student Dashboard Access", included: true },
          { text: "Performance Analysis", included: true },
          { text: "Expert Faculty Feedback", included: true },
        ],
      },
    ],
  },

  GRE: {
    examName: "Shorter GRE",
    plans: [
      {
        id: "gre-self",
        name: "Self Preparation Pack",
        badge: "Self-Paced",
        badgeDotColor: "yellow",
        styleType: "neutral",
        price: "3,833",
        period: "/ month (INR)",
        totalText: "Total: ₹22,999 (incl. 18% GST)",
        validityText: "6 Months Validity",
        description:
          "Comprehensive self-study kit covering high-frequency vocabulary, quant question banks, and simulated mocks.",
        features: [
          { text: "11 Full-Length Mock Tests", included: true },
          { text: "90+ Hours Video Lessons", included: true },
          { text: "Student Dashboard Access", included: true },
          { text: "Performance Analysis", included: true },
          { text: "Expert Feedback", included: true },
          { text: "No Live Lectures", included: false },
        ],
      },
      {
        id: "gre-champ",
        name: "Champion Pack",
        badge: "Most Popular • 325+ Target",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "9,000",
        period: "/ month (INR)",
        totalText: "Total: ₹53,999 (incl. 18% GST)",
        validityText: "6 Months Validity",
        description:
          "Target top 20 global STEM & Master's programs with 99th percentile instructors and extensive video lessons.",
        features: [
          { text: "11 Full-Length Mock Tests", included: true },
          { text: "120+ Hours Video Lessons & Mentorship", included: true },
          { text: "Student Dashboard Access", included: true },
          { text: "Performance Analysis", included: true },
          { text: "Expert Feedback & Reviews", included: true },
          { text: "Full Question Bank Access", included: true },
        ],
      },
      {
        id: "gre-live",
        name: "Live Class Pack",
        badge: "3-Month Sprint",
        badgeDotColor: "green",
        styleType: "warm",
        price: "9,666",
        period: "/ month (INR)",
        totalText: "Total: ₹28,999 (incl. 18% GST)",
        validityText: "3 Months Validity",
        description:
          "Targeted live training covering both Quant and Verbal sections with continuous doubt resolution.",
        features: [
          { text: "Live Interactive Lectures", included: true },
          { text: "Recorded Lessons Archive", included: true },
          { text: "Student Dashboard Access", included: true },
          { text: "Performance Analysis", included: true },
          { text: "Expert Faculty Feedback", included: true },
        ],
      },
    ],
  },

  GMAT: {
    examName: "GMAT Focus",
    plans: [
      {
        id: "gmat-live",
        name: "Live Class Pack",
        badge: "Most Popular • Top B-Schools",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "13,000",
        period: "/ month (INR)",
        totalText: "Total: ₹38,999 (incl. 18% GST)",
        validityText: "3 Months Validity",
        description:
          "Premier preparation targeting Harvard, Wharton, INSEAD & ISB with executive pacing & faculty mentorship.",
        features: [
          { text: "Live Interactive Lectures", included: true },
          { text: "3 Days Quant + 3 Days Verbal", included: true },
          { text: "Student Dashboard Access", included: true },
          { text: "Performance Analysis Engine", included: true },
          { text: "Expert Faculty Feedback", included: true },
          { text: "Recorded Video Archive", included: true },
        ],
      },
    ],
  },

  DMAT: {
    examName: "DMAT",
    plans: [
      {
        id: "dmat-live",
        name: "Live Classes",
        badge: "Intensive 60-Day Program",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "34,999",
        period: "total (incl. 18% GST)",
        totalText: "Total: ₹34,999 (incl. 18% GST)",
        validityText: "60 Days Validity",
        description:
          "Structured live preparation tailored for executive management assessments and professional criteria.",
        features: [
          { text: "Full Live Interactive Classes", included: true },
          { text: "Student Dashboard Access", included: true },
          { text: "Comprehensive Performance Analysis", included: true },
          { text: "Expert Mentor Feedback", included: true },
          { text: "60 Days Validity", included: true },
        ],
      },
    ],
  },
};

interface TestPrepCourseProgramsProps {
  selectedExam: string;
  onSelectExam: (exam: string) => void;
}

export default function TestPrepCoursePrograms({
  selectedExam,
  onSelectExam,
}: TestPrepCourseProgramsProps) {
  const currentExamData =
    TEST_PREP_EXAM_PROGRAMS[selectedExam] || TEST_PREP_EXAM_PROGRAMS["SAT"];

  return (
    <section id="course-programs" className="py-8 sm:py-12 bg-slate-50 relative z-10 scroll-mt-20 overflow-hidden">
      {/* Seamless Top & Bottom Ambient Fade */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-snug sm:leading-[1.28] lg:leading-[1.3] tracking-tight">
            Preparation Programs &amp; <span className="text-brand-primary">Course Plans</span>
          </h2>
          <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
            Select your target exam to view available course batches, mock test packages, and comprehensive admission pathways.
          </p>
        </div>

        {/* Interactive Exam Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {Object.entries(TEST_PREP_EXAM_PROGRAMS).map(([key, data]) => {
            const isSelected = selectedExam === key;
            return (
              <button
                key={key}
                onClick={() => onSelectExam(key)}
                className={cn(
                  "px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 border cursor-pointer flex items-center gap-2",
                  isSelected
                    ? "bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/25 scale-[1.03]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-brand-primary/60 hover:text-brand-primary shadow-xs"
                )}
              >
                <span>{data.examName}</span>
              </button>
            );
          })}
        </div>

        {/* Pricing Cards Grid */}
        <div
          className={cn(
            "grid gap-6 lg:gap-8 items-stretch mx-auto",
            currentExamData.plans.length === 1
              ? "grid-cols-1 max-w-md"
              : currentExamData.plans.length === 2
              ? "grid-cols-1 md:grid-cols-2 max-w-4xl"
              : "grid-cols-1 md:grid-cols-3 max-w-6xl"
          )}
        >
          {currentExamData.plans.map((plan, idx) => {
            const isFeatured = plan.styleType === "featured" || idx === 1;
            const theme = idx === 0 ? "mint" : idx === 1 ? "lime" : "lavender";
            const badge = isFeatured ? "Popular" : undefined;
            const ctaHref = `https://web.whatsapp.com/send?phone=+919403892981&text=Hi,%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(
              currentExamData.examName
            )}%20-${encodeURIComponent(plan.name)}.`;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="h-full"
              >
                <SubscriptionCard
                  id={plan.id}
                  name={plan.name}
                  subtitle={idx === 0 ? "Best for self-paced foundation" : idx === 1 ? "Perfect to get started" : "Full master preparation"}
                  price={plan.price}
                  period={plan.period || "/month"}
                  currency="₹"
                  totalText={plan.totalText ? `${plan.totalText} • ${plan.validityText}` : plan.validityText}
                  badge={badge}
                  isFeatured={isFeatured}
                  theme={theme}
                  features={plan.features}
                  description={plan.description || "All the essentials to build and master your test-prep score"}
                  ctaText="Choose"
                  ctaHref={ctaHref}
                  trialHref="/contacts"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
