import FadeInFromBottom from "@/components/animations/FadeInFromBottom";
import FadeInFromLeft from "@/components/animations/FadeInFromLeft";
import FadeInFromRight from "@/components/animations/FadeInFromRight";
import React from "react";

const Achievements = React.forwardRef((props, ref) => {
  const items = [
    {
      image: "/assets/certificate.png",
      title: "Top 10 Sourcing & Procurement Consultants 2022",
      desc: "Recognized for consistent quality assurance and structured processes across all engineering and execution operations.",
    },
  ];

  return (
    <section 
    ref={ref}
    data-text={`Achievements & Certifications`}
    className="flex flex-col gap-10 lg:gap-20 bg-pink-50 py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-20 items-center text-[#061833]">
      {/* Section Heading */}
      <div className="section-heading-text">
        ACHIEVEMENTS & CERTIFICATIONS
        <div className="h-1 w-full bg-gradient-to-r from-[#061833] to-white"></div>
      </div>

      {/* Content Grid */}
      <div className="grid gap-8 w-full max-w-6xl">
        {items.map((item, index) => (
          <FadeInFromBottom key={index}>
            <div className="w-1/3 mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
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
});

export default Achievements;
