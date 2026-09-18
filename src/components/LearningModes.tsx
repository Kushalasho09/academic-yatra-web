"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LearningModes() {
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <section className="py-6 sm:py-10 lg:py-12 bg-white relative overflow-hidden">
      {/* Seamless Top & Bottom Ambient Fade */}
      <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-slate-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2 Big Comparative Cards - In a row on both mobile and web */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
          
          {/* Card 1: Individual Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeCurve }}
            className="rounded-2xl sm:rounded-[32px] lg:rounded-[36px] p-3.5 sm:p-6 lg:p-10 border border-slate-200/90 shadow-md sm:shadow-xl overflow-hidden relative flex flex-col justify-center bg-white min-h-[170px] sm:min-h-[260px] lg:min-h-[320px] group"
          >
            {/* Left Content */}
            <div className="space-y-1 sm:space-y-1.5 z-10 max-w-[100px] xs:max-w-[130px] sm:max-w-[200px] lg:max-w-[240px]">
              <h3 className="font-heading text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-[42px] font-extrabold text-brand-navy tracking-tight leading-tight sm:leading-snug lg:leading-[1.24]">
                <span className="block">Individual</span>
                <span className="block">Learning</span>
              </h3>
              <p className="text-[10px] xs:text-xs sm:text-sm text-slate-500 font-medium pt-0.5 sm:pt-1 leading-snug">
                Self-paced + recorded content
              </p>
            </div>

            {/* Right Student Photo with Seamless Fade */}
            <div
              className="absolute right-0 bottom-0 top-0 w-[56%] sm:w-[50%] overflow-hidden pointer-events-none pr-0.5 sm:pr-2"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 12%, rgba(0,0,0,1) 28%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 12%, rgba(0,0,0,1) 28%)",
              }}
            >
              <Image
                src="/images/individual_learning_student.jpg"
                alt="Individual Learning Student"
                fill
                priority
                className="object-cover object-[70%_15%] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* Card 2: Live Classes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeCurve }}
            className="rounded-2xl sm:rounded-[32px] lg:rounded-[36px] p-3.5 sm:p-6 lg:p-10 border border-emerald-200/70 shadow-md sm:shadow-xl overflow-hidden relative flex flex-col justify-center bg-gradient-to-br from-[#E4F6EB] via-[#ECFAF1] to-[#DDF3E6] min-h-[170px] sm:min-h-[260px] lg:min-h-[320px] group"
          >
            {/* Left Content */}
            <div className="space-y-1 sm:space-y-1.5 z-10 max-w-[100px] xs:max-w-[130px] sm:max-w-[200px] lg:max-w-[240px]">
              <h3 className="font-heading text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-[42px] font-extrabold text-brand-navy tracking-tight leading-tight sm:leading-snug lg:leading-[1.24]">
                <span className="block">Live</span>
                <span className="block">Classes</span>
              </h3>
              <p className="text-[10px] xs:text-xs sm:text-sm text-slate-600 font-medium pt-0.5 sm:pt-1 leading-snug">
                Trainer-led structured programs
              </p>
            </div>

            {/* Right Student & Mentor Avatars Grid */}
            <div className="absolute right-2 xs:right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 grid grid-cols-2 gap-1.5 xs:gap-2 sm:gap-2.5 lg:gap-3.5 pointer-events-none select-none">
              
              {/* 1. Top Left Avatar */}
              <div className="relative">
                <div className="w-[42px] h-[56px] xs:w-[50px] xs:h-[66px] sm:w-[70px] sm:h-[92px] lg:w-[88px] lg:h-[114px] rounded-[18px] xs:rounded-[22px] sm:rounded-[32px] lg:rounded-[42px] overflow-hidden border-2 sm:border-[3px] border-white shadow-sm sm:shadow-lg bg-white relative">
                  <Image
                    src="/images/avatar_student_female2.jpg"
                    alt="Student"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Speech bubble "Hello!" */}
                <div className="absolute -top-1.5 -right-2 sm:-top-2 sm:-right-3 z-20 px-1.5 sm:px-2.5 py-0.5 rounded-full bg-white text-[8px] sm:text-xs font-black text-slate-800 shadow-sm border border-slate-100">
                  Hello!
                </div>
              </div>

              {/* 2. Top Right Avatar */}
              <div className="relative">
                <div className="w-[42px] h-[56px] xs:w-[50px] xs:h-[66px] sm:w-[70px] sm:h-[92px] lg:w-[88px] lg:h-[114px] rounded-[18px] xs:rounded-[22px] sm:rounded-[32px] lg:rounded-[42px] overflow-hidden border-2 sm:border-[3px] border-white shadow-sm sm:shadow-lg bg-white relative">
                  <Image
                    src="/images/avatar_tutor_male.jpg"
                    alt="Tutor"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* 3. Bottom Left Avatar */}
              <div className="relative">
                <div className="w-[42px] h-[56px] xs:w-[50px] xs:h-[66px] sm:w-[70px] sm:h-[92px] lg:w-[88px] lg:h-[114px] rounded-[18px] xs:rounded-[22px] sm:rounded-[32px] lg:rounded-[42px] overflow-hidden border-2 sm:border-[3px] border-white shadow-sm sm:shadow-lg bg-white relative">
                  <Image
                    src="/images/avatar_indian_boy.jpg"
                    alt="Student"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Speech bubble "Hola!" */}
                <div className="absolute -bottom-1 -right-2 sm:-bottom-1 sm:-right-3 z-20 px-1.5 sm:px-2.5 py-0.5 rounded-full bg-white text-[8px] sm:text-xs font-black text-slate-800 shadow-sm border border-slate-100">
                  Hola!
                </div>
              </div>

              {/* 4. Bottom Right Avatar */}
              <div className="relative">
                <div className="w-[42px] h-[56px] xs:w-[50px] xs:h-[66px] sm:w-[70px] sm:h-[92px] lg:w-[88px] lg:h-[114px] rounded-[18px] xs:rounded-[22px] sm:rounded-[32px] lg:rounded-[42px] overflow-hidden border-2 sm:border-[3px] border-white shadow-sm sm:shadow-lg bg-white relative">
                  <Image
                    src="/images/avatar_indian_girl.jpg"
                    alt="Student"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
