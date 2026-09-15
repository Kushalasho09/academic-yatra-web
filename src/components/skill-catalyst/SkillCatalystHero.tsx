"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Skiper8 } from "@/components/ui/skiper8";

export default function SkillCatalystHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#031643] text-white">
      {/* Skiper8: Words Preloader */}
      <Skiper8
        words={[
          "Career Essentials",
          "BizzTech",
          "Google Suite Hub",
          "Workplace Skills",
          "Academic Yatra",
        ]}
        durationPerWord={200}
        backgroundColor="#031643"
        dotColor="#0C9253"
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

      {/* Dark overlay gradient for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031643]/75 via-[#031643]/50 to-[#031643]/90 z-0 pointer-events-none" />

      {/* Hero Section Container: flex-col justify-between */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-8 sm:pt-36 sm:pb-20 flex flex-col items-center justify-between min-h-screen text-center">
        {/* Upper / Center Text Content */}
        <div className="flex flex-col items-center my-auto pt-6 sm:pt-0">
          {/* Cinematic H1 Typography with relaxed leading */}
          <h1
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-4xl sm:text-7xl md:text-8xl leading-[1.16] sm:leading-[1.08] md:leading-[1.06] tracking-[-1.5px] sm:tracking-[-2px] max-w-6xl font-normal text-white animate-fade-rise"
          >
            Develop In-Demand Skills for the{" "}
            <em className="not-italic text-emerald-400">
              Modern Workplace &amp; Career Growth.
            </em>
          </h1>

          {/* Subtext */}
          <p className="text-slate-200 text-sm sm:text-lg max-w-2xl mt-5 sm:mt-8 leading-relaxed font-body animate-fade-rise-delay drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] px-2">
            Develop workplace, business, and digital competencies that employers value
            through practical, career-focused learning experiences.
          </p>
        </div>

        {/* Translucent Frosted Glass CTA Action Buttons in a Row at the Bottom */}
        <div className="w-full max-w-md sm:max-w-none flex flex-row items-center justify-center gap-2.5 sm:gap-6 mt-6 sm:mt-12 mb-4 sm:mb-2 px-1 sm:px-0 animate-fade-rise-delay-2">
          <Link
            href="/contacts"
            className="liquid-glass group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full px-3.5 sm:px-12 py-3 sm:py-4.5 text-xs sm:text-base text-white font-semibold hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/35 backdrop-blur-2xl bg-[#031643]/85 hover:bg-[#0C9253]/95 whitespace-nowrap"
          >
            <span className="text-white font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] tracking-tight sm:tracking-wide">
              Book 5 Day Demo
            </span>
            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform border border-white/25 flex-shrink-0">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-300" />
            </div>
          </Link>

          <a
            href="https://web.whatsapp.com/send?phone=+919403892981&text=Hi,%20I%20would%20like%20to%20book%20a%20free%20Skill%20Catalyst%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full px-3.5 sm:px-10 py-3 sm:py-4.5 text-xs sm:text-base text-white font-semibold hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/35 backdrop-blur-2xl bg-[#031643]/85 hover:bg-[#031643]/95 whitespace-nowrap"
          >
            <span className="text-white font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] tracking-tight sm:tracking-wide">
              Free Consultation
            </span>
            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform border border-white/25 flex-shrink-0">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
