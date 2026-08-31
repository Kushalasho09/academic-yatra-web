"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Star,
  Sparkles,
  Zap,
  ArrowRight,
} from "lucide-react";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";

export default function HeroSection() {
  const easeCurve = [0.16, 1, 0.3, 1];

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
    <section className="relative overflow-hidden bg-white pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-10 flex flex-col justify-between">
      {/* Animated Light Theme Gradient Background using design.md Brand Tokens */}
      <AnimatedGradientBackground
        Breathing={true}
        startingGap={120}
        animationSpeed={0.02}
        breathingRange={5}
        centerPosition="50% 25%"
        gradientColors={[
          "#FFFFFF", // Pure Crisp White Center
          "#E7F7EE", // brand-green-tint
          "#E5F0FC", // brand-tint
          "#D2E8FC", // Soft Accent Blue Tint
          "#DAF5E7", // Soft Primary Green Tint
          "#E5F0FC", // brand-tint
          "#FFFFFF", // Pure White Outer Base
        ]}
        gradientStops={[30, 48, 62, 74, 86, 94, 100]}
        containerClassName="z-0 opacity-80 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
      />

      {/* Seamless Bottom Gradient Fade into Next Section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Typography & Call To Action */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeCurve }}
            className="lg:col-span-5 space-y-5 sm:space-y-6 text-left flex flex-col justify-center"
          >
            {/* Subtitle / Eyebrow */}
            <div className="flex items-center space-x-2.5">
              <span className="w-8 h-[3.5px] bg-brand-primary rounded-full inline-block" />
              <span className="text-brand-primary font-bold text-sm sm:text-base tracking-wide uppercase">
                Your Knowledge Is Our Priority
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-dark leading-[1.12] tracking-tight">
              Learn Without Limits
              <br />
              Grow Your{" "}
              <span className="text-brand-primary font-accent italic font-normal">
                Knowledge
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="font-body text-muted text-base sm:text-lg leading-relaxed max-w-md font-normal">
              Become more efficient and gain your knowledge to the next level. Industry-standard courses are for you. Let&apos;s unlock your potential.
            </p>

            {/* Exam / Language Programs Highlight */}
            <p className="font-body text-xs sm:text-sm font-medium text-slate-500 tracking-wide">
              IELTS • PTE • SAT • GRE • GMAT • Duolingo • French • German
            </p>

            {/* Primary Action Button Group */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:shadow-brand-primary/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/counselling-platform"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-brand-accent hover:text-brand-accentDark font-semibold text-base px-6 py-4 rounded-xl border border-line shadow-sm hover:shadow-md hover:border-brand-accent/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Programs</span>
              </Link>
            </div>

            {/* MOBILE-ONLY PROOF BADGES (Non-overlapping, Clean Inline Grid) */}
            <div className="grid grid-cols-2 gap-3 pt-3 md:hidden w-full max-w-md">
              <div className="bg-white/95 backdrop-blur-md border border-line p-2.5 rounded-xl shadow-sm flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-accent/15 text-brand-accent flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-[11px] font-bold text-dark leading-tight">4.9/5 Rating</p>
                </div>
              </div>
              <div className="bg-white/95 backdrop-blur-md border border-line p-2.5 rounded-xl shadow-sm flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/15 text-brand-primary flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-dark leading-tight">98.6% Admits</p>
                  <p className="text-[9px] text-muted">Top Universities</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Student Cutout with Flawlessly Positioned Floating Proof Widgets */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: easeCurve }}
            className="lg:col-span-7 relative flex items-center justify-center select-none pt-4 pb-2"
          >
            {/* Visual Wrapper with Outer Margin for Perimeter Floating Badges */}
            <div className="relative w-full max-w-[620px] lg:max-w-[680px] flex items-center justify-center">
              
              {/* Main Student Image with Smooth Bottom Gradient Fade */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.015 }}
                className="relative z-10 w-full flex items-center justify-center transition-transform duration-300"
              >
                <div
                  className="relative w-full flex items-center justify-center"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 56%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0) 98%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 56%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0) 98%)",
                  }}
                >
                  <Image
                    src="/images/indian-college-students-removebg-preview.png"
                    alt="Indian College Students"
                    width={700}
                    height={520}
                    priority
                    className="w-full max-w-[560px] lg:max-w-[620px] h-auto object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.08)] select-none pointer-events-none"
                  />
                </div>
              </motion.div>

              {/* FLOATING PROOF WIDGET 1 (Top Left Outer Perimeter - Above Shoulder, NOT on Face) */}
              <motion.div
                animate={{ y: [0, -7, 0], x: [0, 2, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.06, y: -4 }}
                className="absolute -top-6 -left-4 md:-left-8 lg:-left-12 z-30 bg-white/95 backdrop-blur-xl border border-white/80 p-2.5 sm:p-3 rounded-2xl shadow-[0_14px_35px_rgba(0,103,227,0.12)] hidden md:flex items-center gap-2.5 cursor-pointer group hover:border-brand-accent/40 hover:shadow-2xl transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-accent to-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:rotate-6 transition-transform">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                      ))}
                    </span>
                    <span className="text-[10px] font-bold text-dark ml-0.5">4.9/5</span>
                  </div>
                  <p className="text-dark text-xs font-extrabold tracking-tight">
                    Top 1% Global Mentors
                  </p>
                  <p className="text-muted text-[10px]">SAT 1500+ • IELTS 8.5+</p>
                </div>
              </motion.div>

              {/* FLOATING PROOF WIDGET 2 (Top Right Outer Perimeter - Above Shoulder, NOT on Face) */}
              <motion.div
                animate={{ y: [0, 7, 0], x: [0, -2, 0] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                whileHover={{ scale: 1.06, y: -4 }}
                className="absolute -top-6 -right-4 md:-right-8 lg:-right-12 z-30 bg-white/95 backdrop-blur-xl border border-white/80 p-2.5 sm:p-3 rounded-2xl shadow-[0_14px_35px_rgba(12,146,83,0.12)] hidden md:flex items-center gap-2.5 cursor-pointer group hover:border-brand-primary/40 hover:shadow-2xl transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-primary to-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/25 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-dark">
                    <span>🇺🇸 🇬🇧 🇨🇦 🇦🇺</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-ping" />
                  </div>
                  <p className="text-dark text-xs font-extrabold tracking-tight">
                    98.6% Visa & Admit Rate
                  </p>
                  <p className="text-muted text-[10px]">Top Global Universities</p>
                </div>
              </motion.div>

              {/* FLOATING PROOF WIDGET 3 (Bottom Left Outer Perimeter - At Waist Level) */}
              <motion.div
                animate={{ y: [0, 6, 0], x: [0, -2, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                whileHover={{ scale: 1.06, y: -4 }}
                className="absolute bottom-20 -left-6 md:-left-10 lg:-left-16 z-30 bg-white/95 backdrop-blur-xl border border-white/80 p-2.5 sm:p-3 rounded-2xl shadow-[0_14px_35px_rgba(0,0,0,0.08)] hidden md:flex items-center gap-3 cursor-pointer group hover:border-brand-primary/40 hover:shadow-2xl transition-all"
              >
                {/* Overlapping Avatar Stack */}
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image src="/images/avatar_indian_girl.jpg" alt="Student" fill className="object-cover" />
                  </div>
                  <div className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image src="/images/avatar_indian_boy.jpg" alt="Student" fill className="object-cover" />
                  </div>
                  <div className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image src="/images/avatar_student_female2.jpg" alt="Student" fill className="object-cover" />
                  </div>
                </div>
                <div>
                  <p className="text-dark text-xs font-extrabold tracking-tight flex items-center gap-1.5">
                    <span>15,000+</span>
                    <span className="text-[9px] font-bold text-brand-primary bg-brand-greenTint px-1.5 py-0.5 rounded-full">
                      Trained
                    </span>
                  </p>
                  <p className="text-muted text-[10px]">Verified Student Journeys</p>
                </div>
              </motion.div>

              {/* FLOATING PROOF WIDGET 4 (Bottom Right Outer Perimeter - At Waist Level) */}
              <motion.div
                animate={{ y: [0, -6, 0], x: [0, 2, 0] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                whileHover={{ scale: 1.06, y: -4 }}
                className="absolute bottom-16 -right-6 md:-right-10 lg:-right-16 z-30 bg-white/95 backdrop-blur-xl border border-white/80 p-2.5 sm:p-3 rounded-2xl shadow-[0_14px_35px_rgba(6,84,165,0.12)] hidden md:flex items-center gap-2.5 cursor-pointer group hover:border-brand-accentDark/40 hover:shadow-2xl transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-accentDark to-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-110 transition-transform">
                  <Zap className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <p className="text-dark text-xs font-extrabold tracking-tight flex items-center gap-1.5">
                    <span>AI Mock Simulator</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </p>
                  <p className="text-muted text-[10px]">Instant Diagnostic Analytics</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* FULL WIDTH (LEFT TO RIGHT EDGE-TO-EDGE) INFINITE SCROLLING TICKER CAROUSEL */}
      <div className="relative z-10 w-full overflow-hidden mt-8 sm:mt-12 select-none py-3 [mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-10 sm:gap-14 whitespace-nowrap font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-widest text-[#0C9253]/35 uppercase"
        >
          {[...EXAM_LIST, ...EXAM_LIST, ...EXAM_LIST, ...EXAM_LIST].map((exam, idx) => (
            <React.Fragment key={idx}>
              <span className="hover:text-[#0C9253]/70 transition-colors cursor-default drop-shadow-sm">
                {exam}
              </span>
              <span className="text-[#0C9253]/35 font-bold text-xl sm:text-2xl">
                +
              </span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
