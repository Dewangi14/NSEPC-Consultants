import { useRouter } from 'next/router'
import React from 'react'

const Cta = React.forwardRef((props, ref) => {
    const router = useRouter()
  return (
    <div 
    ref={ref}
    data-text={`Ready to Begin Your Ethanol Project Journey?
    Connect with our EPC experts to plan, design, and build your
        ethanol distillery project efficiently and profitably... Schedule a Consultation.
                `}
    className="flex flex-col py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-20 bg-white">
    <div className="flex flex-col gap-5 items-center justify-center">
      <h2 className="text-[#061833] font-bold text-xl lg:text-4xl text-center">
        Ready to Begin Your Ethanol Project Journey?
      </h2>
      <p className="text-center max-w-2xl">
        Connect with our EPC experts to plan, design, and build your
        ethanol distillery project efficiently and profitably.
      </p>

      <div className="flex justify-center mt-3">
        <button onClick={()=>{router.push("/payment")}} className="bg-[#061833] rounded-full px-6 sm:px-8 lg:px-7 py-2.5 sm:py-3 text-sm sm:text-base lg:text-base font-bold text-pink-50 w-fit cursor-pointer hover:bg-[#0a2850] transition-all duration-300">
          Schedule a Consultation
        </button>
      </div>
    </div>
  </div>
  )
})

export default Cta