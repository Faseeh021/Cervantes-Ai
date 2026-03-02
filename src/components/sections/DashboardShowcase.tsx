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

        {/* Chart Line Draw Animation Overlay */}
        <svg
          className="absolute pointer-events-none"
          style={{
            top: "25%",
            left: "55%",
            width: "35%",
            height: "40%",
          }}
          viewBox="0 0 200 100"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M10 80 Q40 70, 60 50 T100 35 T140 25 T180 15"
            stroke="url(#chartGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            className="chart-line-draw"
          />
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(120, 30, 224, 0.6)" />
              <stop offset="100%" stopColor="rgba(157, 78, 221, 0.8)" />
            </linearGradient>
          </defs>
        </svg>

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
