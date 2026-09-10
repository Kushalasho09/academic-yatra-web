"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
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

export const EXAM_PROGRAMS_DATA: Record<string, { examName: string; plans: ProgramPlan[] }> = {
  "IELTS AC": {
    examName: "IELTS Academic",
    plans: [
      {
        id: "ielts-ac-self",
        name: "Self Preparation Pack",
        badge: "Standard",
        badgeDotColor: "yellow",
        styleType: "neutral",
        price: "2,199",
        period: "/ month (INR)",
        totalText: "Total: ₹13,194",
        validityText: "6 Months Validity",
        description: "Ideal for self-directed learners with comprehensive practice tests and recorded modules.",
        features: [
          { text: "60 Sectional Tests", included: true },
          { text: "15 Mock Tests", included: true },
          { text: "20+ Hours video lessons", included: true },
          { text: "500+ Grammar & Vocabulary lessons", included: true },
          { text: "No Live Lectures", included: false },
        ],
      },
      {
        id: "ielts-ac-champ-plus",
        name: "Champion Pack +",
        badge: "Most Popular • Premium",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "4,499",
        period: "/ month (INR)",
        totalText: "Total: ₹26,994 - All 3 timings",
        validityText: "6 Months Validity",
        description: "Comprehensive pathway for maximum band score with flexible batch schedules.",
        features: [
          { text: "Batches Available: Morning, Afternoon & Evening", included: true },
          { text: "100 Hours of Live Lectures", included: true },
          { text: "60 Sectional Tests", included: true },
          { text: "15 Mock Tests", included: true },
          { text: "20+ Hours video lessons", included: true },
          { text: "500+ Grammar & Vocabulary lessons", included: true },
        ],
      },
      {
        id: "ielts-ac-champ",
        name: "Champion Pack",
        badge: "Popular",
        badgeDotColor: "green",
        styleType: "warm",
        price: "3,999",
        period: "/ month (INR)",
        totalText: "Total: ₹23,994 - 1 Lecture timing",
        validityText: "6 Months Validity",
        description: "Full live interactive coaching with dedicated mentorship in a single batch timing.",
        features: [
          { text: "Single Batch Only", included: true },
          { text: "100 Hours of Live Lectures", included: true },
          { text: "60 Sectional Tests", included: true },
          { text: "15 Mock Tests", included: true },
          { text: "20+ Hours video lessons", included: true },
          { text: "500+ Grammar & Vocabulary lessons", included: true },
        ],
      },
    ],
  },

  "IELTS GN": {
    examName: "IELTS General",
    plans: [
      {
        id: "ielts-gn-self",
        name: "Self Preparation Pack",
        badge: "Self-Paced",
        badgeDotColor: "yellow",
        styleType: "neutral",
        price: "2,199",
        period: "/ month (INR)",
        totalText: "Total: ₹13,194",
        validityText: "6 Months Validity",
        description: "Learn at your own pace with full access to General Training test banks and lessons.",
        features: [
          { text: "60 Sectional Tests", included: true },
          { text: "15 Mock Tests", included: true },
          { text: "20+ Hours video lessons", included: true },
          { text: "500+ Grammar & Vocabulary lessons", included: true },
          { text: "No Live Lectures", included: false },
        ],
      },
      {
        id: "ielts-gn-champ",
        name: "Champion Pack",
        badge: "Most Popular",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "4,499",
        period: "/ month (INR)",
        totalText: "Total: ₹26,994",
        validityText: "6 Months Validity",
        description: "Canada PR & Express Entry score booster with certified trainer mentorship.",
        features: [
          { text: "Full GT lesson library", included: true },
          { text: "100 Hours of Live Lectures", included: true },
          { text: "60 Sectional Tests", included: true },
          { text: "15 Mock Tests", included: true },
          { text: "20+ Hours video lessons", included: true },
          { text: "500+ Grammar & Vocabulary lessons", included: true },
        ],
      },
    ],
  },

  "PTE AC": {
    examName: "PTE Academic",
    plans: [
      {
        id: "pte-ac-self",
        name: "Self Preparation Pack",
        badge: "Standard",
        badgeDotColor: "yellow",
        styleType: "neutral",
        price: "2,199",
        period: "/ month (INR)",
        totalText: "Total: ₹13,194",
        validityText: "6 Months Validity",
        description: "Self-paced AI portal access with extensive Pearson test simulations.",
        features: [
          { text: "Dashboard Access", included: true },
          { text: "2000+ Practice Questions", included: true },
          { text: "15 Mock Tests", included: true },
          { text: "Performance Analysis", included: true },
          { text: "No Live Lectures", included: false },
        ],
      },
      {
        id: "pte-ac-champ",
        name: "Champion Pack",
        badge: "Most Popular",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "3,199",
        period: "/ month (INR)",
        totalText: "Total: ₹19,194",
        validityText: "6 Months Validity",
        description: "Complete live classes, AI scoring portal, and template-based strategies for 79+.",
        features: [
          { text: "Dashboard Access", included: true },
          { text: "Live Lectures", included: true },
          { text: "2000+ Practice Questions", included: true },
          { text: "15 Mock Tests", included: true },
          { text: "Performance Analysis", included: true },
        ],
      },
      {
        id: "pte-ac-live",
        name: "Live Class Pack",
        badge: "Focused",
        badgeDotColor: "green",
        styleType: "warm",
        price: "2,999",
        period: "/ month (INR)",
        totalText: "Total: ₹8,750",
        validityText: "3 Months Validity",
        description: "Fast-track live coaching with personal examiner feedback.",
        features: [
          { text: "Dashboard Access", included: true },
          { text: "Performance Analysis", included: true },
          { text: "Expert Feedback", included: true },
          { text: "No Practice Questions", included: false },
          { text: "No Mock Test", included: false },
        ],
      },
    ],
  },

  "PTE CORE": {
    examName: "PTE Core",
    plans: [
      {
        id: "pte-core-champ",
        name: "Champion Pack",
        badge: "Most Popular",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "3,199",
        period: "/ month (INR)",
        totalText: "Total: ₹19,194",
        validityText: "6 Months Validity",
        description: "Achieve CLB 7+ for Canadian PR, work permits & Express Entry pathways.",
        features: [
          { text: "2000+ Practice Questions", included: true },
          { text: "5 Mock Tests", included: true },
          { text: "6 Weeks Live Lectures", included: true },
          { text: "Dashboard Access", included: true },
          { text: "Performance Analysis", included: true },
        ],
      },
    ],
  },

  CELPIP: {
    examName: "CELPIP General",
    plans: [
      {
        id: "celpip-self",
        name: "Self Preparation Pack",
        badge: "Self-Paced",
        badgeDotColor: "yellow",
        styleType: "neutral",
        price: "4,999",
        period: "/ month (INR)",
        totalText: "Total: ₹29,994",
        validityText: "6 Months Validity",
        description: "Complete portal access with authentic Canadian accent listening tests.",
        features: [
          { text: "11 Mock Tests", included: true },
          { text: "Dashboard Access", included: true },
          { text: "Performance Analysis", included: true },
          { text: "Expert Feedback", included: true },
          { text: "No Live Lectures", included: false },
        ],
      },
      {
        id: "celpip-champ",
        name: "Champion Pack",
        badge: "Most Popular",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "7,999",
        period: "/ month (INR)",
        totalText: "Total: ₹47,994",
        validityText: "6 Months Validity",
        description: "Master Canadian English with live classes and one-on-one speaking feedback.",
        features: [
          { text: "11 Mock Tests", included: true },
          { text: "6 Weeks Live Lectures", included: true },
          { text: "Dashboard Access", included: true },
          { text: "Performance Analysis", included: true },
          { text: "Expert Feedback", included: true },
        ],
      },
    ],
  },

  French: {
    examName: "French Language Programs",
    plans: [
      {
        id: "french-basic-a1",
        name: "French Basic & A1 Pack",
        badge: "Beginner",
        badgeDotColor: "yellow",
        styleType: "neutral",
        price: "5,999",
        period: "/ month (INR)",
        totalText: "Total: ₹29,995",
        validityText: "5 Months Validity",
        description: "Master everyday conversations, French phonetics, and basic grammar structures.",
        features: [
          { text: "Single Batch only", included: true },
          { text: "15 Practice Tests", included: true },
          { text: "10 Weeks Live Lectures", included: true },
          { text: "Grammar + Vocabulary lessons + E-Book", included: true },
          { text: "Dashboard Access", included: true },
        ],
      },
      {
        id: "french-tef",
        name: "French Basic to TEF",
        badge: "Most Popular",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "5,299",
        period: "/ month (INR)",
        totalText: "Total: ₹84,789",
        validityText: "16 Months Validity",
        description: "Comprehensive zero-to-TEF pathway for Canada PR Express Entry bonus points.",
        features: [
          { text: "60 Practice Tests", included: true },
          { text: "10 TEF Mock Tests", included: true },
          { text: "32 Weeks Live Lectures", included: true },
          { text: "Grammar + Vocabulary lessons + E-Book", included: true },
          { text: "Dashboard Access", included: true },
        ],
      },
      {
        id: "french-a1-a2",
        name: "French Basic, A1 & A2 Pack",
        badge: "Premium",
        badgeDotColor: "green",
        styleType: "warm",
        price: "7,499",
        period: "/ month (INR)",
        totalText: "Total: ₹52,493 - 2 Lecture Timings",
        validityText: "7 Months Validity",
        description: "Achieve conversational fluency with morning & evening batch options.",
        features: [
          { text: "Batches Available: Morning & Evening", included: true },
          { text: "30 Practice Tests", included: true },
          { text: "16 Weeks Live Lectures", included: true },
          { text: "Grammar + Vocabulary lessons + E-Book", included: true },
          { text: "Dashboard Access", included: true },
        ],
      },
    ],
  },

  German: {
    examName: "German Language Programs",
    plans: [
      {
        id: "german-basic-a1",
        name: "German Basic & A1",
        badge: "Foundational",
        badgeDotColor: "yellow",
        styleType: "neutral",
        price: "4,999",
        period: "/ month (INR)",
        totalText: "Total: ₹24,995",
        validityText: "5 Months Validity",
        description: "Start speaking German with certified native-bilingual trainers and e-books.",
        features: [
          { text: "15 Practice Tests", included: true },
          { text: "11 Weeks Live Lectures", included: true },
          { text: "Grammar + Vocabulary lessons", included: true },
          { text: "Dashboard Access", included: true },
          { text: "E-Book Included", included: true },
        ],
      },
      {
        id: "german-a1-a2",
        name: "German Basic, A1 & A2",
        badge: "Most Popular",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "5,499",
        period: "/ month (INR)",
        totalText: "Total: ₹38,493",
        validityText: "7 Months Validity",
        description: "Essential qualification for undergraduate and job seeker visa pathways in Germany.",
        features: [
          { text: "18 Weeks Live Lectures", included: true },
          { text: "30 Practice Tests", included: true },
          { text: "Grammar + Vocabulary lessons", included: true },
          { text: "Dashboard Access", included: true },
          { text: "E-Book Included", included: true },
        ],
      },
      {
        id: "german-b1",
        name: "German Basic, A1, A2 & B1",
        badge: "Comprehensive",
        badgeDotColor: "green",
        styleType: "warm",
        price: "5,599",
        period: "/ month (INR)",
        totalText: "Total: ₹55,990",
        validityText: "10 Months Validity",
        description: "Master B1 proficiency for direct admission into 100% tuition-free German universities.",
        features: [
          { text: "27 Weeks Live Lectures", included: true },
          { text: "45 Practice Tests", included: true },
          { text: "Grammar + Vocabulary lessons", included: true },
          { text: "Dashboard Access", included: true },
          { text: "E-Book Included", included: true },
        ],
      },
    ],
  },

  Duolingo: {
    examName: "Duolingo English Test",
    plans: [
      {
        id: "duolingo-champ",
        name: "Champion Pack",
        badge: "Most Popular",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "4,999",
        period: "/ month (INR)",
        totalText: "Total: ₹9,998",
        validityText: "2 Months Validity",
        description: "Fast-track preparation with real computer-adaptive questions and mentor grading.",
        features: [
          { text: "13 Mock Tests", included: true },
          { text: "Dashboard Access", included: true },
          { text: "4 Weeks Live Lectures", included: true },
          { text: "Performance Analysis", included: true },
          { text: "Expert Feedback", included: true },
        ],
      },
    ],
  },

  "Spoken Eng": {
    examName: "Spoken English & Public Speaking",
    plans: [
      {
        id: "spoken-champ",
        name: "Champion Pack",
        badge: "Most Popular",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "2,499",
        period: "/ month (INR)",
        totalText: "Total: ₹14,994",
        validityText: "6 Months Validity",
        description: "Build effortless English communication with daily live speaking clubs and speech drills.",
        features: [
          { text: "Dashboard Access", included: true },
          { text: "Live Lectures", included: true },
          { text: "Recorded Lectures", included: true },
          { text: "Practice Tests", included: true },
          { text: "Expert Feedback", included: true },
        ],
      },
    ],
  },

  TOEFL: {
    examName: "TOEFL iBT",
    plans: [
      {
        id: "toefl-live",
        name: "Live Class Pack",
        badge: "Most Popular",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "3,499",
        period: "/ month (INR)",
        totalText: "Total: ₹20,994",
        validityText: "6 Months Validity",
        description: "Official ETS pattern training targeting 100+ score for top US & Canadian universities.",
        features: [
          { text: "12 Weeks Live Lectures", included: true },
          { text: "Recorded Lessons", included: true },
          { text: "Dashboard Access", included: true },
          { text: "Performance Analysis", included: true },
          { text: "Expert Feedback", included: true },
        ],
      },
    ],
  },
};

