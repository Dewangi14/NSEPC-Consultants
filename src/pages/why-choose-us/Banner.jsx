import React from 'react'

const Banner = () => {
  return (
    <div className="relative w-full bg-[#061833] bg-[url(/assets/banner-image.jpeg)] bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden pt-40 pb-28 px-5 text-center flex flex-col justify-center items-center gap-8">
    {/* Overlay */}
    <div className="absolute inset-0 bg-[#061833]/70 pointer-events-none z-0"></div>
    <h1 className="z-5 text-white font-bold text-xl lg:text-4xl lg:w-1/2 mx-auto text-center">
      Building India’s Future with Reliable EPC Expertise
    </h1>
    <p className="text-white font-medium z-5">Home / Why Choose Us</p>
  </div>
  )
}

export default Banner