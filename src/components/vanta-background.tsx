"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

declare global {
  interface Window {
    VANTA: {
      DOTS: (options: any) => any;
    };
    THREE: any;
  }
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!vantaRef.current || !window.VANTA || !mounted) return;

    // Determine if we're in dark mode
    // Check resolvedTheme first, then check document class as fallback
    const isDark = 
      resolvedTheme === "dark" || 
      (resolvedTheme === "system" && 
       window.matchMedia("(prefers-color-scheme: dark)").matches) ||
      (typeof document !== "undefined" && document.documentElement.classList.contains("dark"));

    // Clean up previous instance if it exists
    if (vantaEffect.current) {
      vantaEffect.current.destroy();
    }

    // Initialize Vanta effect with theme-appropriate colors
    vantaEffect.current = window.VANTA.DOTS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      // Light mode: black dots, white background
      // Dark mode: white dots, black background
      color: isDark ? 0xfffffa : 0x000000,
      color2: isDark ? 0x100f0f : 0x000000,
      backgroundColor: isDark ? 0x0 : 0xffffff,
      size: 4.5,
      spacing: 38.0,
      showLines: false,
    });

    // Cleanup function
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, [resolvedTheme, theme, mounted]);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-10"
      id="vanta-background"
    />
  );
}

