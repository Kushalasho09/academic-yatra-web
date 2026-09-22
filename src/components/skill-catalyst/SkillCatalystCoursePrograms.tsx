"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SubscriptionCard from "@/components/ui/SubscriptionCard";

export interface CoursePlan {
  id: string;
  name: string;
  category: string;
  badge?: string;
  isFeatured?: boolean;
  price: string;
  period: string;
  totalText: string;
  validityText: string;
  duration: string;
  liveHours: string;
  description: string;
  features: string[];
}

export const SKILL_CATALYST_PLANS: CoursePlan[] = [
  {
    id: "career-essentials",
    name: "Career Essentials Pack",
    category: "CAREER_ESSENTIALS",
    badge: "Workplace Ready",
    price: "16,299",
    period: "total (incl. 18% GST)",
    totalText: "Total: ₹16,299 (incl. 18% GST)",
    validityText: "95 Days Portal Access",
    duration: "10 Days",
    liveHours: "20 hrs live lectures",
    description:
      "Build workplace-ready skills for internships, corporate interviews, communication, and professional career readiness.",
    features: [
      "95 days portal access",
      "20 hrs live lectures",
      "Capstone projects",
      "Mock interviews",
      "Skill assessment",
      "Verified Certificate",
    ],
  },
  {
    id: "google-suite-hub",
    name: "Google Suite Hub Pack",
    category: "GOOGLE_SUITE",
    badge: "Premium",
    isFeatured: false,
    price: "16,299",
    period: "total (incl. 18% GST)",
    totalText: "Total: ₹16,299 (incl. 18% GST)",
    validityText: "95 Days Portal Access",
    duration: "7 Days",
    liveHours: "14 hrs live lectures",
    description:
      "Master essential Google Workspace tools, spreadsheets, dashboards, and automated workflows for higher productivity.",
    features: [
      "95 days portal access",
      "14 hrs live lectures",
      "Dashboard projects",
      "Quiz tracking",
      "Skill assessment",
      "Verified Certificate",
    ],
  },
  {
    id: "bizz-tech",
    name: "Bizz Tech Course",
    category: "BIZZ_TECH",
    badge: "Hands-on Practical",
    price: "16,299",
    period: "total (incl. 18% GST)",
    totalText: "Total: ₹16,299 (incl. 18% GST)",
    validityText: "95 Days Portal Access",
    duration: "7 Days",
    liveHours: "14 hrs live lectures",
    description:
      "Master business analytics, podcast production, and modern digital tech tools through focused, hands-on building.",
    features: [
      "95 days portal access",
      "14 hrs live lectures",
      "Podcast projects",
      "Analytics mastery",
      "Skill assessment",
      "Verified Certificate",
    ],
  },
  {
    id: "combo-pack",
    name: "Combo Pack",
    category: "COMBO",
    badge: "Most Popular",
    isFeatured: true,
    price: "42,999",
    period: "total (incl. 18% GST)",
    totalText: "Total: ₹42,999 (incl. 18% GST)",
    validityText: "95 Days Portal Access",
    duration: "6 Weeks",
    liveHours: "6 wks live lectures",
    description:
      "The complete career mastery suite: Career Essentials + Bizz Tech + Google Suite Hub with 6 weeks of live lectures.",
    features: [
      "95 days portal access",
      "6 wks live lectures",
      "Capstone projects",
      "Competency evaluation",
      "Skill assessment",
      "Verified Certificate",
    ],
  },
];

interface SkillCatalystCourseProgramsProps {
  selectedProgram?: string;
  onSelectProgram?: (programKey: string) => void;
}

export default function SkillCatalystCoursePrograms({
  selectedProgram = "ALL",
  onSelectProgram,
}: SkillCatalystCourseProgramsProps) {
  const [activeFilter, setActiveFilter] = useState<string>(selectedProgram || "ALL");

  const filterOptions = [
    { id: "ALL", label: "All Programs" },
    { id: "CAREER_ESSENTIALS", label: "Career Essentials" },
    { id: "GOOGLE_SUITE", label: "Google Suite Hub" },
    { id: "BIZZ_TECH", label: "BizzTech" },
    { id: "COMBO", label: "Combo Pack" },
  ];

  const handleFilterChange = (id: string) => {
    setActiveFilter(id);
    if (onSelectProgram) {
      onSelectProgram(id);
    }
  };

  const filteredPlans =
    activeFilter === "ALL"
      ? SKILL_CATALYST_PLANS
      : SKILL_CATALYST_PLANS.filter((p) => p.category === activeFilter);

  return (
    <section id="course-programs" className="py-8 sm:py-12 bg-slate-50 relative z-10 scroll-mt-20 overflow-hidden">
      {/* Seamless Top & Bottom Ambient Fade */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-snug sm:leading-[1.28] lg:leading-[1.3] tracking-tight">
            Choose Your <span className="text-brand-primary">Program</span>
          </h2>
          <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
            Select the plan that fits your preparation style, skill requirements, and timeline.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {filterOptions.map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleFilterChange(tab.id)}
                className={cn(
                  "px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 border cursor-pointer",
                  isSelected
                    ? "bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/25 scale-[1.03]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-brand-primary/60 hover:text-brand-primary shadow-xs"
                )}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Pricing Cards Grid matching Reference UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch">
          {filteredPlans.map((plan, idx) => {
            const isFeatured = plan.isFeatured || idx === 1;
            const theme = idx % 3 === 0 ? "mint" : idx % 3 === 1 ? "lime" : "lavender";
            const badge = isFeatured ? (plan.badge || "Popular") : undefined;
            const ctaHref = `https://web.whatsapp.com/send?phone=+919403892981&text=Hi,%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(
              plan.name
            )}.`;

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
                  subtitle={plan.duration ? `${plan.duration} • ${plan.liveHours}` : "Career Ready Curriculum"}
                  price={plan.price}
                  period={plan.period || "/course"}
                  currency="₹"
                  totalText={plan.validityText}
                  badge={badge}
                  isFeatured={isFeatured}
                  theme={theme}
                  features={plan.features}
                  description={plan.description}
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
