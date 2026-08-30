"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, Clock, Compass, ShieldCheck, CheckCircle2 } from "lucide-react";
import Card3DTilt from "@/components/Card3DTilt";

interface ComingSoonProps {
  pageTitle?: string;
}

export default function ComingSoon({ pageTitle = "Coming Soon" }: ComingSoonProps) {
  const easeTier1 = [0.16, 1, 0.3, 1];

  return (
    <div className="min-h-[85vh] bg-gradient-to-b from-white via-brand-tint/30 to-brand-greenTint/30 flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Animated Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

      <Card3DTilt maxTilt={8} className="max-w-xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeTier1 }}
          className="glass-card rounded-3xl p-8 sm:p-14 text-center space-y-8 border border-slate-200 shadow-2xl bg-white/95 relative overflow-hidden"
        >
          {/* Subtle Ambient Glow inside card */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-primary/15 rounded-full blur-2xl pointer-events-none" />

          {/* Animated Icon Badge */}
          <motion.div
            animate={{ rotate: [0, 6, -6, 0], y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 rounded-2xl bg-brand-greenTint border-2 border-brand-primary/30 flex items-center justify-center text-brand-primary mx-auto shadow-lg relative"
          >
            <Sparkles className="w-10 h-10 text-brand-primary" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-brand-accent animate-ping" />
          </motion.div>

          <div className="space-y-4 relative z-10">
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 bg-brand-navy text-emerald-300 border border-emerald-500/30 px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Coming Soon • Module Under Construction</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              {pageTitle}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto">
              This section is currently being updated with latest syllabus updates and registration details. You can explore the full interactive Academic Yatra homepage below!
            </p>
          </div>

          {/* Return Button */}
          <div className="pt-2 flex justify-center relative z-10">
            <Link
              href="/"
              className="inline-flex items-center space-x-2.5 bg-brand-primary hover:bg-brand-primaryHover text-white text-sm sm:text-base font-bold px-8 py-4 rounded-full shadow-lg shadow-brand-primary/30 hover:scale-[1.03] active:scale-[0.98] transition-all group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Return To Homepage</span>
            </Link>
          </div>
        </motion.div>
      </Card3DTilt>
    </div>
  );
}
