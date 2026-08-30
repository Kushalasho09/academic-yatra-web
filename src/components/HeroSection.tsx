"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-36 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center">
          
          {/* LEFT COLUMN: Typography & Call To Action */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeCurve }}
            className="lg:col-span-5 space-y-6 sm:space-y-7 text-left"
          >
            {/* Subtitle / Eyebrow with Blue Bar */}
            <div className="flex items-center space-x-2.5">
              <span className="w-8 h-[3.5px] bg-brand-accent rounded-full inline-block" />
              <span className="text-brand-accent font-bold text-sm sm:text-base tracking-wide">
                Your Knowledge Is Our Priority
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-brand-navy leading-[1.12] tracking-tight">
              Learn Without Limits
              <br />
              Grow Your{" "}
              <span className="text-brand-accent font-accent italic font-normal">
                Knowledge
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed max-w-md font-normal">
              Become more efficient and gain your knowledge to the next level. Industry-standard courses are for you. Let&apos;s unlock your potential
            </p>

            {/* Primary Action Button */}
            <div className="pt-2">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accentDark text-white font-bold text-base px-9 py-4 rounded-xl shadow-lg shadow-brand-accent/25 hover:shadow-xl hover:shadow-brand-accent/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Us</span>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Lightly Animated Capsule Frames & Geometric Shapes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: easeCurve }}
            className="lg:col-span-7 relative flex items-center justify-center min-h-[520px] sm:min-h-[580px] select-none"
          >
            {/* Visual Wrapper */}
            <div className="relative w-full max-w-[580px] h-[520px] sm:h-[580px] flex items-center justify-center">
              
              {/* 1. BACKGROUND GEOMETRIC SHAPES (Gentle Breathing & Float) */}
              {/* Yellow Circle (Behind Left Capsule) */}
              <motion.div
                animate={{ scale: [1, 1.03, 1], x: [0, -2, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#FDD835] absolute top-12 left-0 sm:left-4 z-0 pointer-events-none"
              />
              
              {/* Small Yellow Accent Dot */}
              <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-3 h-3 rounded-full bg-[#FDD835] absolute top-[52%] -left-3 sm:-left-1 z-0 pointer-events-none"
              />

              {/* Orange Circle (Behind Right Capsule) */}
              <motion.div
                animate={{ scale: [1, 1.03, 1], y: [0, -3, 0] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-44 h-44 sm:w-54 sm:h-54 rounded-full bg-[#FFA726] absolute top-8 right-4 sm:right-10 z-0 pointer-events-none"
              />
              
              {/* Small Orange Accent Dot */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="w-2.5 h-2.5 rounded-full bg-[#FFA726] absolute top-20 right-28 z-0 pointer-events-none"
              />

              {/* Blue Circle (Behind Bottom Right Capsule) */}
              <motion.div
                animate={{ scale: [1, 1.04, 1], y: [0, 4, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#42A5F5] absolute bottom-2 right-0 sm:right-2 z-0 shadow-sm pointer-events-none"
              />
              
              {/* Small Blue Accent Dot */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="w-2.5 h-2.5 rounded-full bg-[#42A5F5] absolute bottom-[38%] right-[-10px] sm:right-[-4px] z-0 pointer-events-none"
              />

              {/* 2. BACKGROUND 4-POINT SPARKLE STARS (Subtle Twinkle & Shimmer) */}
              {/* Top Sparkle Stars Pair */}
              <motion.div
                animate={{ scale: [1, 1.08, 0.96, 1], rotate: [0, 4, -3, 0], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 left-[44%] z-10 pointer-events-none text-slate-500"
              >
                <svg width="60" height="70" viewBox="0 0 60 70" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M28 2L30 14L42 16L30 18L28 30L26 18L14 16L26 14L28 2Z" />
                  <path d="M28 28L31 46L49 49L31 52L28 70L25 52L7 49L25 46L28 28Z" />
                </svg>
              </motion.div>

              {/* Bottom Right Sparkle Stars Pair */}
              <motion.div
                animate={{ scale: [1, 0.95, 1.08, 1], rotate: [0, -3, 4, 0], opacity: [0.6, 0.85, 0.6] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 right-[28%] z-10 pointer-events-none text-slate-500"
              >
                <svg width="60" height="70" viewBox="0 0 60 70" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M30 2L33 20L51 23L33 26L30 44L27 26L9 23L27 20L30 2Z" />
                  <path d="M30 42L32 52L42 54L32 56L30 66L28 56L18 54L28 52L30 42Z" />
                </svg>
              </motion.div>

              {/* 3. LINE ART EMBRACING ARCS */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <svg className="w-full h-full" viewBox="0 0 580 580" fill="none">
                  <path
                    d="M 380 90 C 440 90, 480 150, 480 240 L 480 340 C 480 440, 430 500, 360 510 C 310 515, 270 480, 260 420"
                    stroke="#334155"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    opacity="0.65"
                  />
                  <path
                    d="M 290 55 C 360 55, 410 110, 410 200"
                    stroke="#334155"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    opacity="0.65"
                  />
                </svg>
              </div>

              {/* 4. THE 3 PILL-SHAPED CAPSULES (LIGHTLY ANIMATED FLOATING EFFECT) */}
              <div className="relative z-20 flex items-center justify-center w-full">
                
                {/* CAPSULE 1 (LEFT): Indian Girl Reading Yellow Test Prep Book */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.02 }}
                  className="relative w-[140px] sm:w-[170px] md:w-[185px] h-[330px] sm:h-[390px] md:h-[430px] rounded-full overflow-hidden border-[3px] border-white shadow-xl -mr-5 sm:-mr-8 mt-10 sm:mt-14 z-10 flex-shrink-0 bg-slate-100 transition-shadow duration-300 hover:shadow-2xl"
                >
                  <Image
                    src="/images/hero_left_book.jpg"
                    alt="Student Reading Test Prep Book"
                    fill
                    priority
                    className="object-cover object-[center_20%]"
                  />
                </motion.div>

                {/* Overlapping Bottom-Left Circular Avatar */}
                <motion.div
                  animate={{ y: [0, -4, 0], x: [0, 2, 0] }}
                  transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute left-2 sm:left-4 bottom-14 sm:bottom-16 z-30 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[2.5px] border-[#00BFA5] overflow-hidden shadow-xl bg-white p-[2px] cursor-pointer"
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/images/hero_avatar_bottom.jpg"
                      alt="Student Avatar Bottom Left"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* CAPSULE 2 (CENTER): Indian Girl Typing on Laptop by Window - HERO FOCAL POINT */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.02 }}
                  className="relative w-[165px] sm:w-[200px] md:w-[225px] h-[450px] sm:h-[520px] md:h-[570px] rounded-full overflow-hidden border-[4px] border-white shadow-2xl z-20 flex-shrink-0 bg-slate-100 transition-shadow duration-300 hover:shadow-2xl"
                >
                  <Image
                    src="/images/hero_center_laptop.jpg"
                    alt="Student with Laptop by Window"
                    fill
                    priority
                    className="object-cover object-[center_35%]"
                  />
                </motion.div>

                {/* CAPSULE 3 (RIGHT): Indian Girl Writing Notes at Wooden Desk */}
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative w-[140px] sm:w-[170px] md:w-[185px] h-[330px] sm:h-[390px] md:h-[430px] rounded-full overflow-hidden border-[3px] border-white shadow-xl -ml-5 sm:-ml-8 mt-12 sm:mt-18 z-10 flex-shrink-0 bg-slate-100 transition-shadow duration-300 hover:shadow-2xl"
                >
                  <Image
                    src="/images/hero_right_writing.jpg"
                    alt="Student Writing Notes at Desk"
                    fill
                    priority
                    className="object-cover object-[center_25%]"
                  />
                </motion.div>

                {/* Overlapping Top-Right Circular Avatar */}
                <motion.div
                  animate={{ y: [0, 4, 0], x: [0, -2, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute right-4 sm:right-8 top-16 sm:top-20 z-30 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[2.5px] border-[#00BFA5] overflow-hidden shadow-xl bg-white p-[2px] cursor-pointer"
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/images/hero_avatar_top.jpg"
                      alt="Student Avatar Top Right"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
