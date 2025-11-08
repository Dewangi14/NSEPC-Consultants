import FadeInFromBottom from "@/components/animations/FadeInFromBottom";
import React from "react";
import { useRouter } from "next/router";

const Services = () => {
  const router = useRouter()
  const services = [
    {
      title: "PMC",
      subtitle: "(Project Management & Control)",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
      link: "",
    },
    {
        title: "EPC",
        subtitle:"(Engineering Procurement & Construction)",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
        link: "",
      },
    {
      title: "Plant Design, Engineering & Layout Optimization",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
      link: "",
    },
    {
      title: "Compliance Support",
      subtitle:"(MoEFCC, PESO, DFPD, etc.)",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
      link: "",
    },
    {
      title: "Post Commissioning O & M",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
      link: "",
    },
    {
      title: "Work Force Training",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
      link: "",
    },
  ];
  return (
    <div id={"services"} className="flex flex-col gap-10 lg:gap-20 bg-[#061833] py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-20 items-center text-white">
      <div className="section-heading-text">
        WHAT WE DO
        <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-white"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full text-[#061833]">
        {services?.map((item, idx) => {
          return (
            <div className="h-72 xl:h-80 bg-pink-50 rounded-2xl border-t-4 border-t-pink-50 image-shadow p-5 w-full">
              <div className="flex flex-col gap-3 h-full">
                <div className="rounded-full bg-[#061833] text-pink-50 text-xl p-5 w-8 h-8 flex justify-center items-center">
                  {idx + 1}
                </div>

                <div className="flex flex-col font-extrabold">
                    <div className="text-xl md:text-3xl lg:text-xl xl:text-2xl">
                    {item?.title}
                </div>
                    <div className="text-md md:text-[22px] lg:text-base  xl:text-xl">
                    {item?.subtitle}
                </div>
                </div>

                <div className="font-light text-xs md:text-md lg:text-xs xl:text-sm">{item?.desc}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mx-auto">
        <FadeInFromBottom distance={30} duration={1}>

        <button className="bg-pink-50 rounded-full px-6 sm:px-8 lg:px-7 py-2.5 sm:py-3 text-sm xl:text-base font-bold text-[#061833] cursor-pointer mx-auto w-full" onClick={()=>{router.push("/#resources")}}>
        Watch How We Deliver Results
        </button>
        </FadeInFromBottom>
      </div>
    </div>
  );
};

export default Services;
