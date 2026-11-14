import Navbar from "./component/nav";
import Link from "next/link";

const shootingStars = [
  { top: "12%", left: "44%", length: "190px", duration: "6s", delay: "0.4s" },
  { top: "48%", left: "4%", length: "230px", duration: "7.5s", delay: "3.2s" },
  { top: "20%", left: "66%", length: "160px", duration: "6.8s", delay: "5.5s" },
  { top: "8%", left: "16%", length: "180px", duration: "8s", delay: "2s" },
];

const pinpointStars = [
  { top: "12%", left: "47%", size: 1.5, delay: "0s", duration: "4s" },
  { top: "17%", left: "76%", size: 1, delay: "1.2s", duration: "5s" },
  { top: "28%", left: "64%", size: 1.5, delay: "2.4s", duration: "4.5s" },
  { top: "35%", left: "69%", size: 1, delay: "0.8s", duration: "6s" },
  { top: "42%", left: "66%", size: 1.5, delay: "1.9s", duration: "4s" },
  { top: "46%", left: "89%", size: 1, delay: "3.1s", duration: "5.5s" },
  { top: "44%", left: "4%", size: 1, delay: "1.5s", duration: "4.2s" },
  { top: "22%", left: "26%", size: 1.5, delay: "2.2s", duration: "5.8s" },
  { top: "7%", left: "30%", size: 1, delay: "0.5s", duration: "4.8s" },
  { top: "15%", left: "88%", size: 1.5, delay: "2.8s", duration: "5.2s" },
  { top: "32%", left: "18%", size: 1, delay: "3.5s", duration: "6.2s" },
  { top: "52%", left: "36%", size: 1, delay: "1.7s", duration: "4.6s" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#02050f] font-sans text-white select-none">
      {/* CSS Keyframes for Ultra-Minimal Shooting Stars & Pinpoint Night Sky */}
      <style>{`
        @keyframes minimalShoot {
          0% {
            transform: rotate(28deg) translateX(0) scaleX(0);
            opacity: 0;
          }
          12% {
            transform: rotate(28deg) translateX(45px) scaleX(1);
            opacity: 0.95;
          }
          65% {
            transform: rotate(28deg) translateX(240px) scaleX(1);
            opacity: 0.85;
          }
          88% {
            transform: rotate(28deg) translateX(360px) scaleX(0.4);
            opacity: 0;
          }
          100% {
            transform: rotate(28deg) translateX(390px) scaleX(0);
            opacity: 0;
          }
        }

        @keyframes subtleTwinkle {
          0%, 100% {
            opacity: 0.25;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.85;
            transform: scale(1.15);
          }
        }

        .minimal-shooting-star {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 30%, rgba(255, 255, 255, 0.6) 80%, rgba(255, 255, 255, 0.95) 100%);
          transform-origin: left center;
          animation-name: minimalShoot;
          animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
          animation-iteration-count: infinite;
          pointer-events: none;
          opacity: 0;
        }

        .minimal-shooting-star .star-head {
          position: absolute;
          right: 0;
          top: -0.5px;
          width: 2px;
          height: 2px;
          background-color: #ffffff;
          border-radius: 9999px;
          box-shadow: 0 0 3px 0.5px rgba(255, 255, 255, 0.9);
        }

        .pinpoint-star {
          position: absolute;
          background-color: #ffffff;
          border-radius: 9999px;
          animation-name: subtleTwinkle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          pointer-events: none;
        }
      `}</style>

      {/* Atmospheric Twilight Sunset Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep night sky transitioning to dusk sunset blue */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02040a] via-[#050c1e] to-[#0a1838]" />

        {/* Sunset afterglow horizon radial glow */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 50% 90%, rgba(29, 78, 216, 0.35) 0%, rgba(67, 56, 202, 0.2) 35%, rgba(112, 26, 117, 0.1) 60%, transparent 85%)",
          }}
        />

        {/* Subtle upper starlight ambient vignette */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.12) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Pinpoint Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {pinpointStars.map((star, i) => (
          <span
            key={`pinpoint-${i}`}
            className="pinpoint-star"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: star.duration,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Minimal Falling Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {shootingStars.map((star, i) => (
          <span
            key={`shooting-${i}`}
            className="minimal-shooting-star"
            style={{
              top: star.top,
              left: star.left,
              width: star.length,
              animationDuration: star.duration,
              animationDelay: star.delay,
            }}
          >
            <span className="star-head" />
          </span>
        ))}
      </div>

      {/* Navbar at top (without any background) */}
      <div className="relative z-30">
        <Navbar />
      </div>


      {/* Hero Section Content */}
      <main className="relative z-20 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6 pb-28 pt-8 text-center sm:px-8">
        {/* Announcement Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-950/40 px-4 py-1.5 text-xs sm:text-sm font-medium text-sky-200 backdrop-blur-md shadow-inner transition-all hover:border-sky-400/40 hover:bg-sky-900/40">
          <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
          <span>Next-Generation Cloud Infrastructure</span>
          <span className="text-sky-400">→</span>
        </div>

        {/* Main Headline */}
        <h1 className="mt-8 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-7xl">
          <span className="block text-white drop-shadow-sm">Architect Your Future</span>
          <span className="mt-2 block bg-gradient-to-r from-sky-200 via-blue-100 to-indigo-300 bg-clip-text text-transparent">
            Under Infinite Skies
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-sky-100/75 leading-relaxed font-normal">
          Harness lightning-fast scalability, seamless workflows, and automated intelligence.
          Engineered for visionary teams building beyond the horizon.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="#get-started"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-neutral-900 shadow-lg shadow-white/10 transition-all duration-200 hover:bg-sky-50 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <span>Start Building Free</span>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          <Link
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/10 hover:border-white/30 active:scale-95"
          >
            <svg
              className="h-4 w-4 text-sky-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Watch Overview</span>
          </Link>
        </div>

        {/* Trust Metric Badges */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 max-w-2xl w-full pt-6 border-t border-white/10">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">99.99%</span>
            <span className="text-xs sm:text-sm text-sky-200/60 mt-1">Uptime Reliability</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">&lt;10ms</span>
            <span className="text-xs sm:text-sm text-sky-200/60 mt-1">Global Latency</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">50M+</span>
            <span className="text-xs sm:text-sm text-sky-200/60 mt-1">Daily Requests</span>
          </div>
        </div>
      </main>
    </div>
  );
}
