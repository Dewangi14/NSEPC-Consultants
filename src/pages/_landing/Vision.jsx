// import React from 'react'

// const Vision = () => {
//   return (
//     <div className="flex flex-row-reverse bg-[url(/assets/vision-bg.jpeg)] bg-no-repeat bg-cover h-full relative w-full py-20">
//  <div className="absolute inset-0 bg-pink-50/90 pointer-events-none z-0"></div>
//     <div className="flex flex-col gap-5 w-7/12 py-20 px-20 bg-[#061833] text-white relative text-right">
//       <div className="heading-text">VISION</div>
    
//       <div className="w-full flex flex-row-reverse">
//       <div className="font-light text-sm xl:text-lg w-2/3 flex flex-row-reverse">
//         At N.S. EPC Consultants India Pvt. Ltd., our mission is to transform
//         India’s ethanol and renewable energy landscape through end-to-end
//         Engineering, Procurement, and Construction (EPC) solutions. With
//         over 18 years of expertise, we deliver turnkey projects that
//         prioritize operational excellence, sustainability, and regulatory
//         compliance. 
//       </div>
    
//       </div>
    
    
//       {/* Image */}
    
//       <div className="absolute -left-30 top-10 xl:top-12">
    
//         <img src="/assets/vision-bg.jpeg" className="w-72 h-72 xl:w-80 xl:h-80 rounded-md image-shadow object-cover"/>
    
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Vision

import FadeInFromLeft from "@/components/animations/FadeInFromLeft";
import FadeInFromRight from "@/components/animations/FadeInFromRight";
import React from "react";

const Vision = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} 
    data-text={"Vision. At N.S. EPC Consultants India Private Limited, our vision is to be a trusted global EPC partner in ethanol and biofuel infrastructure development. We aspire to create large-scale, future-ready facilities that drive sustainable growth, technological excellence, and long-term value for our clients across energy-driven industries."}
    className="relative flex flex-row-reverse py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-0 bg-[url(/assets/vision-bg.jpeg)] bg-no-repeat bg-cover h-full w-full">
      {/* Overlay */}
      <div className="absolute inset-0 bg-pink-50/90 pointer-events-none z-0"></div>

      {/* Content */}
      <div className="relative flex flex-col gap-5 w-full lg:w-7/12 py-10 md:py-16 xl:py-20 px-10 md:px-16 xl:px-20 bg-[#061833] text-white text-right">
        <div className="heading-text">VISION</div>

        <div className="w-full flex flex-row-reverse">

  

          <div className="font-light text-sm sm:text-base xl:text-lg w-full lg:w-2/3 flex flex-row-reverse leading-relaxed">
          <FadeInFromRight>
          At N.S. EPC Consultants India Pvt. Ltd., our vision is to be a trusted global EPC partner in ethanol and biofuel infrastructure development. We aspire to create large-scale, future-ready facilities that drive sustainable growth, technological excellence, and long-term value for our clients across energy-driven industries.
          </FadeInFromRight>
          </div>
        
        </div>

        {/* Desktop / Tablet Image */}
        <div className="absolute -left-28 top-10 xl:top-12 hidden lg:block">
          <FadeInFromLeft duration={0.4}>
          <img
            src="/assets/vision-bg.jpeg"
            className="w-72 h-72 xl:w-80 xl:h-80 rounded-md image-shadow object-cover"
            alt="Vision"
          />
          </FadeInFromLeft>
        </div>

          {/* Mobile Image (shown only below text on small screens) */}
      <div className="flex lg:hidden mt-5 w-full justify-center">
      <FadeInFromLeft duration={0.4}>
        <img
          src="/assets/vision-bg.jpeg"
          className="w-64 h-64 rounded-md image-shadow object-cover"
          alt="Vision"
        />
      </FadeInFromLeft>
      </div>
      </div>

    
    </div>
  );
});

export default Vision;
