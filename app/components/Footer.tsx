"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <footer className="bg-[#0d261e] font-sans">
      <motion.div
        className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Brand & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#f5f0e6] mb-8 tracking-tight">
              Dr. Maya Reynolds
            </h3>
            <div className="space-y-2 text-[#f5f0e6]/90 text-base sm:text-lg">
              <p>123 Street 45W</p>
              <p>Santa Monica, CA 90401</p>
            </div>
            <div className="mt-6 space-y-2">
              <p>
                <a
                  href="mailto:hello@mayareynolds.com"
                  className="text-[#c4a574] hover:text-[#f5f0e6] transition-colors duration-300 text-base sm:text-lg"
                >
                  hello@mayareynolds.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+13105551234"
                  className="text-[#c4a574] hover:text-[#f5f0e6] transition-colors duration-300 text-base sm:text-lg"
                >
                  (310) 555-1234
                </a>
              </p>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="text-center md:text-left lg:pl-8 xl:pl-12"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#f5f0e6] mb-8 tracking-tight">
              Hours
            </h3>
            <div className="text-[#f5f0e6]/90 text-base sm:text-lg space-y-2">
              <p>Monday – Friday</p>
              <p>10:00 AM – 6:00 PM</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="text-center md:col-span-2 lg:col-span-1 md:text-right"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#f5f0e6] mb-8 tracking-tight">
              Find
            </h3>
            <nav className="flex flex-col space-y-4 items-center md:items-end">
              <Link
                href="/"
                className="text-[#f5f0e6]/90 hover:text-[#c4a574] transition-colors duration-300 text-base sm:text-lg"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="text-[#f5f0e6]/90 hover:text-[#c4a574] transition-colors duration-300 text-base sm:text-lg"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="text-[#f5f0e6]/90 hover:text-[#c4a574] transition-colors duration-300 text-base sm:text-lg"
              >
                Blog
              </Link>
            </nav>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        className="bg-[#0a1e16] py-10 sm:py-8 lg:py-10 border-t border-[#c4a574]/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            className="flex flex-wrap justify-center gap-x-6 sm:gap-x-10 gap-y-3 mb-6 text-[#f5f0e6]/80"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link
              href="/privacy"
              className="hover:text-[#c4a574] transition-colors duration-300 text-sm sm:text-base"
            >
              Privacy & Cookies Policy
            </Link>
            <Link
              href="/good-faith-estimate"
              className="hover:text-[#c4a574] transition-colors duration-300 text-sm sm:text-base"
            >
              Good Faith Estimate
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#c4a574] transition-colors duration-300 text-sm sm:text-base"
            >
              Website Terms & Conditions
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-[#c4a574] transition-colors duration-300 text-sm sm:text-base"
            >
              Disclaimer
            </Link>
          </motion.div>
          <motion.p
            className="text-[#f5f0e6]/60 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            © {new Date().getFullYear()} Dr. Maya Reynolds. All Rights Reserved.
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
}
