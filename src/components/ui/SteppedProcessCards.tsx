"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SteppedProcessCardItem {
  number: number | string;
  pillLabel: string;
  pillTheme?: "green" | "dark";
  cardTheme?: "mint" | "white";
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface SteppedProcessCardsProps {
  items: SteppedProcessCardItem[];
  className?: string;
}

export default function SteppedProcessCards({
  items,
  className,
}: SteppedProcessCardsProps) {
  return (
    <div className={cn("relative w-full py-4", className)}>
      {/* ================================================================= */}
      {/* DESKTOP VIEW (lg:): Staggered Zigzag Layout matching Reference 2 */}
      {/* ================================================================= */}
      <div className="hidden lg:block relative max-w-5xl mx-auto">
        <div className="space-y-6">
          {items.map((item, idx) => {
            const isRightAligned = idx % 2 === 1;
            const Icon = item.icon;
            const isMint = item.cardTheme === "mint";
            const isGreenPill = item.pillTheme === "green";

            return (
              <div key={idx} className="relative">
                {/* Row Container */}
                <div
                  className={cn(
                    "flex items-center",
                    isRightAligned ? "justify-end" : "justify-start"
                  )}
                >
                  {/* Process Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={cn(
                      "relative w-full max-w-[470px] rounded-[24px] p-4 sm:p-5 flex items-start gap-4 transition-all duration-300 hover:shadow-md",
                      isMint
                        ? "bg-[#f2f8f2] border border-[#d8ecd8] shadow-xs"
                        : "bg-white border border-slate-200/90 shadow-sm"
                    )}
                  >
                    {/* Left Vertical Pill Badge */}
                    <div
                      className={cn(
                        "w-8 py-3 rounded-full flex items-center justify-center shrink-0 self-stretch my-0.5",
                        isGreenPill
                          ? "bg-[#0c4a2f] text-emerald-100"
                          : "bg-[#1e293b] text-slate-200"
                      )}
                    >
                      <span
                        className="text-[10px] font-extrabold tracking-wider uppercase select-none whitespace-nowrap"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {item.pillLabel}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="flex-1 min-w-0 pt-0.5">
                      {/* Header: Icon + Numbered Title */}
                      <div className="flex items-center gap-2.5">
                        <div
                          className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                            isMint
                              ? "bg-white text-emerald-700 shadow-xs border border-emerald-100"
                              : "bg-emerald-50 text-emerald-700 border border-emerald-100/60"
                          )}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-heading font-extrabold text-base text-slate-900 tracking-tight leading-snug">
                          <span className="text-emerald-700 mr-1.5">{item.number}</span>
                          {item.title}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5 pl-10">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Connecting Curved Dashed Line to Next Card */}
                {idx < items.length - 1 && (
                  <div
                    className={cn(
                      "absolute -bottom-6 w-[240px] h-[36px] pointer-events-none z-0",
                      isRightAligned
                        ? "left-[320px] -scale-x-100"
                        : "right-[320px]"
                    )}
                  >
                    <svg
                      viewBox="0 0 200 40"
                      fill="none"
                      className="w-full h-full stroke-emerald-400/80"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0 0 C 100 0, 100 40, 200 40"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ================================================================= */}
      {/* MOBILE & TABLET VIEW (< lg:): Staggered Zigzag Flow with Elbow     */}
      {/* Connectors & Downward Arrows (matching Reference 2)              */}
      {/* ================================================================= */}
      <div className="block lg:hidden relative max-w-lg mx-auto px-1 sm:px-3">
        {items.map((item, idx) => {
          const isRightAligned = idx % 2 === 1;
          const Icon = item.icon;
          const isMint = item.cardTheme === "mint";
          const isGreenPill = item.pillTheme === "green";
          const isLast = idx === items.length - 1;

          return (
            <React.Fragment key={idx}>
              {/* Row Container for Zigzag Step Card */}
              <div
                className={cn(
                  "relative flex w-full",
                  isRightAligned ? "justify-end" : "justify-start"
                )}
              >
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className={cn(
                    "relative w-[54%] xs:w-[52%] sm:w-[50%] rounded-[20px] sm:rounded-[24px] p-2.5 sm:p-3.5 flex items-start gap-2 sm:gap-3 transition-all shadow-xs",
                    isMint
                      ? "bg-[#f2f8f2] border border-[#d8ecd8]"
                      : "bg-white border border-slate-200/90"
                  )}
                >
                  {/* Left Vertical Pill Badge */}
                  <div
                    className={cn(
                      "w-5 sm:w-6 py-2 sm:py-2.5 rounded-full flex items-center justify-center shrink-0 self-stretch my-0.5",
                      isGreenPill
                        ? "bg-[#0c4a2f] text-emerald-100"
                        : "bg-[#1e293b] text-slate-200"
                    )}
                  >
                    <span
                      className="text-[7.5px] sm:text-[9px] font-extrabold tracking-wider uppercase select-none whitespace-nowrap"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {item.pillLabel}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    {/* Header: Icon + Numbered Title */}
                    <div className="flex items-start gap-1.5 sm:gap-2">
                      <div
                        className={cn(
                          "w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                          isMint
                            ? "bg-white text-emerald-700 shadow-xs border border-emerald-100"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-100/60"
                        )}
                      >
                        <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </div>
                      <h4 className="font-heading font-extrabold text-[11px] sm:text-xs text-slate-900 tracking-tight leading-snug">
                        <span className="text-emerald-700 mr-1">{item.number}</span>
                        {item.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="font-body text-[9.5px] sm:text-[11px] text-slate-600 leading-snug sm:leading-relaxed mt-1.5">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Dashed Elbow Connector with Arrowhead between Cards */}
              {!isLast && (
                <div className="relative w-full h-9 sm:h-10 pointer-events-none -my-2.5 sm:-my-3 z-0">
                  {!isRightAligned ? (
                    /* Left Card -> Right Card: line goes right, curves down with arrow */
                    <div
                      className="absolute top-2 sm:top-2.5 h-7 sm:h-8 border-t-2 border-r-2 border-dashed border-slate-400/90 rounded-tr-xl"
                      style={{
                        left: "53%",
                        right: "25%",
                      }}
                    >
                      {/* Downward Arrowhead pointing directly into next card */}
                      <div className="absolute -bottom-1 -right-[5px] text-slate-400/90">
                        <svg viewBox="0 0 10 8" className="w-2.5 h-2 fill-current">
                          <path d="M0 0 L10 0 L5 8 Z" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    /* Right Card -> Left Card: line goes left, curves down with arrow */
                    <div
                      className="absolute top-2 sm:top-2.5 h-7 sm:h-8 border-t-2 border-l-2 border-dashed border-slate-400/90 rounded-tl-xl"
                      style={{
                        left: "25%",
                        right: "53%",
                      }}
                    >
                      {/* Downward Arrowhead pointing directly into next card */}
                      <div className="absolute -bottom-1 -left-[5px] text-slate-400/90">
                        <svg viewBox="0 0 10 8" className="w-2.5 h-2 fill-current">
                          <path d="M0 0 L10 0 L5 8 Z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
