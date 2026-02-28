"use client";

import React, { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Start with an idea",
    description: "Describe your goal, topic, or campaign in a simple prompt.",
  },
  {
    number: "02",
    title: "Choose what to create",
    description: "Select text, images, videos, or social content all in one place.",
  },
  {
    number: "03",
    title: "Generate & scale",
    description: "Instantly produce, refine, and publish across multiple platforms.",
  },
];

export function HowItWorksSection() {
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

    const animatedElements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    const drawLineElements = sectionRef.current?.querySelectorAll(".draw-line");

    animatedElements?.forEach((el) => observer.observe(el));
    drawLineElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "auto" }}
    >
      {/* Background with grid - enhanced for mobile */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(120, 30, 224, 0.08) 0%, rgba(147, 51, 234, 0.12) 50%, rgba(120, 30, 224, 0.08) 100%)",
        }}
      >
        {/* Vertical lines only - thin */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 69.5px,
                rgba(120, 30, 224, 0.06) 69.5px,
                rgba(120, 30, 224, 0.06) 70px
              )
            `,
            backgroundSize: "70px 100%",
          }}
        />
        {/* Mobile glass shimmer overlay */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.2) 100%)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
        />
      </div>
      {/* Mobile decorative orbs */}
      <div
        className="absolute md:hidden rounded-full"
        style={{
          width: "200px",
          height: "200px",
          top: "5%",
          right: "-60px",
          background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <div
        className="absolute md:hidden rounded-full"
        style={{
          width: "160px",
          height: "160px",
          bottom: "10%",
          left: "-40px",
          background: "radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 70%)",
          filter: "blur(25px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-4 sm:pt-6 lg:pt-10 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6">
        {/* How It Works Badge */}
        <div
          className="flex items-center justify-center mb-5 sm:mb-6 animate-on-scroll px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 rounded-full"
          style={{
            background: "#781EE0",
            border: "1px solid #EEEEEE",
          }}
        >
          <span
            className="font-inter font-medium text-white text-center text-sm sm:text-base lg:text-lg"
            style={{
              lineHeight: "1",
            }}
          >
            How It Works
          </span>
        </div>

        {/* Main Heading */}
        <h2
          className="font-plus-jakarta font-bold text-center text-[#0E0E0E] mb-3 sm:mb-4 animate-on-scroll px-4"
          style={{
            fontSize: "clamp(24px, 5vw, 64px)",
            lineHeight: "1.15",
            transitionDelay: "0.1s",
          }}
        >
          Create content in 3 simple steps
        </h2>

        {/* Subheading */}
        <p
          className="font-plus-jakarta font-normal text-center text-[#696969] mb-8 sm:mb-12 lg:mb-16 animate-on-scroll text-base sm:text-lg lg:text-[22px] px-4"
          style={{
            lineHeight: "1.6",
            transitionDelay: "0.15s",
          }}
        >
          From a simple prompt to a complete content workflow.
        </p>

        {/* Steps Container */}
        <div className="w-full max-w-[1239px] mx-auto">
          {/* Desktop: Circles and Dashed Lines Row */}
          <div className="hidden sm:flex relative items-center justify-center mb-8 md:mb-12 px-2 sm:px-4 lg:px-8">
            {["01", "02", "03"].map((num, i) => (
              <React.Fragment key={num}>
                <div
                  className="relative z-10 flex items-center justify-center animate-on-scroll flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[78px] lg:h-[78px] rounded-full bg-[#781EE0]"
                  style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
                >
                  <span className="font-montserrat font-bold text-white text-center text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight">{num}</span>
                </div>
                {i < 2 && (
                  <div
                    className="draw-line flex-1 max-w-[80px] sm:max-w-[120px] md:max-w-[200px] lg:max-w-[350px] mx-1 sm:mx-2 h-px"
                    style={{ background: "repeating-linear-gradient(90deg, #0E0E0E 0px, #0E0E0E 6px, transparent 6px, transparent 12px)", animationDelay: `${0.4 + i * 0.8}s` }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Desktop: Step Titles and Descriptions Grid */}
          <div className="hidden sm:grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center animate-on-scroll"
                style={{ transitionDelay: `${0.35 + index * 0.1}s` }}
              >
                <h3
                  className="font-plus-jakarta font-bold text-[#000000] mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl"
                  style={{
                    lineHeight: "1.2",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-plus-jakarta font-normal max-w-[313px] text-sm sm:text-base"
                  style={{
                    lineHeight: "1.5",
                    letterSpacing: "-0.02em",
                    color: "#4A4A4A",
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: Vertical Steps Layout */}
          <div className="flex sm:hidden flex-col gap-6 px-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex items-start gap-4 animate-on-scroll"
                style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
              >
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#781EE0]">
                  <span className="font-montserrat font-bold text-white text-lg">{step.number}</span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-plus-jakarta font-bold text-[#000000] mb-1.5 text-lg">{step.title}</h3>
                  <p className="font-plus-jakarta font-normal text-sm text-[#4A4A4A] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
