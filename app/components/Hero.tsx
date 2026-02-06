"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="bg-[#0d261e] w-full min-h-screen flex items-center relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 xl:gap-32">
          {/* Image - Arched Shape */}
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] aspect-[3/4] mt-5 rounded-t-[200px] overflow-hidden shrink-0">
            <motion.img
              src="/im1.png"
              alt="Misty forest with moonlit river"
              className="object-cover w-full h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start max-w-xl">
            <h1 className="text-[#f5f0e6] text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-serif font-semibold leading-[1.1] tracking-tight mb-6">
              Find clarity
              <br />
              amidst{" "}
              <span className="relative inline-block">
                the noise
                <motion.svg
                  className="absolute -bottom-1 left-0 w-full h-4 overflow-visible pointer-events-none"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0 5 C20 0 30 10 50 5 C70 0 80 10 100 5"
                    fill="none"
                    stroke="#c4a574"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </motion.svg>
              </span>
            </h1>

            <p className="text-[#f5f0e6]/80 text-lg sm:text-xl font-normal mb-10 font-sans">
              Therapy for Adults in Santa
              <br className="hidden sm:block" /> Monica, CA.
            </p>

            <Link
              href="/contact"
              className="inline-flex mx-auto lg:mx-0 items-center gap-3 px-6 py-3 border border-[#3d4a3d] text-white/70 rounded text-sm font-sans font-semibold uppercase hover:bg-[#3d4a3d] hover:text-[#E8E2DE] transition-all duration-300 w-fit"
            >
              Connect with me
              <span className="text-lg" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
