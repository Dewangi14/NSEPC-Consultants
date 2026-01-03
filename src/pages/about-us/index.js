import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";

import Banner from "./Banner";
import WhoWeAre from "./WhoWeAre";
import WhatWeDeliver from "./WhatWeDeliver";
import Projects from "./Projects";
import Cta from "./Cta";
import useSpeakOnVisible from "@/hooks/useSpeakOnVisible";

const About = () => {

    const bannerRef = useRef(null);
    const whoWeAreRef = useRef(null);
    const whatWeDeliverRef = useRef(null);
    const projectsRef = useRef(null);
    const ctaRef = useRef(null);

  useSpeakOnVisible([
    bannerRef,
    whoWeAreRef,
    whatWeDeliverRef,
    projectsRef,
    ctaRef
  ]);
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
        <Banner/>

        {/* Who We Are */}
        <WhoWeAre ref={whoWeAreRef}/>

        {/* What We Deliver */}

        <WhatWeDeliver ref={whatWeDeliverRef}/>
        {/* Completed Projects */}
   <Projects ref={projectsRef}/>

        {/* CTA */}
     <Cta ref={ctaRef}/>
      </div>
    </>
  );
};

export default About;
