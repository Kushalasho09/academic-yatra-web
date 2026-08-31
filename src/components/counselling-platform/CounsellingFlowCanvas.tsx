"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MASTER_QUALIFICATIONS_DATA,
  QualificationCategory,
  StreamOption,
  AbroadCourseOption,
  CountryProgramData,
  POST_COUNSELLING_STEPS,
} from "@/data/counsellingData";
import CounsellorDrawer from "./CounsellorDrawer";
import {
  Compass,
  GraduationCap,
  Sparkles,
  Zap,
  Building,
  Globe,
  Landmark,
  Briefcase,
  Clock,
  ArrowRight,
  ShieldCheck,
  Search,
  RotateCcw,
  SlidersHorizontal,
  ChevronRight,
  HelpCircle,
  Layers,
  FileCheck,
  X,
} from "lucide-react";

export default function CounsellingFlowCanvas() {
  // Selected state
  const [selectedQualId, setSelectedQualId] = useState<string>("12th");
  const [selectedStreamId, setSelectedStreamId] = useState<string>("pcm");
  const [activeRoute, setActiveRoute] = useState<"direct" | "accelerated">("direct");
  const [selectedCourseId, setSelectedCourseId] = useState<string>("pcm-btech");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currencyMode, setCurrencyMode] = useState<"INR" | "LOCAL">("INR");

  // Modals
  const [principlesModalOpen, setPrinciplesModalOpen] = useState(false);
  const [accelModalOpen, setAccelModalOpen] = useState(false);
  const [flowModalOpen, setFlowModalOpen] = useState(false);

  // Drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeCountryForDrawer, setActiveCountryForDrawer] = useState<CountryProgramData | null>(null);

  // Current objects
  const currentQual = useMemo(() => {
    return (
      MASTER_QUALIFICATIONS_DATA.find((q) => q.id === selectedQualId) ||
      MASTER_QUALIFICATIONS_DATA[0]
    );
  }, [selectedQualId]);

  const currentStream = useMemo(() => {
    return (
      currentQual.streams.find((s) => s.id === selectedStreamId) ||
      currentQual.streams[0]
    );
  }, [currentQual, selectedStreamId]);

  const currentCourse = useMemo(() => {
    return (
      currentStream.courseOptions.find((c) => c.id === selectedCourseId) ||
      currentStream.courseOptions[0]
    );
  }, [currentStream, selectedCourseId]);

  const supportsAccelerated = useMemo(() => {
    return currentCourse?.applicableRoutes.includes("accelerated") ?? false;
  }, [currentCourse]);

  // Handle Level switch
  const handleQualChange = (qualId: string) => {
    setSelectedQualId(qualId);
    const qual = MASTER_QUALIFICATIONS_DATA.find((q) => q.id === qualId) || MASTER_QUALIFICATIONS_DATA[0];
    const stream = qual.streams[0];
    setSelectedStreamId(stream.id);
    const course = stream.courseOptions[0];
    setSelectedCourseId(course.id);
    setActiveRoute("direct");
  };

  // Handle Stream switch
  const handleStreamChange = (streamId: string) => {
    setSelectedStreamId(streamId);
    const stream = currentQual.streams.find((s) => s.id === streamId) || currentQual.streams[0];
    const course = stream.courseOptions[0];
    setSelectedCourseId(course.id);
    setActiveRoute("direct");
  };

  // Open drawer for a country
  const handleOpenCountryDetails = (country: CountryProgramData) => {
    setActiveCountryForDrawer(country);
    setDrawerOpen(true);
  };

  // Filter countries by search query
  const displayedCountries = useMemo(() => {
    if (!currentCourse || !currentCourse.countries) return [];
    if (!searchQuery.trim()) return currentCourse.countries;
    const q = searchQuery.toLowerCase();
    return currentCourse.countries.filter(
      (c) =>
        c.countryName.toLowerCase().includes(q) ||
        c.countryCode.toLowerCase().includes(q) ||
        c.prPathwaySummary.toLowerCase().includes(q) ||
        c.tuitionPerYearInr.toLowerCase().includes(q) ||
        c.entrySalaryInr.toLowerCase().includes(q)
    );
  }, [currentCourse, searchQuery]);

  return (
    <div className="w-full space-y-6">
      
      {/* 1. TOP COUNSELLOR ACTION BAR */}
      <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-wrap items-center justify-between gap-4">
        
        {/* Left Brand / Mode Indicator */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#122447] to-[#223D74] flex items-center justify-center text-white font-bold font-heading text-sm shadow-md">
            FY
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-heading font-extrabold text-base text-dark">
                Future Yatra <span className="text-brand-primary">Decision Tree</span>
              </span>
              <span className="bg-brand-greenTint text-brand-primary border border-brand-primary/20 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                Live Interactive Mode
              </span>
            </div>
            <p className="text-xs text-muted font-medium">
              Step-by-step visual branching for students and counsellors
            </p>
          </div>
        </div>

        {/* Center Quick Modal Triggers */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setPrinciplesModalOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer shadow-2xs"
          >
            📐 Core Principles
          </button>
          <button
            onClick={() => setAccelModalOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs font-bold transition-all cursor-pointer shadow-2xs"
          >
            ⚡ Accelerated Pathway
          </button>
          <button
            onClick={() => setFlowModalOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-brand-navy hover:bg-brand-navy/90 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
          >
            🧭 12-Step Journey
          </button>
        </div>

        {/* Right Search & Currency Controls */}
        <div className="flex items-center space-x-2.5">
          {/* Currency Switcher */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
            <button
              onClick={() => setCurrencyMode("INR")}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                currencyMode === "INR" ? "bg-white text-brand-primary shadow-xs" : "text-slate-500"
              }`}
            >
              ₹ INR
            </button>
            <button
              onClick={() => setCurrencyMode("LOCAL")}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                currencyMode === "LOCAL" ? "bg-white text-brand-accent shadow-xs" : "text-slate-500"
              }`}
            >
              $ / € Local
            </button>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search country / cost / PR..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary w-44 sm:w-56 transition-all"
            />
          </div>
        </div>

      </div>

      {/* 2. ROOT QUALIFICATION SWITCHER ROW */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {MASTER_QUALIFICATIONS_DATA.map((qual) => {
          const isSelected = qual.id === selectedQualId;
          return (
            <button
              key={qual.id}
              onClick={() => handleQualChange(qual.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer shadow-xs ${
                isSelected
                  ? "bg-white border-brand-primary ring-2 ring-brand-primary/20 shadow-md -translate-y-0.5"
                  : "bg-white/80 hover:bg-white border-slate-200/90 text-slate-700 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl">
                  {qual.id === "12th" ? "🎓" : qual.id === "bachelors" ? "🎒" : qual.id === "masters" ? "📘" : qual.id === "phd" ? "🔬" : "🛠️"}
                </span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
                )}
              </div>
              <h3 className="font-heading font-bold text-xs sm:text-sm text-dark mt-2 truncate">
                {qual.id === "12th" ? "12th / Class 12" : qual.id === "bachelors" ? "Bachelor's Degree" : qual.id === "masters" ? "Master's Degree" : qual.id === "phd" ? "PhD" : "Polytechnic / Diploma"}
              </h3>
              <p className="text-[10px] text-muted truncate mt-0.5">
                {qual.badge}
              </p>
            </button>
          );
        })}
      </div>

      {/* 3. MAIN BRANCHING CANVAS AREA */}
      <div className="bg-[#F3F8F5] rounded-[32px] border border-slate-200/90 p-6 sm:p-8 shadow-xl relative overflow-hidden">
        
        {/* Subtle Background Canvas Grid Dots */}
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#0C9253 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 space-y-8">

          {/* STREAM TABS SELECTOR (Under Current Qualification) */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-extrabold uppercase text-slate-500 tracking-wider shrink-0 mr-2 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-brand-primary" />
              <span>Select Stream:</span>
            </span>
            {currentQual.streams.map((st) => {
              const isActive = st.id === selectedStreamId;
              return (
                <button
                  key={st.id}
                  onClick={() => handleStreamChange(st.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer shadow-xs ${
                    isActive
                      ? "bg-brand-primary text-white shadow-md shadow-brand-primary/25 scale-105"
                      : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/90"
                  }`}
                >
                  {st.name}
                </button>
              );
            })}
          </div>

          {/* INTERACTIVE BRANCHING GRAPH ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* COLUMN 1 (Left Node): Completed Indian Qualification */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-xs font-extrabold uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-primary" />
                <span>Level 1: Completed In India</span>
              </div>

              <motion.div
                layout
                className="bg-white/95 backdrop-blur-xl border-2 border-brand-primary/40 rounded-[24px] p-5 shadow-lg shadow-brand-primary/10 space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-greenTint border border-brand-primary/20 flex items-center justify-center text-brand-primary text-2xl shadow-xs">
                    🎓
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-base text-dark">
                      {currentQual.title.split("(")[0]}
                    </h4>
                    <p className="text-xs font-bold text-brand-primary">
                      {currentStream.code} ({currentStream.name.split("(")[0]})
                    </p>
                  </div>
                </div>

                <p className="text-xs text-muted leading-relaxed">
                  {currentStream.description}
                </p>

                {currentStream.internalTags && currentStream.internalTags.length > 0 && (
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1">
                    {currentStream.internalTags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>

            {/* COLUMN 2 (Middle Branch): Direct Model vs Accelerated Pathway */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-extrabold uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-accent" />
                <span>Level 2: Choose Study Route</span>
              </div>

              <div className="space-y-3">
                {/* BRANCH A: DIRECT MODEL */}
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  onClick={() => setActiveRoute("direct")}
                  className={`p-4 rounded-[22px] border-2 transition-all cursor-pointer select-none ${
                    activeRoute === "direct"
                      ? "bg-white border-brand-accent shadow-xl shadow-blue-500/10 ring-2 ring-brand-accent/20"
                      : "bg-white/80 hover:bg-white border-slate-200 opacity-80"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-xl bg-blue-50 text-brand-accent flex items-center justify-center font-bold">
                        <Building className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="font-heading font-extrabold text-sm text-dark">
                          Direct Model
                        </h5>
                        <p className="text-[10px] text-slate-500">100% On-Campus Abroad</p>
                      </div>
                    </div>
                    {activeRoute === "direct" && (
                      <span className="w-3 h-3 rounded-full bg-brand-accent" />
                    )}
                  </div>

                  {/* Course Dropdown if multiple courses */}
                  {currentStream.courseOptions.length > 1 && (
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <label className="text-[10px] font-bold text-slate-400 block mb-1">
                        Select Target Degree:
                      </label>
                      <div className="space-y-1">
                        {currentStream.courseOptions.map((c) => (
                          <button
                            key={c.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCourseId(c.id);
                              setActiveRoute("direct");
                            }}
                            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-bold truncate transition-all cursor-pointer ${
                              c.id === selectedCourseId
                                ? "bg-brand-tint text-brand-accentDark font-extrabold"
                                : "text-slate-600 hover:bg-slate-100"
                            }`}
                          >
                            • {c.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* BRANCH B: ACCELERATED PATHWAY */}
                <motion.div
                  whileHover={{ scale: supportsAccelerated ? 1.015 : 1 }}
                  onClick={() => supportsAccelerated && setActiveRoute("accelerated")}
                  className={`p-4 rounded-[22px] border-2 transition-all select-none ${
                    !supportsAccelerated
                      ? "opacity-45 bg-slate-100 border-slate-200 cursor-not-allowed"
                      : activeRoute === "accelerated"
                      ? "bg-white border-brand-primary shadow-xl shadow-brand-primary/15 ring-2 ring-brand-primary/20 cursor-pointer"
                      : "bg-white/80 hover:bg-white border-slate-200 opacity-80 cursor-pointer"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-xl bg-brand-greenTint text-brand-primary flex items-center justify-center font-bold">
                        <Zap className="w-4 h-4 fill-brand-primary" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-1.5">
                          <h5 className="font-heading font-extrabold text-sm text-dark">
                            Accelerated Pathway
                          </h5>
                          {supportsAccelerated && (
                            <span className="bg-emerald-600 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-md">
                              SAVE UP TO ₹53L
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-500">
                          Part Online in India (IIIT-B / IMT-G) + On-Campus Abroad
                        </p>
                      </div>
                    </div>
                    {activeRoute === "accelerated" && (
                      <span className="w-3 h-3 rounded-full bg-brand-primary" />
                    )}
                  </div>

                  {supportsAccelerated && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-emerald-800 font-semibold bg-emerald-50/60 p-2 rounded-xl">
                      <span>✓ GRE/GMAT Waived</span>
                      <span>✓ Same PSW Visa</span>
                      <span>✓ ₹5 Lakh Year 1</span>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>

            {/* COLUMN 3 (Right Nodes): Destination Country Cards */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-extrabold uppercase text-slate-400 tracking-wider">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  <span>Level 3: Destination Countries ({displayedCountries.length})</span>
                </div>
                <span className="text-[10px] font-bold text-slate-500 lowercase">
                  click card for full details
                </span>
              </div>

              {/* Cards Grid */}
              <div className="space-y-3 max-h-[560px] overflow-y-auto pr-1">
                {displayedCountries.map((country) => (
                  <motion.div
                    key={country.id}
                    layout
                    whileHover={{ y: -2 }}
                    className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-[22px] p-4 sm:p-4.5 shadow-sm hover:shadow-xl hover:border-brand-primary/50 transition-all duration-200 space-y-3 cursor-pointer group"
                    onClick={() => handleOpenCountryDetails(country)}
                  >
                    {/* Top Country Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <span className="text-2xl">{country.flag}</span>
                        <div>
                          <h5 className="font-heading font-extrabold text-sm text-dark group-hover:text-brand-primary transition-colors">
                            {country.countryName}
                          </h5>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">
                            {country.countryCode} • {country.postStudyWorkVisa}
                          </p>
                        </div>
                      </div>

                      {country.isFyRecommended && (
                        <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[9px] font-extrabold px-2 py-0.5 rounded-full shadow-2xs">
                          ⭐ Recommended
                        </span>
                      )}
                    </div>

                    {/* Tag if any */}
                    {country.fyRecommendationTag && (
                      <div className="bg-brand-greenTint/80 border border-brand-primary/20 text-brand-primary text-[10px] font-bold px-2.5 py-1 rounded-xl flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 shrink-0" />
                        <span className="truncate">{country.fyRecommendationTag}</span>
                      </div>
                    )}

                    {/* Tuition & Salary Row */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <span className="text-[9px] font-bold text-slate-400 uppercase block">Est. Tuition</span>
                        <p className="font-extrabold text-dark mt-0.5 truncate text-[11px]">
                          {currencyMode === "INR" ? country.tuitionPerYearInr : country.tuitionPerYearLocal}
                        </p>
                      </div>

                      <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <span className="text-[9px] font-bold text-slate-400 uppercase block">Avg. Starting Salary</span>
                        <p className="font-extrabold text-dark mt-0.5 truncate text-[11px]">
                          {currencyMode === "INR" ? country.entrySalaryInr : country.entrySalaryLocal}
                        </p>
                      </div>
                    </div>

                    {/* PR Ease & CTA */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                      <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full border ${country.prEaseColor}`}>
                        PR: {country.prEase}
                      </span>

                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-primary group-hover:translate-x-0.5 transition-transform">
                        <span>View Breakdown</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>

                  </motion.div>
                ))}

                {displayedCountries.length === 0 && (
                  <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-500">
                    No destination matches &quot;{searchQuery}&quot;. Try another search term.
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* 4. MODAL 1: CORE PRINCIPLES */}
      <AnimatePresence>
        {principlesModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 border border-slate-200"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-heading font-bold text-base text-dark flex items-center gap-2">
                  <span>📐</span> Core Counselling Principles
                </h3>
                <button onClick={() => setPrinciplesModalOpen(false)} className="text-slate-400 hover:text-dark">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <ul className="text-xs space-y-2.5 text-slate-600">
                <li>• <strong>Separation of Qualification vs. Options</strong>: What the student completed in India is kept strictly separate from abroad next steps.</li>
                <li>• <strong>Fact vs. Recommendation</strong>: Objective researched figures (costs, visas) are kept visually distinct from FY recommendations.</li>
                <li>• <strong>Extensible Lists, Fixed Flow</strong>: Adding new courses or countries automatically inherits the standardized downstream flow.</li>
                <li>• <strong>Generic Field Names Abroad</strong>: International programs use global field terminology instead of assumed Indian degree titles.</li>
                <li>• <strong>Work Experience Override</strong>: Relevant work experience can redirect student eligibility into top management/tech programs.</li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => setPrinciplesModalOpen(false)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold cursor-pointer"
                >
                  Close Principles
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. MODAL 2: ACCELERATED PATHWAY FULL REFERENCE */}
      <AnimatePresence>
        {accelModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl space-y-4 border border-slate-200 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-heading font-bold text-base text-dark flex items-center gap-2">
                  <span>⚡</span> Accelerated Pathway Reference
                </h3>
                <button onClick={() => setAccelModalOpen(false)} className="text-slate-400 hover:text-dark">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 space-y-1.5">
                  <p className="font-bold text-brand-primary">How It Works:</p>
                  <p className="leading-relaxed">
                    Students complete Year 1 online with premier Indian institutions (IIIT Bangalore, IMT Ghaziabad, IIM Udaipur, Golden Gate University) for approx. ₹5 Lakhs, then transfer credits directly onto foreign campuses for years 2–4 with up to 3 years Post-Study Work Visas.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="border border-slate-200 p-3 rounded-xl bg-slate-50">
                    <span className="font-bold text-dark block">Bachelor&apos;s Savings:</span>
                    <p className="text-emerald-700 font-extrabold text-sm mt-0.5">~₹53 Lakhs Total</p>
                    <p className="text-[10px] text-slate-500 mt-1">₹37.5L Tuition + ₹15L Living saved</p>
                  </div>
                  <div className="border border-slate-200 p-3 rounded-xl bg-slate-50">
                    <span className="font-bold text-dark block">Master&apos;s Savings:</span>
                    <p className="text-emerald-700 font-extrabold text-sm mt-0.5">~₹27.2 Lakhs Total</p>
                    <p className="text-[10px] text-slate-500 mt-1">₹18.8L Tuition + ₹8.3L Living saved</p>
                  </div>
                </div>

                <p className="font-bold text-dark pt-2">Country Coverage & Work Permits:</p>
                <div className="space-y-1.5 text-[11px] text-slate-600">
                  <p>• <strong>Canada</strong>: Up to 3 yrs PGWP • Save up to ₹35L</p>
                  <p>• <strong>USA</strong>: Up to 3 yrs STEM OPT • Save up to ₹50L</p>
                  <p>• <strong>Germany</strong>: 18-mo Job Seeker Visa • Save up to ₹20L</p>
                  <p>• <strong>France</strong>: 5-year Post-Study Work Visa • Save up to ₹35L</p>
                  <p>• <strong>UK (Master&apos;s only)</strong>: 2 yrs Graduate Route • Save up to ₹5L</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setAccelModalOpen(false)}
                  className="w-full py-2.5 rounded-xl bg-brand-primary text-white text-xs font-bold cursor-pointer"
                >
                  Got It
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. MODAL 3: 12-STEP OPERATIONAL FLOW */}
      <AnimatePresence>
        {flowModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl space-y-4 border border-slate-200 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-heading font-bold text-base text-dark flex items-center gap-2">
                  <span>🧭</span> 12-Step Operational Process
                </h3>
                <button onClick={() => setFlowModalOpen(false)} className="text-slate-400 hover:text-dark">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                {POST_COUNSELLING_STEPS.map((step) => (
                  <div key={step.stepNumber} className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-brand-primary text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                      {step.stepNumber}
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <h5 className="text-xs font-bold text-dark">{step.title}</h5>
                        {step.highlightBadge && (
                          <span className="text-[9px] font-extrabold text-brand-primary bg-brand-greenTint px-2 py-0.5 rounded-full">
                            {step.highlightBadge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-600">{step.shortDesc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setFlowModalOpen(false)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold cursor-pointer"
                >
                  Close Roadmap
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 7. SLIDE-OVER DETAIL DRAWER */}
      <CounsellorDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        countryData={activeCountryForDrawer}
        courseData={currentCourse}
        qualificationTitle={currentQual.title}
        selectedStreamName={currentStream.name}
      />

    </div>
  );
}
