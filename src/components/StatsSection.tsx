"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Layers,
  TrendingUp,
  Target,
  Video,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface StatItemProps {
  target: number;
  label: string;
  subtext: string;
  icon: React.ElementType;
  index: number;
  suffix?: string;
}

function StatCounterCard({
  target,
  label,
  subtext,
  icon: Icon,
  index,
  suffix = "%",
}: StatItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1800;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress =
        progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    const animFrame = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animFrame);
  }, [isInView, target]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-emerald-400/50 hover:bg-slate-900/80 transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:-translate-y-1.5"
    >
      {/* Subtle card top glowing light */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top Row: Metric & Category Icon */}
      <div className="flex items-start justify-between gap-3 mb-4">
        {/* Hollow Gradient Outlined Number */}
        <div
          className="font-heading text-5xl sm:text-6xl lg:text-[68px] font-black tracking-tight select-none leading-none drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
          style={{
            WebkitTextStroke: "2.2px #10B981",
            WebkitTextFillColor: "transparent",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 25%, rgba(0,0,0,0.2) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 25%, rgba(0,0,0,0.2) 100%)",
          }}
        >
          {count}
          {suffix}
        </div>

        {/* Floating Icon Badge */}
        <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 group-hover:border-emerald-400/40 group-hover:scale-110 transition-all duration-300 shadow-inner">
          <Icon className="w-5 h-5" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2 mt-auto">
        <h3 className="font-heading font-extrabold text-base sm:text-lg lg:text-[19px] text-white tracking-tight leading-snug group-hover:text-emerald-300 transition-colors">
          {label}
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
          {subtext}
        </p>
      </div>

      {/* Interactive Bottom Progress Accent */}
      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-5">
        <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 transition-all duration-700 rounded-full" />
      </div>
    </motion.div>
  );
}

const STATS_DATA = [
  {
    target: 100,
    label: "Learning. No Tab Chaos.",
    subtext:
      "All live sessions, study materials, mock tests, and assignments unified into one clean, distraction-free environment.",
    icon: Layers,
  },
  {
    target: 100,
    label: "Progress, Minus the Guesswork.",
    subtext:
      "Granular accuracy diagnostics and score trajectories give you complete transparency on test readiness.",
    icon: TrendingUp,
  },
  {
    target: 99,
    label: "Spot the Gaps. Fix the Gaps.",
    subtext:
      "Adaptive computer diagnostics identify recurring question-level pitfalls before real exam day.",
    icon: Target,
  },
  {
    target: 100,
    label: "Missed Class? We Kept It.",
    subtext:
      "Never miss a concept with instant HD session archives, downloadable lecture notes, and trainer doubt resolution.",
    icon: Video,
  },
];

export default function StatsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#031643] text-white py-16 sm:py-24 z-20 border-b border-white/10">
      {/* Background Cinematic Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home_stats_campus_bg.jpg"
          alt="Academic Yatra Global Campus Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transform hover:scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Layered cinematic dark gradient overlay for crystal clear contrast & legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#031643]/90 via-[#031643]/80 to-[#031643]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.18),transparent_65%)]" />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold tracking-wide backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>THE ACADEMIC YATRA STANDARD</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Proof Over Promises.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              Clear Outcomes Only.
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Every lecture, mock test, and mentorship milestone is engineered to
            eliminate friction so your preparation stays focused and dependable.
          </p>
        </div>

        {/* 4 Unique Glassmorphism Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {STATS_DATA.map((stat, idx) => (
            <StatCounterCard
              key={stat.label}
              target={stat.target}
              label={stat.label}
              subtext={stat.subtext}
              icon={stat.icon}
              index={idx}
            />
          ))}
        </div>

        {/* Bottom Proof Strip */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% Verified Faculty & Mentors</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Computer-Adaptive Mock Engine</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>24/7 LMS Recording Archives</span>
          </div>
        </div>
      </div>
    </section>
  );
}
