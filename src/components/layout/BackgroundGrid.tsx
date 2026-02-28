"use client";

import React, { useEffect, useState } from "react";

export function BackgroundGrid() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Check for mobile/touch device
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      // Skip parallax on mobile for performance
      if (window.innerWidth < 768) return;

      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      setMousePos({ x, y });
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Parallax intensity (pixels of movement) - reduced on smaller screens
  const parallaxIntensity = isMobile ? 0 : 8;
  const leftOffset = {
    x: mousePos.x * parallaxIntensity * -1,
    y: mousePos.y * parallaxIntensity * -0.5,
  };
  const rightOffset = {
    x: mousePos.x * parallaxIntensity,
    y: mousePos.y * parallaxIntensity * -0.5,
  };

  return (
    <div className="absolute inset-x-0 top-0 pointer-events-none z-0 overflow-hidden">
      {/* Cursor-following glow effect - hidden on mobile */}
      <div
        className="cursor-glow hidden md:block"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          opacity: isLoaded ? 1 : 0,
        }}
      />

      {/* Floating ambient orbs - responsive sizes */}
      <div
        className="floating-orb floating-orb-1-mobile sm:floating-orb-1"
        style={{ top: "12%", left: "5%" }}
      />
      <div
        className="floating-orb floating-orb-2-mobile sm:floating-orb-2"
        style={{ top: "55%", right: "8%" }}
      />
      <div
        className="floating-orb floating-orb-3-mobile sm:floating-orb-3"
        style={{ top: "35%", left: "65%" }}
      />

      {/* Animated Mesh Gradient Background */}
      <div className="mesh-gradient" />

      {/* Purple radial gradient overlay - responsive height */}
      <div
        className="absolute w-full h-[400px] sm:h-[500px] md:h-[600px] top-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(216, 180, 254, 0.5) 0%, rgba(216, 180, 254, 0.3) 40%, rgba(216, 180, 254, 0.1) 70%, transparent 100%)",
        }}
      />

      {/* Grid line pattern - centered, responsive */}
      <div
        className={`absolute w-full max-w-[1600px] 2xl:max-w-[2000px] h-[500px] sm:h-[600px] md:h-[800px] top-0 left-1/2 -translate-x-1/2 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{
          background: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 39px,
              rgba(200, 200, 200, 0.15) 39px,
              rgba(200, 200, 200, 0.15) 40px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 39px,
              rgba(200, 200, 200, 0.15) 39px,
              rgba(200, 200, 200, 0.15) 40px
            )
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 100% 80% at 50% 0%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 80% at 50% 0%, black 0%, transparent 70%)",
        }}
      />

      {/* Decorative orbital arcs - hidden on small screens to prevent overflow */}
      <svg
        className={`absolute top-0 left-0 w-full h-full reveal-arcs hidden md:block ${isLoaded ? "stagger-5" : ""}`}
        viewBox="0 0 1920 800"
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
          <circle cx="-100" cy="400" r="400" opacity="0.6" />
          <circle cx="-100" cy="400" r="600" opacity="0.4" />
        </g>
        {/* Dots ON left arc - with parallax */}
        <g
          fill="black"
          style={{
            transform: `translate(${leftOffset.x * 1.2}px, ${leftOffset.y * 1.2}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <circle cx="165" cy="100" r="3" />
          <circle cx="287" cy="300" r="3" />
          <circle cx="246" cy="600" r="3" />
          <circle cx="387" cy="50" r="3" />
          <circle cx="466" cy="200" r="3" />
          <circle cx="420" cy="700" r="3" />
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
          <circle cx="2020" cy="400" r="450" opacity="0.6" />
          <circle cx="2020" cy="400" r="700" opacity="0.4" />
        </g>
        {/* Dots ON right arc - with parallax */}
        <g
          fill="black"
          style={{
            transform: `translate(${rightOffset.x * 1.2}px, ${rightOffset.y * 1.2}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <circle cx="1685" cy="100" r="3" />
          <circle cx="1570" cy="400" r="3" />
          <circle cx="1737" cy="700" r="3" />
          <circle cx="1388" cy="100" r="3" />
          <circle cx="1327" cy="500" r="3" />
          <circle cx="1433" cy="700" r="3" />
        </g>
      </svg>

      {/* Mobile orbital arcs - LEFT side with gradient glow */}
      <div
        className="absolute md:hidden pointer-events-none"
        style={{
          top: "50px",
          left: "-180px",
          width: "400px",
          height: "500px",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 1s ease-out",
        }}
      >
        {/* Gradient glow behind arcs */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(180, 130, 255, 0.15) 0%, transparent 60%)",
          }}
        />
        {/* Outer arc */}
        <div
          className="absolute rounded-full"
          style={{ top: "0", left: "0", width: "380px", height: "380px", border: "1.5px solid rgba(200, 180, 220, 0.4)" }}
        />
        {/* Inner arc */}
        <div
          className="absolute rounded-full"
          style={{ top: "60px", left: "60px", width: "260px", height: "260px", border: "1.5px solid rgba(200, 180, 220, 0.5)" }}
        />
        {/* Animated dots */}
        <div className="arc-dot arc-dot-1 absolute w-3 h-3 rounded-full bg-purple-400 shadow-lg" style={{ top: "80px", right: "60px" }} />
        <div className="arc-dot arc-dot-2 absolute w-2.5 h-2.5 rounded-full bg-purple-300" style={{ top: "200px", right: "20px" }} />
        <div className="arc-dot arc-dot-3 absolute w-3 h-3 rounded-full bg-purple-400 shadow-lg" style={{ bottom: "120px", right: "80px" }} />
        <div className="absolute w-2 h-2 rounded-full bg-gray-400" style={{ top: "150px", right: "100px" }} />
        <div className="absolute w-2 h-2 rounded-full bg-gray-400" style={{ bottom: "180px", right: "40px" }} />
      </div>

      {/* Mobile orbital arcs - RIGHT side with gradient glow */}
      <div
        className="absolute md:hidden pointer-events-none"
        style={{
          top: "30px",
          right: "-200px",
          width: "420px",
          height: "520px",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 1s ease-out 0.3s",
        }}
      >
        {/* Gradient glow behind arcs */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(180, 130, 255, 0.15) 0%, transparent 60%)",
          }}
        />
        {/* Outer arc */}
        <div
          className="absolute rounded-full"
          style={{ top: "0", right: "0", width: "400px", height: "400px", border: "1.5px solid rgba(200, 180, 220, 0.4)" }}
        />
        {/* Inner arc */}
        <div
          className="absolute rounded-full"
          style={{ top: "70px", right: "70px", width: "260px", height: "260px", border: "1.5px solid rgba(200, 180, 220, 0.5)" }}
        />
        {/* Animated dots */}
        <div className="arc-dot arc-dot-4 absolute w-3 h-3 rounded-full bg-purple-400 shadow-lg" style={{ top: "70px", left: "70px" }} />
        <div className="arc-dot arc-dot-5 absolute w-2.5 h-2.5 rounded-full bg-purple-300" style={{ top: "220px", left: "30px" }} />
        <div className="arc-dot arc-dot-6 absolute w-3 h-3 rounded-full bg-purple-400 shadow-lg" style={{ bottom: "130px", left: "90px" }} />
        <div className="absolute w-2 h-2 rounded-full bg-gray-400" style={{ top: "160px", left: "110px" }} />
        <div className="absolute w-2 h-2 rounded-full bg-gray-400" style={{ bottom: "200px", left: "50px" }} />
      </div>
    </div>
  );
}

export default BackgroundGrid;
