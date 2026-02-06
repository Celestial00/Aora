"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Smartphone,
  Brain,
  Cloud,
  Settings,
  ArrowRight,
} from "lucide-react";
import Typography from "../components/common/Typography";
import { useRouter } from "next/navigation";
import { services } from "@/lib/servicesData";


// const services = [
//   {
//     id: "web",
//     title: "Web Development",
//     icon: Code,
//     subServices: [
//       "Single Page Application",
//       "E-commerce Solutions",
//       "API Development",
//     ],
//   },
//   {
//     id: "mobile",
//     title: "Mobile Apps",
//     icon: Smartphone,
//     subServices: [
//       "Flutter Applications",
//       "iOS Applications",
//       "Android Applications",
//       "Cross-Platform Apps",
//     ],
//   },
//   {
//     id: "ai",
//     title: "AI Solutions",
//     icon: Brain,
//     subServices: [
//       "Machine Learning Models",
//       "AI Chatbots",
//       "Data Analytics",
//       "AI Integrations",
//     ],
//   },
//   {
//     id: "cloud",
//     title: "Cloud Services",
//     icon: Cloud,
//     subServices: [
//       "AWS Infrastructure",
//       "Cloud Migration",
//       "Serverless Architecture",
//       "Cloud Security",
//     ],
//   },
//   {
//     id: "automation",
//     title: "Automation",
//     icon: Settings,
//     subServices: [
//       "Process Automation",
//       "Workflow Automation",
//       "CI / CD Pipelines",
//       "Task Scheduling",
//     ],
//   },
// ];

export default function ServicesPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full pt-40 pb-20 px-6  overflow-hidden">
    
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[1000px] w-[1000px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="custom"
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 bg-[length:200%_auto] animate-shimmer">
                Capabilities.
              </span>
            </Typography>
            <Typography
              variant="h5"
              color="text-zinc-400"
              className="max-w-2xl text-lg"
            >
              We don't just write code. We architect solutions that scale,
              automate, and dominate the digital landscape.
            </Typography>
          </motion.div>
        </header>

        <div className="flex flex-col border-t border-zinc-800/50">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredId === service.id;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group border-b border-zinc-800/50 py-12 md:py-16 transition-colors duration-500 cursor-none"
                onClick={() => router.push(service.link)}
              >
              
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      layoutId="spotlight"
                      className="absolute inset-0 bg-indigo-600/5 -z-10 backdrop-blur-3xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>

                <div className="flex flex-col md:flex-row md:items-center px-10 justify-between gap-8 relative z-10">
                  <div className="flex items-center gap-8">
                    <span className="text-zinc-700 font-mono text-xl">
                      0{index + 1}
                    </span>
                    <div className="flex items-center gap-6">
                      <div
                        className={`p-4 rounded-2xl border transition-all duration-500 ${isHovered ? "border-indigo-500/50 bg-indigo-500/10 text-white" : "border-zinc-800 bg-zinc-900/20 text-zinc-500"}`}
                      >
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                      <Typography
                        variant="h2"
                        className={`text-3xl md:text-5xl font-bold transition-all duration-500 ${isHovered ? "text-white translate-x-4" : "text-zinc-500"}`}
                      >
                        {service.title}
                      </Typography>
                    </div>
                  </div>

                  {/* Sub-services reveal */}
                  <div className="flex flex-wrap gap-3 px-10 md:max-w-md justify-end">
                    <AnimatePresence>
                      {isHovered &&
                        service.subServices.map((sub, i) => (
                          <motion.span
                            key={sub}
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                            transition={{ delay: i * 0.05 }}
                            className="px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-300 text-xs font-semibold tracking-wide uppercase"
                          >
                            {sub}
                          </motion.span>
                        ))}
                    </AnimatePresence>
                    {!isHovered && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-zinc-600 flex items-center gap-2 text-sm font-medium"
                      >
                        Learn more <ArrowRight size={16} />
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

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
