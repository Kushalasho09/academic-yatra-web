"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Star,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Skiper8 } from "@/components/ui/skiper8";

export default function HeroSection() {
  const EXAM_LIST = [
    "IELTS",
    "PTE",
    "CELPIP",
    "DUOLINGO",
    "SAT",
    "GRE",
    "GMAT",
    "FRENCH",
    "GERMAN",
    "SPOKEN ENGLISH",
    "TOEFL",
    "ACT",
  ];

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-[#031643] text-white">
      {/* Skiper8: Dennis Snellenberg Words Preloader */}
      <Skiper8
        words={[
          "Hello",
          "Bonjour",
          "Guten Tag",
          "Namaste",
          "Learn Without Limits",
          "Academic Yatra",
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

      {/* Dark overlay gradient for maximum contrast and cinematic feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031643]/80 via-[#031643]/60 to-[#031643]/95 z-0 pointer-events-none" />

      {/* Hero Section Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-4 sm:pt-36 sm:pb-10 flex flex-col items-center justify-center flex-1 text-center">
        

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-[30px] xs:text-[34px] sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold text-white leading-[1.16] sm:leading-[1.08] tracking-tight max-w-5xl"
        >
          <span>Big exam, new language, next career move?</span>
          <span className="block mt-1 sm:mt-2 text-emerald-400 drop-shadow-[0_2px_12px_rgba(52,211,153,0.4)]">
            Start here.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-slate-200 text-[13.5px] xs:text-sm sm:text-base lg:text-lg max-w-xl mx-auto mt-3 sm:mt-6 leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] px-2"
        >
          Build skills for the goals ahead, from language and test preparation to practical learning for work. Find your focus, learn with purpose, and see your progress.
        </motion.p>

        {/* Highlights */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-emerald-300/90 text-[10px] xs:text-xs font-semibold tracking-wider uppercase mt-2.5 sm:mt-3"
        >
          IELTS • PTE • SAT • GRE • GMAT • FRENCH • GERMAN • Career Essentials
        </motion.p>

        {/* Action Buttons: In a Row on Mobile as well as Web */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full max-w-md sm:max-w-none flex flex-row items-center justify-center gap-2.5 sm:gap-4 mt-4 sm:mt-7 px-1"
        >
          <Link
            href="/contacts"
            className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2.5 rounded-full px-4 sm:px-9 py-2.5 sm:py-3.5 text-xs sm:text-sm text-white font-bold hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(16,185,129,0.35)] border border-emerald-400/40 backdrop-blur-xl bg-emerald-600 hover:bg-emerald-500 whitespace-nowrap"
          >
            <span>Book a Free Demo</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Proper Programs Route */}
          <Link
            href="/languages"
            className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2.5 rounded-full px-4 sm:px-8 py-2.5 sm:py-3.5 text-xs sm:text-sm text-white font-bold hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/30 backdrop-blur-xl bg-white/10 hover:bg-white/20 whitespace-nowrap"
          >
            <span>Explore Programs</span>
          </Link>
        </motion.div>

        {/* Proof Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-3.5 sm:mt-6 text-[10.5px] xs:text-xs text-slate-300"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
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
        </motion.div>

      </div>

      {/* FULL WIDTH INFINITE SCROLLING TICKER CAROUSEL */}
      <div className="relative z-10 w-full overflow-hidden select-none py-3 sm:py-4 border-t border-white/10 bg-black/25 backdrop-blur-md [mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-8 sm:gap-14 whitespace-nowrap font-heading font-extrabold text-lg sm:text-2xl tracking-widest text-emerald-400/60 uppercase"
        >
          {[...EXAM_LIST, ...EXAM_LIST, ...EXAM_LIST, ...EXAM_LIST].map((exam, idx) => (
            <React.Fragment key={idx}>
              <span className="hover:text-emerald-300 transition-colors cursor-default drop-shadow-sm">
                {exam}
              </span>
              <span className="text-emerald-500/40 font-bold text-base sm:text-xl">
                +
              </span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
