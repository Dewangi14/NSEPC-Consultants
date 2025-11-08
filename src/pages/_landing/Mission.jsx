// import FadeInFromLeft from "@/components/animations/FadeInFromLeft";
// import Image from "next/image";
// import React from "react";

// const MissionVision = () => {
//   return (

//     <div className="py-20 bg-[url(/assets/mission-bg.jpeg)] bg-center h-full relative">
//             <div className="absolute inset-0 bg-[#061833]/90 pointer-events-none z-0"></div>
//       <div className="flex flex-col gap-20">
//         <div className="flex flex-col gap-5 w-7/12 py-20 px-20 bg-pink-50 text-[#061833] relative">
//           <div className="heading-text">MISSION</div>

//           <FadeInFromLeft>

//           <div className="font-light text-sm xl:text-lg w-2/3">
//             At N.S. EPC Consultants India Pvt. Ltd., our mission is to transform
//             India’s ethanol and renewable energy landscape through end-to-end
//             Engineering, Procurement, and Construction (EPC) solutions. With
//             over 18 years of expertise, we deliver turnkey projects that
//             prioritize operational excellence, sustainability, and regulatory
//             compliance. 
//           </div>
//           </FadeInFromLeft>

//           {/* Image */}

//           <div className="absolute -right-30 top-10 xl:top-12">

//             <img src="/assets/mission-bg.jpeg" className="w-72 h-72 xl:w-80 xl:h-80 rounded-md image-shadow object-center"/>

//           </div>
//         </div>
//       </div>

      
//     </div>

//   );
// };

// export default MissionVision;


import FadeInFromLeft from "@/components/animations/FadeInFromLeft";
import FadeInFromRight from "@/components/animations/FadeInFromRight";
import React from "react";

const MissionVision = () => {
  return (
    <div className="py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-0 bg-[url(/assets/mission-bg.jpeg)] bg-center bg-cover relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#061833]/90 pointer-events-none z-0"></div>

      <div className="relative flex flex-col items-center lg:items-start">
        {/* Content box */}
        <div className="flex flex-col gap-5 w-full lg:w-7/12 py-10 md:py-16 xl:py-20 px-10 md:px-16 xl:px-20 bg-pink-50 text-[#061833] relative mx-10 lg:mx-0">
          <div className="heading-text">MISSION</div>

          <FadeInFromLeft>
            <div className="font-light text-sm sm:text-base xl:text-lg w-full lg:w-2/3 leading-relaxed">
              At N.S. EPC Consultants India Pvt. Ltd., our mission is to
              transform India’s ethanol and renewable energy landscape through
              end-to-end Engineering, Procurement, and Construction (EPC)
              solutions. With over 18 years of expertise, we deliver turnkey
              projects that prioritize operational excellence, sustainability,
              and regulatory compliance.
            </div>
          </FadeInFromLeft>

          {/* Image */}
          <div className="absolute right-5 md:-right-10 lg:-right-20 xl:-right-28 top-5 md:top-8 xl:top-12 hidden lg:block">
            <FadeInFromRight duration={0.4}>
            <img
              src="/assets/mission-bg.jpeg"
              className="w-56 h-56 md:w-64 md:h-64 xl:w-80 xl:h-80 rounded-md object-cover image-shadow"
              alt="Mission"
            />
            </FadeInFromRight>
          </div>

            {/* Mobile image (appears below text) */}
        <div className="block lg:hidden mt-5 mx-auto">
        <FadeInFromRight distance={50} delay={0.3}>
          <img
            src="/assets/mission-bg.jpeg"
            className="w-64 h-64 rounded-md object-cover image-shadow"
            alt="Mission"
          />
        </FadeInFromRight>
        </div>
        </div>

      
      </div>
    </div>
  );
};

export default MissionVision;
