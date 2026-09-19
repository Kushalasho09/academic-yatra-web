"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  FileCheck2,
  Plane,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const HIGHLIGHTS = [
  {
    title: "Test Prep That Shows Your Gaps",
    subtitle: "Targeted test prep with practice, mocks & performance insights",
    icon: Target,
    accent: "from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30",
  },
  {
    title: "IELTS & PTE, Done Right",
    subtitle: "Build practical communication skills for academic & professional settings",
    icon: FileCheck2,
    accent: "from-blue-500/20 to-indigo-500/10 text-blue-400 border-blue-500/30",
  },
  {
    title: "Get Ready Before You Get There",
    subtitle: "Language and learning support for life abroad",
    icon: Plane,
    accent: "from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30",
  },
  {
    title: "Skills That Hold Up Outside the Course",
    subtitle: "Practical learning. Real application.",
    icon: Sparkles,
    accent: "from-purple-500/20 to-pink-500/10 text-purple-400 border-purple-500/30",
  },
];

export default function AchievementBanner() {
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#0A192F] via-[#122447] to-[#0A192F] text-white relative overflow-hidden">
      {/* Seamless Top & Bottom Ambient Fade */}
      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/15 to-transparent pointer-events-none" />

      {/* Dynamic Ambient Background Flares */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeCurve }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-12"
        >
          {/* Main Headline */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-snug sm:leading-[1.26] lg:leading-[1.28]">
            The Skills You’ll{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 font-accent italic font-normal">
              Actually Use.
            </span>
          </h2>

          <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            From test prep to language and career skills, learn what helps you perform better in classrooms, interviews, and real-world settings.
          </p>
        </motion.div>

        {/* 4 Feature Cards (4 Columns on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative p-5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md flex flex-col items-start space-y-3"
              >
                <div
                  className={cn(
                    "w-11 h-11 rounded-xl bg-gradient-to-br border flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform",
                    item.accent
                  )}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-1 text-left">
                  <div className="font-heading text-base font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed">
                    {item.subtitle}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Track Line / Footer */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-10 text-xs sm:text-sm text-slate-300">
          <span className="font-extrabold text-emerald-400 tracking-wider uppercase text-xs">
            Track:
          </span>
          <span className="text-white font-medium">Live Learning</span>
          <span className="text-slate-500">•</span>
          <span className="text-white font-medium">Recorded Access</span>
          <span className="text-slate-500">•</span>
          <span className="text-white font-medium">Performance Insights</span>
          <span className="text-slate-500">•</span>
          <span className="text-white font-medium">Expert Feedback</span>
        </div>
      </div>
    </section>
  );
}
