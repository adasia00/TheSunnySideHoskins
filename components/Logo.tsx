"use client";

import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-12 h-12" }: LogoProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <svg
      viewBox="0 0 500 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="white-handshake" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0" />
        </filter>
      </defs>
      {/* Mountain silhouette behind handshake */}
      <path
        d="M100 160l50-80l35 52l35-62l35 72l50-93v113H100V160z"
        fill="#BF953F"
        opacity="0.3"
      />
      {/* Handshake image - much larger, white, and centered */}
      <image
        x="110"
        y="10"
        width="280"
        height="140"
        href={`${basePath}/images/business-handshake-transparent.png`}
        filter="url(#white-handshake)"
        style={{ display: "block", margin: "0 auto" }}
      />
      {/* The Sunny-Side text underneath */}
      <text
        x="250"
        y="190"
        fontFamily="serif"
        fontSize="36"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        The Sunny-Side
      </text>
    </svg>
  );
}