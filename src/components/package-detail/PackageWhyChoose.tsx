"use client";

import React from "react";
import {
  FileVideo,
  Users2,
  Megaphone,
  Asterisk,
  Target,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { PackageDetailData, EcosystemCard } from "@/data/packageDetailsData";

interface PackageWhyChooseProps {
  whyChoose: PackageDetailData["whyChoose"];
}

const getIcon = (type: EcosystemCard["iconType"]) => {
  switch (type) {
    case "dashboard":
      return <FileVideo className="w-6 h-6 text-emerald-600" />;
    case "lessons":
      return <Users2 className="w-6 h-6 text-emerald-600" />;
    case "classes":
      return <Megaphone className="w-6 h-6 text-emerald-600" />;
    case "practice":
      return <Asterisk className="w-6 h-6 text-emerald-600 stroke-[2.8]" />;
    case "mock":
      return <Target className="w-6 h-6 text-emerald-600" />;
    case "evaluation":
      return <MessageSquare className="w-6 h-6 text-emerald-600" />;
    default:
      return <FileVideo className="w-6 h-6 text-emerald-600" />;
  }
};

export default function PackageWhyChoose({ whyChoose }: PackageWhyChooseProps) {
  return (
    <section className="py-16 sm:py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{whyChoose.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy tracking-tight font-heading leading-snug">
              <span>{whyChoose.headingPrefix} </span>
              <span className="text-emerald-600">{whyChoose.headingHighlight}</span>
            </h2>
          </div>

          <p className="text-slate-500 text-sm sm:text-base max-w-md font-normal leading-relaxed font-body">
            {whyChoose.subtitle}
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChoose.cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-[26px] p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group bg-gradient-to-b from-white via-white to-emerald-50/20"
            >
              <div>
                {/* Top Icon */}
                <div className="mb-6 p-2.5 w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-emerald-100 transition-all">
                  {getIcon(card.iconType)}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold font-heading text-brand-navy mb-4 group-hover:text-emerald-700 transition-colors">
                  {card.title}
                </h3>

                {/* Bullets with green check icons */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium font-body">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
