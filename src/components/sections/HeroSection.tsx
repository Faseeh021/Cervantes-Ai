"use client";

import React from "react";
import { DashboardShowcase } from "./DashboardShowcase";
import { useMagneticEffect } from "@/hooks/useMousePosition";

export function HeroSection() {
  const { ref: magneticRef, position, handleMouseLeave } = useMagneticEffect(0.25);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-[100px] sm:pt-[120px] md:pt-[150px] lg:pt-[180px] px-4 sm:px-6">
        {/* Badge - Stagger 1 */}
        <div
          className="flex flex-col items-center justify-center mb-6 sm:mb-8 lg:mb-11 w-auto py-2 px-5 sm:px-6 lg:py-2.5"
          style={{
            borderRadius: "999px",
            background: "rgba(120, 30, 224, 0.1)",
            border: "1px solid #EEEEEE",
          }}
        >
          <span
            className="font-inter font-medium text-[#0E0E0E] text-center text-xs sm:text-sm lg:text-base"
            style={{ lineHeight: "1.4" }}
          >
            Multi-Model AI Platform
          </span>
          <span
            className="font-inter font-bold text-[#0E0E0E] text-center text-sm sm:text-base lg:text-lg"
            style={{ lineHeight: "1.4" }}
          >
            Create. Automate. Scale.
          </span>
        </div>

        {/* Main Heading - Stagger 2 */}
        <h1
          className="font-plus-jakarta font-bold text-center text-[#0E0E0E] mb-4 sm:mb-6 lg:mb-8 max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] px-2"
          style={{
            fontSize: "clamp(28px, 6vw, 64px)",
            lineHeight: "1.15",
          }}
        >
          The AI Platform
          <br />
          That Turns Ideas Into Content at Scale
        </h1>

        {/* Subheading - Stagger 3 */}
        <p
          className="font-inter text-center text-[#696969] mb-6 sm:mb-8 lg:mb-10 max-w-[320px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] px-2"
          style={{
            fontSize: "clamp(14px, 2.5vw, 20px)",
            lineHeight: "1.6",
          }}
        >
          Turn one idea into content for every platform powered by multi-model AI and built-in automation.
        </p>

        {/* Magnetic CTA Button - Stagger 4 */}
        <button
          ref={magneticRef}
          onMouseLeave={handleMouseLeave}
          className="flex items-center cursor-pointer h-[46px] sm:h-[50px] lg:h-[62px] px-5 sm:px-6 lg:px-11 rounded-full border-none mb-4 sm:mb-5 relative btn-magnetic overflow-hidden active:scale-95 transition-transform"
          style={{
            background: "#781EE0",
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        >
          <span className="font-plus-jakarta text-base sm:text-lg lg:text-2xl font-semibold text-white pr-9 sm:pr-10 lg:pr-12">
            Start Free
          </span>
          {/* Arrow circle */}
          <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px] bg-white rounded-full absolute right-1 sm:right-1.5 top-1/2 -translate-y-1/2">
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-[18px] lg:h-[17px]"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M2 9H17M17 9L10 2M17 9L10 16"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        {/* Credits text - Stagger 5 */}
        <p className="font-inter text-xs sm:text-sm lg:text-base text-[#696969] text-center">
          Get 50 free credits • No credit card required
        </p>

        {/* Dashboard Showcase Section - Stagger 6 */}
        <div className="w-full flex justify-center">
          <DashboardShowcase />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
