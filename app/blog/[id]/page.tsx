"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, useScroll, useSpring, cubicBezier } from "framer-motion";
import Typography from "../../components/common/Typography";
import blogPosts from "../../../lib/BlogPostData"; // Adjust path to your data file

export default function BlogPostPage() {
  const { id } = useParams();
  const router = useRouter();

  // Find the post based on the URL ID
  const post = blogPosts.find((p) => p.id === id);

  // Reading progress bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!post) {
    return (
     router.push("/notFound")
    );
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: cubicBezier(0.21, 0.47, 0.32, 0.98),
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full pt-32 pb-20 px-6 ">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Decorative Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 -z-10 h-[800px] w-[1000px] rounded-full bg-indigo-500/5 blur-[150px]" />

      <article className="max-w-3xl mx-auto">
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
              {post.category} • {post.readTime}
            </motion.span>

            <motion.div variants={fadeIn}>
              <Typography
                variant="custom"
                className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8 text-white"
              >
                {/* Logic to highlight specific word from data */}
                {post.title.split(post.highlightedTitle).map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i !== arr.length - 1 && (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300 bg-[length:200%_auto] animate-shimmer">
                        {post.highlightedTitle}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </Typography>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex items-center gap-4 border-y border-zinc-800/50 py-6"
            >
              <div
                className={`h-12 w-12 rounded-full bg-gradient-to-br ${post.author.avatarGradient}`}
              />
              <div>
                <p className="text-white font-medium">{post.author.name}</p>
                <p className="text-zinc-500 text-sm">{post.author.role}</p>
              </div>
            </motion.div>
          </motion.div>
        </header>

        {/* Dynamic Content Section */}
        <div className="space-y-8">
          {post.content.map((block, index) => {
            switch (block.type) {
              case "intro":
                return (
                  <Typography
                    key={index}
                    variant="h5"
                    color="text-zinc-300"
                    className="text-xl leading-relaxed"
                  >
                    {block.text}
                  </Typography>
                );
              case "paragraph":
                return (
                  <p
                    key={index}
                    className="text-zinc-400 text-lg leading-relaxed"
                  >
                    {block.text}
                  </p>
                );
              case "pullQuote":
                return (
                  <motion.div
                    key={index}
                    whileInView={{ x: [20, 0], opacity: [0, 1] }}
                    viewport={{ once: true }}
                    className="my-12 p-8 border-l-2 border-indigo-500 bg-zinc-900/10 backdrop-blur-sm"
                  >
                    <p className="text-2xl italic text-zinc-200">
                      "{block.text}"
                    </p>
                  </motion.div>
                );
              case "heading":
                return (
                  <Typography
                    key={index}
                    variant="h3"
                    className="text-2xl font-bold text-white mt-12 mb-4"
                  >
                    {block.text}
                  </Typography>
                );
              default:
                return null;
            }
          })}
        </div>

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

            {post.cta.nextPost && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(`/blog/${post.cta.nextPost}`)}
                className="px-6 py-3 bg-zinc-900 border border-zinc-700 text-white rounded-full text-sm font-semibold"
              >
                Next Post →
              </motion.button>
            )}
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
