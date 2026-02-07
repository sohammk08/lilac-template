"use client";
import Link from "next/link";
import { motion } from "framer-motion";

function TherapistIntroduction() {
  return (
    <section className="bg-[#f5f0e6] font-sans py-16 sm:py-20">
      <div className="flex flex-col lg:flex-row justify-center px-6 lg:px-25 gap-12 lg:gap-8">
        {/* Left Section - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center font-semibold py-12 sm:py-16 lg:py-20 order-2 lg:order-1">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-serif font-semibold text-[#0d261e] mb-6 sm:mb-8 tracking-tight">
            Hi, I&apos;m Dr. Maya
          </h2>
          <div className="text-[#0d261e]/90 font-sans text-lg sm:text-xl leading-relaxed mb-10 sm:mb-12 space-y-5">
            <p>
              I&apos;m a licensed psychologist in Santa Monica, California,
              helping adults with anxiety, trauma, and stress. I offer a
              supportive therapy space that combines different approaches to
              address emotional and physical well-being.
            </p>
            <p>
              My goal is to help clients feel safe and in control, especially
              when dealing with trauma. Many of my clients are high-achievers
              who have become exhausted and disconnected. I help them slow down,
              reconnect, and live a more balanced life. I provide both in-person
              and online sessions.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex mx-auto items-center gap-3 px-6 py-3 border border-[#0d261e]/20 text-[#0d261e] text-sm font-semibold uppercase hover:bg-white/80 hover:text-green-800 transition-all duration-300 w-fit"
          >
            Let&apos;s Chat
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Right Section - Images */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center order-1 lg:order-2">
          {/* Main Image */}
          <div className="relative w-full max-w-70 sm:max-w-[320px] md:max-w-95 lg:max-w-sm xl:max-w-md aspect-3/4 rounded-t-full overflow-hidden">
            <motion.img
              src="/therapistImage.png"
              alt="Dr. Maya"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TherapistIntroduction;
