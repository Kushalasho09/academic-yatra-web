"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Skiper8 } from "@/components/ui/skiper8";
import { PackageDetailData } from "@/data/packageDetailsData";

interface PackageDetailHeroProps {
  data: PackageDetailData;
  onOpenBooking: (type?: string) => void;
}

export default function PackageDetailHero({ data, onOpenBooking }: PackageDetailHeroProps) {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#031643] text-white">
      {/* Skiper8: Dennis Snellenberg Words Preloader */}
      <Skiper8
        words={[
          data.titleHighlight,
          "Live Classes",
          "Band 7.5+",
          "Cambridge Mocks",
          "Study Abroad",
          "Academic Yatra",
        ]}
        durationPerWord={200}
        backgroundColor="#031643"
        dotColor="#0C9253"
      />

      {/* Looping video background matching Languages and Test Prep heroes */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />

      {/* Dark overlay gradient for cinematic contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031643]/80 via-[#031643]/55 to-[#031643]/90 z-0 pointer-events-none" />

      {/* Ambient decorative glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Hero Section Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-12 sm:pt-36 sm:pb-20 flex flex-col items-center justify-between min-h-screen text-center">
        
        {/* Upper / Center Content */}
        <div className="flex flex-col items-center my-auto pt-6 sm:pt-0 max-w-5xl">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-emerald-300 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{data.eyebrow}</span>
          </div>

          {/* Cinematic H1 Typography */}
          <h1
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-4xl sm:text-7xl md:text-8xl leading-[1.14] sm:leading-[1.08] md:leading-[1.05] tracking-[-1.5px] sm:tracking-[-2px] font-normal text-white animate-fade-rise"
          >
            {data.titlePrefix}
            {data.titleHighlight && (
              <>
                {data.titlePrefix ? " " : ""}
                <em className="not-italic text-emerald-400">
                  {data.titleHighlight}
                </em>
              </>
            )}
          </h1>

          {/* Subtext */}
          <p className="text-slate-200 text-sm sm:text-lg max-w-3xl mt-5 sm:mt-7 leading-relaxed font-body animate-fade-rise-delay drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] px-2">
            {data.heroDescription}
          </p>
        </div>

        {/* Translucent Frosted Glass CTA Action Buttons in a Row */}
        <div className="w-full max-w-md sm:max-w-none flex flex-row items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-12 mb-4 sm:mb-2 px-1 sm:px-0 animate-fade-rise-delay-2">
          <button
            onClick={() => onOpenBooking("Book 5 Day Demo")}
            className="liquid-glass group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full px-4 sm:px-10 py-3 sm:py-4 text-xs sm:text-base text-white font-semibold hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/35 backdrop-blur-2xl bg-[#031643]/85 hover:bg-[#0C9253]/95 whitespace-nowrap"
          >
            <span className="text-white font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] tracking-tight sm:tracking-wide">
              Book 5 Day Demo
            </span>
            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform border border-white/25 flex-shrink-0">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-300" />
            </div>
          </button>

          <button
            onClick={() => onOpenBooking("Book Free Consultation")}
            className="liquid-glass group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full px-4 sm:px-10 py-3 sm:py-4 text-xs sm:text-base text-white font-semibold hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/35 backdrop-blur-2xl bg-[#031643]/85 hover:bg-[#031643]/95 whitespace-nowrap"
          >
            <span className="text-white font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] tracking-tight sm:tracking-wide">
              Free Consultation
            </span>
            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform border border-white/25 flex-shrink-0">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
