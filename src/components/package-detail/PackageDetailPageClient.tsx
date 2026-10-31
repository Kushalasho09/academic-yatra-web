"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { getPackageBySlug } from "@/data/packageDetailsData";
import PackageDetailHero from "@/components/package-detail/PackageDetailHero";
import PackageTargetAudience from "@/components/package-detail/PackageTargetAudience";
import PackageCourseGuide from "@/components/package-detail/PackageCourseGuide";
import PackageWhyChoose from "@/components/package-detail/PackageWhyChoose";
import PackageInlineCheckout from "@/components/package-detail/PackageInlineCheckout";
import PackageCTABanner from "@/components/package-detail/PackageCTABanner";
import PackageBookingModal from "@/components/package-detail/PackageBookingModal";

export default function PackageDetailPageClient({ slug: propSlug }: { slug?: string }) {
  const params = useParams();
  const slug = propSlug || (params?.slug as string) || "ielts-academic";
  const data = getPackageBySlug(slug);

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState<string>("");
  const [modalTitle, setModalTitle] = useState<string>("Book Your Free 5-Day Trial");

  const handleOpenBooking = (type: string = "Book Your Free 5-Day Trial") => {
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
      <PackageDetailHero
        data={data}
        onOpenBooking={handleOpenBooking}
      />

      <PackageTargetAudience audience={data.audience} />

      <PackageCourseGuide guide={data.courseGuide} />

      <PackageWhyChoose whyChoose={data.whyChoose} />

      <PackageInlineCheckout
        slug={data.slug || slug}
        categoryName={data.category}
        onOpenDemo={() => handleOpenBooking("Book Your Free 5-Day Trial")}
      />

      <PackageCTABanner
        ctaBanner={data.ctaBanner}
        onOpenBooking={handleOpenBooking}
      />

      <PackageBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultPlan={selectedPlanName}
        defaultTitle={modalTitle}
      />
    </div>
  );
}
