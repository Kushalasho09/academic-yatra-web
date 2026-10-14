"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Eye, Calendar, User, Tag, Sparkles, Share2, BookOpen } from "lucide-react";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const router = useRouter();

  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          const found = data.data.find((b: any) => b.slug === slug);
          setBlog(found || null);
        }
      })
      .catch((err) => console.error("Error loading article:", err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-36 pb-20 flex items-center justify-center bg-slate-50 text-slate-400 text-sm">
        Loading article details...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen pt-36 pb-20 flex flex-col items-center justify-center bg-slate-50 text-center px-4 space-y-4">
        <BookOpen className="w-12 h-12 text-slate-300" />
        <h2 className="text-xl font-bold text-slate-800">Article Not Found</h2>
        <p className="text-xs text-slate-500 max-w-sm">
          The requested article may have been unpublished or removed.
        </p>
        <Link
          href="/resources"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#0C9253] text-white rounded-full text-xs font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Resources
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Banner / Breadcrumb */}
      <div className="pt-32 pb-8 bg-[#031643] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Resources
          </Link>

          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 inline-block">
              {blog.category}
            </span>
            <h1
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-3xl sm:text-5xl md:text-6xl font-normal leading-tight text-white"
            >
              {blog.title}
            </h1>

            <div className="flex items-center gap-4 text-xs text-slate-300 pt-2 flex-wrap">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-emerald-400" />
                {blog.author}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                {blog.readTime || "5 min read"}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
                {blog.views} reads
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 flex-1 w-full space-y-8">
        {/* Cover Image */}
        {blog.coverImage && (
          <div className="w-full h-72 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Excerpt Lead */}
        {blog.excerpt && (
          <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-[#0C9253] text-sm sm:text-base font-medium text-slate-700 leading-relaxed">
            {blog.excerpt}
          </div>
        )}

        {/* Rich Article Content (Supports HTML, Tables, Headings, Links) */}
        <article className="blog-rich-content max-w-none leading-relaxed overflow-x-auto">
          {blog.content ? (
            /<[a-z][\s\S]*>/i.test(blog.content) ? (
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            ) : (
              <div
                dangerouslySetInnerHTML={{
                  __html: blog.content
                    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
                    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
                    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
                    .replace(/^\> (.*$)/gim, "<blockquote><p>$1</p></blockquote>")
                    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
                    .replace(/\*(.*?)\*/gim, "<em>$1</em>")
                    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
                    .split(/\n\s*\n/)
                    .map((p: string) => {
                      p = p.trim();
                      if (!p) return "";
                      if (p.startsWith("<h") || p.startsWith("<blockquote") || p.startsWith("<ul") || p.startsWith("<ol") || p.startsWith("<table")) {
                        return p;
                      }
                      return `<p>${p.replace(/\n/g, "<br/>")}</p>`;
                    })
                    .filter(Boolean)
                    .join(""),
                }}
              />
            )
          ) : null}
        </article>

        {/* Tags */}
        {blog.tags && (
          <div className="pt-6 border-t border-slate-200 flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mr-1">
              <Tag className="w-3.5 h-3.5" /> Tags:
            </span>
            {blog.tags.split(",").map((t: string, idx: number) => (
              <span
                key={idx}
                className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium"
              >
                #{t.trim()}
              </span>
            ))}
          </div>
        )}
      </main>

      <ConsultationCTA />
      <Footer />
    </div>
  );
}
