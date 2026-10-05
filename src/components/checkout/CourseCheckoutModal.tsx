"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  User,
  GraduationCap,
  Clock,
  Layers,
  AlertCircle,
  ChevronDown,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useCourseCheckout } from "@/context/CourseCheckoutContext";
import { CheckoutPlanItem } from "@/types/checkout";

export interface CountryCodeItem {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

export const COUNTRY_CODES: CountryCodeItem[] = [
  { name: "India", code: "IN", dialCode: "+91", flag: "🇮🇳" },
  { name: "United States", code: "US", dialCode: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "GB", dialCode: "+44", flag: "🇬🇧" },
  { name: "Canada", code: "CA", dialCode: "+1", flag: "🇨🇦" },
  { name: "Australia", code: "AU", dialCode: "+61", flag: "🇦🇺" },
  { name: "United Arab Emirates", code: "AE", dialCode: "+971", flag: "🇦🇪" },
  { name: "Germany", code: "DE", dialCode: "+49", flag: "🇩🇪" },
  { name: "Singapore", code: "SG", dialCode: "+65", flag: "🇸🇬" },
  { name: "New Zealand", code: "NZ", dialCode: "+64", flag: "🇳🇿" },
  { name: "Saudi Arabia", code: "SA", dialCode: "+966", flag: "🇸🇦" },
  { name: "Qatar", code: "QA", dialCode: "+974", flag: "🇶🇦" },
  { name: "Kuwait", code: "KW", dialCode: "+965", flag: "🇰🇼" },
  { name: "Oman", code: "OM", dialCode: "+968", flag: "🇴🇲" },
  { name: "Bahrain", code: "BH", dialCode: "+973", flag: "🇧🇭" },
  { name: "Ireland", code: "IE", dialCode: "+353", flag: "🇮🇪" },
  { name: "France", code: "FR", dialCode: "+33", flag: "🇫🇷" },
  { name: "Nepal", code: "NP", dialCode: "+977", flag: "🇳🇵" },
  { name: "Bangladesh", code: "BD", dialCode: "+880", flag: "🇧🇩" },
  { name: "Sri Lanka", code: "LK", dialCode: "+94", flag: "🇱🇰" },
  { name: "Malaysia", code: "MY", dialCode: "+60", flag: "🇲🇾" },
  { name: "Philippines", code: "PH", dialCode: "+63", flag: "🇵🇭" },
  { name: "Nigeria", code: "NG", dialCode: "+234", flag: "🇳🇬" },
  { name: "South Africa", code: "ZA", dialCode: "+27", flag: "🇿🇦" },
  { name: "Pakistan", code: "PK", dialCode: "+92", flag: "🇵🇰" },
];

// Clean number parser for currency strings like "₹13,899.00", "16,299", "₹9,499.00/month", etc.
function parsePrice(price: string | number): number {
  if (typeof price === "number") return Math.round(price);
  if (!price) return 0;
  const cleaned = price.toString().replace(/₹|,|\s/g, "");
  const match = cleaned.match(/^[0-9]+(?:\.[0-9]+)?/);
  if (match) {
    const num = parseFloat(match[0]);
    return isNaN(num) ? 0 : Math.round(num);
  }
  const fallback = parseFloat(cleaned);
  return isNaN(fallback) ? 0 : Math.round(fallback);
}

export default function CourseCheckoutModal() {
  const {
    isOpen,
    activeCourse,
    closeCheckout,
    cachedInfo,
    updateCachedInfo,
    openSuccessModal,
    openFailedModal,
  } = useCourseCheckout();

  const [selectedPlanId, setSelectedPlanId] = useState<string>("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Country Code Dropdown State
  const [selectedCountry, setSelectedCountry] = useState<CountryCodeItem>(COUNTRY_CODES[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");

  const filteredCountries = COUNTRY_CODES.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.dialCode.includes(countrySearch) ||
      c.code.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  // Sync state when modal opens or activeCourse changes
  useEffect(() => {
    if (activeCourse && activeCourse.plans.length > 0) {
      const defaultId =
        activeCourse.defaultPlanId ||
        activeCourse.plans.find((p) => p.isFeatured)?.id ||
        activeCourse.plans[0].id;
      setSelectedPlanId(defaultId);
    }
  }, [activeCourse]);

  // Load cached student details
  useEffect(() => {
    if (isOpen) {
      setFirstName(cachedInfo.firstName || "");
      setLastName(cachedInfo.lastName || "");
      setPhone(cachedInfo.phone || "");
      setEmail(cachedInfo.email || "");
      if (cachedInfo.countryCode) {
        const found = COUNTRY_CODES.find((c) => c.dialCode === cachedInfo.countryCode);
        if (found) setSelectedCountry(found);
      }
      setErrors({});
      setIsLoading(false);
      setIsCountryDropdownOpen(false);
      setCountrySearch("");
    }
  }, [isOpen, cachedInfo]);

  if (!isOpen || !activeCourse) return null;

  const currentPlan: CheckoutPlanItem =
    activeCourse.plans.find((p) => p.id === selectedPlanId) ||
    activeCourse.plans[0];

  const numericPrice = parsePrice(currentPlan?.price || 0);
  const formattedPrice = numericPrice.toLocaleString("en-IN");

  // Handle inputs with automatic caching
  const handleInputChange = (
    field: "firstName" | "lastName" | "phone" | "email",
    value: string
  ) => {
    if (field === "firstName") setFirstName(value);
    if (field === "lastName") setLastName(value);
    if (field === "phone") setPhone(value);
    if (field === "email") setEmail(value);

    // Save to context / sessionStorage cache
    updateCachedInfo({ [field]: value });

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!firstName.trim()) errs.firstName = "First name is required";
    if (!lastName.trim()) errs.lastName = "Last name is required";
    if (!email.trim() || !email.includes("@")) {
      errs.email = "Valid email is required";
    }
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (!cleanPhone || cleanPhone.length < 6) {
      errs.phone = "Enter a valid phone number";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Dynamically load Razorpay SDK
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if ((window as any).Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleProceedToPay = async () => {
    if (!validate()) return;

    setIsLoading(true);

    const studentFullName = `${firstName.trim()} ${lastName.trim()}`;
    const cleanPhone = phone.replace(/[^0-9]/g, "");

    // Check if test key is present
    const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

    // Load Razorpay Checkout JS
    const isScriptLoaded = await loadRazorpayScript();

    if (razorpayKey && isScriptLoaded) {
      try {
        let razorpayOrderId = "";

        // Try creating server-side order with Razorpay
        try {
          const res = await fetch("/api/razorpay/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              amount: numericPrice,
              currency: "INR",
              notes: {
                courseName: activeCourse.courseName,
                planName: currentPlan.name,
                studentName: studentFullName,
                studentEmail: email.trim(),
                studentPhone: cleanPhone,
                countryCode: selectedCountry.dialCode,
              },
            }),
          });
          const data = await res.json();
          if (data?.order?.id) {
            razorpayOrderId = data.order.id;
          }
        } catch (fetchErr) {
          console.warn("Could not create server order, fallback to client checkout:", fetchErr);
        }

        let paymentSucceeded = false;

        const options: any = {
          key: razorpayKey,
          amount: numericPrice * 100, // Amount in paise
          currency: "INR",
          name: "Academic Yatra",
          description: `${activeCourse.courseName} - ${currentPlan.name}`,
          image: "/images/academic_yatra_logo.png",
          prefill: {
            name: studentFullName,
            email: email.trim(),
            contact: cleanPhone,
          },
          notes: {
            courseName: activeCourse.courseName,
            planName: currentPlan.name,
            countryCode: selectedCountry.dialCode,
            validity: currentPlan.validityText || currentPlan.duration || "Standard Access",
          },
          theme: {
            color: "#059669", // emerald-600
          },
          handler: async function (response: any) {
            paymentSucceeded = true;
            setIsLoading(false);

            // Verify payment signature on backend
            if (response?.razorpay_signature && response?.razorpay_order_id) {
              try {
                await fetch("/api/razorpay/verify-payment", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                  }),
                });
              } catch (vErr) {
                console.warn("Payment verification log:", vErr);
              }
            }

            closeCheckout();
            openSuccessModal({
              paymentId: response.razorpay_payment_id || `pay_${Date.now()}`,
              orderId: response.razorpay_order_id || razorpayOrderId,
              studentName: studentFullName,
              studentEmail: email.trim(),
              studentPhone: cleanPhone,
              studentCountryCode: selectedCountry.dialCode,
              courseName: activeCourse.courseName,
              planName: currentPlan.name,
              amount: formattedPrice,
              validityText: currentPlan.validityText || currentPlan.duration,
              timestamp: new Date().toLocaleString("en-IN", {
                dateStyle: "medium",
                timeStyle: "short",
              }),
            });
          },
          modal: {
            ondismiss: function () {
              setIsLoading(false);
              if (!paymentSucceeded) {
                closeCheckout();
                openFailedModal({
                  courseName: activeCourse.courseName,
                  planName: currentPlan.name,
                  amount: formattedPrice,
                  studentName: studentFullName,
                  studentEmail: email.trim(),
                  studentPhone: cleanPhone,
                  studentCountryCode: selectedCountry.dialCode,
                  reason: "Payment window was closed or cancelled before completion. No money was deducted.",
                  code: "PAYMENT_CANCELLED",
                });
              }
            },
          },
        };

        if (razorpayOrderId) {
          options.order_id = razorpayOrderId;
        }

        const razorpayInstance = new (window as any).Razorpay(options);

        // Listen for explicit payment failure event from Razorpay
        razorpayInstance.on("payment.failed", function (response: any) {
          paymentSucceeded = false;
          setIsLoading(false);
          closeCheckout();
          openFailedModal({
            courseName: activeCourse.courseName,
            planName: currentPlan.name,
            amount: formattedPrice,
            studentName: studentFullName,
            studentEmail: email.trim(),
            studentPhone: cleanPhone,
            studentCountryCode: selectedCountry.dialCode,
            reason: response?.error?.description || "Payment failed or was declined by the bank.",
            code: response?.error?.code || "PAYMENT_FAILED",
          });
        });

        razorpayInstance.open();
        return;
      } catch (err: any) {
        console.error("Razorpay open error:", err);
        setIsLoading(false);
        closeCheckout();
        openFailedModal({
          courseName: activeCourse.courseName,
          planName: currentPlan.name,
          amount: formattedPrice,
          studentName: studentFullName,
          studentEmail: email.trim(),
          studentPhone: cleanPhone,
          studentCountryCode: selectedCountry.dialCode,
          reason: err?.message || "Failed to initialize payment gateway. Please try again.",
          code: "INIT_ERROR",
        });
        return;
      }
    }

    // Fallback / Simulated Test Mode (when key is pending or in testing)
    setTimeout(() => {
      setIsLoading(false);
      closeCheckout();
      openSuccessModal({
        paymentId: `pay_test_${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
        orderId: `order_${Math.random().toString(36).substring(2, 9)}`,
        studentName: studentFullName,
        studentEmail: email.trim(),
        studentPhone: cleanPhone,
        studentCountryCode: selectedCountry.dialCode,
        courseName: activeCourse.courseName,
        planName: currentPlan.name,
        amount: formattedPrice,
        validityText: currentPlan.validityText || currentPlan.duration,
        timestamp: new Date().toLocaleString("en-IN", {
          dateStyle: "medium",
          timeStyle: "short",
        }),
      });
    }, 900);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeCheckout}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        />

        {/* Dialog Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 30 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-xl lg:max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden z-10 text-slate-800 flex flex-col max-h-[92vh] sm:max-h-[88vh]"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 px-4 sm:px-6 py-3.5 sm:py-4.5 text-white flex items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-nowrap">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 truncate max-w-[130px] sm:max-w-none">
                    {activeCourse.category || "Course"}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-emerald-300/90 font-medium flex items-center gap-1 shrink-0 whitespace-nowrap">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    Instant Access
                  </span>
                </div>
                <h3 className="text-sm sm:text-lg font-bold font-heading text-white mt-0.5 truncate">
                  {activeCourse.courseName}
                </h3>
              </div>
            </div>

            <button
              onClick={closeCheckout}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto flex-1">
            {/* Step 1: Course Plan Selector (Responsive: Mobile Rows vs Desktop Cards) */}
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-2.5">
                <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-600" />
                  Select Your Plan / Batch
                </label>
                <span className="text-[11px] sm:text-xs font-semibold text-emerald-600">
                  {activeCourse.plans.length} Option{activeCourse.plans.length > 1 ? "s" : ""} Available
                </span>
              </div>

              {/* Mobile View: Compact App-style Selection Tiles */}
              <div className="space-y-2 sm:hidden">
                {activeCourse.plans.map((plan) => {
                  const isSelected = plan.id === selectedPlanId;
                  const planNumeric = parsePrice(plan.price);
                  return (
                    <div
                      key={`mob-${plan.id}`}
                      onClick={() => setSelectedPlanId(plan.id)}
                      className={cn(
                        "relative rounded-xl p-3 cursor-pointer transition-all border text-left flex items-center justify-between gap-3 active:scale-[0.99]",
                        isSelected
                          ? "border-emerald-600 bg-emerald-50/70 shadow-xs ring-2 ring-emerald-500/40"
                          : "border-slate-200 bg-slate-50/50 hover:bg-slate-50"
                      )}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={cn(
                            "w-4 h-4 rounded-full border flex items-center justify-center shrink-0",
                            isSelected
                              ? "border-emerald-600 bg-emerald-600 text-white"
                              : "border-slate-300 bg-white"
                          )}
                        >
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-xs text-slate-900 truncate">
                              {plan.name}
                            </h4>
                            {plan.badge && (
                              <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-lime-300 text-slate-900 shrink-0">
                                {plan.badge}
                              </span>
                            )}
                          </div>
                          {plan.duration && (
                            <span className="text-[10px] text-slate-500 block truncate">
                              {plan.duration} • {plan.validityText || "Portal Access"}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="font-extrabold text-sm text-slate-900 block leading-tight">
                          ₹{planNumeric.toLocaleString("en-IN")}
                        </span>
                        <span className="text-[9px] text-slate-400">Total fee</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Desktop View: 3-column cards */}
              <div className="hidden sm:grid sm:grid-cols-3 gap-3">
                {activeCourse.plans.map((plan) => {
                  const isSelected = plan.id === selectedPlanId;
                  const planNumeric = parsePrice(plan.price);
                  return (
                    <div
                      key={plan.id}
                      onClick={() => setSelectedPlanId(plan.id)}
                      className={`relative rounded-2xl p-4 cursor-pointer transition-all duration-200 border text-left flex flex-col justify-between ${
                        isSelected
                          ? "border-emerald-600 bg-emerald-50/50 shadow-md ring-2 ring-emerald-500/40"
                          : "border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50"
                      }`}
                    >
                      {plan.badge && (
                        <span className="absolute -top-2.5 right-3 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-lime-300 text-slate-900 shadow-xs">
                          {plan.badge}
                        </span>
                      )}

                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-sm text-slate-900">
                            {plan.name}
                          </h4>
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? "border-emerald-600 bg-emerald-600 text-white"
                                : "border-slate-300"
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                        </div>

                        {plan.duration && (
                          <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                            <Clock className="w-3 h-3 text-slate-400" />
                            <span>{plan.duration}</span>
                          </div>
                        )}
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-200/60">
                        <div className="text-base font-extrabold text-slate-900">
                          ₹{planNumeric.toLocaleString("en-IN")}
                        </div>
                        <div className="text-[10px] text-slate-500">
                          {plan.validityText || plan.period || "All-inclusive"}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Student Details Form */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-emerald-600" />
                  Student Contact Information
                </label>
                <span className="text-[10px] sm:text-[11px] text-slate-400">
                  Pre-filled in Razorpay
                </span>
              </div>

              {/* First Name & Last Name (Side by side on both mobile & desktop) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Rahul"
                      value={firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className={`w-full pl-8 pr-2.5 py-2 sm:py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors ${
                        errors.firstName
                          ? "border-red-400 bg-red-50/30 focus:border-red-500"
                          : "border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      }`}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-[10px] text-red-500 mt-0.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Sharma"
                      value={lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className={`w-full pl-8 pr-2.5 py-2 sm:py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors ${
                        errors.lastName
                          ? "border-red-400 bg-red-50/30 focus:border-red-500"
                          : "border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      }`}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-[10px] text-red-500 mt-0.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="relative">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-stretch">
                    {/* Country Code Dropdown Trigger */}
                    <button
                      type="button"
                      onClick={() => setIsCountryDropdownOpen((prev) => !prev)}
                      className="flex flex-row items-center gap-1.5 px-3 py-2.5 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer select-none text-xs font-semibold text-slate-800 shrink-0 whitespace-nowrap"
                      aria-label="Select country code"
                    >
                      <span className="text-base leading-none select-none">{selectedCountry.flag}</span>
                      <span className="font-semibold text-slate-800 tracking-tight leading-none whitespace-nowrap">
                        {selectedCountry.dialCode}
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 text-slate-400 transition-transform duration-200 ml-0.5",
                          isCountryDropdownOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Phone Input */}
                    <input
                      type="tel"
                      placeholder={selectedCountry.dialCode === "+91" ? "9876543210" : "Phone number"}
                      value={phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`w-full px-3 py-2.5 rounded-r-xl border text-sm focus:outline-none transition-colors ${
                        errors.phone
                          ? "border-red-400 bg-red-50/30 focus:border-red-500"
                          : "border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      }`}
                    />

                    {/* Country Dropdown Menu */}
                    <AnimatePresence>
                      {isCountryDropdownOpen && (
                        <>
                          <div
                            className="fixed inset-0 z-30"
                            onClick={() => setIsCountryDropdownOpen(false)}
                          />
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-1.5 w-64 max-h-64 bg-white rounded-2xl shadow-2xl border border-slate-200 z-40 flex flex-col overflow-hidden text-left"
                          >
                            <div className="p-2 border-b border-slate-100 bg-slate-50/90 sticky top-0">
                              <div className="relative">
                                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                                <input
                                  type="text"
                                  placeholder="Search country..."
                                  value={countrySearch}
                                  onChange={(e) => setCountrySearch(e.target.value)}
                                  className="w-full pl-8 pr-2 py-1.5 text-xs bg-white rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-500"
                                  autoFocus
                                />
                              </div>
                            </div>
                            <div className="overflow-y-auto max-h-48 divide-y divide-slate-100/60 py-1">
                              {filteredCountries.length === 0 ? (
                                <div className="p-3 text-center text-xs text-slate-400">
                                  No country found
                                </div>
                              ) : (
                                filteredCountries.map((c) => (
                                  <button
                                    key={`${c.code}-${c.dialCode}`}
                                    type="button"
                                    onClick={() => {
                                      setSelectedCountry(c);
                                      setIsCountryDropdownOpen(false);
                                      setCountrySearch("");
                                      updateCachedInfo({ countryCode: c.dialCode });
                                    }}
                                    className={cn(
                                      "w-full px-3 py-2 flex items-center justify-between text-xs hover:bg-emerald-50/70 transition-colors text-left cursor-pointer",
                                      selectedCountry.code === c.code &&
                                        selectedCountry.dialCode === c.dialCode &&
                                        "bg-emerald-50 font-bold text-emerald-800"
                                    )}
                                  >
                                    <span className="flex items-center gap-2 truncate pr-2">
                                      <span className="text-sm shrink-0">{c.flag}</span>
                                      <span className="truncate text-slate-800">{c.name}</span>
                                    </span>
                                    <span className="font-mono text-slate-500 font-semibold shrink-0">
                                      {c.dialCode}
                                    </span>
                                  </button>
                                ))
                              )}
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="rahul@example.com"
                      value={email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.email
                          ? "border-red-400 bg-red-50/30 focus:border-red-500"
                          : "border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Price Summary Breakdown */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-600">
                <span>Selected Plan:</span>
                <span className="font-semibold text-slate-800">{currentPlan.name}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Course Access:</span>
                <span className="font-semibold text-slate-800">
                  {currentPlan.validityText || currentPlan.duration || "Portal Access Included"}
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>GST:</span>
                <span className="font-semibold text-slate-800">18% (Included in total)</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex items-baseline justify-between">
                <span className="text-sm font-bold text-slate-900">Total Payable:</span>
                <div className="text-right">
                  <span className="text-xl font-extrabold text-slate-900 font-heading">
                    ₹{formattedPrice}
                  </span>
                  <span className="text-[10px] text-slate-500 block">All-inclusive fee</span>
                </div>
              </div>
            </div>

            {/* CTA Button & Security Badge */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleProceedToPay}
                disabled={isLoading}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-base shadow-lg shadow-emerald-700/25 hover:shadow-xl hover:shadow-emerald-700/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Launching Secure Checkout...
                  </span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Proceed to Pay ₹{formattedPrice}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  256-Bit SSL Encrypted
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-semibold text-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  Powered by Razorpay
                </span>
                <span>•</span>
                <span>Instant Confirmation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
