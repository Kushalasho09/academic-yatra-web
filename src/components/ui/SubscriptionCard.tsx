"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SubscriptionCardFeature {
  text: string;
  included?: boolean;
}

export interface SubscriptionCardProps {
  id: string;
  name: string;
  subtitle?: string;
  price: string;
  period?: string;
  currency?: string;
  totalText?: string;
  badge?: string;
  isFeatured?: boolean;
  theme?: "mint" | "lime" | "lavender";
  features: (string | SubscriptionCardFeature)[];
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  onSelect?: () => void;
  trialHref?: string;
  singleCard?: boolean;
  className?: string;
}

const BOX_THEME_CLASSES: Record<"mint" | "lime" | "lavender", string> = {
  mint: "bg-[#F0F9EE] border border-emerald-100/80",
  lime: "bg-[#F8F9E4] border border-lime-200/80",
  lavender: "bg-[#F7EEF5] border border-pink-200/70",
};

export default function SubscriptionCard({
  name,
  subtitle,
  price,
  period = "/ month",
  currency = "₹",
  totalText,
  badge,
  isFeatured = false,
  theme = "mint",
  features,
  description,
  ctaText = "Buy Now",
  ctaHref,
  onSelect,
  trialHref,
  singleCard = false,
  className,
}: SubscriptionCardProps) {
  const isLime = theme === "lime" || isFeatured;
  const boxClass = BOX_THEME_CLASSES[theme] || BOX_THEME_CLASSES.mint;

  // Clean period string: remove (INR) or Total prefix
  const cleanPeriod = (period || "/ month")
    .replace(/\(INR\)/gi, "")
    .replace(/^total\s*/gi, "")
    .trim() || "/ month";

  return (
    <div
      className={cn(
        "relative rounded-[32px] p-6 sm:p-7 bg-white border flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1 h-full text-left",
        isLime
          ? "border-lime-300 shadow-lg md:-translate-y-1.5 ring-1 ring-lime-300/60"
          : "border-slate-200/80",
        className
      )}
    >
      {/* Floating Straight Popular Badge */}
      {badge && (
        <div className="absolute -top-3 right-4 z-10">
          <span className="inline-block bg-[#D4F938] text-slate-900 text-[11px] font-black px-3.5 py-0.5 rounded-full shadow-xs select-none uppercase tracking-wider">
            {badge}
          </span>
        </div>
      )}

      <div>
        {/* Top Header: Title & Subtitle */}
        <div className="text-left">
          <h3 className="font-heading font-extrabold text-2xl sm:text-[26px] text-slate-900 tracking-tight leading-snug">
            {name}
          </h3>
          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-400 font-normal mt-1 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Price Block matching PackageInlineCheckout detail page */}
        <div className="relative mt-5 mb-4 text-left">
          <div className="flex flex-col text-left">
            <div className="flex items-baseline gap-1.5">
              <span className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-none shrink-0">
                {currency}{price}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">
                {cleanPeriod.startsWith("/") ? cleanPeriod : `/ ${cleanPeriod}`}
              </span>
            </div>

            {totalText && (
              <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-xs text-slate-500 font-medium">
                <span>{totalText}</span>
              </div>
            )}
          </div>
        </div>

        {/* Tinted Features Box (Signature Reference UI Element) */}
        <div className={cn("rounded-2xl p-4 sm:p-5 my-4 border", boxClass)}>
          <div className="space-y-2.5">
            {features.map((feature, fIdx) => {
              const isString = typeof feature === "string";
              const featText = isString ? feature : feature.text;
              const isIncluded = isString ? true : feature.included !== false;

              return (
                <div
                  key={fIdx}
                  className="flex items-center gap-2.5 text-xs sm:text-[13px]"
                >
                  {isIncluded ? (
                    <div className="w-4 h-4 rounded-full bg-emerald-100 border border-emerald-500 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                    </div>
                  ) : (
                    <div className="w-4 h-4 rounded-full bg-rose-100 border border-rose-300 text-rose-500 flex items-center justify-center shrink-0">
                      <X className="w-2.5 h-2.5 stroke-[3.5]" />
                    </div>
                  )}

                  <span
                    className={cn(
                      "leading-snug flex-1",
                      isIncluded
                        ? "text-slate-700 font-medium"
                        : "text-slate-400 font-normal line-through"
                    )}
                  >
                    {featText}
                  </span>
                </div>
              );
            })}
          </div>
        </div>


      </div>

      {/* Action CTA Buttons */}
      <div className="pt-2 space-y-2">
        {onSelect ? (
          <button
            type="button"
            onClick={onSelect}
            className={cn(
              "w-full py-3.5 px-6 rounded-full font-bold text-sm flex items-center justify-center transition-all shadow-sm active:scale-[0.98] cursor-pointer",
              isLime
                ? "bg-[#D4F938] hover:bg-[#cbf133] text-slate-950 font-black shadow-lime-500/20"
                : "bg-[#111827] hover:bg-black text-white"
            )}
          >
            <span>{ctaText}</span>
          </button>
        ) : (
          <a
            href={ctaHref || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "w-full py-3.5 px-6 rounded-full font-bold text-sm flex items-center justify-center transition-all shadow-sm active:scale-[0.98] cursor-pointer",
              isLime
                ? "bg-[#D4F938] hover:bg-[#cbf133] text-slate-950 font-black shadow-lime-500/20"
                : "bg-[#111827] hover:bg-black text-white"
            )}
          >
            <span>{ctaText}</span>
          </a>
        )}


      </div>
    </div>
  );
}
