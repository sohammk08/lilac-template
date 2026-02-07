"use client";

import { motion } from "framer-motion";

function Office() {
  return (
    <section className="bg-[#0d261e] py-18 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 lg:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#f5f0e6] mb-6 leading-[1.05] tracking-tight">
            My Office
          </h2>
          <div className="w-24 h-0.5 bg-[#c4a574]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Office Info & Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <p className="text-[#f5f0e6]/80 text-lg font-serif leading-[1.8]">
                My office is a quiet, private space designed to feel calm and
                grounding, with natural light and a comfortable, uncluttered
                environment.
              </p>
              <p className="text-[#f5f0e6]/80 text-lg font-serif leading-[1.8]">
                Clients often share that the space itself helps them feel more
                at ease when they arrive.
              </p>
            </div>

            {/* Office Images */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="overflow-hidden h-85 rounded-lg"
              >
                <motion.img
                  src="/office1.png"
                  alt="Therapy office interior with natural light"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-85 overflow-hidden rounded-lg"
              >
                <motion.img
                  src="/office2.png"
                  alt="Comfortable therapy room seating area"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="space-y-12"
          >
            {/* Session Types */}
            <div>
              <h3 className="text-xl md:text-2xl font-serif font-normal text-[#c4a574] mb-4">
                Session Options
              </h3>
              <div className="space-y-3 text-[#f5f0e6]/90 text-lg font-serif">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#c4a574]"></div>
                  <p>In-person sessions in Santa Monica</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#c4a574]"></div>
                  <p>Secure telehealth for California residents</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-rectangle h-95 overflow-hidden bg-[#f5f0e6]/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.068722298617!2d-118.4936!3d34.0194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cec2910019%3A0xb4170ab5ff23f5ab!2sSanta%20Monica%2C%20CA%2090401!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) opacity(0.7)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
                className="hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Parking Note */}
        <div className="bg-[#f5f0e6]/5 border border-[#f5f0e6]/10 rounded-lg p-6 my-auto mt-10">
          <p className="text-[#f5f0e6]/70 text-base font-serif leading-relaxed">
            <span className="text-[#c4a574]">Note:</span> Street parking is
            available on 123th Street and nearby residential streets. Please
            allow a few extra minutes to find parking before your appointment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Office;
