"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  TrendingUp,
  BarChart3,
  CalendarCheck,
  Award,
} from "lucide-react";
import SteppedProcessCards, { SteppedProcessCardItem } from "@/components/ui/SteppedProcessCards";

export default function TestPrepPlatformPreview() {
  const steppedFeatures: SteppedProcessCardItem[] = [
    {
      number: "01",
      title: "Real-Time Score Benchmarking",
      pillLabel: "1 Week",
      pillTheme: "green",
      cardTheme: "mint",
      icon: TrendingUp,
      description:
        "Track your preparation against target scores for SAT, GRE & GMAT.",
    },
    {
      number: "02",
      title: "Sectional Performance Insights",
      pillLabel: "2 Week",
      pillTheme: "dark",
      cardTheme: "white",
      icon: BarChart3,
      description:
        "See detailed performance across Quant, Verbal, Reading, Writing & Data Insights.",
    },
    {
      number: "03",
      title: "100% Recorded Learning Archive",
      pillLabel: "1-2 Days",
      pillTheme: "dark",
      cardTheme: "white",
      icon: CalendarCheck,
      description:
        "Revisit every recorded class anytime, strengthen concepts, and stay consistent with your preparation.",
    },
    {
      number: "04",
      title: "Mock-Test Performance Analytics",
      pillLabel: "1-2 Days",
      pillTheme: "green",
      cardTheme: "mint",
      icon: Award,
      description:
        "Analyse mock scores, identify weak areas, and track your improvement across every test.",
    },
  ];

  return (
    <section className="relative py-8 sm:py-14 bg-gradient-to-b from-white via-[#EBF7F2]/50 to-white overflow-hidden">
      {/* Seamless top and bottom feather fades */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      {/* Soft background decor */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-snug sm:leading-[1.28] lg:leading-[1.3] tracking-tight max-w-2xl">
            A Unified Diagnostic Suite{" "}
            <span className="text-brand-accent">for Test Mastery</span>
          </h2>

          <p className="font-body text-slate-500 text-sm sm:text-base max-w-md leading-relaxed md:pb-1.5">
            Monitor scores, take adaptive mocks, review detailed answer
            explanations, and benchmark performance continuously.
          </p>
        </div>

        {/* Browser Window Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-[0_25px_70px_-15px_rgba(18,36,71,0.15)] overflow-hidden"
        >
          {/* Mac-Style Window Chrome Bar */}
          <div className="bg-brand-navy px-3.5 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] inline-block" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] inline-block" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] inline-block" />
            </div>

            {/* Simulated URL Bar */}
            <div className="bg-white/10 border border-white/15 rounded-full px-3 sm:px-5 py-0.5 sm:py-1 text-[10px] sm:text-xs text-slate-200 font-mono flex items-center gap-1.5 sm:gap-2 max-w-[220px] sm:max-w-md w-full justify-center">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">portal.academicyatra.com/test-analytics</span>
            </div>

            <div className="w-8 sm:w-12 flex justify-end">
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            </div>
          </div>

          {/* Browser Content */}
          <div className="relative w-full aspect-[16/9] bg-slate-100 overflow-hidden group">
            <Image
              src="/images/test_prep_student_dashboard.jpg"
              alt="Academic Yatra Student Dashboard — SAT, GRE, GMAT Analytics and Progress Tracking"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1100px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </motion.div>

        {/* Stepped Process Cards matching Reference Design */}
        <div className="mt-8 sm:mt-12">
          <SteppedProcessCards items={steppedFeatures} />
        </div>
      </div>
    </section>
  );
}
