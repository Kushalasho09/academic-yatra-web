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
  className?: string;
}

const BOX_THEME_CLASSES: Record<"mint" | "lime" | "lavender", string> = {
  mint: "bg-[#f0f9eb] border border-emerald-100/70",
  lime: "bg-[#f8f9e2] border border-lime-200/60",
  lavender: "bg-[#f8edf5] border border-pink-100/70",
};

const CARD_THEME_CLASSES: Record<"mint" | "lime" | "lavender", string> = {
  mint: "bg-white",
  lime: "bg-white",
  lavender: "bg-[#fdf9fc] sm:bg-white",
};

export default function SubscriptionCard({
  name,
  subtitle,
  price,
  period = "/month",
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
  className,
}: SubscriptionCardProps) {
  const boxClass = BOX_THEME_CLASSES[theme] || BOX_THEME_CLASSES.mint;
  const cardBgClass = CARD_THEME_CLASSES[theme] || CARD_THEME_CLASSES.mint;

  return (
    <div
      className={cn(
        "relative rounded-[32px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border border-slate-200/90 shadow-md hover:shadow-xl hover:-translate-y-1 h-full",
        cardBgClass,
        isFeatured && "shadow-xl ring-2 ring-lime-400/50 md:-translate-y-2 hover:-translate-y-3",
        className
      )}
    >
      <div>
        {/* Top Header: Title & Subtitle */}
        <div className="text-left">
          <h3 className="font-heading font-bold text-2xl sm:text-[26px] text-slate-900 tracking-tight">
            {name}
          </h3>
          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-400 font-normal mt-1 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Price Block */}
        <div className="relative mt-5 mb-4 text-left">
          {/* Neon Lime Floating Badge (as seen in Reference UI) */}
          {badge && (
            <div className="absolute -top-3.5 right-2 sm:right-4 z-10">
              <span className="inline-block bg-[#d8f946] text-slate-900 text-[11px] font-extrabold px-3 py-0.5 rounded-full -rotate-6 shadow-xs select-none">
                {badge}
              </span>
            </div>
          )}

          <div className="flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {currency}
            </span>
            <span className="font-heading text-4xl sm:text-[46px] font-extrabold text-slate-900 tracking-tight leading-none">
              {price}
            </span>
            <span className="text-xs sm:text-sm text-slate-500 font-medium ml-1">
              {period}
            </span>
          </div>

          {totalText && (
            <p className="text-[11px] text-slate-400 font-medium mt-1.5">
              {totalText}
            </p>
          )}
        </div>

        {/* Tinted Features Box (Signature Reference UI Element) */}
        <div className={cn("rounded-2xl p-4 sm:p-5 my-3.5", boxClass)}>
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
                    <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-500 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3.2]" />
                    </div>
                  ) : (
                    <div className="w-4 h-4 rounded-full bg-rose-50 border border-rose-400 text-rose-500 flex items-center justify-center shrink-0">
                      <X className="w-2.5 h-2.5 stroke-[3.2]" />
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

        {/* Footer Description below features box */}
        {description && (
          <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed min-h-[36px] my-3.5 text-left font-normal">
            {description}
          </p>
        )}
      </div>

      {/* Action CTA Buttons */}
      <div className="pt-2 space-y-2">
        {onSelect ? (
          <button
            type="button"
            onClick={onSelect}
            className={cn(
              "w-full py-3.5 px-6 rounded-full font-semibold text-sm flex items-center justify-center transition-all shadow-sm active:scale-[0.98] cursor-pointer",
              isFeatured || theme === "lime"
                ? "bg-[#d8f946] hover:bg-[#cbf133] text-slate-900 font-extrabold shadow-lime-500/20"
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
              "w-full py-3.5 px-6 rounded-full font-semibold text-sm flex items-center justify-center transition-all shadow-sm active:scale-[0.98] cursor-pointer",
              isFeatured || theme === "lime"
                ? "bg-[#d8f946] hover:bg-[#cbf133] text-slate-900 font-extrabold shadow-lime-500/20"
                : "bg-[#111827] hover:bg-black text-white"
            )}
          >
            <span>{ctaText}</span>
          </a>
        )}

        {trialHref && (
          <a
            href={trialHref}
            className="block text-center text-xs text-slate-400 hover:text-slate-700 font-medium py-1 transition-colors"
          >
            Book 5-Day Free Trial
          </a>
        )}
      </div>
    </div>
  );
}
