"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Compass,
  Microscope,
  Stethoscope,
  Globe,
  Award,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { PackageDetailData } from "@/data/packageDetailsData";
import { cn } from "@/lib/utils";

interface PackageTargetAudienceProps {
  audience: PackageDetailData["audience"];
}

interface AudienceConfig {
  numeral: string;
  color: string;
  bgClass: string;
  textClass: string;
  icon: React.ElementType;
  defaultTitle: string;
}

const AUDIENCE_CONFIGS: AudienceConfig[] = [
  {
    numeral: "01",
    color: "#1D4ED8", // Deep Blue
    bgClass: "bg-[#1D4ED8]",
    textClass: "text-[#1D4ED8]",
    icon: GraduationCap,
    defaultTitle: "Bachelor's Degrees",
  },
  {
    numeral: "02",
    color: "#E11D48", // Crimson / Red-Pink
    bgClass: "bg-[#E11D48]",
    textClass: "text-[#E11D48]",
    icon: Compass,
    defaultTitle: "Master's Programs",
  },
  {
    numeral: "03",
    color: "#0D9488", // Teal / Emerald
    bgClass: "bg-[#0D9488]",
    textClass: "text-[#0D9488]",
    icon: Microscope,
    defaultTitle: "PhD & Research",
  },
  {
    numeral: "04",
    color: "#7C3AED", // Purple
    bgClass: "bg-[#7C3AED]",
    textClass: "text-[#7C3AED]",
    icon: Stethoscope,
    defaultTitle: "Specialized Disciplines",
  },
  {
    numeral: "05",
    color: "#4F46E5", // Indigo
    bgClass: "bg-[#4F46E5]",
    textClass: "text-[#4F46E5]",
    icon: Globe,
    defaultTitle: "Global Destinations",
  },
  {
    numeral: "06",
    color: "#D97706", // Amber / Gold
    bgClass: "bg-[#D97706]",
    textClass: "text-[#D97706]",
    icon: Award,
    defaultTitle: "Proficiency Proof",
  },
];

