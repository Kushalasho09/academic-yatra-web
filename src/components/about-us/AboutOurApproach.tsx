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
    pillTitle: string;
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
      badge: "#F7A828", // Warm Golden Yellow from Freepik
      pillTitle: "#D97706",
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
      badge: "#EA5455", // Coral Red from Freepik
      pillTitle: "#DC2626",
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
      badge: "#6EA0D6", // Soft Sky / Cornflower Blue from Freepik
      pillTitle: "#2563EB",
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
      badge: "#74D0A5", // Mint Green from Freepik
      pillTitle: "#059669",
    },
  },
];

const SECTION_BG = "#294DC6"; // Deep Cobalt Blue matching Freepik background

export default function AboutOurApproach() {
  return (
    <section
      id="our-approach"
      className="relative py-16 sm:py-24 overflow-hidden text-white"
      style={{ backgroundColor: SECTION_BG }}
    >
      {/* Ambient background soft glow */}
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

        {/* 4 Interlocking Chain Banners */}
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
                {/* SVG Vector Canvas: Real compound paths with genuine transparent holes */}
                <svg
                  className="w-full h-auto drop-shadow-2xl overflow-visible"
                  viewBox="0 0 840 148"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <filter id={`pill-shadow-${item.id}`} x="-10%" y="-10%" width="120%" height="135%">
                      <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#000000" floodOpacity="0.22" />
                    </filter>
                    <filter id={`arc-shadow-${item.id}`} x="-25%" y="-25%" width="150%" height="150%">
                      <feDropShadow dx="-1" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.28" />
                    </filter>
                  </defs>

                  {isLeft ? (
                    /* ========================================================================= */
                    /* VARIANT A: LEFT BADGE -> RIGHT PILL (Items 01 & 03)                       */
                    /* ========================================================================= */
                    <>
                      {/* 1. Base Badge with real punched-out hole */}
                      <path
                        d="M 56 20
                           L 240 20
                           A 50 50 0 0 1 290 70
                           A 50 50 0 0 1 240 120
                           L 48 120
                           C 40 126 28 138 18 144
                           C 24 136 28 124 28 114
                           L 24 100
                           L 24 52
                           A 32 32 0 0 1 56 20 Z
                           M 240 42
                           A 28 28 0 0 0 240 98
                           A 28 28 0 0 0 240 42 Z"
                        fillRule="evenodd"
                        fill={item.colors.badge}
                      />

                      {/* 2. White Pill with real punched-out hole */}
                      <path
                        filter={`url(#pill-shadow-${item.id})`}
                        d="M 286 20
                           L 760 20
                           A 50 50 0 0 1 810 70
                           A 50 50 0 0 1 760 120
                           L 286 120
                           A 50 50 0 0 1 236 70
                           A 50 50 0 0 1 286 20 Z
                           M 286 42
                           A 28 28 0 0 0 286 98
                           A 28 28 0 0 0 286 42 Z"
                        fillRule="evenodd"
                        fill="#FFFFFF"
                      />

                      {/* Thin gray header accent line inside white pill */}
                      <line
                        x1="360"
                        y1="36"
                        x2="760"
                        y2="36"
                        stroke="#E2E8F0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />

                      {/* 3. Overlapping Colored Bottom Arc (Physical 3D Interlock) */}
                      <path
                        filter={`url(#arc-shadow-${item.id})`}
                        d="M 289.2 78.7
                           A 50 50 0 0 1 227.1 118.3
                           L 232.7 97.0
                           A 28 28 0 0 0 267.6 74.9 Z"
                        fill={item.colors.badge}
                      />
                    </>
                  ) : (
                    /* ========================================================================= */
                    /* VARIANT B: LEFT PILL -> RIGHT BADGE (Items 02 & 04)                       */
                    /* ========================================================================= */
                    <>
                      {/* 1. Base Badge with real punched-out hole */}
                      <path
                        d="M 784 20
                           L 600 20
                           A 50 50 0 0 0 550 70
                           A 50 50 0 0 0 600 120
                           L 792 120
                           C 800 126 812 138 822 144
                           C 816 136 812 124 812 114
                           L 816 100
                           L 816 52
                           A 32 32 0 0 0 784 20 Z
                           M 600 42
                           A 28 28 0 0 1 600 98
                           A 28 28 0 0 1 600 42 Z"
                        fillRule="evenodd"
                        fill={item.colors.badge}
                      />

                      {/* 2. White Pill with real punched-out hole */}
                      <path
                        filter={`url(#pill-shadow-${item.id})`}
                        d="M 554 20
                           L 80 20
                           A 50 50 0 0 0 30 70
                           A 50 50 0 0 0 80 120
                           L 554 120
                           A 50 50 0 0 0 604 70
                           A 50 50 0 0 0 554 20 Z
                           M 554 42
                           A 28 28 0 0 1 554 98
                           A 28 28 0 0 1 554 42 Z"
                        fillRule="evenodd"
                        fill="#FFFFFF"
                      />

                      {/* Thin gray header accent line inside white pill */}
                      <line
                        x1="80"
                        y1="36"
                        x2="480"
                        y2="36"
                        stroke="#E2E8F0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />

                      {/* 3. Overlapping Colored Top Arc (Physical 3D Interlock) */}
                      <path
                        filter={`url(#arc-shadow-${item.id})`}
                        d="M 550.8 61.3
                           A 50 50 0 0 1 612.9 21.7
                           L 607.3 43.0
                           A 28 28 0 0 0 572.4 65.1 Z"
                        fill={item.colors.badge}
                      />
                    </>
                  )}
                </svg>

                {/* HTML Typography Overlay (Crisp, perfectly positioned over badge and pill) */}
                {isLeft ? (
                  <>
                    {/* Badge Text (Left) */}
                    <div className="absolute left-[3%] sm:left-[4%] top-[14%] bottom-[16%] w-[21%] sm:w-[22%] flex flex-col justify-center items-center text-center pointer-events-none">
                      <span className="font-heading text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-none tracking-tight">
                        {item.number}
                      </span>
                      <span className="font-heading text-[10px] sm:text-xs md:text-sm font-extrabold text-white mt-1 leading-tight line-clamp-1 drop-shadow-xs">
                        {item.badgeTitle}
                      </span>
                    </div>

                    {/* Pill Text (Right) */}
                    <div className="absolute left-[41%] sm:left-[40%] right-[4%] sm:right-[6%] top-[14%] bottom-[16%] flex flex-col justify-center pointer-events-none">
                      <h4
                        className="font-heading text-xs sm:text-sm md:text-base font-black tracking-wide uppercase line-clamp-1"
                        style={{ color: item.colors.pillTitle }}
                      >
                        {item.pillTitle}
                      </h4>
                      <p className="text-slate-600 text-[10px] sm:text-xs md:text-sm font-medium leading-snug sm:leading-relaxed mt-0.5 sm:mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Pill Text (Left) */}
                    <div className="absolute left-[5%] sm:left-[7%] right-[41%] sm:right-[40%] top-[14%] bottom-[16%] flex flex-col justify-center text-right sm:text-left pointer-events-none">
                      <h4
                        className="font-heading text-xs sm:text-sm md:text-base font-black tracking-wide uppercase line-clamp-1"
                        style={{ color: item.colors.pillTitle }}
                      >
                        {item.pillTitle}
                      </h4>
                      <p className="text-slate-600 text-[10px] sm:text-xs md:text-sm font-medium leading-snug sm:leading-relaxed mt-0.5 sm:mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Badge Text (Right) */}
                    <div className="absolute right-[3%] sm:right-[4%] top-[14%] bottom-[16%] w-[21%] sm:w-[22%] flex flex-col justify-center items-center text-center pointer-events-none">
                      <span className="font-heading text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-none tracking-tight">
                        {item.number}
                      </span>
                      <span className="font-heading text-[10px] sm:text-xs md:text-sm font-extrabold text-white mt-1 leading-tight line-clamp-1 drop-shadow-xs">
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
