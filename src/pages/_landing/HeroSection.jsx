// SLIDER
// "use client";

// import Header from "@/components/Header";
// import React, { useEffect, useState } from "react";
// import FadeInFromBottom from "@/components/animations/FadeInFromBottom";
// import { useRouter } from "next/router";
// import Image from "next/image";

// const carouselImages = [

//   "/assets/banner-image.jpeg",
//   "/assets/slider-7.jpeg",
//   "/assets/vision-bg.jpeg",
//   "/assets/mission-bg.jpeg",
//   "/assets/slider-3.jpeg",
//   "/assets/slider-4.jpeg",
//   "/assets/slider-5.jpeg",
//   "/assets/slider-6.jpeg",

 
// ]; // Add your hero images here

// const HeroSection = () => {
//   const router = useRouter();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto slide logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative flex flex-col h-screen overflow-hidden">
//       {/* Background Image Carousel */}
//       <div className="absolute inset-0 w-full h-full">
//         {carouselImages.map((src, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 w-full h-full transition-opacity duration-[1200ms] ease-in-out 
//             ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
//           >
//             <Image
//               src={src}
//               alt="hero"
//               fill
//               priority
//               className="object-cover object-center"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/20 pointer-events-none z-0"></div>

//       {/* Content */}
//       <div className="flex flex-col md:flex-row min-h-full relative z-5">
//         {/* Left Content */}
//         <div className="lg:w-1/2 xl:w-2/5 w-full bg-[#061833]/40 md:bg-[#061833]/70 min-h-full lg:min-h-[60vh] md:min-h-full flex items-center justify-center md:justify-start relative">
//           <div className="absolute md:static text-pink-50 font-bold text-3xl sm:text-4xl lg:text-5xl xl:leading-[4rem] xl:tracking-tight px-6 sm:px-10 flex flex-col gap-5 text-center md:text-left">
            
//             {/* Animated Text */}
//             <FadeInFromBottom duration={1}>
//               Building India’s Clean Energy Future, One Project at a Time
//             </FadeInFromBottom>

//             {/* Animated Button */}
//             <FadeInFromBottom delay={0.3} distance={40}>
//               <div className="w-fit mx-auto md:mx-0 mt-5 z-10">
//                 <button
//                   className="border border-pink-50 rounded-full px-6 sm:px-8 lg:px-10 py-2.5 lg:py-3 text-sm sm:text-base lg:text-xl font-bold text-pink-100 cursor-pointer hover:bg-pink-50 hover:text-[#061833] transition-all duration-300"
//                   onClick={() => {
//                     router.push("/#contact");
//                   }}
//                 >
//                   Request a Consultation
//                 </button>
//               </div>
//             </FadeInFromBottom>
//           </div>
//         </div>

//         {/* Right spacing panel (kept unchanged) */}
//         <div className="md:w-3/5 hidden md:block"></div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


"use client";

import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import FadeInFromBottom from "@/components/animations/FadeInFromBottom";
import { useRouter } from "next/router";
import Image from "next/image";

const carouselImages = [
  "/assets/sdr-3.jpg",
  "/assets/sdr-1.jpg",
  "/assets/sdr-2.jpg",
  "/assets/sdr-4.jpg",
  "/assets/sdr-5.jpg",
  "/assets/banner-image.jpeg",
  "/assets/slider-7.jpeg",
  "/assets/vision-bg.jpeg",
  "/assets/mission-bg.jpeg",
  "/assets/about-us.png",
  "/assets/slider-4.jpeg",
  // "/assets/slider-5.jpeg",

];

const HeroSection = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {carouselImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[1200ms] ease-in-out 
            ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={src}
              alt="hero"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#061833] pointer-events-none z-0"></div>

      {/* CONTENT (Revised – now overlays image like screenshot) */}
      <div className="relative z-1 flex items-center h-full px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="w-full flex flex-col gap-3 text-center items-center pt-40">

          {/* Featured Tag (Optional - mimic screenshot style) */}
          <FadeInFromBottom duration={0.8}>
            <div className="uppercase text-sm tracking-widest text-white/80 text-shadow-2xl">
              NSEPC Consultants India Pvt Ltd
            </div>
          </FadeInFromBottom>

          {/* Main Heading */}
          <FadeInFromBottom duration={1}>
            <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight  max-w-2xl">
              Building India’s Clean Energy Future
            </h1>
          </FadeInFromBottom>

          {/* CTA Button */}
          <FadeInFromBottom delay={0.3} distance={40}>
            <button
              className="mt-4 rounded-full px-6 sm:px-8 lg:px-10 py-2.5  
              text-sm sm:text-base lg:text-md font-semibold bg-pink-50 text-[#061833]
              transition-all duration-300 w-fit"
              onClick={() => router.push("/payment")}
            >
              Request a Consultation
            </button>
          </FadeInFromBottom>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
