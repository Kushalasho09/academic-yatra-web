"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  BarChart3,
  CalendarCheck,
  Award,
} from "lucide-react";

export default function TestPrepPlatformPreview() {
  const highlightFeatures = [
    {
      icon: TrendingUp,
      title: "Real-Time Score Benchmarking",
      description: "Live target progress toward SAT 1530+ & GRE 328+ cutoffs.",
    },
    {
      icon: BarChart3,
      title: "Sectional Accuracy Insights",
      description: "Detailed analytics for Quant, Verbal & Data Insights.",
    },
    {
      icon: CalendarCheck,
      title: "100% Attendance & Recorded Archive",
      description: "Never miss a concept with automatic session recordings.",
    },
    {
      icon: Award,
      title: "Adaptive Exam Calibrations",
      description: "Simulated College Board & ETS testing engines.",
    },
  ];

  return (
    <section className="relative py-10 sm:py-14 bg-gradient-to-b from-white via-[#EBF7F2]/50 to-white overflow-hidden">
      {/* Seamless top and bottom feather fades */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      {/* Soft background decor */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-extrabold uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
              <span>Student Dashboard</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-snug sm:leading-[1.28] lg:leading-[1.3] tracking-tight">
              A Complete Learning Platform{" "}
              <span className="text-brand-accent">for Test Preparation</span>
            </h2>
          </div>

          <p className="font-body text-slate-500 text-sm sm:text-base max-w-md leading-relaxed">
            Track progress, attend classes, complete practice tests, and improve
            through detailed performance insights.
          </p>
        </div>

        {/* Browser Window Mockup showcasing the professional Student Dashboard */}
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
              <span className="truncate">app.academicyatra.com/dashboard</span>
            </div>

            <div className="w-8 sm:w-12 flex justify-end">
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            </div>
          </div>

          {/* Browser Content: Ultra-High Definition Dashboard Mockup Image */}
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

        {/* 4 Mobile-Responsive Feature Badges Underneath */}
        <div className="max-w-5xl mx-auto mt-6 sm:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {highlightFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 shadow-xs hover:border-brand-primary/40 hover:shadow-sm transition-all"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-50 text-brand-primary flex items-center justify-center mb-2">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <h4 className="font-heading font-extrabold text-xs sm:text-sm text-brand-navy leading-snug">
                  {feat.title}
                </h4>
                <p className="font-body text-[10px] sm:text-xs text-slate-500 mt-0.5 leading-normal">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
