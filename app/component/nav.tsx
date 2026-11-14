"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Blog", href: "#blog" },
  { name: "Update", href: "#update" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Careers", href: "#careers" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 sm:px-8">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
          <Image
            src="/logo.svg"
            alt="Fluxbase Logo"
            width={128}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-white text-base font-medium transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Contact Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition-all duration-200 hover:bg-white/90 hover:shadow active:scale-95"
          >
            Contact
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

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pt-2 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/90 hover:text-white text-base font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block rounded-full bg-white px-6 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition-all duration-200 hover:bg-white/90"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
