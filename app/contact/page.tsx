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
    src: "/holdingflowers.png",
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

  // Handle opening the lightbox
  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  // Handle closing the lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Navigation logic
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

  // Keyboard navigation
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

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  return (
    <section className="bg-[#b4aebd] font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Section */}
          <div>
            <motion.h1
              className="text-5xl lg:text-7xl font-semibold text-[#3d4a3d] mb-12 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              Let&apos;s Connect
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-[#3d4a3d] mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              Starting therapy is a meaningful and courageous step.
            </motion.p>

            <motion.p
              className="text-xl lg:text-2xl text-[#3d4a3d] mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              I offer a free 15-minute phone or video consultation to answer
              questions, discuss your needs, and see if we might be a good fit.
              Feel free to reach out. No pressure, just a conversation.
            </motion.p>

            {/* Images */}
            <motion.div
              className="relative w-full max-w-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="relative aspect-3/4 rounded-t-[200px] overflow-hidden bg-gray-300">
                <motion.img
                  src="/holdingflowers.png"
                  alt="Person holding lilac flowers"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Overlapping Circle Image */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-[#C8C4CE]">
                <motion.img
                  src="/flowers.png"
                  alt="White flowers"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Section */}
          <motion.div
            className="bg-[#2a3a2a] p-8 lg:p-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-[#FDF8F3] text-lg lg:text-xl leading-relaxed">
              <span className="font-bold">PLEASE NOTE:</span> Any contact form
              used on this site is not HIPAA-compliant for sharing protected
              health information. For clinical matters, please email directly or
              use a secure client portal after we begin working together.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Book meeting */}
      <div className="flex flex-col justify-center items-center bg-[#E8E2DE] py-18 lg:py-24">
        <motion.h2
          className="text-3xl text-center lg:text-4xl font-bold text-[#3d4a3d] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          Book a Free Consultation
        </motion.h2>
        <motion.p className="text-2xl font-medium text-left text-[#3d4a3d] max-w-2xl mx-auto mb-8">
          Add a calendar here (eg. calendly, cal.com, etc.)
        </motion.p>
        <Link
          href="#"
          className="inline-flex items-center gap-3 px-8 py-2 border border-[#3d4a3d] text-[#3d4a3d] text-base font-semibold tracking-wider uppercase hover:bg-[#3d4a3d] hover:text-[#FDF8F3] transition-all duration-300"
        >
          BOOK CONSULTATION
          <span className="text-xl my-auto">→</span>
        </Link>
      </div>

      {/* Office Location */}
      <div className="bg-[#838344] py-20 lg:py-28">
        <div className="mx-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Office Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 className="text-4xl lg:text-5xl font-medium text-[#FDF8F3] mb-8 tracking-tight">
                My Office
              </h2>
              <div className="space-y-1 text-[#FDF8F3] text-xl lg:text-2xl mb-12">
                <p>123 Street 45W</p>
                <p>Santa Monica, CA 90401</p>
              </div>

              <h3 className="text-3xl lg:text-4xl font-medium text-[#FDF8F3] mb-6 tracking-tight">
                Hours
              </h3>
              <div className="space-y-1 text-[#FDF8F3] text-xl lg:text-2xl">
                <p>Monday - Friday</p>
                <p>10am - 6pm</p>
              </div>
            </motion.div>

            {/* Right: Google Maps */}
            <motion.div
              className="w-full h-100 lg:h-125 bg-gray-200"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
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
                className="grayscale"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#f8f5f2] py-16 px-4 sm:px-6 lg:px-12 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-sans font-semibold text-[#2d3b2d] mb-10 tracking-tight"
          >
            Find me on social.
          </motion.h2>

          {/* Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMAGES.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-4/5 overflow-hidden cursor-pointer bg-gray-200"
                onClick={() => openLightbox(img, index)}
              >
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
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
              className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-800 transition-colors z-50"
                aria-label="Close lightbox"
              >
                <IoCloseOutline size={36} />
              </button>

              {/* Navigation */}
              <button
                onClick={showPrev}
                className="absolute left-4 md:left-8 p-2 text-gray-300 hover:text-gray-800 transition-colors z-50 hidden sm:block"
                aria-label="Previous image"
              >
                <FiChevronLeft size={48} strokeWidth={1} />
              </button>

              <button
                onClick={showNext}
                className="absolute right-4 md:right-8 p-2 text-gray-300 hover:text-gray-800 transition-colors z-50 hidden sm:block"
                aria-label="Next image"
              >
                <FiChevronRight size={48} strokeWidth={1} />
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
                  className="max-w-full max-h-full object-contain shadow-2xl"
                />
              </motion.div>

              {/* Mobile Navigation */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 sm:hidden z-50">
                <button
                  onClick={showPrev}
                  className="p-2 text-gray-600 bg-white/50 rounded-full"
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  onClick={showNext}
                  className="p-2 text-gray-600 bg-white/50 rounded-full"
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
