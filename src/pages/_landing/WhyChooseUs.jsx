import React from "react";
import { MdLeaderboard, MdEngineering, MdUpdate } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { RiCheckDoubleFill } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import FadeInFromTop from "@/components/animations/FadeInFromTop";
import FadeInFromBottom from "@/components/animations/FadeInFromBottom";
import { useRouter } from "next/router";

const WhyChooseUs = () => {
  const router = useRouter();
  return (
    <div className="items-center bg-[#061833] text-white py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-20 flex flex-col gap-10 lg:gap-20">
      {/* Section Heading */}
      <div className="section-heading-text text-white">
        WHY CHOOSE US
        <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-white"></div>
      </div>

      {/* Features Container */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 bg-slate-700 flex flex-col gap-5 py-10 sm:py-10 px-6 sm:px-10 md:px-16 lg:py-20 lg:px-12">
          <div className="flex flex-col md:flex-col gap-5 md:gap-5">
            <div className="flex flex-col-reverse lg:flex-row gap-2 lg:items-start">
              <div className="p-5 flex flex-col gap-2 text-center lg:text-right">
                <FadeInFromTop distance={20} duration={0.5}>
                <div className="font-semibold text-md xl:text-xl">
                  Leaders in Green Energy Solutions
                </div>
                <div className="text-xs xl:text-base">

                  Delivering innovative, sustainable, and cost-effective renewable
                  energy projects.
                </div>
                </FadeInFromTop>
              </div>
              <div className="mt-6 md:mt-0 self-center">
                <MdLeaderboard className="text-5xl xl:text-[65px]" />
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row gap-2 lg:items-start">
              <div className="p-5 flex flex-col gap-2 text-center lg:text-right">
              <FadeInFromTop distance={20} duration={0.5}>
                <div className="font-semibold text-md xl:text-xl">
                  Process Design & Engineering
                </div>
                <div className="text-xs xl:text-base">
                  From process design to execution, we handle every stage efficiently.
                </div>
              </FadeInFromTop>
              </div>
              <div className="mt-6 md:mt-0 self-center">
                <MdEngineering className="text-[60px] xl:text-[75px]" />
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row gap-2 lg:items-start">
              <div className="p-5 flex flex-col lg:flex-col gap-2 text-center lg:text-right">
              <FadeInFromTop distance={20} duration={0.5}>
                <div className="font-semibold text-md xl:text-xl">
                  Turnkey EPC Project Expertise
                </div>
                <div className="text-xs xl:text-base">
                  One-stop solution for complete project management and implementation.
                </div>
              </FadeInFromTop>
              </div>
              <div className="mt-6 md:mt-0 self-center">
                <GrUserExpert className="text-5xl xl:text-[65px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 bg-slate-800/80 flex flex-col gap-5 py-10 sm:py-10 px-6 sm:px-10 md:px-16 lg:py-20 lg:px-12">
          <div className="flex flex-col md:flex-col gap-5">
            <div className="flex flex-col lg:flex-row gap-2 lg:items-start">
              <div className="mt-6 md:mt-0 self-center">
                <MdUpdate className="text-5xl xl:text-[65px]" />
              </div>
              <div className="p-5 flex flex-col gap-2 text-center lg:text-left">
              <FadeInFromTop distance={20} duration={0.5}>
                <div className="font-semibold text-md xl:text-xl">Rapid Project Execution</div>
                <div className="text-xs xl:text-base">
         
                  Quick setup, optimized timelines, and faster turnaround to meet client goals.
                </div>
                  </FadeInFromTop>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-2 lg:items-start">
              <div className="mt-6 md:mt-0 self-center">
                <RiCheckDoubleFill className="text-[60px] xl:text-[75px]" />
              </div>
              <div className="p-5 flex flex-col gap-2 text-center lg:text-left">
              <FadeInFromTop distance={20} duration={0.5}>
                <div className="font-semibold text-md xl:text-xl">100+ Years of Combined Expertise</div>
                <div className="text-xs xl:text-base">
                  A seasoned team offering proven technical excellence.
                </div>
              </FadeInFromTop>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-2 lg:items-start">
              <div className="mt-6 md:mt-0 self-center">
                <VscWorkspaceTrusted className="text-5xl xl:text-[65px]" />
              </div>
              <div className="p-5 flex flex-col gap-2 text-center lg:text-left">
              <FadeInFromTop distance={20} duration={0.5}>
                <div className="font-semibold text-md xl:text-xl">Unmatched Client Trust & Retention</div>
                <div className="text-xs xl:text-base">
                  High repeat business and zero unhappy customers define our success.
                </div>
              </FadeInFromTop>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex items-center justify-center w-2/3 lg:w-full">
      <FadeInFromBottom distance={30} duration={1}>
        <button className="bg-pink-50 rounded-full px-6 sm:px-8 lg:px-7 py-2.5 sm:py-3 text-sm xl:text-base font-bold text-[#061833] cursor-pointer w-full md:w-auto" onClick={()=>router.push("/why-choose-us")}>
        Explore Our Ethanol Niche & Unmatched USP
        </button>
      </FadeInFromBottom>
      </div>
    </div>
  );
};

export default WhyChooseUs;
