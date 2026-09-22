"use client";

import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Megaphone,
  Award,
  Target,
  MessageSquare,
  CheckCircle2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  X,
} from "lucide-react";
import { PackageDetailData, EcosystemCard } from "@/data/packageDetailsData";
import { cn } from "@/lib/utils";

interface PackageWhyChooseProps {
  whyChoose: PackageDetailData["whyChoose"];
}

interface StepConfig {
  number: string;
  numberColor: string;
  badgeBg: string;
  glowColor: string;
  bubbleColor: string;
  checkColor: string;
  fallbackDesc: string;
  videoSrc: string;
  icon: React.ElementType;
}

const VIDEO_FILES = [
  "/images/1.mp4",
  "/images/2.mp4",
  "/images/3.mp4",
  "/images/4.mp4",
  "/images/5.mp4",
  "/images/6.mp4",
];

const STEP_CONFIGS: Record<EcosystemCard["iconType"], StepConfig> = {
  dashboard: {
    number: "01",
    numberColor: "text-sky-400",
    badgeBg: "bg-sky-500 text-white shadow-sky-500/25",
    glowColor: "from-sky-400/25 via-blue-500/20 to-sky-300/20",
    bubbleColor: "bg-sky-100",
    checkColor: "text-sky-500",
    fallbackDesc:
      "A distraction-free, unified command center where your schedules, attendance, active modules, and diagnostic scores live in perfect harmony.",
    videoSrc: "/images/1.mp4",
    icon: LayoutDashboard,
  },
  lessons: {
    number: "02",
    numberColor: "text-emerald-400",
    badgeBg: "bg-emerald-500 text-white shadow-emerald-500/25",
    glowColor: "from-emerald-400/25 via-teal-500/20 to-lime-300/20",
    bubbleColor: "bg-emerald-100",
    checkColor: "text-emerald-500",
    fallbackDesc:
      "Crystal-clear video explanations, high-scoring cheat-sheets, and curated vocabulary flashcards built for fast, structured concept mastery.",
    videoSrc: "/images/2.mp4",
    icon: BookOpen,
  },
  classes: {
    number: "03",
    numberColor: "text-purple-400",
    badgeBg: "bg-purple-600 text-white shadow-purple-500/25",
    glowColor: "from-purple-400/25 via-indigo-500/20 to-pink-300/20",
    bubbleColor: "bg-purple-100",
    checkColor: "text-purple-500",
    fallbackDesc:
      "Participate in live interactive lectures, solve real exam questions in real-time, and get immediate feedback with complete lifetime session recordings.",
    videoSrc: "/images/3.mp4",
    icon: Megaphone,
  },
  practice: {
    number: "04",
    numberColor: "text-amber-400",
    badgeBg: "bg-amber-500 text-white shadow-amber-500/25",
    glowColor: "from-amber-400/25 via-orange-500/20 to-yellow-300/20",
    bubbleColor: "bg-amber-100",
    checkColor: "text-amber-500",
    fallbackDesc:
      "Sharpen every module with timed topic-wise exercises, adaptive skill-building question banks, instant scoring, and granular progress tracking.",
    videoSrc: "/images/4.mp4",
    icon: Award,
  },
  mock: {
    number: "05",
    numberColor: "text-indigo-400",
    badgeBg: "bg-indigo-600 text-white shadow-indigo-500/25",
    glowColor: "from-indigo-400/25 via-blue-600/20 to-cyan-300/20",
    bubbleColor: "bg-indigo-100",
    checkColor: "text-indigo-500",
    fallbackDesc:
      "Experience authentic test-day pressure with full-length adaptive mock exams matching official scoring criteria and accurate band predictions.",
    videoSrc: "/images/5.mp4",
    icon: Target,
  },
  evaluation: {
    number: "06",
    numberColor: "text-rose-400",
    badgeBg: "bg-rose-500 text-white shadow-rose-500/25",
    glowColor: "from-rose-400/25 via-pink-500/20 to-orange-300/20",
    bubbleColor: "bg-rose-100",
    checkColor: "text-rose-500",
    fallbackDesc:
      "Receive in-depth line-by-line diagnostic reviews, individual band improvement strategies, and personalized 1-on-1 mentor guidance.",
    videoSrc: "/images/6.mp4",
    icon: MessageSquare,
  },
};

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

/**
 * Mobile Interactive Video Player with Progress Indicator,
 * Play/Pause, Volume Toggle, and True Fullscreen Horizontal Landscape View.
 */
function MobileInteractiveVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const modalProgressBarRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    setCurrentTime(video.currentTime);
    if (!duration && video.duration) {
      setDuration(video.duration);
    }
  };

  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    setDuration(e.currentTarget.duration);
  };

  const togglePlay = () => {
    const targetVideo = isExpanded ? modalVideoRef.current : videoRef.current;
    if (targetVideo) {
      if (targetVideo.paused) {
        targetVideo.play().catch(() => {});
        setIsPlaying(true);
      } else {
        targetVideo.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) videoRef.current.muted = nextMuted;
    if (modalVideoRef.current) modalVideoRef.current.muted = nextMuted;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>, inModal = false) => {
    const bar = inModal ? modalProgressBarRef.current : progressBarRef.current;
    if (!bar || !duration) return;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const targetTime = percentage * duration;

    setCurrentTime(targetTime);
    if (videoRef.current) videoRef.current.currentTime = targetTime;
    if (modalVideoRef.current) modalVideoRef.current.currentTime = targetTime;
  };

  // Open True Horizontal View (Native Fullscreen or Rotated Landscape Lightbox via Portal)
  const handleOpenExpand = async () => {
    const video = videoRef.current;
    if (!video) return;

    // 1. Try iOS Safari Native Fullscreen
    if ((video as any).webkitEnterFullscreen) {
      try {
        (video as any).webkitEnterFullscreen();
        if (video.paused) {
          video.play().catch(() => {});
          setIsPlaying(true);
        }
        return;
      } catch (e) {
        console.log("iOS webkitEnterFullscreen fallback", e);
      }
    }

    // 2. Try Standard Fullscreen with Landscape Lock
    if (video.requestFullscreen) {
      try {
        await video.requestFullscreen();
        if ((screen.orientation as any)?.lock) {
          (screen.orientation as any).lock("landscape").catch(() => {});
        }
        if (video.paused) {
          video.play().catch(() => {});
          setIsPlaying(true);
        }
        return;
      } catch (e) {
        console.log("Standard requestFullscreen fallback", e);
      }
    } else if ((video as any).webkitRequestFullscreen) {
      try {
        await (video as any).webkitRequestFullscreen();
        if (video.paused) {
          video.play().catch(() => {});
          setIsPlaying(true);
        }
        return;
      } catch (e) {
        console.log("webkitRequestFullscreen fallback", e);
      }
    }

    // 3. Fallback: Full Horizontal View Portal (Auto-rotated landscape on mobile portrait)
    const time = video.currentTime || currentTime;
    setIsExpanded(true);
    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.currentTime = time;
        modalVideoRef.current.muted = isMuted;
        if (isPlaying) {
          modalVideoRef.current.play().catch(() => {});
        }
      }
    }, 50);
  };

  const handleCloseExpand = () => {
    const time = modalVideoRef.current?.currentTime || currentTime;
    setIsExpanded(false);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = time;
        videoRef.current.muted = isMuted;
        if (isPlaying) {
          videoRef.current.play().catch(() => {});
        }
      }
    }, 50);
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <div className="relative w-full max-w-[540px] mx-auto py-2">
        {/* Soft Ambient Glow in Brand Colors */}
        <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-indigo-500/20 blur-2xl opacity-80 pointer-events-none -z-10" />

        {/* Decorative Floating Accent Bubbles */}
        <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-sky-100/80 blur-xs pointer-events-none" />
        <div className="absolute -bottom-3 -left-3 w-16 h-16 rounded-full bg-emerald-100/80 blur-xs pointer-events-none" />

        {/* Glowing Card Frame */}
        <div className="relative rounded-[28px] bg-white p-3 border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.1)]">
          {/* Video Container (16:9 Aspect Ratio) */}
          <div className="relative aspect-video w-full rounded-[20px] overflow-hidden bg-slate-950 border border-slate-200/60 shadow-inner group">
            <video
              ref={videoRef}
              src="/images/full%20video.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="metadata"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
            />

            {/* Center Big Play Icon when Paused */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                aria-label="Play video"
                className="absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[1px] transition-all cursor-pointer z-10"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
              </button>
            )}

            {/* Top Right Quick Horizontal Expand Button */}
            <button
              onClick={handleOpenExpand}
              aria-label="Expand video to horizontal view"
              className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/65 hover:bg-black/85 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 shadow-md cursor-pointer transition-all active:scale-95"
            >
              <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full Screen</span>
            </button>

            {/* Bottom Overlay Controls Bar */}
            <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/55 to-transparent pt-6 pb-2.5 px-3 flex flex-col gap-2">
              {/* Progress Indicator Track */}
              <div
                ref={progressBarRef}
                onClick={(e) => handleSeek(e, false)}
                className="relative w-full h-1.5 hover:h-2.5 bg-white/25 rounded-full cursor-pointer transition-all flex items-center group/scrubber"
              >
                <div
                  className="h-full bg-emerald-500 rounded-full relative transition-all duration-75"
                  style={{ width: `${progressPercent}%` }}
                >
                  {/* Scrubber Knob */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md scale-90 group-hover/scrubber:scale-110 transition-transform" />
                </div>
              </div>

              {/* Bottom Control Buttons Row */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {/* Play / Pause Toggle Button */}
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-90 cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="w-3.5 h-3.5 fill-white" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                    )}
                  </button>

                  {/* Volume Toggle Button */}
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-90 cursor-pointer"
                  >
                    {isMuted ? (
                      <VolumeX className="w-3.5 h-3.5 text-slate-300" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </button>

                  {/* Time Tracker Display */}
                  <span className="text-[11px] text-white/90 font-mono font-medium tracking-tight">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                {/* Inside Card Expand Button */}
                <button
                  onClick={handleOpenExpand}
                  aria-label="Expand video"
                  className="flex items-center gap-1.5 text-[11px] font-bold text-white/95 hover:text-emerald-300 transition-colors cursor-pointer bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full border border-white/15"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Full View</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* REACT PORTAL: TRUE HORIZONTAL FULLSCREEN LIGHTBOX (Rotated on Portrait)   */}
      {/* Rendered directly at document.body level so it NEVER breaks page layout   */}
      {/* ========================================================================= */}
      {mounted &&
        isExpanded &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-[999999] bg-black flex items-center justify-center overflow-hidden">
            {/* Horizontal view container - auto-rotates 90 deg on portrait mobile phones to fill horizontal view */}
            <div className="relative w-full h-full flex flex-col justify-between p-2 sm:p-5 portrait:rotate-90 portrait:w-[100vh] portrait:h-[100vw] portrait:fixed portrait:top-1/2 portrait:left-1/2 portrait:-translate-x-1/2 portrait:-translate-y-1/2 bg-black select-none">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between px-3 pt-2 text-white z-30 shrink-0 w-full">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs sm:text-sm font-bold text-white font-heading tracking-wide">
                    Academic Yatra • Full Horizontal View
                  </span>
                </div>

                <button
                  onClick={handleCloseExpand}
                  aria-label="Close full view"
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white active:scale-95 transition-all cursor-pointer border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 16:9 Video centered to fill horizontal screen */}
              <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden my-auto max-h-[82vh]">
                <video
                  ref={modalVideoRef}
                  src="/images/full%20video.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  className="w-full h-full object-contain cursor-pointer"
                  onClick={togglePlay}
                />

                {/* Big center play icon in modal */}
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform">
                      <Play className="w-8 h-8 fill-white ml-1" />
                    </div>
                  </button>
                )}
              </div>

              {/* Bottom Control Bar in Modal */}
              <div className="w-full px-3 pb-2 space-y-2 z-30 shrink-0 bg-gradient-to-t from-black via-black/80 to-transparent">
                {/* Scrubber Bar */}
                <div
                  ref={modalProgressBarRef}
                  onClick={(e) => handleSeek(e, true)}
                  className="relative w-full h-2 bg-white/25 hover:h-3 rounded-full cursor-pointer transition-all flex items-center"
                >
                  <div
                    className="h-full bg-emerald-500 rounded-full relative"
                    style={{ width: `${progressPercent}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-lg" />
                  </div>
                </div>

                {/* Controls Row */}
                <div className="flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center cursor-pointer active:scale-95"
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 fill-white" />
                      ) : (
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      )}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center cursor-pointer active:scale-95"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-slate-300" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-emerald-400" />
                      )}
                    </button>

                    <span className="font-mono text-white/90">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  <button
                    onClick={handleCloseExpand}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-semibold cursor-pointer border border-white/20"
                  >
                    <Minimize2 className="w-3.5 h-3.5" />
                    <span>Exit Full View</span>
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

function VideoCard({
  config,
  videoSrc,
}: {
  config: StepConfig;
  videoSrc?: string;
}) {
  const src = videoSrc || config.videoSrc || "/images/1.mp4";

  return (
    <div className="relative w-full max-w-[560px] mx-auto group">
      {/* Decorative Soft Pastel Circles */}
      <div
        className={cn(
          "absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-18 sm:h-18 rounded-full opacity-60 pointer-events-none transition-transform duration-500 group-hover:scale-110",
          config.bubbleColor
        )}
      />
      <div
        className={cn(
          "absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-14 h-14 sm:w-20 sm:h-20 rounded-full opacity-50 pointer-events-none transition-transform duration-500 group-hover:scale-110",
          config.bubbleColor
        )}
      />

      {/* Atmospheric Ambient Glow behind card */}
      <div
        className={cn(
          "absolute -inset-2.5 sm:-inset-5 rounded-[32px] sm:rounded-[40px] bg-gradient-to-br blur-xl sm:blur-2xl opacity-70 pointer-events-none -z-10 transition-opacity duration-300 group-hover:opacity-90",
          config.glowColor
        )}
      />

      {/* Main White Card Container */}
      <div className="relative rounded-[24px] sm:rounded-[34px] bg-white p-2.5 sm:p-4 border border-slate-200/70 shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
        {/* Horizontal Video Element (16:9 Aspect Ratio) */}
        <div className="relative aspect-video w-full rounded-[18px] sm:rounded-[26px] overflow-hidden bg-slate-950 border border-slate-200/60 shadow-inner">
          <video
            key={src}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function PackageWhyChoose({ whyChoose }: PackageWhyChooseProps) {
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50/40 to-white relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-4 sm:gap-6 text-center md:text-left">
          <div className="space-y-2.5 max-w-xl mx-auto md:mx-0">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-brand-navy tracking-tight font-heading leading-tight sm:leading-snug">
              <span>{whyChoose.headingPrefix} </span>
              <span className="text-emerald-600">{whyChoose.headingHighlight}</span>
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-md font-normal leading-relaxed font-body mx-auto md:mx-0">
            {whyChoose.subtitle}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW: Interactive Single Hero Video ('full video.mp4')             */}
        {/* With Progress Scrubber, Play/Pause, Volume Toggle, and Expand Modal       */}
        {/* ========================================================================= */}
        <div className="block lg:hidden">
          <MobileInteractiveVideo />
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Full Alternating Zigzag Process with Horizontal Video Cards */}
        {/* Each card renders its unique video (1.mp4 to 6.mp4)                       */}
        {/* ========================================================================= */}
        <div className="hidden lg:block space-y-8 sm:space-y-12">
          {whyChoose.cards.map((card, idx) => {
            const config = STEP_CONFIGS[card.iconType] || STEP_CONFIGS.dashboard;
            const Icon = config.icon;
            const videoSrc = VIDEO_FILES[idx] || config.videoSrc || `/images/${idx + 1}.mp4`;
            // Alternating pattern on desktop: even on left (text left, video right), odd on right (video left, text right)
            const isVideoLeft = idx % 2 === 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: easeCurve }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Text Content Column */}
                <div
                  className={cn(
                    "lg:col-span-6 space-y-5",
                    isVideoLeft ? "lg:order-2 text-left" : "lg:order-1 text-left"
                  )}
                >
                  {/* Step Pill Badge */}
                  <div className="inline-flex items-center gap-2.5">
                    <span
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center font-heading font-black text-xs shadow-md shrink-0",
                        config.badgeBg
                      )}
                    >
                      {config.number}
                    </span>
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 font-heading">
                      Ecosystem Pillar {config.number}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight leading-snug">
                    {card.title}
                  </h3>

                  {/* Fallback & Custom Paragraph */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-body">
                    {card.description || config.fallbackDesc}
                  </p>

                  {/* Bullet Checklist */}
                  {card.items && card.items.length > 0 && (
                    <div className="space-y-2.5 pt-1">
                      {card.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-3">
                          <CheckCircle2
                            className={cn(
                              "w-4 h-4 shrink-0 mt-0.5",
                              config.checkColor
                            )}
                          />
                          <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Horizontal Video Showcase Card Column */}
                <div
                  className={cn(
                    "lg:col-span-6 flex justify-center",
                    isVideoLeft ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <VideoCard config={config} videoSrc={videoSrc} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
