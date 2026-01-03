import React from 'react'

const Cta = React.forwardRef((props, ref) => {
  return (
    <div 
    ref={ref}
    data-text={`Partner with Us to Build a Sustainable Future...
      Let’s discuss how we can bring your ethanol project to life — efficiently, sustainably, and profitably....
      Schedule a Consultation
                `}
    className="flex flex-col py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-20 bg-gradient-to-b to-white from-pink-50">
          <div className="flex flex-col gap-5 items-center justify-center">
            <h2 className="text-[#061833] font-bold text-xl lg:text-4xl text-center">
              Partner with Us to Build a Sustainable Future
            </h2>
            <p className="text-center max-w-2xl">
              Let’s discuss how we can bring your ethanol project to life —
              efficiently, sustainably, and profitably.
            </p>

            <div className="flex justify-center mt-3">
              <button className="bg-[#061833] rounded-full px-6 sm:px-8 lg:px-7 py-2.5 sm:py-3 text-sm sm:text-base lg:text-base font-bold text-pink-50 w-fit cursor-pointer hover:bg-[#0a2850] transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
  )
})

export default Cta