"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PathwayCourse {
  id: string;
  category: string;
  duration: string;
  title: string;
  tagline: string;
  packType: string;
  popular?: boolean;
  image: string;
  glowText: string;
  shortGlowText: string;
  examKey: string;
}

const TEST_PREP_PATHWAYS: PathwayCourse[] = [
  {
    id: "sat-digital",
    category: "Digital SAT",
    duration: "8–10 Weeks",
    title: "SAT Preparation",
    tagline:
      "Build stronger scores through focused concepts, timed practice, and detailed analysis.",
    packType: "Champion Pack",
    popular: true,
    image: "/images/why_academic_students.jpg",
    glowText: "Target 1500+ with Adaptive Bluebook Mocks",
    shortGlowText: "Target 1500+ SAT Mocks",
    examKey: "SAT",
  },
  {
    id: "gre-general",
    category: "GRE General",
    duration: "8–10 Weeks",
    title: "GRE Preparation",
    tagline:
      "Sharpen Quant and Verbal performance through targeted practice and analytical strategy.",
    packType: "Champion Pack",
    popular: true,
    image: "/images/path_competitive_boy.jpg",
    glowText: "Target 325+ for Top MS & STEM Universities",
    shortGlowText: "Target 325+ GRE STEM",
    examKey: "GRE",
  },
  {
    id: "gmat-focus",
    category: "GMAT Focus Edition",
    duration: "10–12 Weeks",
    title: "GMAT Preparation",
    tagline:
      "Strengthen business-school readiness with focused Quant, Verbal, and Data practice skills.",
    packType: "Champion Pack +",
    popular: true,
    image: "/images/hero_center_laptop.jpg",
    glowText: "Top Business Schools & 99th Percentile Strategy",
    shortGlowText: "705+ MBA Focus Prep",
    examKey: "GMAT",
  },
  {
    id: "gre-ielts-combo",
    category: "GRE + IELTS Combo",
    duration: "12–14 Weeks",
    title: "Master's Complete Pathway",
    tagline:
      "Integrated preparation covering GRE General + IELTS Academic for seamless university admissions and visa approvals.",
    packType: "Mastery Pack",
    popular: false,
    image: "/images/indian_student_laptop.jpg",
    glowText: "All-in-One Global Master's Prep Bundle",
    shortGlowText: "GRE + IELTS Combo",
    examKey: "COMBO",
  },
  {
    id: "sat-math-verbal-booster",
    category: "SAT Score Booster",
    duration: "4–6 Weeks",
    title: "SAT 800 Math & Verbal Sprint",
    tagline:
      "Intensive sprint for test-takers aiming to jump 150+ points with Desmos calculator mastery and punctuation drills.",
    packType: "Fast-Track Pack",
    popular: false,
    image: "/images/path_learning_dashboard.jpg",
    glowText: "150+ Score Improvement Guarantee",
    shortGlowText: "+150 Score Sprint",
    examKey: "SAT",
  },
  {
    id: "executive-mba-track",
    category: "Executive MBA / EMBA",
    duration: "6–8 Weeks",
    title: "Executive MBA Track",
    tagline:
      "Weekend and evening batches designed for working professionals targeting premier global executive MBA programs.",
    packType: "Executive Pack",
    popular: false,
    image: "/images/carousel_founder_guidance.png",
    glowText: "Flexible Weekend Batches for Working Pros",
    shortGlowText: "Executive MBA Batches",
    examKey: "GMAT",
  },
];

interface ChooseYourPathProps {
  onSelectPath?: (examKey: string) => void;
}

export default function TestPrepChooseYourPath({ onSelectPath }: ChooseYourPathProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

      const firstChild = scrollRef.current.firstElementChild as HTMLElement | null;
      if (firstChild) {
        const itemWidth = firstChild.offsetWidth + 24;
        const current = Math.round(scrollLeft / itemWidth);
        setActiveIndex(Math.min(Math.max(current, 0), TEST_PREP_PATHWAYS.length - 1));
      }
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const firstChild = scrollRef.current.firstElementChild as HTMLElement | null;
      if (firstChild) {
        const itemWidth = firstChild.offsetWidth + 24;
        scrollRef.current.scrollTo({
          left: index * itemWidth,
          behavior: "smooth",
        });
      }
    }
  };

  const handleScrollToPrograms = (examKey: string) => {
    if (onSelectPath) {
      onSelectPath(examKey);
    }
    const section = document.getElementById("course-programs");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-8 sm:py-14 bg-white relative z-10 overflow-hidden">
      {/* Seamless Top & Bottom Ambient Fade */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-slate-50/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-50/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Carousel Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-snug sm:leading-[1.28] lg:leading-[1.3] tracking-tight">
              Choose the Path You&apos;re{" "}
              <span className="text-brand-accent">Preparing For</span>
            </h2>
            <p className="font-body text-slate-500 text-sm sm:text-base leading-relaxed">
              Different academic goals require different exams. Explore the
              programs below to find the right path for your journey.
            </p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous Course"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-slate-700 hover:text-emerald-700 shadow-sm transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next Course"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-slate-700 hover:text-emerald-700 shadow-sm transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Scroll Track */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pt-2 pb-10 sm:pb-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 no-scrollbar scrollbar-none items-stretch"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {TEST_PREP_PATHWAYS.map((course, idx) => {
            const level =
              idx % 3 === 0
                ? "Intermediate"
                : idx % 3 === 1
                ? "Advanced"
                : "Beginner";
            const rating = idx % 3 === 0 ? "4.8" : idx % 3 === 1 ? "4.9" : "4.7";
            const reviews =
              idx % 3 === 0
                ? "356 reviews"
                : idx % 3 === 1
                ? "576 reviews"
                : "210 reviews";

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (idx % 3) * 0.06 }}
                className="relative w-[85vw] xs:w-[320px] sm:w-[350px] lg:w-[380px] shrink-0 snap-start h-full flex flex-col group pb-4"
              >
                <div
                  onClick={() => handleScrollToPrograms(course.examKey)}
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
                    {course.popular && (
                      <div className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-md uppercase tracking-wider">
                        ★ Popular
                      </div>
                    )}
                  </div>

                  {/* Content Body */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 text-left">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                        {course.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal line-clamp-2 mt-2 font-body">
                        {course.tagline}
                      </p>
                    </div>

                    {/* Bottom Rating and Level Badge */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                        <span>{rating}</span>
                        <span className="text-[#7C3AED] font-bold">★</span>
                        <span className="text-slate-400 font-normal text-[11px]">
                          ({reviews})
                        </span>
                      </div>

                      <span
                        className={cn(
                          "text-[11px] font-bold px-2.5 py-0.5 rounded-md",
                          level === "Beginner" && "bg-sky-100 text-sky-800",
                          level === "Intermediate" && "bg-amber-100 text-amber-900",
                          level === "Advanced" && "bg-emerald-100 text-emerald-800"
                        )}
                      >
                        {level}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-2 flex items-center justify-center gap-2 select-none">
          {TEST_PREP_PATHWAYS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i
                  ? "w-8 bg-emerald-600"
                  : "w-2 bg-slate-200 hover:bg-emerald-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
