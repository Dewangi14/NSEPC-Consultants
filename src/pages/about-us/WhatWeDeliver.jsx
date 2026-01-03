import React from 'react'
import { motion } from "framer-motion";
import { FaCogs, FaRecycle, FaChartLine, FaMapMarkedAlt, FaBuilding } from "react-icons/fa";

const WhatWeDeliver = React.forwardRef((props, ref) => {
    const processSteps = 
    [
      {
      "icon": <FaBuilding />,
      "title": "Mega Factories",
      "desc": "Specializing in high-value industrial setups, we develop mega manufacturing units for ethanol projects above ₹100 crore, ensuring optimal land use, efficient plant layouts, and robust infrastructure engineered for high-capacity production and long-term operational stability."
      },
      {
      "icon": <FaCogs />,
      "title": "Turnkey EPC Solutions",
      "desc": "From initial feasibility and detailed engineering to procurement, construction, and commissioning, we deliver fully integrated turnkey EPC solutions designed for accuracy, project transparency, and seamless execution with minimal client intervention."
      },
      {
      "icon": <FaRecycle />,
      "title": "Sustainable Designs",
      "desc": "Every project is developed with a strong commitment to environmental responsibility, incorporating Zero Liquid Discharge (ZLD), waste minimization, and sustainable process engineering that aligns with evolving regulatory and future industry requirements."
      },
      {
      "icon": <FaChartLine />,
      "title": "Optimized ROI",
      "desc": "Our engineering approach focuses on maximizing plant output, lowering operational cost, enhancing efficiency, and ensuring faster payback cycles, allowing clients to achieve superior long-term profitability and business value from every project."
      },
      {
      "icon": <FaMapMarkedAlt />,
      "title": "Nationwide Expertise",
      "desc": "With ethanol and biofuel facilities executed across multiple states in India, we bring extensive regional understanding, proven on-ground experience, and consistent project delivery that ensures high-quality results regardless of project scale or location."
      }]  
  return (
    <section
    ref={ref}
    data-text={`What We Deliver......
      1. Mega Factories .......
      2. Turnkey EPC Solutions .......
      3. Sustainable Designs .......
      4. Optimized ROI .......
      5. Nationwide Expertise .......
      `}
     className="relative bg-gradient-to-b from-white to-pink-50 py-20 px-6 sm:px-10 md:px-16 lg:px-20">
    <h2 className="text-[#061833] text-3xl lg:text-4xl font-bold mb-16 text-left">
      What We Deliver
    </h2>

    <div className="relative max-w-5xl mx-auto">
      {/* Vertical Connecting Line */}
      <motion.div
        className="absolute left-6 top-0 w-[3px] bg-gradient-to-b from-pink-200 to-[#061833] rounded-full"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 4, ease: "easeOut" }}
      />

      <div className="space-y-16">
        {processSteps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative flex items-start pl-16"
          >
            {/* Circle Icon */}
            <div className="absolute left-[0.7rem] top-1 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md ring-4 ring-pink-100 text-pink-200 text-xl z-10">
              {item.icon}
            </div>

            {/* Card Content */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition-all">
              <h3 className="text-[#061833] text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
})

export default WhatWeDeliver