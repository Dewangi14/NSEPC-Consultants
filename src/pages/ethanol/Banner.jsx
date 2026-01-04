import React from 'react'
import { motion } from "framer-motion";

const Banner = () => {
  return (
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
  )
}

export default Banner