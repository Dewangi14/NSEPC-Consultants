import React, { useEffect, useRef, useState } from 'react'
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
  
const IndiasMission = React.forwardRef((props, ref) => {
      const [counters, setCounters] = useState({
        savedForex: 0,
        co2Reduced: 0,
        farmersPaid: 0,
        distilleries: 0,
      });

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
    <section
    ref={ref}
    data-text={`India’s Mission: From 10% to 20% Ethanol Blending by 2025.....
        The Ethanol Blending Programme (EBP) reduces imports, lowers
          emissions and supports rural incomes. After policy reforms and
          LTOAs, India reached 10% blending in 2022 — a milestone
          delivering major economic and environmental benefits....
          Timelines : 2003 - EBP launched ....
          2014 - Major reforms ......
          2022 - 10% Blending Achieved .....
          Target :  20% by 2025 .....
          Farmers’ Benefit :  81,000 Cr Rupees .....
          CO₂ Reduction : 318 Lakh Tons ......
          Distilleries : 500+ .....

                `}
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
  )
})

export default IndiasMission