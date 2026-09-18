"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { COURSES_DATA, COURSE_CATEGORIES, Course } from "@/lib/courseData";
import { cn } from "@/lib/utils";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

export default function CourseCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 3; // Show 3 premium cards per page

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

  // Total pages
  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);

  // Paginated slice
  const paginatedCourses = useMemo(() => {
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const section = document.getElementById("courses");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section id="courses" className="py-10 sm:py-14 lg:py-16 bg-[#F8FAF8] relative overflow-hidden">
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
        <div className="space-y-6 mb-12">
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

        {/* Results Counter */}
        <div className="flex items-center justify-between max-w-7xl mx-auto mb-8 px-1">
          <p className="text-xs sm:text-sm font-medium text-slate-500">
            Showing <span className="font-bold text-dark">{filteredCourses.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1}</span>–<span className="font-bold text-dark">{Math.min(currentPage * ITEMS_PER_PAGE, filteredCourses.length)}</span> of <span className="font-bold text-brand-primary">{filteredCourses.length}</span> programs
          </p>
          {totalPages > 1 && (
            <p className="text-xs sm:text-sm font-medium text-slate-500">
              Page <span className="font-bold text-dark">{currentPage}</span> of <span className="font-bold text-dark">{totalPages}</span>
            </p>
          )}
        </div>

        {/* Course Cards Grid matching Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {paginatedCourses.map((course, idx) => {
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
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="relative w-full h-full flex flex-col group pb-2"
                >
                  <Link
                    href={getCourseHref(course)}
                    className="relative w-full h-full overflow-hidden rounded-[22px] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                  >
                    {/* Top Edge-to-Edge Image matching Image 1 */}
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
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty Search Result */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 max-w-md mx-auto shadow-sm">
            <p className="text-slate-600 text-sm font-semibold">
              No courses found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className="mt-3 text-xs text-brand-primary font-bold hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-1.5 sm:gap-2 select-none">
            {/* Prev Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous Page"
              className="inline-flex items-center gap-1 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 hover:border-brand-primary/40 disabled:opacity-40 disabled:pointer-events-none transition-all shadow-xs cursor-pointer shrink-0"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Responsive Page Numbers */}
            <div className="flex items-center gap-1 sm:gap-1.5 py-1">
              {(() => {
                const pages: (number | "...")[] = [];
                if (totalPages <= 5) {
                  for (let i = 1; i <= totalPages; i++) pages.push(i);
                } else {
                  pages.push(1);
                  if (currentPage > 3) pages.push("...");
                  const start = Math.max(2, currentPage - 1);
                  const end = Math.min(totalPages - 1, currentPage + 1);
                  for (let i = start; i <= end; i++) pages.push(i);
                  if (currentPage < totalPages - 2) pages.push("...");
                  pages.push(totalPages);
                }

                return pages.map((item, idx) => {
                  if (item === "...") {
                    return (
                      <span
                        key={`dots-${idx}`}
                        className="w-5 sm:w-7 text-center text-xs font-bold text-slate-400 select-none"
                      >
                        ...
                      </span>
                    );
                  }

                  const pageNum = item as number;
                  const isActive = currentPage === pageNum;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center justify-center shrink-0 ${
                        isActive
                          ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25 scale-105"
                          : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:border-emerald-300"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                });
              })()}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next Page"
              className="inline-flex items-center gap-1 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 hover:border-brand-primary/40 disabled:opacity-40 disabled:pointer-events-none transition-all shadow-xs cursor-pointer shrink-0"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
