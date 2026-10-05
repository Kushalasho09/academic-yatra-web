"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Copy,
  Check,
  Printer,
  Sparkles,
  Mail,
  Phone,
  Calendar,
  X,
  ShieldCheck,
  Building2,
  ArrowRight,
  Award,
} from "lucide-react";
import { useCourseCheckout } from "@/context/CourseCheckoutContext";

// Confetti particle definition
const CONFETTI_PARTICLES = Array.from({ length: 32 }, (_, i) => ({
  id: i,
  x: Math.sin(i * 1.3) * 160 + (i % 2 === 0 ? 30 : -30),
  y: -20 - (i % 6) * 15,
  fallY: 180 + (i % 5) * 45,
  size: 4 + (i % 4) * 2.5,
  color: [
    "#34D399", // emerald
    "#FBBF24", // amber
    "#F472B6", // pink
    "#60A5FA", // blue
    "#A78BFA", // violet
    "#D8F946", // lime
    "#38BDF8", // cyan
  ][i % 7],
  rotation: (i * 45) % 360,
  delay: (i % 8) * 0.08,
  duration: 1.8 + (i % 4) * 0.4,
}));

export default function PaymentSuccessModal() {
  const { isSuccessOpen, successDetails, closeSuccessModal } = useCourseCheckout();
  const [isCopied, setIsCopied] = useState(false);

  if (!isSuccessOpen || !successDetails) return null;

  const handleCopyId = () => {
    if (successDetails.paymentId) {
      navigator.clipboard.writeText(successDetails.paymentId);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
        {/* Celebratory Backdrop with ambient blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeSuccessModal}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 25 }}
          transition={{ type: "spring", damping: 24, stiffness: 280 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden z-10 my-auto text-slate-800 flex flex-col max-h-[92vh]"
        >
          {/* Confetti & Glowing Ambient Header */}
          <div className="relative bg-gradient-to-b from-emerald-600 via-emerald-700 to-teal-800 pt-7 pb-8 px-5 sm:px-8 text-white text-center overflow-hidden shrink-0">
            {/* Ambient Background Glows */}
            <div className="absolute -top-10 -left-10 w-44 h-44 bg-lime-400/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-teal-300/25 rounded-full blur-3xl pointer-events-none" />

            {/* Falling Animated Confetti Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {CONFETTI_PARTICLES.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{
                    x: p.x,
                    y: p.y,
                    rotate: 0,
                    opacity: 1,
                    scale: 0.5,
                  }}
                  animate={{
                    x: p.x + (p.id % 2 === 0 ? 25 : -25),
                    y: p.fallY,
                    rotate: p.rotation + 360,
                    opacity: [1, 1, 0],
                    scale: [0.5, 1, 0.8],
                  }}
                  transition={{
                    duration: p.duration,
                    delay: p.delay,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeOut",
                  }}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "0%",
                    width: `${p.size}px`,
                    height: `${p.size * (p.id % 3 === 0 ? 1.8 : 1)}px`,
                    backgroundColor: p.color,
                    borderRadius: p.id % 3 === 0 ? "2px" : "50%",
                  }}
                />
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={closeSuccessModal}
              className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/25 hover:bg-black/40 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Pulsing Animated Success Hero Checkmark */}
            <div className="relative inline-flex items-center justify-center mb-2.5">
              {/* Radar expanding wave 1 */}
              <motion.div
                animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border-2 border-emerald-300 pointer-events-none"
              />
              {/* Radar expanding wave 2 */}
              <motion.div
                animate={{ scale: [1, 2.4], opacity: [0.4, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.4, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border-2 border-lime-300 pointer-events-none"
              />

              {/* Central Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: [0, 1.25, 0.95, 1], rotate: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-xl shadow-emerald-900/40"
              >
                <CheckCircle2 className="w-9 h-9 sm:w-10 sm:h-10 text-emerald-600 stroke-[2.6]" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-[11px] font-bold text-lime-200 mb-1.5">
                <Sparkles className="w-3 h-3 text-lime-300" />
                Payment Confirmed
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white tracking-tight">
                Congratulations! 🎉
              </h3>
              <p className="text-emerald-100 text-xs sm:text-sm mt-0.5 max-w-sm mx-auto">
                Your course enrollment is officially confirmed.
              </p>
            </motion.div>
          </div>

          {/* Modal Body */}
          <div className="p-4 sm:p-6 space-y-3.5 overflow-y-auto flex-1">
            {/* Student & Course Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl p-4 bg-slate-50 border border-slate-200/90 text-left space-y-2.5"
            >
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Enrolled Student
                  </span>
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                    {successDetails.studentName}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Total Paid
                  </span>
                  <div className="text-base sm:text-lg font-extrabold text-emerald-700">
                    ₹{successDetails.amount}
                  </div>
                </div>
              </div>

              {/* Course Info */}
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{successDetails.courseName}</span>
                </div>
                <div className="text-[11px] text-slate-600 flex items-center gap-2">
                  <span className="inline-block px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-semibold text-[10px]">
                    {successDetails.planName}
                  </span>
                  {successDetails.validityText && (
                    <span className="text-slate-500">• {successDetails.validityText}</span>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="pt-2 border-t border-slate-200/70 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-1.5 truncate">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">
                    {successDetails.studentCountryCode ? `${successDetails.studentCountryCode} ` : "+91 "}
                    {successDetails.studentPhone}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 truncate">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{successDetails.studentEmail}</span>
                </div>
              </div>
            </motion.div>

            {/* Official Company Message Box */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="rounded-2xl p-3.5 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/90 text-left flex gap-3 items-start"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="space-y-0.5 text-xs">
                <h5 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1">
                  Academic Yatra / Future Yatra Private Limited
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                </h5>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  Our admissions team will send you an official email shortly with your student portal credentials, batch schedule, and tax invoice.
                </p>
              </div>
            </motion.div>

            {/* Transaction Metadata Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-2.5 border border-slate-200 text-xs flex flex-wrap items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400 font-medium">Payment ID:</span>
                <span className="font-mono text-xs font-bold text-slate-800">
                  {successDetails.paymentId}
                </span>
                <button
                  type="button"
                  onClick={handleCopyId}
                  className="p-1 rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                  title="Copy Payment ID"
                >
                  {isCopied ? (
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 font-bold bg-emerald-100 px-1.5 py-0.5 rounded">
                      <Check className="w-3 h-3 text-emerald-600" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-1 text-[11px] text-slate-500">
                <Calendar className="w-3 h-3 text-slate-400" />
                <span>{successDetails.timestamp}</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="pt-1 flex flex-col sm:flex-row gap-2.5"
            >
              <button
                type="button"
                onClick={handlePrint}
                className="flex-1 py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer min-h-[42px]"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                <span>Print / Save Receipt</span>
              </button>

              <button
                type="button"
                onClick={closeSuccessModal}
                className="flex-1 py-3 px-5 rounded-xl bg-slate-900 hover:bg-black text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer min-h-[42px]"
              >
                <span>Continue Learning</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
