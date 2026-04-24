"use client";

import { useEffect } from "react";
import { track } from "../lib/track";

/**
 * Sets up global tracking:
 * - Initialises window.dataLayer
 * - Delegated click listener for any element with a data-track attribute
 */
export default function Tracking() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];

    function handleClick(e: MouseEvent) {
      const el = (e.target as HTMLElement).closest("[data-track]");
      if (el) {
        const event = el.getAttribute("data-track")!;
        const label = el.getAttribute("data-track-label") || undefined;
        track(event, label ? { label } : undefined);
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
