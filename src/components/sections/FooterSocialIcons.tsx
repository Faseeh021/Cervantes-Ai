"use client";

import React from "react";

export function FooterSocialIcons() {
  return (
    <div className="flex items-center gap-3">
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-full transition-transform hover:scale-110"
        style={{
          width: "47px",
          height: "47px",
          background: "#7E5FFF",
        }}
      >
        <svg width="12" height="23" viewBox="0 0 12 23" fill="none">
          <path
            d="M11 1H8.5C6.5 1 4.5 2.5 4.5 5V8.5H1V13H4.5V22H9V13H11.5L12 8.5H9V5.5C9 4.5 9.5 4 10.5 4H12V1H11Z"
            fill="#E3DCFF"
          />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-full transition-transform hover:scale-110"
        style={{
          width: "47px",
          height: "47px",
          background: "#E3DCFF",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M11 7.5C9.067 7.5 7.5 9.067 7.5 11C7.5 12.933 9.067 14.5 11 14.5C12.933 14.5 14.5 12.933 14.5 11C14.5 9.067 12.933 7.5 11 7.5Z"
            fill="#7E5FFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5 1C3.46243 1 1 3.46243 1 6.5V15.5C1 18.5376 3.46243 21 6.5 21H15.5C18.5376 21 21 18.5376 21 15.5V6.5C21 3.46243 18.5376 1 15.5 1H6.5ZM11 5.5C7.96243 5.5 5.5 7.96243 5.5 11C5.5 14.0376 7.96243 16.5 11 16.5C14.0376 16.5 16.5 14.0376 16.5 11C16.5 7.96243 14.0376 5.5 11 5.5ZM17.5 5C17.5 5.55228 17.0523 6 16.5 6C15.9477 6 15.5 5.55228 15.5 5C15.5 4.44772 15.9477 4 16.5 4C17.0523 4 17.5 4.44772 17.5 5Z"
            fill="#7E5FFF"
          />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-full transition-transform hover:scale-110"
        style={{
          width: "47px",
          height: "47px",
          background: "#E3DCFF",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M4.5 3C4.5 3.82843 3.82843 4.5 3 4.5C2.17157 4.5 1.5 3.82843 1.5 3C1.5 2.17157 2.17157 1.5 3 1.5C3.82843 1.5 4.5 2.17157 4.5 3Z"
            fill="#7E5FFF"
          />
          <path d="M1.5 6.5H4.5V18.5H1.5V6.5Z" fill="#7E5FFF" />
          <path
            d="M7.5 6.5H10.5V7.75C11.25 6.75 12.5 6 14.5 6C17.5 6 18.5 8 18.5 11V18.5H15.5V11.5C15.5 9.5 14.5 9 13.5 9C12 9 10.5 10 10.5 12V18.5H7.5V6.5Z"
            fill="#7E5FFF"
          />
        </svg>
      </a>
    </div>
  );
}

export default FooterSocialIcons;
