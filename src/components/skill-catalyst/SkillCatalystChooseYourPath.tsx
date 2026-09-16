"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Star, Plus, ArrowRight, Zap } from "lucide-react";

export interface SkillPathway {
  id: string;
  category: string;
  duration: string;
  title: string;
  tagline: string;
  packType: string;
  popular?: boolean;
  image: string;
  glowText: string;
  shortGlowText: string;
  programKey: string;
}

const SKILL_CATALYST_PATHWAYS: SkillPathway[] = [
  {
    id: "career-essentials",
    category: "Career Readiness",
    duration: "10 Days",
    title: "Career Essentials",
    tagline:
      "For internships, jobs, and workplace readiness. Master communication, resume building, and mock interviews.",
    packType: "Career Essentials Pack",
    popular: true,
    image: "/images/why_academic_students.jpg",
    glowText: "Workplace & Internship Readiness",
    shortGlowText: "Workplace Readiness",
    programKey: "CAREER_ESSENTIALS",
  },
  {
    id: "bizz-tech",
    category: "Business & Technology",
    duration: "7 Days",
    title: "BizzTech Program",
    tagline:
      "For practical business and digital workplace skills. Explore business analytics, podcasts, and data-driven execution.",
    packType: "Premium Pack",
    popular: false,
    image: "/images/hero_center_laptop.jpg",
    glowText: "Digital Business & Tech Skills",
    shortGlowText: "Digital Tech Skills",
    programKey: "BIZZ_TECH",
  },
  {
    id: "google-suite-hub",
    category: "Workplace Skills",
    duration: "7 Days",
    title: "Google Suite Hub",
    tagline:
      "For hands-on Google tools and productivity skills. Master Docs, Sheets, Slides, Forms, and automated workflows.",
    packType: "Most Popular",
    popular: true,
    image: "/images/path_learning_dashboard.jpg",
    glowText: "Productivity & Advanced Sheets Mastery",
    shortGlowText: "Google Suite Mastery",
    programKey: "GOOGLE_SUITE",
  },
  {
    id: "skill-catalyst-combo",
    category: "Job-Ready Skills",
    duration: "6 Weeks",
    title: "Skill Catalyst Combo",
    tagline:
      "For complete professional and digital skill development. Integrated capstone projects and end-to-end career coaching.",
    packType: "All-Inclusive Combo",
    popular: true,
    image: "/images/story_complete_journey.jpg",
    glowText: "Full 6-Week Transformation Pathway",
    shortGlowText: "6-Week Full Combo",
    programKey: "COMBO",
  },
];

interface SkillCatalystChooseYourPathProps {
  onSelectPath?: (programKey: string) => void;
}

