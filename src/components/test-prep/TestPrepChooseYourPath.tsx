"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface PathwayCourse {
  id: string;
  category: string;
  duration: string;
  title: string;
  tagline: string;
  packType: string;
  image: string;
  glowText: string;
  shortGlowText: string;
  examKey: string;
  href: string;
  rating: string;
  reviews: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export type PathwayCard = PathwayCourse;

const TEST_PREP_PATHWAYS: PathwayCourse[] = [
  {
    id: "sat-digital",
    category: "SAT PREPARATION",
    duration: "8–10 Weeks",
    title: "Bachelor's Abroad",
    tagline:
      "For undergraduate admissions to leading universities worldwide.",
    packType: "Champion Pack",
    image: "/images/why_academic_students.jpg",
    glowText: "Target 1500+ with Adaptive Bluebook Mocks",
    shortGlowText: "Target 1500+ SAT Mocks",
    examKey: "SAT",
    href: "/test-prep/sat-digital",
    rating: "4.8",
    reviews: "356 reviews",
    level: "Intermediate",
  },
  {
    id: "gre-general",
    category: "GRE PREPARATION",
    duration: "8–10 Weeks",
    title: "Master's Abroad",
    tagline:
      "For postgraduate admissions across top global universities.",
    packType: "Champion Pack",
    image: "/images/path_competitive_boy.jpg",
    glowText: "Target 325+ for Top MS & STEM Universities",
    shortGlowText: "Target 325+ GRE STEM",
    examKey: "GRE",
    href: "/test-prep/gre-general",
    rating: "4.9",
    reviews: "576 reviews",
    level: "Advanced",
  },
  {
    id: "gmat-focus",
    category: "GMAT PREPARATION",
    duration: "10–12 Weeks",
    title: "MBA Abroad",
    tagline:
      "For admissions leading to top business schools abroad.",
    packType: "Champion Pack +",
    image: "/images/hero_center_laptop.jpg",
    glowText: "Top Business Schools & 99th Percentile Strategy",
    shortGlowText: "705+ MBA Focus Prep",
    examKey: "GMAT",
    href: "/test-prep/gmat-focus",
    rating: "4.8",
    reviews: "420 reviews",
    level: "Advanced",
  },
];

interface ChooseYourPathProps {
  onSelectPath?: (examKey: string) => void;
}

export default function TestPrepChooseYourPath({ onSelectPath }: ChooseYourPathProps) {
  return (
    <section className="py-8 sm:py-14 bg-white relative z-10 overflow-hidden">
      {/* Seamless Top & Bottom Ambient Fade */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-slate-50/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-50/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-snug sm:leading-[1.28] lg:leading-[1.3] tracking-tight">
              Choose the Path You&apos;re{" "}
              <span className="text-[#0C9253]">Preparing For</span>
            </h2>
            <p className="font-body text-slate-500 text-xs sm:text-base leading-relaxed">
              Different academic goals require different exams. Explore the
              programs below to find the right path for your journey.
            </p>
          </div>
        </div>

        {/* 3 Pathway Cards Grid using existing website course design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pb-2">
          {TEST_PREP_PATHWAYS.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="relative w-full h-full flex flex-col group pb-2"
            >
                <Link
                  href={course.href}
                  className="relative w-full h-full overflow-hidden rounded-[22px] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left"
                >
                  {/* Top Edge-to-Edge Image */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/10.5] w-full shrink-0 overflow-hidden bg-slate-100">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Body */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 text-left">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                        {course.title}
                      </h3>
                      {course.category && (
                        <p className="font-heading text-xs font-extrabold tracking-wider text-[#0C9253] uppercase mt-1">
                          {course.category}
                        </p>
                      )}
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mt-2.5 font-body">
                        {course.tagline}
                      </p>
                    </div>

                    {/* Bottom Rating and Level Badge */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                        <span>{course.rating}</span>
                        <span className="text-[#7C3AED] font-bold">★</span>
                        <span className="text-slate-400 font-normal text-[11px]">
                          ({course.reviews})
                        </span>
                      </div>

                      <span
                        className={cn(
                          "text-[11px] font-bold px-2.5 py-0.5 rounded-md",
                          course.level === "Beginner" && "bg-sky-100 text-sky-800",
                          course.level === "Intermediate" && "bg-amber-100 text-amber-900",
                          course.level === "Advanced" && "bg-emerald-100 text-emerald-800"
                        )}
                      >
                        {course.level}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
