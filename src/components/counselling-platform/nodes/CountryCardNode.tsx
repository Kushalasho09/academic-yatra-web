"use client";

import React from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";
import {
  Sparkles,
  Landmark,
  Globe,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { CountryProgramData } from "@/data/counsellingData";

export interface CountryCardNodeData {
  country: CountryProgramData;
  onOpenDetails: (country: CountryProgramData) => void;
  currencyMode: "INR" | "LOCAL";
}

export default function CountryCardNode({ data }: NodeProps<any>) {
  const nodeData = data as CountryCardNodeData;
  const { country, onOpenDetails, currencyMode } = nodeData;

  const displayTuition =
    currencyMode === "INR" ? country.tuitionPerYearInr : country.tuitionPerYearLocal;

  const displaySalary =
    currencyMode === "INR" ? country.entrySalaryInr : country.entrySalaryLocal;

  return (
    <div className="relative min-w-[300px] max-w-[330px] rounded-[24px] bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl hover:shadow-2xl hover:border-brand-primary/50 transition-all duration-300 p-5 select-none group flex flex-col justify-between">
      {/* Input Handle */}
      <Handle
        type="target"
        position={Position.Left}
        className="w-3.5 h-3.5 bg-purple-600 border-2 border-white shadow-md !-left-2"
      />

      <div className="space-y-4">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center space-x-2.5">
            <span className="text-2xl shadow-xs rounded-full">{country.flag}</span>
            <div>
              <h3 className="font-heading font-extrabold text-base text-dark">
                {country.countryName}
              </h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                {country.countryCode} • {country.postStudyWorkVisa}
              </p>
            </div>
          </div>

          {/* FY Recommendation Pill */}
          {country.isFyRecommended && (
            <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-2xs">
              ⭐ Recommended
            </span>
          )}
        </div>

        {/* Feature Highlight Tag */}
        {country.fyRecommendationTag && (
          <div className="bg-brand-greenTint border border-brand-primary/20 text-brand-primary font-bold text-[11px] px-3 py-1 rounded-xl flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{country.fyRecommendationTag}</span>
          </div>
        )}

        {/* Cost & Salary Glimpse */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
            <div className="flex items-center space-x-1 text-[10px] font-bold text-slate-500 uppercase">
              <Landmark className="w-3 h-3 text-brand-primary" />
              <span>Est. Tuition</span>
            </div>
            <p className="text-xs font-extrabold text-dark mt-0.5 truncate">
              {displayTuition}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
            <div className="flex items-center space-x-1 text-[10px] font-bold text-slate-500 uppercase">
              <Briefcase className="w-3 h-3 text-brand-accent" />
              <span>Avg Salary</span>
            </div>
            <p className="text-xs font-extrabold text-dark mt-0.5 truncate">
              {displaySalary}
            </p>
          </div>
        </div>

        {/* PR & Settlement Pill */}
        <div className="flex items-center justify-between text-xs pt-1">
          <div className="flex items-center space-x-1.5 text-slate-600 font-medium">
            <Globe className="w-3.5 h-3.5 text-brand-primary" />
            <span className="text-[11px]">PR Ease:</span>
          </div>
          <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${country.prEaseColor}`}>
            {country.prEase}
          </span>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-4 mt-3 border-t border-slate-100">
        <button
          onClick={() => onOpenDetails(country)}
          className="w-full py-2 px-3 rounded-xl bg-brand-navy group-hover:bg-brand-primary text-white text-xs font-bold transition-all duration-200 flex items-center justify-between shadow-xs cursor-pointer"
        >
          <span>View Full Breakdown</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
