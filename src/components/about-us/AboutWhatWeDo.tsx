"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ChevronRight as ChevronRightSmall,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TrackCard {
  id: string;
  numeral: string;
  pillNum: string;
  title: string;
  shortTitle: string;
  description: string;
  tagline: string;
  href: string;
  theme: {
    accentColor: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    buttonBg: string;
    buttonHover: string;
    cardBorder: string;
    glowShadow: string;
    watermarkColor: string;
    checkColor: string;
  };
  image: string;
  imageAlt: string;
  imageBadge: string;
  tags: string[];
  keyHighlights: string[];
}

const TRACKS: TrackCard[] = [
  {
    id: "language-training",
    numeral: "01",
    pillNum: "TRACK 01",
    title: "01 — Language Training",
    shortTitle: "01 Language Training",
    description: "From your target band to your first fluent conversation.",
    tagline:
      "From IELTS and PTE to everyday conversation, build the language skills you need for study, work, and life abroad.",
    href: "/languages",
    theme: {
      accentColor: "#0C9253",
      badgeBg: "bg-emerald-50",
      badgeText: "text-[#0C9253]",
      badgeBorder: "border-emerald-200",
      buttonBg: "bg-[#0C9253]",
      buttonHover: "hover:bg-emerald-700",
      cardBorder: "border-emerald-200/90",
      glowShadow: "shadow-[0_25px_60px_-15px_rgba(12,146,83,0.18)]",
      watermarkColor: "text-emerald-100/50",
      checkColor: "#0C9253",
    },
    image: "/images/path_language_prep.jpg",
    imageAlt: "Language Training at Academic Yatra",
    imageBadge: "Band 7.5+ & CLB 10 Targets",
    tags: [
      "IELTS",
      "PTE",
      "CELPIP",
      "TOEFL",
      "Duolingo English Test",
      "French",
      "German",
      "Spoken English",
    ],
    keyHighlights: [
      "Structured live masterclasses & daily speaking club drills",
      "Cambridge & Pearson official AI scoring simulations",
      "Personalized 1-on-1 essay corrections & speaking evaluations",
      "Express Entry CRS point boosting & academic study pathways",
    ],
  },
  {
    id: "test-preparation",
    numeral: "02",
    pillNum: "TRACK 02",
    title: "02 — Test Preparation",
    shortTitle: "02 Test Preparation",
    description: "Put your SAT, GRE, or GMAT goals into a clear plan.",
    tagline:
      "Work through exam concepts, practise under timed conditions, and use performance insights to identify what needs more attention.",
    href: "/test-prep",
    theme: {
      accentColor: "#0067E3",
      badgeBg: "bg-blue-50",
      badgeText: "text-[#0067E3]",
      badgeBorder: "border-blue-200",
      buttonBg: "bg-[#0067E3]",
      buttonHover: "hover:bg-blue-700",
      cardBorder: "border-blue-200/90",
      glowShadow: "shadow-[0_25px_60px_-15px_rgba(0,103,227,0.18)]",
      watermarkColor: "text-blue-100/50",
      checkColor: "#0067E3",
    },
    image: "/images/path_competitive_boy.jpg",
    imageAlt: "Competitive Test Preparation at Academic Yatra",
    imageBadge: "99th Percentile Mentorship",
    tags: ["SAT", "GRE", "GMAT"],
    keyHighlights: [
      "Official Bluebook-style adaptive mock tests & Desmos calculator speed hacks",
      "Advanced Quant shortcuts & 1000+ high-frequency GRE vocabulary roots",
      "Critical reasoning frameworks & Data Insights case mastery for GMAT 705+",
      "Direct guidance from 99th percentile instructors with continuous analytics",
    ],
  },
  {
    id: "skill-development",
    numeral: "03",
    pillNum: "TRACK 03",
    title: "03 — Skill Development",
    shortTitle: "03 Skill Development",
    description: "Build skills you can bring into your next role.",
    tagline:
      "Develop workplace communication, business know-how, and interview preparation. Focus on skills you can use beyond the classroom.",
    href: "/skill-catalyst",
    theme: {
      accentColor: "#D97706",
      badgeBg: "bg-amber-50",
      badgeText: "text-amber-700",
      badgeBorder: "border-amber-200",
      buttonBg: "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700",
      buttonHover: "hover:from-amber-600 hover:to-amber-800",
      cardBorder: "border-amber-200/90",
      glowShadow: "shadow-[0_25px_60px_-15px_rgba(245,158,11,0.18)]",
      watermarkColor: "text-amber-100/50",
      checkColor: "#D97706",
    },
    image: "/images/path_skill_development.jpg",
    imageAlt: "Skill Catalyst Development at Academic Yatra",
    imageBadge: "Job-Ready Credentials",
    tags: ["Career Essentials", "BizzTech", "Google Suite Hub"],
    keyHighlights: [
      "ATS resume optimization & STAR technique behavioral mock interviews",
      "Corporate business email writing & high-impact executive presentation skills",
      "Advanced Google Sheets formulas, live interactive dashboards & automation",
      "Real-world capstone projects, portfolio review & verified credentials",
    ],
  },
];

