"use client";
import Link from "next/link";
import { motion } from "framer-motion";

function WorkWithMe() {
  return (
    <section className="bg-[#103a2c] font-sans">
      <div className="flex flex-col lg:flex-row min-h-150 lg:min-h-200">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 relative h-75 lg:h-auto">
          <motion.img
            src="/workwithme.png"
            alt="Work with me illustration"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col text-[#f5f0e6]">
          <div className="flex-1 font-medium px-6 sm:px-10 lg:px-12 xl:px-16 py-10 lg:py-12 flex flex-col justify-center space-y-6 text-base lg:text-lg leading-relaxed">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-tight tracking-tight">
              Know that help is <i>available</i>.
            </h2>

            <div className="text-[#f5f0e6]/90 space-y-3">
              <p>
                If any of these feel familiar, know that change and relief are
                possible:
              </p>

              <ul className="ml-5 sm:ml-8 space-y-2 list-disc">
                <li>
                  Constant worry, overthinking or feeling &quot;on edge&quot;
                </li>
                <li>Trouble sleeping or waking up already tense.</li>
                <li>
                  Physical symptoms of anxiety (tight chest, racing heart,
                  fatigue)
                </li>
                <li>Feeling stuck, numb or disconnected from yourself</li>
                <li>
                  Lingering effects of past trauma or difficult life experiences
                </li>
                <li>
                  Professional burnout, perfectionism, or chronic high-pressure
                </li>
              </ul>

              <p>
                With empathy, structure, and evidence-based tools, we&apos;ll
                work together to help you feel more grounded and present in your
                life.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className={`flex items-center justify-center gap-3 border-t border-[#c4a574]/20 text-white/80 text-sm font-semibold tracking-tighter uppercase transition-all duration-300 hover:bg-white/70 hover:text-green-800 w-full py-5 md:py-4`}
          >
            Work With Me →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WorkWithMe;
