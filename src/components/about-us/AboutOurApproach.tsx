"use client";

import React from "react";
import { motion } from "framer-motion";

interface ApproachItem {
  id: string;
  number: string;
  title: string;
  description: string;
  badgePosition: "left" | "right";
  colors: {
    badgeBg: string;
    badgeText: string;
    pillTitle: string;
    chainStroke: string;
    accentGlow: string;
  };
}

const APPROACH_ITEMS: ApproachItem[] = [
  {
    id: "01",
    number: "01",
    title: "Know Your Why",
    description: "Every lesson should have a purpose, not just a syllabus slot.",
    badgePosition: "left",
    colors: {
      badgeBg: "#F5A623", // Amber / Warm Yellow from image
      badgeText: "#0F172A",
      pillTitle: "#D97706",
      chainStroke: "#F5A623",
      accentGlow: "rgba(245, 166, 35, 0.35)",
    },
  },
  {
    id: "02",
    number: "02",
    title: "Know Your Next",
    description: "A clear learning path makes it easier to see what comes next.",
    badgePosition: "right",
    colors: {
      badgeBg: "#E65151", // Coral / Red from image
      badgeText: "#FFFFFF",
      pillTitle: "#DC2626",
      chainStroke: "#E65151",
      accentGlow: "rgba(230, 81, 81, 0.35)",
    },
  },
  {
    id: "03",
    number: "03",
    title: "Learn Your Way",
    description: "Join live, revisit recordings, practise when it works for you.",
    badgePosition: "left",
    colors: {
      badgeBg: "#6BA8E5", // Sky / Cornflower Blue from image
      badgeText: "#0F172A",
      pillTitle: "#2563EB",
      chainStroke: "#6BA8E5",
      accentGlow: "rgba(107, 168, 229, 0.35)",
    },
  },
  {
    id: "04",
    number: "04",
    title: "Learn From Feedback",
    description: "Know what’s working, where you’re slipping, and what to work on next.",
    badgePosition: "right",
    colors: {
      badgeBg: "#70CFA9", // Mint / Seafoam Green from image
      badgeText: "#0F172A",
      pillTitle: "#059669",
      chainStroke: "#70CFA9",
      accentGlow: "rgba(112, 207, 169, 0.35)",
    },
  },
];

// SVG Interlocking 3D Chain Link
function InterlockingChain({
  coloredOnLeft,
  color,
  bgColor = "#2548B8",
}: {
  coloredOnLeft: boolean;
  color: string;
  bgColor?: string;
}) {
  // Center coordinates in 120 x 80 viewBox
  const leftCX = 42;
  const rightCX = 78;
  const cy = 40;
  const r = 24;
  const strokeW = 14;

  const leftStroke = coloredOnLeft ? color : "#FFFFFF";
  const rightStroke = coloredOnLeft ? "#FFFFFF" : color;

  return (
    <svg
      className="w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 shrink-0 drop-shadow-md select-none pointer-events-none"
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Subtle depth drop shadow */}
        <filter id={`shadow-${coloredOnLeft ? "l" : "r"}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Layer 1: Left Ring Outer Base */}
      <circle cx={leftCX} cy={cy} r={r} stroke={leftStroke} strokeWidth={strokeW} />

      {/* Layer 2: Right Ring on Top of Left Ring */}
      <circle cx={rightCX} cy={cy} r={r} stroke={rightStroke} strokeWidth={strokeW} />

      {/* Layer 3: Overlapping Arc to Create Physical 3D Interlock */}
      {coloredOnLeft ? (
        // When colored is on the left, its top-right arc is drawn over the white right ring
        <path
          d={`M ${leftCX} ${cy - r} A ${r} ${r} 0 0 1 ${leftCX + r} ${cy}`}
          stroke={color}
          strokeWidth={strokeW}
          strokeLinecap="round"
          filter={`url(#shadow-l)`}
        />
      ) : (
        // When colored is on the right, its top-left arc is drawn over the white left ring
        <path
          d={`M ${rightCX} ${cy - r} A ${r} ${r} 0 0 0 ${rightCX - r} ${cy}`}
          stroke={color}
          strokeWidth={strokeW}
          strokeLinecap="round"
          filter={`url(#shadow-r)`}
        />
      )}

      {/* Inner Holes: revealing the blue background inside each loop */}
      <circle cx={leftCX} cy={cy} r={r - strokeW / 2 - 0.5} fill={bgColor} />
      <circle cx={rightCX} cy={cy} r={r - strokeW / 2 - 0.5} fill={bgColor} />
    </svg>
  );
}

