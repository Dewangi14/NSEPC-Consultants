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

  const bioNodes = [
    {
      id: "1G",
      title: "1G Ethanol (Grain-Based)",
      short: "Conventional ethanol from sugarcane, maize and other grains.",
      content:
        "1G ethanol uses conventional carbohydrate feedstocks (sugarcane juice, syrup, maize) that are fermented and distilled. Quick ramp-up, proven technology and widely adopted across India.",
    },
    {
      id: "2G",
      title: "2G Ethanol (Residue-Based)",
      short: "Second-generation ethanol from agricultural residues.",
      content:
        "2G ethanol uses crop residues like straw and bagasse. It unlocks additional feedstock, improves circularity and reduces competition with food crops. More complex but higher sustainability benefits.",
    },
    {
      id: "CBG",
      title: "CBG / Bio-CNG",
      short: "Compressed biogas for transport & industry.",
      content:
        "CBG (Compressed Biogas) is produced from anaerobic digestion of organic residues. It complements ethanol projects by using waste streams to produce renewable gas for grid or transport use.",
    },
    {
      id: "Cogeneration",
      title: "Cogeneration & Power",
      short: "Waste-to-power and steam generation integrated in biorefineries.",
      content:
        "Cogeneration uses bagasse and other residues to produce steam and electricity — enabling self-sufficiency and exportable power generation for industrial sites.",
    },
  ];

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
        <section className="relative h-screen md:h-[66vh] lg:h-[80vh] overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/assets/ethanol-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061833]/85 to-[#061833]/50" />
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
        <section id="mission" className="py-16 lg:py-20 px-6 lg:px-20 bg-gradient-to-b to-pink-50 from-white">
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
              <div className="flex gap-4 items-center text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <FaHistory className="text-pink-500 text-lg" />
                  <span className="font-semibold">2003</span>
                  <span className="ml-2">EBP launched</span>
                </div>
                <FaBookOpen className="text-pink-500 text-lg" />
                <div className="flex items-center gap-2">
                  <span className="font-semibold">2014</span>
                  <span className="ml-2">Major reforms</span>
                </div>
                <FaCheckCircle className="text-pink-500 text-lg" />
                <div className="flex items-center gap-2">
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
            <div className="relative bg-[url('/assets/molecules.png')] bg-cover bg-no-repeat rounded-2xl p-6 shadow-md">
            <div className="absolute inset-0 bg-gradient-to-t from-[#061833]/85 to-[#061833]/50 rounded-2xl" />
              <h5 className="text-white font-semibold mb-4">
                Measurable Impact
              </h5>
              <div ref={countersRef} className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      ₹{formatNumber(counters.savedForex)} Cr
                    </div>
                    <div className="text-sm text-gray-600">Forex Saved</div>
                  </div>
                  <div className="text-pink-500 text-3xl">
                    <FaChartLine />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {counters.co2Reduced} Lakh t
                    </div>
                    <div className="text-sm text-gray-600">CO₂ Reduced</div>
                  </div>
                  <div className="text-pink-500 text-3xl">
                    <FaLeaf />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      ₹{formatNumber(counters.farmersPaid)} Cr
                    </div>
                    <div className="text-sm text-gray-600">Paid to Farmers</div>
                  </div>
                  <div className="text-pink-500 text-3xl">
                    <FaUsers />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {formatNumber(counters.distilleries)}+
                    </div>
                    <div className="text-sm text-gray-600">
                      Operational Distilleries
                    </div>
                  </div>
                  <div className="text-pink-500 text-3xl">
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
            <div className="order-2 lg:order-1">
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

              <div className="mt-6 flex gap-4">
                <a
                  href="#contact"
                  className="bg-[#061833] text-white px-5 py-2 rounded-full shadow hover:bg-[#0a2850] transition"
                >
                  Partner with Farmers
                </a>
                <a href="#bio-refinery" className="text-[#061833] underline">
                  Learn about Bio-Refineries
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 w-full h-84 rounded-xl overflow-hidden shadow-lg">
              <video
                className="w-full h-full object-cover"
                src="/assets/sugarcane-farmer.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </section>

        {/* BIO-REFINERY INTERACTIVE */}
        <section id="bio-refinery" className="py-16 lg:py-20 px-6 lg:px-20 bg-gradient-to-b to-pink-50 from-white">
          <div className="max-w-6xl mx-auto flex flex-col gap-5">
            <motion.h3
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#061833] font-bold text-3xl lg:text-4xl text-left mb-4"
            >
              Integrated Bio-Refinery Model
            </motion.h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left: Inline SVG schematic */}
              <div className="relative bg-white rounded-2xl p-6 shadow-md overflow-hidden">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background grid */}
                  <rect width="400" height="300" fill="#f9fafb" rx="16" />
                  {/* Arrows and connections */}
                  <path
                    d="M80 150 Q120 100 160 150"
                    stroke="#e91e63"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5 5"
                  />
                  <path
                    d="M160 150 Q200 200 240 150"
                    stroke="#e91e63"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5 5"
                  />
                  <path
                    d="M240 150 Q280 100 320 150"
                    stroke="#e91e63"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5 5"
                  />

                  {/* Node circles */}
                  <circle cx="80" cy="150" r="25" fill="#061833" />
                  <circle cx="160" cy="150" r="25" fill="#061833" />
                  <circle cx="240" cy="150" r="25" fill="#061833" />
                  <circle cx="320" cy="150" r="25" fill="#061833" />

                  {/* Labels */}
                  <text
                    x="80"
                    y="155"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    1G
                  </text>
                  <text
                    x="160"
                    y="155"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    2G
                  </text>
                  <text
                    x="240"
                    y="155"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    CBG
                  </text>
                  <text
                    x="320"
                    y="155"
                    textAnchor="middle"
                    fill="white"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    Power
                  </text>
                </svg>

                {/* Pulsing interactive buttons placed over SVG */}
                <div className="absolute left-[16%] top-[46%]">
                  <button
                    onClick={() => setActiveNode(0)}
                    className={`p-3 rounded-full transition shadow-md ${
                      activeNode === 0
                        ? "bg-pink-600 scale-110"
                        : "bg-pink-500/90 hover:bg-[#061833] cursor-pointer"
                    } animate-pulse`}
                  ></button>
                </div>
                <div className="absolute left-[38%] top-[48%]">
                  <button
                    onClick={() => setActiveNode(1)}
                    className={`p-3 rounded-full transition shadow-md ${
                      activeNode === 1
                        ? "bg-pink-600 scale-110"
                        : "bg-pink-500/90 hover:bg-[#061833] cursor-pointer"
                    } animate-pulse`}
                  ></button>
                </div>
                <div className="absolute left-[60%] top-[46%]">
                  <button
                    onClick={() => setActiveNode(2)}
                    className={`p-3 rounded-full transition shadow-md ${
                      activeNode === 2
                        ? "bg-pink-600 scale-110"
                        : "bg-pink-500/90 hover:bg-[#061833] cursor-pointer"
                    } animate-pulse`}
                  ></button>
                </div>
                <div className="absolute left-[80%] top-[46%]">
                  <button
                    onClick={() => setActiveNode(3)}
                    className={`p-3 rounded-full transition shadow-md ${
                      activeNode === 3
                        ? "bg-pink-600 scale-110"
                        : "bg-pink-500/90 hover:bg-[#061833] cursor-pointer"
                    } animate-pulse`}
                  ></button>
                </div>
                <p className="text-[#061833] font-bold mt-3 text-center">
                  Click pink process dot to view details
                </p>

                {/* Legend below */}
                <div className="flex justify-center mt-6 gap-6 text-xs text-gray-600">
                  <span className="border-r-1 pe-2">1G Ethanol</span>
                  <span className="border-r-1 pe-2">2G Ethanol</span>
                  <span className="border-r-1 pe-2">CBG</span>
                  <span className="">Cogeneration</span>
                </div>
              </div>

              {/* Right: Node detail with optional graphics */}
              <div className="space-y-4">
                {/* <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h4 className="text-[#061833] font-semibold">
            Click a process to view details
          </h4>
          <p className="text-slate-700 text-sm mt-2">
            Explore different ethanol production streams and how they integrate
            into a single bio-refinery ecosystem.
          </p>
        </div> */}

                {activeNode !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
                  >
                    <h5 className="text-[#061833] font-semibold mb-2">
                      {bioNodes[activeNode].title}
                    </h5>
                    <p className="text-slate-700 text-sm mb-3">
                      {bioNodes[activeNode].content}
                    </p>

                    {/* Optional graphic from booklet */}
                    <img
                      src={`/assets/${bioNodes[
                        activeNode
                      ].id.toLowerCase()}-diagram.webp`}
                      alt={bioNodes[activeNode].title}
                      className="rounded-lg mt-3 shadow-sm"
                    />

                    <div className="text-xs text-gray-500 mt-2">
                      Click other nodes to explore.
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT SECTION */}
        <section className="py-16 lg:py-20 px-6 lg:px-20 bg-gradient-to-b to-white from-pink-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Environmental Impact */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-md"
            >
              <h3 className="text-[#061833] text-xl font-bold mb-4">
                Environmental Impact
              </h3>

              {/* Graph placeholder (replace with real from booklet) */}
              {/* Inline SVG — CO2 reduction trend (stylized) */}
