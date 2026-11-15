"use client";

import Image from "next/image";
import Navbar from "../component/nav";
import Footer from "../component/footer";
import GradientASCII from "../component/GradientASCII";
import CTA from "../component/cta";

const impactStats = [
  {
    metric: "98+",
    label: "Uptime",
    description: "Reliable infrastructure with consistent performance",
  },
  {
    metric: "2.5x",
    label: "Latency",
    description: "Consistently low latency across global regions",
  },
  {
    metric: "10%",
    label: "Efficiency",
    description: "Reduced costs with optimized resource usage",
  },
  {
    metric: "80k+",
    label: "Developers",
    description: "Trusted by teams building modern applications",
  },
];

const teamMembers = [
  {
    name: "Alex Reed",
    glow: "bg-pink-300",
    image: "", // Add image path later (e.g. "/team/alex.jpg")
  },
  {
    name: "Emma Carter",
    glow: "bg-amber-300",
    image: "", // Add image path later (e.g. "/team/emma.jpg")
  },
  {
    name: "Liam Turner",
    glow: "bg-sky-300",
    image: "", // Add image path later (e.g. "/team/liam.jpg")
  },
];

export default function AboutPage() {
  return (
    <div className="w-full font-sans select-none">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#FAFAFA] text-white">
        {/* Interactive Gradient ASCII Background Effect */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <GradientASCII
            colors={["#7c3aed", "#ffffff", "#dfb6ff", "#dfb9ff"]}
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
            Who We Are
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-normal pointer-events-auto">
            We&apos;re a team focused on building fast, thoughtful, and scalable digital experiences.
          </p>
        </main>
      </section>

      {/* Our Mission Section */}
      <section className="w-full bg-[#FAFAFA] py-24 sm:py-32 px-6 sm:px-8 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl md:text-[54px] font-medium tracking-tight text-neutral-900 leading-[1.1]">
              Our Mission.
            </h2>
          </div>

          {/* Right Column: 3 Paragraphs with bold phrases matching design */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-base sm:text-lg md:text-[16px] text-neutral-500 font-normal ">
            <p>
              We believe building modern applications should be simple,{" "}
              <strong className="font-semibold text-neutral-900">
                fast, and accessible to everyone.
              </strong>{" "}
              Our goal is to remove the complexity of infrastructure so teams can focus
              on creating meaningful products instead of managing systems.
            </p>
            <p>
              By combining performance, scalability, and ease of use, we provide a
              platform that adapts to your needs as you grow. From early stage projects
              to large scale applications, everything is{" "}
              <strong className="font-semibold text-neutral-900">
                designed to work seamlessly without added friction.
              </strong>
            </p>
            <p>
              We are committed to helping teams move faster,{" "}
              <strong className="font-semibold text-neutral-900">
                build better, and scale with confidence.
              </strong>{" "}
              Because great ideas deserve the right tools to grow without limits.
            </p>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="w-full bg-[#FAFAFA] py-20 sm:py-8 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Pill Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-full bg-white px-5 py-2 text-xs sm:text-sm font-medium text-neutral-600">
              Our Impact
            </div>
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-center text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-tight">
            Real results for modern teams.
          </h2>

          {/* 4 Impact Stat Cards */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl bg-[#FFFFFF] p-7 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[230px]"
              >
                <span className="text-4xl sm:text-5xl font-normal tracking-tight text-neutral-900">
                  {stat.metric}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-neutral-900">
                    {stat.label}
                  </h3>
                  <p className="mt-1.5 text-sm text-neutral-500 font-normal leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full bg-[#FAFAFA] pb-24 sm:pb-32 pt-8 sm:pt-28 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Pill Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-full bg-white px-5 py-2 text-xs sm:text-sm font-medium text-neutral-600">
              Our team
            </div>
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-center text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-tight">
            The people behind the product.
          </h2>

          {/* 3 Team Cards */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative rounded-3xl sm:rounded-[32px] overflow-hidden bg-[#F3F4F6] h-[380px] sm:h-[420px] flex flex-col justify-end p-6 sm:p-7"
              >
                {/* Soft colored aura glow in center/top */}
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 rounded-full blur-3xl opacity-60 pointer-events-none ${member.glow}`}
                />

                {/* Subtle cloud silhouette backdrop */}
                <div className="absolute inset-x-0 bottom-12 top-0 flex items-center justify-center pointer-events-none opacity-40">
                  <svg
                    className="w-full h-36 text-neutral-300/80"
                    viewBox="0 0 400 200"
                    fill="currentColor"
                  >
                    <path d="M50 180 Q100 120 160 160 T280 140 T380 170 L400 200 L0 200 Z" />
                  </svg>
                </div>

                {/* Team member photo placeholder or image */}
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-center z-10 transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-x-0 bottom-16 top-10 z-10 flex items-center justify-center">
                    {/* Modern Avatar Silhouette Placeholder (user can easily add images in teamMembers array) */}
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white/75 border-2 border-white/90 shadow-[0_12px_24px_rgba(0,0,0,0.06)] backdrop-blur-sm flex items-center justify-center text-neutral-400 group-hover:scale-105 transition-transform duration-300">
                      <svg
                        className="w-16 h-16 sm:w-20 sm:h-20 text-neutral-400/80"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Team member name at bottom-left */}
                <div className="relative z-20">
                  <h3 className="text-lg sm:text-xl font-medium text-neutral-900 tracking-tight">
                    {member.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
