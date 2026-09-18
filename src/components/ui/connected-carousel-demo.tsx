"use client";

import React from "react";
import type { CarouselItem } from "@/components/ui/connected-carousel";
import { CalendlyCarousel } from "@/components/ui/connected-carousel";

export const STORIES_DATA: CarouselItem[] = [
  {
    id: "studio-prism",
    stat: "140+ design sprints completed",
    quote:
      "Automating client bookings unlocked uninterrupted deep work sessions and transformed our delivery cadence.",
    author: "Elena Rostova",
    role: "Head of Product Design at Studio Prism",
    defaultImage:
      "https://cdn.21st.dev/assets/mirror/c6/c6c51783628e317008b03004640a273251c41c6373a6fc63738dc2d56df83965.jpg",
    selectedImage:
      "https://cdn.21st.dev/assets/mirror/c6/c6c51783628e317008b03004640a273251c41c6373a6fc63738dc2d56df83965.jpg",
    alt: "Elena Rostova collaborating with her design team in a creative studio",
  },
  {
    id: "veloce-ai",
    stat: "99.4% client meeting attendance",
    quote:
      "Smart qualification workflows removed manual no-shows completely and gave our sales engineering team its focus back.",
    author: "Julian Chen",
    role: "VP of Engineering at Veloce AI",
    defaultImage:
      "https://cdn.21st.dev/assets/mirror/b7/b72b0f4f4e2184862eb73dfd44a2f950ce712284c82dc52099d0c0df634e8306.jpg",
    selectedImage:
      "https://cdn.21st.dev/assets/mirror/b7/b72b0f4f4e2184862eb73dfd44a2f950ce712284c82dc52099d0c0df634e8306.jpg",
    alt: "Julian Chen in high-tech corporate office",
  },
  {
    id: "hyperion-health",
    stat: "65 hours saved monthly",
    quote:
      "Patients schedule specialty consultations in seconds, giving our clinicians more high-value care time.",
    author: "Dr. Amara Okafor",
    role: "Chief Medical Officer at Hyperion Health",
    defaultImage:
      "https://cdn.21st.dev/assets/mirror/92/926db583face6f84ed326570a2d38c0e7b1338449f444de0e6d0b920b40e552f.jpg",
    selectedImage:
      "https://cdn.21st.dev/assets/mirror/92/926db583face6f84ed326570a2d38c0e7b1338449f444de0e6d0b920b40e552f.jpg",
    alt: "Dr. Amara Okafor examining care timelines in modern medical center",
  },
  {
    id: "aura-craft",
    stat: "$48,000 saved annually",
    quote:
      "Eliminating email tennis accelerated our bespoke customer intake and noticeably elevated our brand impression.",
    author: "Maya Lindqvist",
    role: "Creative Director & Founder at Aura Craft",
    defaultImage:
      "https://cdn.21st.dev/assets/mirror/56/56efabba2e6ba75d83c0d8a93e27e695630b6ef6df1f0f92542e6f7d88e585a5.jpg",
    selectedImage:
      "https://cdn.21st.dev/assets/mirror/56/56efabba2e6ba75d83c0d8a93e27e695630b6ef6df1f0f92542e6f7d88e585a5.jpg",
    alt: "Maya Lindqvist working with artisan craft prototypes",
  },
  {
    id: "echo-labs",
    stat: "82% reduction in coordination overhead",
    quote:
      "Distributed asynchronous scheduling let our remote founders operate seamlessly across twelve timezones.",
    author: "Siddharth Rao",
    role: "Co-Founder & COO at Echo Labs",
    defaultImage:
      "https://cdn.21st.dev/assets/mirror/bf/bf5e190044b602e47fe1fd6933360d80a1503e25b1f86bb28222d49e797224f3.jpg",
    selectedImage:
      "https://cdn.21st.dev/assets/mirror/bf/bf5e190044b602e47fe1fd6933360d80a1503e25b1f86bb28222d49e797224f3.jpg",
    alt: "Siddharth Rao on a walking consultation outside an open-air tech campus",
  },
];

export default function CarouselDemo() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-br from-indigo-100/40 via-background to-orange-100/40">
      <CalendlyCarousel
        items={STORIES_DATA}
        autoPlayInterval={6000}
        pauseOnHover={false}
      />
    </div>
  );
}
