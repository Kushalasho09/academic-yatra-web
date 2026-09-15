"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Clock, Compass, Monitor } from "lucide-react";

export default function TestPrepOverview() {
  const cards = [
    {
      value: "50+",
      label: "Adaptive Full-Length Mocks",
      icon: FileText,
      color: "text-brand-accent",
    },
    {
      value: "140+",
      label: "Hours of Live Masterclasses",
      icon: Clock,
      color: "text-brand-primary",
    },
    {
      value: "3",
      label: "Global Pathways: SAT, GRE & GMAT",
      icon: Compass,
      color: "text-amber-500",
    },
    {
      value: "100%",
      label: "Digital Learning & Analytics Dashboard",
      icon: Monitor,
      color: "text-purple-600",
    },
  ];

  return (
    <section className="relative py-10 sm:py-14 bg-gradient-to-r from-[#DFF2E8]/80 via-[#E4F1FD]/70 to-[#EAF7EE]/80 overflow-hidden">
      {/* Seamless top and bottom feather fades to melt with adjacent sections */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      {/* Background soft ambient accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading & Description */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-5 sm:space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-brand-primary">
              Test Preparation Programs
            </div>

            {/* Main Section Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-brand-navy leading-snug sm:leading-[1.28] lg:leading-[1.3] tracking-tight">
              Everything You Need to{" "}
              <span className="text-brand-accent">Prepare for</span>{" "}
              SAT, GRE &amp; GMAT
            </h2>

            {/* Descriptive Paragraph from user prompt */}
            <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Academic Yatra helps students prepare for international admissions through
              structured learning, live classes, mock tests, and performance tracking.
              Whether you’re planning undergraduate studies, a master’s degree, or an MBA
              abroad, you’ll find the right preparation pathway here.
            </p>
          </motion.div>

          {/* Right Column: 2x2 Grid of Rounded White Cards (2x2 on mobile and desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-5"
          >
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-200/70 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_35px_-10px_rgba(12,146,83,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <span
                      className={`font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${card.color}`}
                    >
                      {card.value}
                    </span>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:scale-110 group-hover:bg-brand-greenTint group-hover:text-brand-primary transition-all shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  <p className="font-heading font-bold text-xs sm:text-base text-slate-800 leading-snug">
                    {card.label}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
