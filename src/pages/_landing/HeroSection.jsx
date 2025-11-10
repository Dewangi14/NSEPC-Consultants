// // import Header from "@/components/Header";
// // import React from "react";

// // const HeroSection = () => {
// //   return (
// //     <div className="flex flex-col bg-[url(/assets/banner-image-bw.jpg)] h-screen bg-[length:cover] bg-center bg-no-repeat bg-fixed relative">
// //       <div className="absolute inset-0 bg-black/35 pointer-events-none z-0"></div>

// //       <div className="fixed top-0 w-full z-10">
// //         <Header />
// //       </div>
// //         <div className="flex min-h-full">
// //         <div className="w-2/5 bg-[#061833]/70 min-h-full flex items-center justify-center relative">
// //           <div className="absolute text-pink-50 font-bold text-4xl xl:text-5xl xl:leading-[4rem] xl:tracking-tight px-8 flex flex-col gap-5">
// //             Building India’s Clean Energy Future, One Project at a Time

// //             <div className="w-fit mt-5">
// //         <button className="border border-pink-50 rounded-full  px-5 xl:px-10 py-2.5 xl:py-3 text-sm xl:text-xl font-bold text-pink-100 cursor-pointer mx-auto w-full">
// //         Request a Consultation
// //         </button>
// //       </div>
// //           </div>
// //         </div>
// //         <div className="w-3/5"></div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HeroSection;

// "use client";

// import Header from "@/components/Header";
// import React from "react";
// import FadeInFromBottom from "@/components/animations/FadeInFromBottom";

// const HeroSection = () => {
//   return (
//     <div className="relative flex flex-col bg-[url(/assets/banner-image-bw.jpg)] h-screen bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden">
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/35 pointer-events-none z-0"></div>
//       {/* Content */}
//       <div className="flex flex-col md:flex-row min-h-full">
//         {/* Left Content */}
//         <div className="lg:w-1/2 xl:w-2/5 w-full bg-[#061833]/70 min-h-full lg:min-h-[60vh] md:min-h-full flex items-center justify-center md:justify-start relative">
//           <div className="absolute md:static text-pink-50 font-bold text-3xl sm:text-4xl lg:text-5xl xl:leading-[4rem] xl:tracking-tight px-6 sm:px-10 flex flex-col gap-5 text-center md:text-left">

//             {/* Animated Text */}
//             <FadeInFromBottom duration={1}>
//               Building India’s Clean Energy Future, One Project at a Time
//             </FadeInFromBottom>

//             {/* Animated Button */}
//             <FadeInFromBottom delay={0.3} distance={40}>
//               <div className="w-fit mx-auto md:mx-0 mt-5">
//                 <button className="border border-pink-50 rounded-full px-6 sm:px-8 lg:px-10 py-2.5 lg:py-3 text-sm sm:text-base lg:text-xl font-bold text-pink-100 cursor-pointer hover:bg-pink-50 hover:text-[#061833] transition-all duration-300">
//                   Request a Consultation
//                 </button>
//               </div>
//             </FadeInFromBottom>
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="md:w-3/5 hidden md:block"></div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


"use client";

import Header from "@/components/Header";
import React from "react";
import FadeInFromBottom from "@/components/animations/FadeInFromBottom";
import { useRouter } from "next/router";

const HeroSection = () => {
  const router = useRouter();
  return (
    <div className="relative flex flex-col h-screen overflow-hidden -z-10">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-[-1]"
        autoPlay
        loop
        muted
        playsInline
        // Optional: preload for smoother playback
        preload="auto"
        // Optional: controls if needed (remove if not)
        // controls
        style={{
          transform: "translateZ(0)", // helps maintain GPU-accelerated smooth scroll
          backgroundAttachment: "fixed",
        }}
      >
        <source src="/assets/factory-video.mp4" type="video/mp4" />
        {/* Fallback for browsers that don’t support video */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-0"></div>

      {/* Content */}
      <div className="flex flex-col md:flex-row min-h-full relative z-10">
        {/* Left Content */}
        <div className="lg:w-1/2 xl:w-2/5 w-full bg-[#061833]/70 min-h-full lg:min-h-[60vh] md:min-h-full flex items-center justify-center md:justify-start relative">
          <div className="absolute md:static text-pink-50 font-bold text-3xl sm:text-4xl lg:text-5xl xl:leading-[4rem] xl:tracking-tight px-6 sm:px-10 flex flex-col gap-5 text-center md:text-left">
            
            {/* Animated Text */}
            <FadeInFromBottom duration={1}>
              Building India’s Clean Energy Future, One Project at a Time
            </FadeInFromBottom>

            {/* Animated Button */}
            <FadeInFromBottom delay={0.3} distance={40}>
              <div className="w-fit mx-auto md:mx-0 mt-5 z-10">
                <button className="border border-pink-50 rounded-full px-6 sm:px-8 lg:px-10 py-2.5 lg:py-3 text-sm sm:text-base lg:text-xl font-bold text-pink-100 cursor-pointer hover:bg-pink-50 hover:text-[#061833] transition-all duration-300" onClick={()=>{router.push('/#contact')}}>
                  Request a Consultation
                </button>
              </div>
            </FadeInFromBottom>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-3/5 hidden md:block"></div>
      </div>
    </div>
  );
};

export default HeroSection;
