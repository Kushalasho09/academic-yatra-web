"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  Award,
  Compass,
  Sparkles,
  CheckCircle2,
  Clock,
  Users,
  BarChart3,
  MessageSquare,
  ShieldCheck,
  Zap,
  ArrowRight,
  Radio,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PillarData {
  id: string;
  stepNumber: string;
  tabLabel: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  themeColor: {
    badgeBg: string;
    badgeText: string;
    border: string;
  };
  hudTop: {
    icon: React.ElementType;
    title: string;
    subtitle: string;
    badge: string;
  };
  hudBottom: {
    icon: React.ElementType;
    value: string;
    subtitle: string;
  };
  highlight: string;
}

const PILLARS_DATA: PillarData[] = [
  {
    id: "flexible-learning",
    stepNumber: "01",
    tabLabel: "Flexible Learning",
    badge: "Live & Self-Paced",
    title: "Flexible Learning",
    description:
      "Learn through live classes or self-paced programs designed around different learning styles.",
    image: "/images/feature_pillar_flexible.jpg",
    icon: Video,
    themeColor: {
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      badgeText: "text-emerald-600",
      border: "border-emerald-500",
    },
    hudTop: {
      icon: Radio,
      title: "Live Class • Today 07:00 PM",
      subtitle: "128 Students Joined",
      badge: "LIVE NOW",
    },
    hudBottom: {
      icon: Clock,
      value: "Attendance: 82%",
      subtitle: "90 Min Session",
    },
    highlight: "Live evening cohorts + 24/7 recorded class archives.",
  },
  {
    id: "mock-test-practice",
    stepNumber: "02",
    tabLabel: "Mock Test Practice",
    badge: "Adaptive Mocks",
    title: "Mock Test Practice",
    description:
      "Practice with structured simulations and performance tracking aligned with real exam patterns.",
    image: "/images/feature_pillar_mock.jpg",
    icon: Award,
    themeColor: {
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
      badgeText: "text-blue-600",
      border: "border-brand-accent",
    },
    hudTop: {
      icon: Zap,
      title: "Current Score: Band 7.5",
      subtitle: "Improved from Band 5.5 to 7.5",
      badge: "+0.8 GAIN",
    },
    hudBottom: {
      icon: BarChart3,
      value: "Adaptive Pacing",
      subtitle: "Real exam patterns",
    },
    highlight: "Full-length adaptive simulations with automated pacing analytics.",
  },
  {
    id: "expert-guidance",
    stepNumber: "03",
    tabLabel: "Expert Guidance",
    badge: "Study Abroad Mentors",
    title: "Expert Guidance",
    description:
      "Learn with mentors focused on global education pathways and preparation strategies.",
    image: "/images/feature_pillar_mentor.jpg",
    icon: Compass,
    themeColor: {
      badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
      badgeText: "text-amber-600",
      border: "border-amber-500",
    },
    hudTop: {
      icon: ShieldCheck,
      title: "Study Abroad Mentor",
      subtitle: "Personalized guidance for your global journey",
      badge: "1-ON-1",
    },
    hudBottom: {
      icon: MessageSquare,
      value: "Sat • 5:00 PM Slot",
      subtitle: "Daily 1-on-1 speaking clinics",
    },
    highlight: "Direct 1-on-1 strategy sessions with British Council certified faculty.",
  },
];

