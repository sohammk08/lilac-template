"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Blog Post One",
    date: "3/11/19",
    image: "/im2.png",
    slug: "blog-post-one",
  },
  {
    id: 2,
    title: "Blog Post Two",
    date: "3/11/19",
    image: "/workwithme.png",
    slug: "blog-post-two",
  },
  {
    id: 3,
    title: "Blog Post Three",
    date: "3/11/19",
    image: "/flowers.png",
    slug: "blog-post-three",
  },
  {
    id: 4,
    title: "Blog Post Four",
    date: "3/11/19",
    image: "/im3.png",
    slug: "blog-post-four",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Blogs() {
  return (
    <main className="min-h-screen bg-[#0d261e]">
      {/* Hero Section */}
      <section className="px-6 py-24 md:py-24 font-serif">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-t-[200px] aspect-3/4 max-w-md mx-auto">
                <motion.img
                  src="/blogImagePrimary.png"
                  alt="Person reading a book"
                  className="w-full h-full object-cover"
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2,
              }}
              className="flex flex-col items-center lg:items-start max-w-lg"
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-[#f5f0e6] mb-8 leading-[1.05] tracking-tight text-center lg:text-left"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.2,
                }}
              >
                Maya&apos;s Blog
              </motion.h1>

              <div className="w-24 h-0.5 bg-[#c4a574] mb-8 mx-auto lg:mx-0" />

              <motion.div
                className="space-y-4 text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-lg md:text-xl font-serif font-normal text-[#f5f0e6]/90 leading-[1.6]">
                  My tiny corner of the internet
                  <br className="hidden sm:block" />
                  where I talk about all things
                  <br className="hidden sm:block" />
                  healing, heart, and wholeness.
                </p>
                <p className="text-[#f5f0e6]/60 font-serif font-normal text-base md:text-lg italic">
                  Glad you&apos;re here.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="bg-[#0a1f18] px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                {/* Blog Image */}
                <div className="overflow-hidden rounded-lg mb-6">
                  <motion.div
                    className="aspect-4/3 relative"
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                </div>

                {/* Blog Content */}
                <div className="space-y-3">
                  <motion.p
                    className="text-sm font-normal text-[#c4a574] uppercase tracking-widest font-serif"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {post.date}
                  </motion.p>
                  <motion.h2 className="text-2xl md:text-3xl font-serif font-normal text-[#f5f0e6] transition-colors duration-300">
                    {post.title}
                  </motion.h2>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center font-normal gap-2 text-[#f5f0e6]/70 transition-colors duration-300 font-serif"
                  >
                    Read More
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#0d261e] py-20 md:py-28 border-y border-[#f5f0e6]/10">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-serif font-normal text-[#f5f0e6] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Subscribe
            </motion.h2>

            {/* Decorative underline */}
            <div className="w-16 h-px bg-[#c4a574] mb-6 mx-auto"></div>

            <motion.p
              className="text-[#f5f0e6]/70 mb-10 font-serif font-normal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Sign up with your email address to receive news and updates.
            </motion.p>

            {/* Email Form */}
            <motion.form
              className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email Address"
                className="w-full sm:flex-1 px-6 py-4 bg-transparent border border-[#f5f0e6]/30 text-[#f5f0e6] placeholder:text-[#f5f0e6]/40 outline-none focus:border-[#c4a574] transition-all duration-300 font-serif rounded-full"
              />
              <motion.button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 border border-[#f5f0e6]/40 text-[#f5f0e6] text-sm tracking-wide hover:bg-[#f5f0e6] hover:text-[#0d261e] transition-all duration-300 rounded-full font-normal"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Sign Up
              </motion.button>
            </motion.form>

            <motion.p
              className="text-[#f5f0e6]/50 text-sm mt-8 font-serif"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              We respect your privacy.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
