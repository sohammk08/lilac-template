"use client";

import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  aspect: "portrait" | "square";
}

const IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "/therapistImage.png",
    alt: "",
    aspect: "portrait",
  },
  {
    id: 2,
    src: "specialty3.png",
    alt: " ",
    aspect: "portrait",
  },
  {
    id: 3,
    src: "im2.png",
    alt: "",
    aspect: "portrait",
  },
  {
    id: 4,
    src: "/im1.png",
    alt: "",
    aspect: "portrait",
  },
];

function Contact() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      const nextIndex = (currentIndex + 1) % IMAGES.length;
      setCurrentIndex(nextIndex);
      setSelectedImage(IMAGES[nextIndex]);
    },
    [currentIndex],
  );

  const showPrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      const prevIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
      setCurrentIndex(prevIndex);
      setSelectedImage(IMAGES[prevIndex]);
    },
    [currentIndex],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex, showNext, showPrev]);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  return (
    <section className="bg-[#0d261e] font-serif min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Section */}
          <div className="order-2 lg:order-1">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-[#f5f0e6] mb-8 leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Let&apos;s Connect
            </motion.h1>

            {/* Decorative underline */}
            <div className="w-24 h-0.5 bg-[#c4a574] mb-8"></div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <p className="text-lg md:text-xl font-serif font-normal text-[#f5f0e6]/90 leading-[1.7]">
                Starting therapy is a meaningful and courageous step.
              </p>

              <p className="text-lg md:text-xl font-serif font-normal text-[#f5f0e6]/90 leading-[1.7]">
                I offer a free 15-minute phone or video consultation to answer
                questions, discuss your needs, and see if we might be a good
                fit.
              </p>

              <p className="text-lg md:text-xl font-serif font-normal text-[#f5f0e6]/60 italic">
                Feel free to reach out. No pressure, just a conversation.
              </p>
            </motion.div>
          </div>

          {/* Right Section - Image */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative aspect-3/4 rounded-t-[200px] overflow-hidden">
                <motion.img
                  src="/therapistImage.png"
                  alt="Therapist portrait"
                  className="object-cover w-full h-full"
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* HIPAA Notice */}
      <motion.div
        className="bg-[#f5f0e6]/5 border-y border-[#f5f0e6]/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-6 py-12 lg:py-16 text-center">
          <p className="text-[#f5f0e6]/70 text-base md:text-lg font-serif leading-relaxed">
            <span className="text-[#c4a574] font-medium">Please note:</span> Any
            contact form used on this site is not HIPAA-compliant for sharing
            protected health information. For clinical matters, please email
            directly or use a secure client portal after we begin working
            together.
          </p>
        </div>
      </motion.div>

      {/* Book Consultation */}
      <div className="bg-[#E8E2DE] py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-[#0d261e] mb-6 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Book a Free Consultation
          </motion.h2>

          <div className="w-16 h-0.5 bg-[#c4a574] mx-auto mb-8"></div>

          <motion.p
            className="text-[#0d261e]/70 text-lg mb-10 font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Add a calendar here (eg. calendly, cal.com, etc.)
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 border font-sans uppercase tracking-tight border-[#0d261e]/30 rounded-full text-[#0d261e] text-sm font-medium hover:bg-[#0d261e] hover:text-[#f5f0e6] transition-all duration-300"
            >
              Connect with me
              <span className="text-lg">→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Office Location */}
      <div className="bg-[#0d261e] py-20 lg:py-28 border-t border-[#f5f0e6]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Office Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-[#f5f0e6] mb-6 leading-[1.1]">
                My Office
              </h2>

              <div className="w-16 h-0.5 bg-[#c4a574] mb-8"></div>

              <div className="space-y-2 text-[#f5f0e6]/80 text-lg md:text-xl font-serif mb-12">
                <p>123 Street 45W</p>
                <p>Santa Monica, CA 90401</p>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-normal text-[#f5f0e6] mb-4">
                Hours
              </h3>

              <div className="w-12 h-px bg-[#c4a574]/50 mb-6"></div>

              <div className="space-y-1 text-[#f5f0e6]/80 text-lg md:text-xl font-serif">
                <p>Monday - Friday</p>
                <p>10am - 6pm</p>
              </div>
            </motion.div>

            {/* Right: Google Maps */}
            <motion.div
              className="w-full aspect-4/3 lg:aspect-square overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21240.427724717898!2d-118.49622678955514!3d34.022924921427254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cec2910019%3A0xb4170ab5ff23f5ab!2sSanta%20Monica%2C%20CA!5e0!3m2!1sen!2sus!4v1770314481704!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="grayscale opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Social Gallery */}
      <div className="w-full bg-[#E8E2DE] py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-[#0d261e] mb-4 leading-[1.1]"
          >
            Find me on social.
          </motion.h2>

          <div className="w-16 h-0.5 bg-[#c4a574] mb-12"></div>

          {/* Grid Gallery */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {IMAGES.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-3/4 overflow-hidden cursor-pointer rounded-t-[100px]"
                onClick={() => openLightbox(img, index)}
              >
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-[#0d261e]/0 group-hover:bg-[#0d261e]/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d261e]/95 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-2 text-[#f5f0e6]/60 hover:text-[#f5f0e6] transition-colors z-50"
                aria-label="Close lightbox"
              >
                <IoCloseOutline size={32} />
              </button>

              {/* Navigation */}
              <button
                onClick={showPrev}
                className="absolute left-4 md:left-8 p-2 text-[#f5f0e6]/40 hover:text-[#f5f0e6] transition-colors z-50 hidden sm:block"
                aria-label="Previous image"
              >
                <FiChevronLeft size={40} strokeWidth={1} />
              </button>

              <button
                onClick={showNext}
                className="absolute right-4 md:right-8 p-2 text-[#f5f0e6]/40 hover:text-[#f5f0e6] transition-colors z-50 hidden sm:block"
                aria-label="Next image"
              >
                <FiChevronRight size={40} strokeWidth={1} />
              </button>

              <motion.div
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full max-w-5xl max-h-[90vh] p-4 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-t-[50px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Mobile Navigation */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 sm:hidden z-50">
                <button
                  onClick={showPrev}
                  className="p-3 text-[#f5f0e6] bg-[#f5f0e6]/10 rounded-full backdrop-blur-sm"
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  onClick={showNext}
                  className="p-3 text-[#f5f0e6] bg-[#f5f0e6]/10 rounded-full backdrop-blur-sm"
                >
                  <FiChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Contact;
