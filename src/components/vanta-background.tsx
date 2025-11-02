"use client";

import { useEffect, useRef } from "react";

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

  useEffect(() => {
    if (!vantaRef.current || !window.VANTA) return;

    // Clean up previous instance if it exists
    if (vantaEffect.current) {
      vantaEffect.current.destroy();
    }

    // Initialize Vanta effect
    vantaEffect.current = window.VANTA.DOTS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xfffffa,
      color2: 0x100f0f,
      backgroundColor: 0x0,
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
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-10"
      id="vanta-background"
    />
  );
}

