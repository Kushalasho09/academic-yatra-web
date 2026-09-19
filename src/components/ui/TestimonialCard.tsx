"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  badge?: string;
  secondaryBadge?: string;
  rating?: number;
  colorTheme?: "blue" | "green" | "teal" | "indigo" | "purple";
  tiltAngle?: "left" | "right" | "slight-left" | "slight-right";
  className?: string;
}

const COLOR_CLASSES: Record<NonNullable<TestimonialCardProps["colorTheme"]>, string> = {
  blue: "bg-[#0284c7]",
  green: "bg-[#10b981]",
  teal: "bg-[#0d9488]",
  indigo: "bg-[#4f46e5]",
  purple: "bg-[#8b5cf6]",
};

const TILT_CLASSES: Record<NonNullable<TestimonialCardProps["tiltAngle"]>, string> = {
  "left": "-rotate-6 sm:-rotate-[7deg]",
  "right": "rotate-6 sm:rotate-[7deg]",
  "slight-left": "-rotate-3 sm:-rotate-[4deg]",
  "slight-right": "rotate-3 sm:rotate-[4deg]",
};

export default function TestimonialCard({
  quote,
  name,
  role,
  avatar,
  badge,
  secondaryBadge,
  rating = 5,
  colorTheme = "blue",
  tiltAngle = "left",
  className,
}: TestimonialCardProps) {
  const bgColorClass = COLOR_CLASSES[colorTheme] || COLOR_CLASSES.blue;
  const tiltClass = TILT_CLASSES[tiltAngle] || TILT_CLASSES.left;

  return (
    <div className={cn("relative pt-10 sm:pt-12 pb-6 sm:pb-8 px-3 sm:px-4 w-full select-none", className)}>
      {/* Tilted Colored Backdrop (matching Reference Image 2) */}
      <div
        className={cn(
          "absolute inset-x-3 sm:inset-x-4 top-10 sm:top-12 bottom-6 sm:bottom-8 rounded-[28px] sm:rounded-[32px] transition-transform duration-300 pointer-events-none transform shadow-sm",
          bgColorClass,
          tiltClass
        )}
        aria-hidden="true"
      />

      {/* Main White Card */}
      <div className="relative bg-white rounded-[28px] sm:rounded-[32px] shadow-[0_16px_36px_-10px_rgba(15,23,42,0.12)] border border-slate-100/90 p-5 sm:p-7 pt-12 sm:pt-14 flex flex-col items-center text-center z-10 min-h-[300px] sm:min-h-[330px] justify-between">
        
        {/* Floating Top Avatar with White Border (overlapping top edge) */}
        <div className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[3.5px] sm:border-4 border-white shadow-[0_8px_20px_-4px_rgba(0,0,0,0.18)] overflow-hidden bg-slate-100 z-20">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 64px, 80px"
          />
        </div>

        {/* Content Container */}
        <div className="w-full flex flex-col items-center">
          {/* Student Name */}
          <h3 className="font-heading font-bold text-base sm:text-xl text-slate-900 tracking-tight leading-snug">
            {name}
          </h3>

          {/* Role / Position in italics */}
          <p className="text-slate-400 italic text-xs sm:text-sm font-medium mt-0.5">
            {role}
          </p>

          {/* Optional Badge (e.g. Test Prep Score / Course Track) */}
          {(badge || secondaryBadge) && (
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2">
              {badge && (
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  {badge}
                </span>
              )}
              {secondaryBadge && (
                <span className="inline-block px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-slate-100 text-slate-600">
                  {secondaryBadge}
                </span>
              )}
            </div>
          )}

          {/* Centered Testimonial Quote */}
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-3.5 sm:mt-4 font-normal line-clamp-4 sm:line-clamp-5 max-w-sm">
            &ldquo;{quote}&rdquo;
          </p>
        </div>

        {/* Floating Bottom Circular Badge with Golden Star (matching Reference Image 2) */}
        <div className="absolute -bottom-4 sm:-bottom-4.5 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-[0_4px_14px_-2px_rgba(0,0,0,0.15)] border border-slate-100 flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
        </div>
      </div>
    </div>
  );
}
