"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact Us", href: "/contact" },
];

const platformLinks = [
  { label: "Help Center", href: "/help" },
  { label: "FAQs", href: "/faqs" },
  { label: "System Status", href: "/status" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

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
    const elements = footerRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full"
      style={{ background: "#F9F9F9", paddingTop: "40px", paddingBottom: "30px" }}
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[77px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-6">
          {/* Logo & Description */}
          <div className="animate-on-scroll sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 sm:mb-6 lg:mb-10">
              <Image
                src="/images/CervantesAI logo1.svg"
                alt="Cervantes AI"
                width={45}
                height={45}
                className="object-contain w-[32px] sm:w-[38px] lg:w-[45px] h-auto"
              />
              <Image
                src="/images/cervantes-text.svg"
                alt="Cervantes AI"
                width={180}
                height={35}
                className="object-contain w-[130px] sm:w-[150px] lg:w-[180px] h-auto"
              />
            </div>
            <p
              className="font-plus-jakarta mb-6 sm:mb-8 lg:mb-10 max-w-[368px] w-full text-sm sm:text-base lg:text-lg"
              style={{
                fontWeight: 400,
                lineHeight: "160%",
                color: "#808080",
              }}
            >
              Create smarter content with Cervantes AI — generate, automate, and scale everything from one powerful AI workspace.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon flex items-center justify-center rounded-full w-10 h-10 lg:w-12 lg:h-12"
                style={{ background: "#7E5FFF" }}
              >
                <svg width="12" height="20" viewBox="0 0 12 23" fill="none">
                  <path
                    d="M7.5 13V22H3.5V13H0.5V9H3.5V6.5C3.5 3.5 5.5 1 9 1H12V5H9.5C8.5 5 8 5.5 8 6.5V9H12L11.5 13H7.5Z"
                    fill="#E3DCFF"
                  />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon flex items-center justify-center rounded-full w-10 h-10 lg:w-12 lg:h-12"
                style={{ background: "#E3DCFF" }}
              >
                <svg width="20" height="20" viewBox="0 0 22 21" fill="none">
                  <rect x="1" y="0.5" width="20" height="20" rx="5" stroke="#7E5FFF" strokeWidth="1.5" fill="none" />
                  <circle cx="11" cy="10.5" r="4" stroke="#7E5FFF" strokeWidth="1.5" fill="none" />
                  <circle cx="16.5" cy="5" r="1.5" fill="#7E5FFF" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon flex items-center justify-center rounded-full w-10 h-10 lg:w-12 lg:h-12"
                style={{ background: "#E3DCFF" }}
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M4 7V17H1V7H4ZM2.5 5.5C1.67 5.5 1 4.83 1 4C1 3.17 1.67 2.5 2.5 2.5C3.33 2.5 4 3.17 4 4C4 4.83 3.33 5.5 2.5 5.5ZM17 17H14V12C14 10.5 13.5 10 12.5 10C11.5 10 10.5 10.67 10.5 12V17H7.5V7H10.5V8.5C11 7.5 12.17 6.75 13.5 6.75C15.5 6.75 17 8 17 11V17Z" fill="#7E5FFF" />
                </svg>
              </a>
            </div>
          </div>

          {/* Menu */}
          <div className="animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
            <h3
              className="font-plus-jakarta text-xl sm:text-2xl lg:text-[32px] font-bold mb-4 sm:mb-6 lg:mb-[38px]"
              style={{ lineHeight: "100%", color: "#000000" }}
            >
              Menu
            </h3>
            <ul className="space-y-3 sm:space-y-[18px]">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-plus-jakarta footer-link text-sm sm:text-base"
                    style={{ fontWeight: 400, lineHeight: "100%", color: "#4A4A4A" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div className="animate-on-scroll" style={{ transitionDelay: "0.15s" }}>
            <h3
              className="font-plus-jakarta text-xl sm:text-2xl lg:text-[32px] font-bold mb-4 sm:mb-6 lg:mb-[38px]"
              style={{ lineHeight: "100%", color: "#000000" }}
            >
              Platform
            </h3>
            <ul className="space-y-3 sm:space-y-[18px]">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-plus-jakarta footer-link text-sm sm:text-base"
                    style={{ fontWeight: 400, lineHeight: "100%", color: "#4A4A4A" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
            <h3
              className="font-plus-jakarta text-xl sm:text-2xl lg:text-[32px] font-bold mb-4 sm:mb-6 lg:mb-[38px]"
              style={{ lineHeight: "100%", color: "#000000" }}
            >
              Contact
            </h3>
            <ul className="space-y-3 sm:space-y-[18px]">
              <li className="flex items-center gap-3">
                <svg width="18" height="14" viewBox="0 0 20 16" fill="none" className="flex-shrink-0">
                  <path d="M17 1H3C1.9 1 1 1.9 1 3V13C1 14.1 1.9 15 3 15H17C18.1 15 19 14.1 19 13V3C19 1.9 18.1 1 17 1Z" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 3L10 9L1 3" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-plus-jakarta text-sm sm:text-base break-all" style={{ fontWeight: 400, color: "#4A4A4A" }}>
                  info@cervantesai.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="14" height="18" viewBox="0 0 16 20" fill="none" className="mt-0.5 flex-shrink-0">
                  <path d="M14 8C14 13 8 18 8 18C8 18 2 13 2 8C2 4.13 5.13 1 8 1C10.87 1 14 4.13 14 8Z" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="8" cy="8" r="2.5" stroke="#4A4A4A" strokeWidth="1.5"/>
                </svg>
                <span className="font-plus-jakarta text-sm sm:text-base" style={{ fontWeight: 400, color: "#4A4A4A", lineHeight: "150%" }}>
                  Remote-first company, serving sellers worldwide
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Background Image */}
      <div className="w-full flex justify-center mt-8 sm:mt-10 lg:mt-12 px-4 overflow-hidden">
        <Image
          src="/images/footer_image.png"
          alt="Cervantes AI"
          width={1328}
          height={263}
          className="max-w-full h-auto"
          unoptimized
        />
      </div>
    </footer>
  );
}

export default Footer;
