"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, HelpCircle, Users, Rocket, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

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
    examName: "Digital SAT (Undergrad Abroad)",
    plans: [
      {
        id: "sat-self",
        name: "Self Preparation Pack",
        badge: "Standard",
        badgeDotColor: "yellow",
        styleType: "neutral",
        price: "2,499",
        period: "/ month (INR)",
        totalText: "Total: ₹14,994",
        validityText: "6 Months Validity",
        description:
          "Ideal for self-paced students with complete access to Digital SAT adaptive question banks & mock tests.",
        features: [
          { text: "50+ Digital SAT Adaptive Practice Sets", included: true },
          { text: "15 Full-Length Bluebook-Style Mocks", included: true },
          { text: "35+ Hours of Math & Reading Recorded Lessons", included: true },
          { text: "Desmos Calculator Masterclass Videos", included: true },
          { text: "No Live Lectures", included: false },
        ],
      },
      {
        id: "sat-champ-plus",
        name: "Champion Pack +",
        badge: "Most Popular • 1500+ Target",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "4,999",
        period: "/ month (INR)",
        totalText: "Total: ₹29,994 - All 3 Batch Timings",
        validityText: "6 Months Validity",
        description:
          "Comprehensive pathway for top US Ivy & Canadian admissions with flexible batches and 1-on-1 clinics.",
        features: [
          { text: "Batches: Morning, Afternoon & Evening", included: true },
          { text: "120 Hours of Live Strategy Masterclasses", included: true },
          { text: "50+ Sectional Adaptive Drills", included: true },
          { text: "20 Full-Length Digital SAT Mocks", included: true },
          { text: "1-on-1 Essay & Application Strategy Session", included: true },
          { text: "Full Recorded Video Portal Access", included: true },
        ],
      },
      {
        id: "sat-champ",
        name: "Champion Pack",
        badge: "Popular",
        badgeDotColor: "green",
        styleType: "warm",
        price: "4,299",
        period: "/ month (INR)",
        totalText: "Total: ₹25,794 - Single Batch",
        validityText: "6 Months Validity",
        description:
          "Complete live coaching with dedicated faculty mentorship in a structured single daily batch.",
        features: [
          { text: "Single Batch Fixed Timing", included: true },
          { text: "100 Hours of Live Strategy Masterclasses", included: true },
          { text: "40+ Sectional Drills", included: true },
          { text: "15 Full-Length Digital SAT Mocks", included: true },
          { text: "Recorded Video Portal Access", included: true },
          { text: "Doubt Clearing Forum Access", included: true },
        ],
      },
    ],
  },

  GRE: {
    examName: "GRE General (Master's & STEM)",
    plans: [
      {
        id: "gre-self",
        name: "Self Preparation Pack",
        badge: "Self-Paced",
        badgeDotColor: "yellow",
        styleType: "neutral",
        price: "2,799",
        period: "/ month (INR)",
        totalText: "Total: ₹16,794",
        validityText: "6 Months Validity",
        description:
          "Comprehensive self-study kit covering high-frequency vocabulary, quant question banks, and simulated mocks.",
        features: [
          { text: "1,200+ Practice Questions with Solutions", included: true },
          { text: "12 Shorter GRE Adaptive Full Mocks", included: true },
          { text: "Vocabulary Mnemonics Video Bank", included: true },
          { text: "AWA Essay Rubrics & Scoring Templates", included: true },
          { text: "No Live Lectures", included: false },
        ],
      },
      {
        id: "gre-champ-plus",
        name: "Champion Pack +",
        badge: "Most Popular • 325+ Target",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "5,499",
        period: "/ month (INR)",
        totalText: "Total: ₹32,994 - Flexible Batches",
        validityText: "6 Months Validity",
        description:
          "Target top 20 global STEM & Master's programs with 99th percentile instructors and multi-slot batches.",
        features: [
          { text: "Flexible Multi-Slot Batch Access", included: true },
          { text: "130 Hours of Live Lectures (Quant + Verbal + AWA)", included: true },
          { text: "18 Full-Length Shorter GRE Mocks", included: true },
          { text: "Advanced Quant Speed Tricks & Geometry Drills", included: true },
          { text: "1-on-1 Diagnostic Performance Reviews", included: true },
          { text: "Full Recorded Portal Access", included: true },
        ],
      },
      {
        id: "gre-champ",
        name: "Champion Pack",
        badge: "Recommended",
        badgeDotColor: "green",
        styleType: "warm",
        price: "4,699",
        period: "/ month (INR)",
        totalText: "Total: ₹28,194 - Single Timing",
        validityText: "6 Months Validity",
        description:
          "Full interactive coaching in a chosen morning or evening slot with regular doubt-clearing sessions.",
        features: [
          { text: "Single Batch Fixed Timing", included: true },
          { text: "100 Hours of Live Lectures", included: true },
          { text: "14 Full-Length Shorter GRE Mocks", included: true },
          { text: "High-Frequency Vocab Flashcards & Quizzes", included: true },
          { text: "Recorded Video Archive Access", included: true },
          { text: "Weekly Group Doubt Clearing", included: true },
        ],
      },
    ],
  },

  GMAT: {
    examName: "GMAT Focus Edition (MBA Admissions)",
    plans: [
      {
        id: "gmat-self",
        name: "Self Preparation Pack",
        badge: "Standard",
        badgeDotColor: "yellow",
        styleType: "neutral",
        price: "2,999",
        period: "/ month (INR)",
        totalText: "Total: ₹17,994",
        validityText: "6 Months Validity",
        description:
          "Self-directed prep with focus on Data Insights, Critical Reasoning, and Problem Solving test sets.",
        features: [
          { text: "Data Insights Interactive Graphs & Tables", included: true },
          { text: "10 Official-Calibrated GMAT Focus Mocks", included: true },
          { text: "40+ Hours of Recorded Concept Videos", included: true },
          { text: "Question-by-Question Analytics Engine", included: true },
          { text: "No Live Lectures", included: false },
        ],
      },
      {
        id: "gmat-champ-plus",
        name: "Champion Pack +",
        badge: "Top B-Schools • 705+ Target",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "5,999",
        period: "/ month (INR)",
        totalText: "Total: ₹35,994 - Weekend + Weekday",
        validityText: "6 Months Validity",
        description:
          "Premier preparation targeting Harvard, Wharton, INSEAD & ISB with executive pacing & 1-on-1 reviews.",
        features: [
          { text: "Weekday & Weekend Professional Batches", included: true },
          { text: "140 Hours of Live Coaching (Data Insights, Quant, Verbal)", included: true },
          { text: "16 Computer-Adaptive GMAT Focus Mocks", included: true },
          { text: "Personalized Score Optimization Strategy", included: true },
          { text: "B-School Application Profile Consultation", included: true },
          { text: "Full Recorded Video Portal Access", included: true },
        ],
      },
      {
        id: "gmat-champ",
        name: "Champion Pack",
        badge: "Popular",
        badgeDotColor: "green",
        styleType: "warm",
        price: "5,199",
        period: "/ month (INR)",
        totalText: "Total: ₹31,194 - Single Batch",
        validityText: "6 Months Validity",
        description:
          "Comprehensive live training covering all three GMAT Focus sections in a dedicated batch.",
        features: [
          { text: "Single Batch Timing", included: true },
          { text: "110 Hours of Live Coaching", included: true },
          { text: "12 Computer-Adaptive Mocks", included: true },
          { text: "Comprehensive Sectional Test Banks", included: true },
          { text: "Full Recorded Portal Access", included: true },
          { text: "Faculty Mentorship & Doubt Resolution", included: true },
        ],
      },
    ],
  },

  COMBO: {
    examName: "Master's Combo (GRE + IELTS)",
    plans: [
      {
        id: "combo-self",
        name: "Self Preparation Pack",
        badge: "Dual Prep",
        badgeDotColor: "yellow",
        styleType: "neutral",
        price: "3,499",
        period: "/ month (INR)",
        totalText: "Total: ₹20,994",
        validityText: "6 Months Validity",
        description:
          "Complete self-study access for both GRE General and IELTS Academic tests with extensive question banks.",
        features: [
          { text: "Combined GRE + IELTS Test Banks", included: true },
          { text: "15 GRE Mocks + 15 IELTS Mocks", included: true },
          { text: "60+ Hours of Recorded Lessons", included: true },
          { text: "Writing & Speaking Rubric Templates", included: true },
          { text: "No Live Lectures", included: false },
        ],
      },
      {
        id: "combo-champ-plus",
        name: "Champion Pack +",
        badge: "Complete Solution • Best Value",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "6,999",
        period: "/ month (INR)",
        totalText: "Total: ₹41,994 - Dual Masterclasses",
        validityText: "6 Months Validity",
        description:
          "All-inclusive bundle covering full live GRE and live IELTS training for guaranteed admission readiness.",
        features: [
          { text: "Full Live GRE + Full Live IELTS Masterclasses", included: true },
          { text: "200+ Total Hours of Live Faculty Coaching", included: true },
          { text: "20 GRE Mocks + 20 IELTS Mocks", included: true },
          { text: "Speaking 1-on-1 Mock Interviews", included: true },
          { text: "Free SOP Review & University Shortlisting Session", included: true },
          { text: "Full Recorded Video Access for Both Exams", included: true },
        ],
      },
      {
        id: "combo-champ",
        name: "Champion Pack",
        badge: "Recommended",
        badgeDotColor: "green",
        styleType: "warm",
        price: "5,899",
        period: "/ month (INR)",
        totalText: "Total: ₹35,394 - Single Batches",
        validityText: "6 Months Validity",
        description:
          "Structured live preparation for both GRE and IELTS with synchronized schedules.",
        features: [
          { text: "Dedicated Batches for GRE & IELTS", included: true },
          { text: "160 Hours of Live Coaching", included: true },
          { text: "15 GRE Mocks + 15 IELTS Mocks", included: true },
          { text: "Weekly Live Doubt-Clearing Classes", included: true },
          { text: "Full Recorded Video Access", included: true },
          { text: "Study Abroad Mentorship", included: true },
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
          <div className="inline-flex items-center gap-1.5 bg-emerald-100/80 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
            <span>Structured Pricing &amp; Batches</span>
          </div>
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

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {currentExamData.plans.map((plan, idx) => {
            const isFeatured = plan.styleType === "featured";
            const PlanIcon = idx === 0 ? Users : idx === 1 ? Rocket : Sparkles;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className={cn(
                  "relative rounded-[28px] bg-white p-7 sm:p-9 flex flex-col justify-between transition-all duration-300",
                  isFeatured
                    ? "border-2 border-[#00B074] shadow-xl shadow-emerald-500/10 md:-translate-y-2 hover:-translate-y-3"
                    : "border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-slate-300 hover:-translate-y-1.5"
                )}
              >
                {/* Top-Right POPULAR Badge for Featured Card */}
                {isFeatured && (
                  <div className="absolute top-5 right-5 rotate-12">
                    <span className="px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#00B074] text-white shadow-xs">
                      POPULAR
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Icon */}
                  <div className="w-9 h-9 rounded-full bg-[#00B074] flex items-center justify-center text-white mb-6 shadow-xs">
                    <PlanIcon className="w-4 h-4 fill-white stroke-[2.2]" />
                  </div>

                  {/* Plan Header */}
                  <div className="mb-6 text-left">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 tracking-tight">
                      {plan.name}
                    </h3>
                    {plan.description && (
                      <p className="text-sm text-slate-500 mt-1 min-h-[38px] leading-relaxed font-normal">
                        {plan.description}
                      </p>
                    )}
                  </div>

                  {/* Clean Centered Price Block (No border lines, matching reference screenshot) */}
                  <div className="text-center py-5 my-2">
                    <div className="font-heading font-bold text-5xl sm:text-[52px] text-slate-900 tracking-tight leading-none">
                      ₹{plan.price}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 font-normal mt-2">
                      {plan.period}
                    </div>
                    {plan.totalText && (
                      <div className="text-[11px] font-medium text-slate-400 mt-1">
                        {plan.totalText} • {plan.validityText}
                      </div>
                    )}
                  </div>

                  {/* Action CTA Button (Directly under the price, exact color variants from reference screenshot) */}
                  <div className="my-5 space-y-2">
                    <a
                      href={`https://web.whatsapp.com/send?phone=+919403892981&text=Hi,%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(
                        currentExamData.examName
                      )}%20-${encodeURIComponent(plan.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-full py-3.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center transition-all duration-200 cursor-pointer",
                        isFeatured
                          ? "bg-[#00B074] hover:bg-[#009b66] text-white font-bold shadow-sm shadow-emerald-600/20 hover:scale-[1.01]"
                          : idx === 2
                          ? "bg-[#E6F7F0] hover:bg-[#d8f4e9] text-[#00A86B] font-bold hover:scale-[1.01]"
                          : "bg-[#F1F2F4] hover:bg-slate-200 text-slate-500 hover:text-slate-700 hover:scale-[1.01]"
                      )}
                    >
                      <span>
                        {isFeatured
                          ? `Get ${plan.name}`
                          : idx === 2
                          ? `Get ${plan.name}`
                          : `Current plan`}
                      </span>
                    </a>

                    <Link
                      href="/contacts"
                      className="w-full py-1.5 px-4 rounded-xl font-medium text-xs text-slate-400 hover:text-slate-700 text-center flex items-center justify-center transition-colors"
                    >
                      <span>Book 5-Day Free Trial</span>
                    </Link>
                  </div>

                  {/* Features Checklist Header */}
                  <div className="pt-3 text-left">
                    <p className="font-bold text-sm text-slate-900 mb-4">
                      Free features
                    </p>

                    {/* Features List */}
                    <div className="space-y-3.5">
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px]">
                          <div className="w-4 h-4 rounded-full bg-[#00B074] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                            <Check className="w-2.5 h-2.5 stroke-[3.2]" />
                          </div>
                          <span className="leading-snug text-slate-700 font-normal flex-1">
                            {feature.text}
                          </span>
                          {fIdx % 2 === 0 && (
                            <HelpCircle className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
