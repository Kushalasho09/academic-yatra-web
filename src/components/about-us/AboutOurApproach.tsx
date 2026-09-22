"use client";

import React from "react";
import { motion } from "framer-motion";

interface ApproachItem {
  id: string;
  number: string;
  badgeTitle: string;
  pillTitle: string;
  description: string;
  variant: "left" | "right";
  colors: {
    badge: string;
    badgeHover: string;
    pillTitle: string;
    numberText: string;
    subtitleText: string;
  };
}

const APPROACH_ITEMS: ApproachItem[] = [
  {
    id: "01",
    number: "01",
    badgeTitle: "Know Your Why",
    pillTitle: "KNOW YOUR WHY",
    description: "Every lesson should have a purpose, not just a syllabus slot.",
    variant: "left",
    colors: {
      badge: "#F7A828", // Golden Yellow from reference image
      badgeHover: "#E5981E",
      pillTitle: "#D97706",
      numberText: "#18181B",
      subtitleText: "#FFFFFF",
    },
  },
  {
    id: "02",
    number: "02",
    badgeTitle: "Know Your Next",
    pillTitle: "KNOW YOUR NEXT",
    description: "A clear learning path makes it easier to see what comes next.",
    variant: "right",
    colors: {
      badge: "#EA5455", // Coral Red from reference image
      badgeHover: "#D94344",
      pillTitle: "#DC2626",
      numberText: "#18181B",
      subtitleText: "#FFFFFF",
    },
  },
  {
    id: "03",
    number: "03",
    badgeTitle: "Learn Your Way",
    pillTitle: "LEARN YOUR WAY",
    description: "Join live, revisit recordings, practise when it works for you.",
    variant: "left",
    colors: {
      badge: "#6EA0D6", // Soft Sky / Cornflower Blue from reference image
      badgeHover: "#5B8FC7",
      pillTitle: "#2563EB",
      numberText: "#18181B",
      subtitleText: "#FFFFFF",
    },
  },
  {
    id: "04",
    number: "04",
    badgeTitle: "Learn From Feedback",
    pillTitle: "LEARN FROM FEEDBACK",
    description: "Know what’s working, where you’re slipping, and what to work on next.",
    variant: "right",
    colors: {
      badge: "#74D0A5", // Mint Green from reference image
      badgeHover: "#60BD92",
      pillTitle: "#059669",
      numberText: "#18181B",
      subtitleText: "#FFFFFF",
    },
  },
];

const SECTION_BG = "#294DC6"; // Vibrant Cobalt Blue exactly matching reference image

