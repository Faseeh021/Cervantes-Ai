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
            <Image
              src="/images/logo.png"
              alt="Cervantes AI"
              width={218}
              height={43}
              className="object-contain mb-4 sm:mb-6 lg:mb-10 w-[140px] sm:w-[160px] lg:w-[218px] h-auto"
            />
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
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                  <path d="M18.308 15.275C18.308 15.575 18.242 15.883 18.1 16.183C17.958 16.483 17.775 16.767 17.533 17.033C17.117 17.492 16.658 17.825 16.142 18.042C15.633 18.258 15.083 18.367 14.492 18.367C13.633 18.367 12.717 18.158 11.75 17.733C10.783 17.308 9.817 16.767 8.858 16.108C7.892 15.442 6.975 14.708 6.1 13.9C5.233 13.083 4.458 12.217 3.775 11.3C3.1 10.383 2.558 9.467 2.158 8.558C1.758 7.642 1.558 6.767 1.558 5.933C1.558 5.358 1.658 4.808 1.858 4.3C2.058 3.783 2.383 3.308 2.833 2.883C3.383 2.35 3.983 2.083 4.617 2.083C4.858 2.083 5.1 2.133 5.317 2.233C5.542 2.333 5.742 2.483 5.9 2.7L7.825 5.508C7.983 5.717 8.1 5.908 8.175 6.092C8.258 6.267 8.3 6.442 8.3 6.6C8.3 6.8 8.242 7 8.125 7.192C8.017 7.383 7.858 7.583 7.658 7.783L7.033 8.433C6.942 8.525 6.9 8.633 6.9 8.767C6.9 8.833 6.908 8.892 6.925 8.958C6.95 9.025 6.975 9.075 6.992 9.125C7.15 9.408 7.417 9.775 7.792 10.217C8.175 10.658 8.583 11.108 9.025 11.558C9.483 12.008 9.925 12.425 10.375 12.808C10.817 13.183 11.183 13.442 11.475 13.6C11.517 13.617 11.567 13.642 11.625 13.667C11.692 13.692 11.758 13.7 11.833 13.7C11.975 13.7 12.083 13.65 12.175 13.558L12.8 12.942C13.008 12.733 13.208 12.575 13.4 12.475C13.592 12.358 13.783 12.3 13.992 12.3C14.15 12.3 14.317 12.333 14.5 12.408C14.683 12.483 14.875 12.6 15.083 12.75L17.925 14.7C18.142 14.858 18.292 15.042 18.383 15.258C18.467 15.475 18.517 15.675 18.308 15.275Z" stroke="#4A4A4A" strokeWidth="1.5" strokeMiterlimit="10"/>
                </svg>
                <span className="font-plus-jakarta text-sm sm:text-base" style={{ fontWeight: 400, color: "#4A4A4A" }}>
                  +1 (800) 123-4567
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="18" height="14" viewBox="0 0 20 16" fill="none" className="flex-shrink-0">
                  <path d="M17 1H3C1.9 1 1 1.9 1 3V13C1 14.1 1.9 15 3 15H17C18.1 15 19 14.1 19 13V3C19 1.9 18.1 1 17 1Z" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 3L10 9L1 3" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-plus-jakarta text-sm sm:text-base break-all" style={{ fontWeight: 400, color: "#4A4A4A" }}>
                  support@yourplatform.com
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
