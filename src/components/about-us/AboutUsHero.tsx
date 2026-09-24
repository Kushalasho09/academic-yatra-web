"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Skiper8 } from "@/components/ui/skiper8";

// Dynamically import WebGL shaders with SSR disabled for smooth client-side execution
const MeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.MeshGradient),
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

      {/* Main Content Stage: Centered Hero Layout */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 sm:space-y-8 flex flex-col items-center">
          
          {/* Dynamic Typography with Animated Gradient Shine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-2 max-w-4xl"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] font-extrabold text-white leading-[1.12] tracking-tight">
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
            className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow-sm"
          >
            Academic Yatra is a digital learning platform for language training, test preparation, and practical skill development, built for students and professionals preparing for education, career, and international opportunities.
          </motion.p>

          {/* Highlights Track Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="inline-flex items-center flex-wrap justify-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-semibold shadow-sm"
          >
            <span className="text-emerald-300">Language Training</span>
            <span className="text-white/40">•</span>
            <span className="text-sky-300">Test Preparation</span>
            <span className="text-white/40">•</span>
            <span className="text-amber-300">Skill Development</span>
          </motion.div>

          {/* Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-row items-center justify-center gap-3 sm:gap-4 pt-1"
          >
            <a
              href="#what-we-do"
              className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-emerald-500 via-[#0C9253] to-emerald-600 text-white font-heading font-extrabold text-xs sm:text-sm transition-all duration-300 hover:scale-105 shadow-[0_10px_25px_rgba(12,146,83,0.4)] cursor-pointer whitespace-nowrap group"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>

            <a
              href="https://web.whatsapp.com/send?phone=+919403892981&text=Hi%20Academic%20Yatra,%20I%20am%20interested%20in%20learning%20more%20about%20your%20programs."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/25 hover:border-emerald-400/60 text-white font-heading font-bold text-xs sm:text-sm backdrop-blur-md transition-all duration-300 whitespace-nowrap"
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
            className="grid grid-cols-3 gap-6 sm:gap-12 pt-6 sm:pt-8 border-t border-white/15 max-w-xl w-full"
          >
            <div>
              <div className="text-xl sm:text-3xl font-heading font-black text-white">50K+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Students Mentored</div>
            </div>
            <div>
              <div className="text-xl sm:text-3xl font-heading font-black text-emerald-400">98.4%</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Exam Success Rate</div>
            </div>
            <div>
              <div className="text-xl sm:text-3xl font-heading font-black text-sky-400">15+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Global Countries</div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
