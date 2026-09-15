"use client";

import React from "react";
import { MapPin, ExternalLink, MessageCircle } from "lucide-react";

export default function ContactMapSection() {
  const addressText = "E49/5, Pocket D, Okhla Phase II, New Delhi – 110020";
  const mapEmbedUrl =
    "https://maps.google.com/maps?q=E49%2F5%2C+Pocket+D%2C+Okhla+Phase+II%2C+Okhla+Industrial+Estate%2C+New+Delhi%2C+Delhi+110020&t=&z=14&ie=UTF8&iwloc=&output=embed";
  const googleMapsDirectionsUrl =
    "https://maps.google.com/?q=E49/5,+Pocket+D,+Okhla+Phase+II,+New+Delhi+110020";

  return (
    <section className="relative w-full overflow-hidden bg-slate-100 border-t border-slate-200">
      
      {/* Top Floating Address Pill / Title Bar (Matching User Screenshot) */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-10 z-20 pointer-events-none">
        <div className="pointer-events-auto inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/90 text-white backdrop-blur-md shadow-lg border border-slate-800 text-xs sm:text-sm font-semibold">
          <MapPin className="w-4 h-4 text-[#0C9253] shrink-0" />
          <span>{addressText}</span>
          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hover:text-[#0C9253] transition-colors"
            title="Open in Google Maps"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Floating Right Edge Quick Action Strip (Matching Screenshot) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center bg-white border border-slate-200 rounded-l-2xl shadow-xl overflow-hidden">
        <a
          href="http://wa.me/919403892981"
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
          title="Academic Yatra Office Location Map"
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
