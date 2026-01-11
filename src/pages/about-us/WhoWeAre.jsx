import Image from 'next/image'
import React from 'react'

const WhoWeAre = React.forwardRef((props, ref) => {
  return (
    <div
    ref={ref}
    data-text={`Who We Are......
      NSEPC Consultants India Private Limited is a trusted Engineering,
                Procurement & Construction (EPC) partner with 18+ years of
                experience delivering turnkey ethanol distillery projects across
                India. We combine engineering precision, policy alignment, and
                sustainable design to help industries lead the clean energy
                transition......
      With deep expertise in grain-based ethanol distilleries, Zero Liquid
      Discharge (ZLD) systems, and industrial infrastructure, we specialize
      in designing and executing end-to-end EPC projects aligned with India’s
      Ethanol Blending Program (EBP)......

     50+ Projects Delivered, 18+ Years Experience, 100 to 1000 KLPD Capacity Range


                `}
     className="relative flex flex-col lg:flex-row items-center gap-12 py-20 px-6 sm:px-10 md:px-16 lg:px-20 bg-white">
          {/* Left Side */}
          <div className="flex flex-col w-full lg:w-1/2 relative">
            {/* Accent Line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-pink-200 to-[#061833] rounded-full" />

            <div className="pl-6 flex flex-col gap-6">
              <h2 className="text-[#061833] font-bold text-2xl lg:text-4xl">
                Who We Are
              </h2>
              <p className="">
                N.S. EPC Consultants India Pvt. Ltd. is a trusted Engineering,
                Procurement & Construction (EPC) partner with 18+ years of
                experience delivering turnkey ethanol distillery projects across
                India. We combine engineering precision, policy alignment, and
                sustainable design to help industries lead the clean energy
                transition.
              </p>
              <p>
      With deep expertise in grain-based ethanol distilleries, Zero Liquid
      Discharge (ZLD) systems, and industrial infrastructure, we specialize
      in designing and executing end-to-end EPC projects aligned with India’s
      Ethanol Blending Program (EBP).
    </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {[
                  { label: "Projects Delivered", value: "50+" },
                  { label: "Years Experience", value: "18+" },
                  { label: "Capacity Range", value: "100–1000 KLPD" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center text-center bg-pink-50 rounded-lg p-4 shadow-sm"
                  >
                    <h3 className="text-[#061833] font-bold text-2xl">
                      {stat.value}
                    </h3>
                    <p className="text-gray-600 text-md">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Video */}
          <div className="w-full lg:w-1/2 relative h-[450px] overflow-hidden">
        
            <div className="relative inset-0 w-full h-full object-contain">

                  <Image
                             src="/assets/epc.png"
                             alt="EPC"
                             fill
                             priority
                             className="object-contain"
                           />
            </div>
          </div>
        </div>
  )
})

export default WhoWeAre