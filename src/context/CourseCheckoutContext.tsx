"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  CheckoutCourseData,
  CachedStudentInfo,
  PaymentSuccessDetails,
  PaymentFailedDetails,
} from "@/types/checkout";

interface CourseCheckoutContextType {
  isOpen: boolean;
  activeCourse: CheckoutCourseData | null;
  openCheckout: (data: CheckoutCourseData) => void;
  closeCheckout: () => void;
  
  // Cached student form info
  cachedInfo: CachedStudentInfo;
  updateCachedInfo: (info: Partial<CachedStudentInfo>) => void;
  clearCachedInfo: () => void;

  // Success Modal
  isSuccessOpen: boolean;
  successDetails: PaymentSuccessDetails | null;
  openSuccessModal: (details: PaymentSuccessDetails) => void;
  closeSuccessModal: () => void;

  // Failed / Cancelled Modal
  isFailedOpen: boolean;
  failedDetails: PaymentFailedDetails | null;
  openFailedModal: (details: PaymentFailedDetails) => void;
  closeFailedModal: () => void;
  retryCheckout: () => void;
}

const STORAGE_KEY = "ay_checkout_student_info";

const initialCachedInfo: CachedStudentInfo = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const CourseCheckoutContext = createContext<CourseCheckoutContextType | undefined>(undefined);

export function CourseCheckoutProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCourse, setActiveCourse] = useState<CheckoutCourseData | null>(null);

  const [cachedInfo, setCachedInfo] = useState<CachedStudentInfo>(initialCachedInfo);

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [successDetails, setSuccessDetails] = useState<PaymentSuccessDetails | null>(null);

  const [isFailedOpen, setIsFailedOpen] = useState(false);
  const [failedDetails, setFailedDetails] = useState<PaymentFailedDetails | null>(null);

  // Restore cached student info on client mount
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === "object") {
          setCachedInfo((prev) => ({ ...prev, ...parsed }));
        }
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const updateCachedInfo = (info: Partial<CachedStudentInfo>) => {
    setCachedInfo((prev) => {
      const updated = { ...prev, ...info };
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const clearCachedInfo = () => {
    setCachedInfo(initialCachedInfo);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const openCheckout = (data: CheckoutCourseData) => {
    setActiveCourse(data);
    setIsOpen(true);
  };

  const closeCheckout = () => {
    setIsOpen(false);
  };

  const openSuccessModal = (details: PaymentSuccessDetails) => {
    setSuccessDetails(details);
    setIsSuccessOpen(true);
    // As per requirement: clear cached user info once payment succeeds
    clearCachedInfo();
  };

  const closeSuccessModal = () => {
    setIsSuccessOpen(false);
    setSuccessDetails(null);
  };

  const openFailedModal = (details: PaymentFailedDetails) => {
    setFailedDetails(details);
    setIsFailedOpen(true);
  };

  const closeFailedModal = () => {
    setIsFailedOpen(false);
    setFailedDetails(null);
  };

  const retryCheckout = () => {
    setIsFailedOpen(false);
    if (activeCourse) {
      setIsOpen(true);
    }
  };

  return (
    <CourseCheckoutContext.Provider
      value={{
        isOpen,
        activeCourse,
        openCheckout,
        closeCheckout,
        cachedInfo,
        updateCachedInfo,
        clearCachedInfo,
        isSuccessOpen,
        successDetails,
        openSuccessModal,
        closeSuccessModal,
        isFailedOpen,
        failedDetails,
        openFailedModal,
        closeFailedModal,
        retryCheckout,
      }}
    >
      {children}
    </CourseCheckoutContext.Provider>
  );
}

export function useCourseCheckout() {
  const context = useContext(CourseCheckoutContext);
  if (!context) {
    throw new Error("useCourseCheckout must be used within a CourseCheckoutProvider");
  }
  return context;
}
