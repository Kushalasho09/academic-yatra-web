"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Sparkles, Phone, MessageCircle, ArrowUp, Globe, BookOpen } from "lucide-react";

// Register ScrollTrigger safely for React
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// 1. THEME-ADAPTIVE INLINE STYLES (Academic Yatra Colors)
// -------------------------------------------------------------------------
const STYLES = `
.cinematic-footer-wrapper {
  font-family: var(--font-plus-jakarta), -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  
  --pill-bg-1: rgba(255, 255, 255, 0.08);
  --pill-bg-2: rgba(255, 255, 255, 0.02);
  --pill-shadow: rgba(0, 0, 0, 0.4);
  --pill-highlight: rgba(255, 255, 255, 0.15);
  --pill-inset-shadow: rgba(0, 0, 0, 0.6);
  --pill-border: rgba(255, 255, 255, 0.12);
  
  --pill-bg-1-hover: rgba(12, 146, 83, 0.25);
  --pill-bg-2-hover: rgba(12, 146, 83, 0.08);
  --pill-border-hover: rgba(12, 146, 83, 0.45);
  --pill-shadow-hover: rgba(12, 146, 83, 0.25);
  --pill-highlight-hover: rgba(255, 255, 255, 0.3);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.12); opacity: 0.9; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(12, 146, 83, 0.6)); }
  15%, 45% { transform: scale(1.2); filter: drop-shadow(0 0 12px rgba(12, 146, 83, 0.9)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 35s linear infinite;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

/* Theme-adaptive Grid Background */
.footer-bg-grid {
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
}

/* Theme-adaptive Aurora Glow with Academic Green & Navy */
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(12, 146, 83, 0.28) 0%, 
    rgba(0, 103, 227, 0.18) 35%, 
    rgba(18, 36, 71, 0.4) 60%,
    transparent 75%
  );
}

/* Glass Pill Theming */
.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow: 
      0 10px 30px -10px var(--pill-shadow), 
      inset 0 1px 1px var(--pill-highlight), 
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow: 
      0 20px 40px -10px var(--pill-shadow-hover), 
      inset 0 1px 1px var(--pill-highlight-hover);
  color: #ffffff;
}

/* Giant Background Text Masking */
.footer-giant-bg-text {
  font-size: 16vw;
  line-height: 0.8;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.08);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.02) 60%, transparent 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

/* Metallic Text Glow */
.footer-text-glow {
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 30px rgba(12, 146, 83, 0.35));
}
`;

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON PRIMITIVE
// -------------------------------------------------------------------------
export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

export const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.35,
            y: y * 0.35,
            rotationX: -y * 0.12,
            rotationY: x * 0.12,
            scale: 1.04,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as any);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as any);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as any).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as any).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// -------------------------------------------------------------------------
// 3. MARQUEE ITEM
// -------------------------------------------------------------------------
const MarqueeItem = () => (
  <div className="flex items-center space-x-10 px-6">
    <span>IELTS & PTE Score Pathways</span> <span className="text-emerald-400">✦</span>
    <span>German & French A1–B2</span> <span className="text-sky-400">✦</span>
    <span>GMAT & GRE Masterclass</span> <span className="text-emerald-400">✦</span>
    <span>1-on-1 Speaking Simulations</span> <span className="text-sky-400">✦</span>
    <span>Top Global University Admissions</span> <span className="text-emerald-400">✦</span>
    <span>British Council & ETS Alumni Mentors</span> <span className="text-sky-400">✦</span>
  </div>
);

