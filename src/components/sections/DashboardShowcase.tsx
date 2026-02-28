"use client";

import React from "react";
import Image from "next/image";

export function DashboardShowcase() {
  return (
    <div className="w-[98%] sm:w-[95%] lg:w-[92%] xl:w-[90%] max-w-[1500px] mt-8 sm:mt-10 lg:mt-14 relative mx-auto overflow-visible">
      {/* Left purple glow */}
      <div
        className="absolute -left-[50px] sm:-left-[80px] lg:-left-[120px] -top-[10%] -bottom-[10%] w-[150px] sm:w-[200px] lg:w-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(180, 130, 255, 0.4) 0%, rgba(170, 120, 250, 0.25) 25%, rgba(160, 100, 240, 0.12) 50%, rgba(150, 90, 230, 0.05) 75%, transparent 100%)",
          filter: "blur(20px)",
        }}
      />

      {/* Right purple glow */}
      <div
        className="absolute -right-[50px] sm:-right-[80px] lg:-right-[120px] -top-[10%] -bottom-[10%] w-[150px] sm:w-[200px] lg:w-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(180, 130, 255, 0.4) 0%, rgba(170, 120, 250, 0.25) 25%, rgba(160, 100, 240, 0.12) 50%, rgba(150, 90, 230, 0.05) 75%, transparent 100%)",
          filter: "blur(20px)",
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
      <div className="relative rounded-[12px] sm:rounded-[18px] lg:rounded-[28px] overflow-hidden border border-gray-200/60">
        <Image
          src="/images/dashboard.png"
          alt="Cervantes AI Dashboard"
          width={1500}
          height={850}
          priority
          className="w-full h-auto"
        />

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
