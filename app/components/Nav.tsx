"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";

function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isContactPage = pathname === "/contact";
  const bgColor = isContactPage ? "bg-[#b4aebd]" : "bg-[#FDF8F3]";
  const textColor = "text-[#2a332a]";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  // Scroll behavior: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Animation variants with proper types
  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" as const },
    },
  };

  const linkContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const linkVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`${bgColor} ${textColor} fixed top-0 left-0 right-0 z-50`}
    >
      <nav className="font-sans flex justify-between items-center px-6 sm:px-8 lg:px-12 py-4 mx-auto">
        {/* LEFT SIDE */}
        <div className="flex items-center">
          {/* Mobile: Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-10 h-10 flex items-center justify-center -ml-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-[#2a332a]/10"
              initial={false}
              animate={{
                scale: isMenuOpen ? 1 : 0,
                opacity: isMenuOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <div className="relative w-6 h-3 flex flex-col justify-between">
              <motion.span
                className="w-6 h-[0.2px] bg-[#2a332a] origin-center"
                initial={false}
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 7 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <motion.span
                className="w-6 h-[0.2px] bg-[#2a332a] origin-center"
                initial={false}
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -7 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </div>
          </button>

          {/* Desktop: Logo */}
          <Link
            href="/"
            className="hidden md:block text-xl lg:text-[32px] font-sans font-semibold tracking-wide"
            onClick={closeMenu}
          >
            Lilac Template
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center">
          {/* Desktop: Navigation Links */}
          <div className="hidden md:flex gap-8 lg:gap-12 text-base lg:text-lg font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:opacity-60 transition-opacity duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile: Logo */}
          <Link
            href="/"
            className="md:hidden text-lg font-sans font-semibold tracking-wide"
            onClick={closeMenu}
          >
            Lilac Template
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed inset-0 ${bgColor} z-40 md:hidden flex flex-col`}
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center px-6 py-4">
              {/* Close Button */}
              <button
                onClick={closeMenu}
                className="relative w-10 h-10 flex items-center justify-center -ml-2"
                aria-label="Close menu"
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#2a332a]/10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <div className="relative w-6 h-4 flex flex-col justify-center">
                  <motion.span
                    className="absolute w-6 h-[1.5px] bg-[#2a332a]"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 45, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="absolute w-6 h-[1.5px] bg-[#2a332a]"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: -45, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </button>

              {/* Logo */}
              <Link
                href="/"
                className="text-lg font-semibold tracking-wide"
                onClick={closeMenu}
              >
                Lilac Template
              </Link>
            </div>

            {/* Mobile Menu Links */}
            <motion.div
              variants={linkContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex-1 flex flex-col items-center justify-center gap-6 pb-20"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="text-4xl sm:text-5xl font-medium text-[#2a332a] hover:opacity-60 transition-opacity duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Nav;
