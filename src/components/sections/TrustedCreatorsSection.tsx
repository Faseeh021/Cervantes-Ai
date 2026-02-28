"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function TrustedCreatorsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    // Scroll parallax handler
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate how far through the viewport the section is (-1 to 1)
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const clampedProgress = Math.max(0, Math.min(1, progress));
      setScrollOffset((clampedProgress - 0.5) * 30); // -15 to 15px range
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(90.28deg, #781EE0 0.26%, #7E5FFF 99.8%)",
      }}
    >

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between max-w-[1440px] mx-auto px-8 lg:px-[70px] py-12 lg:py-[53px]">
        {/* Left Content */}
        <div className="max-w-[578px]">
          {/* Main Heading */}
          <h2
            className="font-plus-jakarta font-bold text-white mb-4 animate-on-scroll"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
            }}
          >
            Trusted by
            <br />
            Creators <span className="font-extrabold">Worldwide</span>
          </h2>

          {/* Subheading */}
          <p
            className="font-plus-jakarta font-semibold text-white mb-8 animate-on-scroll text-lg lg:text-2xl"
            style={{
              lineHeight: "1.4",
              transitionDelay: "0.1s",
            }}
          >
            Built with creators who wants real results.
          </p>

          {/* Start Creating Content */}
          <div
            className="mb-6 animate-on-scroll"
            style={{ transitionDelay: "0.15s" }}
          >
            <p
              className="font-plus-jakarta font-bold text-white text-lg lg:text-2xl mb-3 lg:mb-4"
              style={{
                lineHeight: "1.2",
              }}
            >
              Start Creating Content in Minutes
            </p>
            <p
              className="font-plus-jakarta font-normal text-white text-base lg:text-2xl"
              style={{
                lineHeight: "1.4",
              }}
            >
              Turn one idea into high-impact content across every platform
              powered by intelligent AI.
            </p>
          </div>

          {/* Start Free Button */}
          <button
            className="group relative flex items-center justify-between mb-4 animate-on-scroll h-[44px] lg:h-[50px] pl-6 lg:pl-8 pr-1 rounded-full bg-white cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl"
            style={{
              transitionDelay: "0.2s",
              minWidth: "190px",
            }}
          >
            <span
              className="font-plus-jakarta font-semibold text-lg lg:text-2xl transition-transform duration-300 group-hover:-translate-x-1"
              style={{
                color: "#4A4A4A",
              }}
            >
              Start Free
            </span>
            {/* Arrow Circle */}
            <span
              className="flex items-center justify-center ml-4 transition-transform duration-300 group-hover:translate-x-1"
              style={{
                width: "36px",
                height: "36px",
                minWidth: "36px",
                borderRadius: "50%",
                background: "#781EE0",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path
                  d="M1.5 7H12.5M12.5 7L7 1.5M12.5 7L7 12.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          {/* Credits Text */}
          <p
            className="font-plus-jakarta font-bold text-white animate-on-scroll"
            style={{
              fontSize: "16px",
              lineHeight: "16px",
              transitionDelay: "0.25s",
            }}
          >
            Get 50 free credits. No credit card required.
          </p>
        </div>

        {/* Right Content - Dashboard Image with Orbital Circles */}
        <div
          className="relative mt-8 lg:mt-0 lg:absolute lg:right-0 lg:top-[72px] animate-on-scroll"
          style={{ transitionDelay: "0.3s", zIndex: 2 }}
        >
          {/* Left - Premium orbital circles with rotation + parallax */}
          <svg
            className="absolute pointer-events-none hidden lg:block"
            style={{
              width: "clamp(280px, 30vw, 460px)",
              height: "clamp(280px, 30vw, 460px)",
              top: "-20px",
              left: "-60px",
              zIndex: 0,
              transform: `translateY(${scrollOffset * 0.5}px)`,
              transition: "transform 0.1s ease-out",
            }}
            viewBox="0 0 460 460"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Inner circle - rotating */}
            <g className="orbit-spin" style={{ transformOrigin: "230px 230px" }}>
              <circle
                cx="230"
                cy="230"
                r="160"
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="1"
                fill="none"
              />
              {/* Dots on inner circle */}
              <circle className="arc-dot arc-dot-1" cx="70" cy="230" r="3" fill="rgba(255,255,255,0.9)" />
              <circle className="arc-dot arc-dot-2" cx="100" cy="120" r="3" fill="rgba(255,255,255,0.9)" />
              <circle className="arc-dot arc-dot-3" cx="100" cy="340" r="3" fill="rgba(255,255,255,0.9)" />
            </g>
            {/* Outer circle - rotating reverse, offset center */}
            <g className="orbit-spin-reverse" style={{ transformOrigin: "220px 245px" }}>
              <circle
                cx="220"
                cy="245"
                r="210"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1"
                fill="none"
              />
              {/* Dots on outer circle */}
              <circle className="arc-dot arc-dot-4" cx="10" cy="245" r="3.5" fill="rgba(255,255,255,0.7)" />
              <circle className="arc-dot arc-dot-5" cx="55" cy="70" r="3.5" fill="rgba(255,255,255,0.7)" />
              <circle className="arc-dot arc-dot-6" cx="220" cy="455" r="3.5" fill="rgba(255,255,255,0.6)" />
            </g>
          </svg>

          {/* Right top - smaller orbital circles with rotation + parallax */}
          <svg
            className="absolute pointer-events-none hidden xl:block"
            style={{
              width: "clamp(120px, 12vw, 180px)",
              height: "clamp(120px, 12vw, 180px)",
              top: "-50px",
              right: "80px",
              zIndex: 0,
              transform: `translateY(${scrollOffset * -0.3}px)`,
              transition: "transform 0.1s ease-out",
            }}
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Inner circle - rotating */}
            <g className="orbit-spin" style={{ transformOrigin: "90px 90px" }}>
              <circle
                cx="90"
                cy="90"
                r="60"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1"
                fill="none"
              />
              <circle className="arc-dot arc-dot-1" cx="30" cy="90" r="2.5" fill="rgba(255,255,255,0.8)" />
            </g>
            {/* Outer circle - rotating reverse, offset */}
            <g className="orbit-spin-reverse" style={{ transformOrigin: "95px 85px" }}>
              <circle
                cx="95"
                cy="85"
                r="85"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
                fill="none"
              />
              <circle className="arc-dot arc-dot-3" cx="45" cy="40" r="2.5" fill="rgba(255,255,255,0.8)" />
              <circle className="arc-dot arc-dot-5" cx="10" cy="85" r="2.5" fill="rgba(255,255,255,0.6)" />
            </g>
          </svg>

          <Image
            src="/images/dashboard3.jpeg"
            alt="Cervantes AI Dashboard"
            width={799}
            height={417}
            className="relative w-full max-w-[500px] lg:max-w-[799px] h-auto rounded-lg shadow-2xl"
            style={{ zIndex: 1 }}
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default TrustedCreatorsSection;
