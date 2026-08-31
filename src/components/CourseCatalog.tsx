"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { COURSES_DATA, COURSE_CATEGORIES, Course } from "@/lib/courseData";
import {
  Clock,
  Sparkles,
  ArrowRight,
  Search,
  Zap,
  Star,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";

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

  const getGlowText = (course: Course): string => {
    if (course.categorySlug === "foreign-languages") {
      return "Native Bilingual Mentors & Goethe Certified";
    }
    if (course.categorySlug === "competitive-exams") {
      return "Target 1500+ SAT & 330+ GRE Guaranteed";
    }
    if (course.categorySlug === "skill-catalyst") {
      return "Executive Leadership & Career Accelerators";
    }
    return "Target Band 7.5+ with Cambridge AI Mocks";
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
    <section id="courses" className="py-16 sm:py-24 bg-[#F8FAF8] relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-greenTint text-brand-primary text-xs font-bold uppercase tracking-wider border border-brand-primary/20 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Test Prep & Language Catalog</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark tracking-tight">
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
                      ? "bg-brand-primary text-white shadow-md shadow-brand-primary/30 scale-105"
                      : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/90 hover:border-brand-primary/40"
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

        {/* State-of-the-Art Layered Glow Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 pb-8">
          <AnimatePresence mode="popLayout">
            {paginatedCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="relative w-full group"
              >
                {/* Glowing Underlay Shelf (Green Accent from design.md) */}
                <div className="pointer-events-none absolute inset-x-3 -bottom-10 top-[80%] rounded-[26px] bg-brand-primary shadow-[0_25px_60px_-10px_rgba(12,146,83,0.7)] z-0 transition-transform duration-300 group-hover:scale-[1.02]" />

                {/* Glowing Bottom Shelf Text Indicator (Perfect Vertical Alignment) */}
                <div className="absolute inset-x-0 -bottom-10 h-10 flex items-center justify-center z-0 pointer-events-none px-4">
                  <div className="flex items-center justify-center gap-1.5 text-center text-xs font-bold text-white tracking-wide">
                    <Zap className="h-3.5 w-3.5 text-amber-300 fill-amber-300 shrink-0" />
                    <span className="truncate">{getGlowText(course)}</span>
                  </div>
                </div>

                {/* Main Card Surface */}
                <div className="relative z-10 w-full overflow-hidden rounded-[22px] bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-brand-primary/40">
                  
                  {/* Top Status Header */}
                  <div className="mb-5 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-2">
                      <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand-primary animate-pulse" />
                      <span className="font-bold text-dark">{course.category}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-100/80 px-2.5 py-1 rounded-full text-slate-600 font-semibold text-[11px]">
                      <Clock className="h-3.5 w-3.5 text-brand-accent" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Course Image Visual */}
                  <div className="relative h-48 sm:h-52 w-full shrink-0 overflow-hidden rounded-[18px] ring-1 ring-slate-100 bg-slate-50">
                    <Image
                      src={getCourseImage(course)}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-35 transition-opacity" />

                    {/* Popular Badge */}
                    {course.popular && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-white" />
                        <span>Popular</span>
                      </div>
                    )}

                    {/* Pack Tag on Image */}
                    <div className="absolute bottom-3 left-3">
                      <span className="px-3 py-1 rounded-xl text-xs font-bold text-white bg-black/65 backdrop-blur-md border border-white/20 shadow-sm">
                        {course.packType}
                      </span>
                    </div>
                  </div>

                  {/* Title & Concise Summary */}
                  <div className="mt-5 text-left space-y-1.5">
                    <h3 className="text-xl font-bold font-heading text-brand-navy group-hover:text-brand-primary transition-colors truncate">
                      {course.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed line-clamp-2 min-h-[32px]">
                      {course.tagline}
                    </p>
                  </div>

                  {/* Action Buttons Grid */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Link
                      href="/contacts"
                      className="h-11 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-brand-primary/40 text-slate-700 font-bold text-xs transition-all shadow-xs hover:shadow-sm"
                    >
                      <Plus className="h-3.5 w-3.5 text-brand-primary" />
                      <span>Book Demo</span>
                    </Link>

                    <Link
                      href="/contacts"
                      className="h-11 inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-xs shadow-md shadow-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/40 transition-all"
                    >
                      <span>Enroll Now</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                </div>
              </motion.div>
            ))}
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
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 select-none">
            {/* Prev Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 hover:border-brand-primary/40 disabled:opacity-40 disabled:pointer-events-none transition-all shadow-xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {/* Page Number Buttons */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isActive = currentPage === pageNum;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-9 h-9 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center justify-center ${
                      isActive
                        ? "bg-brand-primary text-white shadow-md shadow-brand-primary/30 scale-105"
                        : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:border-brand-primary/40"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 hover:border-brand-primary/40 disabled:opacity-40 disabled:pointer-events-none transition-all shadow-xs cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
