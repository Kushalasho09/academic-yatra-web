"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  Languages,
  Briefcase,
  LayoutDashboard,
  GraduationCap,
  Globe2,
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface StreamItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  icon: React.ElementType;
  badge: string;
  rating: string;
  href: string;
  description: string;
  highlights: string[];
  themeColor: {
    badge: string;
    border: string;
    glow: string;
    iconBg: string;
    iconColor: string;
  };
}

export const STREAM_ITEMS: StreamItem[] = [
  {
    id: "competitive-exams",
    title: "Competitive Exams",
    subtitle: "SAT • GRE • GMAT Coaching",
    category: "Top Score Pathways",
    image: "/images/hero_capsule_reading.jpg",
    icon: Target,
    badge: "Score Guarantee",
    rating: "4.95",
    href: "/test-prep",
    description: "Target 1500+ in Digital SAT and 320+ in GRE with adaptive drills and section diagnostic score reports.",
    highlights: ["Official Bluebook & Pearson Mocks", "Adaptive Quantitative & Verbal", "Weekly Full-Length Diagnostics"],
    themeColor: {
      badge: "bg-blue-50 text-blue-700 border-blue-200/80",
      border: "hover:border-blue-500/40",
      glow: "hover:shadow-blue-500/15",
      iconBg: "bg-blue-50 text-blue-600 border-blue-200",
      iconColor: "text-blue-600",
    },
  },
  {
    id: "language-programs",
    title: "Language Programs",
    subtitle: "IELTS • TOEFL • PTE • CELPIP",
    category: "Global English Tests",
    image: "/images/hero_capsule_laptop.jpg",
    icon: Languages,
    badge: "Band 7.5+ Target",
    rating: "4.98",
    href: "/languages",
    description: "Pearson AI scoring, 1-on-1 speaking interview simulations, and certified British Council curriculum.",
    highlights: ["1-on-1 Speaking Simulations", "Pearson AI Speaking Engine", "Cambridge Exam Bank 2026"],
    themeColor: {
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
      border: "hover:border-emerald-500/40",
      glow: "hover:shadow-emerald-500/15",
      iconBg: "bg-emerald-50 text-brand-primary border-emerald-200",
      iconColor: "text-brand-primary",
    },
  },
  {
    id: "foreign-languages",
    title: "Foreign Languages",
    subtitle: "German & French (A1–B2)",
    category: "European Admissions & PR",
    image: "/images/hero_capsule_writing.jpg",
    icon: Globe2,
    badge: "Goethe & TEF Ready",
    rating: "4.92",
    href: "/languages",
    description: "Master Goethe-Zertifikat A1-B2 & French TEF/TCF with certified native-fluency trainers for visa & jobs.",
    highlights: ["Goethe Exam Pattern Mocks", "Canada PR TEF Speaking Club", "Accent & Grammar Masterclasses"],
    themeColor: {
      badge: "bg-amber-50 text-amber-800 border-amber-200/80",
      border: "hover:border-amber-500/40",
      glow: "hover:shadow-amber-500/15",
      iconBg: "bg-amber-50 text-amber-600 border-amber-200",
      iconColor: "text-amber-600",
    },
  },
  {
    id: "skill-catalyst",
    title: "Skill Catalyst",
    subtitle: "Career & Workplace Mastery",
    category: "Executive Growth",
    image: "/images/indian_student_laptop.jpg",
    icon: Briefcase,
    badge: "Career Essentials",
    rating: "4.89",
    href: "/skill-catalyst",
    description: "Accelerate professional career readiness with ATS resume crafting, communication, and Google Suite mastery.",
    highlights: ["ATS Resume & LinkedIn Audit", "Corporate Business Tech", "Executive Communication"],
    themeColor: {
      badge: "bg-purple-50 text-purple-700 border-purple-200/80",
      border: "hover:border-purple-500/40",
      glow: "hover:shadow-purple-500/15",
      iconBg: "bg-purple-50 text-purple-600 border-purple-200",
      iconColor: "text-purple-600",
    },
  },
  {
    id: "learning-dashboard",
    title: "Learning Dashboard",
    subtitle: "Live Cloud Student Portal",
    category: "24/7 Learning Suite",
    image: "/images/hero_student_model.jpg",
    icon: LayoutDashboard,
    badge: "Real-time AI Feedback",
    rating: "4.96",
    href: "/free-resources",
    description: "Instant cloud mock test simulations, sectional practice drills, recorded archives, and mentor review reports.",
    highlights: ["Adaptive Performance Analytics", "Recorded HD Session Library", "Instant Sectional Scoring"],
    themeColor: {
      badge: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
      border: "hover:border-indigo-500/40",
      glow: "hover:shadow-indigo-500/15",
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200",
      iconColor: "text-indigo-600",
    },
  },
  {
    id: "study-abroad",
    title: "Global Admissions",
    subtitle: "University & Visa Pathways",
    category: "Top 100 Universities",
    image: "/images/hero_capsule_reading.jpg",
    icon: GraduationCap,
    badge: "100% Visa Assistance",
    rating: "4.97",
    href: "/about-us",
    description: "End-to-end profile evaluation, SOP/LOR drafting, scholarship matching, and visa filing support.",
    highlights: ["USA • UK • Canada • Germany", "Scholarship Grants Assistance", "Direct Counselor Support"],
    themeColor: {
      badge: "bg-teal-50 text-teal-700 border-teal-200/80",
      border: "hover:border-teal-500/40",
      glow: "hover:shadow-teal-500/15",
      iconBg: "bg-teal-50 text-teal-600 border-teal-200",
      iconColor: "text-teal-600",
    },
  },
];

