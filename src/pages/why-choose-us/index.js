import React, { useRef } from "react";
import Head from "next/head";
import useSpeakOnVisible from "@/hooks/useSpeakOnVisible";
import Banner from "./Banner";
import Niche from "./Niche";
import Team from "./Team";
import Quality from "./Quality";
import Strengths from "./Strengths";
import Cta from "./Cta";

const Choose = () => {
  const nicheRef = useRef(null);
  const teamRef = useRef(null);
  const qualityRef = useRef(null);
  const strengthRef = useRef(null);
  const ctaRef = useRef(null);

useSpeakOnVisible([
  nicheRef,
  teamRef,
  qualityRef,
  strengthRef,
  ctaRef
]);
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
     <Banner/>

        {/* Niche Expertise */}
      <Niche ref={nicheRef}/>

        {/* Meet our Team */}
       <Team ref={teamRef}/>

        {/* Quality & Innovation */}
        <Quality ref={qualityRef}/>
        {/* Our Core Strengths */}

    <Strengths ref={strengthRef}/>

        {/* CTA */}
    <Cta ref={ctaRef}/>
      </div>
    </>
  );
};

export default Choose;
