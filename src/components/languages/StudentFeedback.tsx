"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard, { TestimonialCardProps } from "@/components/ui/TestimonialCard";
import { cn } from "@/lib/utils";

interface LanguageFeedbackItem extends TestimonialCardProps {
  id: string;
}

const TESTIMONIALS: LanguageFeedbackItem[] = [
  {
    id: "lang-1",
    quote:
      "The IELTS training was well-structured and easy to follow. The mock tests helped me identify areas for improvement and build confidence before the exam.",
    name: "Geeta Verma",
    role: "IELTS Academic Student",
    badge: "IELTS Band 8.0",
    secondaryBadge: "Verified Student",
    avatar: "/images/avatar_student_female2.jpg",
    rating: 5,
    colorTheme: "blue",
    tiltAngle: "left",
  },
  {
    id: "lang-2",
    quote:
      "Learning German with Academic Yatra gave me conversational fluency faster than I anticipated. The native-level vocabulary drills made visa interviews effortless.",
    name: "Neha Gupta",
    role: "German B2 Aspirant",
    badge: "Goethe-Zertifikat B2",
    secondaryBadge: "Verified Student",
    avatar: "/images/avatar_indian_girl.jpg",
    rating: 5,
    colorTheme: "green",
    tiltAngle: "right",
  },
  {
    id: "lang-3",
    quote:
      "I was struggling with the speaking section before joining. The personalized feedback and practice sessions helped me improve steadily. Honestly, it made a big difference.",
    name: "Ansh Sharma",
    role: "PTE Academic Student",
    badge: "PTE Score 79+",
    secondaryBadge: "Verified Student",
    avatar: "/images/avatar_indian_boy.jpg",
    rating: 5,
    colorTheme: "teal",
    tiltAngle: "slight-left",
  },
  {
    id: "lang-4",
    quote:
      "The performance reports and live doubt clearing helped me focus on weak listening areas. I saw real improvement in my scores within weeks.",
    name: "Rithvik Kumar",
    role: "TOEFL iBT Student",
    badge: "TOEFL 112 / 120",
    secondaryBadge: "Verified Student",
    avatar: "/images/avatar_tutor_male.jpg",
    rating: 5,
    colorTheme: "indigo",
    tiltAngle: "slight-right",
  },
  {
    id: "lang-5",
    quote:
      "French interactive speaking batches helped me improve my communication and accent. I feel much more confident living and working abroad now.",
    name: "Farhan Querashi",
    role: "French B1 Learner",
    badge: "DELF B1 Certified",
    secondaryBadge: "Verified Student",
    avatar: "/images/avatar_indian_boy.jpg",
    rating: 5,
    colorTheme: "blue",
    tiltAngle: "right",
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

  const getVisibleItems = () => {
    const total = TESTIMONIALS.length;
    return [
      TESTIMONIALS[currentIndex % total],
      TESTIMONIALS[(currentIndex + 1) % total],
      TESTIMONIALS[(currentIndex + 2) % total],
    ];
  };

  const visibleItems = getVisibleItems();

  return (
    <section className="py-10 sm:py-16 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 relative z-10 overflow-hidden">
      {/* Seamless Top & Bottom Ambient Fade */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-slate-50/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-50/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 gap-4">
          <div>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-tight sm:leading-[1.28] tracking-tight">
              <span>What Students Like </span>
              <span className="text-brand-primary block sm:inline">About Academic Yatra</span>
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
