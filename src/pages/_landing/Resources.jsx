import FadeInFromBottom from "@/components/animations/FadeInFromBottom";
import React from "react";

const Resources = React.forwardRef((props, ref) => {
  // List of YouTube video URLs
  const videos = [
    {
      link: "https://www.youtube.com/embed/OX_v_qtVy1g?si=CgEng4Od0zhelQiq",
      title:
        "Dual-Feed Ethanol Distillery Plant | Grain & Molasses Based | NSEPC Turnkey Setup",
      desc: "",
    },
    {
      link: "https://www.youtube.com/embed/pQrnHYJteOQ?si=arjoWmyF8cPcsoTU",
      title:
        "Ethanol consultant : FULLY AUTOMATIC FUEL ETHANOL DISTILLERY BY NSEPC INDIA PVT. LTD.",
      desc: "",
    },
    {
      link: "https://www.youtube.com/embed/DKHkI9xU1yY?si=woe4-plX_5ilozjf",
      title:
        "Turnkey 65 KLPD Ethanol Plant in India | Grain-Based Biofuel Production Explained",
      desc: "",
    },
    {
      link: "https://www.youtube.com/embed/DKHkI9xU1yY?si=woe4-plX_5ilozjf",
      title:
        "Turnkey 65 KLPD Ethanol Plant in India | Grain-Based Biofuel Production Explained",
      desc: "",
    },
  ];
  
  return (
    <div
      ref={ref}
      data-text={`Our Resources`}
      className="flex flex-col gap-10 lg:gap-20 bg-pink-50 py-20 px-10 md:px-20"
      id="resources"
    >
      {/* Section Title */}

      <div className="section-heading-text mx-auto">
        OUR RESOURCES
        <div className="h-1 w-full bg-gradient-to-r from-[#061833] to-white"></div>
      </div>
      <div className="text-start font-light w-full text-xs md:text-md lg:text-lg">
        <FadeInFromBottom distance={30}>
          Explore our Resource Hub for expert insights and project highlights
          from NSEPC India Pvt. Ltd., a leading name in
          Engineering, Procurement, and Construction (EPC). Learn more about our
          grain-based ethanol distillery projects, Zero Liquid Discharge (ZLD)
          solutions, and turnkey plant execution expertise. Stay informed with
          the latest updates on the Ethanol Blending Program (EBP) and discover
          opportunities driving India’s clean energy growth.
        </FadeInFromBottom>
      </div>

      {/* Video Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {videos.map((item, index) => (
          <FadeInFromBottom distance={20} duration={0.5}>
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-t-2xl"
                  src={item?.link}
                  title={`Resource Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </FadeInFromBottom>
        ))}
      </div>
    </div>
  );
});

export default Resources;
