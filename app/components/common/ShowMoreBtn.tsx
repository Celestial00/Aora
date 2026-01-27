"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
// Assuming Typography is your custom component;
// if not, replace with a span or p tag.
// import { Typography } from "./your-path";

export default function ShowMoreButton() {
  return (
    <motion.div
      className="w-full flex justify-center items-center mt-10 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.button
        whileHover="hover"
        className="group flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 transition-colors cursor-pointer"
      >
      
        <span className="text-zinc-400 group-hover:text-white transition-colors font-medium">
          Show more...
        </span>

    
        <motion.div
          variants={{
            hover: { y: 3 },
            initial: { y: 0 },
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="text-indigo-400"
        >
          <ChevronDown size={20} strokeWidth={2.5} />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
