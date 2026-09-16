"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "Which exam should I take for bachelor's admissions abroad?",
    answer:
      "The SAT is the most widely accepted test for undergraduate admissions at universities in the USA, Canada, and many European countries. Most top US colleges accept SAT scores as part of their holistic admissions review. Combining a strong SAT score (1450+) with IELTS Academic or TOEFL creates a robust global university application profile.",
  },
  {
    question: "Which exam is required for master's admissions abroad?",
    answer:
      "For master's programs in STEM, Engineering, Economics, and Data Science, the GRE General Test is the primary requirement across top universities in the US, Canada, and Europe. For management master's degrees (such as MiM, MS in Finance, or MSBA), universities usually accept either the GRE or GMAT.",
  },
  {
    question: "Is GMAT required for MBA admissions?",
    answer:
      "Yes, GMAT (or GRE) is widely required and preferred for top MBA and executive business programs globally (including Harvard, Stanford, Wharton, INSEAD, LBS, and ISB). A competitive score on the new GMAT Focus Edition (685+) significantly strengthens your candidacy and qualifies you for substantial merit-based scholarships.",
  },
  {
    question: "Do programs include mock tests?",
    answer:
      "Yes! All programs include full-length adaptive mock tests calibrated strictly to official exam formats (Digital SAT Bluebook algorithm, ETS Shorter GRE, and GMAC GMAT Focus Edition). You receive question-by-question explanations, timing analytics, and actionable diagnostic reports.",
  },
  {
    question: "Are live classes available?",
    answer:
      "Yes! Our Champion and Champion+ programs feature live interactive classes conducted by 99th percentile master instructors with flexible batch options (Morning, Evening, Weekend). All live lectures are recorded and cataloged in your student portal for unlimited 24/7 revision.",
  },
];

export default function TestPrepFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item expanded by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-8 sm:py-12 bg-gradient-to-b from-white via-slate-50/50 to-white z-10 overflow-hidden">
      {/* Seamless top and bottom feather fades */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading & Contact Box */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <div className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-brand-primary">
                FAQ
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-snug sm:leading-[1.28] lg:leading-[1.3] tracking-tight">
                <span className="block mb-1.5 sm:mb-2.5">Frequently Asked</span>
                <span className="text-brand-primary block">Questions</span>
              </h2>
            </div>

            {/* Still have questions card */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-brand-primary">
                <Mail className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-xl text-brand-navy">
                  Still have questions?
                </h3>
                <p className="font-body text-slate-500 text-sm mt-1 leading-relaxed">
                  Speak directly with our senior test prep advisors. We&apos;ll evaluate your academic profile and recommend the ideal target score.
                </p>
              </div>

              <a
                href="https://web.whatsapp.com/send?phone=+919403892981&text=Hi,%20I%20have%20questions%20regarding%20SAT,%20GRE%20or%20GMAT%20preparation%20at%20Academic%20Yatra."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all hover:gap-3"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Accordions */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={cn(
                    "rounded-2xl border transition-all duration-200 overflow-hidden bg-white",
                    isOpen
                      ? "border-brand-primary shadow-sm"
                      : "border-slate-200 hover:border-slate-300 shadow-xs"
                  )}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-heading font-extrabold text-brand-primary text-base sm:text-lg">
                        Q
                      </span>
                      <h3
                        className={cn(
                          "font-heading font-bold text-base sm:text-lg transition-colors leading-snug",
                          isOpen ? "text-brand-accent" : "text-brand-navy"
                        )}
                      >
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors",
                        isOpen
                          ? "bg-brand-primary text-white"
                          : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                      )}
                    >
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-slate-600 font-body text-sm sm:text-base leading-relaxed border-t border-slate-100 pl-12">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
