// pages/ethanol.js
"use client";
import Head from "next/head";
import IndiasMission from "./IndiasMission";
import Banner from "./Banner";
import FarmerStory from "./FarmerStory";
import OneG from "./OneG";
import TwoG from "./TwoG";
import Cbg from "./Cbg";
import Cogeneration from "./Cogeneration";
import Graphs from "./Graphs";
import Cta from "./Cta";
import useSpeakOnVisible from "@/hooks/useSpeakOnVisible";
import { useRef } from "react";

export default function EthanolInfoPage() {
  const bannerRef = useRef(null);
  const missionRef = useRef(null);
  const farmerStoryRef = useRef(null);
  const oneGRef = useRef(null);
  const twoGRef = useRef(null);
  const cbgRef = useRef(null);
  const congRef = useRef(null);
  const graphRef = useRef(null);
  const ctaRef = useRef(null);

useSpeakOnVisible([
  bannerRef,
  missionRef,
  farmerStoryRef,
  oneGRef,
  twoGRef,
  cbgRef,
  congRef,
  graphRef,
  ctaRef
]);
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
        <Banner />

        {/* MISSION / INDIA'S ETHANOL MISSION */}
        <IndiasMission ref={missionRef}/>

        {/* FARMERS STORY */}

        <FarmerStory ref={farmerStoryRef}/>

        {/* NEW BRI SECTION */}
        <div className="flex flex-col">
          {/* 1G */}
          <OneG ref={oneGRef}/>
          {/* 2G */}
          <TwoG ref={twoGRef}/>
          {/* CBG */}
          <Cbg ref={cbgRef}/>
          {/* Cogeneration & Power */}

          <Cogeneration ref={congRef}/>
        </div>

        {/* PROJECTION GRAPH */}
        <Graphs ref={graphRef}/>

        <div></div>

        {/* CTA */}
        <Cta ref={ctaRef}/>
      </main>
    </>
  );
}
