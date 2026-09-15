"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Clock, Calendar, Award } from "lucide-react";
import { cn } from "@/lib/utils";

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
    price: "15,000",
    period: "+ GST",
    totalText: "Complete 10-Day Training",
    validityText: "95 Days Portal Access",
    duration: "10 Day Program",
    liveHours: "20 Hours Live Lectures",
    description:
      "Master workplace communication, presentation skills, resume building, and ace mock interviews.",
    features: [
      "95 Days Full Portal Access",
      "20 Hours of Live Expert Lectures",
      "10 Day Intensive Workplace Curriculum",
      "Hands-On Capstone Projects",
      "Mock Interview 1-on-1 Assessments",
      "Comprehensive Skill Assessment",
      "Verified Certificate of Achievement",
    ],
  },
  {
    id: "google-suite-hub",
    name: "Google Suite Hub Pack",
    category: "GOOGLE_SUITE",
    badge: "Most Popular",
    isFeatured: true,
    price: "15,000",
    period: "+ GST",
    totalText: "Hands-on Productivity",
    validityText: "95 Days Portal Validity",
    duration: "7 Day Program",
    liveHours: "14 Hours Live Lectures",
    description:
      "Become a power user in Google Docs, Advanced Sheets formulas, interactive Slides, and automated Forms.",
    features: [
      "95 Days Full Portal Validity",
      "14 Hours of Live Hands-On Lectures",
      "7 Day Structured Masterclass",
      "Dynamic Dashboard & Spreadsheet Projects",
      "Interactive Quiz & Performance Tracking",
      "Formula Cheat Sheets & Templates",
      "Verified Certificate of Achievement",
    ],
  },
  {
    id: "bizz-tech",
    name: "Bizz Tech Course",
    category: "BIZZ_TECH",
    badge: "Premium",
    price: "15,000",
    period: "+ GST",
    totalText: "Digital & Business Skills",
    validityText: "95 Days Portal Access",
    duration: "7 Day Program",
    liveHours: "14 Hours Live Lectures",
    description:
      "Bridge technology and business strategy with podcast creations, digital workflows, and analytics mastery.",
    features: [
      "95 Days Full Portal Access",
      "14 Hours Live Interactive Lectures",
      "7 Day Business & Technology Sprint",
      "Student Podcast Production Projects",
      "Analytics & Insights Case Studies",
      "Comprehensive Skill Assessment",
      "Verified Certificate of Achievement",
    ],
  },
  {
    id: "combo-pack",
    name: "Skill Catalyst Combo Pack",
    category: "COMBO",
    badge: "All-Inclusive • Best Value",
    isFeatured: true,
    price: "39,000",
    period: "+ GST",
    totalText: "Complete 6-Week Transformation",
    validityText: "95 Days Portal Access",
    duration: "6 Week Program",
    liveHours: "6 Weeks Live Lectures",
    description:
      "The complete career mastery suite: Career Essentials + BizzTech + Google Suite Hub with extended mentorship.",
    features: [
      "95 Days Unrestricted Portal Access",
      "6 Weeks Comprehensive Live Lectures",
      "Integrated Multi-Discipline Capstone Projects",
      "Advanced Competency Evaluation",
      "1-on-1 Career Mentorship & Portfolio Review",
      "Comprehensive Skill Assessment",
      "Triple Certification of Achievement",
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
    <section id="course-programs" className="py-12 sm:py-16 bg-slate-50 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100/80 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
            <span>Course Programs</span>
          </div>
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

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch">
          {filteredPlans.map((plan, idx) => {
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className={cn(
                  "relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300",
                  plan.isFeatured
                    ? "bg-white border-2 border-brand-primary shadow-2xl shadow-brand-primary/15 md:-translate-y-2 ring-4 ring-brand-primary/10"
                    : "bg-white/90 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-slate-300"
                )}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={cn(
                        "px-3.5 py-1 rounded-full text-[10.5px] font-extrabold tracking-wide uppercase shadow-sm flex items-center gap-1.5 whitespace-nowrap",
                        plan.isFeatured
                          ? "bg-brand-primary text-white"
                          : "bg-slate-800 text-white"
                      )}
                    >
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>{plan.badge}</span>
                    </span>
                  </div>
                )}

                <div>
                  {/* Category Pill */}
                  <div className="pt-2 flex items-center justify-between gap-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>Skill Catalyst</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md text-[10px]">
                      {plan.duration}
                    </span>
                  </div>

                  {/* Plan Name */}
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-brand-navy mt-1.5 leading-snug">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[36px] leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price Block */}
                  <div className="my-5 pb-5 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold text-slate-400">₹</span>
                      <span className="font-heading text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">{plan.period}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs font-semibold text-slate-500">
                      <span>{plan.validityText}</span>
                      <span className="text-brand-primary font-bold">{plan.liveHours}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pb-6">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                      What&apos;s Included
                    </p>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-brand-primary flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="text-slate-700 font-medium leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Buttons */}
                <div className="pt-4 space-y-2 border-t border-slate-100">
                  <a
                    href={`https://web.whatsapp.com/send?phone=+919403892981&text=Hi,%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(
                      plan.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-full py-3 px-4 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm",
                      plan.isFeatured
                        ? "bg-brand-primary hover:bg-brand-primaryHover text-white shadow-brand-primary/25 hover:shadow-lg"
                        : "bg-brand-navy hover:bg-slate-800 text-white"
                    )}
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <Link
                    href="/contacts"
                    className="w-full py-2 px-4 rounded-xl font-bold text-xs text-slate-600 hover:text-brand-navy hover:bg-slate-100 flex items-center justify-center transition-colors"
                  >
                    <span>Book Demo</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