export default function AboutWhatWeDo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const activeTrack = TRACKS[currentIndex];

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TRACKS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TRACKS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="what-we-do"
      className="relative pt-8 sm:pt-14 pb-4 sm:pb-6 bg-[#FBFDFB] overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.18]"
          >
            Three Tracks. Different Goals. <br className="hidden sm:inline" />
            <span className="text-[#0C9253]">One Learning System.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-slate-600 text-xs sm:text-base lg:text-lg leading-relaxed font-normal"
          >
            Explore our three comprehensive educational tracks engineered to help learners achieve standardized exam excellence, language fluency, and career acceleration.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Top Track Navigation Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mb-3.5 sm:mb-6">
            {TRACKS.map((t, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={t.id}
                  onClick={() => goToSlide(idx)}
                  className={cn(
                    "px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-1.5 sm:gap-2 cursor-pointer",
                    isActive
                      ? "bg-slate-900 text-white shadow-md scale-[1.02]"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <span
                    className={cn(
                      "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full",
                      isActive ? "bg-emerald-400 animate-pulse" : "bg-slate-300"
                    )}
                  />
                  <span>{t.shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Card Slide Stage with AnimatePresence */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeTrack.id}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative overflow-hidden rounded-[20px] sm:rounded-[36px] bg-white/98 backdrop-blur-2xl border p-4 sm:p-8 lg:p-10 transition-all duration-300 shadow-sm",
                  activeTrack.theme.cardBorder,
                  activeTrack.theme.glowShadow
                )}
              >
                {/* Subtle Big Watermark Numeral */}
                <div
                  className={cn(
                    "absolute top-2 right-4 sm:right-10 text-[70px] sm:text-[140px] font-black font-heading select-none pointer-events-none leading-none opacity-20 sm:opacity-40",
                    activeTrack.theme.watermarkColor
                  )}
                >
                  {activeTrack.numeral}
                </div>

                {/* Mobile Integrated Media Banner (compact header inside card, preventing split sections on mobile) */}
                <div className="block lg:hidden relative w-full h-32 sm:h-44 rounded-xl sm:rounded-2xl overflow-hidden mb-3.5 shadow-sm border border-slate-200/70 group">
                  <Image
                    src={activeTrack.image}
                    alt={activeTrack.imageAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-md rounded-lg p-2 border border-white/80 shadow-sm flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <Sparkles
                        className="w-3.5 h-3.5 shrink-0"
                        style={{ color: activeTrack.theme.accentColor }}
                      />
                      <span className="text-[11px] font-bold text-slate-900 truncate">
                        {activeTrack.imageBadge}
                      </span>
                    </div>
                    <Link
                      href={activeTrack.href}
                      className="text-[11px] font-extrabold flex items-center gap-0.5 hover:underline shrink-0"
                      style={{ color: activeTrack.theme.accentColor }}
                    >
                      <span>View Track</span>
                      <ChevronRightSmall className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center relative z-10">
                  
                  {/* Left Details Column (7 cols on desktop, full width on mobile) */}
                  <div className="lg:col-span-7 space-y-2.5 sm:space-y-4 text-left">
                    
                    {/* Track Pill */}
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "px-2.5 sm:px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider border",
                          activeTrack.theme.badgeBg,
                          activeTrack.theme.badgeText,
                          activeTrack.theme.badgeBorder
                        )}
                      >
                        {activeTrack.pillNum}
                      </span>

                      <span className="text-[11px] sm:text-xs text-slate-400 font-medium">
                        Academic Yatra Learning Ecosystem
                      </span>
                    </div>

                    {/* Track Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-slate-900 tracking-tight leading-snug">
                      {activeTrack.title}
                    </h3>

                    {/* Main User-Provided Headline */}
                    <p className="text-sm sm:text-base lg:text-lg text-slate-900 font-bold leading-snug">
                      {activeTrack.description}
                    </p>

                    {/* Sub-tagline for context */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {activeTrack.tagline}
                    </p>

                    {/* Covered Programs Badges */}
                    <div className="pt-1">
                      <div className="text-[10px] sm:text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1.5 sm:mb-2">
                        FEATURED EXAMS & MODULES
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {activeTrack.tags.map((item, pIdx) => (
                          <div
                            key={pIdx}
                            className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px] sm:text-xs font-semibold text-slate-800"
                          >
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights Checklist (Desktop only to keep mobile strictly single-screen height) */}
                    <div className="hidden lg:block pt-2 space-y-2 border-t border-slate-100">
                      {activeTrack.keyHighlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600"
                        >
                          <CheckCircle2
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: activeTrack.theme.checkColor }}
                          />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action CTA Button */}
                    <div className="pt-2">
                      <Link
                        href={activeTrack.href}
                        className={cn(
                          "w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full text-white font-heading font-extrabold text-xs sm:text-sm shadow-md transition-all duration-300 hover:scale-105 group cursor-pointer",
                          activeTrack.theme.buttonBg,
                          activeTrack.theme.buttonHover
                        )}
                      >
                        <span>Explore Programs</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </Link>
                    </div>

                  </div>

                  {/* Right Media Column (5 cols) - Desktop only (Mobile uses integrated top banner) */}
                  <div className="hidden lg:block lg:col-span-5 relative">
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-200/70 group">
                      <Image
                        src={activeTrack.image}
                        alt={activeTrack.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Floating Bottom Pill */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-white/80 shadow-md flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Sparkles
                            className="w-4 h-4 shrink-0"
                            style={{ color: activeTrack.theme.accentColor }}
                          />
                          <span className="text-xs font-bold text-slate-900">
                            {activeTrack.imageBadge}
                          </span>
                        </div>
                        
                        <Link
                          href={activeTrack.href}
                          className="text-xs font-extrabold flex items-center gap-1 hover:underline"
                          style={{ color: activeTrack.theme.accentColor }}
                        >
                          <span>View Track</span>
                          <ChevronRightSmall className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Navigation Bottom Controls */}
          <div className="flex items-center justify-between mt-3 sm:mt-5 px-2">
            
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous Track"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 shadow-sm flex items-center justify-center text-slate-700 transition-all cursor-pointer hover:scale-105"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Slide Dots Indicator */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {TRACKS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={cn(
                    "h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer",
                    idx === currentIndex
                      ? "w-6 sm:w-8 bg-slate-900"
                      : "w-1.5 sm:w-2 bg-slate-300 hover:bg-slate-400"
                  )}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              aria-label="Next Track"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 shadow-sm flex items-center justify-center text-slate-700 transition-all cursor-pointer hover:scale-105"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
