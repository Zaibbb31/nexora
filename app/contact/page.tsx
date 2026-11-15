"use client";

import { useState } from "react";
import Navbar from "../component/nav";
import Footer from "../component/footer";
import GradientASCII from "../component/GradientASCII";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full font-sans select-none">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#FAFAFA] text-white">
        {/* Interactive Gradient ASCII Background Effect */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <GradientASCII
            colors={["#eab308", "#ffffff", "#ffeec9", "#f9de7c"]}
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
            Let&apos;s Contact
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-normal pointer-events-auto">
            Have a question or project in mind? Reach out and we&apos;ll get back to you shortly.
          </p>
        </main>
      </section>

      {/* Main Content: "We're here to help" + Contact Form */}
      <section className="w-full bg-[#FAFAFA] py-20 sm:py-28 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 flex flex-col items-start pt-2">
            <h2 className="text-4xl sm:text-5xl md:text-[54px] font-medium tracking-tight text-neutral-900 leading-[1.1]">
              We&apos;re here to help.
            </h2>
            <p className="mt-6 max-w-md text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Have questions or need guidance? Send us a message and we&apos;ll respond shortly.
            </p>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7 bg-[#FFFFFF] p-6 sm:p-8 md:p-10 rounded-3xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900">Message sent!</h3>
                <p className="mt-2 text-neutral-600 max-w-md">
                  Thank you for reaching out. A member of our team will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", reason: "", message: "" });
                  }}
                  className="mt-6 rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-neutral-900 mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F4F4F5] rounded-xl px-4 py-3.5 text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] border-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-neutral-900 mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="jane@framer.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F4F4F5] rounded-xl px-4 py-3.5 text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] border-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Reason for contact */}
                <div>
                  <label
                    htmlFor="contact-reason"
                    className="block text-sm font-medium text-neutral-900 mb-2"
                  >
                    Reason for contact
                  </label>
                  <div className="relative">
                    <select
                      id="contact-reason"
                      required
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full bg-[#F4F4F5] rounded-xl px-4 py-3.5 text-sm sm:text-base text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0066FF] border-none appearance-none cursor-pointer transition-all pr-10"
                    >
                      <option value="" disabled>
                        Select...
                      </option>
                      <option value="general">General inquiry</option>
                      <option value="sales">Sales &amp; pricing</option>
                      <option value="support">Technical support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                    {/* Chevron icon */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Row 3: How can we help ? */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-neutral-900 mb-2"
                  >
                    How can we help ?
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell us what you need help with..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F4F4F5] rounded-xl px-4 py-3.5 text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] border-none resize-y transition-all"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-[#0066FF] text-white font-medium py-2.5 rounded-full transition-all duration-200 active:scale-[0.99] cursor-pointer text-base"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
