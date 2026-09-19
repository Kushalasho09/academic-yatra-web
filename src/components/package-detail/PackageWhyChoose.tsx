"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Megaphone,
  Award,
  Target,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { PackageDetailData, EcosystemCard } from "@/data/packageDetailsData";
import { cn } from "@/lib/utils";

interface PackageWhyChooseProps {
  whyChoose: PackageDetailData["whyChoose"];
}

interface StepConfig {
  number: string;
  numberColor: string;
  badgeBg: string;
  glowColor: string;
  bubbleColor: string;
  checkColor: string;
  fallbackDesc: string;
  icon: React.ElementType;
}

const STEP_CONFIGS: Record<EcosystemCard["iconType"], StepConfig> = {
  dashboard: {
    number: "01",
    numberColor: "text-sky-400",
    badgeBg: "bg-sky-500 text-white shadow-sky-500/25",
    glowColor: "from-sky-400/25 via-blue-500/20 to-sky-300/20",
    bubbleColor: "bg-sky-100",
    checkColor: "text-sky-500",
    fallbackDesc:
      "Access your personalized student dashboard to track study progress, view upcoming schedules, and inspect real-time module performance analytics.",
    icon: LayoutDashboard,
  },
  lessons: {
    number: "02",
    numberColor: "text-fuchsia-400",
    badgeBg: "bg-fuchsia-600 text-white shadow-fuchsia-500/25",
    glowColor: "from-fuchsia-400/25 via-purple-500/20 to-pink-300/20",
    bubbleColor: "bg-fuchsia-100",
    checkColor: "text-fuchsia-500",
    fallbackDesc:
      "Master exam fundamentals with structured on-demand video lectures, interactive text lessons, practice quizzes, and instant scoring feedback.",
    icon: BookOpen,
  },
  classes: {
    number: "03",
    numberColor: "text-emerald-400",
    badgeBg: "bg-emerald-600 text-white shadow-emerald-500/25",
    glowColor: "from-emerald-400/25 via-teal-500/20 to-green-300/20",
    bubbleColor: "bg-emerald-100",
    checkColor: "text-emerald-500",
    fallbackDesc:
      "Engage directly with certified trainers in live interactive sessions with real-time doubt clearing, flexible schedules, and recorded class archives.",
    icon: Megaphone,
  },
  practice: {
    number: "04",
    numberColor: "text-amber-400",
    badgeBg: "bg-amber-500 text-white shadow-amber-500/25",
    glowColor: "from-amber-400/25 via-orange-500/20 to-yellow-300/20",
    bubbleColor: "bg-amber-100",
    checkColor: "text-amber-500",
    fallbackDesc:
      "Sharpen every module with timed topic-wise exercises, adaptive skill-building question banks, instant scoring, and granular progress tracking.",
    icon: Award,
  },
  mock: {
    number: "05",
    numberColor: "text-indigo-400",
    badgeBg: "bg-indigo-600 text-white shadow-indigo-500/25",
    glowColor: "from-indigo-400/25 via-blue-600/20 to-cyan-300/20",
    bubbleColor: "bg-indigo-100",
    checkColor: "text-indigo-500",
    fallbackDesc:
      "Experience authentic test-day pressure with full-length adaptive mock exams matching official scoring criteria and accurate band predictions.",
    icon: Target,
  },
  evaluation: {
    number: "06",
    numberColor: "text-rose-400",
    badgeBg: "bg-rose-500 text-white shadow-rose-500/25",
    glowColor: "from-rose-400/25 via-pink-500/20 to-orange-300/20",
    bubbleColor: "bg-rose-100",
    checkColor: "text-rose-500",
    fallbackDesc:
      "Receive in-depth line-by-line diagnostic reviews, individual band improvement strategies, and personalized 1-on-1 mentor guidance.",
    icon: MessageSquare,
  },
};

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

