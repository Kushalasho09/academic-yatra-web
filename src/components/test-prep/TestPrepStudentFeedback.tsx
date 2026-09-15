"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeedbackItem {
  quote: string;
  name: string;
  role: string;
  score: string;
  university: string;
  avatar: string;
  rating: number;
}

const TEST_PREP_TESTIMONIALS: FeedbackItem[] = [
  {
    quote:
      "The Digital SAT prep with Academic Yatra was a game changer. The Desmos calculator shortcuts and adaptive module drills helped me score 1540 on my first attempt!",
    name: "Aarav Kapoor",
    role: "Digital SAT Student",
    score: "Score: 1540 / 1600",
    university: "Admitted to UC Berkeley (EECS)",
    avatar: "/images/avatar_indian_boy.jpg",
    rating: 5,
  },
  {
    quote:
      "GRE verbal used to seem insurmountable with all the archaic words. Academic Yatra's mnemonic flashcards and ETS question traps broke it down into simple logic. Scored 329 with 169 in Quant!",
    name: "Sneha Mukherjee",
    role: "GRE General Student",
    score: "Score: 329 / 340 (Q169, V160)",
    university: "Admitted to Georgia Tech (MS CS)",
    avatar: "/images/avatar_student_female2.jpg",
    rating: 5,
  },
  {
    quote:
      "Balancing a consulting job with GMAT prep was tough. The weekend executive batch and Data Insights breakdown gave me the exact edge I needed for 715 on the GMAT Focus Edition.",
    name: "Vikram Malhotra",
    role: "GMAT Focus Aspirant",
    score: "Score: 715 / 805 (99th Percentile)",
    university: "Admitted to INSEAD MBA",
    avatar: "/images/avatar_tutor_male.jpg",
    rating: 5,
  },
  {
    quote:
      "The integrated GRE + IELTS package made my entire application process frictionless. Clear performance tracking and live doubt clearing kept me accountable throughout.",
    name: "Rhea Chawla",
    role: "GRE + IELTS Combo Student",
    score: "Score: GRE 324 | IELTS 8.0",
    university: "Admitted to University of Toronto",
    avatar: "/images/avatar_indian_girl.jpg",
    rating: 5,
  },
];

export default function TestPrepStudentFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TEST_PREP_TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TEST_PREP_TESTIMONIALS.length) % TEST_PREP_TESTIMONIALS.length
    );
  };

  return (
    <section className="py-10 sm:py-14 bg-white relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-brand-primary mb-1">
              Student Results &amp; Testimonials
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-snug sm:leading-[1.28] lg:leading-[1.3] tracking-tight">
              <span className="block mb-1.5 sm:mb-2.5">What Students Like</span>
              <span className="text-brand-primary block">About Academic Yatra</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-brand-primary text-brand-navy hover:text-brand-primary flex items-center justify-center transition-all shadow-xs cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-brand-primary text-brand-navy hover:text-brand-primary flex items-center justify-center transition-all shadow-xs cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel View */}
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Quote Column */}
            <div className="lg:col-span-8 space-y-6">
              <Quote className="w-10 h-10 text-brand-primary/40 rotate-180" />
              <p className="font-heading text-lg sm:text-2xl text-slate-800 font-semibold leading-relaxed">
                &ldquo;{TEST_PREP_TESTIMONIALS[currentIndex].quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-2">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-primary/40 shadow-sm shrink-0 relative">
                  <Image
                    src={TEST_PREP_TESTIMONIALS[currentIndex].avatar}
                    alt={TEST_PREP_TESTIMONIALS[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-base sm:text-lg text-brand-navy">
                    {TEST_PREP_TESTIMONIALS[currentIndex].name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    {TEST_PREP_TESTIMONIALS[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Badge / University Admit Card */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold mb-2">
                  {TEST_PREP_TESTIMONIALS[currentIndex].score}
                </span>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <Award className="w-4 h-4 text-brand-primary" />
                  <span>{TEST_PREP_TESTIMONIALS[currentIndex].university}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
