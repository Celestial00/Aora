"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

type ProjectCardProps = {
  title: string;
  price?: string;
  description: string;
  features?: string[];
  technologies: string[];
  icon: React.ReactNode;
};

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1, // This creates the "waterfall" effect for children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export default function ProjectCard({
  title,
  price,
  description,
  features,
  technologies,
  icon,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative w-full max-w-4xl rounded-2xl p-10 transition-colors hover:border-indigo-500/50"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent" />
      </div>

      {/* Header */}
      <div className="relative flex flex-col-reverse md:flex-row items-start justify-between">
        <div className="flex flex-col md:flex-row gap-4">
        
          <div>
            <h3 className="text-2xl font-semibold text-white group-hover:text-indigo-300 transition-colors">
              {title}
            </h3>
            {price && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 inline-block rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-indigo-400 border border-indigo-500/20"
              >
                {price}
              </motion.span>
            )}
          </div>
        </div>

        <div className="hidden">
          <motion.div
            variants={{
              hover: { x: 5, color: "#818cf8" },
            }}
            className="text-zinc-500"
          >
            <ArrowRight size={24} />
          </motion.div>
        </div>


      </div>

      <motion.p
        variants={itemVariants}
        className="relative mt-6 max-w-3xl text-zinc-400 leading-relaxed"
      >
        {description}
      </motion.p>

      {features && (
        <div className="relative mt-10">
          <h4 className="font-medium text-white mb-5 text-sm uppercase tracking-wider opacity-60">
            Key Highlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {features.map((feature, idx) => (
              <motion.div
                key={feature}
                variants={itemVariants}
                custom={idx}
                className="flex items-center gap-3 text-zinc-400"
              >
                <div className="flex-shrink-0 rounded-full bg-indigo-500/20 p-1">
                  <Check size={12} className="text-indigo-400" />
                </div>
                <span className="text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <div className="relative mt-10">
        <h4 className="font-medium text-white mb-4 text-sm uppercase tracking-wider opacity-60">
          Technologies Used
        </h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 0.9 },
              }}
              whileHover={{
                scale: 1,
                backgroundColor: "rgba(99, 102, 241, 0.2)",
                color: "#fff",
              }}
              className="cursor-default rounded-lg border border-zinc-800 bg-zinc-800/40 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
