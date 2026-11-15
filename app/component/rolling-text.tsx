"use client";

import React from "react";

interface RollingTextProps {
  text: string;
  className?: string;
  staggerMs?: number;
  durationMs?: number;
}

export default function RollingText({
  text,
  className = "",
  staggerMs = 25,
}: RollingTextProps) {
  const words = text.split(" ");
  let globalCharIndex = 0;

  return (
    <span
      className={`inline-flex flex-wrap items-baseline select-none ${className}`}
      aria-label={text}
    >
      {words.map((word, wordIndex) => {
        return (
          <span key={wordIndex} className="inline-flex whitespace-nowrap">
            {word.split("").map((char) => {
              const charIndex = globalCharIndex++;
              return (
                <span
                  key={charIndex}
                  className="relative inline-block overflow-hidden h-[1.3em] leading-[1.3em] align-baseline"
                  aria-hidden="true"
                >
                  {/* Primary character: rolls UP and out on hover */}
                  <span
                    className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform"
                    style={{ transitionDelay: `${charIndex * staggerMs}ms` }}
                  >
                    {char}
                  </span>

                  {/* Duplicate character: rolls UP from below into view on hover */}
                  <span
                    className="absolute left-0 top-0 inline-block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 will-change-transform"
                    style={{ transitionDelay: `${charIndex * staggerMs}ms` }}
                  >
                    {char}
                  </span>
                </span>
              );
            })}
            {wordIndex < words.length - 1 && (
              <span className="inline-block w-[0.28em]">&nbsp;</span>
            )}
          </span>
        );
      })}
    </span>
  );
}
