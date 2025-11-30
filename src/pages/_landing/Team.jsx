import FadeInFromBottom from "@/components/animations/FadeInFromBottom";
import FadeInFromLeft from "@/components/animations/FadeInFromLeft";
import FadeInFromTop from "@/components/animations/FadeInFromTop";
import { useRouter } from "next/router";
import React from "react";

const Team = () => {
    const router = useRouter();
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
        <div className="flex flex-col items-center gap-1 w-full rounded-b-lg p-1">
          <div className="h-48 w-48 border-4 border-pink-100 rounded-full">
            <img
              src="/assets/sks.jpeg"
              className="h-full w-full shadow-lg rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col px-3 py-2">
            <b className="uppercase text-sm xl:text-lg  mx-auto">
              Sushil Kumar Sharma
            </b>
            <div className="font-light text-stone-300 uppercase text-xs xl:text-base mx-auto">
              CO-FOUNDER
            </div>
        <div className="text-center">
        Experienced techno-commercial leader with 28 years in machinery sourcing, project execution, and strategic operational growth.
            </div>
          </div>
        </div>
        </FadeInFromBottom>

        <FadeInFromBottom distance={20}>
        <div className="flex flex-col items-center gap-1 w-full rounded-b-lg p-1">
          <div className="h-48 w-48 border-4 border-pink-100 rounded-full">
            <img
              src="/assets/team-2.webp"
              className="h-full w-full shadow-lg rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col px-3 py-2">
            <b className="uppercase text-sm xl:text-lg  mx-auto">
              N. Nagaraja
            </b>
            <div className="font-light text-stone-300 uppercase text-xs xl:text-base mx-auto">
              CO-FOUNDER & MENTOR
            </div>
        <div className="text-center">
        Polymer technologist with 28 years’ experience mentoring teams, executing major projects, and guiding technical excellence.
            </div>
          </div>
        </div>
        </FadeInFromBottom>

        <FadeInFromBottom distance={20}>
        <div className="flex flex-col items-center gap-1 w-full rounded-b-lg p-1">
          <div className="h-48 w-48 border-4 border-pink-100 rounded-full">
            <img
              src="/assets/team-5.avif"
              className="h-full w-full shadow-lg rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col px-3 py-2">
            <b className="uppercase text-sm xl:text-lg  mx-auto">
            Shri B. B. Pathak
            </b>
            <div className="font-light text-stone-300 uppercase text-xs xl:text-base mx-auto">
              ASSOCIATE CONSULTANT
            </div>
        <div className="text-center">
        Distillery specialist with 35+ years in ethanol projects, production planning, commissioning, and strategic operations.
            </div>
          </div>
        </div>
        </FadeInFromBottom>

        <FadeInFromBottom distance={20}>
        <div className="flex flex-col items-center gap-1 w-full rounded-b-lg p-1">
          <div className="h-48 w-48 border-4 border-pink-100 rounded-full">
            <img
              src="/assets/team-2.webp"
              className="h-full w-full shadow-lg rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col px-3 py-2">
            <b className="uppercase text-sm xl:text-lg  mx-auto">
            A.P Singh
            </b>
            <div className="font-light text-stone-300 uppercase text-xs xl:text-base mx-auto">
              ASSOCIATE CONSULTANT
            </div>
        <div className="text-center">
        Distillery specialist with 35+ years in ethanol projects, production planning, commissioning, and strategic operations.
            </div>
          </div>
        </div>
        </FadeInFromBottom>
       

      </div>

         {/* CTA Button */}
         <div className="flex items-center justify-center w-2/3 lg:w-full">
      <FadeInFromBottom distance={30} duration={1}>
        <button className="bg-pink-50 rounded-full px-6 sm:px-8 lg:px-7 py-2.5 sm:py-3 text-sm xl:text-base font-bold text-[#061833] cursor-pointer w-full md:w-auto hover:transition-all hover:duration-300 hover:-translate-y-2" onClick={()=>router.push("/why-choose-us#team")}>
        Know More About Us
        </button>
      </FadeInFromBottom>
      </div>
    </div>
  );
};

export default Team;
