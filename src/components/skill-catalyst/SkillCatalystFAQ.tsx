"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const SKILL_FAQ_DATA: FAQItem[] = [
  {
    question: "Who should enroll in Skill Catalyst programs?",
    answer:
      "College students, fresh graduates, and early-career professionals preparing for internships, campus placements, or corporate transitions who want hands-on practical skills in business, digital tools, communication, and productivity.",
  },
  {
    question: "Are live classes and interactive mentoring included?",
    answer:
      "Yes! All Skill Catalyst programs feature live interactive classes conducted by seasoned industry professionals with practical demonstrations, mock interviews, and live doubt resolution.",
  },
  {
    question: "Will I receive a recognized certificate of achievement?",
    answer:
      "Yes! Upon successful completion of the program, projects, and final skill assessment, you will receive an official, verifiable Certificate of Achievement from Academic Yatra to showcase on LinkedIn and your resume.",
  },
  {
    question: "How long do I get access to the recorded lessons and materials?",
    answer:
      "You receive 95 days of unrestricted portal access to revisit all recorded lecture videos, spreadsheet templates, presentation toolkits, and student resources at your own pace.",
  },
  {
    question: "What is the benefit of the Skill Catalyst Combo Pack?",
    answer:
      "The Combo Pack provides the complete 6-week professional transformation by combining Career Essentials, BizzTech, and Google Suite Hub with integrated capstones and personal career coaching at exceptional value.",
  },
];

export default function SkillCatalystFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
                  Speak directly with our career counsellors. We&apos;ll help you choose the best program for your professional goals.
                </p>
              </div>

              <a
                href="https://web.whatsapp.com/send?phone=+919403892981&text=Hi,%20I%20have%20questions%20regarding%20the%20Skill%20Catalyst%20programs."
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
            {SKILL_FAQ_DATA.map((item, idx) => {
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
