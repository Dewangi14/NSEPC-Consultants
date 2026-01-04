import React from 'react'

const Niche = React.forwardRef((props, ref) => {
  return (
    <div 
    ref={ref}
    data-text={`Our Niche Expertise...
     We specialize in grain-based ethanol distillery projects aligned
          with India’s Ethanol Blending Program (EBP). With 18+ years of
          EPC excellence, we design and deliver sustainable, ZLD-compliant
          plants engineered for long-term performance......
       Under the guidance of our distinguished associate consultant,
          Shri Bipin Bihari Pathak, we bring unmatched depth and
          leadership to Bio-ethanol and distillery projects across India.
          A National Sugar Institute alumnus with over
          35 years of hands-on experience, Mr. Pathak has
          successfully led the setup, commissioning, and operation of
          multiple grain and molasses-based distilleries, driving
          improvements in production, planning, and quality control. His
          expertise lies in conceptualizing scalable project strategies,
          optimizing plant layouts, ensuring operational safety, building
          skilled teams, and delivering sustainable, profitable outcomes.
          Having worked with leading industry organizations, he continues
          to guide NSEPC Consultants in delivering world-class
          distillery and ethanol solutions—trusted by clients who
          consistently expand their partnerships with us.
                `}
    className="relative flex flex-col lg:flex-row items-center gap-12 py-20 px-6 sm:px-10 md:px-16 lg:px-20 bg-white">
    {/* Left Side */}
    <div className="flex flex-col w-full lg:w-1/2 relative">
      {/* Accent Line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-pink-200 to-[#061833] rounded-full" />

      <div className="pl-6 flex flex-col gap-6">
        <h2 className="text-[#061833] font-bold text-2xl lg:text-4xl">
          Our Niche Expertise
        </h2>
        <p>
          We specialize in grain-based ethanol distillery projects aligned
          with India’s Ethanol Blending Program (EBP). With 18+ years of
          EPC excellence, we design and deliver sustainable, ZLD-compliant
          plants engineered for long-term performance.
        </p>

        <p>
          Under the guidance of our distinguished associate consultant,{" "}
          <b>Shri Bipin Bihari Pathak</b>, we bring unmatched depth and
          leadership to Bio-ethanol and distillery projects across India.
          A National Sugar Institute alumnus with over{" "}
          <b>35 years of hands-on experience</b>, Mr. Pathak has
          successfully led the setup, commissioning, and operation of
          multiple grain and molasses-based distilleries, driving
          improvements in production, planning, and quality control. His
          expertise lies in conceptualizing scalable project strategies,
          optimizing plant layouts, ensuring operational safety, building
          skilled teams, and delivering sustainable, profitable outcomes.
          Having worked with leading industry organizations, he continues
          to guide N.S. EPC Consultants in delivering world-class
          distillery and ethanol solutions—trusted by clients who
          consistently expand their partnerships with us.
        </p>

      </div>
    </div>

    {/* Right Side Video */}
    <div className="w-full lg:w-1/2 relative h-[500px] rounded-xl overflow-hidden shadow-lg">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/slider-7.jpeg"
      />
      <div className="absolute inset-0 bg-[#061833]/20" />
    </div>
  </div>
  )
})

export default Niche