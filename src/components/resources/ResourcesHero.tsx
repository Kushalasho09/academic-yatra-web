"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Skiper8 } from "@/components/ui/skiper8";

export default function ResourcesHero() {
  return (
    <section className="relative min-h-[65vh] sm:min-h-[75vh] w-full flex flex-col justify-between items-center overflow-hidden bg-[#031643] text-white">
      {/* Animated Words Preloader */}
      <Skiper8
        words={[
          "Knowledge",
          "Visa Roadmaps",
          "Test Prep",
          "Study in Germany",
          "Academic Yatra™",
        ]}
        durationPerWord={200}
        backgroundColor="#031643"
        dotColor="#0C9253"
      />

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />

      {/* Ambient Radial Gradient Glow */}
      <div className="absolute inset-0 z-0 bg-radial-gradient from-emerald-600/15 via-transparent to-transparent pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-8 sm:pt-40 sm:pb-14 flex flex-col items-center justify-between min-h-[65vh] sm:min-h-[75vh] text-center">
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-emerald-300 mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Academic Yatra Resource Library &amp; Articles</span>
          </div>

          {/* Cinematic H1 Headline */}
          <h1
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-[34px] xs:text-[42px] sm:text-7xl md:text-8xl leading-[1.12] sm:leading-[1.06] tracking-[-1px] sm:tracking-[-2px] max-w-5xl font-normal text-white animate-fade-rise"
          >
            Insights, Guides &amp;{" "}
            <em className="not-italic text-emerald-400">
              Roadmaps
            </em>{" "}
            for Your{" "}
            <em className="not-italic text-slate-300">
              Global Journey.
            </em>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-sm sm:text-lg max-w-2xl mt-4 sm:mt-6 leading-relaxed font-body animate-fade-rise-delay drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] px-2">
            Curated articles on free tuition admissions, IELTS Band 8+ blueprints,
            European visa checklists, and high-growth global tech careers.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="w-full max-w-md sm:max-w-none flex flex-row items-center justify-center gap-4 mt-auto pt-8 px-2 animate-fade-rise-delay-2">
          <a
            href="#articles-list"
            className="liquid-glass group inline-flex items-center justify-center gap-2.5 rounded-full px-6 sm:px-8 py-3 text-xs sm:text-sm text-white font-semibold hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-white/35 backdrop-blur-2xl bg-[#0C9253]/90 hover:bg-[#0C9253]"
          >
            <BookOpen className="w-4 h-4 text-emerald-200" />
            <span>Explore All Articles</span>
          </a>

          <a
            href="https://wa.me/919217368750?text=Hi,%20I%20have%20a%20question%20regarding%20Academic%20Yatra%20study%20abroad%20resources."
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass group inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-8 py-3 text-xs sm:text-sm text-white font-semibold hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-white/35 backdrop-blur-2xl bg-white/10 hover:bg-white/20"
          >
            <span>Ask an Expert</span>
            <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
