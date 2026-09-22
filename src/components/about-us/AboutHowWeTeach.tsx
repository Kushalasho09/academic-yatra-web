"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StepItem {
  number: string;
  label: string;
  description: string;
  accentGlow: string;
  accentColor: string;
  iconType: "megaphone" | "calendar" | "card" | "cart";
}

const STEPS: StepItem[] = [
  {
    number: "Step 01",
    label: "LEARN",
    description: "Live instructor-led classes + structured course material",
    accentGlow:
      "radial-gradient(circle, rgba(96, 165, 250, 0.75) 0%, rgba(147, 197, 253, 0.45) 38%, rgba(219, 234, 254, 0.15) 68%, transparent 78%)",
    accentColor: "#3B82F6",
    iconType: "megaphone",
  },
  {
    number: "Step 02",
    label: "PRACTISE",
    description: "Assignments, exercises, practice tests & mocks",
    accentGlow:
      "radial-gradient(circle, rgba(168, 85, 247, 0.7) 0%, rgba(192, 132, 252, 0.4) 38%, rgba(243, 232, 255, 0.15) 68%, transparent 78%)",
    accentColor: "#A855F7",
    iconType: "calendar",
  },
  {
    number: "Step 03",
    label: "TRACK",
    description: "Performance, course progress & improvement trends",
    accentGlow:
      "radial-gradient(circle, rgba(248, 113, 113, 0.75) 0%, rgba(252, 165, 165, 0.42) 38%, rgba(254, 226, 226, 0.15) 68%, transparent 78%)",
    accentColor: "#EF4444",
    iconType: "card",
  },
  {
    number: "Step 04",
    label: "IMPROVE",
    description: "Use feedback and recorded sessions to work on what's next",
    accentGlow:
      "radial-gradient(circle, rgba(251, 146, 60, 0.75) 0%, rgba(253, 186, 116, 0.42) 38%, rgba(255, 237, 213, 0.15) 68%, transparent 78%)",
    accentColor: "#F97316",
    iconType: "cart",
  },
];

