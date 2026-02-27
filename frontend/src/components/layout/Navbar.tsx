"use client";

import React from "react";
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
  return (
    <header
      className="absolute left-1/2 -translate-x-1/2 flex items-center justify-between"
      style={{
        width: "1303px",
        height: "61px",
        top: "36px",
      }}
    >
      {/* Logo */}
      <div style={{ width: "218px", height: "43.25px" }}>
        <Image
          src="/images/logo.jpeg"
          alt="Cervantes AI"
          width={218}
          height={43}
          priority
          style={{ width: "218px", height: "43.25px", objectFit: "contain" }}
        />
      </div>

      {/* Navigation Pills - Glass Container */}
      <div
        className="flex items-center justify-center"
        style={{
          height: "61px",
          padding: "8px",
          background: "rgba(255, 255, 255, 0.21)",
          borderRadius: "100px",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div className="flex items-center" style={{ gap: "8px" }}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-center"
              style={{
                height: "44px",
                padding: "0 20px",
                background: item.active ? "#0E0E0E" : "transparent",
                borderRadius: "100px",
                fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "20px",
                color: item.active ? "#FFFFFF" : "#0E0E0E",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center" style={{ gap: "16px" }}>
        {/* Login Button */}
        <Link
          href="/login"
          className="flex items-center justify-center"
          style={{
            width: "114.09px",
            height: "42px",
            background: "#F8F3FD",
            border: "1px solid #EEEEEE",
            borderRadius: "999px",
            gap: "8px",
            paddingLeft: "16px",
            paddingRight: "6px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "16px",
              color: "#0E0E0E",
            }}
          >
            Log In
          </span>
          <span
            className="flex items-center justify-center"
            style={{
              width: "30px",
              height: "30px",
              background: "#9D4EDD",
              borderRadius: "30px",
            }}
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

        {/* Start Free Button - Purple background with white arrow circle */}
        <Link
          href="/start-free"
          className="flex items-center"
          style={{
            height: "42px",
            background: "#781EE0",
            borderRadius: "999px",
            paddingLeft: "20px",
            paddingRight: "5px",
            gap: "10px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "16px",
              color: "#FFFFFF",
            }}
          >
            Start Free
          </span>
          <span
            className="flex items-center justify-center"
            style={{
              width: "32px",
              height: "32px",
              background: "#FFFFFF",
              borderRadius: "32px",
            }}
          >
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
    </header>
  );
}

export default Navbar;
