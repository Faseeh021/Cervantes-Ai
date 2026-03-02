"use client";

import React from "react";
import { DashboardShowcase } from "./DashboardShowcase";
import { useMagneticEffect } from "@/hooks/useMousePosition";

export function HeroSection() {
  const { ref: magneticRef, position, handleMouseLeave } = useMagneticEffect(0.25);

  return (
    <section className="relative w-full md:min-h-screen overflow-visible">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-[120px] md:pt-[150px] lg:pt-[180px] px-4">
        {/* Badge - Stagger 1 */}
        <div
          className="flex flex-col items-center justify-center mb-8 lg:mb-11"
          style={{
            width: "320px",
            height: "59px",
            borderRadius: "999px",
            background: "rgba(120, 30, 224, 0.1)",
            border: "1px solid #EEEEEE",
          }}
        >
          <span
            className="font-inter font-medium text-[#0E0E0E] text-center"
            style={{ fontSize: "16px", lineHeight: "22px" }}
          >
            Multi-Model AI Platform
          </span>
          <span
            className="font-inter font-bold text-[#0E0E0E] text-center"
            style={{ fontSize: "18px", lineHeight: "22px" }}
          >
            Create. Automate. Scale.
          </span>
        </div>

        {/* Main Heading - Stagger 2 */}
        <h1
          className="font-plus-jakarta font-bold text-center text-[#0E0E0E] mb-6 lg:mb-8 max-w-[900px] px-2 text-[22px] sm:text-[32px] md:text-[48px] lg:text-[64px]"
          style={{ lineHeight: "1.15" }}
        >
          The{" "}
          <span className="bg-gradient-to-r from-[#781EE0] via-[#9D4EDD] to-[#781EE0] bg-clip-text text-transparent">
            AI Platform
          </span>{" "}
          That Turns
          <br />
          Ideas Into Content at Scale
        </h1>

        {/* Subheading - Stagger 3 */}
        <p
          className="font-inter text-center text-[#696969] mb-8 lg:mb-10 max-w-[700px] px-4"
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: "1.6",
          }}
        >
          Turn one idea into content for every platform powered by multi-model AI and built-in automation.
        </p>

        {/* Magnetic CTA Button - Stagger 4 */}
        <button
          ref={magneticRef}
          onMouseLeave={handleMouseLeave}
          className="flex items-center cursor-pointer h-[50px] lg:h-[62px] px-6 lg:px-11 rounded-full border-none mb-5 relative btn-magnetic overflow-hidden"
          style={{
            background: "#781EE0",
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        >
          <span className="font-plus-jakarta text-lg lg:text-2xl font-semibold text-white pr-10 lg:pr-12">
            Start Free
          </span>
          {/* Arrow circle */}
          <span className="flex items-center justify-center w-10 h-10 lg:w-[50px] lg:h-[50px] bg-white rounded-full absolute right-1.5 top-1/2 -translate-y-1/2">
            <svg
              className="w-4 h-4 lg:w-[18px] lg:h-[17px]"
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
        <p className="font-inter text-sm lg:text-base text-[#696969]">
          Get 50 free credits • No credit card required
        </p>

        {/* Dashboard Showcase Section - Stagger 6 */}
        <div className="w-full">
          <DashboardShowcase />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
