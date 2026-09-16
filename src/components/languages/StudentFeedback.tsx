"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeedbackItem {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

const TESTIMONIALS: FeedbackItem[] = [
  {
    quote:
      "The IELTS training was well-structured and easy to follow. The mock tests helped me identify areas for improvement and build confidence before the exam.",
    name: "Geeta",
    role: "IELTS Academic Student",
    avatar: "/images/avatar_student_female2.jpg",
    rating: 5,
  },
  {
    quote:
      "The program introduced me to practical business and technology concepts that I could immediately apply during my internship.",
    name: "Neha Gupta",
    role: "BizzTech Participant",
    avatar: "/images/avatar_indian_girl.jpg",
    rating: 5,
  },
  {
    quote:
      "I was struggling with the speaking section before joining. The personalized feedback and practice sessions helped me improve steadily. Honestly, it made a big difference.",
    name: "Ansh",
    role: "PTE Academic Student",
    avatar: "/images/avatar_indian_boy.jpg",
    rating: 5,
  },
  {
    quote:
      "The performance reports helped me focus on weak areas. I saw real improvement in my scores within weeks.",
    name: "Rithvik Kumar",
    role: "TOEFL Student",
    avatar: "/images/avatar_tutor_male.jpg",
    rating: 5,
  },
  {
    quote:
      "Career Essentials helped me improve my communication and presentation skills. I feel much more confident during interviews and group discussions , now looking back it was definitely worth it.",
    name: "Farhan Querashi",
    role: "Career Essentials Learner",
    avatar: "/images/avatar_indian_boy.jpg",
    rating: 5,
  },
];

export default function StudentFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-8 sm:py-12 bg-white relative z-10 overflow-hidden">
      {/* Seamless Top & Bottom Ambient Fade */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-slate-50/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-50/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
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

        {/* Testimonials Grid / Display (2x2 on mobile, 5 on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
          {TESTIMONIALS.map((item, idx) => {
            const isHighlighted = idx === currentIndex;
            // On mobile, show 4 cards in a neat 2x2 grid
            const isFifthOnMobile = idx === 4;

            return (
              <motion.div
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer group bg-white",
                  isFifthOnMobile && "hidden md:flex",
                  isHighlighted
                    ? "border-brand-primary shadow-[0_16px_35px_-8px_rgba(12,146,83,0.18)] -translate-y-1 sm:-translate-y-1.5 ring-2 ring-brand-primary/20"
                    : "border-slate-200/90 shadow-xs hover:border-emerald-300 hover:shadow-md"
                )}
              >
                <div>
                  {/* Green Quote Box Icon */}
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-brand-primary text-white flex items-center justify-center mb-2.5 sm:mb-5 shadow-xs group-hover:scale-105 transition-transform">
                    <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="font-body text-slate-700 text-[10px] sm:text-xs lg:text-sm leading-snug sm:leading-relaxed font-normal italic line-clamp-3 sm:line-clamp-4">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-3 sm:pt-6 mt-3 sm:mt-6 border-t border-slate-100 flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-emerald-100 shrink-0 bg-slate-100">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-heading font-extrabold text-xs sm:text-sm text-brand-navy truncate">
                      {item.name}
                    </p>
                    <p className="text-[9px] sm:text-[11px] text-slate-500 truncate font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                idx === currentIndex
                  ? "w-8 bg-brand-primary"
                  : "w-2.5 bg-slate-200 hover:bg-slate-300"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
