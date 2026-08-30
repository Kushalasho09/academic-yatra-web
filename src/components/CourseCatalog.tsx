"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { COURSES_DATA, COURSE_CATEGORIES, Course } from "@/lib/courseData";
import { CheckCircle2, Clock, BookOpen, Sparkles, ArrowRight, Search, Zap, Award, Star } from "lucide-react";

export default function CourseCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory =
      selectedCategory === "all" || course.categorySlug === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.packType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses" className="py-20 section-tint-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-greenTint text-brand-primary text-xs font-bold uppercase tracking-wider border border-brand-primary/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Test Prep & Language Catalog</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Learn Fast, Speak Fluently. Explore Our Courses
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
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
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs ${
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
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200 shadow-sm bg-white relative overflow-hidden group"
              >
                {/* Popular Glow Indicator */}
                {course.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-xs uppercase tracking-wider flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-white" />
                    <span>Popular</span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Category Pill + Pack Type */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-brand-accentDark shadow-xs">
                      {course.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold text-brand-primary bg-brand-greenTint border border-brand-primary/20">
                      {course.packType}
                    </span>
                  </div>

                  {/* Course Title */}
                  <div>
                    <h3 className="font-heading text-xl font-bold text-brand-navy group-hover:text-brand-primary transition-colors">
                      {course.title}
                    </h3>
                    <div className="text-xs font-medium text-slate-500 mt-1">
                      Level: <span className="text-slate-800 font-semibold">{course.level}</span>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs text-slate-600 leading-relaxed min-h-[36px]">
                    {course.tagline}
                  </p>

                  {/* Key Features Bullets */}
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    {course.features.map((feat) => (
                      <div key={feat} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Duration & Mode Meta */}
                  <div className="pt-3 flex items-center justify-between text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-brand-accent" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1 font-semibold text-brand-navy">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      <span>{course.mode}</span>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-5 border-t border-slate-100 mt-5">
                  <Link
                    href="/contacts"
                    className="flex items-center justify-center space-x-2 w-full py-3 rounded-full bg-slate-900 hover:bg-brand-primary text-white text-xs font-bold transition-all duration-200 group-hover:shadow-md shadow-xs"
                  >
                    <span>Enroll / Book Demo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty Search Result */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 max-w-md mx-auto">
            <p className="text-slate-600 text-sm font-semibold">
              No courses found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-brand-primary font-bold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
