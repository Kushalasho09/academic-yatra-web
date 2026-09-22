"use client";

import React from "react";
import {
  ShieldAlert,
  CheckCircle2,
  XCircle,
  FileText,
  AlertCircle,
  Scale,
} from "lucide-react";

export default function AboutLegalDisclosure() {
  const isNotItems = [
    {
      title: "A university, college, or degree-awarding institution",
      detail: "We do not confer academic degrees, university diplomas, or higher education credits.",
    },
    {
      title: "An examination conducting or certifying authority",
      detail: "Exam bodies (ETS, IDP, Pearson, College Board, etc.) conduct and certify actual examinations independently.",
    },
    {
      title: "A government agency or regulatory body",
      detail: "We are an independent educational and test coaching private enterprise.",
    },
    {
      title: "A recruitment or employment placement agency",
      detail: "We provide skill building and language training; we do not guarantee job appointments or overseas hiring.",
    },
    {
      title: "A settlement advisory or immigration service",
      detail: "Academic Yatra does not provide permanent-residency (PR), legal visa representation, or placement/recruitment consultancy through this platform.",
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-[#F4FAF6] relative overflow-hidden">
      {/* Seamless Top & Bottom Ambient Fade */}
      <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
          
          {/* Header Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
                <Scale className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700">
                  Regulatory & Advisory Compliance
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-black text-dark tracking-tight">
                  Important Disclosure & Transparency Policy
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold shrink-0 self-start sm:self-auto">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Educational & Training Services Only</span>
            </div>
          </div>

          {/* Core Scope Statement */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <p className="text-slate-800 text-sm sm:text-base font-semibold leading-relaxed">
              Academic Yatra provides educational training, language learning, and examination preparation services only.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
              All courses, study materials, and classroom drills are designed exclusively to help candidates build proficiency, master exam formats, and strengthen academic readiness.
            </p>
          </div>

          {/* Academic Yatra is NOT list */}
          <div className="mt-8 space-y-4">
            <p className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-500" />
              <span>Explicit Scope Limitations — Academic Yatra is NOT:</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {isNotItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-rose-50/40 border border-rose-100 flex items-start gap-3"
                >
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                      {item.title}
                    </h5>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final Legal Disclaimer Note */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center sm:text-left">
            <p className="text-slate-500 text-xs leading-relaxed italic">
              Nothing on this website should be construed as an offer, guarantee, or provision of permanent residency, employment recruitment, immigration legal representation, or degree award in any national or international jurisdiction.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