function VideoCard({ config }: { config: StepConfig }) {
  return (
    <div className="relative w-full max-w-[560px] mx-auto group">
      {/* Decorative Soft Pastel Circles */}
      <div
        className={cn(
          "absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-18 sm:h-18 rounded-full opacity-60 pointer-events-none transition-transform duration-500 group-hover:scale-110",
          config.bubbleColor
        )}
      />
      <div
        className={cn(
          "absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-14 h-14 sm:w-20 sm:h-20 rounded-full opacity-50 pointer-events-none transition-transform duration-500 group-hover:scale-110",
          config.bubbleColor
        )}
      />

      {/* Atmospheric Ambient Glow behind card */}
      <div
        className={cn(
          "absolute -inset-2.5 sm:-inset-5 rounded-[32px] sm:rounded-[40px] bg-gradient-to-br blur-xl sm:blur-2xl opacity-70 pointer-events-none -z-10 transition-opacity duration-300 group-hover:opacity-90",
          config.glowColor
        )}
      />

      {/* Main White Card Container */}
      <div className="relative rounded-[24px] sm:rounded-[34px] bg-white p-2.5 sm:p-4 border border-slate-200/70 shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
        {/* Horizontal Video Element (16:9 Aspect Ratio) */}
        <div className="relative aspect-video w-full rounded-[18px] sm:rounded-[26px] overflow-hidden bg-slate-950 border border-slate-200/60 shadow-inner">
          <video
            src={VIDEO_URL}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function PackageWhyChoose({ whyChoose }: PackageWhyChooseProps) {
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50/40 to-white relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-4 sm:gap-6 text-center md:text-left">
          <div className="space-y-2.5 max-w-xl mx-auto md:mx-0">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-brand-navy tracking-tight font-heading leading-tight sm:leading-snug">
              <span>{whyChoose.headingPrefix} </span>
              <span className="text-emerald-600">{whyChoose.headingHighlight}</span>
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-md font-normal leading-relaxed font-body mx-auto md:mx-0">
            {whyChoose.subtitle}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW: Single Hero Video Showcase (Zero Extra Text / Zero Clutter)   */}
        {/* The video displays the full learning ecosystem in one sleek display card   */}
        {/* ========================================================================= */}
        <div className="block lg:hidden">
          <div className="relative w-full max-w-[540px] mx-auto py-2">
            {/* Soft Ambient Glow in Brand Colors */}
            <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-indigo-500/20 blur-2xl opacity-80 pointer-events-none -z-10" />

            {/* Decorative Floating Accent Bubbles */}
            <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-sky-100/80 blur-xs pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 rounded-full bg-emerald-100/80 blur-xs pointer-events-none" />

            {/* Glowing Card Frame with 16:9 Video */}
            <div className="relative rounded-[28px] bg-white p-3 border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.1)]">
              <div className="relative aspect-video w-full rounded-[20px] overflow-hidden bg-slate-950 border border-slate-200/60 shadow-inner">
                <video
                  src={VIDEO_URL}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Full Alternating Zigzag Process with Horizontal Video Cards */}
        {/* ========================================================================= */}
        <div className="hidden lg:block space-y-8 sm:space-y-12">
          {whyChoose.cards.map((card, idx) => {
            const config = STEP_CONFIGS[card.iconType] || STEP_CONFIGS.dashboard;
            const Icon = config.icon;
            // Alternating pattern on desktop: even on left (text left, video right), odd on right (video left, text right)
            const isVideoLeft = idx % 2 === 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: easeCurve }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* TEXT CONTENT COLUMN */}
                <div
                  className={cn(
                    "lg:col-span-6 space-y-4 sm:space-y-5",
                    isVideoLeft ? "lg:order-2 lg:pl-4" : "lg:order-1 lg:pr-4"
                  )}
                >
                  {/* Big Step Number */}
                  <div
                    className={cn(
                      "text-5xl sm:text-6xl font-black font-heading tracking-tight leading-none",
                      config.numberColor
                    )}
                  >
                    {config.number}
                  </div>

                  {/* Step Title Header with Matching Rounded Icon Badge */}
                  <div className="flex items-center gap-3 pt-1">
                    <div
                      className={cn(
                        "w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md",
                        config.badgeBg
                      )}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy tracking-tight">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-body font-normal">
                    {card.description || config.fallbackDesc}
                  </p>

                  {/* Checklist Bullets with Matching Icons */}
                  <ul className="space-y-2.5 pt-2">
                    {card.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium font-body"
                      >
                        <CheckCircle2
                          className={cn("w-4 h-4 shrink-0", config.checkColor)}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* HORIZONTAL VIDEO CARD COLUMN */}
                <div
                  className={cn(
                    "lg:col-span-6 flex justify-center",
                    isVideoLeft ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <VideoCard config={config} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
