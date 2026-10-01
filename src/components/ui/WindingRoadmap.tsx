"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Compass,
  TrendingUp,
  Target,
  BookOpen,
  Users,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface WindingStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon?: React.ElementType;
}

export interface WindingRoadmapProps {
  headingLine1: string;
  headingLine2: string;
  subtitle: string;
  steps: WindingStep[];
}

const DEFAULT_ICONS = [GraduationCap, Sparkles, Compass, TrendingUp];

const STEP_THEMES = [
  {
    bgGradient: "from-[#2563EB] via-[#1D4ED8] to-[#1E40AF]",
    shadow: "shadow-[0_16px_35px_rgba(37,99,235,0.35)]",
    mobileShadow: "shadow-[0_10px_22px_rgba(37,99,235,0.32)]",
    ringBorder: "border-blue-500/30",
  },
  {
    bgGradient: "from-[#10B981] via-[#0C9253] to-[#047857]",
    shadow: "shadow-[0_16px_35px_rgba(12,146,83,0.35)]",
    mobileShadow: "shadow-[0_10px_22px_rgba(12,146,83,0.32)]",
    ringBorder: "border-emerald-500/30",
  },
  {
    bgGradient: "from-[#F59E0B] via-[#EA580C] to-[#C2410C]",
    shadow: "shadow-[0_16px_35px_rgba(234,88,12,0.35)]",
    mobileShadow: "shadow-[0_10px_22px_rgba(234,88,12,0.32)]",
    ringBorder: "border-orange-500/30",
  },
  {
    bgGradient: "from-[#A855F7] via-[#8B5CF6] to-[#7C3AED]",
    shadow: "shadow-[0_16px_35px_rgba(139,92,246,0.35)]",
    mobileShadow: "shadow-[0_10px_22px_rgba(139,92,246,0.32)]",
    ringBorder: "border-purple-500/30",
  },
];

