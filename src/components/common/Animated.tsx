"use client";

import { motion } from "framer-motion";

interface AnimatedProps {
  children: React.ReactNode;
}

export function Animated({ children }: AnimatedProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  );
}
