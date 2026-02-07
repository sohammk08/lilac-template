"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const credentials = [
  {
    title: "Education",
    content: "Doctor of Psychology (PsyD)",
  },
  {
    title: "Licensure",
    content:
      "Licensed Clinical Psychologist (LCP) in California, License #XXXXXX",
  },
  {
    title: "Certifications",
    content:
      "I am EMDR-trained and draw on trauma-focused and somatic-informed approaches, with ongoing training in CBT, mindfulness-based interventions, and attachment/relational therapy.",
  },
];

function ProfBackground() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#103a2c] font-sans py-20 lg:py-20 border-t border-[#c4a574]/20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-[#f5f0e6] text-center mb-8 tracking-tight">
          My Professional Background
        </h2>

        <div className="border-t border-[#c4a574]/20">
          {credentials.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-y border-[#c4a574]/15">
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between py-6 lg:py-4 text-left group outline-none cursor-pointer"
                >
                  <span className="text-xl lg:text-[28px] font-medium text-[#f5f0e6] tracking-tight group-hover:text-[#c4a574] transition-colors duration-300">
                    {item.title}
                  </span>
                  <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
                    <span className="absolute w-6 h-[1.5px] bg-[#c4a574]" />
                    <motion.span
                      className="absolute w-6 h-[1.5px] bg-[#c4a574]"
                      initial={{ rotate: 90 }}
                      animate={{ rotate: isOpen ? 0 : 90 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </div>
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
                      <div className="pb-8 text-[#f5f0e6]/90 text-lg leading-relaxed max-w-3xl font-normal">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProfBackground;
