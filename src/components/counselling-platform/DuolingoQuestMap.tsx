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
  CheckCircle2,
  Lock,
  RotateCcw,
  Star,
  Share2,
  PhoneCall,
  X,
  Building,
  Zap,
} from "lucide-react";

interface MilestoneConfig {
  id: number;
  title: string;
  subtitle: string;
  imageSrc: string;
  color: string;
  glowColor: string;
  posX: number; // percentage left in viewBox (0 to 400) -> X/400 * 100%
  posY: number; // Y in pixels
}

const MILESTONES_CONFIG: MilestoneConfig[] = [
  {
    id: 1,
    title: "Start Your Yatra",
    subtitle: "What have you completed in India?",
    imageSrc: "/images/duolingo/gradcap.jpg",
    color: "from-emerald-400 to-emerald-600",
    glowColor: "shadow-emerald-500/40",
    posX: 50, // 200px
    posY: 60,
  },
  {
    id: 2,
    title: "Your Superpower Stream",
    subtitle: "Select your academic branch",
    imageSrc: "/images/duolingo/lightning.jpg",
    color: "from-amber-400 to-amber-600",
    glowColor: "shadow-amber-500/40",
    posX: 28, // 112px
    posY: 220,
  },
  {
    id: 3,
    title: "Target Degree Track",
    subtitle: "Choose your dream abroad program",
    imageSrc: "/images/duolingo/target.jpg",
    color: "from-purple-500 to-purple-700",
    glowColor: "shadow-purple-500/40",
    posX: 72, // 288px
    posY: 380,
  },
  {
    id: 4,
    title: "Flight Route Architecture",
    subtitle: "Direct Model vs. Accelerated Pathway",
    imageSrc: "/images/duolingo/airplane.jpg",
    color: "from-blue-400 to-blue-600",
    glowColor: "shadow-blue-500/40",
    posX: 30, // 120px
    posY: 540,
  },
  {
    id: 5,
    title: "Destination World Portals",
    subtitle: "Explore country PR, costs & salaries",
    imageSrc: "/images/duolingo/globe.jpg",
    color: "from-emerald-500 to-teal-600",
    glowColor: "shadow-emerald-500/40",
    posX: 70, // 280px
    posY: 700,
  },
  {
    id: 6,
    title: "Study Abroad Boarding Pass",
    subtitle: "Claim your personalized roadmap",
    imageSrc: "/images/duolingo/ticket.jpg",
    color: "from-amber-400 via-rose-400 to-emerald-500",
    glowColor: "shadow-amber-400/50",
    posX: 50, // 200px
    posY: 860,
  },
];

