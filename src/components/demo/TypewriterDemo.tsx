"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import { ChatInterface } from "./ChatInterface";
import { TypewriterText } from "./TypewriterText";
import { demoSequences } from "./demoData";

type AnimationPhase = "idle" | "user_typing" | "ai_typing" | "pause";

interface TypewriterDemoProps {
  className?: string;
}

export function TypewriterDemo({ className = "" }: TypewriterDemoProps) {
  const { ref, isInView } = useScrollTrigger<HTMLDivElement>({ threshold: 0.3 });
  const [phase, setPhase] = useState<AnimationPhase>("idle");
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const currentSequence = demoSequences[sequenceIndex];

  // Start animation when in view
  useEffect(() => {
    if (isInView && phase === "idle") {
      setPhase("user_typing");
    }
  }, [isInView, phase]);

  // Handle user typing complete
  const handleUserComplete = useCallback(() => {
    setTimeout(() => {
      setPhase("ai_typing");
    }, currentSequence.typingDelay);
  }, [currentSequence.typingDelay]);

  // Handle AI typing complete
  const handleAiComplete = useCallback(() => {
    setPhase("pause");
    // Pause, then cycle to next sequence
    setTimeout(() => {
      setSequenceIndex((prev) => (prev + 1) % demoSequences.length);
      setPhase("user_typing");
    }, 4000);
  }, []);

  return (
    <div ref={ref} className={className}>
      <ChatInterface
        userMessage={
          <TypewriterText
            text={currentSequence.prompt}
            speed={60}
            enabled={phase === "user_typing"}
            showCursor={phase === "user_typing"}
            cursorStyle="block"
            onComplete={handleUserComplete}
          />
        }
        aiResponse={
          <TypewriterText
            text={currentSequence.response}
            speed={20}
            enabled={phase === "ai_typing"}
            showCursor={phase === "ai_typing"}
            cursorStyle="line"
            onComplete={handleAiComplete}
          />
        }
        showAiResponse={phase === "ai_typing" || phase === "pause"}
      />
    </div>
  );
}

export default TypewriterDemo;
