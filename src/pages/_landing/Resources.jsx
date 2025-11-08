// import React from 'react'

// const Resources = () => {
//   return (
//        <div className="flex flex-col gap-20 bg-pink-50 py-20 px-20 items-center text-[#061833]">
//          <div className="section-heading-text">
//            RESOURCES
//            <div className="h-1 w-full bg-gradient-to-r from-[#061833] to-white"></div>
//          </div>
   
//          <div className="grid grid-cols-4 gap-2 w-full">

//             <div className='flex flex-col gap-3'>

//                 <div className='h-56'>

//                     <img src='/assets/banner-image.jpeg' className='w-full h-full rounded-3xl'/>

//                 </div>

//                 <div className='flex flex-col gap-1'>

//                     <div className='font-semibold text-black'>

//                         Fully Automatic Fuel Ethanol

//                     </div>

//                     <div className='font-light text-sm'>

//                     It is a long established fact that a reader will be distracted by the readable content

//                     </div>
//                 </div>

                 
//             </div>


//          </div>
//        </div>
//   )
// }

// export default Resources


"use client"
import FadeInFromBottom from "@/components/animations/FadeInFromBottom"
import React from "react"

const Resources = () => {
  // Example list of YouTube video URLs
  const videos = [
    "https://www.youtube.com/embed/OX_v_qtVy1g?si=CgEng4Od0zhelQiq",
    "https://www.youtube.com/embed/pQrnHYJteOQ?si=arjoWmyF8cPcsoTU",
    "https://www.youtube.com/embed/DKHkI9xU1yY?si=woe4-plX_5ilozjf",
    "https://www.youtube.com/embed/DKHkI9xU1yY?si=woe4-plX_5ilozjf"
  ]

  return (
    <div className="flex flex-col gap-10 lg:gap-20 bg-pink-50 py-20 px-10 md:px-20" id="resources">
      {/* Section Title */}
      
         <div className="section-heading-text mx-auto">
          OUR RESOURCES
            <div className="h-1 w-full bg-gradient-to-r from-[#061833] to-white"></div>
          </div>
        <div className="text-start font-light w-full text-xs md:text-md lg:text-lg">
        <FadeInFromBottom distance={30}>
        Explore our Resource Hub for expert insights and project highlights from N.S. EPC Consultants India Pvt. Ltd., a leading name in Engineering, Procurement, and Construction (EPC).
Learn more about our grain-based ethanol distillery projects, Zero Liquid Discharge (ZLD) solutions, and turnkey plant execution expertise.
Stay informed with the latest updates on the Ethanol Blending Program (EBP) and discover opportunities driving India’s clean energy growth.
        </FadeInFromBottom>
        </div>
 

      {/* Video Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {videos.map((src, index) => (

          <FadeInFromBottom distance={20} duration={0.5}>
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-t-2xl"
                src={src}
                title={`Resource Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[#061833] mb-2">
                Video Title {index + 1}
              </h3>
              <p className="text-gray-600 text-xs lg:text-sm">
                A short description about this video and how it helps our clients or explains our consulting approach.
              </p>
            </div>
          </div>
          </FadeInFromBottom>
        ))}
      </div>
    </div>
  )
}

export default Resources
