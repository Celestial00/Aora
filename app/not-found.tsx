"use client";

import { motion, cubicBezier } from "framer-motion";
import Link from "next/link";
import Typography from "./components/common/Typography";

export default function NotFound() {
  const ease = cubicBezier(0.2, 0.65, 0.3, 0.9);

  return (
    <main className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden ">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease }}
        className="space-y-6"
      >
        {/* Error Code */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-indigo-400 text-xs font-mono tracking-widest uppercase">
            Error 404
          </span>
        </motion.div>

        {/* Main Text */}
        <Typography
          variant="custom"
          className="text-7xl md:text-9xl font-bold tracking-tighter text-white"
        >
          Lost in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-indigo-700">
            Space.
          </span>
        </Typography>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-md mx-auto text-zinc-500 text-lg md:text-xl font-light"
        >
          The page you are looking for has been moved or doesn't exist in our
          current dimension.
        </motion.p>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="pt-8"
        >
          <Link href="/">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(79, 70, 229, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black rounded-full font-bold transition-all"
            >
              Return Home
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative Grid or Grain (Optional) */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent)] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
