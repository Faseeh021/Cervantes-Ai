"use client";

import React from "react";
import Image from "next/image";

export function DashboardShowcase() {
  return (
    <div className="w-[98%] sm:w-[95%] lg:w-[92%] xl:w-[90%] max-w-[1500px] mt-8 sm:mt-10 lg:mt-14 relative mx-auto overflow-visible dashboard-float">
      {/* Left purple glow - with pulse animation */}
      <div
        className="absolute -left-[50px] sm:-left-[80px] lg:-left-[120px] -top-[10%] -bottom-[10%] w-[150px] sm:w-[200px] lg:w-[300px] pointer-events-none dashboard-glow-pulse"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(180, 130, 255, 0.4) 0%, rgba(170, 120, 250, 0.25) 25%, rgba(160, 100, 240, 0.12) 50%, rgba(150, 90, 230, 0.05) 75%, transparent 100%)",
          filter: "blur(20px)",
        }}
      />

      {/* Right purple glow - with pulse animation */}
      <div
        className="absolute -right-[50px] sm:-right-[80px] lg:-right-[120px] -top-[10%] -bottom-[10%] w-[150px] sm:w-[200px] lg:w-[300px] pointer-events-none dashboard-glow-pulse"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(180, 130, 255, 0.4) 0%, rgba(170, 120, 250, 0.25) 25%, rgba(160, 100, 240, 0.12) 50%, rgba(150, 90, 230, 0.05) 75%, transparent 100%)",
          filter: "blur(20px)",
          animationDelay: "1.5s",
        }}
      />

      {/* Top purple glow */}
      <div
        className="absolute left-[10%] right-[10%] -top-[30px] sm:-top-[50px] lg:-top-[80px] h-[80px] sm:h-[120px] lg:h-[180px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(180, 130, 255, 0.35) 0%, rgba(170, 120, 250, 0.2) 30%, rgba(160, 100, 240, 0.1) 55%, transparent 100%)",
          filter: "blur(25px)",
        }}
      />

      {/* Bottom glow - subtle fade */}
      <div
        className="absolute -left-[20%] -right-[20%] -bottom-[50px] sm:-bottom-[80px] lg:-bottom-[120px] h-[150px] sm:h-[200px] lg:h-[280px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(180, 140, 255, 0.15) 0%, rgba(170, 130, 250, 0.08) 40%, transparent 80%)",
          filter: "blur(50px)",
        }}
      />

      {/* Dashboard Image Container */}
      <div className="relative rounded-[12px] sm:rounded-[18px] lg:rounded-[28px] overflow-hidden">
        <Image
          src="/images/dashboard.png"
          alt="Cervantes AI Dashboard"
          width={1500}
          height={850}
          priority
          className="w-full h-auto"
        />

        {/* Animation Overlays Container */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* 1. Chart Line SVG - wavelike pattern starting from 0 line */}
          <svg
            className="absolute"
            style={{ left: "29%", top: "55%", width: "52%", height: "32%" }}
            viewBox="0 0 500 100"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Wavelike path - starts at bottom (0), stays in lower half */}
            <path
              d="M5 95 L40 85 L80 70 L120 78 L160 60 L200 68 L240 52 L280 58 L320 45 L360 50 L400 38 L440 42 L480 32"
              stroke="url(#chartGradientNew)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="chart-line-rise"
            />
            <defs>
              <linearGradient id="chartGradientNew" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(120, 30, 224, 0.5)" />
                <stop offset="50%" stopColor="rgba(157, 78, 221, 0.7)" />
                <stop offset="100%" stopColor="rgba(120, 30, 224, 0.8)" />
              </linearGradient>
            </defs>
          </svg>

          {/* 2. Media Library Panel Highlight */}
          <div
            className="absolute media-panel-overlay hidden sm:block"
            style={{
              left: "58%",
              top: "10%",
              width: "40%",
              height: "55%",
              borderRadius: "8px",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(120,30,224,0.06) 100%)",
              border: "1px solid rgba(120, 30, 224, 0.12)",
              boxShadow: "0 4px 20px rgba(120, 30, 224, 0.08)",
            }}
          />

          {/* 3. Stat Card Overlays */}
          <div
            className="absolute stat-card-overlay stat-card-1 hidden sm:block"
            style={{
              left: "17%",
              top: "14%",
              width: "16%",
              height: "9%",
              borderRadius: "6px",
              background: "rgba(120, 30, 224, 0.04)",
              border: "1px solid rgba(120, 30, 224, 0.08)",
            }}
          />
          <div
            className="absolute stat-card-overlay stat-card-2 hidden sm:block"
            style={{
              left: "34%",
              top: "14%",
              width: "16%",
              height: "9%",
              borderRadius: "6px",
              background: "rgba(120, 30, 224, 0.04)",
              border: "1px solid rgba(120, 30, 224, 0.08)",
            }}
          />

          {/* 4. Animated Cursor */}
          <div className="dashboard-cursor hidden md:block">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5.5 3.21V20.8C5.5 21.3 6.09 21.58 6.47 21.26L10.79 17.57L14.5 20.8C14.88 21.12 15.47 20.86 15.5 20.37L15.5 12.5L21.79 6.21C22.18 5.82 21.92 5.16 21.37 5.09L6.11 3.01C5.57 2.94 5.18 3.44 5.5 3.21Z"
                fill="white"
                stroke="#781EE0"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>

        {/* White fade at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[60px] sm:h-[100px] lg:h-[150px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.9) 100%)",
          }}
        />
      </div>
    </div>
  );
}

export default DashboardShowcase;
