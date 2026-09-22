"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Compass, Rocket, ShieldCheck } from "lucide-react";

export default function AboutWhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="relative py-20 sm:py-28 bg-[#060D24] text-white overflow-hidden"
    >
      {/* Ambient Dark Navy Atmospheric Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Background Subtle Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.18]"
          >
            Part of Future Yatra. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
              For the language your Dreams Speak.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-5 text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Academic Yatra is the Language Training & Test Preparation vertical of{" "}
            <span className="text-white font-semibold">Future Yatra Private Limited</span>, established in 2025.
          </motion.p>
        </div>

        {/* 2-Column Content Grid: Left Pillar Cards + Right Action Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column (7 cols): Our Core Focus + Stated Future Direction */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Card 1: Our Core Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white/[0.04] border border-white/10 p-6 sm:p-8 backdrop-blur-xl hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Our Core Focus
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                    Structured & Human-Centered Learning
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Our focus is simple: build a learning ecosystem that combines expert instruction, digital learning tools, performance tracking and practical support for students and professionals.
              </p>
            </motion.div>

            {/* Card 2: Future Stated Direction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl bg-gradient-to-br from-emerald-950/20 via-white/[0.03] to-white/[0.02] border border-emerald-500/20 p-6 sm:p-8 backdrop-blur-xl hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                    Stated Future Direction
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                    Continuous Innovation & AI Expansion
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Academic Yatra's stated future direction includes expanded digital learning experiences, AI-driven learning support, new certification programs and globally relevant skill development.
              </p>
            </motion.div>

          </div>

          {/* Right Column (5 cols): Closing Hero CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 p-8 sm:p-10 backdrop-blur-2xl flex flex-col justify-between shadow-2xl relative overflow-hidden group"
          >
            {/* Top Glow Edge */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400" />

            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-400 mb-3">
                <ShieldCheck className="w-4 h-4" />
                Next Step in Your Journey
              </span>

              <h3 className="font-heading text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                Ready to Find <br className="hidden sm:inline" />
                Your Track?
              </h3>

              <p className="mt-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
                Explore the programs and see where Academic Yatra fits into your plans.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-3 pt-6 border-t border-white/10">
              <Link
                href="/languages"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#0C9253] to-[#0A7B45] hover:from-[#0EA45E] hover:to-[#0C9253] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group/btn"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>

              <Link
                href="/contacts"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm sm:text-base transition-all duration-300 hover:border-white/30"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
