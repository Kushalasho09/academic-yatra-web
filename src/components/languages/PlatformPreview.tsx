"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  PlayCircle,
  FileCheck,
  TrendingUp,
  BarChart3,
  Calendar,
  Clock,
  Radio,
  BookOpen,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

type PreviewTab = "dashboard" | "practice" | "classes" | "ielts" | "tracking";

export default function PlatformPreview() {
  const [activeTab, setActiveTab] = useState<PreviewTab>("dashboard");

  const tabs = [
    { id: "dashboard", label: "Student Dashboard" },
    { id: "practice", label: "Practice Tests" },
    { id: "classes", label: "Live Classes" },
    { id: "ielts", label: "IELTS" },
    { id: "tracking", label: "Performance Tracking" },
  ] as const;

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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div className="space-y-2">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-[1.18] tracking-tight">
              A Complete Learning Platform{" "}
              <span className="text-brand-accent">for Test Preparation</span>
            </h2>
          </div>

          <p className="font-body text-slate-500 text-sm sm:text-base max-w-md leading-relaxed">
            Track progress, attend classes, complete practice tests, and improve
            through detailed performance insights.
          </p>
        </div>

        {/* Tab Navigation Pill Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-9">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as PreviewTab)}
              className={cn(
                "px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border cursor-pointer",
                activeTab === tab.id
                  ? "bg-brand-navy text-white border-brand-navy shadow-md shadow-brand-navy/20 scale-[1.02]"
                  : "bg-white text-slate-700 border-slate-200 hover:border-brand-primary hover:text-brand-primary shadow-xs"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Browser Window Mockup */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200/90 shadow-[0_25px_70px_-15px_rgba(18,36,71,0.15)] overflow-hidden">
          {/* Mac-Style Window Chrome Bar */}
          <div className="bg-brand-navy px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
            </div>

            {/* Simulated URL Bar */}
            <div className="bg-white/10 border border-white/15 rounded-full px-5 py-1 text-xs text-slate-200 font-mono flex items-center gap-2 max-w-xs sm:max-w-md w-full justify-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="truncate">app.academicyatra.com/{activeTab}</span>
            </div>

            <div className="w-12" />
          </div>

          {/* Browser Content Inner Body */}
          <div className="p-6 sm:p-8 lg:p-10 bg-slate-50/70 min-h-[460px]">
            <AnimatePresence mode="wait">
              {activeTab === "dashboard" && (
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-7"
                >
                  {/* Dashboard Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-200/80 gap-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-heading text-2xl font-extrabold text-brand-navy">
                          Student Dashboard
                        </h3>
                        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-extrabold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Active Student
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 font-body">
                        Track learning progress, attendance, mock tests and IELTS performance.
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold text-sm shadow-sm">
                        A
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-xs text-slate-800">Abhir Sharma</p>
                        <p className="text-[10px] text-slate-500">IELTS Academic Track</p>
                      </div>
                    </div>
                  </div>

                  {/* 4 Dashboard Metric Boxes */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-xs">
                      <div className="w-8 h-8 rounded-xl bg-blue-50 text-brand-accent flex items-center justify-center mb-2">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <p className="font-heading text-3xl font-extrabold text-brand-navy">24</p>
                      <p className="text-xs text-slate-500 font-medium mt-1">Lessons Completed</p>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-xs">
                      <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
                        <FileCheck className="w-4 h-4" />
                      </div>
                      <p className="font-heading text-3xl font-extrabold text-brand-navy">12</p>
                      <p className="text-xs text-slate-500 font-medium mt-1">Mock Tests Taken</p>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-xs">
                      <div className="w-8 h-8 rounded-xl bg-emerald-50 text-brand-primary flex items-center justify-center mb-2">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <p className="font-heading text-3xl font-extrabold text-brand-primary">91%</p>
                      <p className="text-xs text-slate-500 font-medium mt-1">Attendance Rate</p>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-xs">
                      <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <p className="font-heading text-3xl font-extrabold text-brand-navy">84%</p>
                      <p className="text-xs text-slate-500 font-medium mt-1">Accuracy Average</p>
                    </div>
                  </div>

                  {/* Skill Breakdown & Donut Gauge */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Skill Breakdown Bars */}
                    <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200/70 shadow-xs space-y-4">
                      <h4 className="font-heading font-extrabold text-sm text-slate-800">
                        Skill Breakdown
                      </h4>

                      {[
                        { skill: "Listening", percent: 82, color: "bg-brand-accent" },
                        { skill: "Reading", percent: 87, color: "bg-brand-primary" },
                        { skill: "Writing", percent: 76, color: "bg-amber-500" },
                        { skill: "Speaking", percent: 78, color: "bg-purple-600" },
                      ].map((item) => (
                        <div key={item.skill} className="space-y-1">
                          <div className="flex justify-between text-xs font-semibold">
                            <span className="text-slate-700">{item.skill}</span>
                            <span className="text-slate-900">{item.percent}%</span>
                          </div>
                          <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${item.color}`}
                              style={{ width: `${item.percent}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Overall Progress Circle */}
                    <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200/70 shadow-xs flex flex-col items-center justify-center text-center">
                      <div className="relative w-28 h-28 flex items-center justify-center mb-3">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            className="text-slate-100"
                            strokeWidth="3.5"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="text-brand-primary"
                            strokeDasharray="72, 100"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <span className="absolute font-heading font-extrabold text-2xl text-brand-navy">
                          72%
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-sm text-slate-800">
                        Overall Target Progress
                      </h4>
                      <p className="text-xs text-slate-500 max-w-[200px] mt-1">
                        You&apos;re progressing consistently towards your target IELTS band score.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "practice" && (
                <motion.div
                  key="practice"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div>
                      <h3 className="font-heading text-2xl font-extrabold text-brand-navy">
                        Full-Length Practice Simulations
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500">
                        Official timed tests calibrated to real test-day difficulty.
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-brand-greenTint text-brand-primary text-xs font-bold rounded-full">
                      39 Tests Available
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        title: "IELTS Full Mock Test #12",
                        module: "Listening & Reading",
                        duration: "2h 45m",
                        badge: "Latest Released",
                        score: "Score: 7.5 Band",
                      },
                      {
                        title: "PTE Academic Scored Mock #08",
                        module: "Speaking & Writing AI",
                        duration: "2h 15m",
                        badge: "AI Scored",
                        score: "Score: 79/90",
                      },
                      {
                        title: "TOEFL iBT Simulation #05",
                        module: "4-Section Integrated",
                        duration: "2h 00m",
                        badge: "ETS Pattern",
                        score: "Score: 104/120",
                      },
                    ].map((test, i) => (
                      <div
                        key={i}
                        className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-brand-primary transition-all flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-[10px] uppercase font-bold text-brand-primary bg-emerald-50 px-2 py-0.5 rounded-full">
                            {test.badge}
                          </span>
                          <h4 className="font-heading font-bold text-base text-slate-900 mt-2">
                            {test.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-0.5">{test.module}</p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" /> {test.duration}
                          </span>
                          <span className="text-xs font-bold text-emerald-700">{test.score}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "classes" && (
                <motion.div
                  key="classes"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div>
                      <h3 className="font-heading text-2xl font-extrabold text-brand-navy">
                        Interactive Live Masterclasses
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500">
                        Join daily batches led by certified British Council & IDP examiners.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                        <Radio className="w-7 h-7 animate-pulse" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[10px] font-extrabold">
                            STREAMING NOW
                          </span>
                          <span className="text-xs text-slate-500 font-medium">100+ Enrolled</span>
                        </div>
                        <h4 className="font-heading font-extrabold text-lg text-slate-900 mt-1">
                          IELTS Writing Task 2: High-Scoring Argument Structures
                        </h4>
                        <p className="text-xs text-slate-500">
                          Senior Trainer Joel Dawson • Live Q&A and instant essay feedback
                        </p>
                      </div>
                    </div>
                    <button className="bg-brand-primary hover:bg-brand-primaryHover text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-md">
                      <span>Launch Classroom</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === "ielts" && (
                <motion.div
                  key="ielts"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="pb-4 border-b border-slate-200">
                    <h3 className="font-heading text-2xl font-extrabold text-brand-navy">
                      IELTS Module Mastery Center
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Target Band 8.0 with sectional deep dives and curated vocabulary banks.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { name: "Listening Module", desc: "40 Audio Sections, British & Aussie accents", badge: "Band 8.5" },
                      { name: "Reading Module", desc: "Skimming, Scanning & True/False/Not Given", badge: "Band 8.0" },
                      { name: "Writing Module", desc: "Academic Task 1 Graphs & Task 2 Essays", badge: "Band 7.5" },
                      { name: "Speaking Module", desc: "1-on-1 Simulated Cue Card Interview Drills", badge: "Band 8.0" },
                    ].map((mod, i) => (
                      <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                        <span className="text-xs font-extrabold text-brand-primary">{mod.badge}</span>
                        <h4 className="font-heading font-bold text-base text-slate-900 mt-1">{mod.name}</h4>
                        <p className="text-xs text-slate-500 mt-1">{mod.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "tracking" && (
                <motion.div
                  key="tracking"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="pb-4 border-b border-slate-200">
                    <h3 className="font-heading text-2xl font-extrabold text-brand-navy">
                      Live AI Performance Analytics
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Pinpoint weak points and receive actionable score progression roadmaps.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                      <h4 className="font-heading font-extrabold text-sm text-brand-navy">
                        Top Strength & Weakness Areas
                      </h4>
                      <div className="space-y-2 text-xs">
                        <div className="p-3 bg-emerald-50 rounded-xl text-emerald-800 flex items-center justify-between">
                          <span>✓ Lexical Resource & Vocabulary Variety</span>
                          <span className="font-bold">Band 8.0</span>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-xl text-brand-accent flex items-center justify-between">
                          <span>✓ Coherence & Paragraph Linking</span>
                          <span className="font-bold">Band 7.5</span>
                        </div>
                        <div className="p-3 bg-amber-50 rounded-xl text-amber-800 flex items-center justify-between">
                          <span>⚠ Complex Sentence Grammatical Range</span>
                          <span className="font-bold">Band 6.5 (Needs Practice)</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                      <div>
                        <h4 className="font-heading font-extrabold text-sm text-brand-navy">
                          Projected Exam Score
                        </h4>
                        <p className="text-xs text-slate-500 mt-1">Based on last 6 mock tests</p>
                        <div className="mt-4 flex items-baseline gap-2">
                          <span className="font-heading text-5xl font-extrabold text-brand-primary">7.5</span>
                          <span className="text-sm font-bold text-slate-500">/ 9.0 Band</span>
                        </div>
                        <p className="text-xs text-emerald-600 font-semibold mt-2">
                          ↑ 98% probability of achieving Canadian University requirement
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
