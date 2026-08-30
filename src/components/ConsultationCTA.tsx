"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ConsultationCTA() {
  const easeCurve = [0.16, 1, 0.3, 1];
  const whatsappUrl =
    "http://wa.me/919286844550?text=Hi,%20I%20would%20like%20to%20speak%20with%20an%20academic%20counselor%20regarding%20test%20preparation%20and%20study%20abroad%20programs.";

  return (
    <section className="py-20 sm:py-24 bg-[#0A1120] text-white relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Main Heading: Bold Green */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="font-heading text-4xl sm:text-5xl lg:text-[64px] font-black text-brand-primary tracking-tight leading-tight"
        >
          Start Your Journey Today
        </motion.h2>

        {/* Subtitle with Underline Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeCurve }}
          className="inline-block"
        >
          <div className="font-heading text-lg sm:text-2xl lg:text-[26px] font-black text-white tracking-tight pb-1">
            Don&apos;t wait for opportunities — prepare for them.
          </div>
          <div className="h-[2.5px] bg-brand-accent w-full rounded-full mt-0.5" />
        </motion.div>

        {/* 2 Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeCurve }}
          className="flex flex-wrap items-center justify-center gap-4 pt-6"
        >
          {/* Button 1: Book 5 Day Demo */}
          <Link
            href="/contacts"
            className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-xl bg-[#1B273D] hover:bg-[#253552] text-white font-heading font-extrabold text-xs sm:text-sm border border-slate-700/80 transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <ArrowRight className="w-4 h-4 text-slate-300" />
            <span>Book 5 Day Demo</span>
          </Link>

          {/* Button 2: Book Free Consultation */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-xl bg-[#1B273D] hover:bg-[#253552] text-white font-heading font-extrabold text-xs sm:text-sm border border-slate-700/80 transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <ArrowRight className="w-4 h-4 text-slate-300" />
            <span>Book Free Consultation</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
