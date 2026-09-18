"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
    <section id="course-programs" className="relative py-8 sm:py-12 bg-gradient-to-b from-white via-[#F6FAF8] to-white z-10 overflow-hidden">
      {/* Seamless top and bottom feather fades */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div className="space-y-2">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-snug sm:leading-[1.28] lg:leading-[1.3] tracking-tight">
              <span className="block mb-1.5 sm:mb-2.5">Choose Your</span>
              <span className="text-brand-primary block">Program</span>
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
            "grid gap-6 sm:gap-8 items-stretch mx-auto",
            plans.length === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl",
            plans.length === 2 && "grid-cols-1 md:grid-cols-2 max-w-4xl",
            plans.length === 1 && "grid-cols-1 max-w-md"
          )}
        >
          <AnimatePresence mode="popLayout">
            {plans.map((plan, idx) => {
              const isFeatured = plan.styleType === "featured";
              const PlanIcon = idx === 0 ? Users : idx === 1 ? Rocket : Sparkles;

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
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
                    <div className="my-5">
                      <a
                        href={`https://wa.me/919286844550?text=Hi,%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(
                          activeData.examName
                        )}%20-%20${encodeURIComponent(plan.name)}.`}
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
                        href={`/languages/${currentExam === "IELTS GN" ? "ielts-general" : "ielts-academic"}`}
                        className="text-xs text-emerald-600 font-bold hover:text-emerald-700 hover:underline block text-center mt-3"
                      >
                        View Full Package Details &amp; Guide →
                      </Link>
                    </div>

                    {/* Features Checklist Header */}
                    <div className="pt-3 text-left">
                      <p className="font-bold text-sm text-slate-900 mb-4">
                        Free features
                      </p>

                      {/* Features List */}
                      <div className="space-y-3.5">
                        {plan.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px]">
                            <div className="w-4 h-4 rounded-full bg-[#00B074] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                              <Check className="w-2.5 h-2.5 stroke-[3.2]" />
                            </div>
                            <span className="leading-snug text-slate-700 font-normal flex-1">
                              {feat.text}
                            </span>
                            {i % 2 === 0 && (
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
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
