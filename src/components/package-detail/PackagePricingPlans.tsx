"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, HelpCircle, Users, Rocket, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { PackageDetailData } from "@/data/packageDetailsData";

interface PackagePricingPlansProps {
  pricing: PackageDetailData["pricing"];
  onSelectPlan: (planName: string, price: string) => void;
}

export default function PackagePricingPlans({
  pricing,
  onSelectPlan,
}: PackagePricingPlansProps) {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-[#F6FAF8] to-white z-10 overflow-hidden">
      {/* Seamless top and bottom feather fades */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{pricing.badge}</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-snug sm:leading-[1.28] tracking-tight">
              <span>{pricing.headingPrefix} </span>
              <span className="text-emerald-600">{pricing.headingHighlight}</span>
            </h2>
          </div>

          <p className="font-body text-slate-500 text-sm sm:text-base max-w-md leading-relaxed">
            {pricing.subtitle}
          </p>
        </div>

        {/* Dynamic Pricing Cards Grid (Exact matching CoursePrograms style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
          {pricing.plans.map((plan, idx) => {
            const isFeatured = plan.featured;
            const PlanIcon = idx === 0 ? Users : idx === 1 ? Rocket : Sparkles;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className={cn(
                  "relative rounded-[28px] bg-white p-7 sm:p-9 flex flex-col justify-between transition-all duration-300",
                  isFeatured
                    ? "border-2 border-[#00B074] shadow-xl shadow-emerald-500/10 md:-translate-y-2 hover:-translate-y-3"
                    : "border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-slate-300 hover:-translate-y-1.5"
                )}
              >
                {/* Top-Right POPULAR Badge for Featured Card */}
                {isFeatured && (
                  <div className="absolute top-5 right-5 rotate-12">
                    <span className="px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#00B074] text-white shadow-xs">
                      POPULAR
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Icon */}
                  <div className="w-9 h-9 rounded-full bg-[#00B074] flex items-center justify-center text-white mb-6 shadow-xs">
                    <PlanIcon className="w-4 h-4 fill-white stroke-[2.2]" />
                  </div>

                  {/* Plan Header */}
                  <div className="mb-6 text-left">
                    <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                      {plan.category}
                    </span>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 tracking-tight">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Clean Centered Price Block */}
                  <div className="text-center py-5 my-2">
                    <div className="font-heading font-bold text-5xl sm:text-[52px] text-slate-900 tracking-tight leading-none">
                      {plan.priceMonth.replace("/m", "")}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 font-normal mt-2">
                      / month (INR)
                    </div>
                    <div className="text-[11px] font-medium text-slate-400 mt-1">
                      {plan.totalText}
                    </div>
                  </div>

                  {/* Action CTA Button */}
                  <div className="my-5">
                    <button
                      onClick={() => onSelectPlan(plan.name, plan.priceMonth)}
                      className={cn(
                        "w-full py-3.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center transition-all duration-200 cursor-pointer",
                        isFeatured
                          ? "bg-[#00B074] hover:bg-[#009b66] text-white font-bold shadow-sm shadow-emerald-600/20 hover:scale-[1.01]"
                          : idx === 2
                          ? "bg-[#E6F7F0] hover:bg-[#d8f4e9] text-[#00A86B] font-bold hover:scale-[1.01]"
                          : "bg-[#F1F2F4] hover:bg-slate-200 text-slate-700 hover:scale-[1.01]"
                      )}
                    >
                      <span>{isFeatured ? `Get ${plan.name}` : `Choose ${plan.name}`}</span>
                    </button>
                  </div>

                  {/* Features Checklist Header */}
                  <div className="pt-3 text-left">
                    <p className="font-bold text-sm text-slate-900 mb-4">
                      Free features
                    </p>

                    {/* Features List */}
                    <div className="space-y-3.5">
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px]">
                          <div
                            className={cn(
                              "w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-xs",
                              feat.included === false
                                ? "bg-slate-200 text-slate-400"
                                : "bg-[#00B074] text-white"
                            )}
                          >
                            <Check className="w-2.5 h-2.5 stroke-[3.2]" />
                          </div>
                          <span
                            className={cn(
                              "leading-snug font-normal flex-1",
                              feat.included === false ? "text-slate-400 line-through" : "text-slate-700"
                            )}
                          >
                            {feat.text}
                          </span>
                          {i % 2 === 0 && (
                            <HelpCircle className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