export default function PackageTargetAudience({ audience }: PackageTargetAudienceProps) {
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F9FBFA] via-white to-[#F9FBFA] relative z-10 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-brand-navy tracking-tight font-heading leading-tight sm:leading-snug">
            <span>{audience.headingPrefix} </span>
            <span className="text-emerald-600">{audience.headingHighlight}</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-body max-w-2xl mx-auto">
            {audience.description}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CENTER-LOCKED SPINE LAYOUT (Both Web View & Mobile View)                  */}
        {/* A single continuous vertical pillar locked at exact 50% horizontal center. */}
        {/* Left and Right halves are symmetrical so the pillar never wanders.         */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center w-full max-w-3xl mx-auto relative select-none">
          {audience.cards.map((card, idx) => {
            const config = AUDIENCE_CONFIGS[idx % AUDIENCE_CONFIGS.length];
            const Icon = config.icon;
            const isFirst = idx === 0;
            const isLast = idx === audience.cards.length - 1;
            const isEven = idx % 2 === 1; // Even rows: 02, 04, 06 (Text on Left, Icon on Right)

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: easeCurve }}
                className="w-full flex items-center justify-center my-[-2px] sm:my-[-3px] relative z-10 group"
              >
                {/* 3-Column Grid: [Left Wing Area (equal)] [Center Spine] [Right Wing Area (equal)] */}
                <div className="w-full flex items-center justify-center">
                  
                  {/* LEFT WING AREA (Always exactly 50% minus half-spine) */}
                  <div className="flex-1 min-w-0 flex items-center justify-end">
                    {!isEven ? (
                      // ODD ROW: Icon capsule touching the center spine
                      <div className="w-16 sm:w-24 h-[64px] sm:h-[78px] rounded-l-full bg-white border-y border-l border-slate-200/90 shadow-[0_6px_25px_rgba(0,0,0,0.06)] group-hover:shadow-lg transition-all duration-300 flex items-center justify-center shrink-0 pr-1 pl-2">
                        <Icon
                          className={cn(
                            "w-5 h-5 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110",
                            config.textClass
                          )}
                          strokeWidth={1.8}
                        />
                      </div>
                    ) : (
                      // EVEN ROW: Text capsule touching the center spine (Right-aligned text)
                      <div className="w-full max-w-[280px] sm:max-w-[360px] h-[64px] sm:h-[78px] rounded-l-full bg-white border-y border-l border-slate-200/90 shadow-[0_6px_25px_rgba(0,0,0,0.06)] group-hover:shadow-lg transition-all duration-300 flex items-center justify-end pl-3 sm:pl-6 pr-2.5 sm:pr-4 gap-1.5 sm:gap-3 text-right">
                        <div className="space-y-0.5 min-w-0 flex-1">
                          <h4
                            className="font-heading text-xs sm:text-base font-black tracking-tight group-hover:text-emerald-700 transition-colors truncate"
                            style={{ color: config.color }}
                          >
                            {config.defaultTitle}
                          </h4>
                          <p className="font-body text-[11px] sm:text-[13px] text-slate-600 font-normal leading-snug line-clamp-1">
                            {card.title}
                          </p>
                        </div>
                        <ChevronLeft
                          className={cn(
                            "w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 transition-transform duration-300 group-hover:-translate-x-1",
                            config.textClass
                          )}
                          strokeWidth={2.5}
                        />
                      </div>
                    )}
                  </div>

                  {/* CENTER SPINE SEGMENT: Locked at exact horizontal center for all 6 items */}
                  <div
                    className={cn(
                      "w-12 sm:w-16 h-[74px] sm:h-[88px] flex items-center justify-center text-white font-black font-heading text-base sm:text-xl tracking-wider select-none shadow-md shrink-0 z-20",
                      config.bgClass,
                      isFirst && "rounded-t-full",
                      isLast && "rounded-b-full"
                    )}
                  >
                    {config.numeral}
                  </div>

                  {/* RIGHT WING AREA (Always exactly 50% minus half-spine) */}
                  <div className="flex-1 min-w-0 flex items-center justify-start">
                    {!isEven ? (
                      // ODD ROW: Text capsule touching the center spine (Left-aligned text)
                      <div className="w-full max-w-[280px] sm:max-w-[360px] h-[64px] sm:h-[78px] rounded-r-full bg-white border-y border-r border-slate-200/90 shadow-[0_6px_25px_rgba(0,0,0,0.06)] group-hover:shadow-lg transition-all duration-300 flex items-center pl-2.5 sm:pl-4 pr-3 sm:pr-6 gap-1.5 sm:gap-3 text-left">
                        <ChevronRight
                          className={cn(
                            "w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1",
                            config.textClass
                          )}
                          strokeWidth={2.5}
                        />
                        <div className="space-y-0.5 min-w-0 flex-1">
                          <h4
                            className="font-heading text-xs sm:text-base font-black tracking-tight group-hover:text-emerald-700 transition-colors truncate"
                            style={{ color: config.color }}
                          >
                            {config.defaultTitle}
                          </h4>
                          <p className="font-body text-[11px] sm:text-[13px] text-slate-600 font-normal leading-snug line-clamp-1">
                            {card.title}
                          </p>
                        </div>
                      </div>
                    ) : (
                      // EVEN ROW: Icon capsule touching the center spine
                      <div className="w-16 sm:w-24 h-[64px] sm:h-[78px] rounded-r-full bg-white border-y border-r border-slate-200/90 shadow-[0_6px_25px_rgba(0,0,0,0.06)] group-hover:shadow-lg transition-all duration-300 flex items-center justify-center shrink-0 pl-1 pr-2">
                        <Icon
                          className={cn(
                            "w-5 h-5 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110",
                            config.textClass
                          )}
                          strokeWidth={1.8}
                        />
                      </div>
                    )}
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
