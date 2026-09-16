"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, Users, PlaySquare, FileCheck2 } from "lucide-react";

export default function SkillCatalystLearningExperience() {
  const experiences = [
    {
      icon: Video,
      title: "Live Trainer Sessions",
      badge: "WEEKLY EXPERT-LED LIVE CLASSES",
      subheading: "Interactive Industry Mentorship",
      description:
        "Join weekly live classes conducted by experienced trainers. Interact, ask questions, and get real-time guidance on difficult concepts.",
    },
    {
      icon: Users,
      title: "Interactive Learning Environment",
      badge: "COLLABORATE WITH PEERS",
      subheading: "Community & Peer Engagement",
      description:
        "Engage in a collaborative learning environment with live Q&A, discussion boards, and peer interaction during and after classes.",
    },
    {
      icon: PlaySquare,
      title: "Recorded Lessons for Revision",
      badge: "REVISIT ANYTIME AT YOUR PACE",
      subheading: "24/7 Digital Portal Access",
      description:
        "All live sessions are recorded and stored in your dashboard. Revisit any class or topic whenever you need to revise, at your own pace.",
    },
    {
      icon: FileCheck2,
      title: "Hands-On Capstone Projects",
      badge: "REAL-WORLD PORTFOLIO ASSIGNMENTS",
      subheading: "Interview & Skill Assessments",
      description:
        "Build practical dashboards, podcast presentations, and workplace deliverables reviewed directly by industry veterans.",
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-white relative z-10 overflow-hidden">
      {/* Seamless Top & Bottom Ambient Fade */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-slate-50/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-50/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-4">
          <div className="space-y-2">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-snug sm:leading-[1.28] lg:leading-[1.3] tracking-tight">
              <span className="block mb-1.5 sm:mb-2.5">Learn From Anywhere,</span>
              <span className="text-brand-primary block">Prepare With Confidence</span>
            </h2>
          </div>

          <p className="font-body text-slate-500 text-sm sm:text-base max-w-md leading-relaxed">
            Experience live classes, structured lessons, and guided preparation
            designed around your schedule.
          </p>
        </div>

        {/* 2x2 Grid on Mobile, 4 columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_35px_-8px_rgba(12,146,83,0.14)] hover:border-emerald-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon */}
                  <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-brand-primary mb-3 sm:mb-6 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-xs">
                    <Icon className="w-4 h-4 sm:w-7 sm:h-7" />
                  </div>

                  {/* Title & Badge */}
                  <h3 className="font-heading text-xs sm:text-lg lg:text-xl font-extrabold text-brand-navy leading-snug">
                    {exp.title}
                  </h3>
                  <span className="inline-block text-[8px] sm:text-[10px] lg:text-[11px] font-extrabold text-brand-primary tracking-wider uppercase mt-0.5 sm:mt-1 mb-1.5 sm:mb-4 line-clamp-1">
                    {exp.badge}
                  </span>

                  {/* Subheading & Description */}
                  <h4 className="font-heading font-bold text-[11px] sm:text-sm text-slate-900 mb-1 sm:mb-2 line-clamp-1">
                    {exp.subheading}
                  </h4>
                  <p className="font-body text-slate-600 text-[10px] sm:text-sm leading-snug sm:leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
