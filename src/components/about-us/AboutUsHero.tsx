"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Building2, MessageCircle } from "lucide-react";
import { Skiper8 } from "@/components/ui/skiper8";
import { AnimatedRays } from "@/components/ui/animated-rays";

export default function AboutUsHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#031643] text-white">
      {/* Skiper8: Dennis Snellenberg Words Preloader */}
      <Skiper8
        words={[
          "About Academic Yatra",
          "Future Yatra Pvt Ltd",
          "Language Mastery",
          "Test Preparation",
          "Global Education",
          "New Delhi",
        ]}
        durationPerWord={190}
        backgroundColor="#031643"
        dotColor="#0C9253"
      />

      {/* Cinematic Background Video Loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />

      {/* Animated Light Rays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <AnimatedRays className="opacity-35" forceDark={true} />
      </div>

      {/* Ambient Radial Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031643]/90 via-[#031643]/70 to-[#031643]/95 z-0 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-16 sm:pt-36 sm:pb-20 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Main Title & Description */}
        <div className="flex flex-col items-center mt-auto mb-6 sm:mb-8 pt-8 sm:pt-12">
          {/* Cinematic Serif Heading */}
          <h1
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-4xl sm:text-7xl md:text-8xl leading-[1.14] sm:leading-[1.08] tracking-[-1.5px] sm:tracking-[-2px] max-w-5xl font-normal text-white animate-fade-rise"
          >
            Empowering Global{" "}
            <em className="not-italic text-emerald-400">
              Education & Career Success.
            </em>
          </h1>

          {/* Subtitle / Mission Statement */}
          <p className="text-slate-200 text-sm sm:text-lg max-w-3xl mt-6 sm:mt-8 leading-relaxed font-body animate-fade-rise-delay drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] px-2">
            Academic Yatra, by Future Yatra Private Limited, empowers students and professionals
            through expert language training, test preparation, and digital learning solutions,
            helping them build the skills and proficiency needed for global education, careers,
            and international opportunities.
          </p>
        </div>

        {/* Action Buttons: Liquid Glass Floating Bar */}
        <div className="w-full max-w-md sm:max-w-none flex flex-row items-center justify-center gap-3 sm:gap-6 mt-2 sm:mt-4 mb-auto animate-fade-rise-delay-2">
          <a
            href="#corporate-ecosystem"
            className="liquid-glass group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full px-4 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-base text-white font-semibold hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/35 backdrop-blur-2xl bg-[#0C9253]/90 hover:bg-[#0C9253] whitespace-nowrap"
          >
            <Building2 className="w-4 h-4 text-emerald-200" />
            <span className="text-white font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] tracking-tight sm:tracking-wide">
              Explore Our Verticals
            </span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform border border-white/25 flex-shrink-0">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </a>

          <a
            href="https://web.whatsapp.com/send?phone=+919403892981&text=Hi%20Academic%20Yatra,%20I%20am%20interested%20in%20learning%20more%20about%20your%20programs."
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full px-4 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-base text-white font-semibold hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/35 backdrop-blur-2xl bg-[#031643]/85 hover:bg-[#031643]/95 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-white font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] tracking-tight sm:tracking-wide">
              WhatsApp Chat
            </span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform border border-white/25 flex-shrink-0">
              <ArrowRight className="w-3 h-3 text-emerald-300" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