export default function DuolingoQuestMap() {
  // Current active step (1 to 6)
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [highestUnlockedStep, setHighestUnlockedStep] = useState<number>(1);

  // Selected Data State
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

  // Currency toggle
  const [currencyMode, setCurrencyMode] = useState<"INR" | "LOCAL">("INR");
  const [copied, setCopied] = useState(false);

  // Modal selector state
  const [activeModalStep, setActiveModalStep] = useState<number | null>(null);

  // Handle Level Selection
  const handleSelectQual = (qual: QualificationCategory) => {
    setSelectedQual(qual);
    setSelectedStream(qual.streams[0]);
    setSelectedCourse(qual.streams[0].courseOptions[0]);
    setSelectedCountry(null);
    setCurrentStep(2);
    setHighestUnlockedStep((prev) => Math.max(prev, 2));
    setActiveModalStep(null);
  };

  // Handle Stream Selection
  const handleSelectStream = (stream: StreamOption) => {
    setSelectedStream(stream);
    setSelectedCourse(stream.courseOptions[0]);
    setSelectedCountry(null);
    setCurrentStep(3);
    setHighestUnlockedStep((prev) => Math.max(prev, 3));
    setActiveModalStep(null);
  };

  // Handle Course Selection
  const handleSelectCourse = (course: AbroadCourseOption) => {
    setSelectedCourse(course);
    setSelectedCountry(null);
    setCurrentStep(4);
    setHighestUnlockedStep((prev) => Math.max(prev, 4));
    setActiveModalStep(null);
  };

  // Handle Route Selection
  const handleSelectRoute = (route: "direct" | "accelerated") => {
    setSelectedRoute(route);
    setSelectedCountry(selectedCourse.countries[0] || null);
    setCurrentStep(5);
    setHighestUnlockedStep((prev) => Math.max(prev, 5));
    setActiveModalStep(null);
  };

  // Handle Country Selection
  const handleSelectCountry = (country: CountryProgramData) => {
    setSelectedCountry(country);
    setCurrentStep(6);
    setHighestUnlockedStep((prev) => Math.max(prev, 6));
    setActiveModalStep(null);
  };

  // Copy WhatsApp Summary
  const handleCopySummary = () => {
    if (!selectedCountry) return;
    const summaryText = `🎓 *FUTURE YATRA Study-Abroad Boarding Pass*
👤 *Student Level*: ${selectedQual.title}
⚡ *Stream*: ${selectedStream.name}
🎯 *Target Track*: ${selectedCourse.name} (${selectedRoute === "accelerated" ? "⚡ Accelerated Pathway - Save up to ₹53L" : "Direct On-Campus"})
📍 *Destination Country*: ${selectedCountry.flag} ${selectedCountry.countryName}
💰 *Est. Tuition Cost*: ${selectedCountry.tuitionPerYearInr} (${selectedCountry.tuitionPerYearLocal})
🛂 *PR Pathway*: ${selectedCountry.prPathwaySummary} (PSW Visa: ${selectedCountry.postStudyWorkVisa})
💼 *Avg. Starting Salary*: ${selectedCountry.entrySalaryInr} (${selectedCountry.entrySalaryLocal})
📚 *Language Requirement*: ${selectedCountry.languageRequirements.join(", ")} (FY In-House Prep Available)
🏛️ *Education Loan Facilitation*: 100% Pre-Visa Sanction with Nationalized & NBFC Banks
✨ *Trust Policy*: Free Visa Re-Filing Guarantee (1–2 attempts)

_Created via Future Yatra Interactive Gamified Yatra Map_`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Reset entire quest
  const handleResetQuest = () => {
    setSelectedQual(MASTER_QUALIFICATIONS_DATA[0]);
    setSelectedStream(MASTER_QUALIFICATIONS_DATA[0].streams[0]);
    setSelectedCourse(MASTER_QUALIFICATIONS_DATA[0].streams[0].courseOptions[0]);
    setSelectedCountry(null);
    setCurrentStep(1);
    setHighestUnlockedStep(1);
    setActiveModalStep(null);
  };

  // Calculate progress percentage
  const progressPercent = Math.round(((currentStep - 1) / 5) * 100);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 select-none">
      
      {/* 1. DUOLINGO-STYLE HEADER / PROGRESS DASHBOARD */}
      <div className="bg-white/95 backdrop-blur-xl border-2 border-emerald-100/90 rounded-3xl p-5 sm:p-6 shadow-xl flex flex-wrap items-center justify-between gap-4 sticky top-4 z-30">
        
        {/* Progress Bar & Level */}
        <div className="flex items-center space-x-3 flex-1 min-w-[240px]">
          <div className="w-12 h-12 rounded-2xl bg-brand-primary text-white flex items-center justify-center font-black text-lg shadow-md shadow-brand-primary/30 shrink-0">
            {currentStep}/6
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="flex items-center justify-between text-xs font-extrabold text-dark">
              <span>Study Abroad Quest Progress</span>
              <span className="text-brand-primary font-black">{progressPercent}% Completed</span>
            </div>
            <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.max(progressPercent, 10)}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-emerald-400 to-brand-primary rounded-full shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Currency Switcher & Reset Button */}
        <div className="flex items-center space-x-2.5">
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-extrabold">
            <button
              onClick={() => setCurrencyMode("INR")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                currencyMode === "INR" ? "bg-white text-brand-primary shadow-xs" : "text-slate-500"
              }`}
            >
              ₹ INR
            </button>
            <button
              onClick={() => setCurrencyMode("LOCAL")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                currencyMode === "LOCAL" ? "bg-white text-brand-accent shadow-xs" : "text-slate-500"
              }`}
            >
              $ / € Local
            </button>
          </div>

          <button
            onClick={handleResetQuest}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors shadow-2xs cursor-pointer flex items-center justify-center"
            title="Reset Quest from Start"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* 2. MATHEMATICALLY ALIGNED DUOLINGO S-CURVE QUEST MAP CONTAINER */}
      <div className="relative bg-gradient-to-b from-[#F2FBF6] via-[#EAF7F0] to-[#E3F4EC] rounded-[40px] border-2 border-emerald-100/90 p-4 sm:p-8 shadow-2xl overflow-hidden min-h-[960px]">
        
        {/* Floating Clouds / Stars */}
        <div className="absolute top-12 left-8 text-4xl opacity-50 animate-bounce pointer-events-none">☁️</div>
        <div className="absolute top-1/4 right-8 text-5xl opacity-40 animate-pulse pointer-events-none">☁️</div>
        <div className="absolute bottom-24 left-10 text-4xl opacity-40 animate-bounce pointer-events-none">✨</div>
        <div className="absolute bottom-1/3 right-10 text-3xl opacity-40 animate-pulse pointer-events-none">🌟</div>

        {/* SVG PERFECT S-CURVE PASSING DIRECTLY THROUGH EVERY NODE CENTER */}
        <svg
          viewBox="0 0 400 920"
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="glowLaserTrail" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0C9253" />
              <stop offset="50%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#0067E3" />
            </linearGradient>
            <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Grey Winding Guide Path */}
          <path
            d="M 200 60 C 200 140, 112 140, 112 220 C 112 300, 288 300, 288 380 C 288 460, 120 460, 120 540 C 120 620, 280 620, 280 700 C 280 780, 200 780, 200 860"
            fill="none"
            stroke="#CBD5E1"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-50"
          />

          {/* Active Glowing Animated Green/Blue Laser Path */}
          <path
            d="M 200 60 C 200 140, 112 140, 112 220 C 112 300, 288 300, 288 380 C 288 460, 120 460, 120 540 C 120 620, 280 620, 280 700 C 280 780, 200 780, 200 860"
            fill="none"
            stroke="url(#glowLaserTrail)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#laserGlow)"
            strokeDasharray="1200"
            strokeDashoffset={1200 - (progressPercent / 100) * 1200}
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* ABSOLUTE POSITIONED MILESTONE CHECKPOINTS */}
        <div className="relative w-full h-[920px] z-10">
          {MILESTONES_CONFIG.map((milestone) => {
            const isCompleted = milestone.id < currentStep;
            const isCurrent = milestone.id === currentStep;
            const isUnlocked = milestone.id <= highestUnlockedStep;
            const isLocked = milestone.id > highestUnlockedStep;

            return (
              <div
                key={milestone.id}
                style={{
                  left: `${milestone.posX}%`,
                  top: `${milestone.posY}px`,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center cursor-pointer"
              >
                {/* Floating Tooltip Pill */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-2.5 z-20 pointer-events-none"
                >
                  <div
                    className={`px-3.5 py-1 rounded-full text-[11px] font-black shadow-md border flex items-center space-x-1.5 whitespace-nowrap ${
                      isCurrent
                        ? "bg-white text-brand-primary border-brand-primary/40 ring-4 ring-brand-primary/20 animate-bounce"
                        : isCompleted
                        ? "bg-emerald-50 text-emerald-900 border-emerald-200"
                        : "bg-slate-100 text-slate-400 border-slate-200"
                    }`}
                  >
                    <span>{milestone.title}</span>
                    {isCompleted && <CheckCircle2 className="w-3 h-3 text-emerald-600 inline" />}
                  </div>
                </motion.div>

                {/* 3D Tactile Circle Button */}
                <div className="relative group">
                  
                  {/* Glowing Radar Pulse */}
                  {isCurrent && (
                    <span className="absolute -inset-3 rounded-full bg-brand-primary/35 animate-ping pointer-events-none" />
                  )}

                  <motion.button
                    whileHover={{ scale: isUnlocked ? 1.12 : 1 }}
                    whileTap={{ scale: isUnlocked ? 0.94 : 1 }}
                    onClick={() => {
                      if (isUnlocked) {
                        setCurrentStep(milestone.id);
                        setActiveModalStep(milestone.id);
                      }
                    }}
                    disabled={isLocked}
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center shadow-2xl transition-all duration-200 overflow-hidden border-4 border-white ${
                      isLocked
                        ? "bg-slate-200 border-b-6 border-b-slate-300 opacity-60 cursor-not-allowed"
                        : isCompleted
                        ? "bg-gradient-to-b from-emerald-400 to-emerald-600 border-b-6 border-b-emerald-800 shadow-emerald-500/40"
                        : isCurrent
                        ? "bg-gradient-to-b from-amber-300 to-amber-500 border-b-6 border-b-amber-700 shadow-amber-400/60 ring-4 ring-amber-300/40 animate-pulse"
                        : "bg-gradient-to-b from-blue-400 to-blue-600 border-b-6 border-b-blue-800 shadow-blue-500/40"
                    }`}
                  >
                    {isLocked ? (
                      <Lock className="w-7 h-7 text-slate-400" />
                    ) : (
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex items-center justify-center">
                        <Image
                          src={milestone.imageSrc}
                          alt={milestone.title}
                          width={64}
                          height={64}
                          className="object-cover rounded-full drop-shadow-md"
                        />
                      </div>
                    )}

                    {/* Gold Star Badge on Completion */}
                    {isCompleted && (
                      <span className="absolute -top-1 -right-1 w-6 h-6 bg-amber-400 border-2 border-white rounded-full flex items-center justify-center text-[10px] shadow-md">
                        ⭐
                      </span>
                    )}
                  </motion.button>
                </div>

                {/* Subtitle / Selected Choice Label */}
                <p className="text-[10px] font-black text-slate-600 mt-2 text-center max-w-[140px] truncate bg-white/70 px-2 py-0.5 rounded-full border border-slate-200/60 shadow-2xs">
                  {isCompleted
                    ? milestone.id === 1
                      ? `✓ ${selectedQual.id.toUpperCase()}`
                      : milestone.id === 2
                      ? `✓ ${selectedStream.code}`
                      : milestone.id === 3
                      ? `✓ ${selectedCourse.name}`
                      : milestone.id === 4
                      ? `✓ ${selectedRoute === "accelerated" ? "Accelerated" : "Direct"}`
                      : milestone.id === 5
                      ? `✓ ${selectedCountry?.countryName || "Selected"}`
                      : "Boarding Pass"
                    : milestone.subtitle}
                </p>

              </div>
            );
          })}
        </div>

      </div>

      {/* 3. STEP INTERACTION MODALS */}
      <AnimatePresence>
        {activeModalStep !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[36px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl border-2 border-slate-200/90 space-y-6 max-h-[88vh] overflow-y-auto"
            >
              
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-md border border-slate-200 shrink-0">
                    <Image
                      src={MILESTONES_CONFIG[activeModalStep - 1]?.imageSrc}
                      alt="Step 3D Asset"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-xl text-dark">
                      {MILESTONES_CONFIG[activeModalStep - 1]?.title}
                    </h3>
                    <p className="text-xs text-muted font-bold">
                      {MILESTONES_CONFIG[activeModalStep - 1]?.subtitle}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalStep(null)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* STEP 1 MODAL: Select Highest Qualification */}
              {activeModalStep === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {MASTER_QUALIFICATIONS_DATA.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => handleSelectQual(q)}
                      className={`p-4 rounded-3xl border-2 text-left transition-all cursor-pointer flex items-start space-x-3.5 ${
                        selectedQual.id === q.id
                          ? "bg-brand-greenTint border-brand-primary shadow-md ring-2 ring-brand-primary/20"
                          : "bg-slate-50 hover:bg-white border-slate-200 hover:border-brand-primary/40"
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

              {/* STEP 2 MODAL: Select Stream */}
              {activeModalStep === 2 && (
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
                        <span className="text-[10px] font-bold bg-white text-slate-600 px-2 py-0.5 rounded-full border">
                          {s.courseOptions.length} Tracks
                        </span>
                      </div>
                      <p className="text-xs font-bold text-amber-700">{s.name}</p>
                      <p className="text-[11px] text-muted line-clamp-2">{s.description}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 3 MODAL: Select Target Course */}
              {activeModalStep === 3 && (
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
                          {c.countries.length} Countries
                        </span>
                      </div>
                      {c.subtitle && <p className="text-xs text-purple-900 font-medium">{c.subtitle}</p>}
                      <p className="text-[11px] text-slate-500">Duration: {c.directDuration}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 4 MODAL: Select Flight Route */}
              {activeModalStep === 4 && (
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
                        {selectedRoute === "direct" && (
                          <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        100% On-Campus Abroad. Full traditional international university experience.
                      </p>
                    </div>

                    <div className="text-[10px] font-bold text-brand-accentDark bg-white p-2.5 rounded-2xl border border-blue-100 flex items-center justify-between">
                      <span>Standard Foreign Tuition & Living</span>
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

              {/* STEP 5 MODAL: Destination Countries */}
              {activeModalStep === 5 && (
                <div className="space-y-3">
                  <p className="text-xs text-slate-500 font-bold">
                    Click a destination country to lock it into your Boarding Pass:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {selectedCourse.countries.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => handleSelectCountry(c)}
                        className={`p-4 rounded-3xl border-2 text-left transition-all cursor-pointer space-y-2 ${
                          selectedCountry?.id === c.id
                            ? "bg-emerald-50 border-brand-primary shadow-md ring-2 ring-brand-primary/20"
                            : "bg-slate-50 hover:bg-white border-slate-200 hover:border-brand-primary/40"
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

              {/* STEP 6 MODAL: Final Boarding Pass View */}
              {activeModalStep === 6 && selectedCountry && (
                <div className="space-y-5">
                  {/* Celebratory Banner with 3D Ticket Asset */}
                  <div className="bg-gradient-to-r from-brand-primary to-emerald-600 text-white rounded-3xl p-5 text-center space-y-2 shadow-lg">
                    <div className="w-16 h-16 rounded-2xl mx-auto overflow-hidden shadow-md border-2 border-white/40">
                      <Image
                        src="/images/duolingo/ticket.jpg"
                        alt="3D Boarding Pass"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-heading font-black text-lg">Your Study-Abroad Boarding Pass is Ready!</h4>
                    <p className="text-xs text-emerald-100">
                      Personalized Counselling Roadmap for {selectedCountry.countryName}
                    </p>
                  </div>

                  {/* Boarding Pass Ticket */}
                  <div className="border-2 border-dashed border-slate-300 rounded-3xl p-6 bg-slate-50 space-y-4 relative">
                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-200 text-xs">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Starting Point</span>
                        <p className="font-extrabold text-dark">{selectedQual.id.toUpperCase()} ({selectedStream.code})</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Destination</span>
                        <p className="font-extrabold text-dark">{selectedCountry.flag} {selectedCountry.countryName}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Target Degree</span>
                        <p className="font-extrabold text-dark">{selectedCourse.name}</p>
                        <p className="text-[11px] text-brand-primary font-bold">{selectedRoute === "accelerated" ? "⚡ Accelerated Pathway" : "Direct On-Campus"}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Est. Tuition</span>
                        <p className="font-extrabold text-dark">{currencyMode === "INR" ? selectedCountry.tuitionPerYearInr : selectedCountry.tuitionPerYearLocal}</p>
                        <p className="text-[11px] text-slate-500 font-semibold">{selectedCountry.totalProgramCostInr}</p>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-2xl border border-slate-200 text-xs space-y-1">
                      <span className="font-bold text-dark">PR & Settlement Pathway:</span>
                      <p className="text-slate-600 font-medium leading-relaxed">{selectedCountry.prPathwaySummary}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-white p-3 rounded-2xl border border-slate-200">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Avg. Starting Salary</span>
                        <p className="font-extrabold text-dark mt-0.5">{selectedCountry.entrySalaryInr}</p>
                      </div>
                      <div className="bg-white p-3 rounded-2xl border border-slate-200">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Language Req.</span>
                        <p className="font-bold text-slate-700 mt-0.5 truncate">{selectedCountry.languageRequirements.join(", ")}</p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Copy & Call Action */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={handleCopySummary}
                      className="py-3 px-4 rounded-2xl bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-greenTint font-extrabold text-xs flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>{copied ? "Copied to Clipboard! ✓" : "Copy WhatsApp Boarding Pass"}</span>
                    </button>

                    <a
                      href="tel:+919286844550"
                      className="py-3 px-4 rounded-2xl bg-brand-primary hover:bg-brand-primaryHover text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md shadow-brand-primary/25 cursor-pointer"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Book Free 1-on-1 Session</span>
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
