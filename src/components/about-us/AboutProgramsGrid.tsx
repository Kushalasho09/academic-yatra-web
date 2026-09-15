"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Languages,
  Target,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Award,
} from "lucide-react";

export default function AboutProgramsGrid() {
  const [activeTab, setActiveTab] = useState<"english-proficiency" | "competitive" | "languages">(
    "english-proficiency"
  );

  const programs = [
    {
      id: "english-proficiency" as const,
      tabTitle: "English Proficiency Tests",
      tabIcon: Target,
      tag: "Global Standard Coaching",
      title: "English Proficiency Test Preparation",
      subtitle:
        "Structured, instructor-led online coaching for internationally recognised English language examinations.",
      exams: [
        { name: "IELTS Academic & General Training", badge: "Target Band 7.5+" },
        { name: "PTE Academic & PTE Core", badge: "Target 79+" },
        { name: "CELPIP General", badge: "Canadian PR Ready" },
        { name: "TOEFL iBT", badge: "Target 100+" },
        { name: "Duolingo English Test (DET)", badge: "Target 125+" },
      ],
      coverageTitle: "Comprehensive Curriculum Coverage:",
      coverage: [
        "Reading Comprehension",
        "Structured Academic Writing",
        "Active Listening Drills",
        "Speaking Fluency & Accent",
        "Vocabulary Expansion",
        "Grammar & Syntax Mastery",
        "Exam Strategy & Time Management",
        "Sectional Practice Tests",
        "Full-Length Mock Examinations",
      ],
      ctaText: "Explore English Test Prep",
      ctaLink: "/test-prep",
    },
    {
      id: "competitive" as const,
      tabTitle: "Competitive & Graduate Exams",
      tabIcon: GraduationCap,
      tag: "University Admissions",
      title: "Competitive & Graduate Entrance Exam Preparation",
      subtitle:
        "Organised coaching for globally recognised academic entrance and aptitude examinations.",
      exams: [
        { name: "SAT / Digital SAT (DSAT)", badge: "Target 1500+" },
        { name: "GRE (Graduate Record Examination)", badge: "Target 325+" },
        { name: "GMAT (Graduate Management Admission Test)", badge: "Target 705+ Focus" },
      ],
      coverageTitle: "Core Syllabus & Rigorous Preparation:",
      coverage: [
        "Quantitative Reasoning & Math Shortcuts",
        "Verbal Reasoning & Critical Reading",
        "Analytical Writing Assessment (AWA)",
        "Desmos & Adaptive Exam Strategies",
        "In-depth Diagnostic Assessments",
        "Section-by-Section Performance Analytics",
        "Full Computer-Adaptive Mock Tests",
      ],
      ctaText: "Explore SAT / GRE / GMAT",
      ctaLink: "/test-prep",
    },
    {
      id: "languages" as const,
      tabTitle: "Foreign Language Training",
      tabIcon: Languages,
      tag: "CEFR Accredited Levels",
      title: "Language Training Programs",
      subtitle:
        "Proficiency-level language courses tailored for academic preparation, career readiness, and international development.",
      exams: [
        {
          name: "English Language Training",
          badge: "Spoken, Academic, Business & Professional",
        },
        {
          name: "French Language Training",
          badge: "Beginner to Advanced (A1 - C1)",
        },
        {
          name: "German Language Training",
          badge: "Academic Readiness & Work Visa Prep",
        },
      ],
      coverageTitle: "4-Pillar Integrated Skill Development:",
      coverage: [
        "Spoken English & Professional Communication",
        "Academic English Writing & Research Structure",
        "Business English & Workplace Presentations",
        "French Listening, Speaking, Reading & Writing",
        "German Academic Readiness & Goethe/TestDaF Drills",
        "Native Pronunciation & Cultural Context",
        "Grammar Mechanics & Daily Conversational Fluency",
      ],
      ctaText: "Explore Language Courses",
      ctaLink: "/languages",
    },
  ];

  const currentProgram = programs.find((p) => p.id === activeTab) || programs[0];

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-dark tracking-tight">
            Our Training & <span className="text-brand-primary">Preparation Programs</span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            High-impact, instructor-led training tailored for internationally recognised examinations and proficiency development.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-10">
          {programs.map((prog) => {
            const TabIcon = prog.tabIcon;
            const isActive = activeTab === prog.id;
            return (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-heading font-extrabold text-xs sm:text-sm tracking-wide transition-all cursor-pointer shadow-xs ${
                  isActive
                    ? "bg-[#031643] text-white shadow-lg shadow-[#031643]/20 scale-[1.02]"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? "text-emerald-400" : "text-slate-400"}`} />
                <span>{prog.tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Program Detailed Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Title, Subtitle, and Exam Coverage */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  {currentProgram.tag}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-black text-dark tracking-tight mt-3">
                  {currentProgram.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                  {currentProgram.subtitle}
                </p>
              </div>

              {/* Covered Examinations List */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                  Target Examinations & Pathways
                </p>
                <div className="space-y-2.5">
                  {currentProgram.exams.map((exam, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors"
                    >
                      <span className="text-sm font-bold text-slate-800">
                        {exam.name}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-brand-primary shadow-2xs">
                        {exam.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Link */}
              <div className="pt-2">
                <Link
                  href={currentProgram.ctaLink}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-sm shadow-md shadow-brand-primary/20 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <span>{currentProgram.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Curriculum & Skills Checklist */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#031643] to-[#082875] rounded-2xl p-6 sm:p-8 text-white space-y-6 shadow-inner">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-base text-white">
                    {currentProgram.coverageTitle}
                  </h4>
                  <p className="text-xs text-slate-300">
                    Industry-aligned pedagogy & structured drills
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentProgram.coverage.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span>✓ Weekly Diagnostic Mocks</span>
                <span>✓ 1-on-1 Mentor Feedback</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
