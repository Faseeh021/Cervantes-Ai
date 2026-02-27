"use client";

import React from "react";
import Image from "next/image";

export function DashboardShowcase() {
  return (
    <div
      style={{
        width: "1351.4px",
        maxWidth: "95vw",
        height: "791.92px",
        marginTop: "60px",
        borderRadius: "42px",
        border: "1px solid rgba(255, 255, 255, 0.6)",
        background:
          "linear-gradient(180deg, rgba(120, 30, 224, 0.05) 0%, rgba(255, 255, 255, 0.06) 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
      }}
    >
      {/* Left purple glow effect */}
      <div
        style={{
          position: "absolute",
          left: "-50px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "200px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(120, 30, 224, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Right purple glow effect */}
      <div
        style={{
          position: "absolute",
          right: "-50px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "200px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(120, 30, 224, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Large Dashboard Image Container */}
      <div style={{ position: "relative" }}>
        <Image
          src="/images/large.jpeg"
          alt="Cervantes AI Dashboard"
          width={1302}
          height={745}
          priority
          style={{
            width: "1301.69px",
            height: "745.37px",
            borderRadius: "20px",
            objectFit: "cover",
          }}
        />

        {/* White fade overlay at bottom of large image */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "150px",
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.9) 100%)",
            borderRadius: "0 0 20px 20px",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Small Overlay Panel - Media Library */}
      <Image
        src="/images/small.jpeg"
        alt="Media Library Panel"
        width={476}
        height={358}
        style={{
          position: "absolute",
          width: "475.93px",
          height: "358.09px",
          top: "100px",
          right: "0px",
          borderRadius: "20px",
          boxShadow: "-52px 17px 60px 0px rgba(0, 0, 0, 0.16)",
        }}
      />
    </div>
  );
}

export default DashboardShowcase;
