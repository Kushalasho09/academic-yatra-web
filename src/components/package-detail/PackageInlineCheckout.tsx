"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Star,
  Plus,
  ArrowRight,
  Zap,
  AlertCircle,
  Lock,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  MessageCircle,
  QrCode,
  Building2,
  Sparkles,
  Download,
  Calendar,
  LogOut,
  UserCheck,
  ExternalLink,
  Check,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface CoursePlanCard {
  id: string;
  category: string;
  duration: string;
  title: string;
  packType: string;
  popular?: boolean;
  badge?: string;
  theme: "mint" | "lime" | "lavender";
  tagline: string;
  description: string;
  image: string;
  glowText: string;
  priceFormatted: string;
  monthlyPrice: string;
  rating: string;
  reviewsCount: string;
  features: { text: string; included: boolean }[];
  level: "Beginner" | "Intermediate" | "Advanced";
}

const IELTS_CARDS: CoursePlanCard[] = [
  {
    id: "self-prep",
    category: "IELTS Academic",
    duration: "6 Months Access",
    title: "Self-Prep Pack",
    packType: "Self Preparation Pack",
    popular: false,
    theme: "mint",
    tagline: "Best for self-paced independent learners",
    description: "60 sectional tests, 15 mock tests, 20+ hrs video, 500+ grammar/vocab lessons.",
    image: "/images/subscription_self_prep.jpg",
    glowText: "Target Band 7.5+ with Cambridge AI Mocks",
    priceFormatted: "₹13,899.00",
    monthlyPrice: "₹2,316/m • 6 months (incl. 18% GST)",
    rating: "4.7",
    reviewsCount: "356 reviews",
    features: [
      { text: "60 sectional tests", included: true },
      { text: "15 mock tests", included: true },
      { text: "20+ hrs video lessons", included: true },
      { text: "500+ grammar/vocab lessons", included: true },
      { text: "Live interactive masterclasses", included: false },
    ],
    level: "Beginner",
  },
  {
    id: "champ",
    category: "IELTS Academic",
    duration: "6 Months Access",
    title: "Champion Pack",
    packType: "Champion Pack",
    popular: true,
    badge: "Popular",
    theme: "lime",
    tagline: "100 hrs live lectures & single batch timing",
    description: "1 batch timing, 100 hrs live lectures, 60 sectional tests, 15 mock tests, 20+ hrs video.",
    image: "/images/subscription_champion_live.jpg",
    glowText: "Target Band 7.5+ with Cambridge AI Mocks",
    priceFormatted: "₹25,999.00",
    monthlyPrice: "₹4,333/m • 6 months (incl. 18% GST)",
    rating: "4.8",
    reviewsCount: "236 reviews",
    features: [
      { text: "1 batch timing", included: true },
      { text: "100 hrs live lectures", included: true },
      { text: "60 sectional tests", included: true },
      { text: "15 mock tests", included: true },
      { text: "20+ hrs video lessons", included: true },
    ],
    level: "Intermediate",
  },
  {
    id: "champ-plus",
    category: "IELTS Academic",
    duration: "6 Months Access",
    title: "Champion Pack +",
    packType: "Champion Pack +",
    popular: false,
    theme: "lavender",
    tagline: "All 3 batch timings & complete flexibility",
    description: "All 3 batch timings (morning/afternoon/evening), 100 hrs live lectures, 60 sectional tests, 15 mock tests.",
    image: "/images/subscription_champion_plus.jpg",
    glowText: "Target Band 7.5+ with Cambridge AI Mocks",
    priceFormatted: "₹28,999.00",
    monthlyPrice: "₹4,833/m • 6 months (incl. 18% GST)",
    rating: "4.9",
    reviewsCount: "576 reviews",
    features: [
      { text: "All 3 batch timings (M/A/E)", included: true },
      { text: "100 hrs live lectures", included: true },
      { text: "60 sectional tests", included: true },
      { text: "15 mock tests", included: true },
      { text: "20+ hrs video lessons", included: true },
    ],
    level: "Advanced",
  },
];

interface PackageInlineCheckoutProps {
  onOpenDemo: () => void;
  categoryName?: string;
}

