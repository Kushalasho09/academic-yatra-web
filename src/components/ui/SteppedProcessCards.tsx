"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type SteppedCardTheme =
  | "emerald"
  | "blue"
  | "navy"
  | "amber"
  | "purple"
  | "teal";

export interface SteppedProcessCardItem {
  number: number | string;
  pillLabel: string;
  theme?: SteppedCardTheme;
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

interface ThemeConfig {
  pillBg: string;
  pillText: string;
  pillRing: string;
  cardBg: string;
  cardBorder: string;
  cardHoverBorder: string;
  cardShadow: string;
  iconBg: string;
  iconText: string;
  numberText: string;
  lineStroke: string;
  lineBorder: string;
  arrowFill: string;
}

const THEME_CONFIG: Record<SteppedCardTheme, ThemeConfig> = {
  emerald: {
    pillBg: "bg-[#064e3b]", // High dark shade of brand emerald
    pillText: "text-emerald-200",
    pillRing: "ring-1 ring-emerald-500/30",
    cardBg: "bg-gradient-to-br from-emerald-50/90 via-white to-emerald-50/30",
    cardBorder: "border-emerald-200/90",
    cardHoverBorder: "hover:border-emerald-400",
    cardShadow: "shadow-xs hover:shadow-xl hover:shadow-emerald-500/10",
    iconBg: "bg-[#0C9253] text-white shadow-xs shadow-emerald-600/30",
    iconText: "text-white",
    numberText: "text-emerald-700",
    lineStroke: "stroke-emerald-500/80",
    lineBorder: "border-emerald-400/90",
    arrowFill: "text-emerald-600/90",
  },
  blue: {
    pillBg: "bg-[#083366]", // High dark shade of brand royal blue
    pillText: "text-sky-200",
    pillRing: "ring-1 ring-sky-500/30",
    cardBg: "bg-gradient-to-br from-sky-50/90 via-white to-blue-50/30",
    cardBorder: "border-blue-200/90",
    cardHoverBorder: "hover:border-blue-400",
    cardShadow: "shadow-xs hover:shadow-xl hover:shadow-blue-500/10",
    iconBg: "bg-[#0067E3] text-white shadow-xs shadow-blue-600/30",
    iconText: "text-white",
    numberText: "text-[#0067E3]",
    lineStroke: "stroke-blue-500/80",
    lineBorder: "border-blue-400/90",
    arrowFill: "text-blue-600/90",
  },
  navy: {
    pillBg: "bg-[#122447]", // High dark shade of brand deep navy
    pillText: "text-indigo-200",
    pillRing: "ring-1 ring-indigo-500/30",
    cardBg: "bg-gradient-to-br from-slate-50/90 via-white to-indigo-50/30",
    cardBorder: "border-indigo-200/90",
    cardHoverBorder: "hover:border-indigo-400",
    cardShadow: "shadow-xs hover:shadow-xl hover:shadow-indigo-500/10",
    iconBg: "bg-[#122447] text-white shadow-xs shadow-slate-900/30",
    iconText: "text-white",
    numberText: "text-[#122447]",
    lineStroke: "stroke-indigo-500/80",
    lineBorder: "border-indigo-400/90",
    arrowFill: "text-indigo-600/90",
  },
  amber: {
    pillBg: "bg-[#78350f]", // High dark shade of brand amber/gold
    pillText: "text-amber-200",
    pillRing: "ring-1 ring-amber-500/30",
    cardBg: "bg-gradient-to-br from-amber-50/90 via-white to-orange-50/30",
    cardBorder: "border-amber-200/90",
    cardHoverBorder: "hover:border-amber-400",
    cardShadow: "shadow-xs hover:shadow-xl hover:shadow-amber-500/10",
    iconBg: "bg-[#D97706] text-white shadow-xs shadow-amber-600/30",
    iconText: "text-white",
    numberText: "text-amber-700",
    lineStroke: "stroke-amber-500/80",
    lineBorder: "border-amber-400/90",
    arrowFill: "text-amber-600/90",
  },
  purple: {
    pillBg: "bg-[#4c1d95]", // High dark shade of purple
    pillText: "text-purple-200",
    pillRing: "ring-1 ring-purple-500/30",
    cardBg: "bg-gradient-to-br from-purple-50/90 via-white to-fuchsia-50/30",
    cardBorder: "border-purple-200/90",
    cardHoverBorder: "hover:border-purple-400",
    cardShadow: "shadow-xs hover:shadow-xl hover:shadow-purple-500/10",
    iconBg: "bg-[#7C3AED] text-white shadow-xs shadow-purple-600/30",
    iconText: "text-white",
    numberText: "text-purple-700",
    lineStroke: "stroke-purple-500/80",
    lineBorder: "border-purple-400/90",
    arrowFill: "text-purple-600/90",
  },
  teal: {
    pillBg: "bg-[#134e4a]", // High dark shade of teal
    pillText: "text-teal-200",
    pillRing: "ring-1 ring-teal-500/30",
    cardBg: "bg-gradient-to-br from-teal-50/90 via-white to-emerald-50/30",
    cardBorder: "border-teal-200/90",
    cardHoverBorder: "hover:border-teal-400",
    cardShadow: "shadow-xs hover:shadow-xl hover:shadow-teal-500/10",
    iconBg: "bg-[#0D9488] text-white shadow-xs shadow-teal-600/30",
    iconText: "text-white",
    numberText: "text-teal-700",
    lineStroke: "stroke-teal-500/80",
    lineBorder: "border-teal-400/90",
    arrowFill: "text-teal-600/90",
  },
};

const DEFAULT_THEME_CYCLE: SteppedCardTheme[] = ["emerald", "blue", "navy", "amber"];

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
            const themeKey: SteppedCardTheme =
              item.theme ||
              (item.pillTheme === "green"
                ? "emerald"
                : item.pillTheme === "dark"
                ? idx % 2 === 1
                  ? "blue"
                  : "navy"
                : DEFAULT_THEME_CYCLE[idx % DEFAULT_THEME_CYCLE.length]);
            const theme = THEME_CONFIG[themeKey] || THEME_CONFIG.emerald;

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
                      "relative w-full max-w-[470px] rounded-[24px] p-4 sm:p-5 flex items-start gap-4 transition-all duration-300 border hover:-translate-y-0.5",
                      theme.cardBg,
                      theme.cardBorder,
                      theme.cardHoverBorder,
                      theme.cardShadow
                    )}
                  >
                    {/* Left Vertical Pill Badge */}
                    <div
                      className={cn(
                        "w-8 py-3 rounded-full flex items-center justify-center shrink-0 self-stretch my-0.5 shadow-sm",
                        theme.pillBg,
                        theme.pillText,
                        theme.pillRing
                      )}
                    >
                      <span
                        className="text-[10px] font-black tracking-widest uppercase select-none whitespace-nowrap"
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
                            "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105",
                            theme.iconBg
                          )}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-heading font-extrabold text-base text-slate-900 tracking-tight leading-snug">
                          <span className={cn("mr-1.5 font-black", theme.numberText)}>
                            {item.number}
                          </span>
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
                      className={cn("w-full h-full", theme.lineStroke)}
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0 0 C 100 0, 100 40, 200 40"
                        strokeWidth="2.5"
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
          const themeKey: SteppedCardTheme =
            item.theme ||
            (item.pillTheme === "green"
              ? "emerald"
              : item.pillTheme === "dark"
              ? idx % 2 === 1
                ? "blue"
                : "navy"
              : DEFAULT_THEME_CYCLE[idx % DEFAULT_THEME_CYCLE.length]);
          const theme = THEME_CONFIG[themeKey] || THEME_CONFIG.emerald;
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
                    "relative w-[54%] xs:w-[52%] sm:w-[50%] rounded-[20px] sm:rounded-[24px] p-2.5 sm:p-3.5 flex items-start gap-2 sm:gap-3 transition-all border shadow-xs",
                    theme.cardBg,
                    theme.cardBorder
                  )}
                >
                  {/* Left Vertical Pill Badge */}
                  <div
                    className={cn(
                      "w-5 sm:w-6 py-2 sm:py-2.5 rounded-full flex items-center justify-center shrink-0 self-stretch my-0.5 shadow-xs",
                      theme.pillBg,
                      theme.pillText,
                      theme.pillRing
                    )}
                  >
                    <span
                      className="text-[7.5px] sm:text-[9px] font-black tracking-widest uppercase select-none whitespace-nowrap"
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
                          theme.iconBg
                        )}
                      >
                        <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </div>
                      <h4 className="font-heading font-extrabold text-[11px] sm:text-xs text-slate-900 tracking-tight leading-snug">
                        <span className={cn("mr-1 font-black", theme.numberText)}>
                          {item.number}
                        </span>
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
                      className={cn(
                        "absolute top-2 sm:top-2.5 h-7 sm:h-8 border-t-2 border-r-2 border-dashed rounded-tr-xl",
                        theme.lineBorder
                      )}
                      style={{
                        left: "53%",
                        right: "25%",
                      }}
                    >
                      {/* Downward Arrowhead pointing directly into next card */}
                      <div className={cn("absolute -bottom-1 -right-[5px]", theme.arrowFill)}>
                        <svg viewBox="0 0 10 8" className="w-2.5 h-2 fill-current">
                          <path d="M0 0 L10 0 L5 8 Z" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    /* Right Card -> Left Card: line goes left, curves down with arrow */
                    <div
                      className={cn(
                        "absolute top-2 sm:top-2.5 h-7 sm:h-8 border-t-2 border-l-2 border-dashed rounded-tl-xl",
                        theme.lineBorder
                      )}
                      style={{
                        left: "25%",
                        right: "53%",
                      }}
                    >
                      {/* Downward Arrowhead pointing directly into next card */}
                      <div className={cn("absolute -bottom-1 -left-[5px]", theme.arrowFill)}>
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
