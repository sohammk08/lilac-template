"use client";
import { motion } from "framer-motion";

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
    image: "/holdingflowers.png",
    slug: "blog-post-four",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
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
    <main className="min-h-screen bg-[#FDF8F3]">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 lg:py-32 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              <div className="relative overflow-hidden h-160 rounded-t-[210px] rounded-b-none aspect-3/4 max-w-md mx-auto lg:mx-0">
                <motion.img
                  src="/blogImagePrimary.png"
                  alt="Person reading a book"
                  className="w-auto h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2,
              }}
              className="text-center lg:text-left"
            >
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-[#2d3a2d] mb-6">
                The Lilac Blog
              </motion.h1>
              <motion.p
                className="text-lg md:text-2xl font-medium text-[#4a5a4a] leading-relaxed mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                My tiny corner of the internet
                <br />
                where I talk about all things
                <br />
                healing, heart, and wholeness.
              </motion.p>
              <motion.p
                className="text-[#4a5a4a] font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Glad you&apos;re here.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="bg-[#E8E2DE] px-6 py-16 md:py-24">
        <div className="max-w-348 mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-30 gap-y-16"
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                {/* Blog Image */}
                <div className="overflow-hidden mb-6">
                  <motion.div
                    className="aspect-4/3 relative"
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Blog Content */}
                <div className="space-y-3">
                  <motion.p
                    className="text-sm font-mono font-semibold text-[#6a7a6a] uppercase tracking-wide"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {post.date}
                  </motion.p>
                  <motion.h2 className="text-2xl md:text-3xl font-sans font-semibold text-[#2d3a2d]">
                    {post.title}
                  </motion.h2>
                  <motion.a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center font-medium gap-2 text-[#2d3a2d] underline underline-offset-4 decoration-1 hover:text-[#4a5a4a] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    Read More
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#7f7b46] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="border border-white/30 p-8 md:p-12 lg:p-16 text-center"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-sans font-semibold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Subscribe
            </motion.h2>
            <motion.p
              className="text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Sign up with your email address to receive news and updates.
            </motion.p>

            {/* Email Form */}
            <motion.form
              className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email Address"
                className="w-full sm:flex-1 px-6 py-4 bg-white text-[#2d3a2d] placeholder:text-[#8a9a8a] outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
              />
              <motion.button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 border border-white/50 text-white uppercase text-sm tracking-wider hover:bg-white hover:text-[#7a8a4a] transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Sign Up
              </motion.button>
            </motion.form>

            <motion.p
              className="text-white/70 text-sm mt-6"
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
