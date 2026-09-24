"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface SkillPathwayCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  tinted?: boolean;
  icon: React.ReactNode;
}

const SKILL_CATALYST_CARDS: SkillPathwayCard[] = [
  {
    id: "career-essentials",
    title: "Career Readiness",
    subtitle: "CAREER ESSENTIALS",
    description: "For internships, jobs, and workplace readiness.",
    href: "/skill-catalyst/career-essentials",
    tinted: false,
    icon: (
      <svg
        className="w-12 h-12 text-[#0C9253]"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="24" cy="24" r="18" />
        <ellipse cx="24" cy="24" rx="8" ry="18" />
        <path d="M6 24h36" />
        <path d="M9 15h30" />
        <path d="M9 33h30" />
      </svg>
    ),
  },
  {
    id: "bizz-tech",
    title: "Business & Technology",
    subtitle: "BIZZTECH",
    description: "For practical business and digital workplace skills.",
    href: "/skill-catalyst/bizz-tech",
    tinted: true,
    icon: (
      <svg
        className="w-12 h-12 text-[#0C9253]"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Graduation cap */}
        <path d="M24 6L6 16l18 10 18-10L24 6z" />
        <path d="M13 20v9c0 3 5 5.5 11 5.5s11-2.5 11-5.5v-9" />
        <path d="M42 16v13" />
        {/* Stacked books underneath */}
        <path d="M7 36c0 2.5 5 4.5 11 4.5s11-2 11-4.5" />
        <path d="M7 42c0 2.5 5 4.5 11 4.5s11-2 11-4.5" />
      </svg>
    ),
  },
  {
    id: "google-suite-hub",
    title: "Workplace Skills",
    subtitle: "GOOGLE SUITE HUB",
    description: "For hands-on Google tools and productivity skills.",
    href: "/skill-catalyst/google-suite-hub",
    tinted: false,
    icon: (
      <svg
        className="w-12 h-12 text-[#0C9253]"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Notebook body */}
        <rect x="13" y="7" width="27" height="35" rx="4" />
        {/* Spiral binder loops on left */}
        <path d="M9 12h8M9 18h8M9 24h8M9 30h8M9 36h8" />
        {/* Checklist inside */}
        <rect x="20" y="14" width="13" height="7" rx="1.5" />
        <path d="M20 27h13M20 33h9" />
      </svg>
    ),
  },
  {
    id: "skill-catalyst-combo",
    title: "Job-Ready Skills",
    subtitle: "SKILL CATALYST",
    description: "For complete professional and digital skill development.",
    href: "/skill-catalyst/skill-catalyst",
    tinted: false,
    icon: (
      <svg
        className="w-12 h-12 text-[#0C9253]"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Base line */}
        <path d="M8 38h32" />
        {/* Bar 1 */}
        <rect x="11" y="22" width="6" height="16" rx="1.5" />
        {/* Bar 2 */}
        <rect x="21" y="12" width="6" height="26" rx="1.5" />
        {/* Bar 3 */}
        <rect x="31" y="20" width="6" height="18" rx="1.5" />
      </svg>
    ),
  },
];

interface SkillCatalystChooseYourPathProps {
  onSelectPath?: (programKey: string) => void;
}

export default function SkillCatalystChooseYourPath({
  onSelectPath,
}: SkillCatalystChooseYourPathProps) {
  return (
    <section className="py-12 sm:py-16 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Pathway Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {SKILL_CATALYST_CARDS.map((card) => (
            <div
              key={card.id}
              className={`rounded-[28px] border transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between group shadow-xs hover:shadow-xl hover:-translate-y-1 ${
                card.tinted
                  ? "bg-gradient-to-b from-[#E8F8EE]/70 via-white to-white border-emerald-200/80"
                  : "bg-white border-slate-200/85 hover:border-emerald-300"
              }`}
            >
              {/* Top Section: Icon, Title, Subtitle, Description */}
              <div>
                {/* Icon */}
                <div className="mb-6 flex items-center">{card.icon}</div>

                {/* Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                  {card.title}
                </h3>

                {/* Subtitle Badge */}
                <p className="font-heading text-xs sm:text-[13px] font-extrabold tracking-wider text-[#0C9253] uppercase mt-1">
                  {card.subtitle}
                </p>

                {/* Description */}
                <p className="font-body text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-4 font-normal">
                  {card.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-2">
                <Link
                  href={card.href}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0C9253] hover:bg-[#0A7A45] text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer group-hover:scale-[1.02]"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
