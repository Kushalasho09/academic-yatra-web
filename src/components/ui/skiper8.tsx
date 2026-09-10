"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Skiper8Props {
  words?: string[];
  durationPerWord?: number;
  backgroundColor?: string;
  dotColor?: string;
  onComplete?: () => void;
}

const DEFAULT_WORDS = [
  "Hello",
  "Bonjour",
  "Guten Tag",
  "Ciao",
  "Olà",
  "Namaste",
  "Academic Yatra",
];

export function Skiper8({
  words = DEFAULT_WORDS,
  durationPerWord = 220,
  backgroundColor = "#031643",
  dotColor = "#0C9253",
  onComplete,
}: Skiper8Props) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      const exitTimer = setTimeout(() => {
        setIsDone(true);
        if (onComplete) onComplete();
      }, durationPerWord + 200);
      return () => clearTimeout(exitTimer);
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, durationPerWord);

    return () => clearTimeout(timer);
  }, [index, words.length, durationPerWord, onComplete]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  } L0 0`;

  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curveVariants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  const slideUpVariants = {
    initial: {
      top: 0,
    },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: 15,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.18, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -15,
      transition: { duration: 0.12, ease: "easeIn" },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {!isDone && dimension.width > 0 && (
        <motion.div
          variants={slideUpVariants}
          initial="initial"
          exit="exit"
          style={{ backgroundColor }}
          className="fixed inset-0 z-[100] flex items-center justify-center cursor-wait overflow-hidden pointer-events-auto"
        >
          {/* Animated Word Display */}
          <div className="relative z-10 flex items-center gap-3">
            <span
              style={{ backgroundColor: dotColor }}
              className="w-3 h-3 rounded-full animate-ping inline-block"
            />
            <AnimatePresence mode="wait">
              <motion.p
                key={words[index]}
                variants={textVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight select-none"
              >
                {words[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* SVG Curved Liquid Slide Reveal Bottom */}
          <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-current text-[#031643]">
            <motion.path
              variants={curveVariants}
              initial="initial"
              exit="exit"
              fill={backgroundColor}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Skiper8;
