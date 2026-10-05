"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface DestinationItem {
  id: "canada" | "india" | "germany";
  name: string;
  landmark: string;
  image: string;
  timeZone: string;
  badge: string;
  isHq?: boolean;
}

const DESTINATIONS: DestinationItem[] = [
  {
    id: "canada",
    name: "Canada",
    landmark: "BANFF PARK",
    image: "/images/destinations/canada.jpg",
    timeZone: "America/Toronto",
    badge: "EDT / EST",
  },
  {
    id: "india",
    name: "India",
    landmark: "TAJ MAHAL",
    image: "/images/destinations/india.jpg",
    timeZone: "Asia/Kolkata",
    badge: "HQ • IST",
    isHq: true,
  },
  {
    id: "germany",
    name: "Germany",
    landmark: "NEUSCHWANSTEIN",
    image: "/images/destinations/germany.jpg",
    timeZone: "Europe/Berlin",
    badge: "CET / CEST",
  },
];

function formatTime(timeZone: string): string {
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return formatter.format(new Date());
  } catch {
    return "--:-- --";
  }
}

export default function DestinationTimeZones() {
  const [activeId, setActiveId] = useState<"canada" | "india" | "germany">("india");
  const [times, setTimes] = useState<Record<string, string>>({
    canada: "02:28 AM",
    india: "11:58 AM",
    germany: "08:28 AM",
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTimes = () => {
      setTimes({
        canada: formatTime("America/Toronto"),
        india: formatTime("Asia/Kolkata"),
        germany: formatTime("Europe/Berlin"),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#060D19] overflow-hidden text-white select-none">
      {/* Subtle Dot Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[450px] bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 space-y-2">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-accent italic text-[#2DD4BF] text-lg sm:text-2xl tracking-wide block font-normal drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]"
          >
            Global Study Destinations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Live Destination Time Zones
          </motion.h2>
        </div>

        {/* Desktop & Tablet Layout (sm and up): Symmetrical Spread with Center Spotlight */}
        <div className="hidden sm:flex flex-row items-end justify-center gap-6 md:gap-10 lg:gap-12 w-full pt-4 pb-2">
          {DESTINATIONS.map((dest) => {
            const isActive = activeId === dest.id;
            return (
              <div
                key={dest.id}
                onClick={() => setActiveId(dest.id)}
                className="flex flex-col items-center cursor-pointer group transition-all duration-300"
              >
                {/* Stadium / Pill Shaped Image Card */}
                <div className="relative mb-5 sm:mb-6">
                  {/* Glowing halo behind active card */}
                  {isActive && (
                    <div className="absolute -inset-2 rounded-[80px] sm:rounded-[95px] bg-[#00F2FE]/25 blur-xl pointer-events-none animate-pulse" />
                  )}

                  <motion.div
                    animate={{
                      scale: isActive ? 1.06 : 0.98,
                      y: isActive ? -10 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={cn(
                      "relative w-[180px] h-[300px] md:w-[210px] md:h-[350px] lg:w-[230px] lg:h-[380px] rounded-[75px] md:rounded-[90px] overflow-hidden bg-slate-900 transition-all duration-500",
                      isActive
                        ? "ring-[3px] ring-[#00F2FE] shadow-[0_0_35px_rgba(0,242,254,0.55),0_0_70px_rgba(0,242,254,0.25)]"
                        : "ring-1 ring-white/10 opacity-75 group-hover:opacity-100 group-hover:ring-white/30"
                    )}
                  >
                    <Image
                      src={dest.image}
                      alt={dest.landmark}
                      fill
                      sizes="(max-width: 768px) 180px, (max-width: 1024px) 210px, 230px"
                      className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                      priority={dest.isHq}
                    />

                    {/* Dark gradient for crisp text legibility */}
                    <div className="absolute inset-x-0 bottom-0 pb-6 md:pb-8 pt-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end justify-center">
                      <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] text-white/95 uppercase drop-shadow-md px-2 text-center">
                        {dest.landmark}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Country Name & Live Status Dot */}
                <div className="flex items-center justify-center gap-2 mb-1.5">
                  <span className="font-heading font-extrabold text-white text-lg md:text-xl tracking-tight">
                    {dest.name}
                  </span>
                  {dest.isHq && (
                    <span className="relative flex h-2.5 w-2.5 ml-0.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F2FE] opacity-80" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F2FE]" />
                    </span>
                  )}
                </div>

                {/* Live Real-time Clock */}
                <div className="font-extrabold text-[#00F2FE] text-base md:text-lg tracking-wider mb-2">
                  {mounted ? times[dest.id] : "--:-- --"}
                </div>

                {/* Badge (Pill) */}
                <div className="h-7 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {isActive || dest.isHq ? (
                      <motion.div
                        key={dest.badge}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className={cn(
                          "px-3.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all duration-300",
                          isActive
                            ? "border border-[#00F2FE]/60 bg-[#00F2FE]/15 text-[#00F2FE] shadow-[0_0_12px_rgba(0,242,254,0.3)]"
                            : "border border-white/15 bg-white/5 text-slate-400"
                        )}
                      >
                        {dest.badge}
                      </motion.div>
                    ) : (
                      <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                        {dest.badge}
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Layout (< sm): Overlapping Fan Stack (Matching Image 2 Reference) */}
        <div className="sm:hidden flex flex-col items-center w-full">
          {/* Overlapping Fan Container */}
          <div className="relative w-full max-w-[340px] h-[320px] flex items-center justify-center mb-6">
            {DESTINATIONS.map((dest, idx) => {
              const isActive = activeId === dest.id;

              // Ordering relative to active card
              // Positions: Canada (left), India (center), Germany (right)
              let xOffset = 0;
              let zIndex = 10;
              let rotateDeg = 0;
              let scale = 0.88;

              if (dest.id === "canada") {
                xOffset = -65;
                rotateDeg = -5;
                zIndex = isActive ? 30 : 10;
              } else if (dest.id === "india") {
                xOffset = 0;
                rotateDeg = 0;
                zIndex = isActive ? 30 : 20;
              } else if (dest.id === "germany") {
                xOffset = 65;
                rotateDeg = 5;
                zIndex = isActive ? 30 : 10;
              }

              if (isActive) {
                scale = 1.05;
                zIndex = 35;
              }

              return (
                <motion.div
                  key={dest.id}
                  onClick={() => setActiveId(dest.id)}
                  animate={{
                    x: xOffset,
                    rotate: rotateDeg,
                    scale: scale,
                    zIndex: zIndex,
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 24 }}
                  className="absolute cursor-pointer"
                  style={{ zIndex }}
                >
                  {/* Glowing background if active */}
                  {isActive && (
                    <div className="absolute -inset-2 rounded-[75px] bg-[#00F2FE]/25 blur-lg pointer-events-none animate-pulse" />
                  )}

                  <div
                    className={cn(
                      "relative w-[160px] h-[260px] rounded-[70px] overflow-hidden bg-slate-900 shadow-2xl transition-all duration-300",
                      isActive
                        ? "ring-[3px] ring-[#00F2FE] shadow-[0_0_30px_rgba(0,242,254,0.6)]"
                        : "ring-1 ring-white/15 opacity-80"
                    )}
                  >
                    <Image
                      src={dest.image}
                      alt={dest.landmark}
                      fill
                      sizes="160px"
                      className="object-cover object-center"
                      priority={dest.isHq}
                    />

                    <div className="absolute inset-x-0 bottom-0 pb-5 pt-14 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end justify-center">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase text-center px-1">
                        {dest.landmark}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Active Mobile Details Display */}
          {(() => {
            const current = DESTINATIONS.find((d) => d.id === activeId) || DESTINATIONS[1];
            return (
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="font-heading font-extrabold text-white text-2xl tracking-tight">
                    {current.name}
                  </span>
                  {current.isHq && (
                    <span className="relative flex h-2.5 w-2.5 ml-0.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F2FE] opacity-80" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F2FE]" />
                    </span>
                  )}
                </div>

                <div className="font-extrabold text-[#00F2FE] text-xl tracking-wider mb-2.5">
                  {mounted ? times[current.id] : "--:-- --"}
                </div>

                <div className="border border-[#00F2FE]/60 bg-[#00F2FE]/15 text-[#00F2FE] shadow-[0_0_12px_rgba(0,242,254,0.3)] px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                  {current.badge}
                </div>

                {/* Helper hint for mobile tapping */}
                <div className="mt-4 flex items-center gap-2">
                  {DESTINATIONS.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setActiveId(d.id)}
                      className={cn(
                        "text-xs px-3 py-1 rounded-full border transition-all",
                        activeId === d.id
                          ? "border-[#00F2FE] text-[#00F2FE] bg-[#00F2FE]/10"
                          : "border-white/10 text-slate-400 hover:text-white"
                      )}
                    >
                      {d.name}
                    </button>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
