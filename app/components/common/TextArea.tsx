"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function TextArea({
  label,
  value,
  onChange,
  placeholder,
}: TextAreaProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <label
        className={`mb-1 text-sm font-medium transition-colors duration-300 ${
          isFocused ? "text-indigo-400" : "text-white"
        }`}
      >
        {label}
      </label>
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full min-h-30 px-3 py-2 bg-transparent border rounded-sm text-white placeholder:text-white/40 outline-none transition-all duration-300 resize-none"
          style={{
            borderColor: isFocused ? "#818cf8" : "rgba(255, 255, 255, 0.2)",
            boxShadow: isFocused ? "0 0 15px rgba(129, 140, 248, 0.2)" : "none",
          }}
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isFocused ? 1 : 0 }}
          className="absolute bottom-0 left-0 h-0.5 w-full bg-indigo-400 origin-left"
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}