export const EXAM_OPTIONS = [
  { id: "IELTS AC", name: "IELTS Academic" },
  { id: "IELTS GN", name: "IELTS General" },
  { id: "PTE AC", name: "PTE Academic" },
  { id: "PTE CORE", name: "PTE Core" },
  { id: "CELPIP", name: "CELPIP" },
  { id: "French", name: "French" },
  { id: "German", name: "German" },
  { id: "Duolingo", name: "Duolingo" },
  { id: "Spoken Eng", name: "Spoken Eng" },
  { id: "TOEFL", name: "TOEFL" },
];

interface CourseProgramsProps {
  selectedExam?: string;
  onSelectExam?: (exam: string) => void;
}

export default function CoursePrograms({
  selectedExam: controlledExam,
  onSelectExam,
}: CourseProgramsProps) {
  const [internalExam, setInternalExam] = useState<string>("IELTS AC");
  const currentExam = controlledExam || internalExam;

  const handleSelectExam = (id: string) => {
    setInternalExam(id);
    if (onSelectExam) {
      onSelectExam(id);
    }
  };

  const activeData = EXAM_PROGRAMS_DATA[currentExam] || EXAM_PROGRAMS_DATA["IELTS AC"];
  const plans = activeData.plans;

  return (
    <section id="course-programs" className="relative py-10 sm:py-14 bg-gradient-to-b from-white via-[#F6FAF8] to-white z-10 overflow-hidden">
      {/* Seamless top and bottom feather fades */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div className="space-y-2">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-[1.15] tracking-tight">
              Choose Your <br />
              <span className="text-brand-primary">Program</span>
            </h2>
          </div>

          <p className="font-body text-slate-500 text-sm sm:text-base max-w-md leading-relaxed">
            Select the plan that fits your preparation style and timeline.
          </p>
        </div>

        {/* Exam Navigation Filter Pills */}
        <div className="bg-white p-1.5 sm:p-2 rounded-2xl sm:rounded-full border border-slate-200/90 shadow-xs max-w-5xl mx-auto mb-8 sm:mb-10 overflow-x-auto scrollbar-none flex items-center justify-start sm:justify-center gap-1.5">
          {EXAM_OPTIONS.map((item) => {
            const isSelected = currentExam === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectExam(item.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer",
                  isSelected
                    ? "bg-brand-primary text-white shadow-sm"
                    : "text-slate-600 hover:text-brand-navy hover:bg-slate-100"
                )}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Dynamic Pricing Cards Grid */}
        <div
          className={cn(
            "grid gap-7 items-stretch mx-auto",
            plans.length === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl",
            plans.length === 2 && "grid-cols-1 md:grid-cols-2 max-w-4xl",
            plans.length === 1 && "grid-cols-1 max-w-md"
          )}
        >
          <AnimatePresence mode="wait">
            {plans.map((plan) => {
              const isFeatured = plan.styleType === "featured";

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className={cn(
                    "relative rounded-[28px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300",
                    isFeatured
                      ? "bg-gradient-to-b from-[#0C9253] via-[#0B854A] to-[#086B3B] text-white border-2 border-emerald-300/40 shadow-[0_24px_50px_-12px_rgba(12,146,83,0.42)] transform lg:-translate-y-2"
                      : "bg-white text-slate-900 border border-slate-200/90 shadow-lg shadow-slate-200/40 hover:border-brand-primary/40 hover:shadow-xl"
                  )}
                >
                  {/* Card Body */}
                  <div>
                    {/* Top Notch Row (Folder Tab Header on Top Right) */}
                    <div className="flex items-center justify-between min-h-[36px] mb-4">
                      <span
                        className={cn(
                          "text-xs font-extrabold uppercase tracking-wider",
                          isFeatured ? "text-emerald-100" : "text-brand-primary"
                        )}
                      >
                        {activeData.examName}
                      </span>

                      {plan.badge && (
                        <div
                          className={cn(
                            "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wide shadow-xs",
                            isFeatured
                              ? "bg-white text-brand-primary shadow-sm"
                              : "bg-brand-greenTint text-brand-primary border border-emerald-200"
                          )}
                        >
                          <span>{plan.badge}</span>
                          <span
                            className={cn(
                              "w-1.5 h-1.5 rounded-full",
                              isFeatured ? "bg-brand-primary" : "bg-brand-primary"
                            )}
                          />
                        </div>
                      )}
                    </div>

                    {/* Plan Title (Centered Bold Heading) */}
                    <h3
                      className={cn(
                        "font-heading font-extrabold text-2xl sm:text-[26px] text-center mb-4 leading-tight",
                        isFeatured ? "text-white" : "text-brand-navy"
                      )}
                    >
                      {plan.name}
                    </h3>

                    {/* Price Block (Prominent Center Display) */}
                    <div className="text-center my-4 py-2">
                      <div className="flex items-baseline justify-center gap-1.5">
                        <span
                          className={cn(
                            "font-heading font-black text-4xl sm:text-5xl tracking-tight",
                            isFeatured ? "text-white" : "text-brand-navy"
                          )}
                        >
                          ₹{plan.price}
                        </span>
                        <span
                          className={cn(
                            "text-xs font-semibold",
                            isFeatured ? "text-emerald-100" : "text-slate-500"
                          )}
                        >
                          {plan.period}
                        </span>
                      </div>

                      <p
                        className={cn(
                          "text-xs font-semibold mt-1",
                          isFeatured ? "text-emerald-50" : "text-slate-600"
                        )}
                      >
                        {plan.totalText}
                      </p>

                      <span
                        className={cn(
                          "inline-block mt-2 px-3 py-0.5 rounded-full text-[11px] font-bold",
                          isFeatured
                            ? "bg-white/20 text-white border border-white/30 backdrop-blur-xs"
                            : "bg-brand-greenTint text-brand-primary border border-emerald-200"
                        )}
                      >
                        {plan.validityText}
                      </span>
                    </div>

                    {/* Short Description */}
                    {plan.description && (
                      <p
                        className={cn(
                          "text-xs text-center leading-relaxed max-w-[280px] mx-auto my-3 font-normal",
                          isFeatured ? "text-emerald-100" : "text-slate-500"
                        )}
                      >
                        {plan.description}
                      </p>
                    )}

                    {/* Checklist of Features */}
                    <div
                      className={cn(
                        "space-y-3.5 pt-5 pb-6 border-t mt-5",
                        isFeatured ? "border-white/20" : "border-slate-100"
                      )}
                    >
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs sm:text-sm">
                          {feat.included ? (
                            <div
                              className={cn(
                                "w-5 h-5 rounded-full flex items-center justify-center shrink-0 shadow-xs",
                                isFeatured
                                  ? "bg-white text-brand-primary"
                                  : "bg-brand-primary text-white"
                              )}
                            >
                              <Check className="w-3.5 h-3.5 stroke-[2.8]" />
                            </div>
                          ) : (
                            <div
                              className={cn(
                                "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                                isFeatured
                                  ? "bg-white/15 text-emerald-200"
                                  : "bg-slate-100 text-slate-400"
                              )}
                            >
                              <X className="w-3.5 h-3.5 stroke-[2.5]" />
                            </div>
                          )}
                          <span
                            className={cn(
                              "leading-snug",
                              feat.included
                                ? isFeatured
                                  ? "text-white font-medium"
                                  : "text-slate-800 font-medium"
                                : isFeatured
                                ? "text-emerald-200/70 line-through"
                                : "text-slate-400 line-through"
                            )}
                          >
                            {feat.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Full-Width Pill Action Button */}
                  <div className="pt-3">
                    <a
                      href={`https://wa.me/919286844550?text=Hi,%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(
                        activeData.examName
                      )}%20-%20${encodeURIComponent(plan.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-full py-4 rounded-full text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer",
                        isFeatured
                          ? "bg-white hover:bg-emerald-50 text-brand-primary font-black shadow-xl shadow-black/10 hover:scale-[1.01]"
                          : "bg-brand-navy hover:bg-brand-primary text-white font-bold shadow-xs hover:shadow-md hover:scale-[1.01]"
                      )}
                    >
                      <span>Start Free Trial</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
