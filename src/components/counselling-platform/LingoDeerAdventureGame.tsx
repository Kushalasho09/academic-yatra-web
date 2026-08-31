"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MASTER_QUALIFICATIONS_DATA,
  QualificationCategory,
  StreamOption,
  AbroadCourseOption,
  CountryProgramData,
  POST_COUNSELLING_STEPS,
} from "@/data/counsellingData";
import {
  Flame,
  Coins,
  Heart,
  Crown,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  RotateCcw,
  Share2,
  PhoneCall,
  Landmark,
  Building,
  Zap,
  Award,
  BookOpen,
  X,
  Compass,
} from "lucide-react";

interface LingoDeerUnit {
  id: number;
  unitNumber: string;
  title: string;
  subtitle: string;
  iconSrc: string;
  themeColor: string;
  accentBg: string;
  borderColor: string;
}

const LINGODEER_UNITS: LingoDeerUnit[] = [
  {
    id: 1,
    unitNumber: "UNIT 1",
    title: "Indian Academy Citadel",
    subtitle: "Select Completed Education Level",
    iconSrc: "/images/duolingo/gradcap.jpg",
    themeColor: "text-emerald-700",
    accentBg: "bg-emerald-500",
    borderColor: "border-emerald-200",
  },
  {
    id: 2,
    unitNumber: "UNIT 2",
    title: "Elemental Stream Towers",
    subtitle: "Lock In Your Academic Superpower",
    iconSrc: "/images/duolingo/lightning.jpg",
    themeColor: "text-amber-700",
    accentBg: "bg-amber-500",
    borderColor: "border-amber-200",
  },
  {
    id: 3,
    unitNumber: "UNIT 3",
    title: "Target Degree Castle",
    subtitle: "Pick Your Global Degree Specialization",
    iconSrc: "/images/duolingo/target.jpg",
    themeColor: "text-purple-700",
    accentBg: "bg-purple-500",
    borderColor: "border-purple-200",
  },
  {
    id: 4,
    unitNumber: "UNIT 4",
    title: "The Route Crossroads",
    subtitle: "Direct Model vs. Accelerated Magic Bridge",
    iconSrc: "/images/lingodeer/castle.jpg",
    themeColor: "text-blue-700",
    accentBg: "bg-blue-500",
    borderColor: "border-blue-200",
  },
  {
    id: 5,
    unitNumber: "UNIT 5",
    title: "World Country Gateways",
    subtitle: "Explore Global PR, Tuition & Top Salaries",
    iconSrc: "/images/duolingo/globe.jpg",
    themeColor: "text-rose-700",
    accentBg: "bg-rose-500",
    borderColor: "border-rose-200",
  },
  {
    id: 6,
    unitNumber: "UNIT 6",
    title: "Achievement Passport Hall",
    subtitle: "Collect Your Visa Stamps & Boarding Pass",
    iconSrc: "/images/lingodeer/passport.jpg",
    themeColor: "text-amber-800",
    accentBg: "bg-gradient-to-r from-amber-400 to-emerald-500",
    borderColor: "border-amber-300",
  },
];

