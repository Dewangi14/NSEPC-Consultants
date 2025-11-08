"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInFromBottom = ({ children, delay = 0, duration = 1, distance = 80, ease="easeOut" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" }); // 👈 repeat when re-entered

  const variants = {
    hidden: { y: distance, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration, delay, ease: ease },
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

export default FadeInFromBottom;
