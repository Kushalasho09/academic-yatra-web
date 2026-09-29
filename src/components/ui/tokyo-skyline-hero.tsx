"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, MessageCircle, Sparkles, Trophy, Globe, GraduationCap } from "lucide-react"

// ─────────────────────────────────────────────────────────────
// ACADEMIC YATRA / SKYLINE HERO — locked scroll-scrub video hero
// Smoothly scrubs cinematic footage with scroll gestures.
// Monumental brand typography composes in behind the iconic
// world university skyline cutout, revealing brand badges,
// trust metrics, and action pathways before unlocking.
// ─────────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
}

export interface StatItem {
  value: string
  label: string
  icon?: React.ElementType
}

export interface TokyoSkylineHeroProps {
  videoSrc?: string
  skylineSrc?: string
  badge?: string
  title?: string
  subtitle?: string
  scrollHint?: string
  brandMark?: string
  brandSubmark?: string
  stats?: StatItem[]
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  navItems?: NavItem[]
  signature?: { name: string; url: string } | false
  scrubDistance?: number
  className?: string
  style?: React.CSSProperties
}

const DEFAULT_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
const DEFAULT_SKYLINE = "/images/education_skyline_cutout.png"

const DEFAULT_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "#what-we-do" },
  { label: "Methodology", href: "#how-we-teach" },
  { label: "Purpose", href: "#our-purpose" },
  { label: "Contact", href: "#contact" },
]

const DEFAULT_STATS: StatItem[] = [
  { value: "50K+", label: "Students Mentored", icon: GraduationCap },
  { value: "98.4%", label: "Exam Success Rate", icon: Trophy },
  { value: "15+", label: "Global Destinations", icon: Globe },
]

const SANS =
  "var(--font-plus-jakarta), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v))
}

