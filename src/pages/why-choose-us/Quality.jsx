import React from 'react'
import {} from "react-icons/fa";
import {
  FaLeaf,
  FaAward,
  FaBuilding,
  FaChartLine,
  FaLightbulb,
  FaCogs,
  FaCheckCircle,
} from "react-icons/fa";

const Quality = React.forwardRef((props, ref) => {
  return (
    <section 
    ref={ref}
    data-text={`Quality & Innovation...
     At  NSEPC Consultants , quality is not an act—it’s our engineering culture. Every
          project we deliver undergoes rigorous design validation,
          ISO-grade checks, and continuous innovation to ensure lasting
          performance. From smart plant automation to sustainable Zero Liquid Discharge
          (ZLD) systems, our R&D-driven engineering approach ensures every
          solution is efficient, future-ready, and aligned with global
          standards.  ISO-Grade Quality : Standardized processes and multi-stage project audits. Process Innovation : Smart automation for efficient, low-carbon ethanol plants. Continuous R&D : Innovative technologies built on years of field
                experience. Client-Centric Design : Tailored EPC solutions with long-term operational
                excellence.
                `}
    className="bg-gradient-to-b from-white to-pink-50 relative overflow-hidden z-5">
    {/* Blueprint Background Overlay */}
    <div className="absolute inset-0 opacity-5 bg-[url('/assets/blueprint-bg.png')] bg-cover bg-center pointer-events-none"></div>

    <div className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 py-16 sm:py-24 gap-10 relative z-10">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 relative">
        <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
          <img
            src="/assets/sdr-3.jpg"
            alt="Quality and Innovation"
            className="w-full h-[450px] object-cover"
          ></img>
          <div className="absolute inset-0 bg-gradient-to-t from-[#061833]/70 via-transparent to-transparent rounded-3xl"></div>
        </div>

        {/* Optional floating badge */}
        <div className="absolute bottom-5 left-5 bg-[#061833] text-white px-5 py-2 rounded-full shadow-md text-sm font-medium">
          18+ Years of EPC Excellence
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        <h2 className="text-[#061833] font-bold text-3xl lg:text-4xl leading-tight">
          Quality & Innovation
        </h2>

        <p className="text-gray-700 leading-relaxed">
          At{" "}
          <span className="font-semibold text-[#061833]">
            N.S. EPC Consultants
          </span>
          , quality is not an act—it’s our engineering culture. Every
          project we deliver undergoes rigorous design validation,
          ISO-grade checks, and continuous innovation to ensure lasting
          performance.
        </p>

        <p className="text-gray-700 leading-relaxed">
          From smart plant automation to sustainable Zero Liquid Discharge
          (ZLD) systems, our R&D-driven engineering approach ensures every
          solution is efficient, future-ready, and aligned with global
          standards.
        </p>

        {/* Feature Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-[#e73370] text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-[#061833]">
                ISO-Grade Quality
              </h4>
              <p className="text-gray-600 text-sm">
                Standardized processes and multi-stage project audits.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaCogs className="text-[#e73370] text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-[#061833]">
                Process Innovation
              </h4>
              <p className="text-gray-600 text-sm">
                Smart automation for efficient, low-carbon ethanol plants.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaLightbulb className="text-[#e73370] text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-[#061833]">
                Continuous R&D
              </h4>
              <p className="text-gray-600 text-sm">
                Innovative technologies built on years of field
                experience.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-[#e73370] text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-[#061833]">
                Client-Centric Design
              </h4>
              <p className="text-gray-600 text-sm">
                Tailored EPC solutions with long-term operational
                excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
})

export default Quality