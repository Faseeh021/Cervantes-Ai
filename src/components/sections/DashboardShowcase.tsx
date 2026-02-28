"use client";

import React from "react";
import Image from "next/image";

export function DashboardShowcase() {
  return (
    <div
      className="w-[95%] sm:w-[92%] lg:w-[90%] xl:w-[88%] 2xl:w-[85%] max-w-[1351px] mt-6 sm:mt-8 lg:mt-10 xl:mt-12 rounded-[16px] sm:rounded-[24px] lg:rounded-[36px] xl:rounded-[42px] relative flex items-center justify-center overflow-visible mx-auto dashboard-float"
      style={{
        aspectRatio: "1351 / 792",
        border: "1px solid rgba(255, 255, 255, 0.6)",
        background:
          "linear-gradient(180deg, rgba(120, 30, 224, 0.05) 0%, rgba(255, 255, 255, 0.06) 100%)",
      }}
    >
      {/* Left purple glow effect - visible on all screens */}
      <div
        className="absolute -left-[30px] sm:-left-[40px] lg:-left-[60px] xl:-left-[100px] top-0 bottom-0 w-[80px] sm:w-[100px] lg:w-[150px] xl:w-[250px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 70% at 0% 50%, rgba(180, 130, 255, 0.5) 0%, rgba(170, 120, 250, 0.35) 20%, rgba(160, 100, 240, 0.2) 40%, rgba(150, 90, 230, 0.1) 60%, rgba(140, 80, 220, 0.05) 80%, transparent 100%)",
        }}
      />

      {/* Right purple glow effect - visible on all screens */}
      <div
        className="absolute -right-[30px] sm:-right-[40px] lg:-right-[60px] xl:-right-[100px] top-0 bottom-0 w-[80px] sm:w-[100px] lg:w-[150px] xl:w-[250px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 70% at 100% 50%, rgba(180, 130, 255, 0.5) 0%, rgba(170, 120, 250, 0.35) 20%, rgba(160, 100, 240, 0.2) 40%, rgba(150, 90, 230, 0.1) 60%, rgba(140, 80, 220, 0.05) 80%, transparent 100%)",
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
          className="absolute bottom-0 left-0 right-0 h-[30px] sm:h-[50px] lg:h-[70px] xl:h-[80px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.9) 100%)",
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
