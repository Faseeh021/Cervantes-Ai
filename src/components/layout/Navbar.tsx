"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Platform", href: "/", active: true },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6 md:py-9"
      }`}
    >
      <div className="flex items-center justify-between h-[61px] w-[95%] max-w-[1303px] mx-auto px-4 lg:px-0">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center gap-2">
        <Image
          src="/images/CervantesAI logo1.svg"
          alt="Cervantes AI"
          width={40}
          height={40}
          priority
          className="w-[32px] lg:w-[38px] xl:w-[42px] h-auto object-contain"
        />
        <span className="font-plus-jakarta font-bold text-[#0E0E0E] text-lg lg:text-xl xl:text-2xl tracking-tight">
          Cervantes AI
        </span>
      </div>

      {/* Navigation Pills - Glass Container (Desktop only) */}
      <nav className="hidden md:flex items-center justify-center h-[56px] lg:h-[64px] px-2 lg:px-3 rounded-full glass">
        <div className="flex items-center gap-0">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-center h-[40px] lg:h-[48px] px-5 lg:px-6 rounded-full font-plus-jakarta font-normal text-[15px] lg:text-[16px] transition-all duration-200"
              style={{
                background: item.active ? "#1a1a1a" : "transparent",
                color: item.active ? "#FFFFFF" : "#1a1a1a",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Auth Buttons & Mobile Menu */}
      <div className="flex items-center gap-2 lg:gap-4">
        {/* Login Button - hidden on mobile */}
        <Link
          href="/login"
          className="hidden md:flex items-center justify-center h-[36px] lg:h-[42px] px-3 lg:px-4 pr-1 lg:pr-1.5 gap-2 rounded-full"
          style={{
            background: "#F8F3FD",
            border: "1px solid #EEEEEE",
          }}
        >
          <span className="font-plus-jakarta font-semibold text-sm lg:text-base text-[#0E0E0E]">
            Log In
          </span>
          <span
            className="flex items-center justify-center w-6 h-6 lg:w-[30px] lg:h-[30px] rounded-full"
            style={{ background: "#9D4EDD" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>

        {/* Start Free Button - hidden on xs */}
        <Link
          href="/start-free"
          className="hidden sm:flex items-center h-[36px] lg:h-[42px] px-3 lg:px-5 pr-1 lg:pr-1.5 gap-2 rounded-full"
          style={{ background: "#781EE0" }}
        >
          <span className="font-plus-jakarta font-semibold text-sm lg:text-base text-white">
            Start Free
          </span>
          <span className="flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full">
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none">
              <path
                d="M1 5.5H11M11 5.5L6.5 1M11 5.5L6.5 10"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full glass active:scale-95 transition-transform"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <div className="relative w-5 h-5">
            <span
              className={`absolute left-0 top-1 w-5 h-0.5 bg-[#0E0E0E] rounded transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 top-2.5" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 w-5 h-0.5 bg-[#0E0E0E] rounded transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 w-5 h-0.5 bg-[#0E0E0E] rounded transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 top-2.5" : ""
              }`}
            />
          </div>
        </button>
      </div>
      </div>

      {/* Mobile Menu Dropdown - Glass Effect */}
      <div
        className={`absolute top-full left-0 right-0 mt-2 mx-4 p-5 rounded-3xl md:hidden z-50 transition-all duration-300 ease-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(248, 243, 253, 0.8) 50%, rgba(245, 240, 255, 0.75) 100%)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.6)",
          boxShadow: "0 25px 50px rgba(120, 30, 224, 0.12), 0 10px 30px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.9)",
        }}
      >
        <nav className="flex flex-col gap-1.5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center justify-center py-3.5 px-4 rounded-xl font-plus-jakarta font-medium text-base transition-all duration-200 active:scale-[0.98] ${
                item.active
                  ? "bg-[#1a1a1a] text-white"
                  : "text-[#1a1a1a] hover:bg-gray-100"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200">
            {/* Login Button - same as desktop */}
            <Link
              href="/login"
              className="flex items-center justify-center h-[48px] px-5 pr-2 gap-3 rounded-full active:scale-[0.98] transition-transform"
              style={{
                background: "#F8F3FD",
                border: "1px solid #EEEEEE",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="font-plus-jakarta font-semibold text-base text-[#0E0E0E]">
                Log In
              </span>
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full"
                style={{ background: "#9D4EDD" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
            {/* Start Free Button - same as desktop */}
            <Link
              href="/start-free"
              className="flex items-center justify-center h-[48px] px-5 pr-2 gap-3 rounded-full active:scale-[0.98] transition-transform"
              style={{ background: "#781EE0" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="font-plus-jakarta font-semibold text-base text-white">
                Start Free
              </span>
              <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none">
                  <path
                    d="M1 5.5H11M11 5.5L6.5 1M11 5.5L6.5 10"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 md:hidden -z-10"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

export default Navbar;