export default function PackageInlineCheckout({
  onOpenDemo,
  categoryName,
}: PackageInlineCheckoutProps) {
  const currentCategory = categoryName || "IELTS Academic";
  const activeCards = React.useMemo(() => {
    return IELTS_CARDS.map((card) => ({
      ...card,
      category: currentCategory,
    }));
  }, [currentCategory]);

  // Selected course plan
  const [selectedPlan, setSelectedPlan] = useState<CoursePlanCard>(() => ({
    ...IELTS_CARDS[1],
    category: currentCategory,
  }));

  // Update selected plan if category changes
  useEffect(() => {
    setSelectedPlan((prev) => ({
      ...prev,
      category: currentCategory,
    }));
  }, [currentCategory]);

  // Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [adminNote, setAdminNote] = useState("");

  // Payment State
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "netbanking">("upi");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const checkoutRef = useRef<HTMLDivElement>(null);

  const handleSelectPlan = (plan: CoursePlanCard) => {
    setSelectedPlan(plan);
    setIsPaymentSuccessful(false);
    setTimeout(() => {
      checkoutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  // Step 1: Sign in or Register
  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaAnswer.trim() !== "8") {
      alert("Please solve the human verification correctly (7 + 1 = 8)");
      return;
    }
    // Set logged in and switch view to checkout card only!
    setIsLoggedIn(true);
    if (!fullName) {
      setFullName(username.split("@")[0] || "Student User");
    }
  };

  // Step 2: Final Payment
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setIsPaymentSuccessful(true);
      setTimeout(() => {
        checkoutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }, 1200);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsPaymentSuccessful(false);
    setUsername("");
    setPassword("");
    setCaptchaAnswer("");
  };

  return (
    <section className="py-14 sm:py-20 bg-white relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-left mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Enrollment Pathways</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-snug tracking-tight">
            Choose Your <span className="text-emerald-600">{currentCategory} Plan</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal max-w-xl">
            Select the course pack below to begin your checkout instantly without leaving the page.
          </p>
        </div>

        {/* 3 Course Cards Grid matching Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch pb-12">
          {activeCards.map((course) => {
            const isSelected = selectedPlan?.id === course.id;
            const isLime = course.theme === "lime";

            // Box tint classes matching the reference image
            const boxBgClass =
              course.theme === "mint"
                ? "bg-[#F0F9EE] border-emerald-100/80"
                : course.theme === "lime"
                ? "bg-[#F8F9E4] border-lime-200/80"
                : "bg-[#F7EEF5] border-pink-200/70";

            return (
              <div
                key={course.id}
                onClick={() => handleSelectPlan(course)}
                className={cn(
                  "relative rounded-[32px] p-6 sm:p-8 bg-white border flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1 cursor-pointer group text-left",
                  isSelected
                    ? "border-emerald-500 ring-2 ring-emerald-500/30 shadow-xl shadow-emerald-500/10"
                    : isLime
                    ? "border-lime-300 shadow-lg md:-translate-y-1.5"
                    : "border-slate-200/80"
                )}
              >
                <div>
                  {/* Top Header: Title & Subtitle */}
                  <div className="text-left">
                    <h3 className="font-heading font-extrabold text-2xl sm:text-[28px] text-slate-900 tracking-tight">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-normal mt-1 leading-relaxed">
                      {course.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="relative mt-6 mb-4 text-left">
                    {/* Highlight Badge (matching "until may" in reference image) */}
                    {course.badge && (
                      <div className="absolute -top-3.5 right-2 sm:right-4 z-10">
                        <span className="inline-block bg-[#D4F938] text-slate-900 text-[11px] font-black px-3 py-0.5 rounded-full -rotate-6 shadow-xs select-none uppercase tracking-wider">
                          {course.badge}
                        </span>
                      </div>
                    )}

                    <div className="flex items-baseline gap-1">
                      <span className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-none">
                        {course.priceFormatted.replace(".00", "")}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-500 font-medium ml-1">
                        {course.monthlyPrice}
                      </span>
                    </div>
                  </div>

                  {/* Tinted Features Box (Signature Reference UI Element) */}
                  <div className={cn("rounded-2xl p-4 sm:p-5 my-5 border", boxBgClass)}>
                    <div className="space-y-2.5">
                      {course.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-[13px]">
                          {feat.included ? (
                            <div className="w-4 h-4 rounded-full bg-emerald-100 border border-emerald-500 text-emerald-600 flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                            </div>
                          ) : (
                            <div className="w-4 h-4 rounded-full bg-rose-100 border border-rose-300 text-rose-500 flex items-center justify-center shrink-0">
                              <X className="w-2.5 h-2.5 stroke-[3.5]" />
                            </div>
                          )}

                          <span
                            className={cn(
                              "leading-snug flex-1",
                              feat.included
                                ? "text-slate-700 font-medium"
                                : "text-slate-400 font-normal line-through"
                            )}
                          >
                            {feat.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Description below features box */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed my-4 text-left font-normal">
                    {course.description}
                  </p>
                </div>

                {/* Action Button: BUY NOW (per explicit user instruction) */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectPlan(course);
                    }}
                    className={cn(
                      "w-full py-3.5 px-6 rounded-full font-bold text-sm flex items-center justify-center transition-all shadow-sm active:scale-[0.98] cursor-pointer",
                      isLime
                        ? "bg-[#D4F938] hover:bg-[#cbf133] text-slate-950 font-black shadow-lime-500/20"
                        : "bg-[#111827] hover:bg-black text-white"
                    )}
                  >
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* INLINE CHECKOUT SECTION (DIRECTLY BELOW SUBSCRIPTION CARDS) */}
        <div ref={checkoutRef} className="pt-8 scroll-mt-24">
          <AnimatePresence mode="wait">
            
            {/* ========================================================================= */}
            {/* CASE 1: PAYMENT SUCCESSFUL STATE                                          */}
            {/* ========================================================================= */}
            {isPaymentSuccessful ? (
              <motion.div
                key="payment-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-8 sm:p-14 border border-emerald-200 shadow-2xl text-center space-y-7 max-w-3xl mx-auto relative overflow-hidden"
              >
                {/* Decorative Top Accent */}
                <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600" />

                {/* Animated Success Badge */}
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner shadow-emerald-200">
                  <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-800">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Transaction Confirmed</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
                    Payment Successful! 🎉
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
                    Congratulations <strong>{fullName || username || "Student"}</strong>! Your enrollment in{" "}
                    <span className="text-emerald-700 font-bold">{selectedPlan.category} — {selectedPlan.packType}</span> has been confirmed.
                  </p>
                </div>

                {/* Receipt Details Box */}
                <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/90 text-left max-w-xl mx-auto space-y-3.5">
                  <div className="flex justify-between items-center text-xs sm:text-sm border-b border-slate-200 pb-2.5">
                    <span className="text-slate-500">Order ID:</span>
                    <span className="font-mono font-bold text-slate-800">#AY-2026-9842</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm border-b border-slate-200 pb-2.5">
                    <span className="text-slate-500">Amount Paid:</span>
                    <span className="font-bold text-emerald-600 text-base">{selectedPlan.priceFormatted}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm border-b border-slate-200 pb-2.5">
                    <span className="text-slate-500">Program Duration:</span>
                    <span className="font-semibold text-slate-800">{selectedPlan.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-slate-500">Access Status:</span>
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded text-xs">
                      Active • 6 Months Full LMS Access
                    </span>
                  </div>
                </div>

                {/* Post-Enrollment Action Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-2">
                  <a
                    href="https://web.whatsapp.com/send?phone=+919403892981&text=Hi%20Academic%20Yatra,%20I%20have%20completed%20my%20enrollment%20for%20IELTS%20Academic%20Champion%20Pack%20+.%20Please%20assign%20my%20batch."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Join Official WhatsApp Batch</span>
                  </a>

                  <button
                    onClick={() => alert("Downloading official payment receipt & enrollment summary PDF...")}
                    className="py-3 px-4 rounded-xl border border-slate-200 hover:border-emerald-300 bg-white text-slate-700 font-bold text-xs sm:text-sm shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-emerald-600" />
                    <span>Download Invoice (PDF)</span>
                  </button>
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={() => {
                      setIsPaymentSuccessful(false);
                      setIsLoggedIn(false);
                    }}
                    className="text-xs text-slate-400 hover:text-slate-600 underline cursor-pointer"
                  >
                    Enroll in another package or log out
                  </button>
                </div>
              </motion.div>
            ) : (

              /* ========================================================================= */
              /* CASE 2: USER IS LOGGED IN -> SHOW CHECKOUT CARD ONLY (NO SIGN IN CARD)    */
              /* ========================================================================= */
              isLoggedIn ? (
                <motion.div
                  key="checkout-only"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  {/* Verified Student Header Strip */}
                  <div className="w-full p-4 rounded-2xl border border-emerald-200 bg-emerald-50/80 text-emerald-800 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <UserCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>
                        Logged in as <strong className="font-bold text-slate-900">{fullName || username}</strong> ({username || "student@academicyatra.com"})
                      </span>
                    </div>

                    <button
                      onClick={handleLogout}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-emerald-300 bg-white text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Switch Account</span>
                    </button>
                  </div>

                  {/* Two-Column Checkout Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Direct Payment Method Card */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-xl text-left space-y-6">
                      <div className="pb-3 border-b border-slate-100">
                        <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                          Final Step
                        </span>
                        <h3 className="text-2xl font-bold font-heading text-slate-900 mt-0.5">
                          Select Payment Method
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                          Complete your enrollment to unlock immediate LMS course access.
                        </p>
                      </div>

                      <form onSubmit={handlePaymentSubmit} className="space-y-5">
                        {/* Payment Method Selector Tabs */}
                        <div className="grid grid-cols-3 gap-3">
                          <button
                            type="button"
                            onClick={() => setPaymentMethod("upi")}
                            className={cn(
                              "p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all cursor-pointer",
                              paymentMethod === "upi"
                                ? "border-emerald-500 bg-emerald-50/50 text-emerald-900 ring-2 ring-emerald-500/20 font-bold shadow-xs"
                                : "border-slate-200 hover:border-slate-300 text-slate-600"
                            )}
                          >
                            <QrCode className="w-5 h-5 text-emerald-600" />
                            <span className="text-xs font-semibold">UPI / QR</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setPaymentMethod("card")}
                            className={cn(
                              "p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all cursor-pointer",
                              paymentMethod === "card"
                                ? "border-emerald-500 bg-emerald-50/50 text-emerald-900 ring-2 ring-emerald-500/20 font-bold shadow-xs"
                                : "border-slate-200 hover:border-slate-300 text-slate-600"
                            )}
                          >
                            <CreditCard className="w-5 h-5 text-emerald-600" />
                            <span className="text-xs font-semibold">Card</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setPaymentMethod("netbanking")}
                            className={cn(
                              "p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all cursor-pointer",
                              paymentMethod === "netbanking"
                                ? "border-emerald-500 bg-emerald-50/50 text-emerald-900 ring-2 ring-emerald-500/20 font-bold shadow-xs"
                                : "border-slate-200 hover:border-slate-300 text-slate-600"
                            )}
                          >
                            <Building2 className="w-5 h-5 text-emerald-600" />
                            <span className="text-xs font-semibold">NetBanking</span>
                          </button>
                        </div>

                        {/* Payment Details Container */}
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-3">
                          {paymentMethod === "upi" && (
                            <div className="space-y-2">
                              <label className="block font-bold text-slate-700">
                                UPI ID / VPA *
                              </label>
                              <input
                                type="text"
                                placeholder="yourname@okhdfcbank or @paytm"
                                defaultValue="student@upi"
                                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-emerald-500"
                              />
                              <p className="text-[11px] text-slate-500">
                                Supported: Google Pay, PhonePe, Paytm, CRED, BHIM &amp; all bank apps.
                              </p>
                            </div>
                          )}

                          {paymentMethod === "card" && (
                            <div className="space-y-2.5">
                              <div>
                                <label className="block font-bold text-slate-700 mb-1">
                                  Card Number *
                                </label>
                                <input
                                  type="text"
                                  placeholder="4532 •••• •••• 8920"
                                  defaultValue="4532 8920 1284 9281"
                                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-emerald-500"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <label className="block font-bold text-slate-700 mb-1">Expiry</label>
                                  <input
                                    type="text"
                                    placeholder="MM/YY"
                                    defaultValue="08/29"
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-emerald-500"
                                  />
                                </div>
                                <div>
                                  <label className="block font-bold text-slate-700 mb-1">CVV</label>
                                  <input
                                    type="password"
                                    placeholder="•••"
                                    defaultValue="894"
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-emerald-500"
                                  />
                                </div>
                              </div>
                            </div>
                          )}

                          {paymentMethod === "netbanking" && (
                            <div className="space-y-2">
                              <label className="block font-bold text-slate-700">
                                Select Bank *
                              </label>
                              <select className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-emerald-500">
                                <option>HDFC Bank</option>
                                <option>State Bank of India</option>
                                <option>ICICI Bank</option>
                                <option>Axis Bank</option>
                                <option>Kotak Mahindra Bank</option>
                              </select>
                            </div>
                          )}
                        </div>

                        {/* Note to administrator */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Batch Preference &amp; Target Band
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Evening Batch (7 PM), Target Band 7.5..."
                            value={adminNote}
                            onChange={(e) => setAdminNote(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500"
                          />
                        </div>

                        {/* Pay Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={isProcessingPayment}
                            className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                          >
                            {isProcessingPayment ? (
                              <>
                                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Authorizing Payment...</span>
                              </>
                            ) : (
                              <>
                                <Lock className="w-4 h-4" />
                                <span>Pay {selectedPlan.priceFormatted} &amp; Start Learning</span>
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl text-left space-y-5">
                      <h3 className="text-xl font-bold font-heading text-slate-900 pb-3 border-b border-slate-100">
                        Your order
                      </h3>

                      <div className="flex items-center justify-between gap-4 py-2">
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className="relative w-16 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/80">
                            <Image
                              src={selectedPlan.image || "/images/subscription_champion_live.jpg"}
                              alt={selectedPlan.packType}
                              fill
                              unoptimized
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm font-bold text-slate-900 truncate">
                              {selectedPlan.packType}
                            </h4>
                            <span className="text-xs text-slate-400">
                              {selectedPlan.category} ({selectedPlan.duration})
                            </span>
                          </div>
                        </div>

                        <span className="text-sm font-bold text-emerald-600 shrink-0">
                          {selectedPlan.priceFormatted}
                        </span>
                      </div>

                      <div className="space-y-2 pt-4 border-t border-slate-100 text-sm">
                        <div className="flex justify-between text-slate-600">
                          <span>Subtotal</span>
                          <span className="font-semibold text-emerald-600">
                            {selectedPlan.priceFormatted}
                          </span>
                        </div>
                        <div className="flex justify-between text-slate-900 text-base font-bold pt-2 border-t border-slate-100">
                          <span>Total</span>
                          <span className="font-extrabold text-emerald-600 text-lg">
                            {selectedPlan.priceFormatted}
                          </span>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs text-slate-500 space-y-1.5">
                        <div className="flex items-center gap-2 text-slate-800 font-semibold">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          <span>100% Encrypted &amp; Authorized</span>
                        </div>
                        <p className="text-[11px] leading-relaxed">
                          Instant access to LMS dashboard, mock test simulations, and Cambridge trainer batch.
                        </p>
                      </div>

                      <a
                        href={`https://web.whatsapp.com/send?phone=+919403892981&text=${encodeURIComponent(
                          `Hi Academic Yatra, I am completing enrollment for ${selectedPlan.category} - ${selectedPlan.packType} (${selectedPlan.priceFormatted}). Please confirm batch timings.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl border border-slate-200 hover:border-emerald-400 bg-white text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
                      >
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                        <span>Pay or Query via WhatsApp (+91 94038 92981)</span>
                      </a>
                    </div>

                  </div>
                </motion.div>
              ) : (

                /* ========================================================================= */
                /* CASE 3: USER NOT LOGGED IN -> SHOW RED ALERT & SIGN IN / REGISTER FORM   */
                /* ========================================================================= */
                <motion.div
                  key="auth-required"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  {/* Red Error / Alert Strip matching Image 2 */}
                  <div className="w-full p-4 rounded-xl border border-red-200 bg-red-50/70 text-red-700 flex items-center gap-3 text-xs sm:text-sm font-medium shadow-xs">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <span>Please login in to enroll in the course!</span>
                  </div>

                  {/* Two-Column Layout: Sign In Form + Order Summary */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Sign In / Account Form matching Image 2 */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-lg text-left space-y-6">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <h3 className="text-2xl font-bold font-heading text-slate-900">
                          {authMode === "signin" ? "Sign in" : "New Student"}
                        </h3>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setAuthMode("signin")}
                            className={cn(
                              "text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer",
                              authMode === "signin"
                                ? "bg-slate-900 text-white"
                                : "text-slate-500 hover:bg-slate-100"
                            )}
                          >
                            Sign in
                          </button>
                          <button
                            type="button"
                            onClick={() => setAuthMode("signup")}
                            className={cn(
                              "text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer",
                              authMode === "signup"
                                ? "bg-slate-900 text-white"
                                : "text-slate-500 hover:bg-slate-100"
                            )}
                          >
                            New Student
                          </button>
                        </div>
                      </div>

                      <form onSubmit={handleAuthSubmit} className="space-y-4">
                        {authMode === "signup" && (
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Rahul Sharma"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                            />
                          </div>
                        )}

                        {/* Username or Email */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Username or email *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Email or username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                          />
                        </div>

                        {/* Password */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Password *
                          </label>
                          <input
                            type="password"
                            required
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                          />
                        </div>

                        {/* Remember Me & Lost Password */}
                        <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                          <label className="flex items-center gap-2 cursor-pointer select-none">
                            <input
                              type="checkbox"
                              checked={rememberMe}
                              onChange={(e) => setRememberMe(e.target.checked)}
                              className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                            />
                            <span>Remember me</span>
                          </label>

                          <a
                            href="#lost-password"
                            onClick={(e) => {
                              e.preventDefault();
                              alert("Password reset instructions have been sent to your email.");
                            }}
                            className="text-slate-500 hover:text-emerald-700 transition-colors"
                          >
                            Lost password?
                          </a>
                        </div>

                        {/* Prove Your Humanity Captcha matching Image 2 */}
                        <div className="pt-2">
                          <label className="block text-xs text-slate-500 font-medium mb-1.5">
                            Prove your humanity
                          </label>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-slate-700">7 + 1 =</span>
                            <input
                              type="number"
                              required
                              placeholder="?"
                              value={captchaAnswer}
                              onChange={(e) => setCaptchaAnswer(e.target.value)}
                              className="w-16 px-3 py-1.5 rounded-lg border border-slate-200 text-sm text-center font-bold focus:outline-none focus:border-emerald-500"
                            />
                            <span className="text-[11px] text-slate-400">(Answer: 8)</span>
                          </div>
                        </div>

                        {/* Sign up toggle prompt */}
                        <div className="pt-1 text-xs text-slate-600">
                          {authMode === "signin" ? (
                            <span>
                              Don&apos;t have an account?{" "}
                              <button
                                type="button"
                                onClick={() => setAuthMode("signup")}
                                className="text-emerald-600 font-bold hover:underline cursor-pointer"
                              >
                                Sign up.
                              </button>
                            </span>
                          ) : (
                            <span>
                              Already have an account?{" "}
                              <button
                                type="button"
                                onClick={() => setAuthMode("signin")}
                                className="text-emerald-600 font-bold hover:underline cursor-pointer"
                              >
                                Sign in.
                              </button>
                            </span>
                          )}
                        </div>

                        {/* Note to Administrator matching Image 2 */}
                        <div className="pt-3">
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Note to administrator
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Add any specific requirements, preferred batch timing or queries..."
                            value={adminNote}
                            onChange={(e) => setAdminNote(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                          />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <Lock className="w-4 h-4" />
                            <span>Continue to Checkout →</span>
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* Right Column: Your Order matching Image 2 */}
                    <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg text-left space-y-5">
                      <h3 className="text-xl font-bold font-heading text-slate-900 pb-3 border-b border-slate-100">
                        Your order
                      </h3>

                      <div className="flex items-center justify-between gap-4 py-2">
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className="relative w-16 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/80">
                            <Image
                              src={selectedPlan.image || "/images/subscription_champion_live.jpg"}
                              alt={selectedPlan.packType}
                              fill
                              unoptimized
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm font-bold text-slate-900 truncate">
                              {selectedPlan.packType}
                            </h4>
                            <span className="text-xs text-slate-400">
                              {selectedPlan.category} ({selectedPlan.duration})
                            </span>
                          </div>
                        </div>

                        <span className="text-sm font-bold text-emerald-600 shrink-0">
                          {selectedPlan.priceFormatted}
                        </span>
                      </div>

                      <div className="space-y-2 pt-4 border-t border-slate-100 text-sm">
                        <div className="flex justify-between text-slate-600">
                          <span>Subtotal</span>
                          <span className="font-semibold text-emerald-600">
                            {selectedPlan.priceFormatted}
                          </span>
                        </div>
                        <div className="flex justify-between text-slate-900 text-base font-bold pt-2 border-t border-slate-100">
                          <span>Total</span>
                          <span className="font-extrabold text-emerald-600 text-lg">
                            {selectedPlan.priceFormatted}
                          </span>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-500 space-y-1.5">
                        <div className="flex items-center gap-2 text-slate-700 font-semibold">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          <span>100% Secure Checkout</span>
                        </div>
                        <p className="text-[11px] leading-relaxed">
                          Includes 6 Months LMS Access, Cambridge Tests, Trainer Reviews &amp; Recorded Sessions.
                        </p>
                      </div>

                      <a
                        href={`https://web.whatsapp.com/send?phone=+919403892981&text=${encodeURIComponent(
                          `Hi Academic Yatra, I would like to enroll in ${selectedPlan.category} - ${selectedPlan.packType} (${selectedPlan.priceFormatted}). Please guide me on payment options.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl border border-slate-200 hover:border-emerald-400 bg-white text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs hover:shadow-sm"
                      >
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                        <span>Pay or Query via WhatsApp (+91 94038 92981)</span>
                      </a>
                    </div>

                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
