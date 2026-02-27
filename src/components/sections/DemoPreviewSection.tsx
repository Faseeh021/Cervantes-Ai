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
      className="w-full py-16 lg:py-24 px-4"
    >
      <div className="max-w-[1278px] mx-auto flex flex-col items-center">
        {/* Main Heading */}
        <h2
          className="font-plus-jakarta font-bold text-center text-[#0E0E0E] mb-4 animate-on-scroll"
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: "72px",
            letterSpacing: "0px",
          }}
        >
          See How
          <br />
          It Works In <span className="text-[#781EE0]">Real Time</span>
        </h2>

        {/* Subheading */}
        <p
          className="font-plus-jakarta font-normal text-center mb-12 lg:mb-16 animate-on-scroll"
          style={{
            fontSize: "22px",
            lineHeight: "35px",
            color: "#696969",
            transitionDelay: "0.1s",
          }}
        >
          Type an idea. Watch it turn into content.
        </p>

        {/* Dashboard Image */}
        <div
          className="w-full max-w-[1278px] animate-on-scroll"
          style={{
            borderTop: "1px solid #E8E8E8",
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
