"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do you take insurance?",
    answer: "Answer goes here.",
  },
  {
    question: "What are your rates?",
    answer: "Answer goes here.",
  },
  {
    question: "Do you have any openings?",
    answer: "Answer goes here.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FDF8F3] font-sans py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-20 items-start">
          {/* Left Section - Image */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end order-1 lg:order-1">
            <div className="relative w-full max-w-60 sm:max-w-70 md:max-w-[320px] lg:max-w-sm xl:max-w-md aspect-3/4 rounded-t-[120px] sm:rounded-t-[160px] lg:rounded-t-[180px] xl:rounded-t-[210px] overflow-hidden bg-[#E8E2DE]">
              <Image
                src="/flowers2.png"
                alt="Decorative dried flowers"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 24rem, 28rem"
              />
            </div>
          </div>

          {/* Right Section - FAQ Content */}
          <div className="w-full lg:w-7/12 flex flex-col pt-0 lg:pt-24 order-2 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#3d4a3d] mb-10 sm:mb-12 lg:mb-14 tracking-tight text-center lg:text-left">
              FAQs
            </h2>

            <div className="flex flex-col">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="border-t border-[#3d4a3d]/30 last:border-b"
                  >
                    <button
                      onClick={() => handleToggle(index)}
                      className="w-full flex items-center gap-4 sm:gap-6 lg:gap-8 py-5 sm:py-6 lg:py-7 text-left group outline-none cursor-pointer"
                    >
                      {/* Icon */}
                      <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shrink-0">
                        <span className="absolute w-5 sm:w-6 h-[1.5px] bg-[#3d4a3d]" />
                        <motion.span
                          className="absolute w-5 sm:w-6 h-[1.5px] bg-[#3d4a3d]"
                          initial={{ rotate: 90 }}
                          animate={{ rotate: isOpen ? 0 : 90 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      </div>

                      <span className="text-lg sm:text-xl lg:text-2xl xl:text-[28px] font-bold text-[#3d4a3d] tracking-tight leading-snug">
                        {item.question}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                            opacity: { duration: 0.25 },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 sm:pb-8 pl-9 sm:pl-12 lg:pl-14 text-[#3d4a3d] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
