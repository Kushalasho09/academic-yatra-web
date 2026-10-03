import React from "react";
import type { Metadata } from "next";
import ContactHeroAndForm from "@/components/contacts/ContactHeroAndForm";
import ContactMapSection from "@/components/contacts/ContactMapSection";

export const metadata: Metadata = {
  title: "Contact Us | Academic Yatra™ — Speak with Our Experts",
  description:
    "Connect with Academic Yatra™ for expert guidance on study abroad, test preparation, language learning, and global opportunities. Visit our Noida office or connect via WhatsApp.",
  openGraph: {
    title: "Contact Academic Yatra™ — Making Global Education Easy",
    description:
      "Speak with our educational advisors: +91-9217368750. Unit 917, 9th Floor, SuperNova Astralis Sec 94, Noida – 201301.",
  },
};

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-[#FBFDFB]">
      {/* 1. Top Section: Header, Form Card & Contact Info Card (Matching Screenshot 1) */}
      <ContactHeroAndForm />

      {/* 2. Full Width Google Maps Embed (Matching Screenshot 2) */}
      <ContactMapSection />
    </main>
  );
}
