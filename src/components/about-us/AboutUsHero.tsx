"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  MessageCircle,
  Sparkles,
  GraduationCap,
  Globe2,
  Stethoscope,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { Skiper8 } from "@/components/ui/skiper8";

// Dynamically import WebGL shaders with SSR disabled for smooth client-side execution
const MeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.MeshGradient),
  { ssr: false }
);

const PulsingBorder = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.PulsingBorder),
  { ssr: false }
);

export default function AboutUsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[90vh] lg:min-h-screen bg-[#031643] overflow-hidden flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-20"
    >
      {/* Skiper8: Dennis Snellenberg Words Preloader */}
      <Skiper8
        words={[
          "Academic Yatra",
          "For the language your dreams speak",
          "Language Training",
          "Test Preparation",
          "Skill Development",
          "Global Education",
        ]}
        durationPerWord={190}
        backgroundColor="#031643"
        dotColor="#0C9253"
      />

      {/* SVG Filters & Linear Gradients in Academic Yatra Emerald & Navy Theme */}
      <svg className="absolute inset-0 w-0 h-0 pointer-events-none">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.08
                      0 0 1 0 0.15
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>

          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Shaders Mesh Gradient Background - Academic Yatra Emerald, Navy & Cyan Theme */}
      {mounted && (
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <MeshGradient
            className="w-full h-full"
            colors={["#031643", "#0C9253", "#0067E3", "#0A192F", "#10B981"]}
            speed={0.25}
            distortion={0.8}
            swirl={0.2}
          />
        </div>
      )}

      {/* Soft Vignette Overlay to guarantee high contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031643]/75 via-[#031643]/40 to-[#031643]/90 z-0 pointer-events-none" />

      {/* Main Content Stage: 2-Column Responsive Layout eliminating empty space */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Hero Messaging & CTAs (7 Columns) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            

            {/* Dynamic Typography with Animated Gradient Shine */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[64px] font-extrabold text-white leading-[1.12] tracking-tight">
                <span className="block font-heading text-white">
                  For the language
                </span>
                <span
                  className="block font-black text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #ffffff 0%, #34D399 30%, #38BDF8 70%, #ffffff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "url(#text-glow)",
                  }}
                >
                  your dreams speak
                </span>
              </h1>
            </motion.div>

            {/* Subtitle / Brand Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-xl font-normal drop-shadow-sm"
            >
              Academic Yatra is a digital learning platform for language training, test preparation, and practical skill development, built for students and professionals preparing for education, career, and international opportunities.
            </motion.p>

            {/* Highlights Track Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="inline-flex items-center flex-wrap gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-semibold shadow-sm"
            >
              <span className="text-emerald-300">Language Training</span>
              <span className="text-white/40">•</span>
              <span className="text-sky-300">Test Preparation</span>
              <span className="text-white/40">•</span>
              <span className="text-amber-300">Skill Development</span>
            </motion.div>

            {/* Buttons Row (Side-by-side on both Mobile and Desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-row items-center gap-3 sm:gap-4 pt-1"
            >
              <a
                href="#what-we-do"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-emerald-500 via-[#0C9253] to-emerald-600 text-white font-heading font-extrabold text-xs sm:text-sm transition-all duration-300 hover:scale-105 shadow-[0_10px_25px_rgba(12,146,83,0.4)] cursor-pointer whitespace-nowrap group"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              <a
                href="https://web.whatsapp.com/send?phone=+919403892981&text=Hi%20Academic%20Yatra,%20I%20am%20interested%20in%20learning%20more%20about%20your%20programs."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/25 hover:border-emerald-400/60 text-white font-heading font-bold text-xs sm:text-sm backdrop-blur-md transition-all duration-300 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp Chat</span>
              </a>
            </motion.div>

            {/* Trust Metrics Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 pt-3 sm:pt-4 border-t border-white/15 max-w-lg"
            >
              <div>
                <div className="text-xl sm:text-2xl font-heading font-black text-white">50K+</div>
                <div className="text-[11px] text-slate-300 font-medium">Students Mentored</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-heading font-black text-emerald-400">98.4%</div>
                <div className="text-[11px] text-slate-300 font-medium">Exam Success Rate</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-heading font-black text-sky-400">15+</div>
                <div className="text-[11px] text-slate-300 font-medium">Global Countries</div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Interactive Glassmorphism Ecosystem Showcase (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-white/15 via-white/[0.08] to-white/[0.03] border border-white/20 p-5 sm:p-7 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-5">
              
              {/* Top Section with Centered PulsingBorder & Spinning Circular Text */}
              <div className="flex flex-col items-center justify-center pt-2 pb-1">
                {mounted && (
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <PulsingBorder
                      colors={[
                        "#0C9253",
                        "#0067E3",
                        "#10B981",
                        "#38BDF8",
                        "#F59E0B",
                        "#ffffff",
                      ]}
                      colorBack="#00000000"
                      speed={1.5}
                      roundness={1}
                      thickness={0.1}
                      softness={0.2}
                      intensity={5}
                      spots={5}
                      spotSize={0.1}
                      pulse={0.1}
                      smoke={0.5}
                      smokeSize={4}
                      scale={0.65}
                      rotation={0}
                      frame={9161408.251009725}
                      style={{
                        width: "68px",
                        height: "68px",
                        borderRadius: "50%",
                      }}
                    />

                    {/* Rotating Circular SVG Text */}
                    <motion.svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 100 100"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 22,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      style={{ transform: "scale(1.58)" }}
                    >
                      <defs>
                        <path
                          id="circlePath"
                          d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                        />
                      </defs>
                      <text className="text-[8px] fill-white/90 font-black uppercase tracking-[2.2px]">
                        <textPath href="#circlePath" startOffset="0%">
                          Academic Yatra • Global Education • Future Yatra •
                        </textPath>
                      </text>
                    </motion.svg>
                  </div>
                )}

                <div className="text-center mt-3">
                  <div className="font-heading font-extrabold text-sm sm:text-base text-white">
                    Future Yatra Ecosystem
                  </div>
                  <div className="text-[11px] text-emerald-300 font-medium">
                    Integrated Global Education & Careers
                  </div>
                </div>
              </div>

              {/* 3 Consumer Brands Mini Cards */}
              <div className="space-y-2.5">
                
                {/* Brand 1: Academic Yatra */}
                <div className="p-3 rounded-xl bg-white/10 border border-white/15 hover:border-emerald-400/50 hover:bg-white/15 transition-all flex items-center justify-between text-white group cursor-default">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-heading text-xs sm:text-sm font-bold text-white flex items-center space-x-1.5">
                        <span>Academic Yatra</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <div className="text-[10px] text-slate-300">
                        Language Proficiency & Test Prep Mocks
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold text-emerald-300 uppercase px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-500/30">
                    Live
                  </span>
                </div>

                {/* Brand 2: University Yatra */}
                <div className="p-3 rounded-xl bg-white/10 border border-white/15 hover:border-blue-400/50 hover:bg-white/15 transition-all flex items-center justify-between text-white group cursor-default">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-heading text-xs sm:text-sm font-bold text-white">
                        University Yatra
                      </div>
                      <div className="text-[10px] text-slate-300">
                        Global Admissions & University Search
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold text-blue-300 uppercase px-2 py-0.5 rounded-md bg-blue-500/20 border border-blue-500/30">
                    Global
                  </span>
                </div>

                {/* Brand 3: Medico Yatra */}
                <div className="p-3 rounded-xl bg-white/10 border border-white/15 hover:border-amber-400/50 hover:bg-white/15 transition-all flex items-center justify-between text-white group cursor-default">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-heading text-xs sm:text-sm font-bold text-white">
                        Medico Yatra
                      </div>
                      <div className="text-[10px] text-slate-300">
                        International Medical & Clinical Degrees
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold text-amber-300 uppercase px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/30">
                    Medical
                  </span>
                </div>

              </div>

              {/* Bottom Assurance Strip */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300 font-medium">
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>British Council Certified Faculty</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>Pearson AI Partner</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
