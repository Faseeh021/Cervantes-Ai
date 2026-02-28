import { useState, useEffect, useCallback } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  startDelay?: number;
  onComplete?: () => void;
  enabled?: boolean;
}

interface UseTypewriterReturn {
  displayText: string;
  isTyping: boolean;
  isComplete: boolean;
  reset: () => void;
}

export function useTypewriter({
  text,
  speed = 50,
  startDelay = 0,
  onComplete,
  enabled = true,
}: UseTypewriterOptions): UseTypewriterReturn {
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const reset = useCallback(() => {
    setDisplayText("");
    setCharIndex(0);
    setIsTyping(false);
    setIsComplete(false);
    setHasStarted(false);
  }, []);

  // Handle start delay
  useEffect(() => {
    if (!enabled || hasStarted) return;

    const startTimer = setTimeout(() => {
      setHasStarted(true);
      setIsTyping(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [enabled, startDelay, hasStarted]);

  // Handle typing animation
  useEffect(() => {
    if (!hasStarted || !isTyping || isComplete) return;

    if (charIndex >= text.length) {
      setIsTyping(false);
      setIsComplete(true);
      onComplete?.();
      return;
    }

    // Variable speed: faster for spaces, slight randomization
    const char = text[charIndex];
    const charSpeed = char === " " ? speed * 0.5 : speed + Math.random() * 20;

    const timer = setTimeout(() => {
      setDisplayText(text.slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
    }, charSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, hasStarted, isTyping, isComplete, text, speed, onComplete]);

  // Reset when text changes
  useEffect(() => {
    reset();
  }, [text, reset]);

  return {
    displayText,
    isTyping,
    isComplete,
    reset,
  };
}

export default useTypewriter;
