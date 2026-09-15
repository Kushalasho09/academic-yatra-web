"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
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
      `Hi Academic Yatra Team,\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.number}\nProgram: ${formData.program}\nMessage: ${formData.message}`
    );
    window.open(`https://web.whatsapp.com/send?phone=+919403892981&text=${text}`, "_blank");
  };

  return (
    <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-[#FBFDFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section (Matching Screenshot) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#0C9253] text-sm sm:text-base font-bold mb-2">
              <span className="w-2 h-2 rounded-full bg-[#0C9253]" />
              <span>Our Contacts</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Speak with <br />
              <span className="text-[#08307A]">Our Team</span>
            </h1>
          </div>

          <p className="max-w-md text-slate-500 text-sm sm:text-base leading-relaxed">
            Connect with Academic Yatra for guidance on study abroad, test preparation, language learning, and global opportunities.
          </p>
        </div>

        {/* Two White Rounded Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Card: Talk to Our Experts Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-between">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#08307A] tracking-tight mb-2">
                Talk to Our Experts
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-8">
                Your email address will not be published. Required fields are marked <span className="text-rose-500">*</span>
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#0C9253] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-black text-lg text-emerald-950">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800">
                    Thank you, {formData.name}. Our counseling counselor is connecting with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name *"
                        className="w-full pb-3 bg-transparent border-b border-slate-200 focus:border-[#0C9253] text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your Email *"
                        className="w-full pb-3 bg-transparent border-b border-slate-200 focus:border-[#0C9253] text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone Number and Program Interested In Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="tel"
                        required
                        value={formData.number}
                        onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                        placeholder="Your Number *"
                        className="w-full pb-3 bg-transparent border-b border-slate-200 focus:border-[#0C9253] text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full pb-3 bg-transparent border-b border-slate-200 focus:border-[#0C9253] text-sm text-slate-700 focus:outline-none appearance-none cursor-pointer pr-6"
                      >
                        {programs.map((prog, idx) => (
                          <option key={idx} value={prog}>
                            {prog}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-1 top-1 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="pt-2">
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your Message *"
                      className="w-full pb-3 bg-transparent border-b border-slate-200 focus:border-[#0C9253] text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2.5 bg-[#0C9253] hover:bg-[#0A7A45] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-md shadow-[#0C9253]/25 hover:shadow-lg hover:shadow-[#0C9253]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Card: Contact Us Direct Info */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-between">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#08307A] tracking-tight mb-8">
                Contact Us
              </h2>

              {/* Direct Info List */}
              <div className="space-y-6">
                
                {/* Phone */}
                <a
                  href="tel:+919286844550"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#0C9253] transition-colors shrink-0">
                    <Phone className="w-4 h-4 text-slate-700 group-hover:text-[#0C9253] transition-colors" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-[#0C9253] transition-colors">
                    +91-92868-44550
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href="http://wa.me/919403892981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#0C9253] transition-colors shrink-0">
                    <span className="text-base text-slate-700 group-hover:text-[#0C9253]">💬</span>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-[#0C9253] transition-colors">
                    +91-94038-92981
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@academicyatra.com"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#0C9253] transition-colors shrink-0">
                    <Mail className="w-4 h-4 text-slate-700 group-hover:text-[#0C9253] transition-colors" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-[#0C9253] transition-colors">
                    info@academicyatra.com
                  </span>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-slate-700" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
                    Address: E49/5, Pocket D, Okhla Phase II, New Delhi – 110020
                  </span>
                </div>

              </div>
            </div>

            {/* In Socials Section */}
            <div className="pt-10 border-t border-slate-100 mt-8">
              <p className="text-xs font-black uppercase tracking-wider text-[#08307A] mb-4">
                IN SOCIALS:
              </p>

              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/academicyatra"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Academic Yatra Facebook"
                  className="w-10 h-10 rounded-full bg-[#0C9253] hover:bg-[#0A7A45] text-white flex items-center justify-center font-bold text-sm shadow-sm transition-transform hover:scale-105 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/academicyatra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Academic Yatra Instagram"
                  className="w-10 h-10 rounded-full bg-[#0C9253] hover:bg-[#0A7A45] text-white flex items-center justify-center font-bold text-sm shadow-sm transition-transform hover:scale-105 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
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
