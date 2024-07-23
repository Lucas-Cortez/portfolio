"use client";

import { motion } from "framer-motion";

interface AnimatedProps {
  children: React.ReactNode;
}

export function Animated({ children }: AnimatedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
