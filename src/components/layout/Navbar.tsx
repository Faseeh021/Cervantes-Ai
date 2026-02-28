"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Product", href: "/product" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute left-1/2 -translate-x-1/2 flex items-center justify-between w-[95%] max-w-[1303px] h-[61px] top-[36px] px-4 lg:px-0 reveal-nav">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/images/logo.png"
          alt="Cervantes AI"
          width={218}
          height={43}
          priority
          className="w-[140px] lg:w-[180px] xl:w-[218px] h-auto object-contain"
        />
      </div>

      {/* Navigation Pills - Glass Container */}
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

        {/* Start Free Button - visible on all screens */}
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
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full glass"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-2xl glass md:hidden z-50">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-center py-3 px-4 rounded-full font-plus-jakarta font-medium text-base transition-all duration-200"
                style={{
                  background: item.active ? "#1a1a1a" : "transparent",
                  color: item.active ? "#FFFFFF" : "#1a1a1a",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-gray-200">
              <Link
                href="/login"
                className="flex items-center justify-center py-3 px-4 rounded-full font-plus-jakarta font-semibold text-base"
                style={{ background: "#F8F3FD", color: "#0E0E0E" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/start-free"
                className="flex items-center justify-center py-3 px-4 rounded-full font-plus-jakarta font-semibold text-base text-white"
                style={{ background: "#781EE0" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Free
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
