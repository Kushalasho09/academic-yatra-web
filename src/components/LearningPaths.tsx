"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  GraduationCap,
  Briefcase,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TrackPath {
  numeral: string;
  id: string;
  title: string;
  subtitle: string;
  image: string;
  icon: React.ElementType;
  shortDesc: string;
  href: string;
  staggerOffset: string;
  theme: {
    accentColor: string;
    numeralColor: string;
    numeralHover: string;
    borderHover: string;
    glow: string;
    buttonHover: string;
  };
}

const TRACKS: TrackPath[] = [
  {
    numeral: "01",
    id: "competitive-exams",
    title: "Competitive Exams",
    subtitle: "SAT • GRE • GMAT",
    image: "/images/path_competitive_exams.jpg",
    icon: Globe,
    shortDesc: "Bluebook & Pearson adaptive mocks with 1-on-1 strategy for top global scores.",
    href: "/test-prep",
    staggerOffset: "lg:translate-y-0",
    theme: {
      accentColor: "bg-brand-accent",
      numeralColor: "text-slate-100",
      numeralHover: "group-hover:text-blue-100/70",
      borderHover: "hover:border-brand-accent/50",
      glow: "hover:shadow-blue-500/12",
      buttonHover: "group-hover:bg-brand-accent group-hover:text-white",
    },
  },
  {
    numeral: "02",
    id: "language-programs",
    title: "Language Programs",
    subtitle: "IELTS • TOEFL • PTE • CELPIP",
    image: "/images/path_language_prep.jpg",
    icon: GraduationCap,
    shortDesc: "Real-time Pearson AI speaking score engine & certified British Council mentors.",
    href: "/languages",
    staggerOffset: "lg:translate-y-10",
    theme: {
      accentColor: "bg-brand-primary",
      numeralColor: "text-slate-100",
      numeralHover: "group-hover:text-emerald-100/70",
      borderHover: "hover:border-brand-primary/50",
      glow: "hover:shadow-emerald-500/15",
      buttonHover: "group-hover:bg-brand-primary group-hover:text-white",
    },
  },
  {
    numeral: "03",
    id: "skill-development",
    title: "Skill Development",
    subtitle: "Career & Workplace",
    image: "/images/path_skill_development.jpg",
    icon: Briefcase,
    shortDesc: "Executive communication, corporate presentation design & Google Suite mastery.",
    href: "/skill-catalyst",
    staggerOffset: "lg:translate-y-4",
    theme: {
      accentColor: "bg-amber-500",
      numeralColor: "text-slate-100",
      numeralHover: "group-hover:text-amber-100/70",
      borderHover: "hover:border-amber-400/50",
      glow: "hover:shadow-amber-500/12",
      buttonHover: "group-hover:bg-amber-600 group-hover:text-white",
    },
  },
  {
    numeral: "04",
    id: "learning-dashboard",
    title: "Learning Dashboard",
    subtitle: "Student Portal & AI Mocks",
    image: "/images/path_learning_dashboard.jpg",
    icon: LayoutDashboard,
    shortDesc: "Timed full-length mocks, pacing analytics & 200+ recorded HD class archives.",
    href: "/free-resources",
    staggerOffset: "lg:translate-y-14",
    theme: {
      accentColor: "bg-indigo-600",
      numeralColor: "text-slate-100",
      numeralHover: "group-hover:text-indigo-100/70",
      borderHover: "hover:border-indigo-400/50",
      glow: "hover:shadow-indigo-500/12",
      buttonHover: "group-hover:bg-indigo-600 group-hover:text-white",
    },
  },
];

export default function LearningPaths() {
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Background Decorative Soft Tints */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-gradient-to-br from-brand-tint/50 via-blue-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-20 w-[550px] h-[550px] bg-gradient-to-tl from-brand-greenTint/50 via-emerald-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeCurve }}
          className="space-y-3.5 text-left max-w-3xl mb-14 sm:mb-18"
        >
          {/* Green Bullet Tag */}
          <div className="flex items-center space-x-2 text-brand-primary text-xs sm:text-sm font-extrabold uppercase tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-primary inline-block animate-pulse" />
            <span>PROGRAMS</span>
          </div>

          {/* Headline with Playfair Display Accent */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-brand-navy tracking-tight leading-[1.14]">
            Choose Your{" "}
            <span className="text-brand-primary font-accent italic font-normal">
              Learning Path
            </span>
          </h2>

          {/* Description */}
          <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Explore structured learning programs designed around study abroad preparation, language proficiency, and competitive exams.
          </p>
        </motion.div>

        {/* 2x2 Grid on Mobile, 4 Columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 pb-6">
          {TRACKS.map((track, idx) => {
            const Icon = track.icon;

            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: easeCurve }}
                whileHover={{ y: -6 }}
                className={cn(
                  "group relative rounded-2xl sm:rounded-[28px] p-3.5 sm:p-6 bg-white border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer",
                  track.staggerOffset,
                  track.theme.borderHover,
                  track.theme.glow
                )}
              >
                {/* 1. OVERSIZED BACKGROUND NUMERAL (Watermark) */}
                <div
                  className={cn(
                    "font-heading font-black text-5xl sm:text-8xl sm:text-[96px] leading-none select-none absolute -bottom-2 -right-1 pointer-events-none transition-all duration-500 z-0 tracking-tighter",
                    track.theme.numeralColor,
                    track.theme.numeralHover
                  )}
                >
                  {track.numeral}
                </div>

                {/* 2. Top Color Indicator Accent Strip */}
                <div
                  className={cn(
                    "absolute top-0 left-0 right-0 h-1 sm:h-1.5 opacity-80 group-hover:opacity-100 transition-opacity",
                    track.theme.accentColor
                  )}
                />

                {/* 3. Card Content: Clean Single Image + Clean Typography */}
                <div className="space-y-2.5 sm:space-y-4 relative z-10">
                  
                  {/* Clean Single Image Banner */}
                  <div className="relative w-full h-28 sm:h-44 md:h-48 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-slate-100/90 shadow-xs">
                    <Image
                      src={track.image}
                      alt={track.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Icon & Title Header */}
                  <div className="space-y-1 pt-0.5 sm:pt-1">
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-slate-100 flex items-center justify-center text-brand-navy shrink-0">
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={2} />
                      </div>
                      <span className="font-heading text-[9px] sm:text-xs font-bold text-slate-500 uppercase tracking-wide truncate">
                        {track.subtitle}
                      </span>
                    </div>

                    <h3 className="font-heading text-sm sm:text-lg lg:text-xl font-bold sm:font-extrabold text-brand-navy group-hover:text-brand-primary transition-colors leading-tight truncate">
                      {track.title}
                    </h3>
                  </div>

                  {/* Concise 1-line description */}
                  <p className="font-body text-[10px] sm:text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
                    {track.shortDesc}
                  </p>

                </div>

                {/* 4. Interactive Bottom Action Button */}
                <div className="pt-2.5 sm:pt-4 mt-2 sm:mt-4 border-t border-slate-100 relative z-10">
                  <Link
                    href={track.href}
                    className={cn(
                      "w-full inline-flex items-center justify-between px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl bg-slate-50 text-brand-navy font-heading font-extrabold text-[10px] sm:text-xs transition-all duration-300 shadow-2xs",
                      track.theme.buttonHover
                    )}
                  >
                    <span>Explore Track</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* 5. Light Sheen Glare Reflection on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
