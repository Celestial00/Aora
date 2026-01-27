"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutUs() {
  const containerRef = useRef(null);

  // Create a parallax effect for the background glow
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="relative overflow-hidden py-24 ">
      {/* Dynamic Background Glows */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-[10%] -left-[10%] w-[40%] h-[60%] "
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[60%] "
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ letterSpacing: "0.1em", opacity: 0 }}
              whileInView={{ letterSpacing: "0.2em", opacity: 1 }}
              className="inline-block mb-4 text-sm font-semibold text-indigo-400 uppercase"
            >
              About Us
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              We build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                scalable software
              </span>{" "}
              that powers modern businesses
            </h2>

            <div className="space-y-6 mt-8">
              <p className="text-lg text-zinc-400 leading-relaxed">
                We are a full-stack software development house specializing in
                high-performance web applications, cloud-native systems, and
                AI-driven solutions.
              </p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-zinc-500 border-l-2 border-indigo-500/30 pl-6 italic"
              >
                "Our mission is to turn complex problems into elegant, scalable
                products that deliver real business impact."
              </motion.p>
            </div>
          </motion.div>

          {/* Right Stats - Staggered entrance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              { label: "Projects Delivered", value: "120+" },
              { label: "Years of Experience", value: "8+" },
              { label: "Expert Engineers", value: "30+" },
              { label: "Client Satisfaction", value: "99%" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1, // Staggered entrance
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  borderColor: "rgba(129, 140, 248, 0.3)",
                }}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-md transition-colors shadow-2xl"
              >
                {/* Subtle internal glow on hover */}
                <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <h3 className="relative text-3xl md:text-4xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {item.value}
                </h3>
                <p className="relative mt-2 text-xs md:text-sm font-medium uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
