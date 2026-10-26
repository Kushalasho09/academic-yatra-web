"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Building2,
  ExternalLink,
} from "lucide-react";

export default function ContactHeroAndForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    program: "IELTS Preparation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const programs = [
    "IELTS Preparation",
    "PTE Preparation",
    "CELPIP Preparation",
    "Duolingo English Test (DET)",
    "GMAT Preparation",
    "SAT / GRE Preparation",
    "German Language",
    "French Language",
    "Study Abroad Guidance",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const text = encodeURIComponent(
      `Hi Academic Yatra™ Team,\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.number}\nProgram: ${formData.program}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919217368750?text=${text}`, "_blank");
  };

  return (
    <section className="pt-20 sm:pt-24 pb-6 sm:pb-10 bg-[#FBFDFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section: Compact & view-once optimized */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 sm:mb-6 gap-3 sm:gap-6">
          <div>
            <div className="flex items-center gap-1.5 text-[#0C9253] text-xs sm:text-sm font-bold mb-1">
              <span className="w-2 h-2 rounded-full bg-[#0C9253]" />
              <span>Our Contacts</span>
            </div>
            <h1 className="font-heading text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.12]">
              Speak with <span className="text-[#08307A]">Our Team</span>
            </h1>
          </div>

          <p className="max-w-md text-slate-500 text-xs sm:text-sm leading-relaxed">
            Connect with Academic Yatra™ for guidance on study abroad, test preparation, language learning, and global opportunities.
          </p>
        </div>

        {/* Two White Rounded Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Left Card: Talk to Our Experts Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 border border-slate-200/80 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-between">
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-black text-[#08307A] tracking-tight mb-1">
                Talk to Our Experts
              </h2>
              <p className="text-xs text-slate-500 mb-4 sm:mb-6">
                Your email address will not be published. Required fields are marked <span className="text-rose-500">*</span>
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#0C9253] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-black text-base text-emerald-950">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs text-emerald-800">
                    Thank you, {formData.name}. Our counseling team is connecting with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name *"
                        className="w-full pb-2 bg-transparent border-b border-slate-200 focus:border-[#0C9253] text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your Email *"
                        className="w-full pb-2 bg-transparent border-b border-slate-200 focus:border-[#0C9253] text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone Number and Program Interested In Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <input
                        type="tel"
                        required
                        value={formData.number}
                        onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                        placeholder="Your Number *"
                        className="w-full pb-2 bg-transparent border-b border-slate-200 focus:border-[#0C9253] text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full pb-2 bg-transparent border-b border-slate-200 focus:border-[#0C9253] text-xs sm:text-sm text-slate-700 focus:outline-none appearance-none cursor-pointer pr-6"
                      >
                        {programs.map((prog, idx) => (
                          <option key={idx} value={prog}>
                            {prog}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-1 top-0.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="pt-1">
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your Message *"
                      className="w-full pb-2 bg-transparent border-b border-slate-200 focus:border-[#0C9253] text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 sm:pt-3">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-[#0C9253] hover:bg-[#0A7A45] text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 rounded-xl shadow-md shadow-[#0C9253]/20 hover:shadow-lg hover:shadow-[#0C9253]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Card: Contact Information */}
          <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 border border-slate-200/80 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-between">
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-black text-[#08307A] tracking-tight mb-4 sm:mb-5">
                Contact Us
              </h2>

              {/* Direct Info List */}
              <div className="space-y-3.5 sm:space-y-4">
                
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919217368750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#0C9253] transition-colors shrink-0 bg-slate-50/50">
                    <span className="text-sm text-slate-700 group-hover:text-[#0C9253]">💬</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#0C9253] transition-colors">
                    +91 92173 68750 (WhatsApp)
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@academicyatra.com"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#0C9253] transition-colors shrink-0 bg-slate-50/50">
                    <Mail className="w-3.5 h-3.5 text-slate-700 group-hover:text-[#0C9253] transition-colors" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#0C9253] transition-colors">
                    info@academicyatra.com
                  </span>
                </a>

                {/* Address with Building Image */}
                <div className="space-y-3 pt-0.5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 bg-white shadow-xs">
                      <MapPin className="w-3.5 h-3.5 text-[#0C9253]" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug block">
                        Unit 917, 9th Floor, SuperNova Astralis Sec 94, Noida – 201301
                      </span>
                    </div>
                  </div>

                  {/* SuperNova Astralis Building Preview Card - Compact Height */}
                  <div className="w-full overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-all group">
                    <div className="relative h-28 sm:h-32 w-full overflow-hidden">
                      <Image
                        src="/images/supernova_astralis_building_card.jpg"
                        alt="SuperNova Astralis, Sector 94 Noida"
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                      
                      <div className="absolute top-2 left-2.5">
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-[9.5px] font-bold text-emerald-400 border border-emerald-500/30">
                          <Building2 className="w-2.5 h-2.5 text-emerald-400" />
                          <span>SuperNova Astralis Tower</span>
                        </span>
                      </div>

                      <div className="absolute bottom-2 left-2.5 right-2.5 flex items-end justify-between">
                        <div>
                          <p className="text-xs font-bold text-white leading-tight">
                            Sector 94, Noida Expressway
                          </p>
                          <p className="text-[10px] text-slate-300">
                            Unit 917 • 9th Floor
                          </p>
                        </div>

                        <a
                          href="https://maps.google.com/?q=Supernova+Astralis,+Sector+94,+Noida,+Uttar+Pradesh+201301"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/95 hover:bg-white text-slate-900 text-[10.5px] font-bold shadow-xs transition-all cursor-pointer"
                        >
                          <span>Directions</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* In Socials Section */}
            <div className="pt-3.5 sm:pt-4 border-t border-slate-100 mt-4 sm:mt-5">
              <p className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#08307A] mb-2 sm:mb-2.5">
                IN SOCIALS:
              </p>

              <div className="flex items-center gap-2.5 sm:gap-3">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/academicyatra"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Academic Yatra™ Facebook"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0C9253] hover:bg-[#0A7A45] text-white flex items-center justify-center font-bold text-xs shadow-xs transition-transform hover:scale-105 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/academicyatra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Academic Yatra™ Instagram"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0C9253] hover:bg-[#0A7A45] text-white flex items-center justify-center font-bold text-xs shadow-xs transition-transform hover:scale-105 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
