import React from 'react'
import { motion } from "framer-motion";
import {} from "react-icons/fa";
import {
  FaCheckCircle,
} from "react-icons/fa";

const Strengths = React.forwardRef((props, ref) => {
    const strengths = [
        {
          title: "Turnkey EPC Solutions",
          desc: "End-to-end project execution — from concept to commissioning with complete compliance support.",
        },
        {
          title: "ZLD-Compliant Design",
          desc: "100% Zero Liquid Discharge systems engineered for sustainability and efficiency.",
        },
        {
          title: "18+ Years of Expertise",
          desc: "Decades of experience delivering successful ethanol distillery and industrial projects across India.",
        },
        {
          title: "Government-Aligned Projects",
          desc: "Supporting India’s Ethanol Blending Program and national clean-energy initiatives.",
        },
        {
          title: "High ROI & Performance",
          desc: "Optimized designs ensuring faster payback and long-term profitability.",
        },
      ];
        // duplicate items for smooth infinite scroll
  const duplicated = [...strengths, ...strengths];
  return (
    <section 
    ref={ref}
    data-text={`Our Core Strengths...
     Turnkey EPC Solutions. ZLD-Compliant Design. Eighteen+ Years of Expertise. Government-Aligned Projects. High ROI & Performance.
                `}
    className="py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden bg-gradient-to-b to-white from-pink-50">
    <div className="">
      <h2 className="text-[#061833] font-bold text-3xl lg:text-4xl mb-10 text-left">
        Our Core Strengths
      </h2>

      <div className="py-5 relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{
            x: ["0%", "-50%"], // move left halfway (since duplicated)
          }}
          transition={{
            duration: 10, // adjust speed here (bigger = slower)
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicated?.map((item, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-[350px] lg:min-w-[400px] bg-white shadow-md rounded-2xl px-6 py-10 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#061833] text-white">
                  <FaCheckCircle size={16} />
                </div>
                <h3 className="text-xl font-semibold text-[#061833]">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
  )
})

export default Strengths