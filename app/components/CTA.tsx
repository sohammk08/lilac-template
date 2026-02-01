"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function CTA() {
  return (
    <section className="bg-[#797941] font-sans py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
        <motion.h2
          className="text-4xl lg:text-5xl font-medium text-[#FDF8F3] mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          Get started today.
        </motion.h2>

        <motion.p
          className="text-[#FDF8F3] text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          Ready to take the first step towards a happier, healthier you? Contact
          me to book your first session. I look forward to starting this
          therapeutic journey with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-6 py-2 border border-[#FDF8F3] text-[#FDF8F3] text-sm font-semibold uppercase transition-all duration-300 hover:bg-[#FDF8F3] hover:text-[#8B8B4E]"
          >
            Get In Touch
            <motion.span
              className="text-lg"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
