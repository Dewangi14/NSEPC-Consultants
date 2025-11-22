// import FadeInFromBottom from "@/components/animations/FadeInFromBottom";
// import FadeInFromLeft from "@/components/animations/FadeInFromLeft";
// import FadeInFromRight from "@/components/animations/FadeInFromRight";
// import FadeInFromTop from "@/components/animations/FadeInFromTop";
// import React from "react";
// import { BiSolidQuoteLeft } from "react-icons/bi";
// import { BiSolidQuoteRight } from "react-icons/bi";
// import {
//   MdOutlineKeyboardDoubleArrowLeft,
//   MdOutlineKeyboardDoubleArrowRight,
// } from "react-icons/md";

// const Testimonials = () => {
//   return (
//     <div id={"clients"} className="flex flex-col gap-20 lg:gap-32 bg-pink-50 py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-20 items-center text-[#061833]">
//       <div className="section-heading-text">
//         WHAT CLIENTS SAY
//         <div className="h-1 w-full bg-gradient-to-r from-[#061833] to-white"></div>
//       </div>

//       <div className="bg-[#061833] relative overflow-visible w-11/12 lg:w-2/3 h-64 xl:h-80 image-shadow">
//         <div className="grid grid-cols-6 p-5 xl:p-8 gap-1 absolute bottom-5 -left-5 lg:bottom-10 lg:-left-10 image-shadow bg-white w-full h-64 xl:h-80 rounded-tl-4xl rounded-br-4xl rounded-tr-xl rounded-bl-xl">
//           <div className="flex justify-start items-start w-full col-span-1">
//             <FadeInFromLeft duration={0.5}>
//               <BiSolidQuoteLeft className="text-4xl md:text-[80px] xl:text-[100px]" />
//             </FadeInFromLeft>
//           </div>

//           <div className="flex flex-col gap-5 lg:gap-10 w-full col-span-4 items-center justify-center text-xs lg:text-sm xl:text-lg font-light ">
//             <div className="flex text-center">
//               N.S. EPC Consultants exceeded our expectations with their
//               attention to detail and project execution speed. Their team
//               handled everything seamlessly — from design to commissioning.
//             </div>

//             <div className="flex flex-col text-xs xl:text-base text-center">
//               <b className="uppercase">Rajesh Kumar</b>
//               <div className="uppercase text-stone-500">
//                 Project Head, GreenFuel Industries
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-end items-end w-full col-span-1">
//             <FadeInFromRight duration={0.5}>
//               <BiSolidQuoteRight className="text-4xl md:text-[80px] xl:text-[100px]" />
//             </FadeInFromRight>
//           </div>

//           <div className="absolute -bottom-7 left-2 md:bottom-5 md:-left-10 flex gap-1 items-center justify-center rounded-md md:rounded-xl bg-gradient-to-t from-pink-400 to-pink-300 px-1 lg:px-5 text-white w-fit">
//             <div className="border-r-2 border-white px-4 md:px-2 py-4">
//               <MdOutlineKeyboardDoubleArrowLeft className="text-lg md:text-3xl" />
//             </div>

//             <div className="px-4 md:px-2 py-4">
//               <MdOutlineKeyboardDoubleArrowRight className="text-lg md:text-3xl" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;


"use client";

import FadeInFromBottom from "@/components/animations/FadeInFromBottom";
import FadeInFromLeft from "@/components/animations/FadeInFromLeft";
import FadeInFromRight from "@/components/animations/FadeInFromRight";
import FadeInFromTop from "@/components/animations/FadeInFromTop";
import React, { useState } from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { BiSolidQuoteRight } from "react-icons/bi";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const testimonials = [
  {
    text: `N.S. EPC Consultants exceeded our expectations with their
    attention to detail and project execution speed. Their team
    handled everything seamlessly — from design to commissioning.`,
    name: "Rajesh Kumar",
    designation: "Project Head, GreenFuel Industries",
  },
  {
    text: `Their expertise in ethanol plant execution is unparalleled. We were impressed with the clarity, commitment, and professionalism.`,
    name: "Vikram Sharma",
    designation: "Director, BioTech Renewables",
  },
  {
    text: `A reliable partner who understands the EPC space deeply. Strong delivery focus and excellent project coordination.`,
    name: "Anand Mishra",
    designation: "Operations Head, CleanFuel India",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div
      id={"clients"}
      className="flex flex-col gap-20 lg:gap-32 bg-pink-50 py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-20 items-center text-[#061833]"
    >
      <div className="section-heading-text">
        WHAT CLIENTS SAY
        <div className="h-1 w-full bg-gradient-to-r from-[#061833] to-white"></div>
      </div>

      <div className="bg-[#061833] relative overflow-visible w-11/12 lg:w-2/3 h-64 xl:h-80 image-shadow">

        <div className="grid grid-cols-6 p-5 xl:p-8 gap-1 absolute bottom-5 -left-5 lg:bottom-10 lg:-left-10 image-shadow bg-white w-full h-64 xl:h-80 rounded-tl-4xl rounded-br-4xl rounded-tr-xl rounded-bl-xl">

          {/* Left quote */}
          <div className="flex justify-start items-start w-full col-span-1">
            <FadeInFromLeft duration={0.5}>
              <BiSolidQuoteLeft className="text-4xl md:text-[80px] xl:text-[100px]" />
            </FadeInFromLeft>
          </div>

          {/* Testimonial Content */}
          <div className="flex flex-col gap-5 lg:gap-10 w-full col-span-4 items-center justify-center text-xs lg:text-sm xl:text-lg font-light transition-all duration-500">
            <div className="flex text-center">
              {testimonials[current].text}
            </div>

            <div className="flex flex-col text-xs xl:text-base text-center">
              <b className="uppercase">{testimonials[current].name}</b>
              <div className="uppercase text-stone-500">
                {testimonials[current].designation}
              </div>
            </div>
          </div>

          {/* Right quote */}
          <div className="flex justify-end items-end w-full col-span-1">
            <FadeInFromRight duration={0.5}>
              <BiSolidQuoteRight className="text-4xl md:text-[80px] xl:text-[100px]" />
            </FadeInFromRight>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-7 left-2 md:bottom-5 md:-left-10 flex gap-1 items-center justify-center rounded-md md:rounded-xl bg-gradient-to-t from-pink-400 to-pink-300 px-1 lg:px-5 text-white w-fit">

            <div
              onClick={prev}
              className="border-r-2 border-white px-4 md:px-2 py-4 cursor-pointer transition"
            >
              <MdOutlineKeyboardDoubleArrowLeft className="text-lg md:text-3xl" />
            </div>

            <div
              onClick={next}
              className="px-4 md:px-2 py-4 cursor-pointer transition"
            >
              <MdOutlineKeyboardDoubleArrowRight className="text-lg md:text-3xl" />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonials;
