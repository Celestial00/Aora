"use client";

import { motion } from "framer-motion";
import Typography from "../common/Typography";
import { cubicBezier } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: cubicBezier(0.21, 0.47, 0.32, 0.98),
      },
    },
  };

  return (
    <>
      <div className="relative md:mt-40 mt-20 w-full flex flex-col justify-center items-center text-center px-6">
        {/* Background Glow */}
        <div className="absolute -z-10 h-125 max-w-125 rounded-full bg-indigo-500/10 blur-[120px]" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl space-y-6"
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="custom"
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white block"
            >
              Build Better{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 bg-[length:200%_auto] animate-shimmer">
                  High End
                </span>

                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute -bottom-2 left-0 h-[2px] bg-indigo-500/40 block"
                />
              </span>{" "}
              Software.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              color="text-zinc-400"
              className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
            >
              We craft high-impact software that drives results
              <span className="text-zinc-200"> no fluff, just business.</span>
            </Typography>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-semibold transition-colors shadow-[0_0_20px_rgba(79,70,229,0.4)]"
            >
              Start a Project
            </motion.button>

            <motion.button
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              className="px-8 py-4 bg-transparent border border-zinc-800 text-white rounded-full font-semibold transition-colors"
            >
              View Work
            </motion.button>
          </motion.div>
        </motion.div>

        <style jsx>{`
          @keyframes shimmer {
            to {
              background-position: 200% center;
            }
          }
          .animate-shimmer {
            animation: shimmer 3s linear infinite;
          }
        `}</style>
      </div>
    </>
  );
}
