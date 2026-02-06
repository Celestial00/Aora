"use client";

import { motion, Variants, cubicBezier } from "framer-motion";
import Typography from "../common/Typography";
import { ServiceData } from "@/lib/types";

interface ServiceHeroProps {
  data: ServiceData;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
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

export default function ServiceHero({ data }: ServiceHeroProps) {
  if (!data) return null;

  const titleWords = data.title.split(" ");

  return (
    // Removed 'bg-black' or any color classes to keep it transparent
    <section className="relative pt-32 pb-20 w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-transparent">
      {/* Background Ambient Glow - Opacity lowered to blend better with any external background */}
      <div className="absolute -top-24 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl space-y-8"
      >
        {/* Category Badge */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-indigo-400 text-sm font-medium tracking-wide backdrop-blur-sm">
            Service Excellence
          </span>
        </motion.div>

        {/* Dynamic Title */}
        <motion.div variants={itemVariants}>
          <Typography
            variant="custom"
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
          >
            {titleWords.map((word, i) => (
              <span key={i}>
                {i === titleWords.length - 1 ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">
                    {word}
                  </span>
                ) : (
                  <>{word} </>
                )}
              </span>
            ))}
          </Typography>
        </motion.div>

        {/* Dynamic Description */}
        <motion.div variants={itemVariants}>
          <Typography
            variant="h5"
            color="text-zinc-400"
            className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light"
          >
            {data.description}
          </Typography>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 pt-4"
        >
          {data.techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white/5 border border-white/10 text-zinc-300 rounded-xl text-sm hover:border-white/20 transition-colors backdrop-blur-md"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={itemVariants} className="mt-10">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-white text-black rounded-full font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-shadow"
          >
            Start Building
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
