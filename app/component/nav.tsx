"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import RollingText from "./rolling-text";
import GlassSurface from "./GlassSurface";

const navLinks = [
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/#pricing" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition from black to white when scrolled past the hero section (100vh)
      const threshold = window.innerHeight - 80;
      setIsPastHero(window.scrollY >= threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex flex-col items-center pointer-events-none px-4 sm:px-6 md:px-8 pt-3 sm:pt-4 md:pt-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
        {/* Navbar Pill (Floating glassmorphic pill visible from the start) */}
        <div
          className={`pointer-events-auto relative w-full max-w-5xl px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isPastHero
              ? "border border-white/20 bg-neutral-950/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.2),inset_0_1px_1px_0_rgba(255,255,255,0.25)]"
              : "border border-black/15 bg-black/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.06),inset_0_1px_1px_0_rgba(255,255,255,0.35)]"
          }`}
        >
          {/* GlassSurface layer visible from the very start */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none rounded-full opacity-100">
            <GlassSurface
              width="100%"
              height="100%"
              borderRadius={9999}
              borderWidth={0.08}
              brightness={65}
              opacity={0.96}
              blur={2}
              displace={0.65}
              backgroundOpacity={0.01}
              saturation={1.2}
              distortionScale={-180}
              redOffset={0}
              greenOffset={10}
              blueOffset={20}
              refraction={true}
              renderer="auto"
              className="w-full h-full rounded-full"
            />
          </div>

          <div className="flex items-center justify-between w-full">
            {/* Left: Brand Logo (Black in hero, White after hero) */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Fluxbase Logo"
                width={128}
                height={40}
                className={`h-7 sm:h-8 w-auto object-contain transition-all duration-300 ${
                  isPastHero ? "brightness-100" : "brightness-0"
                }`}
                priority
              />
            </Link>

            {/* Center: Navigation Links (Desktop: Black in hero, White after hero) */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group text-[15px] font-medium transition-colors duration-300 ${
                    isPastHero
                      ? "text-white/90 hover:text-white"
                      : "text-neutral-900 hover:text-black font-semibold"
                  }`}
                >
                  <RollingText text={link.name} />
                </Link>
              ))}
            </nav>

            {/* Right: Contact Button (Desktop: Inverted according to section) */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className={`group rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-all duration-300 ${
                  isPastHero
                    ? "bg-white text-neutral-900 hover:bg-white/90"
                    : "bg-neutral-900 text-white hover:bg-neutral-800"
                }`}
              >
                <RollingText text="Contact" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`inline-flex items-center justify-center p-2 focus:outline-none transition-colors duration-300 ${
                  isPastHero ? "text-white hover:text-white/80" : "text-neutral-900 hover:text-black"
                }`}
                aria-label="Toggle Navigation Menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="pointer-events-auto w-full max-w-5xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <div
              className={`mt-2 w-full rounded-3xl backdrop-blur-2xl px-6 py-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-300 border ${
                isPastHero
                  ? "bg-neutral-950/85 border-white/15"
                  : "bg-white/90 border-neutral-200/80"
              }`}
            >
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`group text-base font-medium transition-colors ${
                      isPastHero
                        ? "text-white/90 hover:text-white"
                        : "text-neutral-900 hover:text-black font-semibold"
                    }`}
                  >
                    <RollingText text={link.name} />
                  </Link>
                ))}
              </nav>
              <div
                className={`pt-2 border-t ${
                  isPastHero ? "border-white/10" : "border-neutral-200/60"
                }`}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`group inline-block w-full text-center rounded-full px-6 py-2.5 text-sm font-semibold shadow-sm transition-all duration-200 ${
                    isPastHero
                      ? "bg-white text-neutral-900 hover:bg-white/90"
                      : "bg-neutral-900 text-white hover:bg-neutral-800"
                  }`}
                >
                  <RollingText text="Contact" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to preserve normal-flow height and prevent layout jumps */}
      <div className="h-16 sm:h-20 w-full pointer-events-none" aria-hidden="true" />
    </>
  );
}
