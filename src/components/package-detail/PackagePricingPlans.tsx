"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SubscriptionCard from "@/components/ui/SubscriptionCard";
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

        {/* Dynamic Pricing Cards Grid matching Reference UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
          {pricing.plans.map((plan, idx) => {
            const isFeatured = plan.featured || idx === 1;
            const theme = idx === 0 ? "mint" : idx === 1 ? "lime" : "lavender";
            const badge = isFeatured ? (plan.badge || "Popular") : undefined;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="h-full"
              >
                <SubscriptionCard
                  id={plan.id}
                  name={plan.name}
                  subtitle={plan.category || "Structured Curriculum"}
                  price={plan.priceMonth.replace("/m", "").replace("₹", "").trim()}
                  period="/month (INR)"
                  currency="₹"
                  totalText={plan.totalText}
                  badge={badge}
                  isFeatured={isFeatured}
                  theme={theme}
                  features={plan.features}
                  description="All the essentials to build and master your scores and career proficiency"
                  ctaText={isFeatured ? `Choose ${plan.name}` : `Choose ${plan.name}`}
                  onSelect={() => onSelectPlan(plan.name, plan.priceMonth)}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
