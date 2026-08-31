import React from "react";
import Link from "next/link";
import {
  Compass,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Landmark,
  GraduationCap,
  Briefcase,
  PhoneCall,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import CounsellingFlowCanvas from "@/components/counselling-platform/CounsellingFlowCanvas";
import { POST_COUNSELLING_STEPS } from "@/data/counsellingData";

export const metadata = {
  title: "Interactive Study-Abroad Decision Tree | Future Yatra",
  description:
    "Interactive counselling tool for Indian students and counsellors to explore study-abroad pathways, direct & accelerated models, PR ease, tuition costs, and salaries.",
};

export default function CounsellingPlatformPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF8] text-dark">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
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
              Future Yatra <span className="text-brand-primary">Counselling Platform</span>
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center space-x-2 text-xs font-semibold text-slate-500 bg-brand-greenTint/80 px-3 py-1 rounded-full border border-brand-primary/20">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
            <span>Master Data v2.4 • Research Verified</span>
          </div>

          <a
            href="tel:+919286844550"
            className="inline-flex items-center space-x-2 bg-brand-primary hover:bg-brand-primaryHover text-white text-xs font-bold px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Book 1-on-1 Session</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-8 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-greenTint text-brand-primary text-xs font-bold uppercase tracking-wider border border-brand-primary/20">
          <Compass className="w-3.5 h-3.5" />
          <span>Interactive Study-Abroad Decision Architecture</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark tracking-tight">
          Explore Your Global Pathway — Step by Step
        </h1>

        <p className="text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Select your completed Indian qualification to reveal matching degree tracks, Direct vs. Accelerated routes (save up to ₹53L), country PR pathways, and exact tuition breakdowns.
        </p>
      </section>

      {/* MAIN INTERACTIVE REACT FLOW CANVAS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
        <CounsellingFlowCanvas />
      </section>

      {/* 12-STEP OPERATIONAL ROADMAP & TRUST GUARANTEE */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 text-brand-accent text-xs font-bold uppercase tracking-wider border border-blue-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>End-to-End Execution Standard</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-dark tracking-tight">
              The 12-Step Post-Counselling Journey
            </h2>
            <p className="text-muted text-sm sm:text-base">
              From your initial profile assessment to airport pickup and post-arrival settlement support.
            </p>
          </div>

          {/* 12 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POST_COUNSELLING_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="p-5 rounded-2xl border border-slate-200/90 bg-[#FAFCFA] hover:bg-white hover:border-brand-primary/40 hover:shadow-lg transition-all space-y-2.5 relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-brand-primary text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                    {step.stepNumber}
                  </div>
                  {step.highlightBadge && (
                    <span className="text-[10px] font-extrabold text-brand-primary bg-brand-greenTint border border-brand-primary/20 px-2.5 py-0.5 rounded-full">
                      {step.highlightBadge}
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-bold text-sm text-dark group-hover:text-brand-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-snug">
                  {step.shortDesc}
                </p>
                <p className="text-[11px] text-slate-400 font-medium">
                  {step.details}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Guarantees Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl space-y-3">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-base">
                <ShieldCheck className="w-5 h-5" />
                <span>100% Free Visa Re-Filing Policy</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                In the rare event of a visa refusal, Future Yatra re-files your application at <strong>zero additional counselling fee</strong> (up to 1–2 attempts) or facilitates a free switch to an alternate destination country.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-brand-greenTint border border-brand-primary/30 text-dark shadow-sm space-y-3">
              <div className="flex items-center space-x-2 text-brand-primary font-bold text-base">
                <Landmark className="w-5 h-5" />
                <span>Comprehensive Education Loan Facilitation</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Future Yatra arranges 100% pre-visa education loan sanctions with leading public & private banking partners (SBI, HDFC Credila, Avanse, MPower, Prodigy) with preferential interest rates.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