<svg
  viewBox="0 0 700 320"
  preserveAspectRatio="xMidYMid meet"
  role="img"
  aria-labelledby="co2Title co2Desc"
  className="w-full h-auto"
>
  <title id="co2Title">CO₂ Reduction Trend (2014–2022)</title>
  <desc id="co2Desc">
    Stylized trend showing cumulative CO₂ reduction over time. Total: 318.2 lakh tons (2014–2022).
  </desc>

  {/* <!-- Background --> */}
  <rect width="100%" height="100%" rx="14" fill="#ffffff" />

  {/* <!-- Grid lines (subtle) --> */}
  <g opacity="0.06" stroke="#061833">
    <line x1="60" x2="640" y1="260" y2="260" />
    <line x1="60" x2="640" y1="200" y2="200" />
    <line x1="60" x2="640" y1="140" y2="140" />
    <line x1="60" x2="640" y1="80" y2="80" />
  </g>

  {/* <!-- X & Y axis --> */}
  <line x1="60" x2="640" y1="260" y2="260" stroke="#E6EEF8" strokeWidth="1.5" />
  <line x1="60" x2="60" y1="40" y2="260" stroke="#E6EEF8" strokeWidth="1.5" />

  {/* <!-- Y labels (stylized not numeric) --> */}
  <text x="18" y="52" fontSize="12" fill="#6b7280">High</text>
  <text x="16" y="142" fontSize="12" fill="#9ca3af">Med</text>
  <text x="12" y="252" fontSize="12" fill="#9ca3af">Low</text>

  {/* <!-- X labels (years) --> */}
  <g fill="#475569" fontSize="12" textAnchor="middle">
    <text x="60" y="280">2014</text>
    <text x="140" y="280">2016</text>
    <text x="220" y="280">2017</text>
    <text x="300" y="280">2018</text>
    <text x="380" y="280">2019</text>
    <text x="460" y="280">2020</text>
    <text x="540" y="280">2021</text>
    <text x="620" y="280">2022</text>
  </g>

  {/* <!-- Area under the line (gradient) --> */}
  <defs>
    <linearGradient id="areaGrad" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor="#e73370" stopOpacity="0.18" />
      <stop offset="100%" stopColor="#061833" stopOpacity="0.03" />
    </linearGradient>

    <linearGradient id="lineGrad" x1="0" x2="1">
      <stop offset="0%" stopColor="#e73370" />
      <stop offset="100%" stopColor="#061833" />
    </linearGradient>

    <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0a2540" floodOpacity="0.06"/>
    </filter>
  </defs>

  {/* <!-- Sample points (stylized progression) -->
  <!-- Points array expressed as approximate y positions (smaller y = higher on chart) -->
  <!-- Coordinates: (x, y)
       2014->60: y=240
       2016->140: y=210
       2017->220: y=190
       2018->300: y=162
       2019->380: y=140
       2020->460: y=120
       2021->540: y=100
       2022->620: y=78
  --> */}
  <path
    d="
      M60 240
      C95 230, 125 220, 140 210
      C170 200, 200 195, 220 190
      C250 180, 280 170, 300 162
      C340 152, 360 146, 380 140
      C410 132, 430 126, 460 120
      C500 110, 520 104, 540 100
      C580 88, 600 83, 620 78
      L620 260 L60 260 Z
    "
    fill="url(#areaGrad)"
    filter="url(#dropShadow)"
  />

  {/* <!-- The trend line --> */}
  <path
    d="M60 240 C95 230,125 220,140 210 C170 200,200 195,220 190 C250 180,280 170,300 162 C340 152,360 146,380 140 C410 132,430 126,460 120 C500 110,520 104,540 100 C580 88,600 83,620 78"
    fill="none"
    stroke="url(#lineGrad)"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  {/* <!-- Glow / highlight circle on last point (2022) --> */}
  <g>
    <circle cx="620" cy="78" r="9" fill="#061833" />
    <circle cx="620" cy="78" r="5" fill="#e73370" />
    <g opacity="0.12">
      <circle cx="620" cy="78" r="22" fill="#e73370" />
    </g>
  </g>

  {/* <!-- Annotation: total --> */}
  <rect x="440" y="20" rx="8" ry="8" width="220" height="44" fill="#061833" opacity="0.95" />
  <text x="550" y="38" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">Total CO₂ Reduced</text>
  <text x="550" y="56" textAnchor="middle" fill="#ffd6e8" fontSize="13" fontWeight="600">318.2 lakh t (2014–22)</text>
