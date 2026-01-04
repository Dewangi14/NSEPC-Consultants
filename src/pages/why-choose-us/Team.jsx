import React from 'react'

const Team = React.forwardRef((props, ref) => {
  return (
    <div 
    ref={ref}
    data-text={` Know Our Team...
     Mr. Sushil Sharma — Co-Founder : M.A., M.B.A | Techno-Commercial Strategist | Twenty Eight + Years of
                  Expertise ...
    Mr. N. Naagaraj — Co-Founder & Mentor : Polymer Technologist | Project Implementation Expert | Twenty Eight +
                  Years in Plastics Industry ...
    Mr. Bipin Bihari Pathak — Associate Consultant :  Distillery Specialist | D.I.F.A.T | Thirty Five + Years Experience...
    Mr. A.P. Singh — Senior Advisor, Projects & Operations : Project Management Leader | B.Tech (Electrical) | MBA (Operations) | Thirty + Years Experience...
                `}
    className="relative flex flex-col gap-10 py-20 px-6 sm:px-10 md:px-16 lg:px-20 bg-white" id="team">
          <h2 className="text-[#061833] font-bold text-2xl lg:text-4xl">
            Know Our Team
          </h2>

          <div className="flex flex-col gap-24 md:gap-18">
            {/* 1 */}
            <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between">
              <div className="lg:w-2/5">
                <div>
                  <img
                    src="/assets/team/sushil.png"
                    alt="sushil-kumar-sharma"
                    className="w-full lg:w-4/5 h-64 object-fill rounded-md"
                  />
                </div>
              </div>

              <div className="lg:w-3/5 flex flex-col gap-2">
                <h4 className="text-[#061833] font-bold text-2xl">
                  Mr. Sushil Sharma — Co-Founder
                </h4>

                <p className="text-[#061833] font-semibold text-lg">
                  M.A., M.B.A | Techno-Commercial Strategist | 28+ Years of
                  Expertise
                </p>

                <p>
                  Mr. Sushil Sharma, Co-Founder of N.S. Consultants, brings over
                  28 years of experience in techno-commercial leadership and
                  project execution. With a strong academic foundation in M.A.
                  and M.B.A, he has built a dynamic knowledge base in machinery
                  sourcing, vendor coordination, and industrial project
                  implementation. His strategic mindset and hands-on approach
                  have contributed to the successful execution of several major
                  projects, positioning him as a key pillar in the company’s
                  growth and operational excellence.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex flex-col gap-5 lg:0 lg:flex-row-reverse justify-between">
              <div className="lg:w-2/5 w-full">
                <div className="w-full flex justify-end">
                <img
                    src="/assets/team/nagaraja.png"
                    alt="nagaraja"
                    className="w-full lg:w-4/5 h-64 object-fill rounded-md"
                  />
                </div>
              </div>

              <div className="lg:w-3/5 flex flex-col gap-2">
                <h4 className="text-[#061833] font-bold text-2xl">
                  Mr. N. Nagaraja — Co-Founder & Mentor
                </h4>

                <p className="text-[#061833] font-semibold text-lg">
                  Polymer Technologist | Project Implementation Expert | 28+
                  Years in Plastics Industry
                </p>

                <p>
                  Mr. N. Nagaraja is a distinguished Polymer Technologist with
                  over 28 years of extensive experience across diverse plastic
                  industries. Recognized as both a mentor and technical expert,
                  he has contributed significantly to technical development,
                  project implementation, and team building. Hundreds of his
                  trainees and juniors now hold leadership positions in major
                  companies—reflecting his legacy of empowering technocrats. He
                  has played a crucial role in educating new customers and
                  business owners about emerging technologies, strengthening the
                  capabilities of the organizations he supports.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="flex flex-col gap-5 lg:0 lg:flex-row justify-between">
              <div className="lg:w-2/5">
                <div>
                <img
                    src="/assets/team/bb-pathak.jpeg"
                    alt="sushil-kumar-sharma"
                    className="w-full lg:w-4/5 h-64 object-fill rounded-md"
                  />
                </div>
              </div>

              <div className="lg:w-3/5 flex flex-col gap-2">
                <h4 className="text-[#061833] font-bold text-2xl">
                  Mr. Bipin Bihari Pathak — Associate Consultant
                </h4>

                <p className="text-[#061833] font-semibold text-lg">
                  Distillery Specialist | DIFAT | 35+ Years Experience
                </p>

                <p>
                  Shri B. B. Pathak, a National Sugar Institute alumnus with a
                  PG Diploma in Fermentation and Alcohol Technology, brings 35+
                  years of expertise in molasses- and grain-based distillery
                  projects. He has successfully led operations across India with
                  strong proficiency in production, planning, quality control,
                  and greenfield project execution. His career includes key
                  roles at Somaiya Organics, Kesar Enterprises, Asoka Distillers
                  & Chemicals, and Simbhaoli Sugars. As a strategic mentor and
                  implementer, he supports N.S. Consultants in conceptualizing,
                  executing, and commissioning high-performance distillery and
                  malt facilities.
                </p>
              </div>
            </div>
               {/* 4 */}
               <div className="flex flex-col gap-5 lg:0 lg:flex-row-reverse justify-between">
              <div className="lg:w-2/5 w-full">
                <div className="w-full flex justify-end">
                <img
                    src="/assets/team/ap-singh.jpg"
                    alt="ap-singh"
                    className="w-full lg:w-4/5 h-64 object-contain rounded-md"
                  />
                </div>
              </div>

              <div className="lg:w-3/5 flex flex-col gap-2">
                <h4 className="text-[#061833] font-bold text-2xl">
                Mr. A.P. Singh — Senior Advisor, Projects & Operations
                </h4>

                <p className="text-[#061833] font-semibold text-lg">
                Project Management Leader | B.Tech (Electrical) | MBA (Operations) | 30+ Years Experience
                </p>

                <p>
                With over 30 years of experience in project management, techno-commercial operations, and regulatory compliance, Mr. A.P. Singh has led major energy and ethanol projects across India and abroad. A B.Tech (Electrical) and MBA in Operations, he has directed complex greenfield and brownfield developments, managed distilleries and power plants, and delivered strategic improvements in efficiency, safety, and large-scale project execution.
                </p>
              </div>
            </div>
          </div>
        </div>
  )
})

export default Team