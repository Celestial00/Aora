"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Layers, 
  Globe, 
  Zap, 
  Database, 
  ShieldCheck, 
  Layout, 
  Cloud 
} from "lucide-react";
import Typography from "../common/Typography";

const TECH_STACK = [
  { name: "Next.js", icon: <Globe className="w-6 h-6" />, category: "Frontend" },
  { name: "TypeScript", icon: <ShieldCheck className="w-6 h-6" />, category: "Language" },
  { name: "Tailwind", icon: <Layout className="w-6 h-6" />, category: "Styling" },
  { name: "Node.js", icon: <Cpu className="w-6 h-6" />, category: "Backend" },
  { name: "PostgreSQL", icon: <Database className="w-6 h-6" />, category: "Database" },
  { name: "AWS", icon: <Cloud className="w-6 h-6" />, category: "Infrastructure" },
  { name: "Framer Motion", icon: <Zap className="w-6 h-6" />, category: "Animation" },
  { name: "GraphQL", icon: <Layers className="w-6 h-6" />, category: "API" },
];

export default function TechStack() {
  return (
    <section className="relative py-32 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography variant="custom" className="text-indigo-400 font-medium tracking-[0.3em] uppercase text-xs mb-2 block">
              Our Stack
            </Typography>
            <Typography variant="h2" className="text-4xl md:text-5xl font-bold text-white">
              Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 bg-[length:200%_auto] animate-shimmer">Modern Tech.</span>
            </Typography>
          </motion.div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm overflow-hidden"
            >
              {/* Hover Spotlight Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="p-3 rounded-xl bg-zinc-800/50 text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-all duration-300">
                  {tech.icon}
                </div>
                <div className="text-center">
                  <Typography variant="custom" className="text-white font-semibold block">
                    {tech.name}
                  </Typography>
                  <Typography variant="custom" className="text-zinc-500 text-xs uppercase tracking-wider">
                    {tech.category}
                  </Typography>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

    <div className="my-10"></div>

        {/* Infinite Marquee (Bottom Decoration) */}
        <div className="mt-24 relative flex overflow-x-hidden border-y border-zinc-800/50 py-15">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <span key={i} className="mx-16 text-xl font-bold text-zinc-800 uppercase tracking-tighter flex items-center gap-8">
                <span className="text-indigo-500/30">/</span> {tech.name}
              </span>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes shimmer {
          to { background-position: 200% center; }
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-shimmer {
          animation: shimmer 4s linear infinite;
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}