"use client";

import React from "react";
import Image from "next/image";

interface ChatInterfaceProps {
  inputText: React.ReactNode;
  userMessage: React.ReactNode;
  aiResponse: React.ReactNode;
  showUserMessage: boolean;
  showAiResponse: boolean;
  responseType?: "text" | "image";
  className?: string;
  showGenerateButton?: boolean;
  isGenerating?: boolean;
  onGenerateClick?: () => void;
}

export function ChatInterface({
  inputText,
  userMessage,
  aiResponse,
  showUserMessage,
  showAiResponse,
  responseType = "text",
  className = "",
  showGenerateButton = false,
  isGenerating = false,
  onGenerateClick,
}: ChatInterfaceProps) {
  // Trigger generate click animation
  React.useEffect(() => {
    if (isGenerating && onGenerateClick) {
      const timer = setTimeout(() => {
        onGenerateClick();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isGenerating, onGenerateClick]);

  return (
    <div
      className={`w-full rounded-2xl overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,243,253,0.98) 100%)",
        border: "1px solid rgba(120, 30, 224, 0.1)",
        boxShadow: "0 25px 50px rgba(120, 30, 224, 0.1)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4"
        style={{ borderBottom: "1px solid rgba(120, 30, 224, 0.08)" }}
      >
        <Image
          src="/images/logo.png"
          alt="Cervantes AI"
          width={120}
          height={24}
          className="h-6 w-auto object-contain"
        />
        <div className="ml-auto flex gap-1.5 items-center">
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <span className="font-plus-jakarta text-xs text-gray-500">Online</span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-4 sm:p-6 space-y-4 min-h-[280px] sm:min-h-[320px]">
        {/* User Message - only show after generate is clicked */}
        {showUserMessage && (
          <div className="flex gap-3 justify-end animate-slide-up">
            <div
              className="max-w-[85%] sm:max-w-[75%] px-4 py-3 rounded-2xl rounded-tr-sm"
              style={{ background: "#781EE0" }}
            >
              <p className="font-plus-jakarta text-sm sm:text-base text-white leading-relaxed">
                {userMessage}
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 21V19C20 16.79 18.21 15 16 15H8C5.79 15 4 16.79 4 19V21"
                  stroke="#666"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="7" r="4" stroke="#666" strokeWidth="2" />
              </svg>
            </div>
          </div>
        )}

        {/* AI Response */}
        {showAiResponse && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-[#781EE0] flex-shrink-0 flex items-center justify-center overflow-hidden">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            {responseType === "image" ? (
              <div className="max-w-[85%] sm:max-w-[75%]">{aiResponse}</div>
            ) : (
              <div
                className="max-w-[85%] sm:max-w-[75%] px-4 py-3 rounded-2xl rounded-tl-sm"
                style={{ background: "#F3F4F6" }}
              >
                <p className="font-plus-jakarta text-sm sm:text-base text-[#0E0E0E] leading-relaxed">
                  {aiResponse}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input Area with Generate Button */}
      <div
        className="px-4 sm:px-6 py-3 sm:py-4"
        style={{ borderTop: "1px solid rgba(120, 30, 224, 0.08)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-3 px-4 py-2.5 rounded-full flex-1"
            style={{ background: "#F3F4F6" }}
          >
            <p className="font-plus-jakarta text-gray-600 text-sm flex-1">
              {inputText}
            </p>
          </div>
          {/* Generate Button - same style as send button */}
          {showGenerateButton && (
            <div
              className={`w-10 h-10 rounded-full bg-[#781EE0] flex items-center justify-center cursor-pointer transition-all duration-300 ${
                isGenerating ? "animate-generate-click" : ""
              }`}
              style={{
                boxShadow: isGenerating
                  ? "0 8px 25px rgba(120, 30, 224, 0.5)"
                  : "0 4px 15px rgba(120, 30, 224, 0.3)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 2L11 13"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M22 2L15 22L11 13L2 9L22 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
