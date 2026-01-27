"use client";

import React from "react";
import { motion } from "framer-motion";
import Typography from "../common/Typography";

export default function ServiceDescription() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-transparent">
      {/* Top Divider with subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
      >
        {/* Title Section */}
        <motion.div variants={itemVariants} className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "32px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[1px] bg-indigo-400 block"
            />
            <Typography variant="custom" className="text-indigo-400 font-medium tracking-[0.2em] uppercase text-xs">
              Expertise
            </Typography>
          </div>
          
          <Typography
            variant="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white"
          >
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 bg-[length:200%_auto] animate-shimmer">
              Digital Excellence
            </span>
          </Typography>
        </motion.div>

        {/* Description Section */}
        <motion.div variants={itemVariants} className="lg:col-span-7 space-y-8">
          <div className="space-y-6">
            <Typography
              variant="custom"
              className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed"
            >
              We don’t just write code; we architect experiences. From <span className="text-indigo-400">scalable SaaS platforms</span> to bespoke enterprise software, our approach combines technical rigor with creative strategy.
            </Typography>
            
            <Typography
              variant="custom"
              className="text-lg text-zinc-500 leading-relaxed max-w-2xl"
            >
              Every line of code we ship is optimized for performance and security. Whether you're a startup looking to disrupt or an enterprise aiming to modernize, we deliver high-end engineering.
            </Typography>
          </div>

          {/* Feature Highlight Tags */}
          <div className="flex flex-wrap gap-3">
            {["Scalable Architecture", "UX-First Engineering", "Cloud-Native"].map((tag, index) => (
              <motion.span 
                key={tag}
                whileHover={{ scale: 1.05, borderColor: "rgba(129, 140, 248, 0.5)" }}
                className="px-5 py-2 rounded-full border border-zinc-800 text-zinc-400 text-sm bg-zinc-900/40 backdrop-blur-md transition-all cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes shimmer {
          to { background-position: 200% center; }
        }
        .animate-shimmer {
          animation: shimmer 4s linear infinite;
        }
      `}</style>
    </section>
  );
}