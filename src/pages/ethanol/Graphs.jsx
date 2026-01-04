import React from 'react'
import { motion } from "framer-motion";
const Graphs = React.forwardRef((props, ref) => {
  return (
    <div
    ref={ref}
    data-text={`Effects of Landmark Reforms.....
      Chart number One represents - Ethanol blending % has increased more than 6 times in last few years.
        Chart number Two represents - Ethanol %age contribution from different feed stocks.
                `}
     className="flex flex-col">
          
    <section className="py-16 lg:py-20 px-6 lg:px-20 bg-gradient-to-b to-pink-50 from-white">

      <div className="max-w-6xl mx-auto pb-5">
      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[#061833] font-bold text-3xl lg:text-4xl text-left mb-4"
      >
       Effects of Landmark Reforms
      </motion.h3>
    
      </div>
      <div className="max-w-6xl mx-auto pb-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full justify-start">

        <div className="flex flex-col gap-5 justify-start">

          <h2 className="text-lg font-medium">
          1) &nbsp; Ethanol blending % has increased more than 6 times in last few years
          </h2>

        <img
          className="w-full h-full object-contain"
          src="/assets/ethanol-fuel-blending.png"
        />
        </div>
        <div className="flex flex-col gap-5 justify-start">

          <h2 className="text-lg font-medium">
          2) &nbsp; Ethanol %age contribution from different feed stocks
          </h2>

        <img
          className="w-full h-full object-contain"
         src="/assets/piechart.jpg"
        />
         
        </div>
      
        </div>
      </div>
      
    </section>
  
  </div>
  )
})

export default Graphs