export function ImageStreamCard({ item }: { item: StreamItem }) {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative w-[310px] sm:w-[350px] md:w-[370px] shrink-0 rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer",
        item.themeColor.border,
        item.themeColor.glow
      )}
    >
      {/* Top Media & Visual Header */}
      <div className="space-y-4">
        {/* Visual Cover Banner with Overlay */}
        <div className="relative h-44 sm:h-48 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-100/80">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

          {/* Floating Badges on Image */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-extrabold text-slate-900 shadow-md">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>{item.badge}</span>
            </span>

            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-bold text-amber-300 shadow-md">
              <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
              <span>{item.rating}</span>
            </span>
          </div>

          {/* Title on bottom of photo */}
          <div className="absolute bottom-3 left-3 right-3 z-10">
            <div className="text-[11px] font-extrabold text-emerald-300 uppercase tracking-wider">
              {item.category}
            </div>
            <div className="text-lg sm:text-xl font-black text-white leading-tight mt-0.5">
              {item.title}
            </div>
          </div>
        </div>

        {/* Subtitle & Description */}
        <div className="space-y-1.5">
          <div className="text-xs font-extrabold text-brand-navy tracking-wide">
            {item.subtitle}
          </div>
          <p className="font-body text-xs sm:text-[13px] text-slate-500 group-hover:text-slate-600 leading-relaxed font-normal line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Highlights Bullets */}
        <div className="space-y-1.5 pt-2 border-t border-slate-100">
          {item.highlights.slice(0, 2).map((h, i) => (
            <div key={i} className="flex items-center space-x-2 text-[11px] font-medium text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
              <span className="truncate">{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className={cn("w-8 h-8 rounded-xl border flex items-center justify-center shadow-2xs", item.themeColor.iconBg)}>
            <Icon className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-brand-navy">Structured Track</span>
        </div>

        <Link
          href={item.href}
          className="inline-flex items-center space-x-1 text-xs font-extrabold text-brand-accent group-hover:text-brand-accentDark group-hover:translate-x-1 transition-all"
        >
          <span>Explore Track</span>
          <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}

export function ImageStreamHero() {
  const [isPaused, setIsPaused] = useState(false);

  // Single seamless infinite stream rail
  const streamItems = [...STREAM_ITEMS, ...STREAM_ITEMS, ...STREAM_ITEMS];

  return (
    <div
      className="relative w-full overflow-hidden py-4 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Side Fade Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

      {/* Single Continuous Stream Rail */}
      <div className="relative py-2">
        <motion.div
          animate={{ x: isPaused ? undefined : ["0%", "-33.333%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 32,
              ease: "linear",
            },
          }}
          className="flex space-x-6 sm:space-x-7 w-max"
        >
          {streamItems.map((item, idx) => (
            <ImageStreamCard key={`stream-${item.id}-${idx}`} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default ImageStreamHero;
