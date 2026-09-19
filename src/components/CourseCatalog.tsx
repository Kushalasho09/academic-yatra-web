"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { COURSES_DATA, COURSE_CATEGORIES, Course } from "@/lib/courseData";
import { cn } from "@/lib/utils";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

export default function CourseCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const getCourseImage = (course: Course): string => {
    if (course.categorySlug === "foreign-languages") {
      return "/images/why_academic_students.jpg";
    }
    if (course.categorySlug === "competitive-exams") {
      if (course.id.includes("gre") || course.id.includes("gmat")) {
        return "/images/path_competitive_boy.jpg";
      }
      return "/images/path_competitive_exams.jpg";
    }
    if (course.categorySlug === "skill-catalyst") {
      return "/images/path_skill_development.jpg";
    }
    if (course.id.includes("pte") || course.id.includes("det")) {
      return "/images/hero_center_laptop.jpg";
    }
    return "/images/path_language_prep.jpg";
  };

  const getCourseHref = (course: Course): string => {
    if (course.id.includes("ielts")) {
      return "/languages/ielts-academic";
    }
    if (course.categorySlug === "foreign-languages") {
      return `/languages/${course.id}`;
    }
    if (course.categorySlug === "competitive-exams") {
      return "/test-prep";
    }
    if (course.categorySlug === "skill-catalyst") {
      return "/skill-catalyst";
    }
    return `/languages/${course.id}`;
  };

  // Filter courses based on category and search
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchesCategory =
        selectedCategory === "all" || course.categorySlug === selectedCategory;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.packType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const firstChild = scrollRef.current.firstElementChild as HTMLElement | null;
    if (firstChild) {
      const itemWidth = firstChild.offsetWidth + 24;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(Math.max(0, index), filteredCourses.length - 1));
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
  }, [filteredCourses.length]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.85;
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

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="courses" className="py-12 sm:py-16 lg:py-20 bg-[#F8FAF8] relative overflow-hidden">
      {/* Seamless Top & Bottom Ambient Fade */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark tracking-tight leading-snug sm:leading-[1.25]">
            Learn Fast, Speak Fluently. Explore Our Courses
          </h2>

          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Explore curated Champion Packs, Live Classes, and Self-Preparation suites engineered for maximum score achievement.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="space-y-6 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {COURSE_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs cursor-pointer ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25 scale-105"
                      : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/90 hover:border-emerald-300"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by test (e.g. IELTS, PTE, GRE, French, D-SAT)..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearchChange("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results Counter & Horizontal Carousel Navigation Controls */}
        <div className="flex items-center justify-between max-w-7xl mx-auto mb-6 px-1">
          <p className="text-xs sm:text-sm font-medium text-slate-500">
            Showing <span className="font-bold text-dark">{filteredCourses.length}</span> programs
          </p>

          {/* Carousel Prev/Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-slate-700 hover:text-emerald-700 shadow-sm transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-slate-700 hover:text-emerald-700 shadow-sm transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track (Web & Mobile) */}
        {filteredCourses.length > 0 ? (
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pt-2 pb-6 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 no-scrollbar items-stretch"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {filteredCourses.map((course, idx) => {
              const level =
                course.packType.toLowerCase().includes("foundation") ||
                course.title.toLowerCase().includes("beginner") ||
                idx % 3 === 2
                  ? "Beginner"
                  : course.packType.toLowerCase().includes("mastery") ||
                    course.packType.toLowerCase().includes("plus") ||
                    idx % 3 === 1
                  ? "Advanced"
                  : "Intermediate";

              const rating = idx % 3 === 0 ? "4.8" : idx % 3 === 1 ? "4.9" : "4.7";
              const reviews =
                idx % 3 === 0
                  ? "356 reviews"
                  : idx % 3 === 1
                  ? "576 reviews"
                  : "210 reviews";

              return (
                <div
                  key={course.id}
                  className="relative w-[85vw] xs:w-[320px] sm:w-[350px] lg:w-[380px] shrink-0 snap-start h-full flex flex-col group pb-2"
                >
                  <Link
                    href={getCourseHref(course)}
                    className="relative w-full h-full overflow-hidden rounded-[22px] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                  >
                    {/* Top Edge-to-Edge Image */}
                    <div className="relative aspect-[16/10] sm:aspect-[16/10.5] w-full shrink-0 overflow-hidden bg-slate-100">
                      <Image
                        src={getCourseImage(course)}
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
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search Result */
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 max-w-md mx-auto shadow-sm my-6">
            <p className="text-slate-600 text-sm font-semibold">
              No courses found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-brand-primary font-bold hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Carousel Pagination Dots */}
        {filteredCourses.length > 1 && (
          <div className="mt-6 flex items-center justify-center gap-1.5 select-none">
            {filteredCourses.slice(0, Math.min(filteredCourses.length, 12)).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Scroll to course ${idx + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer",
                  activeIndex === idx
                    ? "w-7 bg-emerald-600 shadow-xs"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                )}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
