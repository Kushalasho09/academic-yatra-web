"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Skiper10Props {
  nbOfColumns?: number;
  duration?: number;
  color?: string;
  accentColor?: string;
  onComplete?: () => void;
}

export function Skiper10({
  nbOfColumns = 6,
  duration = 0.8,
  color = "#031643",
  accentColor = "#0C9253",
  onComplete,
}: Skiper10Props) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Total animation time based on columns stagger + duration
    const totalTime = (duration + nbOfColumns * 0.08) * 1000 + 400;
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, totalTime);

    return () => clearTimeout(timer);
  }, [duration, nbOfColumns, onComplete]);

  // Top stairs: slides upwards out of view
  const topStairs = {
    initial: {
      top: 0,
      height: "50vh",
    },
    animate: (i: number) => ({
      top: "-50vh",
      transition: {
        duration: duration,
        delay: 0.08 * i,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        display: "none",
      },
    }),
  };

  // Bottom stairs: slides downwards out of view
  const bottomStairs = {
    initial: {
      bottom: 0,
      height: "50vh",
    },
    animate: (i: number) => ({
      bottom: "-50vh",
      transition: {
        duration: duration,
        delay: 0.08 * (nbOfColumns - 1 - i),
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        display: "none",
      },
    }),
  };

  // Secondary trailing stairs (accent green) for layered double staircase depth
  const accentTopStairs = {
    initial: {
      top: 0,
      height: "50vh",
    },
    animate: (i: number) => ({
      top: "-50vh",
      transition: {
        duration: duration + 0.1,
        delay: 0.08 * i + 0.08,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  const accentBottomStairs = {
    initial: {
      bottom: 0,
      height: "50vh",
    },
    animate: (i: number) => ({
      bottom: "-50vh",
      transition: {
        duration: duration + 0.1,
        delay: 0.08 * (nbOfColumns - 1 - i) + 0.08,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-between overflow-hidden">
          {/* Top Half Columns (Dual Direction Stairs from Top) */}
          <div className="relative w-full h-[50vh] flex">
            {/* Primary Navy Top Stairs */}
            {[...Array(nbOfColumns)].map((_, i) => (
              <motion.div
                key={`top-${i}`}
                custom={i}
                variants={topStairs}
                initial="initial"
                animate="animate"
                style={{
                  backgroundColor: color,
                  width: `${100 / nbOfColumns}%`,
                  left: `${(100 / nbOfColumns) * i}%`,
                }}
                className="absolute top-0 h-full border-r border-white/5"
              />
            ))}

            {/* Accent Green Trailing Top Stairs */}
            {[...Array(nbOfColumns)].map((_, i) => (
              <motion.div
                key={`top-accent-${i}`}
                custom={i}
                variants={accentTopStairs}
                initial="initial"
                animate="animate"
                style={{
                  backgroundColor: accentColor,
                  width: `${100 / nbOfColumns}%`,
                  left: `${(100 / nbOfColumns) * i}%`,
                  zIndex: -1,
                }}
                className="absolute top-0 h-full"
              />
            ))}
          </div>

          {/* Bottom Half Columns (Dual Direction Stairs from Bottom) */}
          <div className="relative w-full h-[50vh] flex">
            {/* Primary Navy Bottom Stairs */}
            {[...Array(nbOfColumns)].map((_, i) => (
              <motion.div
                key={`bottom-${i}`}
                custom={i}
                variants={bottomStairs}
                initial="initial"
                animate="animate"
                style={{
                  backgroundColor: color,
                  width: `${100 / nbOfColumns}%`,
                  left: `${(100 / nbOfColumns) * i}%`,
                }}
                className="absolute bottom-0 h-full border-r border-white/5"
              />
            ))}

            {/* Accent Green Trailing Bottom Stairs */}
            {[...Array(nbOfColumns)].map((_, i) => (
              <motion.div
                key={`bottom-accent-${i}`}
                custom={i}
                variants={accentBottomStairs}
                initial="initial"
                animate="animate"
                style={{
                  backgroundColor: accentColor,
                  width: `${100 / nbOfColumns}%`,
                  left: `${(100 / nbOfColumns) * i}%`,
                  zIndex: -1,
                }}
                className="absolute bottom-0 h-full"
              />
            ))}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Skiper10;
