"use client";

import React from "react";
import { motion, Variants, cubicBezier } from "framer-motion";
import { Code2, Zap, ShieldCheck, Globe, Cpu, Rocket } from "lucide-react";
import Typography from "../common/Typography";

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "We don't just write code; we build scalable systems using modern design patterns for long-term growth.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Optimized for speed. We ensure your software loads instantly and handles high-traffic loads with ease.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Security isn't an afterthought. We bake protection into every layer of your application from day one.",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description:
      "Our agile workflow ensures constant updates and faster time-to-market without sacrificing quality.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Tech",
    description:
      "Leveraging the latest in AI, Cloud, and Edge computing to give your product a competitive advantage.",
  },
  {
    icon: Globe,
    title: "Global Scalability",
    description:
      "Cloud-native solutions designed to serve millions of users across the globe with zero downtime.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: cubicBezier(0.16, 1, 0.3, 1) }, // ✅ TS-safe
  },
};

export default function WhyUs() {
  return (
    <section className="max-w-7xl mx-auto md:my-24   px-6 md:px-20 bg-transparent text-white">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <Typography
          variant="h2"
          className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4"
        >
          Why Choose <span className="text-white/40 italic">Aora.</span>
        </Typography>
        <div className="w-20 h-1 bg-white" />
      </motion.div>

      {/* Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group flex flex-col space-y-4 pb-8 border-b border-white/10 hover:border-white transition-colors duration-500"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-full text-white group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">
                {feature.title}
              </h3>
            </div>

            <p className="text-white/50 text-sm leading-relaxed group-hover:text-white transition-colors duration-500">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
