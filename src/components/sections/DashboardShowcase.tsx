"use client";

import React from "react";
import Image from "next/image";

export function DashboardShowcase() {
  return (
    <div
      className="w-[95%] sm:w-[92%] lg:w-[90%] xl:w-[88%] 2xl:w-[85%] max-w-[1351px] mt-6 sm:mt-8 lg:mt-10 xl:mt-12 rounded-[16px] sm:rounded-[24px] lg:rounded-[36px] xl:rounded-[42px] relative flex items-center justify-center overflow-visible mx-auto dashboard-float"
      style={{
        aspectRatio: "1351 / 792",
        background:
          "linear-gradient(180deg, rgba(120, 30, 224, 0.05) 0%, rgba(255, 255, 255, 0.06) 100%)",
      }}
    >
      {/* Left purple glow effect - visible on all screens */}
      <div
        className="absolute -left-[50px] sm:-left-[80px] lg:-left-[120px] xl:-left-[180px] -top-[20%] -bottom-[20%] w-[150px] sm:w-[200px] lg:w-[300px] xl:w-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(180, 130, 255, 0.4) 0%, rgba(170, 120, 250, 0.25) 25%, rgba(160, 100, 240, 0.12) 50%, rgba(150, 90, 230, 0.05) 75%, transparent 100%)",
          filter: "blur(20px)",
        }}
      />

      {/* Right purple glow effect - visible on all screens */}
      <div
        className="absolute -right-[50px] sm:-right-[80px] lg:-right-[120px] xl:-right-[180px] -top-[20%] -bottom-[20%] w-[150px] sm:w-[200px] lg:w-[300px] xl:w-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(180, 130, 255, 0.4) 0%, rgba(170, 120, 250, 0.25) 25%, rgba(160, 100, 240, 0.12) 50%, rgba(150, 90, 230, 0.05) 75%, transparent 100%)",
          filter: "blur(20px)",
        }}
      />

      {/* Top purple glow effect */}
      <div
        className="absolute left-[10%] right-[10%] -top-[30px] sm:-top-[50px] lg:-top-[80px] h-[80px] sm:h-[120px] lg:h-[180px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(180, 130, 255, 0.35) 0%, rgba(170, 120, 250, 0.2) 30%, rgba(160, 100, 240, 0.1) 55%, rgba(150, 90, 230, 0.03) 80%, transparent 100%)",
          filter: "blur(25px)",
        }}
      />

      {/* Bottom glow - very subtle, fades to white */}
      <div
        className="absolute -left-[30%] -right-[30%] bottom-[-20%] h-[40%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(180, 140, 255, 0.15) 0%, rgba(170, 130, 250, 0.08) 30%, rgba(160, 120, 245, 0.03) 60%, transparent 100%)",
          filter: "blur(60px)",
        }}
      />

      {/* Large Dashboard Image Container with glow */}
      <div className="relative w-[94%] sm:w-[96%] lg:w-[97%] max-w-[1302px] dashboard-glow rounded-[14px] sm:rounded-[22px] lg:rounded-[32px] xl:rounded-[38px] overflow-hidden">
        <Image
          src="/images/large.jpeg"
          alt="Cervantes AI Dashboard"
          width={1302}
          height={745}
          priority
          className="w-full h-auto object-cover"
        />

        {/* White fade overlay at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[80px] sm:h-[120px] lg:h-[180px] xl:h-[220px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0.75) 70%, rgba(255, 255, 255, 0.95) 100%)",
          }}
        />
      </div>

      {/* Small Overlay Panel - visible on all screens */}
      <Image
        src="/images/small.jpeg"
        alt="Media Library Panel"
        width={476}
        height={358}
        className="absolute w-[40%] sm:w-[38%] md:w-[36%] lg:w-[35%] xl:w-[34%] max-w-[476px] h-auto top-[8%] sm:top-[10%] lg:top-[12%] right-0 rounded-[8px] sm:rounded-[12px] lg:rounded-[18px] xl:rounded-[20px]"
        style={{
          boxShadow: "-20px 8px 30px 0px rgba(0, 0, 0, 0.12)",
        }}
      />
    </div>
  );
}

export default DashboardShowcase;
