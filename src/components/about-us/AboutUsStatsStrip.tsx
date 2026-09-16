"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatItemProps {
  prefix?: string;
  target: number;
  suffix?: string;
  label: string;
  sublabel: string;
  index: number;
}

function StatCounterItem({
  prefix = "",
  target,
  suffix = "",
  label,
  sublabel,
  index,
}: StatItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-40px" });
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1600;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    const animFrame = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animFrame);
  }, [isInView, target]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-col justify-start px-3 sm:px-5 lg:px-6 py-4 sm:py-6 text-center sm:text-left",
        index % 2 !== 0 && "border-l border-emerald-200/50 lg:border-l-0",
        index !== 0 && "lg:border-l lg:border-emerald-200/50"
      )}
    >
      {/* Hollow Gradient Outlined Metric Number */}
      <div className="h-10 sm:h-14 lg:h-16 flex items-baseline justify-center sm:justify-start mb-2">
        <span
          className="font-heading text-3xl sm:text-5xl lg:text-[44px] xl:text-[54px] font-black tracking-tight select-none leading-none whitespace-nowrap"
          style={{
            WebkitTextStroke: "2px #0C9253",
            WebkitTextFillColor: "transparent",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 35%, rgba(0,0,0,0.2) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 35%, rgba(0,0,0,0.2) 100%)",
          }}
        >
          {prefix}
          {count}
          {suffix}
        </span>
      </div>

      <p className="text-dark font-extrabold text-sm sm:text-base tracking-tight leading-tight">
        {label}
      </p>
      <p className="text-slate-500 font-medium text-xs sm:text-sm mt-0.5">
        {sublabel}
      </p>
    </div>
  );
}

export default function AboutUsStatsStrip() {
  const stats = [
    {
      target: 2025,
      label: "Established Year",
      sublabel: "Future Yatra Pvt. Ltd., New Delhi",
    },
    {
      target: 3,
      suffix: " Brands",
      label: "Specialized Ecosystem",
      sublabel: "Academic, University & Medico Yatra",
    },
    {
      target: 100,
      suffix: "%",
      label: "Digital Learning Ecosystem",
      sublabel: "Student portal, live drills & records",
    },
    {
      target: 8,
      suffix: "+",
      label: "Global Exam & Lang Courses",
      sublabel: "IELTS, PTE, SAT, GRE, German & more",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-r from-[#EBF7F2] via-[#F4FAF6] to-[#EBF7F2] py-6 sm:py-8 overflow-hidden shadow-xs">
      {/* Seamless Top & Bottom Ambient Fade */}
      <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0">
          {stats.map((stat, index) => (
            <StatCounterItem
              key={stat.label}
              index={index}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
