"use client";

import React from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  Video,
  Library,
  Users,
  FileCheck,
  ClipboardList,
  BarChart3,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

export default function AboutDigitalEcosystem() {
  const ecosystemFeatures = [
    {
      icon: LayoutDashboard,
      title: "Dedicated Student Learning Dashboard",
      description: "Centralized hub for schedule, assignments, live links, and batch notifications.",
      tag: "Central Portal",
    },
    {
      icon: Video,
      title: "Live Online Classes",
      description: "Interactive real-time sessions with certified trainers, with full recorded replay access.",
      tag: "Live + Replays",
    },
    {
      icon: Library,
      title: "On-Demand Recorded Course Library",
      description: "Extensive video archives to revise complex grammar, math concepts, and test hacks 24/7.",
      tag: "24/7 Vault",
    },
    {
      icon: Users,
      title: "Group Coaching Sessions",
      description: "Collaborative speaking clubs, debate workshops, and peer problem-solving roundtables.",
      tag: "Collaborative",
    },
    {
      icon: FileCheck,
      title: "Full-Length Mock & Sectional Tests",
      description: "Timed, realistic exam simulations replicating real SAT, IELTS, PTE, and GRE interfaces.",
      tag: "Adaptive Mocks",
    },
    {
      icon: ClipboardList,
      title: "Assignments & Performance Evaluation",
      description: "Regular homework submission with detailed rubric corrections and scoring breakdowns.",
      tag: "Rubric Grading",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking & Analytics Tools",
      description: "Visual heatmaps, weak-area detection, and accuracy metrics updated after every session.",
      tag: "Live Insights",
    },
    {
      icon: BookOpen,
      title: "Learning Portal with Study Materials",
      description: "Curated PDFs, formula sheets, vocabulary flashcards, and official prep guidelines.",
      tag: "Study Vault",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-dark tracking-tight">
            Digital Learning Ecosystem{" "}
            <span className="text-brand-primary">(Included with All Programs)</span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Upon successful enrollment and payment confirmation, students are issued dedicated dashboard credentials providing instant access to our state-of-the-art virtual campus.
          </p>
        </div>

        {/* Modern LMS Showcase Container with Responsive Window Frame */}
        <div className="mb-16 max-w-5xl mx-auto px-1 sm:px-0">
          <div className="relative rounded-2xl sm:rounded-3xl bg-slate-900/90 p-2 sm:p-4 shadow-[0_20px_50px_rgba(3,22,67,0.25)] border border-slate-700/60 backdrop-blur-xl ring-1 ring-white/10">
            {/* macOS Browser Header */}
            <div className="flex items-center justify-between px-2 sm:px-4 py-2 sm:py-2.5 border-b border-slate-800 mb-2 sm:mb-3">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/50 text-[10px] sm:text-xs font-mono text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>portal.academicyatra.com</span>
                <span className="text-slate-500 hidden sm:inline">/dashboard</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-slate-400 text-[11px] font-medium">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[10px] font-semibold">
                  Live Sync
                </span>
              </div>
            </div>

            {/* High-Resolution Dashboard UI Image */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
              <Image
                src="/images/lms-dashboard-preview.jpg"
                alt="Academic Yatra Student Learning Portal Dashboard"
                width={1920}
                height={1080}
                priority
                className="w-full h-auto object-cover block"
              />
            </div>

            {/* Quick Status Sub-bar */}
            <div className="mt-3 pt-2 sm:pt-3 px-2 sm:px-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-slate-300 font-medium">
                  Active Virtual Campus • Batch 2025–26
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px] sm:text-xs">
                <span>Integrated AI Drills</span>
                <span className="text-slate-600">•</span>
                <span>Automated Band Scoring</span>
                <span className="text-slate-600">•</span>
                <span>Session Recordings 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* 8-Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {ecosystemFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-brand-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                      {feat.tag}
                    </span>
                  </div>
                  <h4 className="font-heading font-extrabold text-base text-dark mb-2 leading-snug">
                    {feat.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Included with Enrollment</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Access Note Disclaimer Badge */}
        <div className="max-w-2xl mx-auto text-center bg-slate-50 border border-slate-200 rounded-2xl p-4">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            <span className="font-bold text-slate-700">Note:</span> Access to specific features, modules, and mock test limits depends on the exact program and tier selected at enrollment.
          </p>
        </div>

      </div>
    </section>
  );
}
