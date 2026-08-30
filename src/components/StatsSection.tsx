"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatItemProps {
  target: number;
  label: string;
  isFirst?: boolean;
}

function StatCounterItem({ target, label, isFirst }: StatItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-40px" });
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1600; // duration in ms

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out expo for snappy start and smooth landing
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
        "relative flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8",
        !isFirst && "lg:border-l lg:border-brand-primary"
      )}
    >
      {/* Hollow Gradient Outlined Number with percentage */}
      <div
        className="font-heading text-5xl sm:text-6xl lg:text-[76px] font-black tracking-tight select-none leading-none mb-3"
        style={{
          WebkitTextStroke: "2.2px #0C9253",
          WebkitTextFillColor: "transparent",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0.15) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0.15) 100%)",
        }}
      >
        {count}%
      </div>

      {/* Metric Label */}
      <div className="font-heading font-extrabold text-sm sm:text-base lg:text-[17px] text-brand-navy tracking-tight leading-snug">
        {label}
      </div>
    </div>
  );
}

const STATS_DATA = [
  { target: 100, label: "Online Digital Dashboard" },
  { target: 100, label: "Live Performance Tracking" },
  { target: 99, label: "Result Accuracy" },
  { target: 100, label: "Attendance • Recorded Sessions" },
];

export default function StatsSection() {
  return (
    <section className="py-10 sm:py-14 bg-white relative z-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 lg:gap-0 items-center">
          {STATS_DATA.map((stat, idx) => (
            <StatCounterItem
              key={stat.label}
              target={stat.target}
              label={stat.label}
              isFirst={idx === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
