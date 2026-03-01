"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import { ChatInterface } from "./ChatInterface";
import { TypewriterText } from "./TypewriterText";
import { ImageReveal } from "./ImageReveal";
import { demoSequences } from "./demoData";

type AnimationPhase = "idle" | "user_typing" | "ai_typing" | "image_reveal" | "pause";

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
      if (currentSequence.type === "image") {
        setPhase("image_reveal");
      } else {
        setPhase("ai_typing");
      }
    }, currentSequence.typingDelay);
  }, [currentSequence.typingDelay, currentSequence.type]);

  // Handle AI typing complete (also used for image reveal)
  const handleAiComplete = useCallback(() => {
    setPhase("pause");
    // Pause, then cycle to next sequence
    setTimeout(() => {
      setSequenceIndex((prev) => (prev + 1) % demoSequences.length);
      setPhase("user_typing");
    }, 4000);
  }, []);

  // Handle image reveal complete
  const handleImageComplete = useCallback(() => {
    handleAiComplete();
  }, [handleAiComplete]);

  const isImageSequence = currentSequence.type === "image";
  const showResponse =
    phase === "ai_typing" ||
    phase === "image_reveal" ||
    phase === "pause";

  return (
    <div ref={ref} className={className}>
      <ChatInterface
        userMessage={
          <TypewriterText
            key={`user-${sequenceIndex}`}
            text={currentSequence.prompt}
            speed={60}
            enabled={phase === "user_typing"}
            showCursor={phase === "user_typing"}
            cursorStyle="block"
            onComplete={handleUserComplete}
          />
        }
        aiResponse={
          isImageSequence ? (
            <ImageReveal
              key={`image-${sequenceIndex}`}
              src={currentSequence.imageSrc || ""}
              alt={currentSequence.imageAlt || "AI Generated Image"}
              enabled={phase === "image_reveal"}
              duration={2500}
              onComplete={handleImageComplete}
            />
          ) : (
            <TypewriterText
              key={`text-${sequenceIndex}`}
              text={currentSequence.response || ""}
              speed={20}
              enabled={phase === "ai_typing"}
              showCursor={phase === "ai_typing"}
              cursorStyle="line"
              onComplete={handleAiComplete}
            />
          )
        }
        responseType={isImageSequence ? "image" : "text"}
        showAiResponse={showResponse}
      />
    </div>
  );
}

export default TypewriterDemo;
