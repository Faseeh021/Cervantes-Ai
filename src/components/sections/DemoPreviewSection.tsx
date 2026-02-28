"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export function DemoPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);

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

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-4 sm:pt-6 lg:pt-10 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Mobile glass gradient background */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(250,248,255,0.95) 50%, rgba(255,255,255,0.9) 100%)",
        }}
      />
      {/* Decorative gradient orbs for mobile */}
      <div
        className="absolute md:hidden rounded-full"
        style={{
          width: "180px",
          height: "180px",
          top: "10%",
          left: "-40px",
          background: "radial-gradient(circle, rgba(147,51,234,0.12) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <div
        className="absolute md:hidden rounded-full"
        style={{
          width: "150px",
          height: "150px",
          bottom: "20%",
          right: "-30px",
          background: "radial-gradient(circle, rgba(120,30,224,0.1) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <div className="relative max-w-[1278px] mx-auto flex flex-col items-center">
        {/* Main Heading */}
        <h2
          className="font-plus-jakarta font-bold text-center text-[#0E0E0E] mb-3 sm:mb-4 animate-on-scroll px-2"
          style={{
            fontSize: "clamp(26px, 5vw, 64px)",
            lineHeight: "1.15",
            letterSpacing: "0px",
          }}
        >
          See How
          <br />
          It Works In <span className="text-[#781EE0]">Real Time</span>
        </h2>

        {/* Subheading */}
        <p
          className="font-plus-jakarta font-normal text-center mb-8 sm:mb-10 lg:mb-16 animate-on-scroll text-base sm:text-lg lg:text-[22px] px-4"
          style={{
            lineHeight: "1.6",
            color: "#696969",
            transitionDelay: "0.1s",
          }}
        >
          Type an idea. Watch it turn into content.
        </p>

        {/* Dashboard Image */}
        <div
          className="w-full max-w-[1278px] animate-on-scroll rounded-2xl sm:rounded-xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(250,248,255,0.8) 100%)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(120, 30, 224, 0.1)",
            boxShadow: "0 20px 60px rgba(120, 30, 224, 0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
            padding: "8px",
            transitionDelay: "0.2s",
          }}
        >
          <Image
            src="/images/dashboard2.png"
            alt="Cervantes AI Dashboard Preview"
            width={1278}
            height={803}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default DemoPreviewSection;
