"use client";

import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import FadeInFromBottom from "@/components/animations/FadeInFromBottom";
import { useRouter } from "next/router";
import Image from "next/image";

const carouselImages = [
  "/assets/sdr-3.jpg",
  "/assets/sdr-1.jpg",
  "/assets/sdr-2.jpg",
  "/assets/sdr-4.jpg",
  "/assets/sdr-5.jpg",
  "/assets/banner-image.jpeg",
  "/assets/slider-7.jpeg",
  "/assets/vision-bg.jpeg",
  "/assets/mission-bg.jpeg",
  "/assets/about-us.png",
  "/assets/slider-4.jpeg",
];

const HeroSection = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {carouselImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[1200ms] ease-in-out 
            ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={src}
              alt="hero"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#061833] pointer-events-none z-0"></div>

      {/* CONTENT (Revised – now overlays image like screenshot) */}
      <div className="relative z-1 flex items-center h-full px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="w-full flex flex-col gap-3 text-center items-center pt-40">

          {/* Featured Tag (Optional - mimic screenshot style) */}
          <FadeInFromBottom duration={0.8}>
            <div className="uppercase text-sm tracking-widest text-white/80 text-shadow-2xl">
              NSEPC Consultants India Pvt Ltd
            </div>
          </FadeInFromBottom>

          {/* Main Heading */}
          <FadeInFromBottom duration={1}>
            <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight  max-w-2xl">
              Building India’s Clean Energy Future
            </h1>
          </FadeInFromBottom>

          {/* CTA Button */}
          <FadeInFromBottom delay={0.3} distance={40}>
            <button
              className="mt-4 rounded-full px-6 sm:px-8 lg:px-10 py-2.5  
              text-sm sm:text-base lg:text-md font-semibold bg-pink-50 text-[#061833]
              transition-all duration-300 w-fit"
              onClick={() => router.push("/payment")}
            >
              Request a Consultation
            </button>
          </FadeInFromBottom>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
