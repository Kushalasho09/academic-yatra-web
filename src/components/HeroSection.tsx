"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { Skiper8 } from "@/components/ui/skiper8";

export default function HeroSection() {
  const EXAM_LIST = [
    "IELTS Academic",
    "PTE Core",
    "CELPIP",
    "Duolingo",
    "Digital SAT",
    "GRE",
    "GMAT",
    "German Language",
    "French Language",
    "Career Essentials",
    "TOEFL iBT",
    "Spoken English",
  ];

  return (
    <section className="relative min-h-[64vh] sm:min-h-[66vh] lg:min-h-[68vh] w-full flex flex-col justify-between items-center overflow-hidden bg-[#031643] text-white">
      {/* Skiper8: Dennis Snellenberg Words Preloader */}
      <Skiper8
        words={[
          "Hello",
          "Bonjour",
          "Guten Tag",
          "Namaste",
          "Learn Without Limits",
          "Academic Yatra™",
        ]}
        durationPerWord={200}
        backgroundColor="#031643"
        dotColor="#10B981"
      />

      {/* Video Background: Fullscreen looping background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />

      {/* Hero Section Container: Vertically centered, perfectly balanced */}
      <div className="relative z-10 w-full max-w-[96%] xl:max-w-[94%] 2xl:max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 pt-20 sm:pt-24 lg:pt-24 pb-3 sm:pb-4 flex-1 flex flex-col items-center justify-between text-center">
        
        {/* Upper Text Content */}
        <div className="flex flex-col items-center">
          {/* Main Headline */}
          <h1 className="font-heading text-[22px] xs:text-[25px] sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] font-extrabold text-white leading-[1.16] sm:leading-[1.12] tracking-tight max-w-3xl animate-fade-rise drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            <span>Big exam, new language,</span>
            <span className="block">next career move?</span>
            <span className="block mt-0.5 sm:mt-1 text-emerald-400 drop-shadow-[0_2px_12px_rgba(52,211,153,0.6)]">
              Start here.
            </span>
          </h1>

          {/* Description */}
          <p className="font-body text-slate-100 text-[12px] xs:text-[13px] sm:text-[13px] md:text-sm lg:text-[15px] max-w-xl mx-auto mt-2 sm:mt-2.5 leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] px-2 animate-fade-rise-delay">
            Build skills for the goals ahead, from language and test preparation to practical learning for work. Find your focus, learn with purpose, and see your progress.
          </p>

          {/* Highlights: shown on sm+ screens */}
          <p className="text-emerald-300/90 text-[10px] xs:text-[11px] sm:text-[11.5px] lg:text-xs font-semibold tracking-wider uppercase mt-1.5 sm:mt-2 px-2">
            IELTS • PTE • SAT • GRE • GMAT • FRENCH • GERMAN • <span className="text-[#ED7E23] font-bold drop-shadow-[0_0_12px_rgba(237,126,35,0.4)]">Career Essentials</span>
          </p>
        </div>

        {/* DESKTOP SPLIT LAYOUT (sm and above): Pushed towards left & right edges with compact badges & full-size buttons */}
        <div className="hidden sm:flex w-full items-center justify-between px-1 sm:px-2 lg:px-4 mt-auto pt-3 animate-fade-rise-delay-2">
          {/* Left Corner Group: Full-size Button + Compact Rating Badge */}
          <div className="flex items-center gap-2 lg:gap-3 shrink-0">
            <Link
              href="/contacts"
              className="liquid-glass group inline-flex items-center justify-center gap-2.5 rounded-full pl-5 pr-3.5 sm:pl-6 sm:pr-4 py-2.5 sm:py-3 text-xs sm:text-sm lg:text-[15px] text-white font-semibold hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/35 backdrop-blur-2xl bg-[#031643]/85 hover:bg-[#0C9253]/95 whitespace-nowrap min-w-0"
            >
              <span className="text-white font-semibold tracking-wide leading-none inline-flex items-center">
                Book Your Free 5-Day Trial
              </span>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform border border-white/25 shrink-0 self-center">
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-300" />
              </div>
            </Link>

            {/* Compact Rating Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#031643]/90 backdrop-blur-xl border border-white/25 shadow-lg shadow-black/35 text-[11px] lg:text-xs text-slate-200 whitespace-nowrap">
              <div className="flex text-amber-400 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 lg:w-3 lg:h-3 fill-[#ED7E23] text-[#ED7E23]" />
                ))}
              </div>
              <span className="font-bold text-white tracking-tight">4.9/5 Rating</span>
              <span className="text-slate-300 hidden xl:inline">• 2,400+ Students</span>
            </div>
          </div>

          {/* Central Open Window: Completely empty so background student/laptop is 100% visible */}
          <div className="flex-1 min-w-[20px]" aria-hidden="true" />

          {/* Right Corner Group: Compact Admits Badge + Full-size Button */}
          <div className="flex items-center gap-2 lg:gap-3 shrink-0">
            {/* Compact Admits Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#031643]/90 backdrop-blur-xl border border-white/25 shadow-lg shadow-black/35 text-[11px] lg:text-xs text-slate-200 whitespace-nowrap">
              <TrendingUp className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-emerald-400 shrink-0 stroke-[2.5]" />
              <span className="font-bold text-white tracking-tight">98.6% Admits</span>
              <span className="text-slate-300 hidden xl:inline">• Top Universities</span>
            </div>

            <Link
              href="#tracks"
              className="liquid-glass group inline-flex items-center justify-center gap-2.5 rounded-full pl-5 pr-3.5 sm:pl-6 sm:pr-4 py-2.5 sm:py-3 text-xs sm:text-sm lg:text-[15px] text-white font-semibold hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/35 backdrop-blur-2xl bg-[#031643]/85 hover:bg-white/20 whitespace-nowrap min-w-0"
            >
              <span className="text-white font-semibold tracking-wide leading-none inline-flex items-center">
                Explore Programs
              </span>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform border border-white/25 shrink-0 self-center">
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-300" />
              </div>
            </Link>
          </div>
        </div>

        {/* MOBILE STACKED LAYOUT (xs to sm) */}
        <div className="sm:hidden w-full max-w-md flex flex-col items-center mt-auto pt-2">
          <div className="w-full flex flex-row items-center justify-between gap-1.5 px-1 animate-fade-rise-delay-2">
            <Link
              href="/contacts"
              className="liquid-glass group flex-1 inline-flex items-center justify-center gap-1 xs:gap-1.5 rounded-full pl-2.5 pr-1.5 xs:pl-3 xs:pr-2 py-2 text-[9.5px] xs:text-[10px] text-white font-semibold hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/35 backdrop-blur-2xl bg-[#031643]/85 hover:bg-[#0C9253]/95 whitespace-nowrap min-w-0"
            >
              <span className="text-white font-semibold tracking-tight leading-none inline-flex items-center truncate">
                Book Your Free 5-Day Trial
              </span>
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform border border-white/25 shrink-0 self-center">
                <ArrowRight className="w-2.5 h-2.5 text-emerald-300" />
              </div>
            </Link>

            <Link
              href="#tracks"
              className="liquid-glass group flex-1 inline-flex items-center justify-center gap-1 xs:gap-1.5 rounded-full pl-2.5 pr-1.5 xs:pl-3 xs:pr-2 py-2 text-[9.5px] xs:text-[10px] text-white font-semibold hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/35 backdrop-blur-2xl bg-[#031643]/85 hover:bg-white/20 whitespace-nowrap min-w-0"
            >
              <span className="text-white font-semibold tracking-tight leading-none inline-flex items-center">
                Explore Programs
              </span>
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform border border-white/25 shrink-0 self-center">
                <ArrowRight className="w-2.5 h-2.5 text-slate-300" />
              </div>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 xs:gap-2 mt-2 text-[10px] xs:text-[11px] text-slate-200 animate-fade-rise-delay-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#031643]/90 backdrop-blur-xl border border-white/25 shadow-lg shadow-black/35">
              <div className="flex text-amber-400 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-[#ED7E23] text-[#ED7E23]" />
                ))}
              </div>
              <span className="font-bold text-white tracking-tight">4.9/5 Rating</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#031643]/90 backdrop-blur-xl border border-white/25 shadow-lg shadow-black/35">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[2.5]" />
              <span className="font-bold text-white tracking-tight">98.6% Admits</span>
            </div>
          </div>
        </div>

      </div>

      {/* FULL WIDTH INFINITE SCROLLING TICKER CAROUSEL (Visible on Mobile & Web) */}
      <div className="relative z-10 w-full overflow-hidden select-none py-1.5 sm:py-2.5 border-t border-white/10 bg-black/35 backdrop-blur-md [mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)]">
        <div className="animate-marquee-infinite items-center">
          {/* Track 1 */}
          <div className="flex items-center shrink-0 gap-6 sm:gap-10 whitespace-nowrap font-heading font-extrabold text-xs xs:text-sm sm:text-base lg:text-lg tracking-widest text-emerald-400/90 uppercase pr-6 sm:pr-10">
            {EXAM_LIST.map((exam, idx) => (
              <React.Fragment key={"t1-" + idx}>
                <span className="hover:text-emerald-300 transition-colors cursor-default drop-shadow-sm">
                  {exam}
                </span>
                <span className="text-emerald-500/50 font-bold text-xs sm:text-sm select-none">
                  +
                </span>
              </React.Fragment>
            ))}
          </div>

          {/* Track 2 (Seamless infinite clone) */}
          <div className="flex items-center shrink-0 gap-6 sm:gap-10 whitespace-nowrap font-heading font-extrabold text-xs xs:text-sm sm:text-base lg:text-lg tracking-widest text-emerald-400/90 uppercase pr-6 sm:pr-10" aria-hidden="true">
            {EXAM_LIST.map((exam, idx) => (
              <React.Fragment key={"t2-" + idx}>
                <span className="hover:text-emerald-300 transition-colors cursor-default drop-shadow-sm">
                  {exam}
                </span>
                <span className="text-emerald-500/50 font-bold text-xs sm:text-sm select-none">
                  +
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
