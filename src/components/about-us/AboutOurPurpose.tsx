"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Layers, TrendingUp, RefreshCw, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface PurposePillar {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  accent: string;
  bgAccent: string;
}

const PILLARS: PurposePillar[] = [
  {
    number: "01",
    title: "Build Real Capability",
    description:
      "Go beyond completing a course. Build language, test readiness, and practical skills you can actually use.",
    icon: Target,
    accent: "#0C9253",
    bgAccent: "bg-emerald-50 text-emerald-600 border-emerald-200/60",
  },
  {
    number: "02",
    title: "Make Better Preparation Possible",
    description:
      "Bring expert teaching, structured learning, and technology together in one place.",
    icon: Layers,
    accent: "#3B82F6",
    bgAccent: "bg-sky-50 text-sky-600 border-sky-200/60",
  },
  {
    number: "03",
    title: "Put Progress in Perspective",
    description:
      "Help learners understand where they are today and what they need to improve next.",
    icon: TrendingUp,
    accent: "#8B5CF6",
    bgAccent: "bg-purple-50 text-purple-600 border-purple-200/60",
  },
  {
    number: "04",
    title: "Keep Moving With Learners",
    description:
      "Continuously evolve our programs, tools, and learning experience around changing academic and professional needs.",
    icon: RefreshCw,
    accent: "#F97316",
    bgAccent: "bg-amber-50 text-amber-600 border-amber-200/60",
  },
];

export default function AboutOurPurpose() {
  return (
    <section
      id="our-purpose"
      className="relative py-14 sm:py-20 bg-[#FBFDFB] overflow-hidden"
    >
      {/* Ambient soft glow backdrop */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-sky-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.18]"
          >
            Make <span className="text-[#0C9253]">Learning Count.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-3.5 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal"
          >
            Academic Yatra exists to make learning more focused, accessible, and useful — from the first lesson to the moment those skills are put to work.
          </motion.p>
        </div>

        {/* 4 Pillars Grid (2x2 on desktop, 1 col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Row: Icon + Number Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xs ${pillar.bgAccent}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="font-heading text-xl sm:text-2xl font-black tracking-tight text-slate-300 group-hover:text-slate-900 transition-colors duration-300">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle Accent Bottom Line */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-slate-700 transition-colors duration-300">
                  <span className="uppercase tracking-wider">Academic Yatra Principle</span>
                  <div
                    className="w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: pillar.accent }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/languages"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-[#0C9253] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <span>Explore Our Learning Programs</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