</svg>


              <ul className="space-y-3 text-slate-700">
                <li>
                  <strong>318.2 lakh tons</strong> CO₂ reduced between 2014–22.
                </li>
                <li>Cleaner tailpipe emissions and improved air quality.</li>
                <li>Renewable feedstock lowers lifecycle carbon intensity.</li>
              </ul>
            </motion.div>

            {/* Economic Impact */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md"
            >
              <h3 className="text-[#061833] text-xl font-bold mb-4">
                Economic Impact
              </h3>

              {/* Graph placeholder (replace with real from booklet) */}
              <svg
  viewBox="0 0 700 320"
  preserveAspectRatio="xMidYMid meet"
  role="img"
  aria-labelledby="ethanolTitle ethanolDesc"
  class="w-full h-auto"
>
  <title id="ethanolTitle">Ethanol Blending Growth (2014–2025)</title>
  <desc id="ethanolDesc">
    Trend showing ethanol blending percentage increase from 2014 to the target year 2025.
  </desc>

  {/* <!-- Background --> */}
  <rect width="100%" height="100%" rx="14" fill="#ffffff" />

  {/* <!-- Grid lines --> */}
  <g opacity="0.06" stroke="#061833">
    <line x1="60" x2="640" y1="260" y2="260" />
    <line x1="60" x2="640" y1="200" y2="200" />
    <line x1="60" x2="640" y1="140" y2="140" />
    <line x1="60" x2="640" y1="80" y2="80" />
  </g>

  {/* <!-- Axes --> */}
  <line x1="60" x2="640" y1="260" y2="260" stroke="#E6EEF8" stroke-width="1.5" />
  <line x1="60" x2="60" y1="40" y2="260" stroke="#E6EEF8" stroke-width="1.5" />

  {/* <!-- Y labels --> */}
  <text x="24" y="262" font-size="12" fill="#9ca3af">0%</text>
  <text x="18" y="202" font-size="12" fill="#9ca3af">5%</text>
  <text x="18" y="142" font-size="12" fill="#9ca3af">10%</text>
  <text x="14" y="82" font-size="12" fill="#9ca3af">15%</text>
  <text x="10" y="42" font-size="12" fill="#6b7280">20%</text>

  {/* <!-- X labels --> */}
  <g fill="#475569" font-size="12" text-anchor="middle">
    <text x="60" y="280">2014</text>
    <text x="180" y="280">2016</text>
    <text x="300" y="280">2018</text>
    <text x="420" y="280">2020</text>
    <text x="540" y="280">2022</text>
    <text x="640" y="280">2025</text>
  </g>

  {/* <!-- Gradients --> */}
  <defs>
    <linearGradient id="ethanolArea" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#e73370" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#061833" stop-opacity="0.03" />
    </linearGradient>

    <linearGradient id="ethanolLine" x1="0" x2="1">
      <stop offset="0%" stop-color="#e73370" />
      <stop offset="100%" stop-color="#061833" />
    </linearGradient>

    <filter id="ethanolShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#0a2540" flood-opacity="0.06"/>
    </filter>
  </defs>

  {/* <!-- Area under curve --> */}
  <path
    d="
      M60 250
      C120 230, 180 220, 180 210
      C240 190, 300 160, 300 150
      C360 130, 420 120, 420 110
      C480 100, 540 90, 540 80
      C580 60, 620 50, 640 44
      L640 260 L60 260 Z
    "
    fill="url(#ethanolArea)"
    filter="url(#ethanolShadow)"
  />

  {/* <!-- Main curve --> */}
  <path
    d="
      M60 250
      C120 230, 180 220, 180 210
      C240 190, 300 160, 300 150
      C360 130, 420 120, 420 110
      C480 100, 540 90, 540 80
      C580 60, 620 50, 640 44
    "
    fill="none"
    stroke="url(#ethanolLine)"
    stroke-width="4"
    stroke-linecap="round"
  />

  {/* <!-- Data point circles --> */}
  <g fill="#e73370" stroke="#fff" stroke-width="2">
    <circle cx="60" cy="250" r="6" />
    <circle cx="180" cy="210" r="6" />
    <circle cx="300" cy="150" r="6" />
    <circle cx="420" cy="110" r="6" />
    <circle cx="540" cy="80" r="6" />
    <circle cx="640" cy="44" r="7" />
  </g>

  {/* <!-- Annotation: target --> */}
  <rect x="480" y="20" rx="8" ry="8" width="200" height="44" fill="#061833" opacity="0.95" />
  <text x="580" y="38" text-anchor="middle" fill="#fff" font-size="13" font-weight="700">Target: 20% Blending</text>
  <text x="580" y="56" text-anchor="middle" fill="#ffd6e8" font-size="13" font-weight="600">By 2025</text>
</svg>


              <ul className="space-y-3 text-slate-700">
                <li>
                  <strong>₹53,894 Cr</strong> foreign exchange saved through
                  reduced imports.
                </li>
                <li>
                  <strong>₹81,000 Cr</strong> paid to farmers through ethanol
                  purchases.
                </li>
                <li>Significant rural employment and economic growth.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-16 lg:py-20 px-6 lg:px-20 bg-gradient-to-b to-pink-50 from-white">
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

            <div className="flex gap-4">
              <a
                href="/contact"
                className="bg-pink-100 hover:bg-pink-100 px-6 py-3 rounded-full font-semibold shadow text-[#061833]"
              >
                Schedule a Consultation
              </a>
              <a
                href="/resources"
                className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/5 transition"
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