export default function AboutOurApproach() {
  return (
    <section
      id="our-approach"
      className="relative py-16 sm:py-24 overflow-hidden text-white"
      style={{ backgroundColor: SECTION_BG }}
    >
      {/* Ambient background glow */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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

        {/* 4 Interlocking Chain Banners (Identical to Freepik Reference) */}
        <div className="space-y-6 sm:space-y-8">
          {APPROACH_ITEMS.map((item, idx) => {
            const isLeft = item.variant === "left";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative w-full max-w-4xl mx-auto select-none"
              >
                {/* SVG Canvas defining the exact Freepik interlocking vector geometry */}
                <svg
                  className="w-full h-auto drop-shadow-xl overflow-visible"
                  viewBox="0 0 840 148"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Soft 3D drop shadow for pill and overlapping chain ring */}
                    <filter id={`shadow-${item.id}`} x="-10%" y="-10%" width="120%" height="135%">
                      <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000000" floodOpacity="0.22" />
                    </filter>
                    <filter id={`ring-shadow-${item.id}`} x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.28" />
                    </filter>
                  </defs>

                  {/* ========================================================================= */}
                  {/* VARIANT A: LEFT BADGE -> RIGHT PILL (Items 01 & 03)                       */}
                  {/* ========================================================================= */}
                  {isLeft ? (
                    <>
                      {/* 1. Base Badge Body (Speech Bubble on Left) */}
                      <g>
                        {/* Rounded Badge Body */}
                        <path
                          d="M 52 14 
                             L 220 14 
                             A 54 54 0 0 1 274 68 
                             L 274 72
                             A 54 54 0 0 1 220 126 
                             L 52 126 
                             A 36 36 0 0 1 16 90 
                             L 16 50 
                             A 36 36 0 0 1 52 14 Z"
                          fill={item.colors.badge}
                        />

                        {/* Speech Bubble Tail at Bottom-Left */}
                        <path
                          d="M 28 124 
                             C 24 132 16 142 8 146 
                             C 20 142 32 136 44 125 Z"
                          fill={item.colors.badge}
                        />

                        {/* Full Colored Chain Ring (Center at 270, 70, radius 46, inner 26) */}
                        <circle
                          cx="270"
                          cy="70"
                          r="36"
                          stroke={item.colors.badge}
                          strokeWidth="20"
                        />
                      </g>

                      {/* 2. White Capsule Pill on Right with Drop Shadow */}
                      <g filter={`url(#shadow-${item.id})`}>
                        {/* Capsule body */}
                        <rect
                          x="250"
                          y="18"
                          width="570"
                          height="104"
                          rx="52"
                          fill="#FFFFFF"
                        />

                        {/* Thin gray header accent line inside pill matching Freepik reference */}
                        <line
                          x1="380"
                          y1="34"
                          x2="780"
                          y2="34"
                          stroke="#E2E8F0"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />

                        {/* Circular Hole at Left of White Pill (Center at 326, 70) */}
                        <circle cx="326" cy="70" r="26" fill={SECTION_BG} />
                      </g>

                      {/* 3. 3D Interlocking Overlap */}
                      {/* In Freepik Item 01/03: The bottom arc of the colored ring comes OVER the white pill */}
                      <g filter={`url(#ring-shadow-${item.id})`}>
                        <path
                          d="M 306 70 A 36 36 0 0 1 270 106 A 36 36 0 0 1 240 94"
                          stroke={item.colors.badge}
                          strokeWidth="20"
                          strokeLinecap="round"
                        />
                      </g>

                      {/* Inner Hole for Colored Ring */}
                      <circle cx="270" cy="70" r="26" fill={SECTION_BG} />
                    </>
                  ) : (
                    /* ========================================================================= */
                    /* VARIANT B: LEFT PILL -> RIGHT BADGE (Items 02 & 04)                       */
                    /* ========================================================================= */
                    <>
                      {/* 1. Base Badge Body (Speech Bubble on Right) */}
                      <g>
                        {/* Rounded Badge Body */}
                        <path
                          d="M 788 14 
                             L 620 14 
                             A 54 54 0 0 0 566 68 
                             L 566 72
                             A 54 54 0 0 0 620 126 
                             L 788 126 
                             A 36 36 0 0 0 824 90 
                             L 824 50 
                             A 36 36 0 0 0 788 14 Z"
                          fill={item.colors.badge}
                        />

                        {/* Speech Bubble Tail at Bottom-Right */}
                        <path
                          d="M 812 124 
                             C 816 132 824 142 832 146 
                             C 820 142 808 136 796 125 Z"
                          fill={item.colors.badge}
                        />

                        {/* Full Colored Chain Ring (Center at 570, 70, radius 46, inner 26) */}
                        <circle
                          cx="570"
                          cy="70"
                          r="36"
                          stroke={item.colors.badge}
                          strokeWidth="20"
                        />
                      </g>

                      {/* 2. White Capsule Pill on Left with Drop Shadow */}
                      <g filter={`url(#shadow-${item.id})`}>
                        {/* Capsule body */}
                        <rect
                          x="20"
                          y="18"
                          width="570"
                          height="104"
                          rx="52"
                          fill="#FFFFFF"
                        />

                        {/* Thin gray header accent line inside pill */}
                        <line
                          x1="60"
                          y1="34"
                          x2="460"
                          y2="34"
                          stroke="#E2E8F0"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />

                        {/* Circular Hole at Right of White Pill (Center at 514, 70) */}
                        <circle cx="514" cy="70" r="26" fill={SECTION_BG} />
                      </g>

                      {/* 3. 3D Interlocking Overlap */}
                      {/* In Freepik Item 02/04: The top arc of the colored ring comes OVER the white pill */}
                      <g filter={`url(#ring-shadow-${item.id})`}>
                        <path
                          d="M 534 70 A 36 36 0 0 1 570 34 A 36 36 0 0 1 600 46"
                          stroke={item.colors.badge}
                          strokeWidth="20"
                          strokeLinecap="round"
                        />
                      </g>

                      {/* Inner Hole for Colored Ring */}
                      <circle cx="570" cy="70" r="26" fill={SECTION_BG} />
                    </>
                  )}
                </svg>

                {/* HTML Typography Overlay (Crisp, perfectly legible on mobile & desktop) */}
                {isLeft ? (
                  <>
                    {/* Badge Text (Left) */}
                    <div className="absolute left-[3.5%] sm:left-[4%] top-[14%] bottom-[16%] w-[22%] sm:w-[24%] flex flex-col justify-center pointer-events-none">
                      <span
                        className="font-heading text-2xl sm:text-4xl md:text-5xl font-black leading-none tracking-tight"
                        style={{ color: item.colors.numberText }}
                      >
                        {item.number}
                      </span>
                      <span
                        className="font-heading text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold tracking-tight mt-0.5 sm:mt-1.5 leading-tight line-clamp-1 drop-shadow-xs"
                        style={{ color: item.colors.subtitleText }}
                      >
                        {item.badgeTitle}
                      </span>
                    </div>

                    {/* Pill Text (Right) */}
                    <div className="absolute left-[44%] sm:left-[43%] right-[4%] sm:right-[6%] top-[14%] bottom-[16%] flex flex-col justify-center pointer-events-none">
                      <h4
                        className="font-heading text-[10px] sm:text-xs md:text-sm lg:text-base font-black tracking-wide uppercase line-clamp-1"
                        style={{ color: item.colors.pillTitle }}
                      >
                        {item.pillTitle}
                      </h4>
                      <p className="text-slate-600 text-[9px] sm:text-xs md:text-sm font-medium leading-snug sm:leading-relaxed mt-0.5 sm:mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Pill Text (Left) */}
                    <div className="absolute left-[5%] sm:left-[7%] right-[44%] sm:right-[43%] top-[14%] bottom-[16%] flex flex-col justify-center text-right sm:text-left pointer-events-none">
                      <h4
                        className="font-heading text-[10px] sm:text-xs md:text-sm lg:text-base font-black tracking-wide uppercase line-clamp-1"
                        style={{ color: item.colors.pillTitle }}
                      >
                        {item.pillTitle}
                      </h4>
                      <p className="text-slate-600 text-[9px] sm:text-xs md:text-sm font-medium leading-snug sm:leading-relaxed mt-0.5 sm:mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Badge Text (Right) */}
                    <div className="absolute right-[3.5%] sm:right-[4%] top-[14%] bottom-[16%] w-[22%] sm:w-[24%] flex flex-col justify-center items-end text-right pointer-events-none">
                      <span
                        className="font-heading text-2xl sm:text-4xl md:text-5xl font-black leading-none tracking-tight"
                        style={{ color: item.colors.numberText }}
                      >
                        {item.number}
                      </span>
                      <span
                        className="font-heading text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold tracking-tight mt-0.5 sm:mt-1.5 leading-tight line-clamp-1 drop-shadow-xs"
                        style={{ color: item.colors.subtitleText }}
                      >
                        {item.badgeTitle}
                      </span>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
