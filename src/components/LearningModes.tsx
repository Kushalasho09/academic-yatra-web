"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function LearningModes() {
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2 Big Comparative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Individual Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeCurve }}
            className="rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl overflow-hidden relative flex flex-col justify-between bg-white min-h-[280px] sm:min-h-[320px] group"
          >
            {/* Left Content */}
            <div className="space-y-1.5 z-10 max-w-[200px] sm:max-w-[240px]">
              <h3 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-brand-navy tracking-tight leading-[1.06]">
                Individual<br />Learning
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium pt-1">
                Self-paced + recorded content
              </p>
            </div>

            {/* Read More Action Button */}
            <div className="z-10 pt-8">
              <Link
                href="/about-us"
                className="inline-flex items-center space-x-3 select-none group/btn"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-primary group-hover/btn:bg-brand-primaryHover flex items-center justify-center text-white transition-transform group-hover/btn:scale-105 shadow-sm">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <span className="font-heading font-extrabold text-xs sm:text-sm text-brand-navy group-hover/btn:text-brand-primary transition-colors">
                  Read More
                </span>
              </Link>
            </div>

            {/* Right Student Photo with Seamless Fade */}
            <div
              className="absolute right-0 bottom-0 top-0 w-[55%] sm:w-[50%] overflow-hidden pointer-events-none"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 15%, rgba(0,0,0,1) 35%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 15%, rgba(0,0,0,1) 35%)",
              }}
            >
              <Image
                src="/images/individual_learning_student.jpg"
                alt="Individual Learning Student"
                fill
                priority
                className="object-cover object-left-top sm:object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* Card 2: Live Classes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeCurve }}
            className="rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 border border-emerald-200/70 shadow-xl overflow-hidden relative flex flex-col justify-between bg-gradient-to-br from-[#E4F6EB] via-[#ECFAF1] to-[#DDF3E6] min-h-[280px] sm:min-h-[320px] group"
          >
            {/* Left Content */}
            <div className="space-y-1.5 z-10 max-w-[200px] sm:max-w-[240px]">
              <h3 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-brand-navy tracking-tight leading-[1.06]">
                Live<br />Classes
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium pt-1">
                Trainer-led structured programs
              </p>
            </div>

            {/* Read More Action Button */}
            <div className="z-10 pt-8">
              <Link
                href="/about-us"
                className="inline-flex items-center space-x-3 select-none group/btn"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-primary group-hover/btn:bg-brand-primaryHover flex items-center justify-center text-white transition-transform group-hover/btn:scale-105 shadow-sm">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <span className="font-heading font-extrabold text-xs sm:text-sm text-brand-navy group-hover/btn:text-brand-primary transition-colors">
                  Read More
                </span>
              </Link>
            </div>

            {/* Right Student & Mentor Avatars Grid */}
            <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 grid grid-cols-2 gap-2.5 sm:gap-3.5 pointer-events-none select-none">
              
              {/* 1. Top Left Avatar */}
              <div className="relative">
                <div className="w-[72px] h-[96px] sm:w-[88px] sm:h-[114px] rounded-[34px] sm:rounded-[42px] overflow-hidden border-[3px] border-white shadow-lg bg-white relative">
                  <Image
                    src="/images/avatar_student_female2.jpg"
                    alt="Student"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Speech bubble "Hello!" */}
                <div className="absolute -top-2 -right-3 z-20 px-2.5 py-0.5 rounded-full bg-white text-[10px] sm:text-xs font-black text-slate-800 shadow-md border border-slate-100">
                  Hello!
                </div>
              </div>

              {/* 2. Top Right Avatar */}
              <div className="relative">
                <div className="w-[72px] h-[96px] sm:w-[88px] sm:h-[114px] rounded-[34px] sm:rounded-[42px] overflow-hidden border-[3px] border-white shadow-lg bg-white relative">
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
                <div className="w-[72px] h-[96px] sm:w-[88px] sm:h-[114px] rounded-[34px] sm:rounded-[42px] overflow-hidden border-[3px] border-white shadow-lg bg-white relative">
                  <Image
                    src="/images/avatar_indian_boy.jpg"
                    alt="Student"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Speech bubble "Hola!" */}
                <div className="absolute -bottom-1 -right-3 z-20 px-2.5 py-0.5 rounded-full bg-white text-[10px] sm:text-xs font-black text-slate-800 shadow-md border border-slate-100">
                  Hola!
                </div>
              </div>

              {/* 4. Bottom Right Avatar */}
              <div className="relative">
                <div className="w-[72px] h-[96px] sm:w-[88px] sm:h-[114px] rounded-[34px] sm:rounded-[42px] overflow-hidden border-[3px] border-white shadow-lg bg-white relative">
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
