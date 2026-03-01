"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ImageRevealProps {
  src: string;
  alt: string;
  enabled: boolean;
  duration?: number;
  onComplete?: () => void;
  className?: string;
}

export function ImageReveal({
  src,
  alt,
  enabled,
  duration = 2500,
  onComplete,
  className = "",
}: ImageRevealProps) {
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const completedRef = useRef(false);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    // Reset for new animation
    setProgress(0);
    completedRef.current = false;
    startTimeRef.current = Date.now();

    const animate = () => {
      if (!startTimeRef.current) return;

      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min(elapsed / duration, 1);
      setProgress(newProgress);

      if (newProgress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else if (!completedRef.current) {
        completedRef.current = true;
        onComplete?.();
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [enabled, duration, onComplete]);

  const clipPercent = 100 - progress * 100;
  const blur = Math.max(0, 12 - progress * 12);
  const saturation = 0.4 + progress * 0.6;

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{ minHeight: "220px" }}
    >
      {/* Shimmer loading background */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-xl"
        style={{
          backgroundSize: "200% 100%",
          animation: progress < 1 ? "shimmer 1.5s infinite" : "none",
        }}
      />

      {/* Image with reveal animation */}
      <div
        className="relative w-full"
        style={{
          clipPath: `inset(${clipPercent}% 0 0 0)`,
          filter: `blur(${blur}px) saturate(${saturation})`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-xl"
          priority
        />
      </div>

      {/* "Generating..." text overlay */}
      {progress < 1 && (
        <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5">
          <div className="flex gap-1">
            <span
              className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <span
              className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
          <span className="font-plus-jakarta text-white text-xs font-medium">
            Generating... {Math.round(progress * 100)}%
          </span>
        </div>
      )}
    </div>
  );
}

export default ImageReveal;
