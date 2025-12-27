import FadeInFromBottom from "@/components/animations/FadeInFromBottom";
import React from "react";
import { useRouter } from "next/router";

const Services = React.forwardRef((props, ref) => {
  const router = useRouter()
  const services = [
    {
      title: "PMC",
      subtitle: "(Project Management & Control)",
      desc: "We establish an on-site project office with engineering staff, manage erection, installation, commissioning, and post-completion monitoring, and hand over the project after proven successful operation.",
      link: "",
    },
    {
        title: "EPC",
        subtitle:"(Engineering Procurement & Construction)",
        desc: "We execute complete engineering, procurement, and construction, including drawings and civil works, assuming all manpower and cost risks to deliver a fixed-price, end-to-end turnkey project.",
        link: "",
      },
    {
      title: "Plant Design, Engineering & Layout Optimization",
      desc: "We deliver efficient plant designs with optimized layouts that enhance operational flow, safety, and space utilization. Our engineering solutions ensure compliance, scalability, and seamless integration of process, utility, and infrastructure systems.",
      link: "",
    },
    {
      title: "Compliance Support",
      subtitle:"(MoEFCC, PESO, DFPD, etc.)",
      desc: "We manage all statutory and regulatory approvals, including environmental clearances and PESO, through our consultant network, delivering seamless documentation under a single-window solution.",
      link: "",
    },
    {
      title: "Post Commissioning O & M, Work Force Training",
      desc: "We provide operational support or fully manage plant operations under long-term contracts, ensuring smooth performance, while the client supplies raw materials as per agreed terms.",
      link: "",
    },
    {
      title: "Sister Concern - nsconsultants.in",
      desc: "We are also doing consultation for EPE plants (expanded polyethylene sheets and rolls) and XLPE plants since 2005 till date commissioned 124 machines in India and abroad",
      link: "https://nsconsultants.in/",
    },
  ];
  return (
    <div id={"services"}
    ref={ref} 
    data-text={"What We Do..... 1 - Project Management & Control.... 2 - Engineering Procurement & Construction.... 3 - Plant Design, Engineering & Layout Optimization.... 4 - Compliance Support.... 5 - Post Commissioning O & M.... 6 - Work Force Training...."}
     className="flex flex-col gap-10 lg:gap-20 bg-[#061833] py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-20 items-center text-white">
      <div className="section-heading-text">
        WHAT WE DO
        <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-white"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full text-[#061833]">
        {services?.map((item, idx) => {
          return (
            <div className={`h-72 xl:h-80 bg-pink-50 rounded-2xl border-t-4 border-t-pink-50 image-shadow p-5 w-full ${item?.link?.length > 0 && "cursor-pointer"}`}  onClick={() => item?.link && router.push(item.link)}>
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
});

export default Services;
