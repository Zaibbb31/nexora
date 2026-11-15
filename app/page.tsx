"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "./component/nav";
import Link from "next/link";
import RollingText from "./component/rolling-text";
import FAQ from "./component/faq";
import Footer from "./component/footer";
import GradientASCII from "./component/GradientASCII";
import CTA from "./component/cta";

// Two sets of 6 logos from public/logos that smoothly crossfade every 3 seconds
const logosGroupA = [
  "/logos/Company%20Name.jpg",
  "/logos/Company%20Name%20(1).jpg",
  "/logos/Company%20Name%20(2).jpg",
  "/logos/Company%20Name%20(3).jpg",
  "/logos/Company%20Name%20(4).jpg",
  "/logos/Company%20Name%20(5).jpg",
];

const logosGroupB = [
  "/logos/Company%20Name%20(6).jpg",
  "/logos/Company%20Name%20(7).jpg",
  "/logos/Company%20Name%20(8).jpg",
  "/logos/Company%20Name%20(9).jpg",
  "/logos/Company%20Name%20(10).jpg",
  "/logos/Company%20Name%20(11).jpg",
];

const products = [
  {
    title: "Redis",
    description:
      "Low-latency key-value store with sub-millisecond response times. Scale globally without ops overhead.",
    tag: "IN- MEMORY CACHE",
    dotColor: "bg-blue-500",
    tagStyle: "bg-blue-50/70 text-neutral-700",
    icon: "/icons/redis.svg",
  },
  {
    title: "Queue",
    description:
      "Durable message queues for async workloads. Guaranteed delivery, dead-letter handling, no servers.",
    tag: "MESSAGE QUEUE",
    dotColor: "bg-emerald-500",
    tagStyle: "bg-emerald-50/70 text-neutral-700",
    icon: "/icons/eIwiMZMt3fWNy9aq5bfOkkyHA.svg",
  },
  {
    title: "Storage",
    description:
      "S3-compatible object storage at the edge. Store, serve, and manage files from a single API.",
    tag: "OBJECT STORAGE",
    dotColor: "bg-emerald-500",
    tagStyle: "bg-emerald-50/70 text-neutral-700",
    icon: "/icons/ddwnHq2lcCIu2tAQr76BZFOL4jY.svg",
  },
  {
    title: "Vector Database",
    description:
      "High-dimensional vector search for AI apps. Semantic retrieval with millisecond query times.",
    tag: "AI / EMBEDDINGS",
    dotColor: "bg-pink-500",
    tagStyle: "bg-pink-50/70 text-neutral-700",
    icon: "/icons/5WmsHx2ATAdOZkJ8B6fSVzcqI0.svg",
  },
  {
    title: "API Platform",
    description:
      "Unified API gateway with rate limiting, auth, and analytics. Ship APIs in minutes, not weeks.",
    tag: "GATEWAY",
    dotColor: "bg-blue-500",
    tagStyle: "bg-blue-50/70 text-neutral-700",
    icon: "/icons/JrMDrxDLU4rBwBGStRw9HNP2UI.svg",
  },
  {
    title: "Edge Computing",
    description:
      "Run logic at the edge, closer to your users. Ultra-low latency across 300+ global locations.",
    tag: "GLOBAL EDGE",
    dotColor: "bg-pink-500",
    tagStyle: "bg-pink-50/70 text-neutral-700",
    icon: "/icons/R2q4HZK53xUuYpaB3ctY9VdjMuc.svg",
  },
];

const whyUsSlides = [
  {
    tab: "Real-time",
    text: "Process and deliver data instantly with ultra low latency and consistent performance.",
  },
  {
    tab: "Zero setup",
    text: "Deploy databases and queues in seconds with automated provisioning and zero maintenance.",
  },
  {
    tab: "Global scale",
    text: "Instantly distribute data globally across edge locations with sub-millisecond local reads.",
  },
  {
    tab: "Infinite throughput",
    text: "Handle millions of concurrent requests seamlessly with autoscaling infrastructure that never bottlenecks.",
  },
];