export default function TokyoSkylineHero({
  videoSrc = DEFAULT_VIDEO,
  skylineSrc = DEFAULT_SKYLINE,
  badge = "GLOBAL EDUCATION & LANGUAGE PATHWAYS",
  title = "For the language your dreams speak",
  subtitle = "Academic Yatra is a comprehensive digital learning platform for language training, test preparation, and practical skill development.",
  scrollHint = "SCROLL TO EXPLORE",
  brandMark = "ACADEMIC YATRA",
  brandSubmark = "YOUR GLOBAL LEARNING EXPEDITION",
  stats = DEFAULT_STATS,
  primaryCta = { label: "Explore Programs", href: "#what-we-do" },
  secondaryCta = {
    label: "WhatsApp Guidance",
    href: "https://web.whatsapp.com/send?phone=+919403892981&text=Hi%20Academic%20Yatra,%20I%20am%20interested%20in%20learning%20more%20about%20your%20programs.",
  },
  navItems = DEFAULT_NAV,
  signature = {
    name: "Academic Yatra",
    url: "https://academicyatra.com",
  },
  scrubDistance = 3000,
  className,
  style,
}: TokyoSkylineHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)
  const brandRef = useRef<HTMLDivElement>(null)
  const skylineRef = useRef<HTMLImageElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

    let duration = video.duration || 0
    let rafId = 0
    let targetProgress = 0
    let currentProgress = 0
    let hasStartedScrolling = false
    let isSeeking = false
    let pendingTime: number | null = null
    let locked = false
    let lockedScrollY = 0
    let touchStartY = 0

    const onLoadedData = () => {
      duration = video.duration || 0
      setReady(true)
      video.play().catch(() => {})
      if (reduceMotion) {
        video.currentTime = duration
      }
    }
    video.addEventListener("loadeddata", onLoadedData)
    video.addEventListener("canplay", onLoadedData)
    if (video.readyState >= 2) {
      onLoadedData()
    } else {
      video.play().catch(() => {})
    }

    const onSeeked = () => {
      isSeeking = false
      if (pendingTime !== null) {
        const nextTime = pendingTime
        pendingTime = null
        if (video && Math.abs(video.currentTime - nextTime) >= 0.035) {
          isSeeking = true
          try {
            if ("fastSeek" in video && typeof (video as any).fastSeek === "function") {
              ;(video as any).fastSeek(nextTime)
            } else {
              video.currentTime = nextTime
            }
          } catch {
            video.currentTime = nextTime
          }
        }
      }
    }
    video.addEventListener("seeked", onSeeked)

    function seekTo(t: number) {
      if (!video) return
      // Skip redundant micro-seeks under 35ms (avoids hardware video decoder stutter/flicker)
      if (Math.abs(video.currentTime - t) < 0.035) return

      if (isSeeking || video.seeking) {
        pendingTime = t
        return
      }

      isSeeking = true
      try {
        if ("fastSeek" in video && typeof (video as any).fastSeek === "function") {
          ;(video as any).fastSeek(t)
        } else {
          video.currentTime = t
        }
      } catch {
        video.currentTime = t
      }
    }

    function engageLock() {
      if (locked || typeof document === "undefined") return
      locked = true
      lockedScrollY = window.scrollY
      const b = document.body.style
      b.position = "fixed"
      b.top = `-${lockedScrollY}px`
      b.left = "0"
      b.right = "0"
      b.width = "100%"
    }

    function releaseLock() {
      if (!locked || typeof document === "undefined") return
      locked = false
      const y = lockedScrollY
      const b = document.body.style
      b.position = ""
      b.top = ""
      b.left = ""
      b.right = ""
      b.width = ""
      window.scrollTo(0, y)
    }

    // Lock only when active at top of window
    if (typeof window !== "undefined" && window.scrollY <= 10) {
      engageLock()
    }

    function addDelta(deltaY: number): boolean {
      if (locked && targetProgress >= 0.995 && deltaY > 0) {
        releaseLock()
        return false
      }

      const next = clamp(targetProgress + deltaY / scrubDistance, 0, 1)
      targetProgress = next
      if (targetProgress > 0.001) hasStartedScrolling = true
      return true
    }

    const onWheel = (e: WheelEvent) => {
      if (!locked) {
        if (window.scrollY <= 5 && e.deltaY < 0) {
          engageLock()
          targetProgress = 0.99
          addDelta(e.deltaY)
          e.preventDefault()
        }
        return
      }

      const handled = addDelta(e.deltaY)
      if (handled) {
        e.preventDefault()
      }
    }

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0
    }

    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY ?? touchStartY
      const deltaY = touchStartY - y
      touchStartY = y

      if (!locked) {
        if (window.scrollY <= 5 && deltaY < 0) {
          engageLock()
          targetProgress = 0.99
          addDelta(deltaY)
          e.preventDefault()
        }
        return
      }

      const handled = addDelta(deltaY)
      if (handled) {
        e.preventDefault()
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: false })

    function frame() {
      const prevProgress = currentProgress
      currentProgress += (targetProgress - currentProgress) * 0.18

      // 1. Scrub video forward only when progress is actively moving or seek is pending
      const progressDelta = Math.abs(currentProgress - prevProgress)
      if (duration > 0 && (progressDelta > 0.0003 || pendingTime !== null)) {
        const videoT = clamp(currentProgress / 0.78, 0, 1)
        seekTo(videoT * duration)
      }

      // 2. Initial title fade-out and lift
      if (titleRef.current) {
        const t = 1 - clamp(currentProgress / 0.35, 0, 1)
        titleRef.current.style.opacity = String(t)
        titleRef.current.style.transform = `translateY(${(1 - t) * -36}px) scale(${0.96 + t * 0.04})`
        titleRef.current.style.filter = `blur(${(1 - t) * 12}px)`
        titleRef.current.style.pointerEvents = t > 0.2 ? "auto" : "none"
      }

      // 3. Scroll hint indicator
      if (hintRef.current) {
        hintRef.current.style.opacity = hasStartedScrolling ? "0" : "1"
      }

      // 4. Monumental Academic Yatra brand mark reveals
      if (brandRef.current) {
        const t = clamp((currentProgress - 0.55) / 0.35, 0, 1)
        brandRef.current.style.opacity = String(t)
        brandRef.current.style.transform = `translateY(${(1 - t) * 28}px) scale(${0.95 + t * 0.05})`
        brandRef.current.style.letterSpacing = `${(1 - t) * 0.15}em`
      }

      // 5. University skyline cutout rises in foreground
      if (skylineRef.current) {
        const t = clamp((currentProgress - 0.65) / 0.3, 0, 1)
        skylineRef.current.style.opacity = String(t)
        skylineRef.current.style.transform = `translateY(${(1 - t) * 40}px)`
      }

      // 6. Bottom progress bar
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${currentProgress})`
      }

      rafId = requestAnimationFrame(frame)
    }

    if (!reduceMotion) {
      rafId = requestAnimationFrame(frame)
    }

    return () => {
      video.removeEventListener("loadeddata", onLoadedData)
      video.removeEventListener("seeked", onSeeked)
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
      cancelAnimationFrame(rafId)
      releaseLock()
    }
  }, [scrubDistance])

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{
        position: "relative",
        height: "100dvh",
        width: "100%",
        overflow: "hidden",
        background: "#031643",
        ...style,
      }}
    >
      {/* Background Video Layer */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 1,
          transform: "translate3d(0, 0, 0)",
          WebkitTransform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          willChange: "transform",
          zIndex: 0,
        }}
      />

      {/* Subtle, soft cinematic vignette so the video is bright, vibrant, and clearly visible */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(3,22,67,0.4) 0%, rgba(3,22,67,0.08) 25%, rgba(3,22,67,0.12) 60%, rgba(3,22,67,0.6) 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Monumental Brand Mark (Layer 2) — Sits behind the university skyline cutout */}
      <div
        ref={brandRef}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 6% 16vh",
          textAlign: "center",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <span
          className="tracking-tight sm:tracking-normal font-black text-transparent bg-clip-text select-none"
          style={{
            fontFamily: SANS,
            fontWeight: 900,
            fontSize: "clamp(46px, 11vw, 170px)",
            lineHeight: 1.02,
            backgroundImage:
              "linear-gradient(135deg, #ffffff 0%, #34D399 35%, #38BDF8 70%, #FBBF24 100%)",
            filter:
              "drop-shadow(0 15px 35px rgba(0,0,0,0.75)) drop-shadow(0 2px 8px rgba(0,0,0,0.85)) drop-shadow(0 0 40px rgba(12,146,83,0.4))",
            textTransform: "uppercase",
          }}
        >
          {brandMark}
        </span>
        {brandSubmark && (
          <span
            style={{
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: "clamp(12px, 1.8vw, 22px)",
              letterSpacing: "0.35em",
              color: "#ffffff",
              textTransform: "uppercase",
              marginTop: 12,
              textShadow: "0 3px 20px rgba(0,0,0,0.95), 0 1px 4px rgba(0,0,0,0.9)",
            }}
          >
            {brandSubmark}
          </span>
        )}
      </div>

      {/* World University Skyline Cutout (Layer 3) — Touching both left and right edges */}
      {skylineSrc && (
        <div
          ref={skylineRef}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: "clamp(260px, 45vh, 520px)",
            opacity: 0,
            pointerEvents: "none",
            zIndex: 3,
            display: "flex",
            alignItems: "flex-end",
            overflow: "hidden",
            transition: "transform 0.1s ease-out",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={skylineSrc}
            alt="World University Architecture Skyline"
            aria-hidden="true"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
              objectPosition: "bottom center",
              filter:
                "drop-shadow(0 0 30px rgba(56,189,248,0.5)) drop-shadow(0 0 10px rgba(255,255,255,0.75)) drop-shadow(0 -4px 15px rgba(0,0,0,0.85))",
            }}
          />
        </div>
      )}

      {/* Initial Stage: Brand Introduction Hero (Layer 4) — Fades on scroll */}
      <div
        ref={titleRef}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 6%",
          textAlign: "center",
          zIndex: 4,
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4 sm:space-y-6">
          <h1
            style={{
              fontFamily: SANS,
              fontWeight: 800,
              fontSize: "clamp(26px, 5.5vw, 68px)",
              lineHeight: 1.15,
              color: "#ffffff",
              textShadow: "0 8px 40px rgba(0,0,0,0.6)",
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              style={{
                fontFamily: SANS,
                fontSize: "clamp(13px, 1.8vw, 18px)",
                lineHeight: 1.6,
                color: "rgba(226,232,240,0.92)",
                maxWidth: "680px",
                textShadow: "0 4px 20px rgba(0,0,0,0.6)",
              }}
            >
              {subtitle}
            </p>
          )}

          {/* Quick Pillar Pills: deep glass with vibrant accent jewel dots */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-2 text-xs sm:text-sm font-semibold">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#031643]/85 border border-emerald-400/50 text-white backdrop-blur-2xl shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_10px_#10B981]" />
              <span>Language Training</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#031643]/85 border border-sky-400/50 text-white backdrop-blur-2xl shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_10px_#38BDF8]" />
              <span>Test Preparation</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#031643]/85 border border-amber-400/50 text-white backdrop-blur-2xl shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[#FBBF24] shadow-[0_0_10px_#FBBF24]" />
              <span>Skill Development</span>
            </span>
          </div>
        </div>
      </div>

      {/* Floating Pill Navbar (Layer 6) */}
      {navItems && navItems.length > 0 && (
        <nav
          style={{
            position: "absolute",
            top: "clamp(12px, 2.5vh, 24px)",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "clamp(12px, 2vw, 24px)",
            padding: "clamp(8px, 1.2vw, 10px) clamp(16px, 2.5vw, 26px)",
            borderRadius: 999,
            background: "rgba(3,22,67,0.75)",
            backdropFilter: "blur(18px) saturate(160%)",
            WebkitBackdropFilter: "blur(18px) saturate(160%)",
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            zIndex: 6,
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontFamily: SANS,
                fontWeight: 600,
                fontSize: "clamp(11px, 1.2vw, 13px)",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.color = "#34D399"
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.85)"
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      {/* Scroll Hint Pulse (Layer 6) */}
      <div
        ref={hintRef}
        style={{
          position: "absolute",
          left: "50%",
          bottom: "clamp(16px, 3vh, 32px)",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          color: "rgba(255,255,255,0.75)",
          fontFamily: SANS,
          fontSize: "clamp(10px, 1.2vw, 11px)",
          fontWeight: 700,
          letterSpacing: "0.28em",
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
          zIndex: 6,
        }}
      >
        <span>{scrollHint}</span>
        <svg
          width="12"
          height="16"
          viewBox="0 0 14 18"
          style={{ animation: "hero-scroll-bounce 1.6s ease-in-out infinite" }}
        >
          <style>{`
            @keyframes hero-scroll-bounce {
              0%, 100% { transform: translateY(0); opacity: 0.4; }
              50% { transform: translateY(5px); opacity: 1; }
            }
          `}</style>
          <path
            d="M7 1 L7 17 M2 12 L7 17 L12 12"
            stroke="currentColor"
            strokeWidth="1.75"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Bottom Glowing Progress Line */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 3,
          background: "rgba(255,255,255,0.1)",
          zIndex: 7,
        }}
      >
        <div
          ref={progressBarRef}
          style={{
            height: "100%",
            width: "100%",
            background: "linear-gradient(90deg, #10B981 0%, #38BDF8 50%, #FBBF24 100%)",
            boxShadow: "0 0 12px rgba(56,189,248,0.7)",
            transform: "scaleX(0)",
            transformOrigin: "left center",
          }}
        />
      </div>

      {/* Brand Signature */}
      {signature && (
        <span
          style={{
            position: "absolute",
            right: "clamp(12px, 2.5vw, 24px)",
            bottom: "clamp(10px, 2vw, 16px)",
            fontFamily: SANS,
            fontWeight: 600,
            fontSize: "clamp(10px, 1.2vw, 12px)",
            letterSpacing: "0.05em",
            color: "rgba(255,255,255,0.5)",
            zIndex: 6,
          }}
        >
          by{" "}
          <a
            href={signature.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.color = "#34D399"
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.7)"
            }}
          >
            {signature.name}
          </a>
        </span>
      )}
    </div>
  )
}
