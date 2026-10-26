"use client";

import React from "react";

export default function ContactMapSection() {
  const mapEmbedUrl =
    "https://maps.google.com/maps?q=Supernova+Astralis%2C+Sector+94%2C+Noida%2C+Uttar+Pradesh+201301&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="relative w-full overflow-hidden bg-slate-100 border-t border-slate-200">

      

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
