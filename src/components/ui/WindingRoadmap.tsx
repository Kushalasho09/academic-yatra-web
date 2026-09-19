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

export default function WindingRoadmap({
  headingLine1,
  headingLine2,
  subtitle,
  steps,
}: WindingRoadmapProps) {
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#FAFBFB] to-white relative z-10 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 lg:mb-20 gap-4 sm:gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeCurve }}
            className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-snug sm:leading-[1.28] lg:leading-[1.3] tracking-tight max-w-2xl"
          >
            <span className="block mb-1.5 sm:mb-2.5">{headingLine1}</span>
            <span className="text-brand-primary block">{headingLine2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeCurve }}
            className="font-body text-slate-600 text-sm sm:text-base max-w-md leading-relaxed md:pb-1.5"
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
                A 80 80 0 0 1 140 420
                A 80 80 0 0 1 220 500
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
              d="
                M 140 0
                L 140 100
                A 80 80 0 0 0 220 180
                L 680 180
                A 80 80 0 0 1 760 260
                A 80 80 0 0 1 680 340
                L 220 340
                A 80 80 0 0 1 140 420
                A 80 80 0 0 1 220 500
                L 680 500
                A 80 80 0 0 1 760 580
                L 760 680
              "
              stroke="#2E7D72"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Walking Silhouette on the Horizontal Path between Row 2 and 3 */}
            <g transform="translate(435, 308)">
              {/* Silhouette shadow on the line */}
              <ellipse cx="22" cy="32" rx="14" ry="2.5" fill="#1E4D46" opacity="0.45" />
              {/* Person Walking Silhouette */}
              <path
                d="M 20 5 C 22.2 5 24 3.2 24 1 C 24 -1.2 22.2 -3 20 -3 C 17.8 -3 16 -1.2 16 1 C 16 3.2 17.8 5 20 5 Z M 22 7 L 18 7 C 16.5 7 15.5 8 15.5 9.5 L 14 17 L 16 17.5 L 17 12 L 18 19 L 16 31 L 18.5 31.5 L 20.5 21 L 22.5 31.5 L 25 31 L 23 18 L 24.5 12 L 25.5 17.5 L 27.5 17 L 26 9.5 C 26 8 25 7 23.5 7 Z"
                fill="#1E293B"
              />
            </g>
          </svg>

          {/* 4 Alternating Steps Grid */}
          <div className="relative z-10 space-y-7 lg:space-y-8 py-2">
            {steps.map((step, idx) => {
              const Icon = step.icon || DEFAULT_ICONS[idx % DEFAULT_ICONS.length];
              const isEven = idx % 2 === 1; // Step 2 and 4 have circle on right

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
                        {/* Red Circular Disk */}
                        <div className="w-36 h-36 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-[#E04343] via-[#D33434] to-[#B92727] shadow-[0_16px_35px_rgba(211,52,52,0.32)] border-2 border-white flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105">
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
                        {/* Red Circular Disk */}
                        <div className="w-36 h-36 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-[#E04343] via-[#D33434] to-[#B92727] shadow-[0_16px_35px_rgba(211,52,52,0.32)] border-2 border-white flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105">
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
        {/* MOBILE VIEW: Clean Responsive Vertical Path with Same Circles */}
        {/* ============================================================ */}
        <div className="block md:hidden relative">
          {/* Vertical Connecting Track on Left */}
          <div className="absolute left-[39px] top-6 bottom-6 w-1 bg-[#2E7D72] rounded-full" />

          <div className="space-y-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon || DEFAULT_ICONS[idx % DEFAULT_ICONS.length];

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex items-start gap-4"
                >
                  {/* Red Circle Disc */}
                  <div className="shrink-0 relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E04343] via-[#D33434] to-[#B92727] shadow-lg border-2 border-white flex items-center justify-center text-white">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Step Info */}
                  <div className="space-y-1 pt-1 text-left flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading text-lg font-black text-slate-900">
                        {step.number}
                      </span>
                      <h3 className="font-heading text-base font-extrabold text-brand-navy">
                        {step.title}
                      </h3>
                    </div>

                    <div className="text-[11px] font-black text-brand-primary tracking-wider uppercase">
                      {step.tagline}
                    </div>

                    <p className="font-body text-slate-600 text-xs sm:text-sm leading-relaxed font-normal pt-0.5">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
