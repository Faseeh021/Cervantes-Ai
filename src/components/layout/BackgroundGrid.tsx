"use client";

import React, { useEffect, useState } from "react";

export function BackgroundGrid() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize to -1 to 1 range for parallax
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      setMousePos({ x, y });
      // Actual cursor position for glow effect
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Parallax intensity (pixels of movement)
  const parallaxIntensity = 8;
  const leftOffset = {
    x: mousePos.x * parallaxIntensity * -1,
    y: mousePos.y * parallaxIntensity * -0.5,
  };
  const rightOffset = {
    x: mousePos.x * parallaxIntensity,
    y: mousePos.y * parallaxIntensity * -0.5,
  };

  return (
    <div className="absolute inset-x-0 top-0 pointer-events-none z-0">
      {/* Cursor-following glow effect */}
      <div
        className="cursor-glow"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          opacity: isLoaded ? 1 : 0,
        }}
      />

      {/* Floating ambient orbs */}
      <div
        className="floating-orb floating-orb-1"
        style={{ top: "15%", left: "10%" }}
      />
      <div
        className="floating-orb floating-orb-2"
        style={{ top: "60%", right: "15%" }}
      />
      <div
        className="floating-orb floating-orb-3"
        style={{ top: "40%", left: "70%" }}
      />

      {/* Animated Mesh Gradient Background */}
      <div className="mesh-gradient" />

      {/* Purple radial gradient overlay */}
      <div
        className="absolute w-full h-[600px] top-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(216, 180, 254, 0.5) 0%, rgba(216, 180, 254, 0.3) 40%, rgba(216, 180, 254, 0.1) 70%, transparent 100%)",
        }}
      />

      {/* Grid line pattern - centered */}
      <div
        className={`absolute w-full max-w-[1200px] h-[800px] top-0 left-1/2 -translate-x-1/2 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{
          background: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 59px,
              rgba(200, 200, 200, 0.2) 59px,
              rgba(200, 200, 200, 0.2) 60px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 59px,
              rgba(200, 200, 200, 0.2) 59px,
              rgba(200, 200, 200, 0.2) 60px
            )
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 100% 80% at 50% 0%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 80% at 50% 0%, black 0%, transparent 70%)",
        }}
      />

      {/* Decorative orbital arcs with parallax effect */}
      <svg
        className={`absolute top-0 left-0 w-full h-full reveal-arcs ${isLoaded ? "stagger-5" : ""}`}
        viewBox="0 0 1440 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        style={{ minHeight: "100vh" }}
      >
        {/* LEFT ORBIT - with parallax */}
        <g
          stroke="#e5e7eb"
          strokeWidth="1.5"
          fill="none"
          className="parallax-container"
          style={{
            transform: `translate(${leftOffset.x}px, ${leftOffset.y}px)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          <circle cx="-100" cy="400" r="300" opacity="0.6" />
          <circle cx="-100" cy="400" r="450" opacity="0.4" />
        </g>
        {/* Dots ON left arc - with parallax */}
        <g
          fill="black"
          style={{
            transform: `translate(${leftOffset.x * 1.2}px, ${leftOffset.y * 1.2}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {/* On inner arc r=300 */}
          <circle cx="50" cy="140" r="3" />
          <circle cx="200" cy="400" r="3" />
          <circle cx="93" cy="630" r="3" />
          {/* On outer arc r=450 */}
          <circle cx="189" cy="55" r="3" />
          <circle cx="343" cy="478" r="3" />
          <circle cx="158" cy="750" r="3" />
        </g>

        {/* RIGHT ORBIT - with parallax */}
        <g
          stroke="#e5e7eb"
          strokeWidth="1.5"
          fill="none"
          className="parallax-container"
          style={{
            transform: `translate(${rightOffset.x}px, ${rightOffset.y}px)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          <circle cx="1540" cy="400" r="340" opacity="0.6" />
          <circle cx="1540" cy="400" r="520" opacity="0.4" />
        </g>
        {/* Dots ON right arc - with parallax */}
        <g
          fill="black"
          style={{
            transform: `translate(${rightOffset.x * 1.2}px, ${rightOffset.y * 1.2}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {/* On inner arc r=340 */}
          <circle cx="1321" cy="140" r="3" />
          <circle cx="1200" cy="400" r="3" />
          <circle cx="1321" cy="660" r="3" />
          {/* On outer arc r=520 */}
          <circle cx="1142" cy="66" r="3" />
          <circle cx="1022" cy="445" r="3" />
          <circle cx="1142" cy="734" r="3" />
        </g>
      </svg>
    </div>
  );
}

export default BackgroundGrid;
