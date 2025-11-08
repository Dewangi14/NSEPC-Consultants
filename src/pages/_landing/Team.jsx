import FadeInFromBottom from "@/components/animations/FadeInFromBottom";
import FadeInFromLeft from "@/components/animations/FadeInFromLeft";
import FadeInFromTop from "@/components/animations/FadeInFromTop";
import React from "react";

const Team = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-20 bg-[#061833] py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-20 items-center text-white">
      <div className="section-heading-text">
        MEET OUR TEAM
        <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-white"></div>
      </div>

      <div className="font-light text-sm xl:text-base">
        <FadeInFromBottom distance={15}>
      Behind every successful project is a team of passionate professionals committed to excellence. At N.S. EPC Consultants, our strength lies in our people — a diverse group of engineers, designers, and industry experts with decades of collective experience. Together, we drive innovation, precision, and sustainability across every project we deliver. Meet the minds powering our success and shaping the future of engineering and green energy solutions.
        </FadeInFromBottom>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
        <FadeInFromBottom distance={20}>
        <div className="flex flex-col gap-1 w-full bg-pink-50 rounded-tr-[80px] rounded-b-lg p-1">
          <div className="h-64 xl:h-80 w-full rounded-tr-[80px]">
            <img
              src="/assets/team-4.jpg"
              className="h-full w-full shadow-lg rounded-bl-[80px] rounded-tr-[80px]  object-bottom"
            />
          </div>

          <div className="flex flex-col px-3 py-2">
            <b className="uppercase text-sm xl:text-lg text-[#061833] mx-auto">
              Sushil Kumar Sharma
            </b>
            <div className="font-light text-stone-500 uppercase text-xs xl:text-base mx-auto">
              FOUNDER & CEO
            </div>
          </div>
        </div>
        </FadeInFromBottom>

        <FadeInFromBottom distance={20}>
        <div className="flex flex-col gap-1 w-full bg-pink-50 rounded-tr-[80px] rounded-b-lg p-1">
          <div className="h-64 xl:h-80 w-full rounded-tr-[80px]">
            <img
              src="/assets/team-1.webp"
              className="h-full w-full shadow-lg rounded-bl-[80px] rounded-tr-[80px]  object-cover"
            />
          </div>

          <div className="flex flex-col px-3 py-2">
            <b className="uppercase text-sm xl:text-lg text-[#061833] mx-auto">
              Sushil Kumar Sharma
            </b>
            <div className="font-light text-stone-500 uppercase text-xs xl:text-base mx-auto">
              FOUNDER & CEO
            </div>
          </div>
        </div>
        </FadeInFromBottom>

        <FadeInFromBottom distance={20}>
        <div className="flex flex-col gap-1 w-full bg-pink-50 rounded-tr-[80px] rounded-b-lg p-1">
          <div className="h-64 xl:h-80 w-full rounded-tr-[80px]">
            <img
              src="/assets/team-2.webp"
              className="h-full w-full shadow-lg rounded-bl-[80px] rounded-tr-[80px]  object-cover"
            />
          </div>

          <div className="flex flex-col px-3 py-2">
            <b className="uppercase text-sm xl:text-lg text-[#061833] mx-auto">
              Sushil Kumar Sharma
            </b>
            <div className="font-light text-stone-500 uppercase text-xs xl:text-base mx-auto">
              FOUNDER & CEO
            </div>
          </div>
        </div>
        </FadeInFromBottom>

        <FadeInFromBottom distance={20}>
         <div className="flex flex-col gap-1 w-full bg-pink-50 rounded-tr-[80px] rounded-b-lg p-1">
          <div className="h-64 xl:h-80 w-full rounded-tr-[80px]">
            <img
              src="/assets/team-4.jpg"
              className="h-full w-full shadow-lg rounded-bl-[80px] rounded-tr-[80px]  object-bottom"
            />
          </div>

          <div className="flex flex-col px-3 py-2">
            <b className="uppercase text-sm xl:text-lg text-[#061833] mx-auto">
              Sushil Kumar Sharma
            </b>
            <div className="font-light text-stone-500 uppercase text-xs xl:text-base mx-auto">
              FOUNDER & CEO
            </div>
          </div>
        </div>
        </FadeInFromBottom>

      </div>
    </div>
  );
};

export default Team;
