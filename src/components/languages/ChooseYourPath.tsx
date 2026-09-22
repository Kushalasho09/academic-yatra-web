"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  Star,
  Plus,
  ArrowRight,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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

const PATHWAY_COURSES: PathwayCourse[] = [
  {
    id: "ielts-academic",
    category: "IELTS Academic",
    duration: "6–8 Weeks",
    title: "IELTS Academic",
    tagline:
      "Build academic English with structured practice, feedback, and IELTS aligned mock tests.",
    packType: "Champion Pack",
    popular: true,
    image: "/images/why_academic_students.jpg",
    glowText: "Target Band 7.5+ with Cambridge AI Mocks",
    shortGlowText: "Band 7.5+ AI Mocks",
    examKey: "IELTS AC",
  },
  {
    id: "ielts-general",
    category: "IELTS General",
    duration: "6–8 Weeks",
    title: "IELTS General",
    tagline:
      "Sharpen everyday English for work, migration, and communication through focused practice.",
    packType: "Champion Pack",
    popular: true,
    image: "/images/story_canada_settling.jpg",
    glowText: "Target CLB 9/10 for Express Entry PR",
    shortGlowText: "CLB 9/10 Express Entry",
    examKey: "IELTS GN",
  },
  {
    id: "pte-academic",
    category: "PTE Academic",
    duration: "4–6 Weeks",
    title: "PTE Academic",
    tagline:
      "Master computer-based English with timed practice, feedback, and every exam-focused strategy.",
    packType: "Champion Pack",
    popular: true,
    image: "/images/hero_center_laptop.jpg",
    glowText: "Guaranteed 79+ with Pearson AI Templates",
    shortGlowText: "Score 79+ Pearson AI",
    examKey: "PTE AC",
  },
  {
    id: "pte-core",
    category: "PTE Core",
    duration: "4–6 Weeks",
    title: "PTE Core",
    tagline:
      "Prepare practical English skills for Canadian pathways through focused, structured practice.",
    packType: "Fast-Track Pack",
    popular: false,
    image: "/images/indian_student_laptop.jpg",
    glowText: "Official Canadian PR Score Booster",
    shortGlowText: "Canadian PR Booster",
    examKey: "PTE CORE",
  },
  {
    id: "toefl-ibt",
    category: "TOEFL iBT",
    duration: "6–8 Weeks",
    title: "TOEFL Preparation",
    tagline:
      "Build academic English skills with targeted practice across every tested section.",
    packType: "Mastery Pack",
    popular: false,
    image: "/images/path_competitive_boy.jpg",
    glowText: "ETS Tested Strategies & 100+ Score Focus",
    shortGlowText: "Score 100+ Live Mocks",
    examKey: "TOEFL",
  },
  {
    id: "duolingo-det",
    category: "Duolingo English Test",
    duration: "3–4 Weeks",
    title: "Duolingo English Test",
    tagline:
      "Prepare flexibly with focused practice for the fully online English test.",
    packType: "Fast-Track Pack",
    popular: true,
    image: "/images/path_learning_dashboard.jpg",
    glowText: "Fast-Track 125+ Score Guarantee",
    shortGlowText: "125+ Score Fast-Track",
    examKey: "Duolingo",
  },
  {
    id: "celpip-prep",
    category: "CELPIP General",
    duration: "4–6 Weeks",
    title: "CELPIP Preparation",
    tagline:
      "Strengthen practical English for Canada with targeted practice and test strategies.",
    packType: "Champion Pack",
    popular: false,
    image: "/images/dest_canada.png",
    glowText: "100% Canadian PR Centric Curriculum",
    shortGlowText: "100% Canadian PR Prep",
    examKey: "CELPIP",
  },
  {
    id: "french-prep",
    category: "French (DELF / TEF)",
    duration: "8–12 Weeks",
    title: "French Preparation",
    tagline:
      "Build practical French for study, work, communication, and Canadian pathways abroad.",
    packType: "Multi-Level Pack",
    popular: true,
    image: "/images/dest_europe.png",
    glowText: "Native Bilingual Mentors & TEF Certified",
    shortGlowText: "TEF / DELF Canada Prep",
    examKey: "French",
  },
  {
    id: "german-prep",
    category: "German (Goethe-Zertifikat)",
    duration: "8–12 Weeks",
    title: "German Preparation",
    tagline:
      "Develop practical German for study, university applications, and everyday communication confidently.",
    packType: "Multi-Level Pack",
    popular: true,
    image: "/images/carousel_explore_brands.png",
    glowText: "Goethe-Zertifikat A1-B2 Free Uni Pathway",
    shortGlowText: "Goethe A1-B2 Free Uni",
    examKey: "German",
  },
  {
    id: "spoken-english",
    category: "Spoken English & Fluency",
    duration: "4–6 Weeks",
    title: "Spoken English",
    tagline:
      "Improve everyday English fluency through guided speaking practice, feedback, and assignments.",
    packType: "Fluency Pack",
    popular: false,
    image: "/images/hero_campus_life.png",
    glowText: "Daily Live Speaking Clubs & Accent Training",
    shortGlowText: "Daily Speaking Clubs",
    examKey: "Spoken Eng",
  },
];

interface ChooseYourPathProps {
  onSelectPath?: (examKey: string) => void;
}

export default function ChooseYourPath({ onSelectPath }: ChooseYourPathProps) {
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
        setActiveIndex(Math.min(Math.max(current, 0), PATHWAY_COURSES.length - 1));
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
              <span className="text-emerald-600">Preparing For</span>
            </h2>
            <p className="font-body text-slate-500 text-sm sm:text-base leading-relaxed">
              Explore curated preparation pathways with Cambridge-certified mentors, AI diagnostics, and high-scoring templates.
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
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pt-2 pb-14 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 no-scrollbar scrollbar-none items-stretch"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {PATHWAY_COURSES.map((course, idx) => {
            const level = idx % 3 === 0 ? "Intermediate" : idx % 3 === 1 ? "Advanced" : "Beginner";
            const rating = idx % 3 === 0 ? "4.8" : idx % 3 === 1 ? "4.9" : "4.7";
            const reviews = idx % 3 === 0 ? "356 reviews" : idx % 3 === 1 ? "576 reviews" : "210 reviews";

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (idx % 3) * 0.06 }}
                className="relative w-[85vw] xs:w-[320px] sm:w-[350px] lg:w-[380px] shrink-0 snap-start h-full flex flex-col group pb-4"
              >
                <Link
                  href={`/languages/${course.id}`}
                  className="relative w-full h-full overflow-hidden rounded-[22px] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  {/* Top Edge-to-Edge Image matching Image 1 */}
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

                  {/* Content Body matching Image 1 */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 text-left">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                        {course.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal line-clamp-2 mt-2 font-body">
                        {course.tagline}
                      </p>
                    </div>

                    {/* Bottom Rating and Level Badge matching Image 1 */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                        <span>{rating}</span>
                        <span className="text-[#7C3AED] font-bold">★</span>
                        <span className="text-slate-400 font-normal text-[11px]">({reviews})</span>
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
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-2 flex items-center justify-center gap-2 select-none">
          {PATHWAY_COURSES.map((_, i) => (
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
