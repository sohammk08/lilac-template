"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="bg-[#FDF8F3] font-sans py-20 lg:py-25">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
          {/* Left Section */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-lg h-170 aspect-3/4 rounded-t-[210px] overflow-hidden bg-[#E8E2DE]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/flowers2.png"
                alt="Decorative dried flowers"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-7/12 flex flex-col pt-30">
            <h2 className="text-4xl lg:text-5xl font-medium text-[#3d4a3d] mb-14 tracking-tight">
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
                      className="w-full flex items-center gap-8 py-7 text-left group outline-none cursor-pointer"
                    >
                      {/* Icon */}
                      <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
                        <span className="absolute w-6 h-[1.5px] bg-[#3d4a3d]" />
                        <motion.span
                          className="absolute w-6 h-[1.5px] bg-[#3d4a3d]"
                          initial={{ rotate: 90 }}
                          animate={{ rotate: isOpen ? 0 : 90 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      </div>

                      <span className="text-2xl lg:text-[28px] font-bold text-[#3d4a3d] tracking-tight leading-snug">
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
                          <div className="pb-8 pl-14 text-[#3d4a3d] text-lg leading-relaxed max-w-xl font-normal">
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
