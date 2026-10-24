"use client";

import { useEffect, useRef, RefObject } from "react";

/**
 * useDragToScroll
 * Enables silky-smooth horizontal click-and-drag scrolling for carousels.
 * Works seamlessly across desktop mouse, trackpads, and touch devices.
 * Intercepts accidental clicks during drag, disables text selection and image ghosting.
 */
export function useDragToScroll<T extends HTMLElement = HTMLDivElement>(
  externalRef?: RefObject<T | null>
) {
  const internalRef = useRef<T>(null);
  const ref = (externalRef || internalRef) as RefObject<T>;
  const isDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const hasDragged = useRef(false);
  const lastX = useRef(0);
  const velocity = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    const slider = ref.current;
    if (!slider) return;

    const onMouseDown = (e: MouseEvent) => {
      // Only primary left mouse button
      if (e.button !== 0) return;

      isDown.current = true;
      hasDragged.current = false;
      startX.current = e.clientX;
      lastX.current = e.clientX;
      startScrollLeft.current = slider.scrollLeft;
      velocity.current = 0;
      lastTime.current = performance.now();

      // Temporarily remove snap and smooth scroll for instantaneous 1:1 drag response
      slider.style.scrollBehavior = "auto";
      slider.style.scrollSnapType = "none";
      slider.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown.current) return;

      const currentX = e.clientX;
      const deltaX = currentX - startX.current;
      const now = performance.now();
      const dt = now - lastTime.current;

      if (dt > 0) {
        velocity.current = (currentX - lastX.current) / dt;
      }
      lastX.current = currentX;
      lastTime.current = now;

      if (Math.abs(deltaX) > 4) {
        hasDragged.current = true;
        e.preventDefault();
      }

      slider.scrollLeft = startScrollLeft.current - deltaX;
    };

    const onMouseUp = () => {
      if (!isDown.current) return;
      isDown.current = false;

      slider.style.cursor = "";
      slider.style.scrollBehavior = "smooth";
      slider.style.scrollSnapType = "";
      document.body.style.userSelect = "";

      // Smooth inertia momentum if swiped fast
      if (Math.abs(velocity.current) > 0.25) {
        const momentumDistance = -velocity.current * 250;
        slider.scrollBy({ left: momentumDistance, behavior: "smooth" });
      }

      // Delay resetting hasDragged so click listeners can suppress accidental navigation
      setTimeout(() => {
        hasDragged.current = false;
        if (slider) {
          slider.style.scrollBehavior = "";
        }
      }, 100);
    };

    const onMouseLeave = () => {
      if (isDown.current) {
        onMouseUp();
      }
    };

    // Prevent navigation / card click when the user was dragging
    const onClickCapture = (e: MouseEvent) => {
      if (hasDragged.current) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Prevent browser native image / file drag
    const onDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    slider.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("mouseleave", onMouseLeave);
    slider.addEventListener("click", onClickCapture, true);
    slider.addEventListener("dragstart", onDragStart);

    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      slider.removeEventListener("mouseleave", onMouseLeave);
      slider.removeEventListener("click", onClickCapture, true);
      slider.removeEventListener("dragstart", onDragStart);
      document.body.style.userSelect = "";
    };
  }, [ref]);

  return ref;
}
