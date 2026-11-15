"use client";

import Image from "next/image";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/#privacy" },
      { label: "Terms of service", href: "/#terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFA] pt-30 pb-10 px-6 sm:px-8 select-none">
      <div className="max-w-6xl mx-auto flex flex-col justify-between min-h-[260px]">
        {/* Top Section: Logo on Left, Navigation Columns on Right */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 md:gap-16">
          {/* Left: Starburst Logo with revolve on hover */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="group inline-flex items-center justify-center p-1 rounded-xl"
              aria-label="Fluxbase Home"
            >
              <Image
                src="/onlylogo.svg"
                alt="Fluxbase Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain drop-shadow-[0_2px_8px_rgba(0,102,255,0.18)] transition-transform duration-700 ease-in-out group-hover:rotate-[360deg] group-hover:scale-110"
                priority
              />
            </Link>
          </div>

          {/* Right: 3 Link Columns (Product, Company, Legal) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16 md:gap-20 lg:gap-24">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col">
                <h3 className="text-[15px] font-semibold text-neutral-900 tracking-tight mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200 font-normal"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Copyright on Left, Social Icons on Right */}
        <div className="mt-16 sm:mt-24 pt-8 flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-neutral-100/60">
          {/* Copyright notice */}
          <div className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal">
            <p>Copyright © 2025 Fluxbase.</p>
            <p>All rights reserved.</p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 sm:gap-5 text-neutral-500">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-neutral-900 transition-colors duration-200"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-neutral-900 transition-colors duration-200"
            >
              <svg
                className="w-[18px] h-[18px] fill-none stroke-current"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-neutral-900 transition-colors duration-200"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.95-4.52V8.92a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.95-.35z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-neutral-900 transition-colors duration-200"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* X (formerly Twitter) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:text-neutral-900 transition-colors duration-200"
            >
              <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
