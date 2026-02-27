import React from "react";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
  variant?: "dark" | "gradient";
}

export function Logo({
  className = "",
  width = 218,
  height = 43.25,
  showText = true,
  variant = "dark",
}: LogoProps) {
  const iconHeight = height;
  const iconWidth = iconHeight * 0.9;

  // Dark variant (for navbar - black icon)
  if (variant === "dark") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <svg
          width={iconWidth}
          height={iconHeight}
          viewBox="0 0 40 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left C shape */}
          <path
            d="M8 12C8 7.58 11.58 4 16 4H20C20 4 24 4 24 8C24 12 20 12 20 12H16C14 12 12 14 12 16V28C12 30 14 32 16 32H20C20 32 24 32 24 36C24 40 20 40 20 40H16C11.58 40 8 36.42 8 32V12Z"
            fill="#0E0E0E"
          />
          {/* Right S shape */}
          <path
            d="M32 32C32 36.42 28.42 40 24 40H20C20 40 16 40 16 36C16 32 20 32 20 32H24C26 32 28 30 28 28V16C28 14 26 12 24 12H20C20 12 16 12 16 8C16 4 20 4 20 4H24C28.42 4 32 7.58 32 12V32Z"
            fill="#0E0E0E"
          />
          {/* Top accent line */}
          <path
            d="M30 2C33 2 36 3 38 5"
            stroke="#0E0E0E"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Bottom dot */}
          <circle cx="36" cy="38" r="2.5" fill="#0E0E0E" />
        </svg>

        {showText && (
          <span
            className="font-semibold text-[#0E0E0E]"
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Cervantes AI
          </span>
        )}
      </div>
    );
  }

  // Gradient variant (for other uses - blue/purple gradient)
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={iconWidth}
        height={iconHeight}
        viewBox="0 0 40 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
        <path
          d="M8 12C8 7.58 11.58 4 16 4H20C20 4 24 4 24 8C24 12 20 12 20 12H16C14 12 12 14 12 16V28C12 30 14 32 16 32H20C20 32 24 32 24 36C24 40 20 40 20 40H16C11.58 40 8 36.42 8 32V12Z"
          fill="url(#logoGradient)"
        />
        <path
          d="M32 32C32 36.42 28.42 40 24 40H20C20 40 16 40 16 36C16 32 20 32 20 32H24C26 32 28 30 28 28V16C28 14 26 12 24 12H20C20 12 16 12 16 8C16 4 20 4 20 4H24C28.42 4 32 7.58 32 12V32Z"
          fill="url(#logoGradient)"
        />
        <path
          d="M30 2C33 2 36 3 38 5"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="36" cy="38" r="2.5" fill="url(#logoGradient)" />
      </svg>

      {showText && (
        <span
          className="font-semibold text-[#0E0E0E]"
          style={{
            fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          Cervantes AI
        </span>
      )}
    </div>
  );
}

export default Logo;
