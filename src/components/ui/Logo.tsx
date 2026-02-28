import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "dark" | "purple";
}

export function Logo({
  className = "",
  showText = true,
  variant = "purple",
}: LogoProps) {
  const iconColor = variant === "dark" ? "#0E0E0E" : "#781EE0";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Cervantes AI Icon - Intertwined C design */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Left curved stroke */}
        <path
          d="M12 8C12 8 6 10 6 20C6 30 12 32 12 32"
          stroke={iconColor}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right curved stroke */}
        <path
          d="M28 8C28 8 34 10 34 20C34 30 28 32 28 32"
          stroke={iconColor}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Middle connecting curve - top */}
        <path
          d="M12 12C16 12 20 14 20 20"
          stroke={iconColor}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Middle connecting curve - bottom */}
        <path
          d="M28 28C24 28 20 26 20 20"
          stroke={iconColor}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Top accent dot */}
        <circle cx="32" cy="6" r="2.5" fill={iconColor} />
        {/* Bottom accent dot */}
        <circle cx="8" cy="34" r="2.5" fill={iconColor} />
      </svg>

      {showText && (
        <span
          className="font-semibold whitespace-nowrap"
          style={{
            fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
            fontSize: "20px",
            fontWeight: 600,
            color: variant === "dark" ? "#0E0E0E" : "#781EE0",
          }}
        >
          Cervantes AI
        </span>
      )}
    </div>
  );
}

export default Logo;
