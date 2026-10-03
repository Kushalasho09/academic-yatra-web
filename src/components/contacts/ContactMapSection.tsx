"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function ContactMapSection() {
  const mapEmbedUrl =
    "https://maps.google.com/maps?q=Supernova+Astralis%2C+Sector+94%2C+Noida%2C+Uttar+Pradesh+201301&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="relative w-full overflow-hidden bg-slate-100 border-t border-slate-200">

      {/* Floating Right Edge Quick Action Strip (Matching Screenshot) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center bg-white border border-slate-200 rounded-l-2xl shadow-xl overflow-hidden">
        <a
          href="https://wa.me/919217368750"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="p-3 bg-[#0C9253] hover:bg-[#0A7A45] text-white transition-colors flex items-center justify-center cursor-pointer"
          title="Chat with Us on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
        </a>
        <div className="py-4 px-1.5 [writing-mode:vertical-rl] text-[11px] font-bold tracking-wider text-slate-700 uppercase select-none">
          Contact Us
        </div>
      </div>

      {/* Google Maps Full Width Interactive Iframe */}
      <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px]">
        <iframe
          title="Academic Yatra™ Office Location Map"
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale-[15%] contrast-[1.05]"
        />
      </div>

    </section>
  );
}
