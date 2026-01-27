"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../main/ContactForm"; // Using your animated form
import Typography from "../common/Typography";
import { Mail, MapPin, Phone } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ContactPage() {
  return (
    <main className="w-full  bg-transparent text-white pt-10 pb-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Side: Editorial Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-12"
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]"
            >
              Let's build <br />
              <span className="text-white/20 italic">the future.</span>
            </Typography>
            <p className="mt-8 text-white/50 text-lg max-w-md">
              Have a vision? We have the engineering expertise to make it a
              reality. Reach out and let's start a conversation.
            </p>
          </motion.div>


          <motion.div variants={itemVariants} className="space-y-6 pt-8">
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40 font-bold">
                  Email Us
                </p>
                <p className="text-xl font-medium">hello@aora.studio</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40 font-bold">
                  Office
                </p>
                <p className="text-xl font-medium">Tech City, TC 45678</p>
              </div>
            </div>
          </motion.div>


          <motion.div variants={itemVariants} className="pt-10 md:flex-row flex-col justify-center   flex gap-8">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="md:text-xs text-lg  uppercase tracking-[0.2em] font-bold text-white/30 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
              >
                {social}
              </a>
            ))}
          </motion.div>
        </motion.div>

    
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative"
        >
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/5 blur-[120px] rounded-full" />

          <ContactForm />
        </motion.div>
      </div>
    </main>
  );
}
