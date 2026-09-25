"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Layers,
  TrendingUp,
  RefreshCw,
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PurposePillar {
  numeral: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgClass: string;
  textClass: string;
}

const PILLARS: PurposePillar[] = [
  {
    numeral: "01",
    title: "Build Real Capability",
    description:
      "Go beyond completing a course. Build language, test readiness, and practical skills you can actually use.",
    icon: Target,
    color: "#1D4ED8", // Deep Blue
    bgClass: "bg-[#1D4ED8]",
    textClass: "text-[#1D4ED8]",
  },
  {
    numeral: "02",
    title: "Make Better Preparation Possible",
    description:
      "Bring expert teaching, structured learning, and technology together in one place.",
    icon: Layers,
    color: "#E11D48", // Crimson / Red-Pink
    bgClass: "bg-[#E11D48]",
    textClass: "text-[#E11D48]",
  },
  {
    numeral: "03",
    title: "Put Progress in Perspective",
    description:
      "Help learners understand where they are today and what they need to improve next.",
    icon: TrendingUp,
    color: "#0D9488", // Teal / Emerald
    bgClass: "bg-[#0D9488]",
    textClass: "text-[#0D9488]",
  },
  {
    numeral: "04",
    title: "Keep Moving With Learners",
    description:
      "Continuously evolve our programs, tools, and learning experience around changing academic and professional needs.",
    icon: RefreshCw,
    color: "#7C3AED", // Purple
    bgClass: "bg-[#7C3AED]",
    textClass: "text-[#7C3AED]",
  },
];

export default function AboutOurPurpose() {
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <section
      id="our-purpose"
      className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F9FBFA] via-white to-[#F9FBFA] relative z-10 overflow-hidden"
    >
      {/* Ambient soft glow backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.18]"
          >
            Make <span className="text-[#0C9253]">Learning Count.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-slate-600 text-xs sm:text-base leading-relaxed font-body max-w-2xl mx-auto"
          >
            Academic Yatra exists to make learning more focused, accessible, and useful — from the first lesson to the moment those skills are put to work.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* CENTER-LOCKED SPINE LAYOUT (Both Web View & Mobile View)                  */}
        {/* Symmetrical Left Wing + Center Rigid Spine + Symmetrical Right Wing       */}
        {/* Symmetrical flex-1 wings lock the spine mathematically to exact 50% center*/}
        {/* Zero subpixel shift or zigzag between odd and even rows.                  */}
        {/* ========================================================================= */}
        <div className="w-full max-w-xl sm:max-w-4xl lg:max-w-5xl mx-auto flex flex-col items-center relative select-none">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isFirst = idx === 0;
            const isLast = idx === PILLARS.length - 1;
            const isEven = idx % 2 === 1; // Even rows: 02, 04 (Text on Left, Icon on Right)

            return (
              <motion.div
                key={pillar.numeral}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: easeCurve }}
                className="w-full flex items-center justify-center -my-[1px] relative z-10 group"
              >
                {/* LEFT WING: Exactly (100% - center) / 2 */}
                <div className="flex-1 min-w-0 flex items-center justify-end">
                  {!isEven ? (
                    // ODD ROW: Icon capsule on the left side
                    <div className="w-11 sm:w-20 lg:w-24 h-[68px] sm:h-[80px] lg:h-[88px] rounded-l-full bg-white border-y border-l border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] group-hover:shadow-md transition-all duration-300 flex items-center justify-center shrink-0 pr-1 pl-1.5 sm:pl-2">
                      <Icon
                        className={cn(
                          "w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform duration-300 group-hover:scale-110",
                          pillar.textClass
                        )}
                        strokeWidth={1.8}
                      />
                    </div>
                  ) : (
                    // EVEN ROW: Wide Text capsule on the left side (Right-aligned text)
                    <div className="w-full max-w-[280px] sm:max-w-[420px] lg:max-w-[500px] h-[68px] sm:h-[80px] lg:h-[88px] rounded-l-full bg-white border-y border-l border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] group-hover:shadow-lg transition-all duration-300 flex items-center justify-end pl-2.5 sm:pl-6 lg:pl-7 pr-2 sm:pr-4 lg:pr-5 gap-1 sm:gap-3 text-right">
                      <div className="min-w-0 flex-1 space-y-0.5 sm:space-y-1">
                        <h4
                          className="font-heading text-[11px] sm:text-sm lg:text-base font-black tracking-tight group-hover:text-emerald-700 transition-colors truncate"
                          style={{ color: pillar.color }}
                        >
                          {pillar.title}
                        </h4>
                        <p className="font-body text-[9.5px] sm:text-xs lg:text-[13px] text-slate-600 font-normal leading-tight sm:leading-snug line-clamp-2">
                          {pillar.description}
                        </p>
                      </div>
                      <ChevronLeft
                        className={cn(
                          "w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 transition-transform duration-300 group-hover:-translate-x-1",
                          pillar.textClass
                        )}
                        strokeWidth={2.5}
                      />
                    </div>
                  )}
                </div>

                {/* CENTER SPINE: Rigidly locked at exact 50% horizontal center */}
                <div
                  className={cn(
                    "w-11 sm:w-16 h-[76px] sm:h-[88px] lg:h-[96px] flex items-center justify-center text-white font-black font-heading text-sm sm:text-lg lg:text-xl tracking-wider select-none shadow-md shrink-0 z-20 transition-transform duration-300 group-hover:scale-[1.03]",
                    pillar.bgClass,
                    isFirst && "rounded-t-full",
                    isLast && "rounded-b-full"
                  )}
                >
                  {pillar.numeral}
                </div>

                {/* RIGHT WING: Exactly (100% - center) / 2 */}
                <div className="flex-1 min-w-0 flex items-center justify-start">
                  {!isEven ? (
                    // ODD ROW: Wide Text capsule on the right side (Left-aligned text)
                    <div className="w-full max-w-[280px] sm:max-w-[420px] lg:max-w-[500px] h-[68px] sm:h-[80px] lg:h-[88px] rounded-r-full bg-white border-y border-r border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] group-hover:shadow-lg transition-all duration-300 flex items-center justify-start pr-2.5 sm:pr-6 lg:pr-7 pl-2 sm:pl-4 lg:pl-5 gap-1 sm:gap-3 text-left">
                      <ChevronRight
                        className={cn(
                          "w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1",
                          pillar.textClass
                        )}
                        strokeWidth={2.5}
                      />
                      <div className="min-w-0 flex-1 space-y-0.5 sm:space-y-1">
                        <h4
                          className="font-heading text-[11px] sm:text-sm lg:text-base font-black tracking-tight group-hover:text-emerald-700 transition-colors truncate"
                          style={{ color: pillar.color }}
                        >
                          {pillar.title}
                        </h4>
                        <p className="font-body text-[9.5px] sm:text-xs lg:text-[13px] text-slate-600 font-normal leading-tight sm:leading-snug line-clamp-2">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    // EVEN ROW: Icon capsule on the right side
                    <div className="w-11 sm:w-20 lg:w-24 h-[68px] sm:h-[80px] lg:h-[88px] rounded-r-full bg-white border-y border-r border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] group-hover:shadow-md transition-all duration-300 flex items-center justify-center shrink-0 pl-1 pr-1.5 sm:pr-2">
                      <Icon
                        className={cn(
                          "w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform duration-300 group-hover:scale-110",
                          pillar.textClass
                        )}
                        strokeWidth={1.8}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/languages"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-[#0C9253] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <span>Explore Our Learning Programs</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
