"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Search, Clock, Eye, User, ArrowRight, BookOpen, Sparkles, Filter, X } from "lucide-react";

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  coverImage: string | null;
  author: string;
  category: string;
  tags: string | null;
  readTime: string | null;
  views: number;
  createdAt: string;
}

export default function ResourcesBlogGrid() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setBlogs(data.data);
        }
      })
      .catch((err) => console.error("Error loading resources blogs:", err))
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    const list = ["Study Abroad", "Test Prep", "Languages", "Skill Catalyst", "Visa & Admissions"];
    return Array.from(new Set([...list, ...blogs.map((b) => b.category)]));
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((b) => {
      const matchesSearch =
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.category.toLowerCase().includes(search.toLowerCase()) ||
        (b.tags && b.tags.toLowerCase().includes(search.toLowerCase())) ||
        (b.excerpt && b.excerpt.toLowerCase().includes(search.toLowerCase()));

      const matchesCat =
        selectedCategory === "ALL" ||
        b.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCat;
    });
  }, [blogs, search, selectedCategory]);

  return (
    <section id="articles-list" className="py-20 sm:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header & Filters */}
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0C9253] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              Student Knowledge Library
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#122447] tracking-tight">
              Featured Articles &amp; Insights
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore step-by-step guides authored by international education mentors.
            </p>
          </div>

          {/* Search Bar & Category Filter Bar */}
          <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 max-w-4xl mx-auto">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search resources by keyword, exam (IELTS, German), or topic..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-slate-50/50 hover:bg-white transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap pt-1">
              <span className="text-xs text-slate-400 font-semibold flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5" /> Topic:
              </span>
              <button
                onClick={() => setSelectedCategory("ALL")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === "ALL"
                    ? "bg-[#122447] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All Topics ({blogs.length})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#0C9253] text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Cards Grid */}
        {loading ? (
          <div className="text-center py-20 text-slate-400 text-sm">
            Loading articles...
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 max-w-xl mx-auto p-8 space-y-3">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="font-bold text-slate-700 text-base">No articles found</h3>
            <p className="text-xs text-slate-500">
              Try adjusting your search query or select All Topics.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/resources/${blog.slug}`}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1"
              >
                {/* Cover Image */}
                <div className="h-52 w-full bg-slate-100 relative overflow-hidden">
                  {blog.coverImage ? (
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-50">
                      <BookOpen className="w-12 h-12" />
                    </div>
                  )}

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-[#122447] shadow-sm backdrop-blur-md uppercase tracking-wider border border-white/60">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {blog.readTime || "5 min read"}
                      </span>
                      <span>&bull;</span>
                      <span className="truncate">By {blog.author}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#122447] group-hover:text-[#0C9253] transition-colors line-clamp-2 leading-snug">
                      {blog.title}
                    </h3>

                    {blog.excerpt && (
                      <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                        {blog.excerpt}
                      </p>
                    )}
                  </div>

                  {/* Footer link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-slate-400" />
                      {blog.views} views
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0C9253] group-hover:translate-x-1 transition-transform">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
