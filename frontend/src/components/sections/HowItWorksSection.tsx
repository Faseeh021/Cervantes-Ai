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
      style={{ minHeight: "625px" }}
    >
      {/* Background with grid */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(120, 30, 224, 0.1)" }}
      >
        {/* Grid pattern overlay - lighter lines */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 59px,
                rgba(120, 30, 224, 0.04) 59px,
                rgba(120, 30, 224, 0.04) 60px
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 59px,
                rgba(120, 30, 224, 0.04) 59px,
                rgba(120, 30, 224, 0.04) 60px
              )
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center py-16 lg:py-20 px-4">
        {/* How It Works Badge */}
        <div
          className="flex items-center justify-center mb-6 animate-on-scroll"
          style={{
            width: "179px",
            height: "47px",
            borderRadius: "1115px",
            background: "#781EE0",
            border: "1.12px solid #EEEEEE",
          }}
        >
          <span
            className="font-inter font-medium text-white text-center"
            style={{
              fontSize: "17.86px",
              lineHeight: "17.86px",
            }}
          >
            How It Works
          </span>
        </div>

        {/* Main Heading */}
        <h2
          className="font-plus-jakarta font-bold text-center text-[#0E0E0E] mb-4 animate-on-scroll"
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: "61.4px",
            transitionDelay: "0.1s",
          }}
        >
          Create content in 3 simple steps
        </h2>

        {/* Subheading */}
        <p
          className="font-plus-jakarta font-normal text-center text-[#696969] mb-16 lg:mb-20 animate-on-scroll"
          style={{
            fontSize: "22px",
            lineHeight: "35px",
            transitionDelay: "0.15s",
          }}
        >
          From a simple prompt to a complete content workflow.
        </p>

        {/* Steps Container */}
        <div className="w-full max-w-[1239px] mx-auto">
          {/* Circles and Dashed Lines Row */}
          <div className="relative flex items-center justify-center mb-12 px-4 lg:px-8">
            {/* Circle 01 */}
            <div
              className="relative z-10 flex items-center justify-center animate-on-scroll flex-shrink-0"
              style={{
                width: "78px",
                height: "78px",
                borderRadius: "50%",
                background: "#781EE0",
                transitionDelay: "0.2s",
              }}
            >
              <span
                className="font-montserrat font-bold text-white text-center"
                style={{
                  fontSize: "24px",
                  lineHeight: "24px",
                  letterSpacing: "-0.03em",
                }}
              >
                01
              </span>
            </div>

            {/* Dashed Line 1 */}
            <div
              className="draw-line flex-1 max-w-[350px] mx-2"
              style={{
                height: "1px",
                background: "repeating-linear-gradient(90deg, #0E0E0E 0px, #0E0E0E 8px, transparent 8px, transparent 16px)",
                animationDelay: "0.4s",
              }}
            />

            {/* Circle 02 */}
            <div
              className="relative z-10 flex items-center justify-center animate-on-scroll flex-shrink-0"
              style={{
                width: "78px",
                height: "78px",
                borderRadius: "50%",
                background: "#781EE0",
                transitionDelay: "0.35s",
              }}
            >
              <span
                className="font-montserrat font-bold text-white text-center"
                style={{
                  fontSize: "24px",
                  lineHeight: "24px",
                  letterSpacing: "-0.03em",
                }}
              >
                02
              </span>
            </div>

            {/* Dashed Line 2 */}
            <div
              className="draw-line flex-1 max-w-[350px] mx-2"
              style={{
                height: "1px",
                background: "repeating-linear-gradient(90deg, #0E0E0E 0px, #0E0E0E 8px, transparent 8px, transparent 16px)",
                animationDelay: "1.2s",
              }}
            />

            {/* Circle 03 */}
            <div
              className="relative z-10 flex items-center justify-center animate-on-scroll flex-shrink-0"
              style={{
                width: "78px",
                height: "78px",
                borderRadius: "50%",
                background: "#781EE0",
                transitionDelay: "0.5s",
              }}
            >
              <span
                className="font-montserrat font-bold text-white text-center"
                style={{
                  fontSize: "24px",
                  lineHeight: "24px",
                  letterSpacing: "-0.03em",
                }}
              >
                03
              </span>
            </div>
          </div>

          {/* Step Titles and Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center animate-on-scroll"
                style={{ transitionDelay: `${0.35 + index * 0.1}s` }}
              >
                {/* Title */}
                <h3
                  className="font-plus-jakarta font-bold text-[#000000] mb-3"
                  style={{
                    fontSize: "24px",
                    lineHeight: "24px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="font-plus-jakarta font-normal max-w-[313px]"
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "-0.03em",
                    color: "#4A4A4A",
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
