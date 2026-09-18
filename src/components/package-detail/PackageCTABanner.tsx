"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, Send, Sparkles, MessageCircle } from "lucide-react";
import { PackageDetailData } from "@/data/packageDetailsData";

interface PackageCTABannerProps {
  ctaBanner: PackageDetailData["ctaBanner"];
  onOpenBooking: (type?: string) => void;
}

export default function PackageCTABanner({
  ctaBanner,
  onOpenBooking,
}: PackageCTABannerProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 4000);
  };

  const whatsappDirectUrl = `https://web.whatsapp.com/send?phone=+919403892981&text=${encodeURIComponent(
    `Hi Academic Yatra, My name is ${formData.name || "Student"}. I would like to book a 5-day demo / consultation for IELTS Academic.`
  )}`;

  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-r from-[#051124] via-[#091D3C] to-[#0A264F] text-white overflow-hidden z-10">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Subtext & Action Buttons */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Personalized Band Roadmap</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.12] font-heading">
              <span>{ctaBanner.headingPrefix} </span>
              <br />
              <span className="text-emerald-400">{ctaBanner.headingHighlight}</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body max-w-lg">
              {ctaBanner.description}
            </p>

            {/* Value Checkpoints */}
            <div className="space-y-3 pt-1">
              {[
                "Complimentary 5-Day Live Interactive Masterclass Demo",
                "Full diagnostic band assessment with personalized feedback",
                "Official Cambridge mock tests & AI performance dashboard",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Direct Quick CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => onOpenBooking("Book 5 Day Demo")}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-900/40 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>Book 5 Day Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Counselor</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Lead Capture Form (matching TrialLessonBanner) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 text-slate-900">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">
                    Demo Access Granted!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    Our academic coordinator has received your request and will share the demo class timetable within 15 minutes.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6 text-left">
                    <span className="text-[11px] font-bold text-emerald-600 tracking-wider uppercase block">
                      Fast-Track Admission
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mt-0.5">
                      Reserve Your Free Demo Seat
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Experience live masterclasses with Cambridge-certified trainers.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-slate-50/50"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 94038 92981"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-slate-50/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="rahul@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Target Band / Preferred Batch Time
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Target Band 7.5, prefer evening batch..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-slate-50/50"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Start My 5-Day Free Trial</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>

        {/* Indicative Policy Disclaimer */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center max-w-4xl mx-auto">
          <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-body">
            {ctaBanner.disclaimer}
          </p>
        </div>

      </div>
    </section>
  );
}
