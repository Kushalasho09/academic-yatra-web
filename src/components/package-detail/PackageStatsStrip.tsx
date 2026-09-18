"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { PackageDetailData } from "@/data/packageDetailsData";

interface PackageStatsStripProps {
  stats: PackageDetailData["stats"];
}

interface StatCounterItemProps {
  target: number;
  label: string;
  index: number;
}

function StatCounterItem({ target, label, index }: StatCounterItemProps) {
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
        "relative flex flex-col justify-center px-3 sm:px-6 lg:px-8 py-4 sm:py-6",
        index % 2 !== 0 && "border-l border-emerald-200/50 lg:border-l-0",
        index !== 0 && "lg:border-l lg:border-emerald-200/50"
      )}
    >
      {/* Hollow Gradient Outlined Number with percentage */}
      <div
        className="font-heading text-4xl sm:text-6xl lg:text-[72px] font-black tracking-tight select-none leading-none mb-1.5 sm:mb-2.5"
        style={{
          WebkitTextStroke: "2px #0C9253",
          WebkitTextFillColor: "transparent",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0.2) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0.2) 100%)",
        }}
      >
        {count}%
      </div>

      {/* Metric Label */}
      <div className="font-heading font-extrabold text-xs sm:text-sm lg:text-[15px] text-brand-navy tracking-tight leading-snug">
        {label}
      </div>
    </div>
  );
}

export default function PackageStatsStrip({ stats }: PackageStatsStripProps) {
  return (
    <section className="py-6 sm:py-9 bg-white relative z-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-2 sm:gap-6 lg:gap-0 items-center">
          {stats.map((stat, idx) => {
            const numericValue = parseInt(stat.value.replace(/\D/g, "")) || 100;
            return (
              <StatCounterItem
                key={stat.label}
                target={numericValue}
                label={stat.label}
                index={idx}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
