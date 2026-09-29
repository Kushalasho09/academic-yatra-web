"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface PathwayCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  tinted?: boolean;
  icon: React.ReactNode;
}

const TEST_PREP_CARDS: PathwayCard[] = [
  {
    id: "sat",
    title: "Bachelor's Abroad",
    subtitle: "SAT PREPARATION",
    description: "For undergraduate admissions to leading universities worldwide.",
    href: "/test-prep/sat-digital",
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
        {/* Graduation cap */}
        <path d="M24 8L6 18l18 10 18-10L24 8z" />
        <path d="M12 21.5v9c0 3.5 5.373 6.5 12 6.5s12-3 12-6.5v-9" />
        <path d="M42 18v16" />
        <circle cx="42" cy="36" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "gre",
    title: "Master's Abroad",
    subtitle: "GRE PREPARATION",
    description: "For postgraduate admissions across top global universities.",
    href: "/test-prep/gre-general",
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
        <circle cx="24" cy="24" r="18" />
        <ellipse cx="24" cy="24" rx="8" ry="18" />
        <path d="M6 24h36" />
        <path d="M9 15h30" />
        <path d="M9 33h30" />
      </svg>
    ),
  },
  {
    id: "gmat",
    title: "MBA Abroad",
    subtitle: "GMAT PREPARATION",
    description: "For admissions leading to top business schools abroad.",
    href: "/test-prep/gmat-focus",
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
        <rect x="10" y="6" width="28" height="36" rx="4" />
        {/* Spiral binder loops on left */}
        <path d="M6 13h8M6 21h8M6 29h8M6 37h8" />
        {/* Checklist lines */}
        <path d="M19 15h11M19 23h11M19 31h8" />
      </svg>
    ),
  },
];

interface ChooseYourPathProps {
  onSelectPath?: (examKey: string) => void;
}

export default function TestPrepChooseYourPath({ onSelectPath }: ChooseYourPathProps) {
  return (
    <section className="py-8 sm:py-14 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 Pathway Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {TEST_PREP_CARDS.map((card) => (
            <div
              key={card.id}
              className={`rounded-[28px] border transition-all duration-300 p-6 sm:p-9 flex flex-col justify-between group shadow-xs hover:shadow-xl hover:-translate-y-1 ${
                card.tinted
                  ? "bg-gradient-to-b from-[#E8F8EE]/70 via-white to-white border-emerald-200/80"
                  : "bg-white border-slate-200/85 hover:border-emerald-300"
              }`}
            >
              {/* Top Section: Icon, Title, Subtitle, Description */}
              <div>
                {/* Icon */}
                <div className="mb-4 sm:mb-6 flex items-center">{card.icon}</div>

                {/* Title */}
                <h3 className="font-heading text-xl xs:text-2xl sm:text-[26px] font-bold text-slate-900 tracking-tight leading-snug">
                  {card.title}
                </h3>

                {/* Subtitle Badge */}
                <p className="font-heading text-xs sm:text-[13px] font-extrabold tracking-wider text-[#0C9253] uppercase mt-1">
                  {card.subtitle}
                </p>

                {/* Description */}
                <p className="font-body text-slate-600 text-xs sm:text-[15px] leading-relaxed mt-3 sm:mt-4 font-normal">
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
