"use client";

import { useState } from "react";
import RollingText from "./rolling-text";

export interface FaqItem {
  question: string;
  answer: string;
}

export const defaultFaqData: FaqItem[] = [
  {
    question: "Do I need to manage servers?",
    answer: "No. Everything is fully managed, including scaling, updates, and maintenance.",
  },
  {
    question: "How does it work globally?",
    answer: "Data is automatically replicated across edge regions with sub-millisecond local reads and active routing.",
  },
  {
    question: "Can I scale easily?",
    answer: "Yes. The platform scales dynamically with your workload from zero to millions of operations effortlessly.",
  },
  {
    question: "How does pricing work?",
    answer: "You only pay for what you use per request, per GB, and per operation without upfront commitments.",
  },
  {
    question: "Is it production ready?",
    answer: "Yes, built for mission-critical applications with 99.99% uptime SLAs and automatic failover protection.",
  },
];

interface FaqProps {
  items?: FaqItem[];
  badgeNumber?: string;
  badgeLabel?: string;
  titleLine1?: string;
  titleLine2?: string;
}

export default function FAQ({
  items = defaultFaqData,
  badgeNumber = "05",
  badgeLabel = "FAQ",
  titleLine1 = "Frequently",
  titleLine2 = "asked questions.",
}: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-[#FAFAFA] pb-28 pt-8 sm:pb-36 sm:pt-14 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Badge & Heading (non-sticky) */}
          <div className="flex flex-col items-start lg:col-span-5">
            {/* Top Badge: 05 — FAQ */}
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100/70 px-6 py-2 text-xs font-semibold tracking-wider text-neutral-600 uppercase">
              <span>{badgeNumber}</span>
              <span className="text-neutral-400">—</span>
              <span>{badgeLabel}</span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-neutral-900 leading-[1.08]">
              {titleLine1}
              <br />
              {titleLine2}
            </h2>
          </div>

          {/* Right Column: Accordion Items Stack */}
          <div className="lg:col-span-7 space-y-4">
            {items.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  onClick={() => toggleFaq(index)}
                  className="group rounded-2xl bg-[#FFFFFF] p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-neutral-100/90 transition-all duration-300 hover:shadow-md cursor-pointer select-none"
                >
                  {/* Top Row: Question + Blue Circular Button */}
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base sm:text-lg md:text-[19px] font-medium text-neutral-900 leading-snug">
                      <RollingText text={faq.question} />
                    </h3>

                    {/* Circular Blue Icon Button */}
                    <div className="w-8 h-8 rounded-full bg-[#0066FF] flex items-center justify-center text-white flex-shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-105">
                      {isOpen ? (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Accordion Content with Blue Divider Line */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-4 pt-3.5"
                        : "grid-rows-[0fr] opacity-0 mt-0 pt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {/* Blue Divider Line with Gradient (Blue on left to 0 opacity on right) */}
                      <div className="w-full h-[2px] bg-gradient-to-r from-[#0066FF] to-transparent mb-4 rounded-full" />

                      {/* Answer Text */}
                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
