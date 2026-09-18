"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  GraduationCap,
  Briefcase,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TrackPath {
  numeral: string;
  id: string;
  title: string;
  subtitle: string;
  image: string;
  icon: React.ElementType;
  shortDesc: string;
  href: string;
  theme: {
    accentColor: string;
    numeralColor: string;
    numeralHover: string;
    borderHover: string;
    glow: string;
    buttonHover: string;
  };
}

const TRACKS: TrackPath[] = [
  {
    numeral: "01",
    id: "competitive-exams",
    title: "Competitive Exams",
    subtitle: "SAT • GRE • GMAT",
    image: "/images/path_competitive_exams.jpg",
    icon: Globe,
    shortDesc: "Bluebook & Pearson adaptive mocks with 1-on-1 strategy for top global scores.",
    href: "/test-prep",
    theme: {
      accentColor: "bg-brand-accent",
      numeralColor: "text-slate-100",
      numeralHover: "group-hover:text-blue-100/70",
      borderHover: "hover:border-brand-accent/50",
      glow: "hover:shadow-blue-500/12",
      buttonHover: "group-hover:bg-brand-accent group-hover:text-white",
    },
  },
  {
    numeral: "02",
    id: "language-programs",
    title: "Language Programs",
    subtitle: "IELTS • TOEFL • PTE • CELPIP",
    image: "/images/path_language_prep.jpg",
    icon: GraduationCap,
    shortDesc: "Real-time Pearson AI speaking score engine & certified British Council mentors.",
    href: "/languages",
    theme: {
      accentColor: "bg-brand-primary",
      numeralColor: "text-slate-100",
      numeralHover: "group-hover:text-emerald-100/70",
      borderHover: "hover:border-brand-primary/50",
      glow: "hover:shadow-emerald-500/15",
      buttonHover: "group-hover:bg-brand-primary group-hover:text-white",
    },
  },
  {
    numeral: "03",
    id: "skill-development",
    title: "Skill Development",
    subtitle: "Career & Workplace",
    image: "/images/path_skill_development.jpg",
    icon: Briefcase,
    shortDesc: "Executive communication, corporate presentation design & Google Suite mastery.",
    href: "/skill-catalyst",
    theme: {
      accentColor: "bg-amber-500",
      numeralColor: "text-slate-100",
      numeralHover: "group-hover:text-amber-100/70",
      borderHover: "hover:border-amber-400/50",
      glow: "hover:shadow-amber-500/12",
      buttonHover: "group-hover:bg-amber-600 group-hover:text-white",
    },
  },
];

export default function LearningPaths() {
  const easeCurve = [0.16, 1, 0.3, 1];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const firstChild = scrollRef.current.firstElementChild as HTMLElement | null;
    if (firstChild) {
      const itemWidth = firstChild.offsetWidth + 20;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(Math.max(0, index), TRACKS.length - 1));
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
        const itemWidth = firstChild.offsetWidth + 20;
        scrollRef.current.scrollTo({
          left: index * itemWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="py-10 sm:py-16 bg-white relative overflow-hidden">
      {/* Seamless Top & Bottom Ambient Fade */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-slate-50/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-50/60 to-transparent pointer-events-none" />

      {/* Background Decorative Soft Tints */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-gradient-to-br from-brand-tint/50 via-blue-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-20 w-[550px] h-[550px] bg-gradient-to-tl from-brand-greenTint/50 via-emerald-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeCurve }}
            className="space-y-3 text-left max-w-2xl"
          >
            {/* Green Bullet Tag */}
            <div className="flex items-center space-x-2 text-brand-primary text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-primary inline-block animate-pulse" />
              <span>PROGRAMS</span>
            </div>

            {/* Headline with Playfair Display Accent */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-brand-navy tracking-tight leading-snug sm:leading-[1.26] lg:leading-[1.28]">
              Choose Your{" "}
              <span className="text-brand-primary font-accent italic font-normal">
                Learning Path
              </span>
            </h2>

            {/* Description */}
            <p className="font-body text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              Explore structured learning programs designed around study abroad preparation, language proficiency, and competitive exams.
            </p>
          </motion.div>

          {/* Carousel Arrow Navigation Buttons */}
          <div className="flex items-center gap-2.5 self-end md:self-auto shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous Track"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-slate-700 hover:text-emerald-700 shadow-sm transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next Track"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-slate-700 hover:text-emerald-700 shadow-sm transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-6 pt-1 px-1 -mx-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {TRACKS.map((track, idx) => {
            const Icon = track.icon;

            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: easeCurve }}
                whileHover={{ y: -6 }}
                className={cn(
                  "group relative rounded-2xl sm:rounded-[28px] p-4 sm:p-6 bg-white border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shrink-0 snap-start",
                  "w-[85vw] sm:w-[360px] md:w-[380px] lg:w-[calc(33.333%-16px)]",
                  track.theme.borderHover,
                  track.theme.glow
                )}
              >
                {/* 1. OVERSIZED BACKGROUND NUMERAL (Watermark) */}
                <div
                  className={cn(
                    "font-heading font-black text-6xl sm:text-8xl sm:text-[96px] leading-none select-none absolute -bottom-2 -right-1 pointer-events-none transition-all duration-500 z-0 tracking-tighter",
                    track.theme.numeralColor,
                    track.theme.numeralHover
                  )}
                >
                  {track.numeral}
                </div>

                {/* 2. Top Color Indicator Accent Strip */}
                <div
                  className={cn(
                    "absolute top-0 left-0 right-0 h-1 sm:h-1.5 opacity-80 group-hover:opacity-100 transition-opacity",
                    track.theme.accentColor
                  )}
                />

                {/* 3. Card Content: Clean Single Image + Typography */}
                <div className="space-y-3 sm:space-y-4 relative z-10">
                  
                  {/* Clean Single Image Banner */}
                  <div className="relative w-full h-36 sm:h-48 md:h-52 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-slate-100/90 shadow-xs">
                    <Image
                      src={track.image}
                      alt={track.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Icon & Title Header */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-slate-100 flex items-center justify-center text-brand-navy shrink-0">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
                      </div>
                      <span className="font-heading text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wide truncate">
                        {track.subtitle}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold sm:font-extrabold text-brand-navy group-hover:text-brand-primary transition-colors leading-tight truncate">
                      {track.title}
                    </h3>
                  </div>

                  {/* Concise 1-line description */}
                  <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-2">
                    {track.shortDesc}
                  </p>

                </div>

                {/* 4. Interactive Bottom Action Button */}
                <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-100 relative z-10">
                  <Link
                    href={track.href}
                    className={cn(
                      "w-full inline-flex items-center justify-between px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl bg-slate-50 text-brand-navy font-heading font-extrabold text-xs sm:text-sm transition-all duration-300 shadow-2xs",
                      track.theme.buttonHover
                    )}
                  >
                    <span>Explore Track</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* 5. Light Sheen Reflection on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {TRACKS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to pathway track ${idx + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300 cursor-pointer",
                activeIndex === idx
                  ? "w-7 bg-brand-primary"
                  : "w-2 bg-slate-200 hover:bg-slate-300"
              )}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