// Exact outline vector icons with pastel coral fill matching the reference image
function StepIcon({ type }: { type: StepItem["iconType"] }) {
  if (type === "megaphone") {
    return (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 11 18-5v12L3 14v-3z" fill="#FCA5A5" fillOpacity="0.5" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          width="18"
          height="18"
          x="3"
          y="4"
          rx="2"
          fill="#FCA5A5"
          fillOpacity="0.45"
        />
        <path d="M3 10h18" strokeWidth="1.8" />
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <circle cx="8" cy="14" r="1" fill="currentColor" />
        <circle cx="12" cy="14" r="1" fill="currentColor" />
        <circle cx="16" cy="14" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (type === "card") {
    return (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          width="20"
          height="14"
          x="2"
          y="5"
          rx="2"
          fill="#FCA5A5"
          fillOpacity="0.5"
        />
        <line x1="2" x2="22" y1="10" y2="10" strokeWidth="1.8" />
      </svg>
    );
  }

  // Cart
  return (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" fill="currentColor" />
      <circle cx="19" cy="21" r="1" fill="currentColor" />
      <path
        d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
        fill="#FCA5A5"
        fillOpacity="0.45"
      />
    </svg>
  );
}

export default function AboutHowWeTeach() {
  return (
    <section
      id="how-we-teach"
      className="pt-4 sm:pt-6 pb-16 sm:pb-20 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section (Badge Pill Removed as requested in Image 3) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black text-slate-900 tracking-tight leading-[1.18]"
          >
            Not Just More Classes. <br className="hidden sm:inline" />
            <span className="text-[#0C9253]">A Better Learning Loop.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal"
          >
            A continuous four-phase feedback loop designed to move students from core concepts to verified fluency, peak exam scores, and career competence.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (md+): 100% Mathematically Centered Dotted Connectors & Nodes */}
        {/* ========================================================================= */}
        <div className="hidden md:block max-w-7xl mx-auto">
          
          {/* Row 1: Circles & Direct Connecting Dotted Arrows (Aligned on Same Horizontal Y-Centerline) */}
          <div className="flex items-center justify-between w-full">
            {STEPS.map((step, idx) => {
              const isLast = idx === STEPS.length - 1;

              return (
                <React.Fragment key={step.number}>
                  {/* Node: Icon + Glow Circle + Center Dot */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.1 }}
                    className="flex flex-col items-center shrink-0 group"
                  >
                    {/* Icon above circle */}
                    <div className="h-9 flex items-center justify-center mb-1 group-hover:-translate-y-1 transition-transform duration-300">
                      <StepIcon type={step.iconType} />
                    </div>

                    {/* Radial Glow Circle with perfectly centered dot */}
                    <div className="relative w-28 h-28 lg:w-36 lg:h-36 flex items-center justify-center">
                      <div
                        className="absolute inset-0 rounded-full transition-transform duration-500 group-hover:scale-105"
                        style={{ background: step.accentGlow }}
                      />

                      {/* Center Dot with Dark Ring */}
                      <div className="relative z-10 w-3.5 h-3.5 rounded-full bg-white border-2 border-slate-900 shadow-sm transition-transform duration-300 group-hover:scale-125" />
                    </div>
                  </motion.div>

                  {/* Connecting Dotted Arrow between Nodes */}
                  {!isLast && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: idx * 0.12 }}
                      className="flex-1 flex items-center justify-center px-1 lg:px-2 pt-10"
                    >
                      <div className="w-full relative flex items-center">
                        {/* Dotted line spanning exactly between the circles */}
                        <div className="w-full border-t-[1.8px] border-dotted border-slate-800" />
                        
                        {/* Arrowhead pointing directly at the next node */}
                        <svg
                          className="w-2.5 h-2.5 text-slate-800 shrink-0 absolute right-0 -top-[4px]"
                          viewBox="0 0 10 10"
                          fill="currentColor"
                        >
                          <path d="M0 1.5 L7 5 L0 8.5 z" />
                        </svg>
                      </div>
                    </motion.div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Row 2: Text Descriptions Exactly Under Each Step Node */}
          <div className="grid grid-cols-4 gap-4 mt-6 text-center">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.12 }}
                className="space-y-1 px-1 sm:px-2"
              >
                <h4 className="font-heading text-lg font-bold text-slate-900 tracking-tight">
                  {step.number}
                </h4>

                <div
                  className="text-xs font-black tracking-wider uppercase font-heading"
                  style={{ color: step.accentColor }}
                >
                  {step.label}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1 max-w-[210px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW (< md): Clean Connected Step Cards without Text Overlaps       */}
        {/* ========================================================================= */}
        <div className="block md:hidden max-w-sm mx-auto">
          {STEPS.map((step, idx) => {
            const isLast = idx === STEPS.length - 1;

            return (
              <React.Fragment key={step.number}>
                {/* Step Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.05 }}
                  className="flex flex-col items-center text-center bg-white rounded-2xl p-6 border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] relative"
                >
                  {/* Icon Badge */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 shadow-xs"
                    style={{ backgroundColor: `${step.accentColor}14` }}
                  >
                    <StepIcon type={step.iconType} />
                  </div>

                  {/* Radial Glow Circle with Centered Target Dot */}
                  <div className="relative w-24 h-24 flex items-center justify-center my-2">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{ background: step.accentGlow }}
                    />
                    <div className="relative z-10 w-4 h-4 rounded-full bg-white border-2 border-slate-900 shadow-sm" />
                  </div>

                  {/* Step Info */}
                  <div className="mt-3 space-y-1 w-full">
                    <h4 className="font-heading text-base font-bold text-slate-900 tracking-tight">
                      {step.number}
                    </h4>
                    <div
                      className="text-xs font-black tracking-wider uppercase font-heading"
                      style={{ color: step.accentColor }}
                    >
                      {step.label}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-[260px] mx-auto pt-1 font-normal">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Connecting Dotted Arrow Flow (Between Cards Only) */}
                {!isLast && (
                  <div className="flex flex-col items-center justify-center py-2.5">
                    <div className="h-4 w-0 border-r-2 border-dashed border-slate-300" />
                    <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 shadow-xs my-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-slate-600"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 2v8" />
                        <path d="M3 7l3 3 3-3" />
                      </svg>
                    </div>
                    <div className="h-4 w-0 border-r-2 border-dashed border-slate-300" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}
