"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { Code2 } from "lucide-react";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  // Use Motion Values for smooth tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Add spring physics to make the cursor feel "high-end" and fluid
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHoverStart = (e: MouseEvent) => {
      // Check if the hovered element is a link, button, or input
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleHoverStart);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleHoverStart);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* The Cursor Point */}
      <motion.div
        animate={{
          width: isHovering ? 45 : 10,
          height: isHovering ? 45 : 10,
          backgroundColor: isHovering
            ? "rgba(255, 255, 255, 1)"
            : "rgba(255, 255, 255, 0.8)",
        }}
        className="rounded-full flex items-center justify-center overflow-hidden"
      >
        {/* The Code Icon - Only visible when hovering */}
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-black"
          >
            <Code2 size={20} strokeWidth={3} />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
