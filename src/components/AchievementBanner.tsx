"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Plane,
  Award,
  FileCheck2,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  Globe2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const HIGHLIGHTS = [
  {
    title: "High IELTS & PTE Scores",
    subtitle: "Band 7.5+ & 79+ Targets with AI mocks",
    icon: Award,
    accent: "from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30",
  },
  {
    title: "Canada & Global PR Readiness",
    subtitle: "CLB 9/10 & TEF Express Entry points",
    icon: FileCheck2,
    accent: "from-blue-500/20 to-indigo-500/10 text-blue-400 border-blue-500/30",
  },
  {
    title: "Top Global University Admissions",
    subtitle: "USA, UK, Canada, Australia & Europe",
    icon: GraduationCap,
    accent: "from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30",
  },
  {
    title: "Conversational Fluency & Confidence",
    subtitle: "1-on-1 interview clinics & accent drills",
    icon: Plane,
    accent: "from-purple-500/20 to-pink-500/10 text-purple-400 border-purple-500/30",
  },
];

export default function AchievementBanner() {
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0A192F] via-[#122447] to-[#0A192F] text-white relative overflow-hidden border-y border-slate-800/80">
      {/* Dynamic Ambient Background Flares */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Headline & 4 Feature Tiles (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeCurve }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Main Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.14]">
              Master Skills for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 font-accent italic font-normal">
                Study Abroad, PR
              </span>{" "}
              & Career Growth
            </h2>

            <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Accelerate your global ambitions with structured coaching, AI-driven test simulations, and certified mentors dedicated to your outcome.
            </p>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group relative p-4 rounded-2xl bg-white/[0.06] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md flex items-start space-x-3.5"
                  >
                    <div
                      className={cn(
                        "w-10 h-10 rounded-xl bg-gradient-to-br border flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform",
                        item.accent
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-0.5">
                      <div className="font-heading text-sm font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-400 leading-snug">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Metrics Line */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>99.4% First-Attempt Visa & Score Success</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>5,000+ Alumni Across 18 Countries</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive High-Conversion Glass Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: easeCurve }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md rounded-[32px] bg-gradient-to-b from-white/[0.12] to-white/[0.04] p-7 sm:p-8 border border-white/20 backdrop-blur-xl shadow-2xl space-y-6 overflow-hidden">
              
              {/* Card Glow Highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

              {/* Student Proof & Rating */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex -space-x-2">
                  {["/images/avatar_indian_boy.jpg", "/images/avatar_indian_girl.jpg", "/images/hero_avatar_top.jpg"].map((src, i) => (
                    <div
                      key={i}
                      className="relative w-9 h-9 rounded-full border-2 border-brand-navy overflow-hidden shadow-sm"
                    >
                      <Image src={src} alt="Student Avatar" fill className="object-cover" />
                    </div>
                  ))}
                </div>

                <div className="text-right">
                  <div className="flex items-center justify-end space-x-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-slate-300">
                    4.9 / 5 from 2,400+ Students
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="space-y-1.5 text-center sm:text-left">
                <h3 className="font-heading text-2xl font-black text-white tracking-tight">
                  Start Your Global Journey
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Book a personalized trial session or connect directly with our senior study abroad counseling team today.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-1">
                <Link
                  href="/contacts"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-brand-primary to-emerald-500 hover:from-brand-primaryHover hover:to-emerald-600 text-white font-heading font-extrabold text-sm shadow-lg shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Start Free Trial Lesson</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:+919286844550"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-full bg-white/10 hover:bg-white/15 text-white font-heading font-bold text-xs border border-white/15 hover:border-white/30 transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Speak With Counselor: +91-92868-44550</span>
                </a>
              </div>

              {/* Trust Subtext */}
              <div className="flex items-center justify-center space-x-4 text-[11px] text-slate-400 pt-1">
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Free 30-min call</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>No commitments</span>
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
