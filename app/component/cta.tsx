"use client";

import Link from "next/link";
import Antigravity from "./Antigravity";

interface CtaProps {
  badgeNumber?: string;
  badgeLabel?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  caption?: string;
}

export default function CTA({
  badgeNumber = "03",
  badgeLabel = "GET STARTED TODAY",
  title = "Build without limits.",
  description = "The complete serverless data platform for modern teams. Free to start, infinitely scalable.",
  buttonText = "Start for free",
  buttonHref = "#get-started",
  caption = "NO CREDIT CARD REQUIRED · SOC 2 COMPLIANT · 99.99% UPTIME SLA",
}: CtaProps) {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 sm:py-8 px-6 sm:px-8 select-none">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full rounded-3xl sm:rounded-[36px] overflow-hidden min-h-[460px] sm:min-h-[450px] flex flex-col items-center justify-center p-8 sm:p-14 md:p-16">
          {/* Blue background gradient with radiant diagonal light beam */}
          <div className="absolute inset-0 bg-[#0062FF] bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.45)_0%,rgba(56,189,248,0.25)_35%,transparent_65%)]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0050e6] via-[#0066FF] to-[#0084FF] opacity-90" />

          {/* Glowing diagonal light beam streak on the right side */}
          <div className="absolute -top-32 -right-12 w-[460px] h-[720px] bg-gradient-to-b from-white/45 via-white/20 to-transparent rotate-[-32deg] pointer-events-none blur-2xl opacity-80" />

          {/* Antigravity WebGL Canvas Background */}
          <div className="absolute inset-0 z-0">
            <Antigravity
              colors={["#5227FF", "#ffffff", "#fcfcfc"]}
              count={1500}
              magnetRadius={9}
              ringRadius={7}
              particleSize={0.9}
              autoAnimate
              colorMode="conic"
              colorSpeed={0.05}
              particleShape="capsule"
              particleVariance={1}
              fieldStrength={10}
              waveAmplitude={1}
              waveCount={3}
              waveSpeed={0.4}
              rotationSpeed={0}
              pulseSpeed={3}
              depthFactor={1}
              ambient={0.25}
              lerpSpeed={0.05}
              interactive
              clickBurst
              intro
              lightMode={false}
            />
          </div>

          {/* Foreground CTA Content */}
          <div className="relative z-10 flex flex-col items-center text-center pointer-events-none max-w-2xl">
            {/* Frosted Glass Badge: 03 — GET STARTED TODAY */}
            <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-regular tracking-wider text-white uppercase bg-white/10 backdrop-blur-md pointer-events-auto">
              <span>{badgeNumber}</span>
              <span className="text-white/50">—</span>
              <span>{badgeLabel}</span>
            </div>

            {/* Main Heading */}
            <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.08] pointer-events-auto">
              {title}
            </h2>

            {/* Subtitle Description */}
            <p className="mt-5 max-w-xl text-base sm:text-lg text-white/90 leading-relaxed font-normal pointer-events-auto">
              {description}
            </p>

            {/* CTA Button */}
            <div className="mt-8 pointer-events-auto">
              <Link
                href={buttonHref}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm sm:text-base font-semibold text-neutral-900 transition-all duration-200"
              >
                <span>{buttonText}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Sub-caption disclaimer */}
            <p className="mt-8 text-[11px] sm:text-xs font-regular tracking-widest text-white/75 uppercase pointer-events-auto">
              {caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
