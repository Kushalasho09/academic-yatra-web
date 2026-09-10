"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Star, Plus, ArrowRight, Zap } from "lucide-react";

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
      "Target Band 7.5+ with structured live masterclasses and Cambridge-aligned mock tests.",
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
      "Tailored for Canada PR & UK Work Visa with proven CLB 9/10 strategies and letter writing drills.",
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
      "Score 79+ guaranteed with AI speech scoring engine, Pearson mock tests & high-scoring templates.",
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
      "Achieve CLB 7+ for Canadian PR, provincial nominations & Express Entry pathways.",
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
      "Comprehensive ETS-pattern preparation targeting 100+ scores for top US & Canadian universities.",
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
      "Target 125+ scores in 30 days with adaptive AI drills and full-length simulated mocks.",
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
      "Master all 4 Canadian English modules designed strictly for Express Entry and citizenship.",
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
      "From A1 to B2 with native tutors. Gain up to 50 additional CRS bonus points for Canada PR.",
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
      "Master A1–C1 Goethe levels to secure admission to 100% tuition-free German universities.",
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
      "Build unshakeable speaking confidence with daily conversation clubs and accent refinement.",
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
    <section className="py-10 sm:py-14 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="space-y-2">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-[1.18] tracking-tight">
              Choose the Path You&apos;re{" "}
              <span className="text-brand-accent">Preparing For</span>
            </h2>
          </div>

          <p className="font-body text-slate-500 text-sm sm:text-base max-w-md leading-relaxed">
            Different academic goals require different exams. Explore the
            preparation pathway that aligns with your next step.
          </p>
        </div>

        {/* State-of-the-Art Layered Glow Cards Grid (2 cards per row on mobile, strictly aligned) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 sm:gap-x-6 lg:gap-x-8 gap-y-12 sm:gap-y-16 pb-8 items-stretch">
          {PATHWAY_COURSES.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (idx % 3) * 0.08 }}
              className="relative w-full h-full flex flex-col group"
            >
              {/* Glowing Underlay Shelf: Uniform fixed bottom height and offset across ALL cards */}
              <div className="pointer-events-none absolute inset-x-1.5 sm:inset-x-3 -bottom-6 sm:-bottom-7 h-9 sm:h-11 rounded-b-[18px] sm:rounded-b-[24px] bg-brand-primary shadow-[0_16px_35px_-8px_rgba(12,146,83,0.55)] sm:shadow-[0_22px_50px_-10px_rgba(12,146,83,0.65)] z-0 transition-transform duration-300 group-hover:scale-[1.02]" />

              {/* Glowing Bottom Shelf Text Indicator: PERFECTLY CENTERED and UNIFORM */}
              <div className="absolute inset-x-0 -bottom-6 sm:-bottom-7 h-6 sm:h-7 flex items-center justify-center z-0 pointer-events-none px-1 sm:px-4">
                <div className="flex items-center justify-center gap-1 text-center text-white tracking-tight">
                  <Zap className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 text-amber-300 fill-amber-300 shrink-0" />
                  <span className="text-[8.5px] sm:hidden font-extrabold leading-none">{course.shortGlowText || course.glowText}</span>
                  <span className="hidden sm:inline text-xs font-bold">{course.glowText}</span>
                </div>
              </div>

              {/* Main Card Surface: Strict h-full flex flex-col justify-between */}
              <div className="relative z-10 w-full h-full overflow-hidden rounded-[18px] sm:rounded-[22px] bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-3 sm:p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-brand-primary/40">
                <div className="flex-1 flex flex-col">
                  {/* Top Status Header - no truncation */}
                  <div className="mb-2 sm:mb-4 flex flex-wrap items-center justify-between gap-1 text-slate-500 font-medium">
                    <div className="flex items-center gap-1 min-w-0">
                      <span className="inline-block h-2 w-2 rounded-full bg-brand-primary animate-pulse shrink-0" />
                      <span className="font-bold text-slate-800 text-[10px] sm:text-xs leading-none whitespace-nowrap">
                        {course.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-100/90 px-1.5 sm:px-2.5 py-0.5 rounded-full text-slate-600 font-semibold text-[9px] sm:text-[11px] shrink-0">
                      <Clock className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 text-brand-accent shrink-0" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Course Image Visual - consistent aspect ratio */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full shrink-0 overflow-hidden rounded-[14px] sm:rounded-[18px] ring-1 ring-slate-100 bg-slate-50">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-35 transition-opacity" />

                    {/* Popular Badge */}
                    {course.popular && (
                      <div className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[8px] sm:text-[10px] font-extrabold px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md uppercase tracking-wider flex items-center space-x-0.5 sm:space-x-1">
                        <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-white" />
                        <span>Popular</span>
                      </div>
                    )}

                    {/* Pack Tag on Image */}
                    <div className="absolute bottom-1.5 left-1.5 sm:bottom-3 sm:left-3">
                      <span className="px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-xl text-[9px] sm:text-xs font-bold text-white bg-black/65 backdrop-blur-md border border-white/20 shadow-sm">
                        {course.packType}
                      </span>
                    </div>
                  </div>

                  {/* Title & Full Summary */}
                  <div className="mt-2.5 sm:mt-5 text-left space-y-1 sm:space-y-1.5 flex-1 flex flex-col">
                    <h3 className="text-sm sm:text-lg lg:text-xl font-bold font-heading text-brand-primary group-hover:text-brand-primaryHover transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-[10.5px] sm:text-xs text-slate-500 leading-normal font-normal">
                      {course.tagline}
                    </p>
                  </div>
                </div>

                {/* Action Buttons: Pinned to bottom of card, identical alignment across adjacent cards */}
                <div className="mt-3 sm:mt-6 pt-1 flex flex-col sm:grid sm:grid-cols-2 gap-1.5 sm:gap-3">
                  <Link
                    href="/contacts"
                    className="w-full h-8 sm:h-11 px-2 sm:px-3 inline-flex items-center justify-center gap-1.5 rounded-lg sm:rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-brand-primary/40 text-slate-700 font-bold text-[11px] sm:text-xs transition-all shadow-xs hover:shadow-sm"
                  >
                    <Plus className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand-primary shrink-0" />
                    <span>Book Demo</span>
                  </Link>

                  <button
                    onClick={() => handleScrollToPrograms(course.examKey)}
                    className="w-full h-8 sm:h-11 px-2 sm:px-3 inline-flex items-center justify-center gap-1.5 rounded-lg sm:rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-[11px] sm:text-xs shadow-md shadow-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/40 transition-all cursor-pointer"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