const featuresData = [
  {
    tag: "SERVERLESS INFRASTRUCTURE",
    tagColor: "text-emerald-500",
    checkColor: "text-emerald-500",
    title: "No servers to manage, ever again, by design.",
    description:
      "Provision with a single API call. Auto-scaling, patching, and backups are handled invisibly in the background. Focus on building your product while we take care of the infrastructure, reliability, and uptime.",
    checklist: [
      "Auto scaling",
      "Built-in redundancy",
      "Zero maintenance",
      "Instant provisioning",
    ],
    graffiti: "/graffiti/3.png",
    graffitiAlt: "Serverless Infinity",
    reverse: false,
  },
  {
    tag: "GLOBAL EDGE NETWORK",
    tagColor: "text-pink-500",
    checkColor: "text-pink-500",
    title: "Data close to every user, everywhere.",
    description:
      "Deploy once, run everywhere. Our global edge network ensures your data is always within milliseconds of your users, delivering fast, consistent performance across regions without extra setup or complexity.",
    checklist: [
      "Ultra-low latency access",
      "Multi-region availability",
      "Built-in failover",
      "Edge optimized routing",
    ],
    graffiti: "/graffiti/4.png",
    graffitiAlt: "Global Edge Knot",
    reverse: true,
  },
  {
    tag: "USAGE BASED PRICING",
    tagColor: "text-blue-500",
    checkColor: "text-blue-500",
    title: "Pricing that scales with you, not against you.",
    description:
      "Start free and grow without limits. Pay only for what you use, per request, per GB, per operation. No upfront commitments, no reserved capacity, and no unexpected costs as you scale.",
    checklist: [
      "No upfront costs",
      "Pay as you go",
      "Transparent usage",
      "Built for scaling teams",
    ],
    graffiti: "/graffiti/1.png",
    graffitiAlt: "Pricing Coin",
    reverse: false,
  },
  {
    tag: "HIGH PERFORMANCE",
    tagColor: "text-amber-500",
    checkColor: "text-amber-500",
    title: "Built for speed at every level.",
    description:
      "Experience consistently fast performance with an architecture designed to minimize latency and maximize efficiency across every request.",
    checklist: [
      "Ultra low latency responses",
      "Optimized data pipelines",
      "High throughput processing",
      "Reliable under heavy load",
    ],
    graffiti: "/graffiti/2.png",
    graffitiAlt: "Performance Lightning",
    reverse: true,
  },
];

function DraggableGraffiti({ src, alt }: { src: string; alt: string }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ startX: 0, startY: 0, posX: 0, posY: 0 });

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      posX: position.x,
      posY: position.y,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.startX;
    const dy = e.clientY - dragStartRef.current.startY;
    const bounds = 110;
    const newX = Math.max(-bounds, Math.min(bounds, dragStartRef.current.posX + dx));
    const newY = Math.max(-bounds, Math.min(bounds, dragStartRef.current.posY + dy));
    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    setPosition({ x: 0, y: 0 });
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className="absolute inset-0 flex items-center justify-center touch-none select-none cursor-grab active:cursor-grabbing z-10"
    >
      <div
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isDragging ? "none" : "transform 0.55s cubic-bezier(0.175, 0.885, 0.32, 1.15)",
        }}
        className="w-44 h-44 sm:w-56 sm:h-56 md:w-60 md:h-60 relative flex items-center justify-center select-none"
      >
        <Image
          src={src}
          alt={alt}
          width={300}
          height={300}
          draggable={false}
          className="w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
          priority
        />
      </div>
    </div>
  );
}

