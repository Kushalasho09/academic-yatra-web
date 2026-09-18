"use client";

import React from "react";
import { Monitor, GraduationCap, Compass, Microscope, Stethoscope, Globe, Award } from "lucide-react";
import { PackageDetailData } from "@/data/packageDetailsData";

interface PackageTargetAudienceProps {
  audience: PackageDetailData["audience"];
}

const getAudienceIcon = (index: number) => {
  switch (index) {
    case 0:
      return <GraduationCap className="w-6 h-6 text-emerald-600" />;
    case 1:
      return <Compass className="w-6 h-6 text-emerald-600" />;
    case 2:
      return <Microscope className="w-6 h-6 text-emerald-600" />;
    case 3:
      return <Stethoscope className="w-6 h-6 text-emerald-600" />;
    case 4:
      return <Globe className="w-6 h-6 text-emerald-600" />;
    case 5:
      return <Award className="w-6 h-6 text-emerald-600" />;
    default:
      return <Monitor className="w-6 h-6 text-emerald-600" />;
  }
};

export default function PackageTargetAudience({ audience }: PackageTargetAudienceProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FAF9] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{audience.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy tracking-tight font-heading leading-snug">
            <span>{audience.headingPrefix} </span>
            <span className="text-emerald-600">{audience.headingHighlight}</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1 font-body">
            Planning to study at a university abroad? IELTS Academic builds the exact English skills you&apos;ll use every day — following lectures, writing assignments, doing research and taking part in class discussions. A{" "}
            <strong className="text-brand-navy font-bold">strong band score</strong> also strengthens your application and brings your admission goals within reach. It&apos;s especially recommended for:
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {audience.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-slate-200/80 hover:border-emerald-400 hover:shadow-md transition-all duration-300 flex items-center gap-4 group"
            >
              {/* Icon Container with subtle brand accent */}
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-emerald-100 transition-all">
                {getAudienceIcon(idx)}
              </div>

              {/* Title Text */}
              <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug group-hover:text-emerald-800 transition-colors">
                {card.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
