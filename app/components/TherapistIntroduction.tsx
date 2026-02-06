"use client";
import Link from "next/link";
import { motion } from "framer-motion";

function TherapistIntroduction() {
  return (
    <section className="bg-[#E8E2DE] font-sans py-16 sm:py-20">
      <div className="flex flex-col lg:flex-row justify-between min-h-150 lg:min-h-175 xl:min-h-200 px-6 sm:px-10 lg:px-16 xl:px-20 gap-12 lg:gap-8">
        {/* Left Section - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center font-semibold py-12 sm:py-16 lg:py-20 order-2 lg:order-1">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-medium text-[#3d4a3d] mb-6 sm:mb-8 tracking-tight text-center lg:text-left">
            Hi, I&apos;m Dr. Maya
          </h2>
          <div className="text-[#3d4a3d] text-lg sm:text-xl leading-relaxed mb-10 sm:mb-12 text-center lg:text-left space-y-5">
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
            className="inline-flex mx-auto lg:mx-0 items-center gap-3 px-6 py-3 border border-[#3d4a3d] text-[#3d4a3d] text-sm font-semibold uppercase hover:bg-[#3d4a3d] hover:text-[#E8E2DE] transition-all duration-300 w-fit"
          >
            Let&apos;s Chat
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Right Section - Images */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-start lg:pl-8 xl:pl-12 order-1 lg:order-2">
          {/* Main Image */}
          <div className="relative w-full max-w-70 sm:max-w-[320px] md:max-w-95 lg:max-w-sm xl:max-w-md aspect-3/4 rounded-t-full overflow-hidden">
            <motion.img
              src="/therapistImage.png"
              alt="Lilac holding flowers"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>

          {/* Secondary image */}
          <div className="absolute -bottom-6 right-9 sm:-bottom-8 sm:-right-1 lg:bottom-8 lg:-right-8 xl:right-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden z-10 shadow-lg">
            <motion.img
              src="/flowers.png"
              alt="White flowers"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TherapistIntroduction;
