"use client";

import React, { useState, useEffect } from "react";
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
  programsList: { name: string; badge: string }[];
  keyHighlights: string[];
}

const TRACKS: TrackCard[] = [
  {
    id: "language-training",
    numeral: "01",
    pillNum: "TRACK 01",
    title: "01 — Language Training",
    shortTitle: "01 Language Training",
    description:
      "IELTS, PTE, CELPIP, TOEFL, French & German for academic, professional and real-world communication.",
    tagline:
      "Structured, immersive language coaching with daily speaking practice, Cambridge & Pearson aligned mocks, and native mentor feedback.",
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
    programsList: [
      { name: "IELTS Academic & General", badge: "Band 7.5+" },
      { name: "PTE Academic & Core", badge: "Score 79+" },
      { name: "CELPIP General", badge: "Canadian PR" },
      { name: "TOEFL iBT", badge: "Score 100+" },
      { name: "Duolingo DET", badge: "Score 125+" },
      { name: "French Preparation", badge: "DELF / TEF" },
      { name: "German Preparation", badge: "Goethe A1-B2" },
      { name: "Spoken English", badge: "Fluency & Accent" },
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
    description: "SAT/DSAT, GRE & GMAT.",
    tagline:
      "Target top global universities and scholarships with rigorous Quant problem-solving, verbal reasoning, and computer-adaptive diagnostic analytics.",
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
    programsList: [
      { name: "Digital SAT / DSAT", badge: "Target 1500+" },
      { name: "GRE General", badge: "Target 325+" },
      { name: "GMAT Focus Edition", badge: "Target 705+" },
      { name: "Master's Combo", badge: "GRE + IELTS" },
      { name: "Executive MBA Track", badge: "Weekend Batches" },
    ],
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
    description: "Practical communication, workplace and digital skills.",
    tagline:
      "Transform into a workplace-ready professional with hands-on corporate communication, ATS resume crafting, advanced spreadsheets, and modern business tech.",
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
    programsList: [
      { name: "Career Essentials", badge: "Workplace Ready" },
      { name: "BizzTech", badge: "Digital & Tech Tools" },
      { name: "Google Suite Hub", badge: "Advanced Sheets & Docs" },
      { name: "Skill Catalyst Combo", badge: "Triple Certification" },
    ],
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
      className="relative pt-10 sm:pt-14 pb-2 sm:pb-4 bg-[#FBFDFB] overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.18]"
          >
            Three Tracks. Different Goals. <br className="hidden sm:inline" />
            <span className="text-[#0C9253]">One Learning System.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal"
          >
            Explore our three comprehensive educational tracks engineered to help learners achieve standardized exam excellence, language fluency, and career acceleration.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Top Track Navigation Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-6">
            {TRACKS.map((t, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={t.id}
                  onClick={() => goToSlide(idx)}
                  className={cn(
                    "px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 cursor-pointer",
                    isActive
                      ? "bg-slate-900 text-white shadow-md scale-[1.02]"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <span
                    className={cn(
                      "w-2 h-2 rounded-full",
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
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-white/98 backdrop-blur-2xl border p-6 sm:p-8 lg:p-10 transition-all duration-300",
                  activeTrack.theme.cardBorder,
                  activeTrack.theme.glowShadow
                )}
              >
                {/* Subtle Big Watermark Numeral Matching Image 1 */}
                <div
                  className={cn(
                    "absolute top-2 right-6 sm:right-10 text-[100px] sm:text-[140px] font-black font-heading select-none pointer-events-none leading-none opacity-40 sm:opacity-50",
                    activeTrack.theme.watermarkColor
                  )}
                >
                  {activeTrack.numeral}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                  
                  {/* Left Details Column (7 cols) */}
                  <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
                    
                    {/* Track Pill matching Image 1 */}
                    <div className="flex items-center gap-2.5">
                      <span
                        className={cn(
                          "px-3 py-0.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider border",
                          activeTrack.theme.badgeBg,
                          activeTrack.theme.badgeText,
                          activeTrack.theme.badgeBorder
                        )}
                      >
                        {activeTrack.pillNum}
                      </span>

                      <span className="text-xs text-slate-400 font-medium">
                        Academic Yatra Learning Ecosystem
                      </span>
                    </div>

                    {/* Track Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 tracking-tight leading-snug">
                      {activeTrack.title}
                    </h3>

                    {/* Main User-Provided Description */}
                    <p className="text-base sm:text-lg text-slate-900 font-semibold leading-relaxed">
                      {activeTrack.description}
                    </p>

                    {/* Sub-tagline for context */}
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {activeTrack.tagline}
                    </p>

                    {/* Covered Programs Badges */}
                    <div className="pt-1">
                      <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                        FEATURED EXAMS & MODULES
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {activeTrack.programsList.map((item, pIdx) => (
                          <div
                            key={pIdx}
                            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800"
                          >
                            <span>{item.name}</span>
                            <span className="text-[10px] px-1.5 py-0.2 rounded font-extrabold bg-white border border-slate-200 text-slate-600">
                              {item.badge}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights Checklist with custom colored checks */}
                    <div className="pt-2 space-y-2 border-t border-slate-100">
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
                          "inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3.5 rounded-full text-white font-heading font-extrabold text-xs sm:text-sm shadow-md transition-all duration-300 hover:scale-105 group cursor-pointer",
                          activeTrack.theme.buttonBg,
                          activeTrack.theme.buttonHover
                        )}
                      >
                        <span>Explore Programs</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </Link>
                    </div>

                  </div>

                  {/* Right Media Column (5 cols) matching Image 1 */}
                  <div className="lg:col-span-5 relative">
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-200/70 group">
                      <Image
                        src={activeTrack.image}
                        alt={activeTrack.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Floating Bottom Pill matching Image 1 */}
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
          <div className="flex items-center justify-between mt-4 sm:mt-5 px-2">
            
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous Track"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 shadow-sm flex items-center justify-center text-slate-700 transition-all cursor-pointer hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slide Dots Indicator */}
            <div className="flex items-center gap-2">
              {TRACKS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300 cursor-pointer",
                    idx === currentIndex
                      ? "w-8 bg-slate-900"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  )}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              aria-label="Next Track"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 shadow-sm flex items-center justify-center text-slate-700 transition-all cursor-pointer hover:scale-105"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