export default function Home() {
  const [activeGroup, setActiveGroup] = useState<0 | 1>(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveGroup((prev) => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % whyUsSlides.length);
    }, 4500);

    return () => clearInterval(slideTimer);
  }, []);

  const handleTabClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className="w-full font-sans select-none">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#030712] text-white">
        {/* Interactive Gradient ASCII Background Effect */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <GradientASCII
            colors={["#0002ff", "#ffffff", "#a5d8ff", "#38bdf8"]}
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
            Global data.
            <br />
            Zero operations.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-normal pointer-events-auto">
            High performance Redis, queues and
            <br className="hidden sm:inline" />
            {" "}storage without infrastructure management.
          </p>

          {/* CTA Button */}
          <div className="mt-8 pointer-events-auto">
            <Link
              href="#get-started"
              className="group inline-flex items-center justify-center rounded-full bg-white px-7 py-2.5 text-sm sm:text-base font-medium text-neutral-900 shadow-sm transition-all duration-200 active:scale-95"
            >
              <RollingText text="Get started" />
            </Link>
          </div>
        </main>
      </section>

    {/* Trusted By Section */}
    <section className="w-full bg-[#FAFAFA] py-20 sm:py-28 px-6 sm:px-8 border-t border-neutral-200/50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-[28px] font-medium tracking-tight text-neutral-900 leading-snug">
          Trusted by modern developers
          <br />
          and engineering teams worldwide.
        </h2>

        {/* Logo Cards Grid */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="group relative h-24 sm:h-28 rounded-2xl bg-[#FFFFFF] flex items-center justify-center px-6 overflow-hidden cursor-pointer"
            >
              {/* Logo 1 (Group A) */}
              <div
                className={`absolute inset-0 flex items-center justify-center p-4 transition-all duration-700 ease-in-out ${
                  activeGroup === 0
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Image
                  src={logosGroupA[index]}
                  alt={`Company logo ${index + 1}`}
                  width={180}
                  height={55}
                  className="h-7 sm:h-[35px] w-auto object-contain max-w-[120px] sm:max-w-[148px]"
                />
              </div>

              {/* Logo 2 (Group B) */}
              <div
                className={`absolute inset-0 flex items-center justify-center p-4 transition-all duration-700 ease-in-out ${
                  activeGroup === 1
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Image
                  src={logosGroupB[index]}
                  alt={`Company logo ${index + 7}`}
                  width={180}
                  height={55}
                  className="h-7 sm:h-[35px] w-auto object-contain max-w-[120px] sm:max-w-[148px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Products Section */}
    <section className="w-full bg-[#FAFAFA] pb-16 pt-8 sm:pb-22 sm:pt-8 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Top Badge: 01 — PRODUCTS */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100/70 px-6 py-2 text-xs font-semibold tracking-wider text-neutral-600 uppercase">
            <span>01</span>
            <span className="text-neutral-400">—</span>
            <span>PRODUCTS</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-center text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-tight">
          Run data at scale, effortlessly.
        </h2>

        {/* 2-Column Product Cards Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="group rounded-3xl bg-[#FFFFFF] p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 cursor-pointer"
            >
              <div>
                {/* Icon & Title */}
                <div className="flex items-center gap-4">
                  <div className="w-[53px] h-[53px] rounded-2xl bg-neutral-100/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center flex-shrink-0 text-neutral-900">
                    <Image
                      src={product.icon}
                      alt={product.title}
                      width={26}
                      height={26}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900">
                    <RollingText text={product.title} />
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-5 text-sm sm:text-base text-neutral-500 font-normal leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Tag with Colored Dot */}
              <div className="mt-7">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-regular tracking-wider ${product.tagStyle}`}
                >
                  <span className={`w-2 h-2 rounded-full ${product.dotColor}`} />
                  <span>{product.tag}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Us Section */}
    <section className="w-full bg-[#FAFAFA] pb-24 sm:pb-32 pt-8 sm:pt-12 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Badge: 02 — WHY US */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100/70 px-6 py-2 text-xs font-semibold tracking-wider text-neutral-600 uppercase">
            <span>02</span>
            <span className="text-neutral-400">—</span>
            <span>WHY US</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-5 text-center text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-tight">
          Built for modern teams.
        </h2>

        {/* 4 Tabs Segmented Bar with Sliding Blue Indicator (Expanded max-w-6xl) */}
        <div className="mt-8 sm:mt-10 w-full max-w-6xl bg-neutral-200/20 rounded-full p-1.5 relative flex items-center">
          {/* Animated Blue Pill Indicator */}
          <div
            className="absolute top-1.5 bottom-1.5 rounded-full bg-[#0066FF] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              width: "calc(25% - 6px)",
              left: `calc(${activeSlide * 25}% + 3px)`,
            }}
          />

          {/* Tab Buttons */}
          {whyUsSlides.map((slide, index) => (
            <button
              key={slide.tab}
              type="button"
              onClick={() => handleTabClick(index)}
              className={`group relative z-10 w-1/4 text-center py-2.5 sm:py-3.5 text-xs sm:text-sm md:text-base font-medium transition-colors duration-300 rounded-full select-none cursor-pointer ${
                activeSlide === index
                  ? "text-white"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <RollingText text={slide.tab} />
            </button>
          ))}
        </div>

        {/* Image Card Container with Inner Frosted Glass Card (Expanded max-w-6xl) */}
        <div className="mt-6 sm:mt-8 w-full max-w-6xl h-[380px] sm:h-[460px] md:h-[520px] lg:h-[560px] rounded-3xl sm:rounded-[36px] overflow-hidden relative border border-neutral-200/50 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.06),0_4px_16px_-2px_rgba(0,0,0,0.04)]">
          {/* Background Image: public/bg.jpg */}
          <Image
            src="/bg.jpg"
            alt="Built for modern teams"
            fill
            sizes="(max-width: 1280px) 100vw, 1152px"
            className="object-cover object-center"
            priority
          />

          {/* Inner Frosted Glass Card (Evenly aligned padding on all sides) */}
          <div className="absolute inset-4 sm:inset-5 md:inset-6 rounded-2xl sm:rounded-[28px] border border-white/25 bg-black/20 backdrop-blur-md overflow-hidden flex items-center justify-center shadow-inner">
            {/* Content Crossfade on the Image Card */}
            {whyUsSlides.map((slide, index) => (
              <div
                key={slide.tab}
                className={`absolute inset-0 flex items-center justify-center px-8 sm:px-14 md:px-20 text-center transition-all duration-700 ease-in-out ${
                  activeSlide === index
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 translate-y-3 pointer-events-none"
                }`}
              >
                <p className="max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-[30px] font-regular tracking-tight text-white leading-[1.25] drop-shadow-md">
                  {slide.text}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom-left subtle image icon badge */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/80 shadow-sm pointer-events-none">
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="w-full bg-[#FAFAFA] pb-28 pt-8 sm:pb-36 sm:pt-12 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Badge: 03 — FEATURES */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100/70 px-6 py-2 text-xs font-semibold tracking-wider text-neutral-600 uppercase">
            <span>03</span>
            <span className="text-neutral-400">—</span>
            <span>FEATURES</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-5 text-center text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-tight">
          Everything you need, simplified.
        </h2>

        {/* 4 Alternating Feature Cards */}
        <div className="mt-14 sm:mt-20 w-full space-y-16 sm:space-y-24 md:space-y-28">
          {featuresData.map((feature) => (
            <div
              key={feature.tag}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
                feature.reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
              }`}
            >
              {/* Text Column */}
              <div className="flex flex-col justify-center">
                {/* Category Tag */}
                <span className={`text-xs sm:text-sm font-regular tracking-wider uppercase ${feature.tagColor}`}>
                  {feature.tag}
                </span>

                {/* Title */}
                <h3 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium tracking-tight text-neutral-900 leading-[1.2]">
                  <RollingText text={feature.title} />
                </h3>

                {/* Description */}
                <p className="mt-4 sm:mt-5 text-sm sm:text-base text-neutral-500 font-normal leading-relaxed max-w-xl">
                  {feature.description}
                </p>

                {/* Checklist with Colored Checkmarks */}
                <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-3.5">
                  {feature.checklist.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-800 text-sm sm:text-base font-normal">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ${feature.checkColor}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Card Column with Draggable Graffiti */}
              <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:max-w-none h-[360px] sm:h-[420px] md:h-[460px] rounded-3xl sm:rounded-[36px] overflow-hidden border border-neutral-200/50 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.06),0_4px_16px_-2px_rgba(0,0,0,0.04)]">
                {/* Background Image: public/bg.jpg */}
                <Image
                  src="/bg.jpg"
                  alt={feature.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover object-center"
                />

                {/* Inner Frosted Glass Card Frame */}
                <div className="absolute inset-4 sm:inset-5 rounded-2xl sm:rounded-[28px] border border-white/25 bg-black/20 backdrop-blur-md overflow-hidden pointer-events-none" />

                {/* Interactive Draggable 3D Graffiti Symbol */}
                <DraggableGraffiti src={feature.graffiti} alt={feature.graffitiAlt} />

               

                {/* Bottom-left subtle image icon badge */}
                <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-20 w-7 h-7 rounded-lg bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/80 shadow-sm pointer-events-none">
                  <svg
                    className="w-3.5 h-3.5 text-white/90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <FAQ />

    {/* CTA Section */}
    <CTA />

    {/* Footer Section */}
    <Footer />
  </div>
);
}
