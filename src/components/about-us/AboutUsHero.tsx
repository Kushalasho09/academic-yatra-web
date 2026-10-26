"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutUsHero() {
  return (
    <section className="relative min-h-[72vh] sm:min-h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-[#031643] text-white">
      {/* Video Background: Fullscreen looping background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />

      {/* Hero Section Container: 60:40 viewport height on mobile */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 xs:pt-24 sm:pt-36 pb-4 sm:pb-10 flex flex-col items-center justify-between min-h-[66vh] sm:min-h-[88vh] text-center">
        {/* Upper Text Content */}
        <div className="flex flex-col items-center pt-1 sm:pt-0">
          {/* Main Headline */}
          <h1 className="font-heading text-[22px] xs:text-[25px] sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.18] sm:leading-[1.08] tracking-tight max-w-4xl animate-fade-rise drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            For the language your dreams speak
          </h1>

          {/* Subtitle / Description */}
          <p className="font-body text-slate-100 text-[11.5px] xs:text-[12.5px] sm:text-lg max-w-xl mx-auto mt-2 sm:mt-4 leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] px-2 animate-fade-rise-delay">
            Academic Yatra™ is a comprehensive digital learning platform for language training, test preparation, and practical skill development, preparing students and professionals for international opportunities.
          </p>

          {/* Quick Track Pillar Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 mt-2 sm:mt-3 text-[10.5px] xs:text-xs sm:text-sm font-semibold animate-fade-rise-delay">
            <Link
              href="/languages"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 xs:px-3 xs:py-1 rounded-full bg-[#031643]/85 border border-emerald-400/50 text-white backdrop-blur-2xl shadow-lg hover:border-emerald-400 hover:scale-[1.03] transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
              <span>Language Training</span>
            </Link>
            <Link
              href="/test-prep"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 xs:px-3 xs:py-1 rounded-full bg-[#031643]/85 border border-sky-400/50 text-white backdrop-blur-2xl shadow-lg hover:border-sky-400 hover:scale-[1.03] transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
              <span>Test Preparation</span>
            </Link>
            <Link
              href="/skill-catalyst"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 xs:px-3 xs:py-1 rounded-full bg-[#031643]/85 border border-amber-400/50 text-white backdrop-blur-2xl shadow-lg hover:border-amber-400 hover:scale-[1.03] transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] shadow-[0_0_8px_#FBBF24]" />
              <span>Skill Development</span>
            </Link>
          </div>
        </div>

        {/* Translucent Frosted Glass CTA Action Buttons: Aligned cleanly at the bottom edge */}
        <div className="w-full max-w-md sm:max-w-none flex flex-row items-center justify-between gap-1.5 sm:gap-6 mt-auto pt-3 px-1 sm:px-0 animate-fade-rise-delay-2">
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
      </div>
    </section>
  );
}

