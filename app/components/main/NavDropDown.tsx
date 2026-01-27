"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/servicesData.js";

export default function NavDropDown({ open }: { open: boolean }) {
  const [active, setActive] = useState(services[0]);

  return (
    <div
      className={`
        absolute left-0 top-full w-full
        px-10 py-5 md:px-30 md:py-8
        /* 1. Glassmorphism: Semi-transparent bg + backdrop-blur */
        bg-zinc-900/80 backdrop-blur-xl
        border-b border-zinc-800
        shadow-2xl
        transition-all duration-300 ease-out
        ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }
      `}
    >
      <div className="max-w-7xl  flex">
        {/* Services List */}
        <div className="w-[40%] p-6 space-y-2 border-r border-zinc-800/50">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = active.id === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActive(service)}
                className={`
                  relative flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200
                  ${
                    isActive
                      ? "bg-zinc-800/50 text-indigo-400"
                      : "hover:bg-zinc-800/30 text-zinc-400 hover:text-zinc-200"
                  }
                `}
              >
                {/* Active Indicator Pill */}
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute left-0 w-1 h-6 bg-indigo-500 rounded-full"
                  />
                )}

                <div
                  className={`
                  w-10 h-10 flex items-center justify-center rounded-lg transition-colors
                  ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "bg-zinc-800 text-zinc-500"
                  }
                `}
                >
                  <Icon size={20} />
                </div>
                <span className="font-medium">{service.title}</span>
              </div>
            );
          })}
        </div>

        {/* Sub Services - Animated Transition */}
        <div className="w-[60%] p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -10, filter: "blur(8px)" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <h3 className="mb-6 text-3xl font-bold text-white tracking-tight">
                {active.title}
              </h3>

              <ul className="grid grid-cols-2 gap-x-12 gap-y-4">
                {active.subServices.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5 }}
                    className="group cursor-pointer flex items-center gap-2 text-zinc-400 transition-colors hover:text-indigo-400"
                  >
                    <div className="h-1 w-1 rounded-full bg-zinc-700 group-hover:bg-indigo-500 transition-colors" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
