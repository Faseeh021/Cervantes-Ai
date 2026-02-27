"use client";

import React from "react";
import { DashboardShowcase } from "./DashboardShowcase";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Purple radial gradient - darker behind nav area, fading down */}
        <div
          className="absolute w-full"
          style={{
            height: "500px",
            top: "0",
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(192, 132, 252, 0.22) 0%, rgba(167, 139, 250, 0.12) 35%, rgba(147, 51, 234, 0.05) 60%, transparent 100%)",
          }}
        />

        {/* Grid line pattern - centered, limited width */}
        <div
          className="absolute"
          style={{
            width: "800px",
            height: "700px",
            top: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            background: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 59px,
                rgba(200, 200, 200, 0.3) 59px,
                rgba(200, 200, 200, 0.3) 60px
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 59px,
                rgba(200, 200, 200, 0.3) 59px,
                rgba(200, 200, 200, 0.3) 60px
              )
            `,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 100% 100% at 50% 0%, black 0%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 100% 100% at 50% 0%, black 0%, transparent 80%)",
          }}
        />

        {/* Dot pattern overlay - centered, limited width */}
        <div
          className="absolute"
          style={{
            width: "800px",
            height: "700px",
            top: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundImage:
              "radial-gradient(circle, rgba(150, 150, 150, 0.4) 1.5px, transparent 1.5px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 100% 100% at 50% 0%, black 0%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 100% 100% at 50% 0%, black 0%, transparent 80%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ paddingTop: "180px" }}
      >
        {/* Badge - 2 lines */}
        <div
          className="flex flex-col items-center justify-center"
          style={{
            padding: "12px 28px",
            borderRadius: "999px",
            background: "rgba(120, 30, 224, 0.1)",
            border: "1px solid #EEEEEE",
            marginBottom: "44px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              color: "#0E0E0E",
            }}
          >
            Multi-Model AI Platform
          </span>
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              color: "#0E0E0E",
            }}
          >
            Create. Automate. Scale.
          </span>
        </div>

        {/* Main Heading */}
        <h1
          style={{
            fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: "72px",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#0E0E0E",
            margin: "0 0 32px 0",
          }}
        >
          The AI Platform
          <br />
          That Turns Ideas Into Content at Scale
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: "32px",
            textAlign: "center",
            color: "#696969",
            margin: "0 0 40px 0",
          }}
        >
          Turn one idea into content for every platform powered by multi-model AI and built-in automation.
        </p>

        {/* Start Free CTA Button - width: 252px, height: 62px */}
        <button
          className="flex items-center cursor-pointer transition-opacity hover:opacity-90"
          style={{
            width: "252px",
            height: "62px",
            background: "#781EE0",
            borderRadius: "1239.83px",
            padding: "0 6px 0 44px",
            border: "none",
            marginBottom: "20px",
            position: "relative",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "19.86px",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Start Free
          </span>
          {/* Arrow circle - width: 49.64px, height: 49.64px, white bg */}
          <span
            className="flex items-center justify-center rounded-full absolute"
            style={{
              width: "49.64px",
              height: "49.64px",
              background: "#FFFFFF",
              borderRadius: "49.64px",
              right: "6px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            {/* Arrow icon - 18.62 x 17.38, black color */}
            <svg
              width="18.62"
              height="17.38"
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

        {/* Credits text */}
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            color: "#696969",
          }}
        >
          Get 50 free credits • No credit card required
        </p>

        {/* Dashboard Showcase Section */}
        <DashboardShowcase />
      </div>
    </section>
  );
}

export default HeroSection;
