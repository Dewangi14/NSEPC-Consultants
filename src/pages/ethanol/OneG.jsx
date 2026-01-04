import React from 'react'
import { motion } from "framer-motion";
const OneG = React.forwardRef((props, ref) => {
  return (
    <section 
    ref={ref}
    data-text={`Integrated Bio-Refinery Model. One G Ethanol (Grain-Based).....
      Conventional ethanol from sugarcane, maize and other grains.
        One G ethanol uses conventional carbohydrate feedstocks
          (sugarcane juice, syrup, maize) that are fermented and
          distilled. Quick ramp-up, proven technology and widely adopted
          across India.
                `}
    className="py-16 lg:py-20 px-6 lg:px-20 bg-white">

    <div className="max-w-6xl mx-auto pb-5">
    <motion.h3
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-[#061833] font-bold text-3xl lg:text-4xl text-left mb-4"
    >
      Integrated Bio-Refinery Model
    </motion.h3>
    </div>
    
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      
      <div className="order-1 lg:order-1 py-10">
        <h3 className="text-[#061833] font-bold text-lg lg:text-xl text-left mb-6">
          1G Ethanol (Grain-Based)
        </h3>

        <p className="text-slate-700 mb-4 font-semibold">
          Conventional ethanol from sugarcane, maize and other grains.
        </p>

        <p className="text-slate-700 mb-4">
          1G ethanol uses conventional carbohydrate feedstocks
          (sugarcane juice, syrup, maize) that are fermented and
          distilled. Quick ramp-up, proven technology and widely adopted
          across India.
        </p>
      </div>

      <div className="order-1 lg:order-1 w-full h-full flex justify-start">
        <img
          className="w-full h-full object-cover"
          src="/assets/1g-diagram.png"
        />
      </div>
    </div>
  </section>
  )
})

export default OneG