// -------------------------------------------------------------------------
// 4. MAIN CINEMATIC FOOTER COMPONENT
// -------------------------------------------------------------------------
export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.fromTo(
        giantTextRef.current,
        { y: "8vh", scale: 0.85, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // Staggered Content Reveal
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 45%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      
      {/* 
        The "Curtain Reveal" Wrapper:
        It sits in standard flow with clip-path so contents are visible when scrolled.
      */}
      <div
        ref={wrapperRef}
        className="relative min-h-[90vh] sm:min-h-screen w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        {/* The actual footer stays fixed underneath */}
        <footer className="fixed bottom-0 left-0 flex min-h-[90vh] sm:min-h-screen w-full flex-col justify-between overflow-hidden bg-[#0A192F] text-white cinematic-footer-wrapper">
          
          {/* Ambient Light & Grid Background */}
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[65vh] w-[85vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[90px] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background text */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[4vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none text-center"
          >
            ACADEMIC YATRA
          </div>

          {/* 1. Diagonal Sleek Marquee (Top of footer) */}
          <div className="absolute top-10 sm:top-14 left-0 w-full overflow-hidden border-y border-white/10 bg-[#0A192F]/70 backdrop-blur-md py-3.5 z-10 -rotate-1 scale-105 shadow-2xl">
            <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-bold tracking-[0.25em] text-slate-300 uppercase">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* 2. Main Center Content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 sm:px-6 mt-24 sm:mt-28 w-full max-w-5xl mx-auto text-center">
            <h2
              ref={headingRef}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold footer-text-glow tracking-tight mb-8 sm:mb-10 text-center"
            >
              Ready to achieve your target score?
            </h2>

            {/* Interactive Magnetic Pills Layout */}
            <div ref={linksRef} className="flex flex-col items-center gap-5 w-full">
              {/* Primary Contact & Booking CTAs */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full">
                <MagneticButton
                  as={Link}
                  href="/contacts"
                  className="footer-glass-pill px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-white font-bold text-xs sm:text-sm md:text-base flex items-center gap-2.5 group bg-brand-primary/20 border-brand-primary/40 hover:bg-brand-primary"
                >
                  <Sparkles className="w-4 h-4 text-emerald-300 group-hover:rotate-12 transition-transform" />
                  <span>Book 5 Day Demo</span>
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="tel:+919286844550"
                  className="footer-glass-pill px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-white font-bold text-xs sm:text-sm md:text-base flex items-center gap-2.5 group"
                >
                  <Phone className="w-4 h-4 text-brand-primary group-hover:scale-110 transition-transform" />
                  <span>+91-92868-44550</span>
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="https://wa.me/919403892981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-glass-pill px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-white font-bold text-xs sm:text-sm md:text-base flex items-center gap-2.5 group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Mentor</span>
                </MagneticButton>
              </div>

              {/* Secondary Navigation Links */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 w-full mt-2">
                <MagneticButton
                  as={Link}
                  href="/languages"
                  className="footer-glass-pill px-4 sm:px-5 py-2.5 rounded-full text-slate-300 font-semibold text-xs sm:text-sm hover:text-white"
                >
                  Languages Programs
                </MagneticButton>

                <MagneticButton
                  as={Link}
                  href="/test-prep"
                  className="footer-glass-pill px-4 sm:px-5 py-2.5 rounded-full text-slate-300 font-semibold text-xs sm:text-sm hover:text-white"
                >
                  Test Prep (IELTS • PTE • GRE)
                </MagneticButton>

                <MagneticButton
                  as={Link}
                  href="/free-resources"
                  className="footer-glass-pill px-4 sm:px-5 py-2.5 rounded-full text-slate-300 font-semibold text-xs sm:text-sm hover:text-white"
                >
                  Free Mock Resources
                </MagneticButton>

                <MagneticButton
                  as={Link}
                  href="/about-us"
                  className="footer-glass-pill px-4 sm:px-5 py-2.5 rounded-full text-slate-300 font-semibold text-xs sm:text-sm hover:text-white"
                >
                  About Us
                </MagneticButton>

                <MagneticButton
                  as={Link}
                  href="/contacts"
                  className="footer-glass-pill px-4 sm:px-5 py-2.5 rounded-full text-slate-300 font-semibold text-xs sm:text-sm hover:text-white"
                >
                  Contacts
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* 3. Bottom Bar / Credits & Back to Top */}
          <div className="relative z-20 w-full pb-6 sm:pb-8 px-4 sm:px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 border-t border-white/10 pt-5">
            
            {/* Copyright */}
            <div className="text-slate-400 text-[11px] sm:text-xs font-semibold tracking-wider order-2 md:order-1 text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-slate-200">Future Yatra Pvt. Ltd.</span> • Academic Yatra
            </div>

            {/* "Made with Love" Badge */}
            <div className="footer-glass-pill px-5 py-2 rounded-full flex items-center gap-2 order-1 md:order-2 cursor-default border-white/10">
              <span className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Empowering Global Students</span>
              <span className="animate-footer-heartbeat text-sm text-emerald-400">❤</span>
              <span className="text-slate-200 font-bold text-xs sm:text-sm ml-1">Academic Yatra</span>
            </div>

            {/* Back to top Button */}
            <MagneticButton
              as="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full footer-glass-pill flex items-center justify-center text-slate-300 hover:text-white group order-3"
            >
              <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300 text-emerald-400" />
            </MagneticButton>

          </div>
        </footer>
      </div>
    </>
  );
}

export default CinematicFooter;
