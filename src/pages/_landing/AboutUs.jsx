import FadeInFromBottom from "@/components/animations/FadeInFromBottom";
import FadeInFromRight from "@/components/animations/FadeInFromRight";
import React from "react";
import { useRouter } from "next/router";

const AboutUs = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-10 lg:gap-20 bg-pink-50 py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-20 items-center text-[#061833]">
      {/* Section Heading */}
      <div className="section-heading-text">
        ABOUT US
        <div className="h-1 w-full bg-gradient-to-r from-[#061833] to-white"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full gap-10 lg:gap-0">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-center relative mt-14 lg:mt-0">
          <div className="bg-[#061833] relative overflow-visible w-64 h-56 sm:w-72 sm:h-64 md:w-80 md:h-72 xl:w-96 xl:h-80 image-shadow">
            <div className="absolute bottom-10 -left-8 sm:bottom-12 sm:-left-10 md:bottom-12 md:-left-12">
              <FadeInFromBottom distance={20} ease="easeIn" duration={0.6}>
                <img
                  src="/assets/about-us.jpeg"
                  alt="About us"
                  className="w-64 h-56 sm:w-72 sm:h-64 md:w-80 md:h-72 xl:w-96 xl:h-80 object-cover image-shadow"
                />
              </FadeInFromBottom>
            </div>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col gap-5 w-full lg:w-1/2 px-2 sm:px-4 lg:px-8">
          <div className="heading-text text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-snug">
            Building Trust Through Expertise & Execution
          </div>

          <FadeInFromRight>
            <div className="font-light text-sm sm:text-base md:text-lg">
              NS. EPC Consultants India Pvt. Ltd. is a leading EPC firm
              delivering turnkey solutions for grain-based ethanol plants. With
              over 100 years of combined team experience, we are known for
              quality, timely execution, and client satisfaction.
            </div>
          </FadeInFromRight>

          <FadeInFromRight>
            <div className="flex justify-center lg:justify-start mt-3">
              <button className="bg-[#061833] rounded-full px-6 sm:px-8 lg:px-7 py-2.5 sm:py-3 text-sm sm:text-base lg:text-base font-bold text-pink-50 w-fit cursor-pointer hover:bg-[#0a2850] transition-all duration-300" onClick={()=>router.push("/about-us")}>
                Explore More
              </button>
            </div>
          </FadeInFromRight>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
