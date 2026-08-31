"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Landmark,
  PhoneCall,
  Map,
  Castle,
} from "lucide-react";
import DuolingoQuestMap from "@/components/counselling-platform/DuolingoQuestMap";
import LingoDeerAdventureGame from "@/components/counselling-platform/LingoDeerAdventureGame";
import { POST_COUNSELLING_STEPS } from "@/data/counsellingData";

export default function CounsellingPlatformPage() {
  const [viewMode, setViewMode] = useState<"duolingo" | "lingodeer">("duolingo");

  return (
    <main className="min-h-screen bg-[#F7FAF7] text-dark">
      
      {/* Top Floating Control Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs">
        <div className="flex items-center space-x-3">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-bold text-slate-600 hover:text-brand-primary bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <div className="h-4 w-[1px] bg-slate-200" />
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse" />
            <span className="font-heading font-extrabold text-sm sm:text-base text-dark tracking-tight">
              Future Yatra <span className="text-brand-primary">Adventure World</span>
            </span>
          </div>
        </div>

        {/* Center Mode Switcher */}
        <div className="hidden sm:flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 text-xs font-black">
          <button
            onClick={() => setViewMode("duolingo")}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
              viewMode === "duolingo"
                ? "bg-brand-primary text-white shadow-sm"
                : "text-slate-500 hover:text-dark"
            }`}
          >
            <Map className="w-3.5 h-3.5" />
            <span>Duolingo Quest Map</span>
          </button>
          <button
            onClick={() => setViewMode("lingodeer")}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
              viewMode === "lingodeer"
                ? "bg-amber-500 text-amber-950 shadow-sm"
                : "text-slate-500 hover:text-dark"
            }`}
          >
            <Castle className="w-3.5 h-3.5" />
            <span>🦌 LingoDeer Adventure</span>
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <a
            href="tel:+919286844550"
            className="inline-flex items-center space-x-2 bg-brand-primary hover:bg-brand-primaryHover text-white text-xs font-bold px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>1-on-1 Counsellor</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-8 pb-6 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-greenTint text-brand-primary text-xs font-black uppercase tracking-wider border border-brand-primary/20">
          <span>✨ Gamified Study-Abroad Quest</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-dark tracking-tight">
          Your Study-Abroad <span className="text-brand-primary">Yatra Adventure</span>
        </h1>

        <p className="text-muted text-sm sm:text-base max-w-xl mx-auto font-medium leading-relaxed">
          {viewMode === "duolingo"
            ? "Follow the winding S-curve quest map to unlock your study abroad boarding pass step by step!"
            : "Explore modular castle fortresses, earn streak XP, and collect official country visa stamps with our friendly Deer mascot!"}
        </p>

        {/* Mobile Mode Switcher */}
        <div className="flex sm:hidden items-center justify-center pt-2">
          <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 text-xs font-black">
            <button
              onClick={() => setViewMode("duolingo")}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                viewMode === "duolingo" ? "bg-brand-primary text-white" : "text-slate-500"
              }`}
            >
              Duolingo Map
            </button>
            <button
              onClick={() => setViewMode("lingodeer")}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                viewMode === "lingodeer" ? "bg-amber-500 text-amber-950" : "text-slate-500"
              }`}
            >
              🦌 LingoDeer
            </button>
          </div>
        </div>
      </section>

      {/* MAIN VIEW CONTAINER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-16">
        {viewMode === "duolingo" ? <DuolingoQuestMap /> : <LingoDeerAdventureGame />}
      </section>

      {/* 12-STEP OPERATIONAL ROADMAP */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-brand-accent text-xs font-black uppercase tracking-wider border border-blue-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Future Yatra Service Standard</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-dark tracking-tight">
              The 12-Step Post-Counselling Journey
            </h2>
            <p className="text-muted text-xs sm:text-sm font-medium">
              Every step from initial profile assessment to airport arrival and settlement support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {POST_COUNSELLING_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="p-5 rounded-3xl border border-slate-200/90 bg-[#F9FBF9] hover:bg-white hover:border-brand-primary/40 hover:shadow-lg transition-all space-y-2 relative"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-brand-primary text-white font-black text-xs flex items-center justify-center shadow-xs">
                    {step.stepNumber}
                  </div>
                  {step.highlightBadge && (
                    <span className="text-[10px] font-black text-brand-primary bg-brand-greenTint border border-brand-primary/20 px-2.5 py-0.5 rounded-full">
                      {step.highlightBadge}
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-bold text-sm text-dark">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-snug">
                  {step.shortDesc}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Guarantee Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl space-y-2.5">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-base">
                <ShieldCheck className="w-5 h-5" />
                <span>100% Free Visa Re-Filing Policy</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                In the rare event of a refusal, Future Yatra re-files your visa application at <strong>ZERO additional counselling fee</strong> (up to 1–2 attempts) or free country/product switch.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-brand-greenTint border border-brand-primary/30 text-dark shadow-sm space-y-2.5">
              <div className="flex items-center space-x-2 text-brand-primary font-bold text-base">
                <Landmark className="w-5 h-5" />
                <span>Pre-Visa Education Loan Sanction</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                100% collateral and non-collateral education loan facilitation with nationalized & private banking partners (SBI, HDFC Credila, Avanse, Prodigy).
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
