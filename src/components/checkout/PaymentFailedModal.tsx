"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  XCircle,
  RotateCcw,
  MessageCircle,
  X,
  ShieldAlert,
  Award,
  Phone,
  Mail,
  HelpCircle,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useCourseCheckout } from "@/context/CourseCheckoutContext";

export default function PaymentFailedModal() {
  const {
    isFailedOpen,
    failedDetails,
    closeFailedModal,
    retryCheckout,
  } = useCourseCheckout();

  if (!isFailedOpen || !failedDetails) return null;

  // Format WhatsApp assistance message
  const whatsappNumber = "919891088200";
  const whatsappText = encodeURIComponent(
    `Hello Academic Yatra Team,\n\nI was attempting to enroll in *${failedDetails.courseName}* (${failedDetails.planName}) for ₹${failedDetails.amount}, but my payment was not completed.\n\nStudent: ${failedDetails.studentName || "Prospective Student"}\nEmail: ${failedDetails.studentEmail || "N/A"}\nReason: ${failedDetails.reason || "Payment Incomplete / Cancelled"}\n\nCould you please help me complete my enrollment or provide alternate payment options?`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
        {/* Soft dark backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeFailedModal}
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
          {/* Empathetic & Alert Ambient Header */}
          <div className="relative bg-gradient-to-b from-rose-600 via-rose-700 to-amber-800 pt-7 pb-8 px-5 sm:px-8 text-white text-center overflow-hidden shrink-0">
            {/* Ambient Background Glows */}
            <div className="absolute -top-10 -left-10 w-44 h-44 bg-rose-400/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={closeFailedModal}
              className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/25 hover:bg-black/40 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Pulsing Animated Alert Hero Icon */}
            <div className="relative inline-flex items-center justify-center mb-2.5">
              {/* Radar expanding wave 1 */}
              <motion.div
                animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border-2 border-rose-300 pointer-events-none"
              />
              {/* Radar expanding wave 2 */}
              <motion.div
                animate={{ scale: [1, 2.3], opacity: [0.3, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.4, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border-2 border-amber-300 pointer-events-none"
              />

              {/* Central Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: [0, 1.2, 0.95, 1], rotate: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-rose-600 flex items-center justify-center shadow-xl shadow-rose-950/40"
              >
                <XCircle className="w-9 h-9 sm:w-10 sm:h-10 text-rose-600 stroke-[2.4]" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-[11px] font-bold text-rose-100 mb-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-200" />
                Payment Not Completed
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white tracking-tight">
                Transaction Cancelled
              </h3>
              <p className="text-rose-100/90 text-xs sm:text-sm mt-0.5 max-w-sm mx-auto">
                Your payment session was cancelled or could not be completed.
              </p>
            </motion.div>
          </div>

          {/* Modal Body */}
          <div className="p-4 sm:p-6 space-y-3.5 overflow-y-auto flex-1 text-left">
            {/* Reassurance Notice */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200/90 text-amber-950 flex items-start gap-3 text-xs leading-relaxed"
            >
              <div className="w-7 h-7 rounded-xl bg-amber-500/20 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-4 h-4 text-amber-700" />
              </div>
              <div>
                <span className="font-bold text-amber-900 block text-xs mb-0.5">
                  Safe & Secure Guarantee:
                </span>
                <span>
                  No charges were deducted. If your bank has debited any funds, they will be automatically reversed to your original payment method in 3–5 business days.
                </span>
              </div>
            </motion.div>

            {/* Course & Attempted Order Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="rounded-2xl p-4 bg-slate-50 border border-slate-200/90 space-y-2.5"
            >
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                <div className="min-w-0 pr-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Course & Plan
                  </span>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center gap-1.5 mt-0.5">
                    <Award className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span className="truncate">{failedDetails.courseName}</span>
                  </div>
                  <div className="mt-1">
                    <span className="inline-block px-2 py-0.5 rounded-md bg-slate-200/80 text-slate-800 font-semibold text-[10px]">
                      {failedDetails.planName}
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Attempted Fee
                  </span>
                  <div className="text-base sm:text-lg font-extrabold text-slate-900">
                    ₹{failedDetails.amount}
                  </div>
                  <span className="text-[10px] font-semibold text-rose-600 block">
                    Unpaid
                  </span>
                </div>
              </div>

              {/* Decline Reason / Status */}
              {failedDetails.reason && (
                <div className="bg-rose-50/70 border border-rose-200/70 rounded-xl p-2.5 text-xs text-rose-900 flex items-start gap-2">
                  <HelpCircle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <span className="font-bold text-[11px] block text-rose-950">Status Reason:</span>
                    <span className="text-[11px] text-rose-800 block break-words">
                      {failedDetails.reason}
                    </span>
                  </div>
                </div>
              )}

              {/* Student Details with Saved indicator */}
              {(failedDetails.studentName || failedDetails.studentPhone || failedDetails.studentEmail) && (
                <div className="pt-2 border-t border-slate-200/70 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-800">
                      {failedDetails.studentName}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                      Details Preserved ✓
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-500">
                    {failedDetails.studentPhone && (
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3 text-slate-400" />
                        {failedDetails.studentCountryCode ? `${failedDetails.studentCountryCode} ` : ""}
                        {failedDetails.studentPhone}
                      </span>
                    )}
                    {failedDetails.studentEmail && (
                      <span className="flex items-center gap-1 hidden sm:flex">
                        <Mail className="w-3 h-3 text-slate-400" />
                        {failedDetails.studentEmail}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="pt-1 space-y-2"
            >
              {/* Primary Retry Button */}
              <button
                type="button"
                onClick={retryCheckout}
                className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-sm shadow-md shadow-emerald-700/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retry Payment (Try Another Method)</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {/* Secondary: Pay via WhatsApp / Support */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl border border-emerald-500/30 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Assistance on WhatsApp</span>
                </a>

                {/* Dismiss Button */}
                <button
                  type="button"
                  onClick={closeFailedModal}
                  className="py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span>Close / Continue Browsing</span>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
