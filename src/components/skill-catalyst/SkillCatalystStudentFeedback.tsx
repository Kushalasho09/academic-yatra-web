"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard, { TestimonialCardProps } from "@/components/ui/TestimonialCard";
import { cn } from "@/lib/utils";

interface FeedbackItem extends TestimonialCardProps {
  id: string;
}

const SKILL_TESTIMONIALS: FeedbackItem[] = [
  {
    id: "sc-1",
    quote:
      "What I liked was learning how technology connects with actual business work. Exploring analytics and digital workflows helped me see how these tools can solve everyday operational problems.",
    name: "Tanvi Desai",
    role: "BizzTech Participant",
    badge: "BizzTech Certified",
    secondaryBadge: "Verified Participant",
    avatar: "/images/avatar_student_skill.jpg",
    rating: 5,
    colorTheme: "blue",
    tiltAngle: "left",
  },
  {
    id: "sc-2",
    quote:
      "I realised that having a degree wasn't enough if I couldn't present myself properly in interviews. Working on my resume, emails, and interview answers helped me understand what I needed to improve.",
    name: "Kunal Mehta",
    role: "Career Essentials Learner",
    badge: "Workplace Ready",
    secondaryBadge: "Verified Participant",
    avatar: "/images/avatar_student_indiv.jpg",
    rating: 5,
    colorTheme: "green",
    tiltAngle: "right",
  },
  {
    id: "sc-3",
    quote:
      "I used to do most of my spreadsheet work manually. Learning formulas, pivot tables, and dashboards showed me how to organise information and complete tasks more efficiently.",
    name: "Pooja Sharma",
    role: "Google Suite Hub Participant",
    badge: "Google Suite Certified",
    secondaryBadge: "Verified Participant",
    avatar: "/images/avatar_student_vikram.jpg",
    rating: 5,
    colorTheme: "teal",
    tiltAngle: "slight-left",
  },
];

export default function SkillCatalystStudentFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % SKILL_TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + SKILL_TESTIMONIALS.length) % SKILL_TESTIMONIALS.length
    );
  };

  // Get 3 consecutive items for responsive multi-card display (1 mobile, 2 tablet, 3 desktop)
  const getVisibleItems = () => {
    const total = SKILL_TESTIMONIALS.length;
    return [
      SKILL_TESTIMONIALS[currentIndex % total],
      SKILL_TESTIMONIALS[(currentIndex + 1) % total],
      SKILL_TESTIMONIALS[(currentIndex + 2) % total],
    ];
  };

  const visibleItems = getVisibleItems();

  return (
    <section className="py-8 sm:py-14 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 relative z-10 overflow-hidden">
      {/* Seamless Top & Bottom Ambient Fade */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-slate-50/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-50/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 sm:mb-8 gap-4">
          <div>
            <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-tight sm:leading-[1.28] tracking-tight">
              <span>What Students Like </span>
              <span className="text-brand-primary block sm:inline">About Academic Yatra<span className="brand-tm">™</span></span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-brand-primary text-brand-navy hover:text-brand-primary flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-brand-primary text-brand-navy hover:text-brand-primary flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel View: 1 Card on Mobile, 2 on Tablet, 3 on Desktop */}
        <div className="relative select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -40) nextTestimonial();
                else if (info.offset.x > 40) prevTestimonial();
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 cursor-grab active:cursor-grabbing"
            >
              {visibleItems.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className={cn(
                    "w-full transition-opacity duration-300",
                    idx === 0 ? "block" : idx === 1 ? "hidden md:block" : "hidden lg:block"
                  )}
                >
                  <TestimonialCard
                    quote={item.quote}
                    name={item.name}
                    role={item.role}
                    avatar={item.avatar}
                    badge={item.badge}
                    secondaryBadge={item.secondaryBadge}
                    rating={item.rating}
                    colorTheme={item.colorTheme}
                    tiltAngle={item.tiltAngle}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {SKILL_TESTIMONIALS.map((_, idx) => (
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
