"use client";

import React from "react";
import { useTypewriter } from "@/hooks/useTypewriter";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  startDelay?: number;
  enabled?: boolean;
  showCursor?: boolean;
  cursorStyle?: "block" | "line";
  className?: string;
  onComplete?: () => void;
}

export function TypewriterText({
  text,
  speed = 50,
  startDelay = 0,
  enabled = true,
  showCursor = true,
  cursorStyle = "line",
  className = "",
  onComplete,
}: TypewriterTextProps) {
  const { displayText, isTyping, isComplete } = useTypewriter({
    text,
    speed,
    startDelay,
    enabled,
    onComplete,
  });

  return (
    <span className={`whitespace-pre-wrap ${className}`}>
      {displayText}
      {showCursor && (isTyping || !isComplete) && (
        <span
          className={`inline-block ml-0.5 animate-pulse ${
            cursorStyle === "block"
              ? "w-2 h-5 bg-current opacity-70"
              : "w-0.5 h-5 bg-current"
          }`}
          style={{ verticalAlign: "text-bottom" }}
        />
      )}
    </span>
  );
}

export default TypewriterText;
