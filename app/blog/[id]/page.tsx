"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Typography from "../../components/common/Typography";

export default function BlogPostPage() {
  // Reading progress bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <div className="relative min-h-screen w-full pt-32 pb-20 px-6">
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Global Glow (Inherited Style) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 -z-10 h-[800px] w-[1000px] rounded-full bg-indigo-500/5 blur-[150px]" />

      <article className="max-w-3xl mx-auto">
        {/* Header Section */}
        <header className="mb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.span
              variants={fadeIn}
              className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-4 block"
            >
              Design & Engineering • 6 min read
            </motion.span>

            <motion.div variants={fadeIn}>
              <Typography
                variant="custom"
                className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8 text-white"
              >
                Building Software with a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300 bg-[length:200%_auto] animate-shimmer">
                  Design-First
                </span>{" "}
                Mentality.
              </Typography>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex items-center gap-4 border-y border-zinc-800/50 py-6"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600" />
              <div>
                <p className="text-white font-medium">Alex Rivera</p>
                <p className="text-zinc-500 text-sm">Lead Product Engineer</p>
              </div>
            </motion.div>
          </motion.div>
        </header>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="prose prose-invert prose-indigo max-w-none"
        >
          <Typography
            variant="h5"
            color="text-zinc-300"
            className="text-xl leading-relaxed mb-8"
          >
            The gap between a high-fidelity Figma file and a production-ready
            application is often wider than it looks. Most teams treat design as
            a "blueprint" that is handed off and forgotten. At our core, we
            believe design is a continuous conversation.
          </Typography>

          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            When we talk about high-end software, we aren't just talking about
            aesthetic gradients or smooth animations (though those matter). We
            are talking about <strong>intentionality</strong>. Every pixel
            should serve a purpose, and every interaction should feel earned.
          </p>

          {/* Pull Quote with Animation */}
          <motion.div
            whileInView={{ x: [20, 0], opacity: [0, 1] }}
            className="my-12 p-8 border-l-2 border-indigo-500 bg-zinc-900/10 backdrop-blur-sm"
          >
            <p className="text-2xl italic text-zinc-200">
              "Great software is not built by following a ticket; it's built by
              understanding the friction in a human's day."
            </p>
          </motion.div>

          <Typography
            variant="h3"
            className="text-2xl font-bold text-white mb-4"
          >
            The Engineering of Delight
          </Typography>

          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            We utilize tools like{" "}
            <code className="text-indigo-300">framer-motion</code> to ensure
            that state transitions aren't just instant—they're fluid. This
            reduces cognitive load on the user and creates a sense of
            "physicality" in a digital space.
          </p>
        </motion.div>

        {/* Footer / CTA */}
        <footer className="mt-20 pt-10 border-t border-zinc-800">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "Copy Link"].map((platform) => (
                <button
                  key={platform}
                  className="text-xs uppercase tracking-widest text-zinc-500 hover:text-indigo-400 transition-colors"
                >
                  {platform}
                </button>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-zinc-900 border border-zinc-700 text-white rounded-full text-sm font-semibold"
            >
              Next Post →
            </motion.button>
          </div>
        </footer>
      </article>

      <style jsx>{`
        @keyframes shimmer {
          to {
            background-position: 200% center;
          }
        }
        .animate-shimmer {
          animation: shimmer 5s linear infinite;
        }
      `}</style>
    </div>
  );
}