export default function AboutOurApproach() {
  const sectionBg = "#2548B8"; // Vibrant Royal Blue matching reference image

  return (
    <section
      id="our-approach"
      className="relative py-16 sm:py-24 overflow-hidden text-white"
      style={{ backgroundColor: sectionBg }}
    >
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.18]"
          >
            Because Learning Isn't{" "}
            <span className="text-[#6EE7B7] drop-shadow-sm">One-Size-Fits-All.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-3.5 text-blue-100/90 text-sm sm:text-base lg:text-lg leading-relaxed font-normal"
          >
            We keep the system structured, the teaching human, and the learner in control.
          </motion.p>
        </div>

        {/* 4 Interlocking Chain Banners */}
        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {APPROACH_ITEMS.map((item, idx) => {
            const isLeftBadge = item.badgePosition === "left";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex items-center justify-center w-full"
              >
                {/* ============================================================== */}
                {/* VARIANT A: BADGE ON LEFT (Items 01 & 03)                       */}
                {/* ============================================================== */}
                {isLeftBadge ? (
                  <div className="flex items-center w-full">
                    
                    {/* 1. Speech Bubble Badge (Left) */}
                    <div
                      className="relative shrink-0 w-28 sm:w-44 md:w-52 h-20 sm:h-28 md:h-32 rounded-l-[24px] sm:rounded-l-[36px] rounded-r-xl p-3 sm:p-5 flex flex-col justify-center shadow-lg transition-transform duration-300 group-hover:scale-[1.01]"
                      style={{ backgroundColor: item.colors.badgeBg, color: item.colors.badgeText }}
                    >
                      {/* Number */}
                      <span className="font-heading text-2xl sm:text-4xl md:text-5xl font-black leading-none tracking-tight">
                        {item.number}
                      </span>
                      {/* Title */}
                      <span className="font-heading text-[11px] sm:text-sm md:text-base font-extrabold tracking-tight mt-1 leading-tight line-clamp-2">
                        {item.title}
                      </span>

                      {/* Speech Bubble Pointer Tail at Bottom-Left */}
                      <svg
                        className="absolute -bottom-3 sm:-bottom-4 left-3 sm:left-4 w-4 sm:w-6 h-4 sm:h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M0 0 C 0 16 -2 22 -10 24 C -2 22 8 18 8 10 Z"
                          fill={item.colors.badgeBg}
                        />
                      </svg>
                    </div>

                    {/* 2. Interlocking Chain Link */}
                    <div className="relative shrink-0 -mx-4 sm:-mx-7 md:-mx-8 z-20">
                      <InterlockingChain
                        coloredOnLeft={true}
                        color={item.colors.chainStroke}
                        bgColor={sectionBg}
                      />
                    </div>

                    {/* 3. White Pill Content Card (Right) */}
                    <div className="flex-1 h-20 sm:h-28 md:h-32 bg-white rounded-r-[24px] sm:rounded-r-[36px] rounded-l-xl px-4 sm:px-7 md:px-9 py-2.5 sm:py-4 flex flex-col justify-center shadow-lg border border-white/60 transition-transform duration-300 group-hover:scale-[1.01]">
                      {/* Uppercase Header in Accent Color */}
                      <h4
                        className="font-heading text-xs sm:text-sm md:text-base font-black tracking-wide uppercase line-clamp-1"
                        style={{ color: item.colors.pillTitle }}
                      >
                        {item.title}
                      </h4>
                      {/* Description */}
                      <p className="text-slate-600 text-[11px] sm:text-xs md:text-sm font-medium leading-snug sm:leading-relaxed mt-1 sm:mt-1.5 line-clamp-2 sm:line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                  </div>
                ) : (
                  /* ============================================================== */
                  /* VARIANT B: BADGE ON RIGHT (Items 02 & 04)                      */
                  /* ============================================================== */
                  <div className="flex items-center w-full">
                    
                    {/* 1. White Pill Content Card (Left) */}
                    <div className="flex-1 h-20 sm:h-28 md:h-32 bg-white rounded-l-[24px] sm:rounded-l-[36px] rounded-r-xl px-4 sm:px-7 md:px-9 py-2.5 sm:py-4 flex flex-col justify-center text-right sm:text-left shadow-lg border border-white/60 transition-transform duration-300 group-hover:scale-[1.01]">
                      {/* Uppercase Header in Accent Color */}
                      <h4
                        className="font-heading text-xs sm:text-sm md:text-base font-black tracking-wide uppercase line-clamp-1"
                        style={{ color: item.colors.pillTitle }}
                      >
                        {item.title}
                      </h4>
                      {/* Description */}
                      <p className="text-slate-600 text-[11px] sm:text-xs md:text-sm font-medium leading-snug sm:leading-relaxed mt-1 sm:mt-1.5 line-clamp-2 sm:line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {/* 2. Interlocking Chain Link */}
                    <div className="relative shrink-0 -mx-4 sm:-mx-7 md:-mx-8 z-20">
                      <InterlockingChain
                        coloredOnLeft={false}
                        color={item.colors.chainStroke}
                        bgColor={sectionBg}
                      />
                    </div>

                    {/* 3. Speech Bubble Badge (Right) */}
                    <div
                      className="relative shrink-0 w-28 sm:w-44 md:w-52 h-20 sm:h-28 md:h-32 rounded-r-[24px] sm:rounded-r-[36px] rounded-l-xl p-3 sm:p-5 flex flex-col justify-center text-right shadow-lg transition-transform duration-300 group-hover:scale-[1.01]"
                      style={{ backgroundColor: item.colors.badgeBg, color: item.colors.badgeText }}
                    >
                      {/* Number */}
                      <span className="font-heading text-2xl sm:text-4xl md:text-5xl font-black leading-none tracking-tight">
                        {item.number}
                      </span>
                      {/* Title */}
                      <span className="font-heading text-[11px] sm:text-sm md:text-base font-extrabold tracking-tight mt-1 leading-tight line-clamp-2">
                        {item.title}
                      </span>

                      {/* Speech Bubble Pointer Tail at Bottom-Right */}
                      <svg
                        className="absolute -bottom-3 sm:-bottom-4 right-3 sm:right-4 w-4 sm:w-6 h-4 sm:h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M24 0 C 24 16 26 22 34 24 C 26 22 16 18 16 10 Z"
                          fill={item.colors.badgeBg}
                        />
                      </svg>
                    </div>

                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