export default function FeaturesPillars() {
  const [activeTab, setActiveTab] = useState<string>("flexible-learning");
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [selectedCohort, setSelectedCohort] = useState<string>("evening");
  const [activeExamMode, setActiveExamMode] = useState<string>("IELTS");
  const [selectedSlot, setSelectedSlot] = useState<string>("sat");

  const easeCurve = [0.16, 1, 0.3, 1];
  const activePillar =
    PILLARS_DATA.find((p) => p.id === activeTab) || PILLARS_DATA[0];

  // Auto-advance tabs every 8 seconds if user has not interacted
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = PILLARS_DATA.findIndex((p) => p.id === prev);
        const nextIndex = (currentIndex + 1) % PILLARS_DATA.length;
        return PILLARS_DATA[nextIndex].id;
      });
    }, 7500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Background Subtle Gradient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-brand-tint/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-brand-navy tracking-tight leading-[1.16]">
            Built Around Real Student Goals
          </h2>

          <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
            We are a group of skilled professionals dedicated to designing, creating, and maintaining structured learning systems.
          </p>
        </div>

        {/* Segmented Tab Bar */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-md gap-1 sm:gap-2 max-w-full overflow-x-auto">
            {PILLARS_DATA.map((pillar) => {
              const isActive = activeTab === pillar.id;

              return (
                <button
                  key={pillar.id}
                  onClick={() => {
                    setActiveTab(pillar.id);
                    setIsAutoPlaying(false);
                  }}
                  className={cn(
                    "relative px-4 sm:px-6 py-2.5 rounded-xl font-heading text-xs sm:text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap select-none",
                    isActive
                      ? "text-brand-navy shadow-xs"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePillarTab"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-slate-100 rounded-xl border border-slate-200/80 -z-10"
                    />
                  )}
                  <span
                    className={cn(
                      "w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-black",
                      isActive
                        ? "bg-brand-navy text-white"
                        : "bg-slate-100 text-slate-600"
                    )}
                  >
                    {pillar.stepNumber}
                  </span>
                  <span>{pillar.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Bento Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: easeCurve }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
          >
            
            {/* HERO IMAGE CONTAINER (Left 7 Cols) */}
            <div className="lg:col-span-7 relative rounded-[28px] overflow-hidden bg-slate-900 border border-slate-200/80 shadow-lg min-h-[380px] sm:min-h-[440px] flex flex-col justify-between group">
              
              {/* Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={activePillar.image}
                  alt={activePillar.title}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
              </div>

              {/* Top Floating Glass HUD */}
              <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
                <div className="flex items-center space-x-3 px-3.5 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-white shadow-md">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                    <activePillar.hudTop.icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-heading text-xs font-bold text-white">
                      {activePillar.hudTop.title}
                    </div>
                    <div className="text-[10px] text-slate-300">
                      {activePillar.hudTop.subtitle}
                    </div>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-black tracking-wider uppercase shadow-sm">
                  {activePillar.hudTop.badge}
                </span>
              </div>

              {/* Bottom Info on Image */}
              <div className="relative z-10 p-5 sm:p-6 space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs">
                  <activePillar.hudBottom.icon className="w-3.5 h-3.5 text-emerald-300" />
                  <span className="font-bold">{activePillar.hudBottom.value}</span>
                  <span className="text-slate-300">• {activePillar.hudBottom.subtitle}</span>
                </div>

                <h3 className="font-heading text-2xl font-extrabold text-white">
                  {activePillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 max-w-lg">
                  {activePillar.description}
                </p>
              </div>

            </div>

            {/* INTERACTIVE RIGHT HUB (Right 5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              
              {/* Card 1: Micro Simulator */}
              <div className="p-6 rounded-[24px] bg-white border border-slate-200/90 shadow-md space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-lg bg-brand-greenTint border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                      <activePillar.icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-heading text-xs font-bold text-brand-navy">
                      {activePillar.title}
                    </span>
                  </div>

                  <span className={cn("text-[10px] font-bold px-2.5 py-0.5 rounded-full border", activePillar.themeColor.badgeBg)}>
                    {activePillar.badge}
                  </span>
                </div>

                {/* SIMULATOR: Flexible Learning */}
                {activePillar.id === "flexible-learning" && (
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-slate-600">
                      Choose Your Batch:
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "evening", label: "Evening", time: "7:00 PM" },
                        { id: "weekend", label: "Weekend", time: "11:00 AM" },
                        { id: "self", label: "Self-Paced", time: "24/7 HD" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setSelectedCohort(item.id)}
                          className={cn(
                            "p-2.5 rounded-xl border text-center transition-all text-xs font-bold",
                            selectedCohort === item.id
                              ? "bg-brand-navy text-white border-brand-navy shadow-sm"
                              : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700"
                          )}
                        >
                          <div>{item.label}</div>
                          <div className={cn("text-[10px]", selectedCohort === item.id ? "text-emerald-300" : "text-slate-500")}>
                            {item.time}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-between text-xs text-emerald-900 font-bold">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Live cohorts with recorded backups</span>
                      </div>
                      <span className="text-[10px] text-emerald-700 font-extrabold uppercase">
                        Active
                      </span>
                    </div>
                  </div>
                )}

                {/* SIMULATOR: Mock Test */}
                {activePillar.id === "mock-test-practice" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                      <span>Exam Target:</span>
                      <div className="flex space-x-1 bg-slate-100 p-0.5 rounded-md">
                        {["IELTS", "SAT", "GRE"].map((m) => (
                          <button
                            key={m}
                            onClick={() => setActiveExamMode(m)}
                            className={cn(
                              "px-2 py-0.5 rounded text-[10px] font-bold transition-all",
                              activeExamMode === m
                                ? "bg-white text-brand-navy shadow-2xs"
                                : "text-slate-500 hover:text-slate-800"
                            )}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Progress Bar Chart */}
                    <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/80 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600 font-medium">Performance Track:</span>
                        <span className="font-bold text-brand-accent">
                          {activeExamMode === "IELTS" && "Band 7.5 (+0.8)"}
                          {activeExamMode === "SAT" && "1520+ Score"}
                          {activeExamMode === "GRE" && "326+ Score"}
                        </span>
                      </div>
                      <div className="flex items-end space-x-1.5 h-8 pt-1">
                        <div className="flex-1 bg-blue-300 rounded-xs h-2.5" />
                        <div className="flex-1 bg-blue-400 rounded-xs h-4" />
                        <div className="flex-1 bg-blue-500 rounded-xs h-6" />
                        <div className="flex-1 bg-brand-accent rounded-xs h-8" />
                      </div>
                    </div>
                  </div>
                )}

                {/* SIMULATOR: Expert Guidance */}
                {activePillar.id === "expert-guidance" && (
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-slate-600">
                      1-on-1 Mentor Consultation Slot:
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "sat", day: "Sat", time: "5:00 PM" },
                        { id: "sun", day: "Sun", time: "11:00 AM" },
                        { id: "mon", day: "Mon", time: "6:30 PM" },
                      ].map((slot) => (
                        <button
                          key={slot.id}
                          onClick={() => setSelectedSlot(slot.id)}
                          className={cn(
                            "p-2.5 rounded-xl border text-center transition-all text-xs font-bold",
                            selectedSlot === slot.id
                              ? "bg-brand-navy text-white border-brand-navy shadow-sm"
                              : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700"
                          )}
                        >
                          <div>{slot.day}</div>
                          <div className={cn("text-[10px]", selectedSlot === slot.id ? "text-amber-300" : "text-slate-500")}>
                            {slot.time}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-between text-xs text-amber-950 font-bold">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>Study Abroad Mentor Session</span>
                      </div>
                      <span className="text-[10px] text-amber-700 font-extrabold uppercase">
                        Available
                      </span>
                    </div>
                  </div>
                )}

                {/* Concise 1-line note */}
                <p className="text-xs text-slate-600 pt-1 border-t border-slate-100">
                  {activePillar.highlight}
                </p>

              </div>

              {/* Card 2: CTA Bar */}
              <div className="p-4 sm:p-5 rounded-[24px] bg-gradient-to-br from-brand-navy to-[#162D5A] text-white flex items-center justify-between gap-4 shadow-md border border-slate-700/50">
                <div>
                  <div className="font-heading text-xs sm:text-sm font-extrabold text-white">
                    Experience Our Learning Engine
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Includes 5-day live pass + 1 AI mock test.
                  </div>
                </div>

                <Link
                  href="/contacts"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-brand-primary hover:bg-brand-primaryHover text-white font-heading font-extrabold text-xs shadow-sm hover:scale-105 transition-all whitespace-nowrap shrink-0"
                >
                  <span>Book Free Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
