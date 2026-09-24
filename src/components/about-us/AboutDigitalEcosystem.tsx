"use client";

import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCw,
  X,
} from "lucide-react";

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

export default function AboutDigitalEcosystem() {
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
  const [isRotated, setIsRotated] = useState(true);
  const [isDeviceLandscape, setIsDeviceLandscape] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateOrientation = () => {
      if (typeof window !== "undefined") {
        setIsDeviceLandscape(window.innerWidth > window.innerHeight);
      }
    };
    updateOrientation();
    window.addEventListener("resize", updateOrientation);
    window.addEventListener("orientationchange", updateOrientation);
    return () => {
      window.removeEventListener("resize", updateOrientation);
      window.removeEventListener("orientationchange", updateOrientation);
    };
  }, []);

  // Lock body scroll when expanded
  useEffect(() => {
    if (isExpanded) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isExpanded]);

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

  const handleOpenExpand = () => {
    const video = videoRef.current;
    const time = video?.currentTime || currentTime;
    setIsExpanded(true);
    setIsRotated(true);
    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.currentTime = time;
        modalVideoRef.current.muted = isMuted;
        if (isPlaying) {
          modalVideoRef.current.play().catch(() => {});
        }
      }
    }, 60);
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
    }, 60);
  };

  const toggleRotate = () => {
    setIsRotated((prev) => !prev);
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;
  const shouldRotate = !isDeviceLandscape && isRotated;

  const rotatedContainerStyle: React.CSSProperties = shouldRotate
    ? {
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "100vh",
        height: "100vw",
        transform: "translate(-50%, -50%) rotate(90deg)",
        transformOrigin: "center center",
        maxWidth: "100vh",
        maxHeight: "100vw",
      }
    : {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        transform: "none",
      };

  return (
    <section className="py-12 sm:py-20 bg-white relative overflow-hidden">
      {/* Seamless Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-50/70 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-sky-50/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-dark tracking-tight">
            Digital Learning Ecosystem{" "}
            <span className="text-brand-primary">(Included with All Programs)</span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
            Upon successful enrollment and payment confirmation, students are issued dedicated dashboard credentials providing instant access to our state-of-the-art virtual campus.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SINGLE PROPER BIG VIDEO SHOWCASE (Replacing static mockup & card grid)    */}
        {/* Plays the full interactive video with custom seeker, volume & landscape.   */}
        {/* ========================================================================= */}
        <div className="max-w-6xl mx-auto mb-10">
          <div className="relative rounded-2xl sm:rounded-3xl bg-slate-900/95 p-2 sm:p-4 shadow-[0_25px_60px_rgba(3,22,67,0.3)] border border-slate-700/70 backdrop-blur-2xl ring-1 ring-white/10">
            
            {/* macOS Browser Header */}
            <div className="flex items-center justify-between px-2 sm:px-4 py-2 sm:py-2.5 border-b border-slate-800 mb-2 sm:mb-3">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/50 text-[10px] sm:text-xs font-mono text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>portal.academicyatra.com</span>
                <span className="text-slate-500 hidden sm:inline">/virtual-campus</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-[11px] font-medium">
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[10px] sm:text-xs font-semibold">
                  Live Preview
                </span>
              </div>
            </div>

            {/* Video Container (16:9 Aspect Ratio) */}
            <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner group">
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
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px] transition-all cursor-pointer z-10"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform border border-emerald-400/30">
                    <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-white ml-1" />
                  </div>
                </button>
              )}

              {/* Top Right Quick Landscape Expand Button */}
              <button
                onClick={handleOpenExpand}
                aria-label="Expand video to landscape view"
                className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/65 hover:bg-black/85 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 shadow-md cursor-pointer transition-all active:scale-95"
              >
                <RotateCw className="w-3.5 h-3.5 text-emerald-400" />
                <span>Fullscreen</span>
              </button>

              {/* Bottom Overlay Controls Bar */}
              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/95 via-black/60 to-transparent pt-8 pb-3 px-3 sm:px-5 flex flex-col gap-2.5">
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
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md scale-90 group-hover/scrubber:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Bottom Control Buttons Row */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    {/* Play / Pause Toggle Button */}
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-90 cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 fill-white" />
                      ) : (
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      )}
                    </button>

                    {/* Volume Toggle Button */}
                    <button
                      onClick={toggleMute}
                      aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-90 cursor-pointer"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-slate-300" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-emerald-400" />
                      )}
                    </button>

                    {/* Time Tracker Display */}
                    <span className="text-xs text-white/90 font-mono font-medium tracking-tight">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  {/* Inside Card Expand Button */}
                  <button
                    onClick={handleOpenExpand}
                    aria-label="Expand video"
                    className="flex items-center gap-1.5 text-xs font-bold text-white/95 hover:text-emerald-300 transition-colors cursor-pointer bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full border border-white/15"
                  >
                    <RotateCw className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Expand</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Status Sub-bar */}
            <div className="mt-3 pt-2.5 sm:pt-3 px-2 sm:px-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-300 font-medium">
                  Active Virtual Campus • Batch 2025–26
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px] sm:text-xs">
                <span>Integrated AI Drills</span>
                <span className="text-slate-600">•</span>
                <span>Automated Band Scoring</span>
                <span className="text-slate-600">•</span>
                <span>Session Recordings 24/7</span>
              </div>
            </div>

          </div>
        </div>

        {/* Access Note Disclaimer Badge */}
        <div className="max-w-2xl mx-auto text-center bg-slate-50 border border-slate-200 rounded-2xl p-4">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            <span className="font-bold text-slate-700">Note:</span> Access to specific features, modules, and mock test limits depends on the exact program and tier selected at enrollment.
          </p>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* FULLSCREEN / ROTATED MODAL PORTAL                                         */}
      {/* ========================================================================= */}
      {mounted &&
        isExpanded &&
        createPortal(
          <div className="fixed inset-0 z-[99999] bg-black flex items-center justify-center overflow-hidden">
            <div
              style={rotatedContainerStyle}
              className="relative flex items-center justify-center bg-black"
            >
              {/* Modal Video Element */}
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

              {/* Close / Minimize Button */}
              <button
                onClick={handleCloseExpand}
                aria-label="Close fullscreen"
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 backdrop-blur-md cursor-pointer transition-all active:scale-95 shadow-xl"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Toggle Rotation Button */}
              {!isDeviceLandscape && (
                <button
                  onClick={toggleRotate}
                  aria-label="Toggle landscape rotation"
                  className="absolute top-4 left-4 z-50 flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/70 hover:bg-black/90 text-white text-xs font-bold border border-white/20 backdrop-blur-md cursor-pointer transition-all active:scale-95 shadow-xl"
                >
                  <RotateCw className="w-4 h-4 text-emerald-400" />
                  <span>{isRotated ? "Portrait" : "Landscape"}</span>
                </button>
              )}

              {/* Modal Center Play Icon */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  aria-label="Play video"
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px] transition-all cursor-pointer z-30"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform border border-emerald-400/30">
                    <Play className="w-10 h-10 fill-white ml-1" />
                  </div>
                </button>
              )}

              {/* Modal Bottom Controls */}
              <div className="absolute inset-x-0 bottom-0 z-40 bg-gradient-to-t from-black/95 via-black/60 to-transparent pt-10 pb-5 px-6 flex flex-col gap-3">
                {/* Modal Progress Scrubber */}
                <div
                  ref={modalProgressBarRef}
                  onClick={(e) => handleSeek(e, true)}
                  className="relative w-full h-2 hover:h-3 bg-white/25 rounded-full cursor-pointer transition-all flex items-center group/scrubber"
                >
                  <div
                    className="h-full bg-emerald-500 rounded-full relative transition-all duration-75"
                    style={{ width: `${progressPercent}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md scale-90 group-hover/scrubber:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Modal Controls Row */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                      className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-90 cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 fill-white" />
                      ) : (
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      )}
                    </button>

                    <button
                      onClick={toggleMute}
                      aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                      className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-90 cursor-pointer"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-slate-300" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-emerald-400" />
                      )}
                    </button>

                    <span className="text-xs text-white/90 font-mono font-medium">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  <span className="text-xs text-emerald-400 font-medium">
                    Academic Yatra Virtual Campus
                  </span>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