export default function SkillCatalystChooseYourPath({
  onSelectPath,
}: SkillCatalystChooseYourPathProps) {
  const handleScrollToPrograms = (programKey: string) => {
    if (onSelectPath) {
      onSelectPath(programKey);
    }
    const section = document.getElementById("course-programs");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-8 sm:py-12 bg-white relative z-10 overflow-hidden">
      {/* Seamless Top & Bottom Ambient Fade */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-slate-50/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-50/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-brand-primary">
              Choose Your Path
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-snug sm:leading-[1.28] lg:leading-[1.3] tracking-tight">
              Choose the Path You&apos;re{" "}
              <span className="text-brand-accent">Preparing For</span>
            </h2>
          </div>

          <p className="font-body text-slate-500 text-sm sm:text-base max-w-md leading-relaxed">
            Different career goals require different skills. Explore the
            preparation pathway that aligns with your next step.
          </p>
        </div>

        {/* Layered Glow Cards Grid (2 per row on mobile, 4 on desktop or 2x2) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 sm:gap-x-6 lg:gap-x-6 gap-y-12 sm:gap-y-16 pb-8 items-stretch">
          {SKILL_CATALYST_PATHWAYS.map((pathway, idx) => (
            <motion.div
              key={pathway.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="relative w-full h-full flex flex-col group"
            >
              {/* Glowing Underlay Shelf */}
              <div className="pointer-events-none absolute inset-x-1.5 sm:inset-x-3 -bottom-6 sm:-bottom-7 h-9 sm:h-11 rounded-b-[18px] sm:rounded-b-[24px] bg-brand-primary shadow-[0_16px_35px_-8px_rgba(12,146,83,0.55)] sm:shadow-[0_22px_50px_-10px_rgba(12,146,83,0.65)] z-0 transition-transform duration-300 group-hover:scale-[1.02]" />

              {/* Glowing Bottom Shelf Text Indicator */}
              <div className="absolute inset-x-0 -bottom-6 sm:-bottom-7 h-6 sm:h-7 flex items-center justify-center z-0 pointer-events-none px-1 sm:px-4">
                <div className="flex items-center justify-center gap-1 text-center text-white tracking-tight">
                  <Zap className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 text-amber-300 fill-amber-300 shrink-0" />
                  <span className="text-[8.5px] sm:hidden font-extrabold leading-none">
                    {pathway.shortGlowText || pathway.glowText}
                  </span>
                  <span className="hidden sm:inline text-xs font-bold">
                    {pathway.glowText}
                  </span>
                </div>
              </div>

              {/* Main Card Surface */}
              <div className="relative z-10 w-full h-full overflow-hidden rounded-[18px] sm:rounded-[22px] bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-3 sm:p-5 lg:p-6 flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-brand-primary/40">
                <div className="flex-1 flex flex-col">
                  {/* Top Status Header */}
                  <div className="mb-2 sm:mb-4 flex flex-wrap items-center justify-between gap-1 text-slate-500 font-medium">
                    <div className="flex items-center gap-1 min-w-0">
                      <span className="inline-block h-2 w-2 rounded-full bg-brand-primary animate-pulse shrink-0" />
                      <span className="font-bold text-slate-800 text-[10px] sm:text-xs leading-none whitespace-nowrap">
                        {pathway.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-100/90 px-1.5 sm:px-2.5 py-0.5 rounded-full text-slate-600 font-semibold text-[9px] sm:text-[11px] shrink-0">
                      <Clock className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 text-brand-accent shrink-0" />
                      <span>{pathway.duration}</span>
                    </div>
                  </div>

                  {/* Course Image Visual */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full shrink-0 overflow-hidden rounded-[14px] sm:rounded-[18px] ring-1 ring-slate-100 bg-slate-50">
                    <Image
                      src={pathway.image}
                      alt={pathway.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-35 transition-opacity" />

                    {/* Popular Badge */}
                    {pathway.popular && (
                      <div className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[8px] sm:text-[10px] font-extrabold px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md uppercase tracking-wider flex items-center space-x-0.5 sm:space-x-1">
                        <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-white" />
                        <span>Popular</span>
                      </div>
                    )}

                    {/* Pack Tag on Image */}
                    <div className="absolute bottom-1.5 left-1.5 sm:bottom-3 sm:left-3">
                      <span className="px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-xl text-[9px] sm:text-xs font-bold text-white bg-black/65 backdrop-blur-md border border-white/20 shadow-sm">
                        {pathway.packType}
                      </span>
                    </div>
                  </div>

                  {/* Title & Full Summary */}
                  <div className="mt-2.5 sm:mt-4 text-left space-y-1 sm:space-y-1.5 flex-1 flex flex-col">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold font-heading text-brand-primary group-hover:text-brand-primaryHover transition-colors leading-snug">
                      {pathway.title}
                    </h3>
                    <p className="text-[10.5px] sm:text-xs text-slate-500 leading-normal font-normal">
                      {pathway.tagline}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-3 sm:mt-5 pt-1 flex flex-col sm:grid sm:grid-cols-2 gap-1.5 sm:gap-2">
                  <Link
                    href="/contacts"
                    className="w-full h-8 sm:h-10 px-2 sm:px-3 inline-flex items-center justify-center gap-1.5 rounded-lg sm:rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-brand-primary/40 text-slate-700 font-bold text-[11px] sm:text-xs transition-all shadow-xs hover:shadow-sm"
                  >
                    <Plus className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand-primary shrink-0" />
                    <span>Demo</span>
                  </Link>

                  <button
                    onClick={() => handleScrollToPrograms(pathway.programKey)}
                    className="w-full h-8 sm:h-10 px-2 sm:px-3 inline-flex items-center justify-center gap-1.5 rounded-lg sm:rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-[11px] sm:text-xs shadow-md shadow-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/40 transition-all cursor-pointer"
                  >
                    <span>Enroll</span>
                    <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
