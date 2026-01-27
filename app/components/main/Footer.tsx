"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Variants, cubicBezier } from "framer-motion";

export default function Footer() {
  const [year] = useState({
    curYear: new Date().getFullYear(),
  });
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.21, 0.47, 0.32, 0.98), // ✅ TS-safe cubic-bezier
      },
    },
  };

  return (
    <footer className="w-full bg-transparent text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Logo Section - Centered on mobile */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center md:items-start gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 font-bold text-lg">
                A
              </div>
              <span className="text-2xl font-bold tracking-tight">Aora</span>
            </div>
            <p className="text-zinc-400 text-sm md:max-w-xs text-center md:text-left">
              Building the future of innovation.
            </p>
          </motion.div>

          {/* Address Section - Centered on mobile */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center md:items-end text-center md:text-right text-sm md:text-base text-zinc-300 space-y-1"
          >
            <p className="font-semibold text-white mb-1">Our Office</p>
            <p>123 Innovation Street</p>
            <p>Tech City, TC 45678</p>
            <p>United States</p>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8  border-white/5 text-center text-xs text-zinc-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          © {year.curYear} Aora. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
