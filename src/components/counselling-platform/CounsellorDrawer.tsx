"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  ShieldCheck,
  Landmark,
  GraduationCap,
  Briefcase,
  Globe,
  Clock,
  CheckCircle2,
  Copy,
  ExternalLink,
  PhoneCall,
  Share2,
  FileText,
  AlertCircle,
} from "lucide-react";
import {
  CountryProgramData,
  AbroadCourseOption,
  POST_COUNSELLING_STEPS,
} from "@/data/counsellingData";

interface CounsellorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  countryData: CountryProgramData | null;
  courseData: AbroadCourseOption | null;
  qualificationTitle: string;
  selectedStreamName: string;
}

export default function CounsellorDrawer({
  isOpen,
  onClose,
  countryData,
  courseData,
  qualificationTitle,
  selectedStreamName,
}: CounsellorDrawerProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "roadmap" | "loan-visa">("overview");

  if (!countryData || !courseData) return null;

  const handleCopySummary = () => {
    const summaryText = `🎓 *FUTURE YATRA Study-Abroad Counselling Roadmap*
👤 *Student Profile*: ${qualificationTitle} (${selectedStreamName})
🎯 *Target Track*: ${courseData.name}
📍 *Destination*: ${countryData.flag} ${countryData.countryName}
💰 *Est. Tuition Cost*: ${countryData.tuitionPerYearInr} (${countryData.tuitionPerYearLocal})
🛂 *PR & Visa Pathway*: ${countryData.prPathwaySummary} (Post-Study Visa: ${countryData.postStudyWorkVisa})
💼 *Avg. Starting Salary*: ${countryData.entrySalaryInr} (${countryData.entrySalaryLocal})
📚 *Language Requirement*: ${countryData.languageRequirements.join(", ")} (FY In-House Prep Available)
🏛️ *Education Loan Assistance*: 100% Collateral/Non-Collateral Facilitated by Future Yatra
✨ *Trust Policy*: Free Visa Re-filing guarantee for up to 1-2 attempts.

_Generated via Future Yatra Interactive Counselling Platform_`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-screen max-w-2xl bg-white shadow-2xl flex flex-col justify-between border-l border-slate-200"
            >
              {/* Top Header */}
              <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{countryData.flag}</span>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h2 className="text-lg font-bold font-heading text-dark">
                        {countryData.countryName} — {courseData.name}
                      </h2>
                      {countryData.isFyRecommended && (
                        <span className="bg-amber-100 text-amber-800 border border-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          ⭐ Recommended
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted font-medium">
                      {qualificationTitle} ➔ {selectedStreamName}
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-slate-200/60 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-slate-100 bg-white px-6">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`py-3 px-4 text-xs font-bold border-b-2 transition-all cursor-pointer ${
                    activeTab === "overview"
                      ? "border-brand-primary text-brand-primary"
                      : "border-transparent text-slate-500 hover:text-dark"
                  }`}
                >
                  Program & Cost Overview
                </button>
                <button
                  onClick={() => setActiveTab("roadmap")}
                  className={`py-3 px-4 text-xs font-bold border-b-2 transition-all cursor-pointer ${
                    activeTab === "roadmap"
                      ? "border-brand-primary text-brand-primary"
                      : "border-transparent text-slate-500 hover:text-dark"
                  }`}
                >
                  12-Step Journey
                </button>
                <button
                  onClick={() => setActiveTab("loan-visa")}
                  className={`py-3 px-4 text-xs font-bold border-b-2 transition-all cursor-pointer ${
                    activeTab === "loan-visa"
                      ? "border-brand-primary text-brand-primary"
                      : "border-transparent text-slate-500 hover:text-dark"
                  }`}
                >
                  Loan & Visa Guarantee
                </button>
              </div>

              {/* Body Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                
                {/* TAB 1: OVERVIEW */}
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    {/* Researched Data Status Banner */}
                    <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-3.5 flex items-start space-x-3 text-xs text-blue-900">
                      <AlertCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Data Status: {countryData.dataStatus}</span> — Official university & embassy verified parameters for live counselling sessions.
                      </div>
                    </div>

                    {/* Special Caveats if any */}
                    {countryData.specialCaveat && (
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 flex items-start space-x-2.5">
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold">Important Notice:</span> {countryData.specialCaveat}
                        </div>
                      </div>
                    )}

                    {/* Cost Breakdown Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-emerald-50/50 border border-emerald-100 p-4 rounded-2xl">
                        <div className="flex items-center space-x-2 text-xs font-bold text-brand-primary uppercase">
                          <Landmark className="w-3.5 h-3.5" />
                          <span>Estimated Tuition</span>
                        </div>
                        <p className="text-xl font-extrabold text-dark mt-1">
                          {countryData.tuitionPerYearInr}
                        </p>
                        <p className="text-xs text-slate-500 font-medium">
                          {countryData.tuitionPerYearLocal}
                        </p>
                        <p className="text-[11px] text-emerald-700 mt-2 font-semibold">
                          Total: {countryData.totalProgramCostInr}
                        </p>
                      </div>

                      <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-2xl">
                        <div className="flex items-center space-x-2 text-xs font-bold text-brand-accent uppercase">
                          <Briefcase className="w-3.5 h-3.5" />
                          <span>Average Starting Salary</span>
                        </div>
                        <p className="text-xl font-extrabold text-dark mt-1">
                          {countryData.entrySalaryInr}
                        </p>
                        <p className="text-xs text-slate-500 font-medium">
                          {countryData.entrySalaryLocal}
                        </p>
                        {countryData.midCareerSalaryInr && (
                          <p className="text-[11px] text-brand-accentDark mt-2 font-semibold">
                            Mid-Career: {countryData.midCareerSalaryInr}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* PR & Settlement Insights */}
                    <div className="border border-slate-200 rounded-2xl p-5 space-y-3 bg-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-xs font-bold text-dark">
                          <Globe className="w-4 h-4 text-brand-primary" />
                          <span>PR & Settlement Outlook</span>
                        </div>
                        <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full border ${countryData.prEaseColor}`}>
                          PR: {countryData.prEase}
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {countryData.prPathwaySummary}
                      </p>
                      <div className="pt-2 flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl">
                        <Clock className="w-3.5 h-3.5 text-brand-accent" />
                        <span><strong>Post-Study Work Visa:</strong> {countryData.postStudyWorkVisa}</span>
                      </div>
                    </div>

                    {/* Licensing & Registration Exams if applicable */}
                    {countryData.licensingExamNote && (
                      <div className="bg-purple-50/50 border border-purple-100 p-4 rounded-2xl space-y-1">
                        <div className="flex items-center space-x-2 text-xs font-bold text-purple-900">
                          <ShieldCheck className="w-4 h-4 text-purple-700" />
                          <span>Licensing & Professional Registration</span>
                        </div>
                        <p className="text-xs text-purple-950 font-medium leading-relaxed">
                          {countryData.licensingExamNote}
                        </p>
                      </div>
                    )}

                    {/* Eligibility & Language Test Requirements */}
                    <div className="border border-slate-200 rounded-2xl p-5 space-y-3 bg-white">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-dark">Minimum Academic & Language Eligibility</span>
                        <span className="text-xs font-bold text-brand-primary bg-brand-greenTint px-2 py-0.5 rounded-full">
                          Min: {countryData.minAcademicScore}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {countryData.languageRequirements.map((req, i) => (
                          <span
                            key={i}
                            className="bg-slate-100 text-slate-800 text-xs font-semibold px-3 py-1 rounded-lg border border-slate-200"
                          >
                            {req}
                          </span>
                        ))}
                      </div>

                      {countryData.languagePrepAvailable && (
                        <div className="flex items-center space-x-2 text-xs text-brand-primary bg-emerald-50/60 p-2.5 rounded-xl font-bold">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Future Yatra In-House Masterclass & Test Prep Available</span>
                        </div>
                      )}
                    </div>

                  </div>
                )}

                {/* TAB 2: 12-STEP POST-COUNSELLING ROADMAP */}
                {activeTab === "roadmap" && (
                  <div className="space-y-4">
                    <p className="text-xs text-slate-500 font-medium">
                      Future Yatra provides end-to-end facilitation through this 12-step structured operational process:
                    </p>
                    <div className="space-y-3">
                      {POST_COUNSELLING_STEPS.map((step) => (
                        <div
                          key={step.stepNumber}
                          className="flex items-start space-x-3.5 p-3.5 rounded-xl border border-slate-100 hover:border-brand-primary/30 hover:bg-slate-50/50 transition-all"
                        >
                          <div className="w-7 h-7 rounded-full bg-brand-primary text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                            {step.stepNumber}
                          </div>
                          <div className="flex-1 space-y-0.5">
                            <div className="flex items-center justify-between">
                              <h4 className="text-xs font-bold text-dark">{step.title}</h4>
                              {step.highlightBadge && (
                                <span className="text-[10px] font-extrabold text-brand-primary bg-brand-greenTint px-2 py-0.5 rounded-full">
                                  {step.highlightBadge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-600 leading-snug">{step.shortDesc}</p>
                            <p className="text-[10px] text-slate-400 font-medium">{step.details}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 3: LOAN & VISA POLICY */}
                {activeTab === "loan-visa" && (
                  <div className="space-y-5">
                    {/* Education Loan Box */}
                    <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-3">
                      <div className="flex items-center space-x-2 text-brand-primary font-bold text-sm">
                        <Landmark className="w-4 h-4" />
                        <span>100% Education Loan Facilitation</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Future Yatra works with leading nationalized and NBFC partners (SBI, HDFC Credila, Avanse, MPower, Prodigy) providing pre-visa sanction letters, non-collateral options up to ₹1 Crore, and preferential interest rates.
                      </p>
                      <ul className="text-xs space-y-1.5 text-slate-600 font-medium pt-1">
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                          <span>Pre-visa sanction letter for embassy financial proof</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                          <span>Zero collateral options for top 500 global ranked universities</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                          <span>Moratorium period covering study duration + 6 months post-study</span>
                        </li>
                      </ul>
                    </div>

                    {/* Visa Re-Filing Policy */}
                    <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-3 shadow-lg">
                      <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Future Yatra Free Visa Re-Filing Guarantee</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        If a student’s visa is rejected on the initial attempt, Future Yatra re-files the visa application at <strong>ZERO additional counselling cost</strong> (up to 1–2 attempts).
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        Students also have the complete flexibility to switch destination countries or product streams (e.g. from Direct Model to Accelerated Pathway) with no extra service fees.
                      </p>
                    </div>

                    {/* Counselling Fee Structure */}
                    <div className="border border-slate-200 rounded-2xl p-5 space-y-2 bg-white text-xs">
                      <span className="font-bold text-dark">Transparent Counselling Fee Structure:</span>
                      <p className="text-slate-600">
                        • Fee Range: <strong>₹5,000 to ₹1,00,000</strong> depending on country, course, and profile complexity.
                      </p>
                      <p className="text-slate-600">
                        • Positioned as a non-refundable service fee, formalized through an official signed Service Agreement.
                      </p>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Footer Actions */}
              <div className="p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-3">
                <button
                  onClick={handleCopySummary}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-bold shadow-xs transition-all cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-brand-primary" />
                  <span>{copied ? "Copied to Clipboard! ✓" : "Copy WhatsApp Summary"}</span>
                </button>

                <a
                  href="tel:+919286844550"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white text-xs font-bold shadow-md shadow-brand-primary/25 transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Connect With Student</span>
                </a>
              </div>

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
