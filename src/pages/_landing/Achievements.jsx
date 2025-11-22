import FadeInFromBottom from "@/components/animations/FadeInFromBottom";
import FadeInFromLeft from "@/components/animations/FadeInFromLeft";
import FadeInFromRight from "@/components/animations/FadeInFromRight";
import React from "react";

const Achievements = () => {
const items = [
{
image: "/assets/certificate.png",
title: "Top 10 Sourcing & Procurement Consultants 2022",
desc: "Recognized for consistent quality assurance and structured processes across all engineering and execution operations."
},
{
image: "/assets/certificate.png",
title: "Top 10 Sourcing & Procurement Consultants 2022",
desc: "Registered and certified for executing ethanol and distillery-based EPC projects in compliance with national guidelines."
},
{
image: "/assets/certificate.png",
title: "Top 10 Sourcing & Procurement Consultants 2022",
desc: "Awarded for setting engineering and execution benchmarks in India’s ethanol sector with high client success rate."
},
];

return ( <section className="flex flex-col gap-10 lg:gap-20 bg-pink-50 py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-20 items-center text-[#061833]">

  {/* Section Heading */}
  <div className="section-heading-text">
    ACHIEVEMENTS & CERTIFICATIONS
    <div className="h-1 w-full bg-gradient-to-r from-[#061833] to-white"></div>
  </div>

  {/* Content Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">

    {items.map((item, index) => (
      <FadeInFromBottom key={index}>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
          
          {/* Image */}
          <div className="w-full h-52 overflow-hidden bg-gray-50">
            <img
              src={item.image}
              alt={item.title}
              className="object-contain w-full h-full p-4 transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col gap-2">
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        </div>
      </FadeInFromBottom>
    ))}

  </div>

</section>

);
};

export default Achievements;
