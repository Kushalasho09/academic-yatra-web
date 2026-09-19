"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-snug sm:leading-[1.28] lg:leading-[1.3] tracking-tight max-w-2xl">
            Choose the Path You&apos;re{" "}
            <span className="text-brand-accent">Preparing For</span>
          </h2>

          <p className="font-body text-slate-500 text-sm sm:text-base max-w-md leading-relaxed md:pb-1.5">
            Different career goals require different skills. Explore the
            preparation pathway that aligns with your next step.
          </p>
        </div>

        {/* Course Cards Grid matching Image 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 pb-8 items-stretch">
          {SKILL_CATALYST_PATHWAYS.map((pathway, idx) => {
            const level =
              idx === 0
                ? "Beginner"
                : idx === 1
                ? "Intermediate"
                : idx === 2
                ? "Advanced"
                : "Intermediate";
            const rating = idx % 2 === 0 ? "4.8" : "4.9";
            const reviews =
              idx === 0
                ? "356 reviews"
                : idx === 1
                ? "412 reviews"
                : idx === 2
                ? "576 reviews"
                : "230 reviews";

            return (
              <motion.div
                key={pathway.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="relative w-full h-full flex flex-col group pb-2"
              >
                <div
                  onClick={() => handleScrollToPrograms(pathway.programKey)}
                  className="relative w-full h-full overflow-hidden rounded-[22px] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left"
                >
                  {/* Top Edge-to-Edge Image matching Image 1 */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/10.5] w-full shrink-0 overflow-hidden bg-slate-100">
                    <Image
                      src={pathway.image}
                      alt={pathway.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {pathway.popular && (
                      <div className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-md uppercase tracking-wider">
                        ★ Popular
                      </div>
                    )}
                  </div>

                  {/* Content Body matching Image 1 */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 text-left">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                        {pathway.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal line-clamp-2 mt-2 font-body">
                        {pathway.tagline}
                      </p>
                    </div>

                    {/* Bottom Rating and Level Badge matching Image 1 */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                        <span>{rating}</span>
                        <span className="text-[#7C3AED] font-bold">★</span>
                        <span className="text-slate-400 font-normal text-[10.5px]">
                          ({reviews})
                        </span>
                      </div>

                      <span
                        className={cn(
                          "text-[10.5px] font-bold px-2 py-0.5 rounded-md",
                          level === "Beginner" && "bg-sky-100 text-sky-800",
                          level === "Intermediate" && "bg-amber-100 text-amber-900",
                          level === "Advanced" && "bg-emerald-100 text-emerald-800"
                        )}
                      >
                        {level}
                      </span>
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
