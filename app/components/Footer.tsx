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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <footer className="bg-[#FDF8F3] font-sans">
      {/* Main Footer */}
      <motion.div
        className="mx-6 lg:mx-12 py-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Brand & Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl lg:text-4xl font-semibold text-black mb-8 tracking-tight">
              Lilac Template
            </h3>
            <div className="space-y-1 text-black text-lg font-medium mb-8">
              <p>123 Example Road</p>
              <p>Minneapolis, MN</p>
            </div>
            <div className="space-y-2 font-semibold">
              <p>
                <a
                  href="mailto:email@example.com"
                  className="text-black text-lg underline underline-offset-4 hover:opacity-60 transition-opacity duration-200"
                >
                  email@example.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+15555555555"
                  className="text-black text-lg underline underline-offset-4 hover:opacity-60 transition-opacity duration-200"
                >
                  (555) 555-5555
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="ml-75">
            <h3 className="text-3xl lg:text-4xl font-semibold text-black mb-8 tracking-tight">
              Hours
            </h3>
            <div className="text-black font-medium text-lg space-y-1">
              <p>Monday - Friday</p>
              <p>10am - 6pm</p>
            </div>
          </motion.div>

          {/* Find/Navigation */}
          <motion.div variants={itemVariants} className="md:text-right">
            <h3 className="text-3xl lg:text-4xl font-semibold text-black mb-8 tracking-tight">
              Find
            </h3>
            <nav className="flex flex-col space-y-3 md:items-end">
              <Link
                href="/"
                className="text-black text-lg underline underline-offset-4 hover:opacity-60 transition-opacity duration-200 w-fit"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="text-black text-lg underline underline-offset-4 hover:opacity-60 transition-opacity duration-200 w-fit"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="text-black text-lg underline underline-offset-4 hover:opacity-60 transition-opacity duration-200 w-fit"
              >
                Blog
              </Link>
            </nav>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        className="bg-[#E8E2DE] py-12 pb-4 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div
            className="flex flex-wrap justify-center gap-x-6 text-center text-black"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:opacity-60 transition-opacity duration-200 text-sm lg:text-base"
            >
              Privacy & Cookies Policy
            </Link>
            <Link
              href="/good-faith-estimate"
              className="underline underline-offset-4 hover:opacity-60 transition-opacity duration-200 text-sm lg:text-base"
            >
              Good Faith Estimate
            </Link>
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:opacity-60 transition-opacity duration-200 text-sm lg:text-base"
            >
              Website Terms & Conditions
            </Link>
            <Link
              href="/disclaimer"
              className="underline underline-offset-4 hover:opacity-60 transition-opacity duration-200 text-sm lg:text-base"
            >
              Disclaimer
            </Link>
          </motion.div>

          {/* Credits */}
          <motion.p
            className="text-black text-sm lg:text-base text-center mt-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Website Template Credits:{" "}
            <a
              href="https://gobloomcreative.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-60 transition-opacity duration-200"
            >
              Go Bloom Creative
            </a>
          </motion.p>

          {/* Copyright */}
          <motion.p
            className="text-black text-center text-xs lg:text-sm mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
}
