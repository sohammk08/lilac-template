"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function GetInTouch() {
  return (
    <section className="bg-[#103a2c] font-sans">
      <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[700px]">
        {/* Left section - Content */}
        <div className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1">
          <div className="flex-1 px-6 sm:px-10 lg:px-16 py-12 lg:py-20 flex flex-col justify-center text-left space-y-8 text-[#f5f0e6] text-base sm:text-lg lg:text-xl leading-relaxed">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-tight tracking-tight">
              Gain Clarity,
              <br /> Cultivate Resilience
            </h2>

            <div className="space-y-6 text-[#f5f0e6]/90">
              <p>
                Life can feel relentless at times. Especially when anxiety,
                stress or the echoes of past experiences keep you on edge. You
                may appear high-functioning to the outside world while quietly
                carrying exhaustion, overthinking or physical tension.
              </p>
              <p>
                I&apos;m here to help you move through that. Together we can
                create space for relief, clarity and a more sustainable way of
                living.
              </p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className={`flex items-center justify-center gap-3 border-t border-[#c4a574]/20 text-white/80 text-sm font-semibold tracking-tighter uppercase transition-all duration-300 hover:bg-white/70 hover:text-green-800 w-full py-5 md:py-4`}
          >
            Get In Touch
            <span aria-hidden="true" className="text-lg sm:text-xl">
              →
            </span>
          </Link>
        </div>

        {/* Right section - Image */}
        <div className="w-full lg:w-1/2 relative h-[500px] sm:h-[600px] lg:h-auto order-1 lg:order-2">
          <motion.img
            src="/im2.png"
            alt="Therapeutic calm environment"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0.85 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
