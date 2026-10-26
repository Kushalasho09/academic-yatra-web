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
    <section className="relative min-h-[72vh] sm:min-h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-[#031643] text-white">
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

      {/* Hero Section Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-3 sm:pt-40 sm:pb-8 flex flex-col items-center justify-between min-h-[64vh] sm:min-h-[88vh] text-center">
        
        {/* Upper Text Content */}
        <div className="flex flex-col items-center pt-1 sm:pt-0">
          {/* Main Headline */}
          <h1 className="font-heading text-[22px] xs:text-[25px] sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold text-white leading-[1.18] sm:leading-[1.08] tracking-tight max-w-4xl animate-fade-rise drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            <span>Big exam, new language,</span>
            <span className="block">next career move?</span>
            <span className="block mt-0.5 sm:mt-2 text-emerald-400 drop-shadow-[0_2px_12px_rgba(52,211,153,0.6)]">
              Start here.
            </span>
          </h1>

          {/* Description */}
          <p className="font-body text-slate-100 text-[12px] xs:text-[13px] sm:text-lg max-w-xl mx-auto mt-2 sm:mt-5 leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] px-2 animate-fade-rise-delay">
            Build skills for the goals ahead, from language and test preparation to practical learning for work. Find your focus, learn with purpose, and see your progress.
          </p>

          {/* Highlights: shown on sm+ screens */}
          <p className="hidden sm:block text-emerald-300/90 text-xs font-semibold tracking-wider uppercase mt-3">
            IELTS • PTE • SAT • GRE • GMAT • FRENCH • GERMAN • <span className="text-[#ED7E23] font-bold drop-shadow-[0_0_12px_rgba(237,126,35,0.4)]">Career Essentials</span>
          </p>
        </div>

        {/* Action Buttons: Aligned cleanly at the bottom edge */}
        <div className="w-full max-w-md sm:max-w-none flex flex-col items-center mt-auto">
          <div className="w-full flex flex-row items-center justify-between gap-1.5 sm:gap-6 px-1 sm:px-0 animate-fade-rise-delay-2">
            <Link
              href="/contacts"
              className="liquid-glass group flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-3 rounded-full pl-2.5 pr-1.5 xs:pl-3 xs:pr-2 sm:pl-7 sm:pr-4 py-2 sm:py-3.5 text-[9.5px] xs:text-[10px] sm:text-base text-white font-semibold hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/35 backdrop-blur-2xl bg-[#031643]/85 hover:bg-[#0C9253]/95 whitespace-nowrap min-w-0"
            >
              <span className="text-white font-semibold tracking-tight sm:tracking-wide leading-none inline-flex items-center truncate">
                Book Your Free 5-Day Demo
              </span>
              <div className="w-4 h-4 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform border border-white/25 shrink-0 self-center">
                <ArrowRight className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-emerald-300" />
              </div>
            </Link>

            <Link
              href="/languages"
              className="liquid-glass group flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-3 rounded-full pl-2.5 pr-1.5 xs:pl-3 xs:pr-2 sm:pl-7 sm:pr-4 py-2 sm:py-3.5 text-[9.5px] xs:text-[10px] sm:text-base text-white font-semibold hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/35 backdrop-blur-2xl bg-[#031643]/85 hover:bg-white/20 whitespace-nowrap min-w-0"
            >
              <span className="text-white font-semibold tracking-tight sm:tracking-wide leading-none inline-flex items-center">
                Explore Programs
              </span>
              <div className="w-4 h-4 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform border border-white/25 shrink-0 self-center">
                <ArrowRight className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-slate-300" />
              </div>
            </Link>
          </div>

          {/* Proof Badges: Shown on sm+ screens */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4 text-[10.5px] xs:text-xs text-slate-300">
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#ED7E23] text-[#ED7E23]" />
                ))}
              </div>
              <span className="font-bold text-white">4.9/5 Rating</span>
              <span className="text-slate-400 hidden xs:inline">• 2,400+ Students</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
              <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span className="font-bold text-white">98.6% Admits</span>
              <span className="text-slate-400 hidden xs:inline">• Top Universities</span>
            </div>
          </div>
        </div>

      </div>

      {/* FULL WIDTH INFINITE SCROLLING TICKER CAROUSEL (Visible on Mobile & Web) */}
      <div className="relative z-10 w-full overflow-hidden select-none py-2 sm:py-3 border-t border-white/10 bg-black/35 backdrop-blur-md [mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)]">
        <div className="animate-marquee-infinite items-center">
          {/* Track 1 */}
          <div className="flex items-center shrink-0 gap-6 sm:gap-12 whitespace-nowrap font-heading font-extrabold text-xs xs:text-sm sm:text-2xl tracking-widest text-emerald-400/90 uppercase pr-6 sm:pr-12">
            {EXAM_LIST.map((exam, idx) => (
              <React.Fragment key={"t1-" + idx}>
                <span className="hover:text-emerald-300 transition-colors cursor-default drop-shadow-sm">
                  {exam}
                </span>
                <span className="text-emerald-500/50 font-bold text-xs sm:text-lg select-none">
                  +
                </span>
              </React.Fragment>
            ))}
          </div>

          {/* Track 2 (Seamless infinite clone) */}
          <div className="flex items-center shrink-0 gap-6 sm:gap-12 whitespace-nowrap font-heading font-extrabold text-xs xs:text-sm sm:text-2xl tracking-widest text-emerald-400/90 uppercase pr-6 sm:pr-12" aria-hidden="true">
            {EXAM_LIST.map((exam, idx) => (
              <React.Fragment key={"t2-" + idx}>
                <span className="hover:text-emerald-300 transition-colors cursor-default drop-shadow-sm">
                  {exam}
                </span>
                <span className="text-emerald-500/50 font-bold text-xs sm:text-lg select-none">
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
