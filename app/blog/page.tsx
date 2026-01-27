"use client";

import React from "react";
import { motion } from "framer-motion";
import Typography from "../components/common/Typography";

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Minimalist Interface Design",
    excerpt:
      "Exploring how 'less is more' is evolving in the age of high-fidelity spatial computing.",
    date: "Oct 24, 2023",
    category: "Design",
  },
  {
    id: 2,
    title: "Scaling Engineering Teams Without Friction",
    excerpt:
      "A deep dive into the cultural and technical hurdles of rapid growth.",
    date: "Oct 20, 2023",
    category: "Engineering",
  },
  {
    id: 3,
    title: "Why We Chose Framer Motion Over GSAP",
    excerpt:
      "Comparing performance, syntax, and developer experience for modern React apps.",
    date: "Oct 15, 2023",
    category: "Development",
  },
];

export default function BlogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <div className="relative min-h-screen w-full  text-white pt-40 pb-20 px-6">
      {/* Shared Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[600px] w-[800px] rounded-full " />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <Typography
            variant="custom"
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
          >
            Insights &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 bg-[length:200%_auto] animate-shimmer">
              Perspectives
            </span>
          </Typography>
          <Typography variant="h5" color="text-zinc-400" className="max-w-xl">
            Thought leadership on building high-end software, design systems,
            and engineering culture.
          </Typography>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          variants={itemVariants}
          className="group relative p-8 md:p-12 rounded-3xl border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm overflow-hidden mb-12 hover:border-zinc-700 transition-colors"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <div className="h-32 w-32 rounded-full border-2 border-indigo-500" />
          </div>

          <div className="relative z-10">
            <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4 block">
              Featured Article
            </span>
            <Typography
              variant="h2"
              className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl"
            >
              Building Software with a <br /> "Design-First" Mentality.
            </Typography>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl">
              Learn how we bridge the gap between high-fidelity prototypes and
              production-ready code without losing the original vision.
            </p>
            <button className="text-white font-semibold flex items-center gap-2 group/btn">
              Read Article
              <span className="group-hover/btn:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/60 transition-all cursor-none"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-zinc-500 uppercase">
                  {post.category}
                </span>
                <span className="text-xs text-zinc-600">{post.date}</span>
              </div>
              <Typography
                variant="h4"
                className="text-xl font-bold mb-3 line-clamp-2"
              >
                {post.title}
              </Typography>
              <p className="text-zinc-400 text-sm mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="w-full h-[1px] bg-zinc-800 mb-4" />
              <button className="text-sm text-zinc-300 hover:text-white transition-colors">
                View Post
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Reuse the shimmer keyframes in global CSS or a scoped style tag */}
      <style jsx>{`
        @keyframes shimmer {
          to {
            background-position: 200% center;
          }
        }
        .animate-shimmer {
          animation: shimmer 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
