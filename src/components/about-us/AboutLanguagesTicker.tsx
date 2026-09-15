"use client";

import React from "react";

export default function AboutLanguagesTicker() {
  const languages = [
    "german",
    "spanish",
    "italian",
    "french",
    "english",
  ];

  // Repeat for seamless half-width cycling (translateX -50%)
  const singleSet = [...languages, ...languages, ...languages];

  return (
    <div className="relative w-full overflow-hidden bg-white py-8 sm:py-12 border-y border-slate-100 select-none">
      {/* Soft Gradient Edge Masks for Seamless Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

      {/* Infinite Seamless Scrolling Track */}
      <div className="animate-marquee-infinite items-center">
        {/* First Half */}
        <div className="flex items-center shrink-0">
          {singleSet.map((lang, idx) => (
            <React.Fragment key={`a-${idx}`}>
              <span className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#85b2f8] hover:text-[#5a93ed] transition-colors cursor-default lowercase">
                {lang}
              </span>
              <span className="mx-6 sm:mx-10 md:mx-14 text-2xl sm:text-4xl md:text-5xl font-bold text-[#85b2f8]/80 select-none">
                +
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Second Half (Identical clone for continuous infinite loop) */}
        <div className="flex items-center shrink-0" aria-hidden="true">
          {singleSet.map((lang, idx) => (
            <React.Fragment key={`b-${idx}`}>
              <span className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#85b2f8] hover:text-[#5a93ed] transition-colors cursor-default lowercase">
                {lang}
              </span>
              <span className="mx-6 sm:mx-10 md:mx-14 text-2xl sm:text-4xl md:text-5xl font-bold text-[#85b2f8]/80 select-none">
                +
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
