"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Sparkles, MessageCircle } from "lucide-react";

export default function SkillCatalystTrialBanner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    prepFor: "",
    batchTime: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", prepFor: "", batchTime: "" });
    }, 4000);
  };

  const whatsappDirectUrl = `https://wa.me/919403892981?text=${encodeURIComponent(
    `Hi Academic Yatra, My name is ${formData.name || "Student"}. I would like to book a 5-day demo / consultation.`
  )}`;

  const checkpoints = [
    {
      title: "5-Day Live Interactive Masterclass",
      desc: "Experience the classroom, meet the teaching style, and learn in real time.",
    },
    {
      title: "Personalised Diagnostic Assessment",
      desc: "Understand your current level, identify gaps, and see where to focus next.",
    },
    {
      title: "Practice + Performance Dashboard",
      desc: "Track your learning, practice results, and progress from one place.",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-r from-[#051124] via-[#091D3C] to-[#0A264F] text-white overflow-hidden z-10">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Subtext & Value Checkpoints */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-300 backdrop-blur-md uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>FAST-TRACK YOUR PREP</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-black tracking-tight leading-[1.15] font-heading">
              <span>See How Academic Yatra </span>
              <br />
              <span className="text-emerald-400">Fits Your Goals.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body max-w-lg">
              Start with a complimentary live session and get a feel for the way we teach, practise, and track progress before you commit.
            </p>

            {/* Value Checkpoints */}
            <div className="space-y-4 pt-1">
              {checkpoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-white leading-snug">
                      {item.title}
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-300 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Quick CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => {
                  const inputEl = document.getElementById("skill-demo-name");
                  if (inputEl) {
                    inputEl.focus();
                    inputEl.scrollIntoView({ behavior: "smooth", block: "center" });
                  }
                }}
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

          {/* Right Column: Embedded White Card Lead Form */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 text-slate-900">
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
                  <div className="mb-5 text-left">
                    <span className="text-[11px] font-extrabold text-emerald-600 tracking-wider uppercase block">
                      FAST-TRACK YOUR PREP
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mt-1">
                      Reserve Your Free Demo Seat
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Experience the Academic Yatra learning system firsthand.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="skill-demo-name"
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-slate-50/50"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          What are you preparing for?
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. IELTS / SAT / GRE / GMAT"
                          value={formData.prepFor}
                          onChange={(e) => setFormData({ ...formData, prepFor: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-slate-50/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Preferred Batch Time
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Morning / Evening"
                          value={formData.batchTime}
                          onChange={(e) => setFormData({ ...formData, batchTime: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] mt-1"
                    >
                      <span>Book My Free 5-Day Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-[12px] text-slate-500 text-center leading-snug pt-1">
                      No pressure. Just come in, explore the course, and see if it works for you.
                    </p>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-600 font-medium">
                      <span>Prefer a quick chat?</span>
                      <a
                        href={whatsappDirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800 hover:underline cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                        <span>WhatsApp a Counsellor</span>
                      </a>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
