"use client";

import React, { useState, useEffect, useCallback } from "react";
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
  duration = 2000,
  onComplete,
  className = "",
}: ImageRevealProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = useCallback(() => {
    setIsComplete(true);
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    if (!enabled) {
      setProgress(0);
      setIsComplete(false);
      return;
    }

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / duration, 1);
      setProgress(newProgress);

      if (newProgress < 1) {
        requestAnimationFrame(animate);
      } else {
        handleComplete();
      }
    };

    requestAnimationFrame(animate);
  }, [enabled, duration, handleComplete]);

  // Calculate animation values based on progress
  const clipPercent = 100 - progress * 100;
  const blur = Math.max(0, 20 - progress * 20);
  const saturation = progress;

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{
        opacity: enabled || isComplete ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      {/* Shimmer loading effect behind image */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
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
          transition: "clip-path 0.05s linear, filter 0.1s linear",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={400}
          height={400}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* "Generating..." text overlay */}
      {progress < 1 && enabled && (
        <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5">
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
          <span className="text-white text-xs font-medium">
            Generating... {Math.round(progress * 100)}%
          </span>
        </div>
      )}
    </div>
  );
}

export default ImageReveal;
