import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, animate, useInView } from "framer-motion";

export default function Counter({ from = 0, to = 100, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); 
  const count = useMotionValue(from);
  const [displayCount, setDisplayCount] = useState(from);

  useEffect(() => {
    let animation;
    if (isInView) {
      animation = animate(count, to, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayCount(Math.floor(latest)),
      });
    }
    return () => animation && animation.stop();
  }, [isInView, to, duration]);

  return (
    <motion.span ref={ref}>
      {displayCount}
    </motion.span>
  );
}
