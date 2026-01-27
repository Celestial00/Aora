"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Typography from "../common/Typography";

const PROJECTS = [
  {
    title: "Quantum Pay",
    category: "Fintech Solution",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tags: ["Next.js", "Web3", "Tailwind"],
  },
  {
    title: "Nexus Dashboard",
    category: "Enterprise SaaS",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Node.js", "AWS"],
  },
];

export default function ProjectShowcase() {
  return (
    <section className="relative mt-20 py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <Typography
              variant="custom"
              className="text-indigo-400 font-medium tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              Case Studies
            </Typography>
            <Typography
              variant="h2"
              className="text-4xl md:text-6xl font-bold text-white"
            >
              Selected{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 bg-[length:200%_auto] animate-shimmer">
                Works.
              </span>
            </Typography>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors border-b border-zinc-800 pb-2"
          >
            Explore all projects <ArrowUpRight size={18} />
          </motion.button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Floating Tags (Overlay) */}
                <div className="absolute top-6 left-6 flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] uppercase tracking-widest bg-black/60 backdrop-blur-md text-indigo-400 border border-indigo-500/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Reveal Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white text-black p-5 rounded-full scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <Typography
                    variant="custom"
                    className="text-zinc-500 text-sm mb-1 block"
                  >
                    {project.category}
                  </Typography>
                  <Typography
                    variant="h4"
                    className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors"
                  >
                    {project.title}
                  </Typography>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
    </section>
  );
}
