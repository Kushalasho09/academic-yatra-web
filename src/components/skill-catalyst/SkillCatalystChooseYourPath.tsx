"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SkillPathwayCard {
  id: string;
  title: string;
  tagline: string;
  href: string;
  image: string;
  rating: string;
  reviews: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  popular?: boolean;
  programKey: string;
}

const SKILL_CATALYST_CARDS: SkillPathwayCard[] = [
  {
    id: "career-essentials",
    title: "Career Essentials",
    tagline: "For internships, jobs, interview prep, and workplace readiness.",
    href: "/skill-catalyst/career-essentials",
    image: "/images/path_skill_development.jpg",
    rating: "4.9",
    reviews: "412 reviews",
    level: "Intermediate",
    popular: false,
    programKey: "CAREER_ESSENTIALS",
  },
  {
    id: "bizz-tech",
    title: "BizzTech",
    tagline: "Master business analytics, podcasting, and digital workplace tools.",
    href: "/skill-catalyst/bizz-tech",
    image: "/images/path_competitive_boy.jpg",
    rating: "4.8",
    reviews: "328 reviews",
    level: "Advanced",
    popular: false,
    programKey: "BIZZ_TECH",
  },
  {
    id: "google-suite-hub",
    title: "Google Suite Hub",
    tagline: "Hands-on mastery of Google Workspace, sheets, and productivity tools.",
    href: "/skill-catalyst/google-suite-hub",
    image: "/images/path_learning_dashboard.jpg",
    rating: "4.8",
    reviews: "295 reviews",
    level: "Beginner",
    popular: false,
    programKey: "GOOGLE_SUITE",
  },
  {
    id: "skill-catalyst-combo",
    title: "Skill Catalyst Combo",
    tagline: "Complete job-ready suite with 6 weeks of live corporate mentorship.",
    href: "/skill-catalyst/skill-catalyst",
    image: "/images/why_academic_students.jpg",
    rating: "4.9",
    reviews: "650 reviews",
    level: "Advanced",
    popular: true,
    programKey: "COMBO",
  },
];

interface SkillCatalystChooseYourPathProps {
  onSelectPath?: (programKey: string) => void;
}

export default function SkillCatalystChooseYourPath({
  onSelectPath,
}: SkillCatalystChooseYourPathProps) {
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
        const itemWidth = firstChild.offsetWidth + 16;
        const current = Math.round(scrollLeft / itemWidth);
        setActiveIndex(Math.min(Math.max(current, 0), SKILL_CATALYST_CARDS.length - 1));
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
      const scrollAmount = clientWidth * 0.8;
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
        const itemWidth = firstChild.offsetWidth + 16;
        scrollRef.current.scrollTo({
          left: index * itemWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="py-8 sm:py-14 bg-white relative z-10 overflow-hidden">
      {/* Seamless Top & Bottom Ambient Fade */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-slate-50/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-50/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Carousel Navigation Arrows on Mobile */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-snug sm:leading-[1.28] lg:leading-[1.3] tracking-tight">
              Choose the Path You&apos;re{" "}
              <span className="text-[#0C9253]">Preparing For</span>
            </h2>
            <p className="font-body text-slate-500 text-xs sm:text-base leading-relaxed">
              Explore hands-on skill tracks designed for modern careers, corporate readiness, and digital workplace tools.
            </p>
          </div>

          {/* Carousel Arrow Controls for Mobile Horizontal Carousel */}
          <div className="flex sm:hidden items-center gap-3 self-end shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous Course"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-slate-700 hover:text-emerald-700 shadow-sm transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next Course"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-slate-700 hover:text-emerald-700 shadow-sm transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Pathway Cards: Horizontal Carousel on Mobile, Grid on Tablet/Desktop */}
        <div
          ref={scrollRef}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-6 overflow-x-auto sm:overflow-visible scroll-smooth snap-x snap-mandatory sm:snap-none pt-2 pb-6 sm:pb-2 -mx-4 sm:mx-0 px-4 sm:px-0 no-scrollbar scrollbar-none items-stretch"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {SKILL_CATALYST_CARDS.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="relative w-[85vw] xs:w-[320px] sm:w-auto shrink-0 sm:shrink snap-start h-full flex flex-col group pb-2"
            >
              <Link
                href={course.href}
                onClick={() => {
                  if (onSelectPath) onSelectPath(course.programKey);
                }}
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

                {/* Content Body with Single Title matching Languages Program Cards */}
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

        {/* Carousel Pagination Dots on Mobile */}
        <div className="sm:hidden mt-2 flex items-center justify-center gap-2 select-none">
          {SKILL_CATALYST_CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i
                  ? "w-8 bg-[#0C9253]"
                  : "w-2 bg-slate-200 hover:bg-emerald-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
