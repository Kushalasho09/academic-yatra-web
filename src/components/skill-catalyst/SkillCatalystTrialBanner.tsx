"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Sparkles, CheckCircle2, MessageCircle } from "lucide-react";

export default function SkillCatalystTrialBanner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "Career Essentials Pack",
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
                  💼
                </div>
              </div>
              <div className="text-left">
                <span className="font-heading font-extrabold text-white text-sm">
                  1,200+
                </span>
                <span className="text-xs text-slate-300 ml-1.5 font-medium">
                  Professionals Trained
                </span>
              </div>
            </div>

            {/* Eyebrow and Massive Heading */}
            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-emerald-400">
                Get Started Today
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-snug sm:leading-[1.26] lg:leading-[1.28] tracking-tight">
                <span className="block mb-1.5 sm:mb-2.5">Start Your Preparation</span>
                <span className="text-brand-primary block drop-shadow-[0_0_25px_rgba(12,146,83,0.35)]">
                  With Confidence
                </span>
              </h2>
            </div>

            {/* Description from user prompt */}
            <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Join students and young professionals building in-demand workplace, digital,
              and business competencies through hands-on practical learning.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-3.5 pt-2">
              {[
                "Hands-On Capstone Project Access",
                "1-on-1 Mentor Feedback & Mock Interview Assessment",
                "Industry-Standard Verifiable Certification",
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

            {/* Direct WhatsApp Action Link */}
            <div className="pt-2">
              <a
                href="https://web.whatsapp.com/send?phone=+919403892981&text=Hi,%20I%20would%20like%20to%20connect%20with%20an%20adviser%20for%20Skill%20Catalyst%20programs."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/40 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Register for Trial Form */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg bg-white/[0.08] backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="mb-6">
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  Book Free 5-Day Trial
                </h3>
                <p className="text-xs text-slate-300 mt-1 font-body">
                  Experience live classes, capstone workshops, and preview the dashboard.
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
                    Booking Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Thank you, {formData.name}! Our career advisor will
                    contact you at {formData.phone} shortly with your demo portal access.
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 94038 92981"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-hidden focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="rahul@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-hidden focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Target Program *
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) =>
                        setFormData({ ...formData, program: e.target.value })
                      }
                      className="w-full bg-[#091D3C] border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                    >
                      <option value="Career Essentials Pack">Career Essentials Pack (10 Days)</option>
                      <option value="Bizz Tech Course">BizzTech Course (7 Days)</option>
                      <option value="Google Suite Hub Pack">Google Suite Hub Pack (7 Days)</option>
                      <option value="Skill Catalyst Combo Pack">Skill Catalyst Combo Pack (6 Weeks)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Share your college, graduation year, or target career track..."
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
                    <span>Start 5-Day Free Trial</span>
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