export default function LingoDeerAdventureGame() {
  // Current game state
  const [currentUnit, setCurrentUnit] = useState<number>(1);
  const [unlockedUnits, setUnlockedUnits] = useState<number>(1);

  // Selected State
  const [selectedQual, setSelectedQual] = useState<QualificationCategory>(
    MASTER_QUALIFICATIONS_DATA[0]
  );
  const [selectedStream, setSelectedStream] = useState<StreamOption>(
    MASTER_QUALIFICATIONS_DATA[0].streams[0]
  );
  const [selectedCourse, setSelectedCourse] = useState<AbroadCourseOption>(
    MASTER_QUALIFICATIONS_DATA[0].streams[0].courseOptions[0]
  );
  const [selectedRoute, setSelectedRoute] = useState<"direct" | "accelerated">("direct");
  const [selectedCountry, setSelectedCountry] = useState<CountryProgramData | null>(null);

  // Currency & Modals
  const [currencyMode, setCurrencyMode] = useState<"INR" | "LOCAL">("INR");
  const [activeModalUnit, setActiveModalUnit] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [stampedAnimation, setStampedAnimation] = useState(false);

  // Mascot Speech message
  const mascotDialogue = useMemo(() => {
    if (currentUnit === 1) return `Hi there! I am your Future Yatra guide. Where did you start your journey in India?`;
    if (currentUnit === 2) return `Great! Now choose your superpower stream in ${selectedQual.title.split("(")[0]}!`;
    if (currentUnit === 3) return `Awesome! Which global degree castle do you want to conquer in ${selectedStream.code}?`;
    if (currentUnit === 4) return `Strategic choice! Do you want Direct On-Campus or the Accelerated Bridge (Save ₹53L)?`;
    if (currentUnit === 5) return `Pick your dream destination country to unlock your official Visa Stamp!`;
    return `🎉 Congratulations! Your Official Study Abroad Boarding Pass & Visa Stamp are ready!`;
  }, [currentUnit, selectedQual, selectedStream, selectedCountry]);

  // Handle Select Qualification
  const handleSelectQual = (qual: QualificationCategory) => {
    setSelectedQual(qual);
    setSelectedStream(qual.streams[0]);
    setSelectedCourse(qual.streams[0].courseOptions[0]);
    setSelectedCountry(null);
    setCurrentUnit(2);
    setUnlockedUnits((prev) => Math.max(prev, 2));
    setActiveModalUnit(null);
  };

  // Handle Select Stream
  const handleSelectStream = (stream: StreamOption) => {
    setSelectedStream(stream);
    setSelectedCourse(stream.courseOptions[0]);
    setSelectedCountry(null);
    setCurrentUnit(3);
    setUnlockedUnits((prev) => Math.max(prev, 3));
    setActiveModalUnit(null);
  };

  // Handle Select Course
  const handleSelectCourse = (course: AbroadCourseOption) => {
    setSelectedCourse(course);
    setSelectedCountry(null);
    setCurrentUnit(4);
    setUnlockedUnits((prev) => Math.max(prev, 4));
    setActiveModalUnit(null);
  };

  // Handle Select Route
  const handleSelectRoute = (route: "direct" | "accelerated") => {
    setSelectedRoute(route);
    setSelectedCountry(selectedCourse.countries[0] || null);
    setCurrentUnit(5);
    setUnlockedUnits((prev) => Math.max(prev, 5));
    setActiveModalUnit(null);
  };

  // Handle Select Country
  const handleSelectCountry = (country: CountryProgramData) => {
    setSelectedCountry(country);
    setCurrentUnit(6);
    setUnlockedUnits((prev) => Math.max(prev, 6));
    setActiveModalUnit(null);
    setStampedAnimation(true);
  };

  // Copy WhatsApp Summary
  const handleCopySummary = () => {
    if (!selectedCountry) return;
    const summaryText = `🦌 *LINGODEER STUDY-ABROAD PASSPORT*
👤 *Student Level*: ${selectedQual.title}
⚡ *Stream*: ${selectedStream.name}
🎯 *Degree*: ${selectedCourse.name} (${selectedRoute === "accelerated" ? "⚡ Accelerated Bridge - Save ₹53 Lakhs" : "Direct On-Campus"})
📍 *Destination Realm*: ${selectedCountry.flag} ${selectedCountry.countryName}
💰 *Est. Tuition Cost*: ${selectedCountry.tuitionPerYearInr} (${selectedCountry.tuitionPerYearLocal})
🛂 *PR Pathway*: ${selectedCountry.prPathwaySummary} (PSW Visa: ${selectedCountry.postStudyWorkVisa})
💼 *Avg. Starting Salary*: ${selectedCountry.entrySalaryInr} (${selectedCountry.entrySalaryLocal})
📚 *Language Test Requirement*: ${selectedCountry.languageRequirements.join(", ")} (FY In-House Prep Available)
🏛️ *Education Loan Facilitation*: 100% Pre-Visa Sanction with Nationalized & Private Banks
✨ *Trust Policy*: Free Visa Re-Filing Guarantee (1–2 attempts)

_Created via Future Yatra LingoDeer Pathway Game_`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Reset Game
  const handleResetGame = () => {
    setSelectedQual(MASTER_QUALIFICATIONS_DATA[0]);
    setSelectedStream(MASTER_QUALIFICATIONS_DATA[0].streams[0]);
    setSelectedCourse(MASTER_QUALIFICATIONS_DATA[0].streams[0].courseOptions[0]);
    setSelectedCountry(null);
    setCurrentUnit(1);
    setUnlockedUnits(1);
    setActiveModalUnit(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 select-none">
      
      {/* 1. LINGODEER TOP GAME STATS BAR */}
      <div className="bg-white/95 backdrop-blur-xl border-2 border-amber-200/90 rounded-3xl p-4 sm:p-5 shadow-xl flex flex-wrap items-center justify-between gap-4 sticky top-4 z-30">
        
        {/* Mascot Avatar & Live Speech Bubble */}
        <div className="flex items-center space-x-3 flex-1 min-w-[280px]">
          <div className="relative w-13 h-13 rounded-2xl overflow-hidden shadow-lg border-2 border-amber-300 shrink-0 bg-amber-50">
            <Image
              src="/images/lingodeer/mascot.jpg"
              alt="LingoDeer Mascot"
              width={52}
              height={52}
              className="object-cover"
            />
            <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-amber-400 border border-white rounded-full flex items-center justify-center text-[10px]">
              🦌
            </span>
          </div>

          <div className="relative bg-amber-50/90 border border-amber-200/80 px-3.5 py-1.5 rounded-2xl text-xs font-bold text-amber-950 shadow-2xs max-w-md">
            <p className="leading-snug">{mascotDialogue}</p>
          </div>
        </div>

        {/* Live Game Badges: Streak 🔥, Coins 🪙, Lives ❤️ */}
        <div className="flex items-center space-x-3 text-xs font-black">
          
          <div className="flex items-center space-x-1.5 bg-orange-50 text-orange-700 px-3 py-1.5 rounded-xl border border-orange-200 shadow-2xs">
            <Flame className="w-4 h-4 fill-orange-500 text-orange-500 animate-pulse" />
            <span>5 Streak</span>
          </div>

          <div className="flex items-center space-x-1.5 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-xl border border-emerald-200 shadow-2xs">
            <Coins className="w-4 h-4 text-emerald-600 fill-emerald-500" />
            <span>₹53L Saved</span>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200 text-[11px]">
            <button
              onClick={() => setCurrencyMode("INR")}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                currencyMode === "INR" ? "bg-white text-brand-primary shadow-xs font-black" : "text-slate-500"
              }`}
            >
              ₹ INR
            </button>
            <button
              onClick={() => setCurrencyMode("LOCAL")}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                currencyMode === "LOCAL" ? "bg-white text-brand-accent shadow-xs font-black" : "text-slate-500"
              }`}
            >
              $ / € Local
            </button>
          </div>

          <button
            onClick={handleResetGame}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors shadow-2xs cursor-pointer flex items-center justify-center"
            title="Restart Adventure"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

        </div>

      </div>

      {/* 2. LINGODEER MODULAR CASTLE UNITS CONTAINER */}
      <div className="bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#FFF5E5] rounded-[40px] border-2 border-amber-200/90 p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden">
        
        {/* Floating Clouds & Decorative Castles in Background */}
        <div className="absolute top-8 left-6 text-4xl opacity-35 pointer-events-none">🏰</div>
        <div className="absolute top-1/3 right-8 text-4xl opacity-35 pointer-events-none">👑</div>
        <div className="absolute bottom-20 left-8 text-4xl opacity-35 pointer-events-none">✨</div>
        <div className="absolute bottom-1/3 right-6 text-4xl opacity-35 pointer-events-none">🗺️</div>

        {/* MODULAR UNIT CARDS STACK */}
        <div className="space-y-6 relative z-10">
          {LINGODEER_UNITS.map((unit) => {
            const isCompleted = unit.id < currentUnit;
            const isCurrent = unit.id === currentUnit;
            const isUnlocked = unit.id <= unlockedUnits;
            const isLocked = unit.id > unlockedUnits;

            return (
              <motion.div
                key={unit.id}
                layout
                whileHover={{ scale: isUnlocked ? 1.015 : 1 }}
                onClick={() => {
                  if (isUnlocked) {
                    setCurrentUnit(unit.id);
                    setActiveModalUnit(unit.id);
                  }
                }}
                className={`p-5 sm:p-6 rounded-[32px] border-3 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer shadow-md ${
                  isLocked
                    ? "bg-slate-100/90 border-slate-200 opacity-55 cursor-not-allowed"
                    : isCurrent
                    ? "bg-white border-amber-400 shadow-xl ring-4 ring-amber-300/30"
                    : isCompleted
                    ? "bg-white/95 border-emerald-400 shadow-emerald-500/10"
                    : "bg-white border-slate-200 hover:border-amber-300"
                }`}
              >
                {/* Left: Unit Number, 3D Icon & Title */}
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden shadow-lg border-2 border-white shrink-0 bg-slate-50">
                    <Image
                      src={unit.iconSrc}
                      alt={unit.title}
                      width={72}
                      height={72}
                      className="object-cover"
                    />
                    {isCompleted && (
                      <span className="absolute -top-1 -right-1 w-6 h-6 bg-amber-400 border-2 border-white rounded-full flex items-center justify-center text-[10px] shadow-sm">
                        ⭐
                      </span>
                    )}
                  </div>

                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-black tracking-widest text-amber-600 bg-amber-100/80 px-2 py-0.5 rounded-md uppercase">
                        {unit.unitNumber}
                      </span>
                      {isCurrent && (
                        <span className="text-[10px] font-black text-brand-primary bg-brand-greenTint px-2 py-0.5 rounded-md animate-pulse">
                          Current Quest ⚔️
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-black text-base sm:text-lg text-dark">
                      {unit.title}
                    </h3>
                    <p className="text-xs text-muted font-bold">
                      {isCompleted
                        ? unit.id === 1
                          ? `Completed: ${selectedQual.id.toUpperCase()}`
                          : unit.id === 2
                          ? `Completed: ${selectedStream.code}`
                          : unit.id === 3
                          ? `Completed: ${selectedCourse.name}`
                          : unit.id === 4
                          ? `Completed: ${selectedRoute === "accelerated" ? "Accelerated Bridge (Save ₹53L)" : "Direct Model"}`
                          : unit.id === 5
                          ? `Completed: ${selectedCountry?.countryName || "Selected"}`
                          : "Passport Ready!"
                        : unit.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right: Tactile LingoDeer Crown / Action Button */}
                <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                  {isLocked ? (
                    <div className="flex items-center space-x-1 text-xs font-bold text-slate-400 bg-slate-200/80 px-3 py-1.5 rounded-full">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Locked</span>
                    </div>
                  ) : isCompleted ? (
                    <div className="flex items-center space-x-1.5 text-xs font-black text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-200 shadow-2xs">
                      <Crown className="w-4 h-4 fill-amber-400 text-amber-500" />
                      <span>Mastered ✓</span>
                    </div>
                  ) : (
                    <button className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-amber-950 font-black text-xs shadow-lg shadow-amber-400/40 flex items-center gap-1.5 transition-all">
                      <span>Enter Unit</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* 3. LINGODEER INTERACTIVE UNIT MODALS */}
      <AnimatePresence>
        {activeModalUnit !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[36px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl border-3 border-amber-300/90 space-y-6 max-h-[88vh] overflow-y-auto"
            >
              
              {/* Modal Top Banner */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-md border border-amber-300 shrink-0 bg-amber-50">
                    <Image
                      src={LINGODEER_UNITS[activeModalUnit - 1]?.iconSrc}
                      alt="Unit Asset"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">
                      {LINGODEER_UNITS[activeModalUnit - 1]?.unitNumber}
                    </span>
                    <h3 className="font-heading font-black text-xl text-dark">
                      {LINGODEER_UNITS[activeModalUnit - 1]?.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalUnit(null)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* UNIT 1: Highest Education Level */}
              {activeModalUnit === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {MASTER_QUALIFICATIONS_DATA.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => handleSelectQual(q)}
                      className={`p-4 rounded-3xl border-2 text-left transition-all cursor-pointer flex items-start space-x-3.5 ${
                        selectedQual.id === q.id
                          ? "bg-amber-50 border-amber-500 shadow-md ring-2 ring-amber-500/20"
                          : "bg-slate-50 hover:bg-white border-slate-200 hover:border-amber-400"
                      }`}
                    >
                      <span className="text-3xl">
                        {q.id === "12th" ? "🎓" : q.id === "bachelors" ? "🎒" : q.id === "masters" ? "📘" : q.id === "phd" ? "🔬" : "🛠️"}
                      </span>
                      <div>
                        <h4 className="font-heading font-black text-sm text-dark">{q.title}</h4>
                        <p className="text-[11px] text-muted font-medium mt-0.5">{q.badge}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* UNIT 2: Stream Selection */}
              {activeModalUnit === 2 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {selectedQual.streams.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleSelectStream(s)}
                      className={`p-4 rounded-3xl border-2 text-left transition-all cursor-pointer space-y-1.5 ${
                        selectedStream.id === s.id
                          ? "bg-amber-50 border-amber-500 shadow-md ring-2 ring-amber-500/20"
                          : "bg-slate-50 hover:bg-white border-slate-200 hover:border-amber-400"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-black text-sm text-dark">{s.code}</span>
                        <span className="text-[10px] font-bold bg-white text-amber-800 px-2 py-0.5 rounded-full border border-amber-200">
                          {s.courseOptions.length} Castle Tracks
                        </span>
                      </div>
                      <p className="text-xs font-bold text-amber-700">{s.name}</p>
                      <p className="text-[11px] text-muted line-clamp-2">{s.description}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* UNIT 3: Course Selection */}
              {activeModalUnit === 3 && (
                <div className="space-y-3">
                  {selectedStream.courseOptions.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => handleSelectCourse(c)}
                      className={`w-full p-4 rounded-3xl border-2 text-left transition-all cursor-pointer space-y-1 ${
                        selectedCourse.id === c.id
                          ? "bg-purple-50 border-purple-500 shadow-md ring-2 ring-purple-500/20"
                          : "bg-slate-50 hover:bg-white border-slate-200 hover:border-purple-400"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-heading font-black text-sm text-dark">{c.name}</h4>
                        <span className="text-[10px] font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
                          {c.countries.length} Country Realms
                        </span>
                      </div>
                      {c.subtitle && <p className="text-xs text-purple-900 font-medium">{c.subtitle}</p>}
                      <p className="text-[11px] text-slate-500">Duration: {c.directDuration}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* UNIT 4: Route Selection */}
              {activeModalUnit === 4 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
                  {/* DIRECT MODEL */}
                  <button
                    onClick={() => handleSelectRoute("direct")}
                    className={`p-5 rounded-3xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                      selectedRoute === "direct"
                        ? "bg-brand-tint border-brand-accent shadow-lg ring-2 ring-brand-accent/20"
                        : "bg-slate-50 hover:bg-white border-slate-200 hover:border-brand-accent"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 font-black text-sm text-dark">
                          <Building className="w-5 h-5 text-brand-accent shrink-0" />
                          <span>Direct Model</span>
                        </div>
                        {selectedRoute === "direct" && <CheckCircle2 className="w-5 h-5 text-brand-accent" />}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        100% On-Campus Abroad. Full traditional international university immersion.
                      </p>
                    </div>

                    <div className="text-[10px] font-bold text-brand-accentDark bg-white p-2.5 rounded-2xl border border-blue-100 flex items-center justify-between">
                      <span>Standard Foreign Tuition</span>
                      <span className="text-[9px] font-extrabold bg-blue-50 text-brand-accent px-2 py-0.5 rounded-full">
                        Full Campus
                      </span>
                    </div>
                  </button>

                  {/* ACCELERATED PATHWAY */}
                  <button
                    onClick={() => handleSelectRoute("accelerated")}
                    className={`p-5 rounded-3xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                      selectedRoute === "accelerated"
                        ? "bg-emerald-50 border-brand-primary shadow-lg ring-2 ring-brand-primary/20"
                        : "bg-slate-50 hover:bg-white border-slate-200 hover:border-brand-primary"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 font-black text-sm text-emerald-950">
                          <Zap className="w-5 h-5 text-amber-500 fill-amber-500 shrink-0" />
                          <span>Accelerated Pathway</span>
                        </div>
                        {selectedRoute === "accelerated" ? (
                          <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                        ) : (
                          <span className="bg-emerald-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-2xs">
                            SAVE UP TO ₹53L
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        1 Year Online in India (IIIT-B / IMT-G) + 2–3 Years on-campus abroad. GRE/GMAT Waived!
                      </p>
                    </div>

                    <div className="text-[10px] font-bold text-emerald-900 bg-white p-2.5 rounded-2xl border border-emerald-100 flex items-center justify-between">
                      <span>⚡ ₹5L Year 1 + Same PSW Visa</span>
                      <span className="bg-emerald-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-2xs">
                        SAVE ₹53L
                      </span>
                    </div>
                  </button>
                </div>
              )}

              {/* UNIT 5: Country Gateways */}
              {activeModalUnit === 5 && (
                <div className="space-y-3">
                  <p className="text-xs text-slate-500 font-bold">
                    Click a destination country to stamp it into your Official Passport:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {selectedCourse.countries.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => handleSelectCountry(c)}
                        className={`p-4 rounded-3xl border-2 text-left transition-all cursor-pointer space-y-2 ${
                          selectedCountry?.id === c.id
                            ? "bg-amber-50 border-amber-500 shadow-md ring-2 ring-amber-500/20"
                            : "bg-slate-50 hover:bg-white border-slate-200 hover:border-amber-400"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">{c.flag}</span>
                            <span className="font-heading font-black text-sm text-dark">{c.countryName}</span>
                          </div>
                          {c.isFyRecommended && (
                            <span className="bg-amber-100 text-amber-900 text-[9px] font-extrabold px-2 py-0.5 rounded-full">
                              ⭐ Recommended
                            </span>
                          )}
                        </div>

                        <div className="text-xs space-y-0.5">
                          <p className="font-bold text-dark">
                            Tuition: <span className="text-brand-primary">{currencyMode === "INR" ? c.tuitionPerYearInr : c.tuitionPerYearLocal}</span>
                          </p>
                          <p className="text-slate-500 font-medium text-[11px]">
                            PR: {c.prEase} • PSW Visa: {c.postStudyWorkVisa}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* UNIT 6: Achievement Passport & Visa Stamp Hall */}
              {activeModalUnit === 6 && selectedCountry && (
                <div className="space-y-6">
                  
                  {/* LingoDeer 3D Passport Showcase */}
                  <div className="bg-gradient-to-br from-[#1C366B] to-[#0E2045] text-white rounded-3xl p-6 shadow-2xl relative overflow-hidden border-2 border-amber-400/80">
                    <div className="flex items-center justify-between pb-4 border-b border-white/20">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-md border-2 border-amber-400/80">
                          <Image
                            src="/images/lingodeer/passport.jpg"
                            alt="LingoDeer Passport"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] font-black text-amber-300 uppercase tracking-widest">
                            FUTURE YATRA PASSPORT
                          </span>
                          <h4 className="font-heading font-black text-lg text-white">
                            Official Study Abroad Visa Grant
                          </h4>
                        </div>
                      </div>

                      {/* Embossed Gold Stamp */}
                      <motion.div
                        initial={{ scale: 2, rotate: -20, opacity: 0 }}
                        animate={{ scale: 1, rotate: -5, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 font-black text-[10px] px-3 py-1.5 rounded-xl shadow-lg border-2 border-white shrink-0 uppercase tracking-wider"
                      >
                        ✓ VISA APPROVED 🛡️
                      </motion.div>
                    </div>

                    {/* Passport Details Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-4 text-xs">
                      <div>
                        <span className="text-[10px] font-bold text-slate-300 uppercase">Student Base:</span>
                        <p className="font-black text-white text-sm">{selectedQual.id.toUpperCase()} ({selectedStream.code})</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-300 uppercase">Destination Realm:</span>
                        <p className="font-black text-white text-sm">{selectedCountry.flag} {selectedCountry.countryName}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-300 uppercase">Chosen Degree Track:</span>
                        <p className="font-bold text-amber-200">{selectedCourse.name}</p>
                        <p className="text-[10px] text-emerald-300 font-bold">{selectedRoute === "accelerated" ? "⚡ Accelerated Bridge" : "Direct On-Campus"}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-300 uppercase">Est. Annual Tuition:</span>
                        <p className="font-black text-emerald-400 text-sm">{currencyMode === "INR" ? selectedCountry.tuitionPerYearInr : selectedCountry.tuitionPerYearLocal}</p>
                        <p className="text-[10px] text-slate-300 font-semibold">{selectedCountry.totalProgramCostInr}</p>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 text-xs space-y-1">
                      <span className="font-bold text-amber-300">PR & Settlement Pathway:</span>
                      <p className="text-slate-200 text-[11px] leading-relaxed">{selectedCountry.prPathwaySummary}</p>
                    </div>
                  </div>

                  {/* Actions: Copy WhatsApp & Call */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={handleCopySummary}
                      className="py-3.5 px-4 rounded-2xl bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-greenTint font-black text-xs flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>{copied ? "Passport Copied! ✓" : "Copy WhatsApp Passport"}</span>
                    </button>

                    <a
                      href="tel:+919286844550"
                      className="py-3.5 px-4 rounded-2xl bg-brand-primary hover:bg-brand-primaryHover text-white font-black text-xs flex items-center justify-center gap-2 shadow-md shadow-brand-primary/25 cursor-pointer"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Book 1-on-1 Counsellor</span>
                    </a>
                  </div>

                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
