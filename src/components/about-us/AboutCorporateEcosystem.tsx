"use client";

import React from "react";
import {
  GraduationCap,
  Stethoscope,
  BookOpen,
  UserCheck,
  MapPin,
  Calendar,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function AboutCorporateEcosystem() {
  const verticals = [
    {
      id: "academic-yatra",
      badge: "Flagship Learning Vertical",
      name: "Academic Yatra",
      headline: "Language Training & Test Preparation",
      description:
        "Comprehensive, structured preparation for international English exams (IELTS, PTE, DET, TOEFL, CELPIP), competitive entrance tests (SAT, GRE, GMAT), and modern foreign languages (German, French, English).",
      icon: BookOpen,
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      glowColor: "group-hover:border-emerald-500/60",
      link: "/languages",
      isCurrent: true,
      tags: ["IELTS / PTE / DET", "SAT / GRE / GMAT", "German & French", "Digital Dashboard"],
    },
    {
      id: "university-yatra",
      badge: "Higher Education Vertical",
      name: "University Yatra",
      headline: "Higher Education Admissions & Academic Guidance",
      description:
        "Guiding ambitious students to top-ranked global universities through profile building, university shortlisting, documentation guidance, and comprehensive application roadmaps for Bachelor's and Master's.",
      icon: GraduationCap,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      glowColor: "group-hover:border-blue-500/60",
      link: "/counselling-platform",
      isCurrent: false,
      tags: ["Global Admissions", "Ivy League / Russell Group", "SOP & LOR Guidance", "Visa Roadmap"],
    },
    {
      id: "medico-yatra",
      badge: "Healthcare Education Vertical",
      name: "Medico Yatra",
      headline: "Medical & Healthcare Education Guidance",
      description:
        "Specialized advisory for students aspiring to pursue global medical, dental, and allied health sciences programs abroad with verified clinical curriculum analysis and accredited institution shortlists.",
      icon: Stethoscope,
      iconColor: "text-rose-600",
      bgColor: "bg-rose-500/10",
      borderColor: "border-rose-500/30",
      glowColor: "group-hover:border-rose-500/60",
      link: "/contacts",
      isCurrent: false,
      tags: ["MBBS Abroad", "Accredited Universities", "Clinical Licensure Guidance", "Screening Support"],
    },
  ];

  return (
    <section
      id="corporate-ecosystem"
      className="py-10 sm:py-14 bg-white relative overflow-hidden"
    >
      {/* Seamless Top & Bottom Ambient Fade */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-slate-50/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-50/60 to-transparent pointer-events-none" />

      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-dark tracking-tight leading-[1.18]">
            About <span className="text-brand-primary">Future Yatra Private Limited</span>
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Future Yatra Private Limited is a Delhi-based company established in 2025, operating as an integrated education, language training, and academic development solutions provider. The company is committed to helping students, professionals, and families achieve their academic and career goals through structured, technology-driven learning platforms.
          </p>
        </div>

        {/* 3 Specialized Consumer Brands Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {verticals.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.id}
                className={`group relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-slate-50/90 to-white border ${v.borderColor} ${v.glowColor} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white shadow-xs border border-slate-200/80 text-slate-700">
                      {v.badge}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl ${v.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${v.iconColor}`} />
                    </div>
                  </div>

                  {/* Brand Name */}
                  <h3 className="font-heading text-2xl font-black text-dark tracking-tight">
                    {v.name}
                  </h3>

                  {/* Headline */}
                  <p className="text-xs font-bold uppercase text-brand-primary tracking-wide mt-1 mb-3">
                    {v.headline}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {v.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {v.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA / Current Status */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {v.isCurrent ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                      Active Learning Division
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-slate-400">
                      Ecosystem Affiliate Brand
                    </span>
                  )}
                  <a
                    href={v.link}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-brand-primary hover:text-white text-slate-600 flex items-center justify-center transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Leadership & Legal Identity Showcase Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#031643] via-[#052264] to-[#031643] text-white p-8 sm:p-12 border border-slate-700/50 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Legal Structure & Corporate Identity */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-bold tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Corporate Identity & Legal Structure</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-black tracking-tight text-white">
                Academic Yatra is the learning and preparation vertical of{" "}
                <span className="text-emerald-400">Future Yatra Pvt. Ltd.</span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Dedicated to helping students and working professionals prepare for language learning, English proficiency tests, competitive examinations, and global academic and professional advancement through modern, technology-enabled pedagogy.
              </p>
            </div>

            {/* Right Column: Key Operational Facts */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-white/10 pb-2">
                Corporate Leadership & Operations
              </div>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Founder & Director</p>
                    <p className="text-sm font-bold text-white">Kashif Qamar Siddiqui</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Year of Establishment</p>
                    <p className="text-sm font-bold text-white">2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Principal Office</p>
                    <p className="text-sm font-bold text-white">New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
