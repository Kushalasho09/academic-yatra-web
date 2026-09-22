"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { getPackageBySlug } from "@/data/packageDetailsData";
import PackageDetailHero from "@/components/package-detail/PackageDetailHero";
import PackageStatsStrip from "@/components/package-detail/PackageStatsStrip";
import PackageTargetAudience from "@/components/package-detail/PackageTargetAudience";
import PackageCourseGuide from "@/components/package-detail/PackageCourseGuide";
import PackageWhyChoose from "@/components/package-detail/PackageWhyChoose";
import PackageInlineCheckout from "@/components/package-detail/PackageInlineCheckout";
import PackageCTABanner from "@/components/package-detail/PackageCTABanner";
import PackageBookingModal from "@/components/package-detail/PackageBookingModal";

export default function PackageDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "ielts-academic";
  const data = getPackageBySlug(slug);

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState<string>("");
  const [modalTitle, setModalTitle] = useState<string>("Book 5 Day Demo");

  const handleOpenBooking = (type: string = "Book 5 Day Demo") => {
    setModalTitle(type);
    setSelectedPlanName(data.category);
    setBookingModalOpen(true);
  };

  const handleSelectPlan = (planName: string, price: string) => {
    setModalTitle(`Enroll in ${planName}`);
    setSelectedPlanName(`${data.category} - ${planName} (${price})`);
    setBookingModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section (Image 1) */}
      <PackageDetailHero
        data={data}
        onOpenBooking={handleOpenBooking}
      />

      {/* 2. 4-Stat Metric Strip (Image 2) */}
      <PackageStatsStrip stats={data.stats} />

      {/* 3. Who Needs This Course Audience Grid (Image 2) */}
      <PackageTargetAudience audience={data.audience} />

      {/* 4. Complete Course Guide Accordion (Image 3) */}
      <PackageCourseGuide guide={data.courseGuide} />

      {/* 5. Why Students Choose Academic Yatra (Image 4) */}
      <PackageWhyChoose whyChoose={data.whyChoose} />

      {/* 6. Course Cards & Inline Checkout Directly Below (Images 2 & 3) */}
      <PackageInlineCheckout
        categoryName={data.category}
        onOpenDemo={() => handleOpenBooking("Book 5 Day Demo")}
      />

      {/* 7. Bottom CTA Banner & Indicative Fee Disclaimer (Image 5) */}
      <PackageCTABanner
        ctaBanner={data.ctaBanner}
        onOpenBooking={handleOpenBooking}
      />

      {/* 9. Interactive Booking & Consultation Modal */}
      <PackageBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultPlan={selectedPlanName}
        defaultTitle={modalTitle}
      />
    </div>
  );
}
