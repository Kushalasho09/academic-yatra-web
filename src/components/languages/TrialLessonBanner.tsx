"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Send, Sparkles, CheckCircle2 } from "lucide-react";

export default function TrialLessonBanner() {
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
  };

  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-r from-[#051124] via-[#091D3C] to-[#0A264F] text-white overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-brand-primary/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-6 space-y-7">
            {/* Social Proof Pill */}
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/15 px-4 py-2 rounded-full backdrop-blur-md">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-brand-navy">
                  <Image
                    src="/images/avatar_indian_girl.jpg"
                    alt="Student"
                    width={28}
                    height={28}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-brand-navy">
                  <Image
                    src="/images/avatar_indian_boy.jpg"
                    alt="Student"
                    width={28}
                    height={28}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-800 text-slate-200 border-2 border-brand-navy flex items-center justify-center text-[10px] font-bold">
                  🇬🇧
                </div>
              </div>
              <div className="text-left">
                <span className="font-heading font-extrabold text-white text-sm">
                  200+
                </span>
                <span className="text-xs text-slate-300 ml-1.5 font-medium">
                  Happy Students
                </span>
              </div>
            </div>

            {/* Massive Heading */}
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.12] tracking-tight">
              Start Your <br />
              <span className="text-brand-primary drop-shadow-[0_0_25px_rgba(12,146,83,0.35)]">
                Trial Lesson
              </span>
            </h2>

            {/* Description */}
            <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              You’ll gain practical language skills, expand your vocabulary, and
              master grammar through engaging activities and real-world practice.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-3.5 pt-2">
              {[
                "Comprehensive Language Skills",
                "Personalized Learning",
                "Interactive Tools and Resources",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-heading font-semibold text-slate-200 text-sm sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Register for Trial Lesson Form */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg bg-white/[0.08] backdrop-blur-2xl border border-white/20 rounded-3xl p-7 sm:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="mb-6">
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  Register for Trial Lesson
                </h3>
                <p className="text-xs text-slate-300 mt-1 font-body">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-3 my-6"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-heading font-extrabold text-lg text-white">
                    Registration Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Thank you {formData.name}! Our senior academic mentor will
                    contact you at {formData.phone} shortly with your trial class
                    schedule.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-hidden focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-hidden focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-hidden focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Which exam are you preparing for? (IELTS, PTE, French...)"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-hidden focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 bg-white hover:bg-emerald-50 text-brand-navy hover:text-brand-primary font-heading font-extrabold text-sm py-4 rounded-full shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Try for Free</span>
                    <Sparkles className="w-4 h-4 text-brand-primary" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
