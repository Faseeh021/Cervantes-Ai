"use client";

import React, { useEffect, useRef } from "react";

const benefits = [
  {
    icon: "shield",
    title: "Secure & Private by Design",
    description:
      "Your content stays protected. Create with confidence using secure workflows.",
  },
  {
    icon: "lightning",
    title: "Fast, Reliable AI",
    description:
      "Generate content instantly with high-performance AI that keeps up with your ideas.",
  },
  {
    icon: "puzzle",
    title: "All-in-One Solution",
    description:
      "From ideation to publishing everything in one place. No switching tools. No wasted time.",
  },
];

function BenefitIcon({ type }: { type: string }) {
  const iconSize = "w-10 h-10 lg:w-[54px] lg:h-[54px]";

  switch (type) {
    case "shield":
      return (
        <svg
          className={iconSize}
          viewBox="0 0 68 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_shield)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36.1176 1.56868C40.7917 4.64399 45.8317 7.11919 51.1198 8.93636C55.0435 10.3056 59.2021 10.8675 63.3471 10.5886L67.6471 10.1965L67.8586 14.5296C68.6469 30.4672 66.0835 44.3153 60.7068 55.2383C55.1122 66.6048 46.5121 74.8147 35.4704 78.9807H32.5994C21.8076 75.0269 13.2715 67.042 7.60644 55.534C2.31948 44.7332 -0.391296 30.7822 0.0444783 14.1439L0.15983 9.86857L4.39581 10.0872C9.00708 10.3873 13.6359 9.91142 18.0907 8.6792C22.9127 7.26611 27.4156 4.92773 31.3497 1.7937L33.6504 0L36.1176 1.56868ZM33.9195 12.408C42.5901 17.9242 50.4213 20.5343 57.1437 19.93C58.3165 43.7174 49.5497 61.8988 34.0092 67.7685C18.9942 62.2716 10.1186 44.7204 10.7786 19.5507C18.6674 19.9686 26.4152 18.2649 33.9195 12.408ZM29.1644 39.6093C29.7627 40.1213 30.3277 40.671 30.8563 41.2551C32.4539 38.671 34.2245 36.1987 36.1561 33.8553C41.4366 27.4584 39.8601 27.8763 47.185 27.8763L46.1404 29.0078C43.3903 32.1025 40.8633 35.3896 38.5784 38.8442C36.0384 42.5292 33.7352 46.373 31.683 50.3522L31.0421 51.5802L30.459 50.3329C29.4232 48.0648 28.1123 45.9335 26.5562 43.9875C25.1522 42.2079 23.4759 40.6629 21.5897 39.41C22.5445 36.2662 27.0945 37.8799 29.1324 39.6093H29.1644ZM33.8939 5.08537C45.0317 12.1573 55.0866 15.5133 63.7252 14.7289C65.2312 45.3247 53.9651 67.5563 34.0092 75.0976C14.739 68.0321 3.33842 46.5784 4.18433 14.2596C14.3161 14.7868 24.262 12.5945 33.8939 5.08537Z"
              fill="#781EE0"
            />
          </g>
          <defs>
            <clipPath id="clip0_shield">
              <rect width="68" height="79" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "lightning":
      return (
        <svg
          className={iconSize}
          viewBox="0 0 50 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45.8333 0H16.6667L0 38.8889H16.6667L8.33333 70L50 23.3333H27.7778L45.8333 0Z"
            fill="#781EE0"
          />
        </svg>
      );
    case "puzzle":
      return (
        <svg
          className={iconSize}
          viewBox="0 0 83 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_puzzle)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.2367 75.6282C24.2489 75.6282 27.5113 72.708 27.5113 69.1118C27.5113 67.8274 27.0925 66.631 26.3698 65.617H26.5657C23.3708 62.1222 23.7085 59.2628 27.0925 58.2624H38.2848C39.5479 58.2624 40.5814 57.2281 40.5814 55.9641V46.0205C41.3649 39.2337 44.2626 41.2481 47.6737 43.3503C55.9142 48.4269 61.3922 36.4013 54.7322 32.2846C49.5042 29.0535 47.2414 34.61 43.4115 34.0354C41.9323 33.8123 40.9056 32.2103 40.5814 29.7767V19.9481C40.5814 18.684 39.5479 17.6497 38.2848 17.6497H28.484C23.8436 17.0616 22.9655 13.9386 26.5589 10.0112H26.363C27.0858 8.99724 27.5046 7.80077 27.5046 6.51641C27.5113 2.92022 24.2556 0 20.2367 0C16.2244 0 12.9688 2.92022 12.9688 6.51641C12.9688 7.80077 13.3875 8.99724 14.1103 10.0112H14.063C17.6564 13.9386 16.7851 17.0684 12.1379 17.6497H2.29655C1.03345 17.6497 0 18.684 0 19.9481V30.1959C0.736247 34.4139 3.7758 35.1034 7.55835 31.6357V31.683C8.57153 30.9597 9.76709 30.5406 11.0505 30.5406C14.6439 30.5406 17.5618 33.7988 17.5618 37.8141C17.5618 41.8294 14.6439 45.0876 11.0505 45.0876C9.76709 45.0876 8.57153 44.6685 7.55835 43.9452V44.1412C3.7758 40.6735 0.736247 41.3697 0 45.5878V55.9708C0 57.2349 1.03345 58.2691 2.29655 58.2691H13.5294C16.9134 59.2696 17.2579 62.129 14.0562 65.6238H14.1035C13.3875 66.6377 12.962 67.8342 12.962 69.1186C12.9688 72.7148 16.2244 75.635 20.2367 75.6282ZM62.7633 76H62.7498C58.7376 76 55.4752 73.0798 55.4752 69.4836C55.4752 68.1992 55.894 67.0028 56.6167 65.9888H56.5694C59.7643 62.494 59.4266 59.6346 56.0426 58.6342H44.8097C43.5466 58.6342 42.5132 57.5999 42.5132 56.3358V45.9731C43.0535 44.4049 43.7425 43.8506 44.5531 43.8303C44.9246 43.8235 45.3163 43.9249 45.7351 44.1007C46.9104 44.5874 48.2883 45.6081 49.7878 46.1895C55.5697 48.4202 60.5343 42.7893 60.2034 37.0029C60.1291 35.7118 59.609 34.441 58.839 33.2648C55.8872 28.7493 51.517 28.3234 47.3022 30.8989C45.1542 32.217 43.4453 33.2107 42.4659 30.108L42.5199 20.3131C42.5267 19.049 43.5534 18.0148 44.8165 18.0148H54.6511C59.2915 17.4267 60.1696 14.3037 56.5762 10.3762H56.6235C55.9007 9.36227 55.4819 8.16579 55.4819 6.88144C55.4819 3.28524 58.7376 0.365027 62.7566 0.365027H62.7701C66.7823 0.365027 70.0448 3.28524 70.0448 6.88144C70.0448 8.16579 69.626 9.36227 68.9032 10.3762H68.9505C65.3571 14.3037 66.2284 17.4334 70.8756 18.0148H80.7102C81.9733 18.0148 83.0068 19.049 83.0068 20.3131V30.5609C82.2705 34.779 79.231 35.4685 75.4484 32.0007V32.048C74.4352 31.3247 73.2397 30.9056 71.9563 30.9056C68.3629 30.9056 65.4449 34.1638 65.4449 38.1791C65.4449 42.1944 68.3629 45.4594 71.9563 45.4594C73.2397 45.4594 74.4352 45.0403 75.4484 44.317V44.513C79.2377 41.0453 82.2705 41.7415 83.0068 45.9596V56.3223C83.0068 57.5864 81.9733 58.6207 80.7102 58.6207H69.4774C66.0933 59.6211 65.7556 62.4805 68.9505 65.9753H68.8965C69.6192 66.9892 70.038 68.1857 70.038 69.4701C70.0312 73.0798 66.7756 76 62.7633 76Z"
              fill="#781EE0"
            />
          </g>
          <defs>
            <clipPath id="clip0_puzzle">
              <rect width="83" height="76" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return null;
  }
}

export function WhyChooseSection() {
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
    <section ref={sectionRef} className="relative w-full pt-4 sm:pt-6 lg:pt-10 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden">
      {/* Mobile premium gradient background */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background: "linear-gradient(135deg, rgba(248,245,255,0.9) 0%, rgba(255,255,255,0.95) 50%, rgba(245,240,255,0.9) 100%)",
        }}
      />
      {/* Decorative gradient orb */}
      <div
        className="absolute md:hidden rounded-full"
        style={{
          width: "200px",
          height: "200px",
          top: "20%",
          right: "-50px",
          background: "radial-gradient(circle, rgba(120,30,224,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div className="relative max-w-[1300px] mx-auto">
        {/* Main Heading */}
        <h2
          className="font-plus-jakarta font-bold text-center text-[#0E0E0E] mb-3 sm:mb-4 animate-on-scroll px-2"
          style={{
            fontSize: "clamp(26px, 5vw, 64px)",
            lineHeight: "1.15",
            letterSpacing: "-0.03em",
          }}
        >
          Why Creators
          <br />
          Choose{" "}
          <span className="font-extrabold text-[#781EE0]">Cervantes AI</span>
        </h2>

        {/* Subheading */}
        <p
          className="font-plus-jakarta font-normal text-center text-[#696969] mb-8 sm:mb-12 lg:mb-20 animate-on-scroll text-base sm:text-lg lg:text-[22px] px-4"
          style={{
            lineHeight: "1.6",
            transitionDelay: "0.1s",
          }}
        >
          Built with creators in mind. Designed for real results.
        </p>

        {/* Benefits Grid - responsive 1/2/3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`flex flex-col items-center justify-center px-5 sm:px-6 md:px-8 py-8 sm:py-10 w-full card-hover cursor-pointer animate-on-scroll ${
                index === 2 ? "sm:col-span-2 sm:max-w-[420px] sm:mx-auto md:col-span-1 md:max-w-none" : ""
              }`}
              style={{
                minHeight: "auto",
                borderRadius: "16px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,248,255,0.9) 100%)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(120, 30, 224, 0.08)",
                boxShadow: "0 10px 40px rgba(120, 30, 224, 0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
                transitionDelay: `${0.15 * (index + 1)}s`,
              }}
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-5 transition-transform duration-300">
                <BenefitIcon type={benefit.icon} />
              </div>

              {/* Title */}
              <h3
                className="font-plus-jakarta font-bold text-center text-[#000000] mb-2 sm:mb-3 text-lg sm:text-xl md:text-[22px]"
                style={{
                  lineHeight: "1.3",
                }}
              >
                {benefit.title}
              </h3>

              {/* Description */}
              <p
                className="font-plus-jakarta font-normal text-center text-[#696969] max-w-[320px] text-sm sm:text-base"
                style={{
                  lineHeight: "1.6",
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
