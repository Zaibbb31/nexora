"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../component/nav";
import Footer from "../component/footer";
import GradientASCII from "../component/GradientASCII";
import CTA from "../component/cta";

const categories = [
  "All",
  "Pricing & Cost",
  "Architecture",
  "Infrastructure",
  "Performance",
  "Scaling",
  "Developer Experience",
];

interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  imageType: "gear" | "image";
  imageSrc?: string;
  imageAlt?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "end-of-server-management",
    title: "The End of Server Management:\nA New Era of Infrastructure",
    date: "Mar 28, 2026",
    category: "Infrastructure",
    imageType: "gear",
  },
  {
    id: "why-performance-matters",
    title: "Why Performance Matters More\nThan Ever in Modern Applications",
    date: "Mar 20, 2026",
    category: "Performance",
    imageType: "image",
    imageSrc: "/graffiti/2.png",
    imageAlt: "Performance Lightning",
  },
  {
    id: "zero-downtime-deployments",
    title: "Architecting for Zero-Downtime\nGlobal Edge Deployments",
    date: "Mar 15, 2026",
    category: "Architecture",
    imageType: "image",
    imageSrc: "/graffiti/4.png",
    imageAlt: "Global Edge Knot",
  },
  {
    id: "usage-based-pricing-guide",
    title: "Usage-Based Pricing:\nAligning Cost Directly With Scale",
    date: "Mar 10, 2026",
    category: "Pricing & Cost",
    imageType: "image",
    imageSrc: "/graffiti/1.png",
    imageAlt: "Pricing Coin",
  },
  {
    id: "scaling-modern-queues",
    title: "Horizontal Autoscaling Without\nthe Operational Overhead",
    date: "Mar 04, 2026",
    category: "Scaling",
    imageType: "image",
    imageSrc: "/graffiti/3.png",
    imageAlt: "Serverless Infinity",
  },
  {
    id: "designing-developer-first-apis",
    title: "Designing Modern APIs for the\nUltimate Developer Experience",
    date: "Feb 26, 2026",
    category: "Developer Experience",
    imageType: "image",
    imageSrc: "/graffiti/2.png",
    imageAlt: "Developer Experience Lightning",
  },
];

function GearGraphic() {
  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center select-none">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-[0_20px_35px_rgba(236,72,153,0.35)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gearFront" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F472B6" />
            <stop offset="45%" stopColor="#EC4899" />
            <stop offset="85%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
          <linearGradient id="gearDepth" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="holeDepth" x1="60" y1="60" x2="140" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0B132B" />
          </linearGradient>
        </defs>
        {/* 3D Extrusion Side Layer */}
        <path
          d="M106 32h-12l-3 12-10 4-11-7-8 8 7 11-4 10-12 3v12l12 3 4 10-7 11 8 8 11-7 10 4 3 12h12l3-12 10-4 11 7 8-8-7-11 4-10 12-3V93l-12-3-4-10 7-11-8-8-11 7-10-4-3-12zm-6 40a28 28 0 110 56 28 28 0 010-56z"
          fill="url(#gearDepth)"
          transform="translate(4, 9)"
        />
        {/* Front Gear Face */}
        <path
          d="M106 32h-12l-3 12-10 4-11-7-8 8 7 11-4 10-12 3v12l12 3 4 10-7 11 8 8 11-7 10 4 3 12h12l3-12 10-4 11 7 8-8-7-11 4-10 12-3V93l-12-3-4-10 7-11-8-8-11 7-10-4-3-12zm-6 40a28 28 0 110 56 28 28 0 010-56z"
          fill="url(#gearFront)"
        />
        {/* Inner Hole */}
        <circle cx="100" cy="100" r="28" fill="url(#holeDepth)" />
        {/* Inner cyan accent ring */}
        <circle cx="100" cy="100" r="28" stroke="#38BDF8" strokeWidth="2.5" opacity="0.75" />
      </svg>
    </div>
  );
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="w-full font-sans select-none bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#FAFAFA] text-white">
        {/* Interactive Gradient ASCII Background Effect */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <GradientASCII
            colors={["#10b981", "#ffffff", "#beffea", "#47d8a9"]}
            shape="horizon"
            characters=" =+xX0S8#@"
            cellSize={18}
            density={0.8}
            glyphOpacity={0.85}
            glow={0.2}
            depthOfField={0}
            flicker={0.2}
            softness={0.5}
            scale={1}
            flow={0.5}
            speed={1}
            gradientOpacity={0.9}
            grain={0.08}
            variation={0}
            mouseInteraction
            scrambleRadius={0.1}
            clickEffect="wave"
            intro
            lightMode={false}
          />
        </div>

        {/* Navbar at top */}
        <div className="relative z-30">
          <Navbar />
        </div>

        {/* Hero Section Content */}
        <main className="relative z-20 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6 pb-28 pt-8 text-center sm:px-8 pointer-events-none">
          {/* Main Headline */}
          <h1 className="mt-8 max-w-4xl text-5xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] pointer-events-auto">
            Latest insights
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-normal pointer-events-auto">
            Explore ideas, strategies, and best practices for building fast and scalable systems.
          </p>
        </main>
      </section>

      {/* Blog Posts Section */}
      <section className="w-full bg-[#FAFAFA] py-20 sm:py-28 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter Pills */}
          <div className="mb-10 sm:mb-12">
            <span className="block text-xs sm:text-sm font-medium text-neutral-500 mb-3">
              Categories
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#0066FF] text-white"
                      : "bg-[#F4F4F5] text-neutral-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Cards Grid (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group flex flex-col cursor-pointer">
                {/* Top Image Box: Deep Black Container with Stars and 3D Visual */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[24px] sm:rounded-3xl bg-[#080808] overflow-hidden flex items-center justify-center border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                  {/* Starry space pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

                  {/* 3D Visual Graphic */}
                  <div className="relative z-10 transition-transform duration-500 group-hover:scale-105">
                    {post.imageType === "gear" ? (
                      <GearGraphic />
                    ) : (
                      <div className="w-48 h-48 sm:w-56 sm:h-56 relative flex items-center justify-center">
                        <Image
                          src={post.imageSrc!}
                          alt={post.imageAlt || post.title}
                          width={260}
                          height={260}
                          className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] pointer-events-none"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Content Box: Rounded Grey Card */}
                <div className="mt-4 rounded-[24px] sm:rounded-3xl bg-[#F4F4F5] p-7 sm:p-8 flex flex-col justify-between flex-grow min-h-[170px] sm:min-h-[190px] transition-colors duration-200">
                  {/* Blog Title */}
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 leading-snug whitespace-pre-line">
                    {post.title}
                  </h3>

                  {/* Bottom Meta: Date & Category Pill */}
                  <div className="mt-6 flex flex-col items-start gap-3">
                    <span className="text-sm text-neutral-500 font-normal">
                      {post.date}
                    </span>
                    <span className="inline-flex items-center px-4 py-2 rounded-lg bg-[#0066FF] text-white text-xs font-regular">
                      {post.category}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center text-neutral-500">
              No articles found in this category.
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
