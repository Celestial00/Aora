"use client";

import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

// Imports
import TextInput from "../common/TextInput";
import TextArea from "../common/TextArea";
import Checkbox from "../common/Checkbox";

interface FormData {
  name: string;
  email: string;
  project: string;
  checked: boolean;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    project: "",
    checked: false,
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            initial="hidden"
            animate="show"
            variants={{
              show: { transition: { staggerChildren: 0.1 } },
            }}
            onSubmit={handleSubmit}
            className="space-y-24" // Massive breathing room
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <motion.div variants={itemVariants}>
                <TextInput
                  label="Name"
                  value={formData.name}
                  onChange={(val: string) => updateField("name", val)}
                  placeholder="YOUR FULL NAME"
                  /* FORCE WHITE: text-white and placeholder-white */
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <TextInput
                  label="Email"
                  value={formData.email}
                  onChange={(val: string) => updateField("email", val)}
                  placeholder="EMAIL@ADDRESS.COM"
                />
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <TextArea
                label="Project"
                value={formData.project}
                onChange={(val: string) => updateField("project", val)}
                placeholder="DESCRIBE YOUR VISION..."
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center">
              <Checkbox
                label="I AGREE TO THE DATA PROCESSING POLICY"
                checked={formData.checked}
                onChange={(checked: boolean) => updateField("checked", checked)}
                // Label is pure white
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={!formData.checked}
                whileHover={formData.checked ? { gap: "4rem" } : {}}
                className={`
                  flex items-center flex-col md:flex-row gap-8 text-5xl md:text-7xl font-black tracking-tighter uppercase transition-all duration-700
                  ${formData.checked ? "text-white" : "text-white/10"}
                `}
              >
                <span className="relative">
                  Send Inquiry
                  {formData.checked && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute -bottom-4 left-0 w-full h-2 bg-white"
                    />
                  )}
                </span>

                <ArrowRight
                  size={80}
                  strokeWidth={1}
                  className={formData.checked ? "text-white" : "text-white/5"}
                />
              </motion.button>
            </motion.div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            className="py-40 flex flex-col items-start"
          >
            <h2 className="text-7xl md:text-[10rem] font-black text-white tracking-tighter uppercase leading-[0.8]">
              SENT <br />
              <span className="text-indigo-500">STAY TUNED.</span>
            </h2>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-20 text-white text-sm uppercase tracking-[0.4em] font-bold border-b-2 border-white pb-2"
            >
              Send Another
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
