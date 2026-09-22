"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
        price: "2,316",
        period: "/ month (INR)",
        totalText: "Total: ₹13,899 (incl. 18% GST)",
        validityText: "6 Months Validity",
        description: "Ideal for self-directed learners with comprehensive practice tests and recorded modules.",
        features: [
          { text: "60 Sectional Tests", included: true },
          { text: "15 Mock Tests", included: true },
          { text: "20+ Hours Video Lessons", included: true },
          { text: "500+ Grammar & Vocabulary Lessons", included: true },
          { text: "No Live Lectures", included: false },
        ],
      },
      {
        id: "ielts-ac-champ",
        name: "Champion Pack",
        badge: "Popular",
        badgeDotColor: "green",
        styleType: "warm",
        price: "4,333",
        period: "/ month (INR)",
        totalText: "Total: ₹25,999 (incl. 18% GST)",
        validityText: "6 Months Validity",
        description: "Full live interactive coaching with dedicated mentorship in a single batch timing.",
        features: [
          { text: "1 Batch Timing", included: true },
          { text: "100 Hours of Live Lectures", included: true },
          { text: "60 Sectional Tests", included: true },
          { text: "15 Mock Tests", included: true },
          { text: "20+ Hours Video Lessons", included: true },
        ],
      },
      {
        id: "ielts-ac-champ-plus",
        name: "Champion Pack +",
        badge: "Most Popular • Premium",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "4,833",
        period: "/ month (INR)",
        totalText: "Total: ₹28,999 (incl. 18% GST)",
        validityText: "6 Months Validity",
        description: "Comprehensive pathway for maximum band score with flexible batch schedules.",
        features: [
          { text: "All 3 Batch Timings (Morning / Afternoon / Evening)", included: true },
          { text: "100 Hours of Live Lectures", included: true },
          { text: "60 Sectional Tests", included: true },
          { text: "15 Mock Tests", included: true },
          { text: "20+ Hours Video Lessons", included: true },
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
        price: "2,316",
        period: "/ month (INR)",
        totalText: "Total: ₹13,899 (incl. 18% GST)",
        validityText: "6 Months Validity",
        description: "Learn at your own pace with full access to General Training test banks and lessons.",
        features: [
          { text: "60 Sectional Tests", included: true },
          { text: "15 Mock Tests", included: true },
          { text: "20+ Hours Video Lessons", included: true },
          { text: "500+ Grammar & Vocabulary Lessons", included: true },
          { text: "No Live Lectures", included: false },
        ],
      },
      {
        id: "ielts-gn-champ",
        name: "Champion Pack",
        badge: "Most Popular",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "4,833",
        period: "/ month (INR)",
        totalText: "Total: ₹28,999 (incl. 18% GST)",
        validityText: "6 Months Validity",
        description: "Canada PR & Express Entry score booster with certified trainer mentorship.",
        features: [
          { text: "100 Hours of Live Lectures", included: true },
          { text: "60 Sectional Tests", included: true },
          { text: "15 Mock Tests", included: true },
          { text: "20+ Hours Video Lessons", included: true },
          { text: "500+ Grammar & Vocabulary Lessons", included: true },
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
        price: "2,316",
        period: "/ month (INR)",
        totalText: "Total: ₹13,899 (incl. 18% GST)",
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
        price: "3,500",
        period: "/ month (INR)",
        totalText: "Total: ₹20,999 (incl. 18% GST)",
        validityText: "6 Months Validity",
        description: "Complete live classes, AI scoring portal, and template-based strategies for 79+.",
        features: [
          { text: "Live Lecture Included", included: true },
          { text: "Dashboard Access", included: true },
          { text: "2000+ Practice Questions", included: true },
          { text: "15 Mock Tests", included: true },
          { text: "Performance Analysis", included: true },
        ],
      },
      {
        id: "pte-ac-live",
        name: "Live Class",
        badge: "3-Month Intensive",
        badgeDotColor: "green",
        styleType: "warm",
        price: "3,166",
        period: "/ month (INR)",
        totalText: "Total: ₹9,499 (incl. 18% GST)",
        validityText: "3 Months Validity",
        description: "Fast-track live coaching with personal examiner feedback.",
        features: [
          { text: "Live Classes", included: true },
          { text: "Dashboard Access", included: true },
          { text: "Performance Analysis", included: true },
          { text: "Expert Feedback", included: true },
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
        price: "3,500",
        period: "/ month (INR)",
        totalText: "Total: ₹20,999 (incl. 18% GST)",
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
    examName: "CELPIP",
    plans: [
      {
        id: "celpip-self",
        name: "Self Preparation Pack",
        badge: "Self-Paced",
        badgeDotColor: "yellow",
        styleType: "neutral",
        price: "5,333",
        period: "/ month (INR)",
        totalText: "Total: ₹31,999 (incl. 18% GST)",
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
        price: "8,500",
        period: "/ month (INR)",
        totalText: "Total: ₹50,999 (incl. 18% GST)",
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
        id: "french-basic-a1-1",
        name: "Basic & A1 (1 timing)",
        badge: "Beginner",
        badgeDotColor: "yellow",
        styleType: "neutral",
        price: "6,400",
        period: "/ month (INR)",
        totalText: "Total: ₹31,999 (incl. 18% GST)",
        validityText: "5 Months Validity",
        description: "Single batch timing, mastering everyday conversations, phonetics, and grammar structures.",
        features: [
          { text: "Single Batch", included: true },
          { text: "15 Practice Tests", included: true },
          { text: "10 Weeks Live Lectures", included: true },
          { text: "Grammar + Vocabulary + E-Book", included: true },
        ],
      },
      {
        id: "french-basic-a1-2",
        name: "Basic & A1 (2 timings)",
        badge: "Flexible",
        badgeDotColor: "green",
        styleType: "warm",
        price: "7,400",
        period: "/ month (INR)",
        totalText: "Total: ₹36,999 (incl. 18% GST)",
        validityText: "5 Months Validity",
        description: "Morning and evening batches for maximum flexibility and live instructor support.",
        features: [
          { text: "Morning + Evening Batches", included: true },
          { text: "15 Practice Tests", included: true },
          { text: "10 Weeks Live Lectures", included: true },
          { text: "Grammar + Vocabulary + E-Book", included: true },
        ],
      },
      {
        id: "french-basic-a1-a2-1",
        name: "Basic, A1 & A2 (1 lecture)",
        badge: "Standard",
        badgeDotColor: "yellow",
        styleType: "neutral",
        price: "6,857",
        period: "/ month (INR)",
        totalText: "Total: ₹47,999 (incl. 18% GST)",
        validityText: "7 Months Validity",
        description: "Comprehensive pathway through A1 and A2 with structured practice.",
        features: [
          { text: "Single Batch", included: true },
          { text: "30 Practice Tests", included: true },
          { text: "16 Weeks Live Lectures", included: true },
          { text: "Grammar + Vocabulary + E-Book", included: true },
        ],
      },
      {
        id: "french-basic-a1-a2-2",
        name: "Basic, A1 & A2 (2 lectures)",
        badge: "Dual Timing",
        badgeDotColor: "green",
        styleType: "warm",
        price: "8,000",
        period: "/ month (INR)",
        totalText: "Total: ₹55,999 (incl. 18% GST)",
        validityText: "7 Months Validity",
        description: "Morning and evening batches for comprehensive A1 and A2 mastery.",
        features: [
          { text: "Morning + Evening Batches", included: true },
          { text: "30 Practice Tests", included: true },
          { text: "16 Weeks Live Lectures", included: true },
          { text: "Grammar + Vocabulary + E-Book", included: true },
        ],
      },
      {
        id: "french-tef",
        name: "Basic to TEF",
        badge: "Most Popular",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "5,750",
        period: "/ month (INR)",
        totalText: "Total: ₹91,999 (incl. 18% GST)",
        validityText: "16 Months Validity",
        description: "Zero to TEF pathway for Canada PR Express Entry bonus points.",
        features: [
          { text: "60 Practice Tests", included: true },
          { text: "10 TEF Mocks", included: true },
          { text: "32 Weeks Live Lectures", included: true },
          { text: "Grammar + Vocabulary + E-Book", included: true },
        ],
      },
      {
        id: "french-b1-b2-tef",
        name: "B1, B2 & TEF Pack",
        badge: "Advanced",
        badgeDotColor: "green",
        styleType: "warm",
        price: "8,143",
        period: "/ month (INR)",
        totalText: "Total: ₹56,999 (incl. 18% GST)",
        validityText: "7 Months Validity",
        description: "Targeted advanced preparation for B1, B2, and official TEF mock examinations.",
        features: [
          { text: "15 Practice Tests", included: true },
          { text: "10 TEF Mocks", included: true },
          { text: "16 Weeks Live Lectures", included: true },
          { text: "Grammar + Vocabulary + E-Book", included: true },
        ],
      },
    ],
  },

  German: {
    examName: "German Language Programs",
    plans: [
      {
        id: "german-basic-a1",
        name: "Basic & A1",
        badge: "Foundational",
        badgeDotColor: "yellow",
        styleType: "neutral",
        price: "5,400",
        period: "/ month (INR)",
        totalText: "Total: ₹26,999 (incl. 18% GST)",
        validityText: "5 Months Validity",
        description: "Start speaking German with certified native-bilingual trainers and e-books.",
        features: [
          { text: "11 Weeks Live Lectures", included: true },
          { text: "15 Practice Tests", included: true },
          { text: "Grammar + Vocabulary Lessons", included: true },
          { text: "Dashboard Access", included: true },
          { text: "E-Book Included", included: true },
        ],
      },
      {
        id: "german-a1-a2",
        name: "Basic, A1 & A2",
        badge: "Most Popular",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "5,857",
        period: "/ month (INR)",
        totalText: "Total: ₹40,999 (incl. 18% GST)",
        validityText: "7 Months Validity",
        description: "Essential qualification for undergraduate and job seeker visa pathways in Germany.",
        features: [
          { text: "18 Weeks Live Lectures", included: true },
          { text: "30 Practice Tests", included: true },
          { text: "Grammar + Vocabulary Lessons", included: true },
          { text: "Dashboard Access", included: true },
          { text: "E-Book Included", included: true },
        ],
      },
      {
        id: "german-b1",
        name: "Basic, A1, A2 & B1",
        badge: "Premium",
        badgeDotColor: "green",
        styleType: "warm",
        price: "6,100",
        period: "/ month (INR)",
        totalText: "Total: ₹60,999 (incl. 18% GST)",
        validityText: "10 Months Validity",
        description: "Master B1 proficiency for direct admission into 100% tuition-free German universities.",
        features: [
          { text: "27 Weeks Live Lectures", included: true },
          { text: "45 Practice Tests", included: true },
          { text: "Grammar + Vocabulary Lessons", included: true },
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
        price: "5,250",
        period: "/ month (INR)",
        totalText: "Total: ₹10,499 (incl. 18% GST)",
        validityText: "2 Months Validity",
        description: "Fast-track preparation with real computer-adaptive questions and mentor grading.",
        features: [
          { text: "13 Mock Tests", included: true },
          { text: "4 Weeks Live Lectures", included: true },
          { text: "Dashboard Access", included: true },
          { text: "Performance Analysis", included: true },
          { text: "Expert Feedback", included: true },
        ],
      },
    ],
  },

  "Spoken Eng": {
    examName: "Spoken English",
    plans: [
      {
        id: "spoken-champ",
        name: "Champion Pack",
        badge: "Most Popular",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "2,633",
        period: "/ month (INR)",
        totalText: "Total: ₹15,799 (incl. 18% GST)",
        validityText: "6 Months Validity",
        description: "Build effortless English communication with daily live speaking clubs and speech drills.",
        features: [
          { text: "Dashboard Access", included: true },
          { text: "Live + Recorded Lectures", included: true },
          { text: "Practice Tests", included: true },
          { text: "Expert Feedback", included: true },
        ],
      },
    ],
  },

  TOEFL: {
    examName: "TOEFL Preparation",
    plans: [
      {
        id: "toefl-live",
        name: "Live Class Pack",
        badge: "Most Popular",
        badgeDotColor: "yellow",
        styleType: "featured",
        price: "3,833",
        period: "/ month (INR)",
        totalText: "Total: ₹22,999 (incl. 18% GST)",
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

  "Test Your English": {
    examName: "Test Your English",
    plans: [
      {
        id: "test-your-eng",
        name: "15-Day Package",
        badge: "Diagnostic",
        badgeDotColor: "green",
        styleType: "warm",
        price: "199",
        period: "/ Total",
        totalText: "Total: ₹199 (incl. 18% GST)",
        validityText: "15 Days Validity",
        description: "Quick English proficiency diagnostic test package for rapid skills assessment.",
        features: [
          { text: "Full Diagnostic Exam", included: true },
          { text: "Sectional Breakdown", included: true },
          { text: "Performance Analysis", included: true },
          { text: "Personalized Score Card", included: true },
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
  { id: "Spoken Eng", name: "Spoken English" },
  { id: "TOEFL", name: "TOEFL" },
  { id: "Test Your English", name: "Test Your English" },
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-snug sm:leading-[1.28] lg:leading-[1.3] tracking-tight max-w-2xl">
            <span className="block mb-1.5 sm:mb-2.5">Choose Your</span>
            <span className="text-brand-primary block">Program</span>
          </h2>

          <p className="font-body text-slate-500 text-sm sm:text-base max-w-md leading-relaxed md:pb-1.5">
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
              const isFeatured = plan.styleType === "featured" || idx === 1;
              const theme = idx === 0 ? "mint" : idx === 1 ? "lime" : "lavender";
              const badge = isFeatured ? "Popular" : undefined;
              const ctaHref = `https://wa.me/919286844550?text=Hi,%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(
                activeData.examName
              )}%20-%20${encodeURIComponent(plan.name)}.`;
              const detailHref = `/languages/${currentExam === "IELTS GN" ? "ielts-general" : "ielts-academic"}`;

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="h-full flex flex-col justify-between"
                >
                  <SubscriptionCard
                    id={plan.id}
                    name={plan.name}
                    subtitle={idx === 0 ? "Self-paced language foundation" : idx === 1 ? "Perfect to get started" : "Full master preparation"}
                    price={plan.price}
                    period={plan.period || "/month"}
                    currency="₹"
                    totalText={plan.totalText ? `${plan.totalText} • ${plan.validityText}` : plan.validityText}
                    badge={badge}
                    isFeatured={isFeatured}
                    theme={theme}
                    features={plan.features}
                    description={plan.description || "All the essentials to build and master your target language score"}
                    ctaText="Choose"
                    ctaHref={ctaHref}
                    trialHref={detailHref}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
