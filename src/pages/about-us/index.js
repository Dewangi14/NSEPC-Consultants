import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCogs, FaRecycle, FaChartLine, FaMapMarkedAlt } from "react-icons/fa";

const About = () => {
  const processSteps = [
    {
      icon: <FaCogs />,
      title: "Turnkey EPC Solutions",
      desc: "From concept to commissioning, we deliver complete EPC excellence with precision and reliability.",
    },
    {
      icon: <FaRecycle />,
      title: "Sustainable Designs",
      desc: "Each project is engineered for Zero Liquid Discharge (ZLD) and environmental sustainability.",
    },
    {
      icon: <FaChartLine />,
      title: "Optimized ROI",
      desc: "We design for long-term performance, efficiency, and maximum return on investment.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Nationwide Expertise",
      desc: "Successfully executed ethanol projects across India, ensuring consistent quality and results.",
    },
  ];
  return (
    <>
      <Head>
        <title>
          About N.S. EPC Consultants | Leading Ethanol EPC Firm in India
        </title>
        <meta
          name="description"
          content="Learn about N.S. EPC Consultants India Pvt. Ltd., a trusted EPC firm with 18+ years of experience in ethanol distillery and clean energy projects. We deliver turnkey, ZLD-compliant, and high-ROI solutions aligned with India’s Ethanol Blending Program."
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
        <div className="relative w-full bg-[#061833] bg-[url(/assets/banner-image-bw.jpg)] bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden pt-40 pb-28 px-5 text-center flex flex-col justify-center items-center gap-8">
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#061833]/60 pointer-events-none z-0"></div>
          <h1 className="z-5 text-white font-bold text-xl lg:text-4xl lg:w-1/2 mx-auto text-center">
            Your EPC Partner for Sustainable Ethanol Projects
          </h1>
          <p className="text-white font-medium z-5">Home / About Us</p>
        </div>

        {/* Who We Are */}
        {/* <div className="flex flex-col lg:flex-row gap-10 py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-20 ">
          <div className="flex flex-col w-1/2">
            <div className="flex flex-col gap-5">
              <h2 className="text-[#061833] font-bold text-xl lg:text-4xl">
                Who We Are
              </h2>
              <p>
                N.S. EPC Consultants India Pvt. Ltd. is a trusted Engineering,
                Procurement & Construction (EPC) partner with 18+ years of
                experience delivering turnkey ethanol distillery projects across
                India. We combine engineering precision, policy alignment, and
                sustainable design to help industries lead the clean energy
                transition.
              </p>
            </div>
          </div>

          <div className="w-1/2 relative h-[350px] rounded-xl overflow-hidden">
            <Image
              src="/assets/banner-image.jpeg"
              alt="about-us"
              fill
              quality={100}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div> */}

        {/* Who We Are */}
        <div className="relative flex flex-col lg:flex-row items-center gap-12 py-20 px-6 sm:px-10 md:px-16 lg:px-20 bg-white">
          {/* Left Side */}
          <div className="flex flex-col w-full lg:w-1/2 relative">
            {/* Accent Line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-pink-200 to-[#061833] rounded-full" />

            <div className="pl-6 flex flex-col gap-6">
              <h2 className="text-[#061833] font-bold text-2xl lg:text-4xl">
                Who We Are
              </h2>
              <p>
                N.S. EPC Consultants India Pvt. Ltd. is a trusted Engineering,
                Procurement & Construction (EPC) partner with 18+ years of
                experience delivering turnkey ethanol distillery projects across
                India. We combine engineering precision, policy alignment, and
                sustainable design to help industries lead the clean energy
                transition.
              </p>
              <p>
      With deep expertise in grain-based ethanol distilleries, Zero Liquid
      Discharge (ZLD) systems, and industrial infrastructure, we specialize
      in designing and executing end-to-end EPC projects aligned with India’s
      Ethanol Blending Program (EBP).
    </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
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
              </div>
            </div>
          </div>

          {/* Right Side Video */}
          <div className="w-full lg:w-1/2 relative h-[350px] rounded-xl overflow-hidden shadow-lg">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/assets/plant-worker.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-[#061833]/20" />
          </div>
        </div>

        {/* What We Deliver */}
        {/* <div className="flex flex-col py-16 sm:pb-20 px-6 sm:px-10 md:px-16 lg:px-20 bg-white">
          <div className="flex flex-col gap-5">
            <h2 className="text-[#061833] font-bold text-xl lg:text-4xl">
              What We Deliver
            </h2>

            <p className="mb-5">
              With deep expertise in grain-based ethanol distilleries, Zero
              Liquid Discharge (ZLD) systems, and industrial infrastructure, we
              specialize in designing and executing end-to-end EPC projects
              aligned with India’s Ethanol Blending Program (EBP). Our solutions
              integrate feasibility, engineering, procurement, construction, and
              commissioning — ensuring timely delivery, compliance, and maximum
              efficiency.
            </p>

            <div className="flex flex-col gap-2 mx-auto">
              <div className="flex items-center w-full py-5 rounded-full shadow-lg bg-gradient-to-r to-white from-pink-100">
                <div className="flex items-center justify-center rounded-full h-40 w-40 bg-[#061833] mx-auto">
                  <div className="flex items-center justify-center rounded-full h-32 w-32 bg-[#29405c] mx-auto">
                    <div className="rounded-full h-24 w-24 bg-[#4a6077] mx-auto text-white font-bold text-5xl flex items-center justify-center text-center">
                      1
                    </div>
                  </div>
                </div>

                <div className="w-2/3 px-5">
                  Turnkey EPC Solutions – From concept to commissioning.
                </div>
              </div>

              <div className="flex items-center w-full py-5 rounded-full shadow-lg bg-gradient-to-r to-white from-pink-100">
                <div className="w-2/3 px-5">
                  Sustainable Designs – 100% ZLD compliant plants.
                </div>

                <div className="flex items-center justify-center rounded-full h-40 w-40 bg-[#061833] mx-auto">
                  <div className="flex items-center justify-center rounded-full h-32 w-32 bg-[#29405c] mx-auto">
                    <div className="rounded-full h-24 w-24 bg-[#4a6077] mx-auto text-white font-bold text-5xl flex items-center justify-center text-center">
                      2
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center w-full py-5 rounded-full shadow-lg bg-gradient-to-r to-white from-pink-100">
                <div className="flex items-center justify-center rounded-full h-40 w-40 bg-[#061833] mx-auto">
                  <div className="flex items-center justify-center rounded-full h-32 w-32 bg-[#29405c] mx-auto">
                    <div className="rounded-full h-24 w-24 bg-[#4a6077] mx-auto text-white font-bold text-5xl flex items-center justify-center text-center">
                      3
                    </div>
                  </div>
                </div>
                <div className="w-2/3 px-5">
                  Strong ROI – Projects optimized for profitability and
                  performance.
                </div>
              </div>

              <div className="flex items-center w-full py-5 rounded-full shadow-lg bg-gradient-to-r to-white from-pink-100">
                <div className="w-2/3 px-5">
                  National Reach – Executed ethanol projects across multiple
                  states.
                </div>

                <div className="flex items-center justify-center rounded-full h-40 w-40 bg-[#061833] mx-auto">
                  <div className="flex items-center justify-center rounded-full h-32 w-32 bg-[#29405c] mx-auto">
                    <div className="rounded-full h-24 w-24 bg-[#4a6077] mx-auto text-white font-bold text-5xl flex items-center justify-center text-center">
                      4
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* What We Deliver - 2 */}
        {/* <div className="py-20 px-6 sm:px-10 md:px-16 lg:px-20 bg-gradient-to-b from-white to-pink-50">
  <h2 className="text-[#061833] font-bold text-2xl lg:text-4xl mb-10">
    What We Deliver
  </h2>

  <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
    {[
      {
        icon: <FaCogs size={32} />,
        title: "Turnkey EPC Solutions",
        desc: "From concept to commissioning, ensuring seamless execution.",
      },
      {
        icon: <FaRecycle size={32} />,
        title: "Sustainable Designs",
        desc: "100% ZLD compliant, eco-conscious plant layouts.",
      },
      {
        icon: <FaChartLine size={32} />,
        title: "Strong ROI",
        desc: "Optimized project economics for maximum profitability.",
      },
      {
        icon: <FaMapMarkedAlt size={32} />,
        title: "National Reach",
        desc: "Executed ethanol projects across multiple Indian states.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-full lg:w-[22%]"
      >
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#061833] to-[#29405c] text-white mb-4">
          {item.icon}
        </div>
        <h3 className="font-bold text-lg text-[#061833] mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</div> */}

        <section className="relative bg-gradient-to-b from-white to-pink-50 py-20 px-6 sm:px-10 md:px-16 lg:px-20">
          <h2 className="text-[#061833] text-3xl lg:text-4xl font-bold mb-16 text-left">
            What We Deliver
          </h2>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Connecting Line */}
            <motion.div
              className="absolute left-6 top-0 w-[3px] bg-gradient-to-b from-pink-200 to-[#061833] rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 4, ease: "easeOut" }}
            />

            <div className="space-y-16">
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start pl-16"
                >
                  {/* Circle Icon */}
                  <div className="absolute left-[0.7rem] top-1 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md ring-4 ring-pink-100 text-pink-200 text-xl z-10">
                    {item.icon}
                  </div>

                  {/* Card Content */}
                  <div className="bg-white shadow-lg rounded-2xl p-6 w-full border border-gray-100 hover:shadow-2xl transition-all">
                    <h3 className="text-[#061833] text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-20 bg-gradient-to-b to-white from-pink-50">
          <div className="flex flex-col gap-5 items-center justify-center">
            <h2 className="text-[#061833] font-bold text-xl lg:text-4xl text-center">
              Partner with Us to Build a Sustainable Future
            </h2>
            <p className="text-center max-w-2xl">
              Let’s discuss how we can bring your ethanol project to life —
              efficiently, sustainably, and profitably.
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

export default About;
