import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
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

const strengths = [
  {
    title: "Turnkey EPC Solutions",
    desc: "End-to-end project execution — from concept to commissioning with complete compliance support.",
  },
  {
    title: "ZLD-Compliant Design",
    desc: "100% Zero Liquid Discharge systems engineered for sustainability and efficiency.",
  },
  {
    title: "18+ Years of Expertise",
    desc: "Decades of experience delivering successful ethanol distillery and industrial projects across India.",
  },
  {
    title: "Government-Aligned Projects",
    desc: "Supporting India’s Ethanol Blending Program and national clean-energy initiatives.",
  },
  {
    title: "High ROI & Performance",
    desc: "Optimized designs ensuring faster payback and long-term profitability.",
  },
];

const data = [
  {
    icon: <FaCheckCircle className="text-pink-500 w-10 h-10" />,
    title: "Turnkey EPC Solutions",
    desc: "Complete design-to-commissioning services tailored to your ethanol project goals.",
  },
  {
    icon: <FaLeaf className="text-green-500 w-10 h-10" />,
    title: "ZLD-Compliant Design",
    desc: "Sustainability built-in with zero liquid discharge and waste-reduction processes.",
  },
  {
    icon: <FaAward className="text-yellow-500 w-10 h-10" />,
    title: "18+ Years of Expertise",
    desc: "Trusted by industries nationwide for reliable project delivery and engineering precision.",
  },
  {
    icon: <FaBuilding className="text-blue-500 w-10 h-10" />,
    title: "Government-Aligned Projects",
    desc: "Projects aligned with India’s 20% Ethanol Blending Program and national policy vision.",
  },
  {
    icon: <FaChartLine className="text-indigo-500 w-10 h-10" />,
    title: "High ROI & Performance",
    desc: "Designs focused on efficiency, profitability, and long-term value.",
  },
];

const Choose = () => {
  // duplicate items for smooth infinite scroll
  const duplicated = [...strengths, ...strengths];

  return (
    <>
      <Head>
        <title>
          Why Choose N.S. EPC Consultants — India’s Trusted Ethanol Project
          Partner
        </title>
        <meta
          name="description"
          content="Discover why leading investors and industries choose N.S. EPC Consultants for turnkey ethanol distillery and clean energy projects. With 18+ years of expertise, we deliver end-to-end EPC solutions from feasibility to commissioning with 100% ZLD compliance and assured ROI."
        />
        <meta
          name="keywords"
          content="EPC consultants India, ethanol distillery projects, grain-based ethanol plants, ethanol blending program, ethanol project EPC, Zero Liquid Discharge distillery, clean energy EPC India"
        />
        <meta name="author" content="N.S. EPC Consultants India Pvt. Ltd." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="flex flex-col bg-pink-50 h-full">
        {/* Banner */}
        <div className="relative w-full bg-[#061833] bg-[url(/assets/banner-image.jpeg)] bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden pt-40 pb-28 px-5 text-center flex flex-col justify-center items-center gap-8">
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#061833]/70 pointer-events-none z-0"></div>
          <h1 className="z-5 text-white font-bold text-xl lg:text-4xl lg:w-1/2 mx-auto text-center">
            Building India’s Future with Reliable EPC Expertise
          </h1>
          <p className="text-white font-medium z-5">Home / Why Choose Us</p>
        </div>

        {/* Niche Expertise */}
        <div className="relative flex flex-col lg:flex-row items-center gap-12 py-20 px-6 sm:px-10 md:px-16 lg:px-20 bg-white">
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

              {/* Stats */}
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {[
                  { label: "Projects Delivered", value: "50+" },
                  { label: "Years Experience", value: "18+" },
                  { label: "Capacity Range", value: "100–1000 KLPD" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center text-center bg-pink-50 rounded-lg p-4 shadow-sm"
                  >
                    <h3 className="text-[#061833] font-bold text-2xl">
                      {stat.value}
                    </h3>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div> */}
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

        {/* Meet our Team */}
        <div className="relative flex flex-col gap-10 py-20 px-6 sm:px-10 md:px-16 lg:px-20 bg-white" id="team">
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
               {/* 2 */}
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

        {/* Quality & Innovation */}
        <section className="bg-gradient-to-b from-white to-pink-50 relative overflow-hidden z-5">
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

        {/* Our Core Strengths */}

        <section className="py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden bg-gradient-to-b to-white from-pink-50">
          <div className="">
            <h2 className="text-[#061833] font-bold text-3xl lg:text-4xl mb-10 text-left">
              Our Core Strengths
            </h2>

            <div className="py-5 relative w-full overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: ["0%", "-50%"], // move left halfway (since duplicated)
                }}
                transition={{
                  duration: 10, // adjust speed here (bigger = slower)
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {duplicated.map((item, i) => (
                  <div
                    key={i}
                    className="min-w-[280px] md:min-w-[350px] lg:min-w-[400px] bg-white shadow-md rounded-2xl px-6 py-10 border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#061833] text-white">
                        <FaCheckCircle size={16} />
                      </div>
                      <h3 className="text-xl font-semibold text-[#061833]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-20 bg-white">
          <div className="flex flex-col gap-5 items-center justify-center">
            <h2 className="text-[#061833] font-bold text-xl lg:text-4xl text-center">
              Ready to Begin Your Ethanol Project Journey?
            </h2>
            <p className="text-center max-w-2xl">
              Connect with our EPC experts to plan, design, and build your
              ethanol distillery project efficiently and profitably.
            </p>

            <div className="flex justify-center mt-3">
              <button className="bg-[#061833] rounded-full px-6 sm:px-8 lg:px-7 py-2.5 sm:py-3 text-sm sm:text-base lg:text-base font-bold text-pink-50 w-fit cursor-pointer hover:bg-[#0a2850] transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
