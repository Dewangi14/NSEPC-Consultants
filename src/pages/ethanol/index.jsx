// pages/ethanol.js
"use client";

import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaChartLine,
  FaUsers,
  FaHistory,
  FaBookOpen,
  FaBlender,
  FaChevronDown,
  FaCheckCircle,
} from "react-icons/fa";

const countersInitial = {
  savedForex: 53894, // crore (display as ₹53,894 cr)
  co2Reduced: 318.2, // lakh tons (display 318.2)
  farmersPaid: 81000, // crore
  distilleries: 500,
};

const formatNumber = (n) => {
  // friendly formatting for large ints
  if (n >= 1000) return Intl.NumberFormat("en-IN").format(Math.round(n));
  return n;
};

export default function EthanolInfoPage() {
  const [counters, setCounters] = useState({
    savedForex: 0,
    co2Reduced: 0,
    farmersPaid: 0,
    distilleries: 0,
  });

  const [activeNode, setActiveNode] = useState(0);
  const [mounted, setMounted] = useState(false);
  const countersRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // simple intersection -> trigger counting
  useEffect(() => {
    const el = countersRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // animate counts
            const duration = 1400;
            const start = performance.now();
            const from = { ...counters };
            const to = { ...countersInitial };

            const step = (t) => {
              const progress = Math.min((t - start) / duration, 1);
              setCounters({
                savedForex: Math.round(to.savedForex * progress),
                co2Reduced: +(to.co2Reduced * progress).toFixed(1),
                farmersPaid: Math.round(to.farmersPaid * progress),
                distilleries: Math.round(to.distilleries * progress),
              });
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>
          Ethanol in India — Sustainable Fuel & Bio-Refineries | N.S. EPC
          Consultants
        </title>
        <meta
          name="description"
          content="Explore ethanol in India — policy, bio-refineries, farmer benefits and environmental impact. N.S. EPC Consultants offers turnkey ethanol and bio-refinery EPC solutions aligned with EBP and ZLD compliance."
        />
        <meta
          name="keywords"
          content="ethanol in India, ethanol blending program, bio-refinery, 1G ethanol, 2G ethanol, ethanol benefits, ethanol EPC, zero liquid discharge"
        />
      </Head>

      <main className="min-h-screen bg-pink-50 text-slate-800">
        {/* HERO */}
        <section className="relative h-screen md:h-[66vh] lg:h-[60vh] overflow-hidden bg-[url('/assets/molecules.png')] bg-cover bg-no-repeat">
          {/* <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/assets/ethanol-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          /> */}
          <div className="absolute inset-0 bg-linear-to-t from-[#061833] to-[#061833]/50" />
          <div className="relative max-w-6xl mx-auto px-6 lg:px-20 lg:pt-20 h-full flex flex-col justify-center items-start gap-6">
            <motion.h1
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl"
            >
              Ethanol — India’s Fuel for a Sustainable Future
            </motion.h1>
            <motion.p
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-white/90 max-w-2xl"
            >
              From reducing oil imports to empowering farmers, ethanol is a
              strategic, clean energy solution. Explore policy progress,
              bio-refineries and impact — and see how N.S. EPC Consultants
              delivers turnkey ethanol projects.
            </motion.p>

            <div className="mt-4 flex flex-col md:gap-4 md:flex-row md:items-center">
              <a
                href="#mission"
                className="inline-flex items-center gap-3 bg-pink-100 hover:bg-pink-100 text-[#061833] font-semibold px-5 py-3 rounded-full shadow-lg transition"
                aria-label="Explore India's Ethanol Mission"
              >
                Explore India’s Ethanol Journey
              </a>
              <a
                href="#contact"
                className="inline-block text-white/90 underline font-bold mt-5 md:mt-0"
                aria-label="Contact N.S. EPC Consultants"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* MISSION / INDIA'S ETHANOL MISSION */}
        <section
          id="mission"
          className="py-16 lg:py-20 px-6 lg:px-20 bg-gradient-to-b to-pink-50 from-white"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#061833] font-bold text-3xl lg:text-4xl text-left mb-6"
              >
                India’s Mission: From 10% to 20% Ethanol Blending by 2025
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="text-slate-700 mb-6"
              >
                The Ethanol Blending Programme (EBP) reduces imports, lowers
                emissions and supports rural incomes. After policy reforms and
                LTOAs, India reached 10% blending in 2022 — a milestone
                delivering major economic and environmental benefits.
              </motion.p>

              {/* Tiny timeline */}
              <div className="flex flex-col lg:flex-row gap-4 lg:items-center text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <FaHistory className="text-pink-500 text-lg" />
                  <span className="font-semibold">2003</span>
                  <span className="ml-2">EBP launched</span>
                </div>
                <div className="flex items-center gap-2">
                <FaBookOpen className="text-pink-500 text-lg" />
                  <span className="font-semibold">2014</span>
                  <span className="ml-2">Major reforms</span>
                </div>
                <div className="flex items-center gap-2">
                <FaCheckCircle className="text-pink-500 text-lg" />
                  <span className="font-semibold">2022</span>
                  <span className="ml-2">10% Blending Achieved</span>
                </div>
              </div>

              {/* Data cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                >
                  <h4 className="text-sm text-gray-600">Target</h4>
                  <div className="text-xl font-bold text-[#061833]">
                    20% by 2025
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                >
                  <h4 className="text-sm text-gray-600">Farmers’ Benefit</h4>
                  <div className="text-xl font-bold text-[#061833]">
                    ₹81,000 Cr
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                >
                  <h4 className="text-sm text-gray-600">CO₂ Reduction</h4>
                  <div className="text-xl font-bold text-[#061833]">
                    318 Lakh Tons
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                >
                  <h4 className="text-sm text-gray-600">Distilleries</h4>
                  <div className="text-xl font-bold text-[#061833]">500+</div>
                </motion.div>
              </div>
            </div>

            {/* Animated infographic / counters */}
            <div className="relative rounded-2xl p-6 shadow-md bg-[#061833]">
              {/* <div className="absolute inset-0 bg-gradient-to-t from-[#061833]/85 to-[#061833]/50 rounded-2xl" /> */}
              <h5 className="text-pink-200 font-semibold mb-4 text-xl">
                Measurable Impact
              </h5>
              <div ref={countersRef} className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      ₹{formatNumber(counters.savedForex)} Cr
                    </div>
                    <div className="text-sm text-pink-200">Forex Saved</div>
                  </div>
                  <div className="text-pink-200 text-3xl">
                    <FaChartLine />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {counters.co2Reduced} Lakh
                    </div>
                    <div className="text-sm text-pink-200">CO₂ Reduced</div>
                  </div>
                  <div className="text-pink-200 text-3xl">
                    <FaLeaf />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      ₹{formatNumber(counters.farmersPaid)} Cr
                    </div>
                    <div className="text-sm text-pink-200">Paid to Farmers</div>
                  </div>
                  <div className="text-pink-200 text-3xl">
                    <FaUsers />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {formatNumber(counters.distilleries)}+
                    </div>
                    <div className="text-sm text-pink-200">
                      Operational Distilleries
                    </div>
                  </div>
                  <div className="text-pink-200 text-3xl">
                    <FaHistory />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FARMERS STORY */}
        <section className="py-16 lg:py-20 px-6 lg:px-20 bg-gradient-to-b from-pink-50 to-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-1">
              <h3 className="text-[#061833] font-bold text-3xl lg:text-4xl text-left mb-6">
                Empowering Farmers — From{" "}
                <span className="text-pink-400">Annadaata</span> to{" "}
                <span className="text-pink-400">Urjadaata</span>
              </h3>
              <p className="text-slate-700 mb-4">
                Ethanol production has given farmers a new income stream and
                turned agricultural produce into a national energy resource.
                Sugarcane, maize and surplus grains are turned into value,
                improving rural livelihoods and driving local development.
              </p>

              <blockquote className="border-l-4 border-pink-300 pl-4 italic text-slate-700">
                “Ethanol is not just fuel — it’s a promise of prosperity for
                India’s farmers.”
              </blockquote>

              <div className="mt-6 flex flex-col-reverse lg:flex gap-4">
                <a
                  href="#contact"
                  className="bg-[#061833] text-white px-5 py-2 rounded-full shadow hover:bg-[#0a2850] transition text-center"
                >
                  Partner with Farmers
                </a>
                <a href="#bio-refinery" className="text-[#061833] underline text-center">
                  Learn about Bio-Refineries
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 w-full h-84 rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-top"
                src="/assets/poster-img.png"
              />
            </div>
          </div>
        </section>

        {/* NEW BRI SECTION */}
        <div className="flex flex-col">
          
          <section className="py-16 lg:py-20 px-6 lg:px-20 bg-white">

            <div className="max-w-6xl mx-auto pb-5">
            <motion.h3
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#061833] font-bold text-3xl lg:text-4xl text-left mb-4"
            >
              Integrated Bio-Refinery Model
            </motion.h3>
            </div>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              
              <div className="order-1 lg:order-1 py-10">
                <h3 className="text-[#061833] font-bold text-lg lg:text-xl text-left mb-6">
                  1G Ethanol (Grain-Based)
                </h3>

                <p className="text-slate-700 mb-4 font-semibold">
                  Conventional ethanol from sugarcane, maize and other grains.
                </p>

                <p className="text-slate-700 mb-4">
                  1G ethanol uses conventional carbohydrate feedstocks
                  (sugarcane juice, syrup, maize) that are fermented and
                  distilled. Quick ramp-up, proven technology and widely adopted
                  across India.
                </p>
              </div>

              <div className="order-1 lg:order-1 w-full h-full flex justify-start">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/1g-diagram.png"
                />
              </div>
            </div>
          </section>
          <section className="py-16 lg:py-20 px-6 lg:px-20 bg-pink-50">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="order-1 lg:order-1 w-full h-full flex justify-start">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/2g-diagram.png"
                />
              </div>
              <div className="order-1 lg:order-1 py-10">
                <h3 className="text-[#061833] font-bold text-lg lg:text-xl text-left mb-6">
                2G Ethanol (Residue-Based)
                </h3>

                <p className="text-slate-700 mb-4 font-semibold">
                Second-generation ethanol from agricultural residues.
                </p>

                <p className="text-slate-700 mb-4">
                2G ethanol uses crop residues like straw and bagasse. It unlocks additional feedstock, improves circularity and reduces competition with food crops. More complex but higher sustainability benefits.
                </p>
              </div>
            </div>
          </section>
          <section className="py-16 lg:py-20 px-6 lg:px-20 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="order-1 lg:order-1 py-10">
                <h3 className="text-[#061833] font-bold text-lg lg:text-xl text-left mb-6">
                CBG / Bio-CNG
                </h3>

                <p className="text-slate-700 mb-4 font-semibold">
                Compressed biogas for transport & industry.
                </p>

                <p className="text-slate-700 mb-4">
                CBG (Compressed Biogas) is produced from anaerobic digestion of organic residues. It complements ethanol projects by using waste streams to produce renewable gas for grid or transport use.
                </p>
              </div>

              <div className="order-1 lg:order-1 w-full h-full flex justify-start">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/cbg-diagram.png"
                />
              </div>
            </div>
          </section>
          <section className="py-16 lg:py-20 px-6 lg:px-20 bg-pink-50">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="order-1 lg:order-1 w-full h-full flex justify-start">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/cogeneration-diagram.webp"
                />
              </div>
              <div className="order-1 lg:order-1 py-10">
                <h3 className="text-[#061833] font-bold text-lg lg:text-xl text-left mb-6">
                Cogeneration & Power
                </h3>

                <p className="text-slate-700 mb-4 font-semibold">
                Waste-to-power and steam generation integrated in biorefineries.
                </p>

                <p className="text-slate-700 mb-4">
                Cogeneration uses bagasse and other residues to produce steam and electricity — enabling self-sufficiency and exportable power generation for industrial sites.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* PROJECTION GRAPH */}
        <div className="flex flex-col">
          
          <section className="py-16 lg:py-20 px-6 lg:px-20 bg-gradient-to-b to-pink-50 from-white">

            <div className="max-w-6xl mx-auto pb-5">
            <motion.h3
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#061833] font-bold text-3xl lg:text-4xl text-left mb-4"
            >
             Effects of Landmark Reforms
            </motion.h3>
          
            </div>
            <div className="max-w-6xl mx-auto pb-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full justify-start">

              <div className="flex flex-col gap-5 justify-start">

                <h2 className="text-lg font-medium">
                1) &nbsp; Ethanol blending % has increased more than 6 times in last few years
                </h2>

              <img
                className="w-full h-full object-contain"
                src="/assets/ethanol-fuel-blending.png"
              />
              </div>
              <div className="flex flex-col gap-5 justify-start">

                <h2 className="text-lg font-medium">
                2) &nbsp; Ethanol %age contribution from different feed stocks
                </h2>

              <img
                className="w-full h-full object-contain"
               src="/assets/piechart.jpg"
              />
               
              </div>
            
              </div>
            </div>
            
          </section>
        
        </div>

        <div>

        </div>

        {/* CTA */}
        <section
          id="contact"
          className="py-16 lg:py-20 px-6 lg:px-20 bg-gradient-to-b to-pink-50 from-white"
        >
          <div className="max-w-6xl mx-auto bg-[#061833] rounded-2xl text-white p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold">
                Partner with N.S. EPC Consultants
              </h3>
              <p className="text-white/90 max-w-xl mt-2">
                From feasibility to commissioning, we deliver turnkey ethanol
                and bio-refinery EPC solutions aligned with policy and
                sustainability goals.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
              <a
                href="/contact"
                className="bg-pink-100 hover:bg-pink-100 px-4 py-2 lg:px-6 lg:py-3 rounded-full font-semibold shadow text-[#061833]"
              >
                Schedule a Consultation
              </a>
              <a
                href="/resources"
                className="border border-white text-white px-4 py-2 lg:px-6 lg:py-3 text-center rounded-full font-medium hover:bg-white/5 transition"
              >
                View Resources
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
