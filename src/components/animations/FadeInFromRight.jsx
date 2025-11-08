"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInFromRight = ({ children, delay = 0, duration = 1, distance = 80 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // 👈 repeat when re-entered

  const variants = {
    hidden: { x: distance, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration, delay, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default FadeInFromRight;
