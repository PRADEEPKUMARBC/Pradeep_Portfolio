"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic import with ssr: false to prevent SSR hydration errors
const DynamicScene = dynamic(
  () => import("./GeometricOrbScene"),
  {
    ssr: false,
    loading: () => <FallbackVisual />,
  }
);

function FallbackVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Animated glowing orbital rings */}
        <div className="absolute inset-0 rounded-full border border-brand-blue/30 animate-pulse-slow"></div>
        <div className="absolute inset-6 rounded-full border border-dashed border-brand-cyan/40 animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute inset-12 rounded-full border border-brand-violet/30 animate-[spin_15s_linear_infinite_reverse]"></div>
        
        {/* Core glyph */}
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-blue/20 via-brand-cyan/10 to-brand-violet/20 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-2xl">
          <svg className="w-12 h-12 text-brand-cyan/80 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function HeroCanvas() {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Simple WebGL detection
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!mounted) {
    return <FallbackVisual />;
  }

  if (!hasWebGL) {
    return <FallbackVisual />;
  }

  return (
    <div className="w-full h-full relative" aria-label="Interactive 3D Geometric Sculpture">
      <DynamicScene />
    </div>
  );
}