export default function WindingRoadmap({
  headingLine1,
  headingLine2,
  subtitle,
  steps,
}: WindingRoadmapProps) {
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <section className="py-8 sm:py-14 lg:py-16 bg-gradient-to-b from-white via-[#FAFBFB] to-white relative z-10 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 lg:mb-14 gap-3 sm:gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeCurve }}
            className="font-heading text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-snug sm:leading-[1.28] lg:leading-[1.3] tracking-tight max-w-2xl"
          >
            <span className="block mb-1.5 sm:mb-2.5">{headingLine1}</span>
            <span className="text-brand-primary block">{headingLine2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeCurve }}
            className="font-body text-slate-600 text-xs sm:text-base max-w-md leading-relaxed md:pb-1.5"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP VIEW: Continuous Serpentine Road & Alternating Circles */}
        {/* ============================================================ */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          {/* Background Serpentine SVG Track */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 900 680"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Soft shadow / glow path */}
            <path
              d="
                M 140 0
                L 140 100
                A 80 80 0 0 0 220 180
                L 680 180
                A 80 80 0 0 1 760 260
                A 80 80 0 0 1 680 340
                L 220 340
                A 80 80 0 0 0 140 420
                A 80 80 0 0 0 220 500
                L 680 500
                A 80 80 0 0 1 760 580
                L 760 680
              "
              stroke="#2E7D72"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-15 blur-[2px]"
            />

            {/* Main Crisp Teal Connecting Road */}
            <path
              id="desktopRoadmapPath"
              d="
                M 140 0
                L 140 100
                A 80 80 0 0 0 220 180
                L 680 180
                A 80 80 0 0 1 760 260
                A 80 80 0 0 1 680 340
                L 220 340
                A 80 80 0 0 0 140 420
                A 80 80 0 0 0 220 500
                L 680 500
                A 80 80 0 0 1 760 580
                L 760 680
              "
              stroke="#2E7D72"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* 4 Alternating Steps Grid */}
          <div className="relative z-10 space-y-7 lg:space-y-8 py-2">
            {steps.map((step, idx) => {
              const Icon = step.icon || DEFAULT_ICONS[idx % DEFAULT_ICONS.length];
              const isEven = idx % 2 === 1; // Step 2 and 4 have circle on right
              const theme = STEP_THEMES[idx % STEP_THEMES.length];

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: easeCurve }}
                  className="grid grid-cols-12 items-center min-h-[148px]"
                >
                  {/* LEFT COLUMN: Circle (if odd) or Text (if even) */}
                  {!isEven ? (
                    // Step 1 & 3: Circle on Left (Cols 1-4)
                    <div className="col-span-4 flex justify-center pl-4 lg:pl-8">
                      <div className="relative group">
                        {/* Multi-color Circular Disk */}
                        <div
                          className={cn(
                            "w-36 h-36 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br border-2 border-white flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105",
                            theme.bgGradient,
                            theme.shadow
                          )}
                        >
                          {/* Inner subtle glow ring */}
                          <div className="absolute inset-2 rounded-full border border-white/25 pointer-events-none" />
                          <Icon className="w-12 h-12 lg:w-14 lg:h-14 text-white/95 drop-shadow-md stroke-[1.8]" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Step 2 & 4: Text Content on Left (Cols 1-8)
                    <div className="col-span-8 pr-8 lg:pr-14 text-left">
                      <div className="space-y-1.5">
                        <div className="flex items-baseline gap-2.5">
                          <span className="font-heading text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                            {step.number}
                          </span>
                          <h3 className="font-heading text-xl lg:text-2xl font-black text-brand-navy tracking-tight">
                            {step.title}
                          </h3>
                        </div>

                        <div className="text-xs font-black text-brand-primary tracking-wider uppercase">
                          {step.tagline}
                        </div>

                        <p className="font-body text-slate-600 text-sm lg:text-[15px] leading-relaxed max-w-lg font-normal pt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* RIGHT COLUMN: Text (if odd) or Circle (if even) */}
                  {!isEven ? (
                    // Step 1 & 3: Text Content on Right (Cols 5-12)
                    <div className="col-span-8 pl-8 lg:pl-14 text-left">
                      <div className="space-y-1.5">
                        <div className="flex items-baseline gap-2.5">
                          <span className="font-heading text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                            {step.number}
                          </span>
                          <h3 className="font-heading text-xl lg:text-2xl font-black text-brand-navy tracking-tight">
                            {step.title}
                          </h3>
                        </div>

                        <div className="text-xs font-black text-brand-primary tracking-wider uppercase">
                          {step.tagline}
                        </div>

                        <p className="font-body text-slate-600 text-sm lg:text-[15px] leading-relaxed max-w-lg font-normal pt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    // Step 2 & 4: Circle on Right (Cols 9-12)
                    <div className="col-span-4 flex justify-center pr-4 lg:pr-8">
                      <div className="relative group">
                        {/* Multi-color Circular Disk */}
                        <div
                          className={cn(
                            "w-36 h-36 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br border-2 border-white flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105",
                            theme.bgGradient,
                            theme.shadow
                          )}
                        >
                          {/* Inner subtle glow ring */}
                          <div className="absolute inset-2 rounded-full border border-white/25 pointer-events-none" />
                          <Icon className="w-12 h-12 lg:w-14 lg:h-14 text-white/95 drop-shadow-md stroke-[1.8]" />
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* MOBILE VIEW: Alternating Serpentine Road (Light Brand Theme)  */}
        {/* ============================================================ */}
        <div className="block md:hidden relative w-full max-w-[360px] mx-auto text-slate-800">
          {/* Continuous Serpentine SVG Road mathematically centered on each circle */}
          <svg
            className="absolute inset-0 w-full h-[600px] pointer-events-none z-0"
            viewBox="0 0 360 600"
            fill="none"
          >
            {/* Soft Shadow / Glow Path */}
            <path
              d="
                M 312 31
                A 44 44 0 0 1 356 75
                A 44 44 0 0 1 312 119
                A 31 31 0 0 1 281 150
                L 79 150
                A 31 31 0 0 0 48 181
                A 44 44 0 0 0 4 225
                A 44 44 0 0 0 48 269
                A 31 31 0 0 0 79 300
                L 281 300
                A 31 31 0 0 1 312 331
                A 44 44 0 0 1 356 375
                A 44 44 0 0 1 312 419
                A 31 31 0 0 1 281 450
                L 79 450
                A 31 31 0 0 0 48 481
                A 44 44 0 0 0 4 525
                A 44 44 0 0 0 48 569
                A 31 31 0 0 0 95 600
              "
              stroke="#2E7D72"
              strokeWidth="8"
              className="opacity-15 blur-[2px]"
            />

            {/* Main Crisp Teal Connecting Road */}
            <path
              id="mobileRoadmapPath"
              d="
                M 312 31
                A 44 44 0 0 1 356 75
                A 44 44 0 0 1 312 119
                A 31 31 0 0 1 281 150
                L 79 150
                A 31 31 0 0 0 48 181
                A 44 44 0 0 0 4 225
                A 44 44 0 0 0 48 269
                A 31 31 0 0 0 79 300
                L 281 300
                A 31 31 0 0 1 312 331
                A 44 44 0 0 1 356 375
                A 44 44 0 0 1 312 419
                A 31 31 0 0 1 281 450
                L 79 450
                A 31 31 0 0 0 48 481
                A 44 44 0 0 0 4 525
                A 44 44 0 0 0 48 569
                A 31 31 0 0 0 95 600
              "
              stroke="#2E7D72"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* 4 Alternating Mobile Step Rows */}
          <div className="relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon || DEFAULT_ICONS[idx % DEFAULT_ICONS.length];
              const isCircleRight = idx % 2 === 0; // Steps 1 & 3: Circle on right, Steps 2 & 4: Circle on left
              const actionLabels = ["STUDY", "PRACTICE", "FLEXIBLE", "GROW"];
              const actionLabel = actionLabels[idx % actionLabels.length];
              const theme = STEP_THEMES[idx % STEP_THEMES.length];

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="relative h-[150px] flex items-center"
                >
                  {/* Text Content */}
                  <div
                    className={cn(
                      "text-left flex flex-col justify-center",
                      isCircleRight ? "pr-[96px] pl-2" : "pl-[96px] pr-2"
                    )}
                  >
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-heading text-lg font-black text-slate-900 tracking-tight">
                        {step.number}
                      </span>
                      <h4 className="font-heading font-extrabold text-sm sm:text-base text-brand-navy leading-snug">
                        {step.title}
                      </h4>
                    </div>

                    <div className="text-[10px] font-black text-brand-primary tracking-wider uppercase mt-0.5">
                      {step.tagline}
                    </div>

                    <p className="font-body text-slate-600 text-[11px] sm:text-xs leading-relaxed mt-1 line-clamp-3">
                      {step.description}
                    </p>
                  </div>

                  {/* Circular Node centered exactly at (48, 75) or (312, 75) */}
                  <div
                    className={cn(
                      "absolute top-[39px] w-[72px] h-[72px] flex items-center justify-center shrink-0",
                      isCircleRight ? "right-[12px]" : "left-[12px]"
                    )}
                  >
                    {/* Outer subtle concentric ring */}
                    <div
                      className={cn(
                        "w-[72px] h-[72px] rounded-full p-1 border-2 flex items-center justify-center bg-white/50 backdrop-blur-xs",
                        theme.ringBorder
                      )}
                    >
                      {/* Multi-color Circular Disk */}
                      <div
                        className={cn(
                          "w-full h-full rounded-full bg-gradient-to-br border-2 border-white flex flex-col items-center justify-center text-white",
                          theme.bgGradient,
                          theme.mobileShadow
                        )}
                      >
                        <Icon className="w-5 h-5 text-white drop-shadow stroke-[1.8]" />
                        <span className="text-[7px] font-black uppercase tracking-wider text-white/90 mt-0.5 select-none">
                          {actionLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Reference Quote Tagline at Bottom */}
          <div className="mt-4 pt-2 text-right">
            <p className="font-serif italic text-xs sm:text-sm text-slate-500 tracking-wide">
              Wherever you’re starting, there’s a Yatra for it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
