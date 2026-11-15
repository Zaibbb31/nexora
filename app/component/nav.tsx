"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import RollingText from "./rolling-text";
import GlassSurface from "./GlassSurface";

const navLinks = [
  { name: "Blog", href: "#blog" },
  { name: "Update", href: "#update" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Careers", href: "#careers" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 30) {
        setIsScrolled(true);
      } else if (scrollY < 15) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 flex flex-col items-center pointer-events-none px-4 sm:px-6 md:px-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? "pt-3 sm:pt-4 md:pt-5" : "pt-0"
        }`}
      >
        {/* Navbar Pill (Full-width and transparent at top, smoothly transforms into a floating rounded pill on scroll) */}
        <div
          className={`pointer-events-auto relative w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? "max-w-5xl px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-white/20 bg-neutral-950/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.2),inset_0_1px_1px_0_rgba(255,255,255,0.25)]"
              : "max-w-7xl px-6 sm:px-8 py-4 rounded-full border border-transparent bg-transparent shadow-none"
          }`}
        >
          {/* GlassSurface layer with reduced blur so glassmorphic refraction and displacement remain sharply visible */}
          <div
            className={`absolute inset-0 -z-10 overflow-hidden pointer-events-none rounded-full transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
          >
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
            {/* Left: Brand Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Fluxbase Logo"
                width={128}
                height={40}
                className="h-7 sm:h-8 w-auto object-contain"
                priority
              />
            </Link>

            {/* Center: Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group text-white/90 hover:text-white text-[15px] font-medium transition-colors duration-200"
                >
                  <RollingText text={link.name} />
                </Link>
              ))}
            </nav>

            {/* Right: Contact Button (Desktop) */}
            <div className="hidden md:flex items-center">
              <Link
                href="#contact"
                className="group rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition-all duration-200 hover:bg-white/90"
              >
                <RollingText text="Contact" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 text-white hover:text-white/80 focus:outline-none"
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
          <div
            className={`pointer-events-auto w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled ? "max-w-5xl" : "max-w-7xl"
            }`}
          >
            <div className="mt-2 w-full rounded-3xl bg-neutral-950/75 backdrop-blur-2xl border border-white/15 px-6 py-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group text-white/90 hover:text-white text-base font-medium transition-colors"
                  >
                    <RollingText text={link.name} />
                  </Link>
                ))}
              </nav>
              <div className="pt-2 border-t border-white/10">
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group inline-block w-full text-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm transition-all duration-200 hover:bg-white/90"
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
