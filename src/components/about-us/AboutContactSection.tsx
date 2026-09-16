"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Clock,
} from "lucide-react";

export default function AboutContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission or construct WhatsApp text
    setSubmitted(true);
    const text = encodeURIComponent(
      `Hi Academic Yatra, My name is ${formData.name}. Phone: ${formData.phone}, Email: ${formData.email}. Inquiry: ${formData.message}`
    );
    window.open(`https://web.whatsapp.com/send?phone=+919403892981&text=${text}`, "_blank");
  };

  return (
    <section id="contact-section" className="py-10 sm:py-14 bg-white relative overflow-hidden">
      {/* Seamless Top Ambient Fade */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-slate-50/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Direct Connect & Company Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
                <span>Get In Touch</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-dark tracking-tight leading-tight">
                Connect with <span className="text-brand-primary">Our Academic Team</span>
              </h2>

              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Have questions about exam batches, language levels, or digital student portal access? Speak directly with our senior educational advisors.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3.5 pt-2">
              <a
                href="https://web.whatsapp.com/send?phone=+919403892981&text=Hi%20Academic%20Yatra,%20I%20have%20an%20inquiry%20regarding%20programs."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50/80 hover:bg-emerald-100/80 border border-emerald-200/80 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-800">
                    Official WhatsApp Support
                  </p>
                  <p className="text-base font-black text-dark">+91 94038 92981</p>
                  <p className="text-xs text-emerald-700">Instant response during business hours</p>
                </div>
              </a>

              <a
                href="tel:+919286844550"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#031643] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Direct Tele-Counsel Line
                  </p>
                  <p className="text-base font-black text-dark">+91 92868 44550</p>
                  <p className="text-xs text-slate-500">Mon - Sat (9:30 AM to 6:30 PM IST)</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Corporate Principal Office
                  </p>
                  <p className="text-sm font-bold text-dark">Future Yatra Private Limited</p>
                  <p className="text-xs text-slate-500">New Delhi, India (Est. 2025)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-lg relative">
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-black text-dark tracking-tight">
                  Send Us an Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below and an academic advisor will get back to you within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-black text-lg text-emerald-950">
                    Inquiry Forwarded Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800">
                    WhatsApp has opened with your message details. Our academic team is connecting with you.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g., Ananya Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-dark placeholder:text-slate-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-dark placeholder:text-slate-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ananya@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-dark placeholder:text-slate-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Your Message / Target Exam or Language *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you would like to prepare for (e.g. IELTS 7.5+, German A2, SAT 1500+)..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-dark placeholder:text-slate-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:shadow-brand-primary/35 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Connect with Counsellor</span>
                  </button>

                  <p className="text-center text-[11px] text-slate-500">
                    By submitting, you agree to receive program guidance from Academic Yatra. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
