"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PackageDetailData } from "@/data/packageDetailsData";

interface PackageCourseGuideProps {
  guide: PackageDetailData["courseGuide"];
}

export default function PackageCourseGuide({ guide }: PackageCourseGuideProps) {
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{guide.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy tracking-tight font-heading leading-snug">
            <span>{guide.headingPrefix} </span>
            <span className="text-emerald-600">{guide.headingHighlight}</span>
          </h2>

          <p className="text-slate-500 text-sm sm:text-base font-normal font-body">
            {guide.subtitle}
          </p>
        </div>

        {/* 3x3 Accordion Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-start">
          {guide.items.map((item) => {
            const isOpen = openCardId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-[20px] border transition-all duration-300 overflow-hidden bg-white ${
                  isOpen
                    ? "border-emerald-500 shadow-md ring-1 ring-emerald-500/20 bg-emerald-50/20"
                    : "border-slate-200/90 hover:border-emerald-300 shadow-xs"
                }`}
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleCard(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-3 cursor-pointer group"
                >
                  <div className="flex items-baseline gap-3.5">
                    {/* Number */}
                    <span className="font-heading text-lg font-bold text-emerald-600 shrink-0">
                      {item.number}
                    </span>

                    {/* Question Title */}
                    <span className="text-sm sm:text-[15px] font-bold text-brand-navy group-hover:text-emerald-700 leading-snug transition-colors">
                      {item.question}
                    </span>
                  </div>

                  {/* Toggle Icon */}
                  <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5 group-hover:bg-emerald-100 transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Expandable Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-body">
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
    </section>
  );
}
