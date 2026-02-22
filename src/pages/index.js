// import React, { useRef } from "react";
// import HeroSection from './_landing/HeroSection'
// import AboutUs from './_landing/AboutUs'
// import Mission from './_landing/Mission'
// import Vision from './_landing/Vision'
// import Services from './_landing/Services'
// import CounterNumbers from './_landing/CounterNumbers'
// import WhyChooseUs from './_landing/WhyChooseUs'
// import Testimonials from './_landing/Testimonials'
// import Team from './_landing/Team'
// import ContactUs from './_landing/ContactUs'
// import Resources from './_landing/Resources'
// import Achievements from './_landing/Achievements'
// import useSpeakOnVisible from "../hooks/useSpeakOnVisible";

// const Home = () => {
//   const aboutRef = useRef(null);
//   const missionRef = useRef(null);
//   const visionRef = useRef(null);
//   const servicesRef = useRef(null);
//   const whyChooseUsRef = useRef(null);
//   const testimonialsRef = useRef(null);
//   const teamRef = useRef(null);
//   const resourcesRef = useRef(null);
//   const achievementsRef = useRef(null);

//   useSpeakOnVisible([
//     aboutRef,
//     missionRef,
//     visionRef,
//     servicesRef,
//     whyChooseUsRef,
//     testimonialsRef,
//     teamRef,
//     resourcesRef,
//     achievementsRef
//   ]);
//   return (
//     <>
//        <Head>
//         <title>
         
//         </title>
//         <meta
//           name="description"
//           content=""
//         />
//         <meta
//           name="keywords"
//           content=""
//         />
//       </Head>
//     <main className='flex flex-col'>
//       <HeroSection/>
//       <AboutUs ref={aboutRef}/>
//       <Mission ref={missionRef}/>
//       <Vision ref={visionRef}/>
//       <Services ref={servicesRef}/>
//       <CounterNumbers/>
//       <WhyChooseUs ref={whyChooseUsRef}/>
//       <Testimonials ref={testimonialsRef}/>
//       <Team ref={teamRef}/>
//       <Resources ref={resourcesRef}/>
//       <Achievements ref={achievementsRef}/>
//       <ContactUs/>
//     </main>
//     </>
//   )
// }

// export default Home


import React, { useRef } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import HeroSection from "./_landing/HeroSection";
import CounterNumbers from "./_landing/CounterNumbers";
import ContactUs from "./_landing/ContactUs";
import useSpeakOnVisible from "../hooks/useSpeakOnVisible";

/* Lazy Loaded Sections */
const AboutUs = dynamic(() => import("./_landing/AboutUs"));
const Mission = dynamic(() => import("./_landing/Mission"));
const Vision = dynamic(() => import("./_landing/Vision"));
const Services = dynamic(() => import("./_landing/Services"));
const WhyChooseUs = dynamic(() => import("./_landing/WhyChooseUs"));
const Testimonials = dynamic(() => import("./_landing/Testimonials"));
const Team = dynamic(() => import("./_landing/Team"));
const Resources = dynamic(() => import("./_landing/Resources"));
const Achievements = dynamic(() => import("./_landing/Achievements"));

const Home = () => {
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const servicesRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const teamRef = useRef(null);
  const resourcesRef = useRef(null);
  const achievementsRef = useRef(null);

  useSpeakOnVisible([
    aboutRef,
    missionRef,
    visionRef,
    servicesRef,
    whyChooseUsRef,
    testimonialsRef,
    teamRef,
    resourcesRef,
    achievementsRef,
  ]);

  return (
    <>
      <Head>
        <title>
          NSEPC India Private Limited | Ethanol Plant EPC Experts
        </title>

        <meta
          name="description"
          content="NSEPC India Private Limited is a leading EPC firm delivering turnkey engineering, procurement, and construction solutions for grain-based ethanol plants and renewable energy projects across India."
        />

        <meta
          name="keywords"
          content="EPC consultants India, ethanol plant consultants, grain based ethanol plant, ethanol plant EPC contractor, renewable energy EPC India, distillery consultants"
        />

        <meta name="author" content="NSEPC India Private Limited" />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://nsepc.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NSEPC India Private Limited" />
        <meta
          property="og:description"
          content="Turnkey EPC solutions for grain-based ethanol plants and renewable energy infrastructure."
        />
        <meta property="og:url" content="https://nsepc.com/" />
        <meta property="og:image" content="https://nsepc.com/assets/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NSEPC India Private Limited" />
        <meta
          name="twitter:description"
          content="India's trusted EPC consultants for ethanol and renewable energy projects."
        />
        <meta name="twitter:image" content="https://nsepc.com/assets/og-image.jpg" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        <link rel="icon" href="/assets/webp/blue-ns-logo-new.webp" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NSEPC India Private Limited",
              url: "https://nsepc.com/",
              logo: "https://nsepc.com/assets/logo.png",
              description:
                "Turnkey EPC consultants specializing in grain-based ethanol plants and renewable energy infrastructure.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "India",
              },
            }),
          }}
        />
      </Head>

      <main className="flex flex-col">
        <HeroSection />
        <AboutUs ref={aboutRef} />
        <Mission ref={missionRef} />
        <Vision ref={visionRef} />
        <Services ref={servicesRef} />
        <CounterNumbers />
        <WhyChooseUs ref={whyChooseUsRef} />
        <Testimonials ref={testimonialsRef} />
        <Team ref={teamRef} />
        <Resources ref={resourcesRef} />
        <Achievements ref={achievementsRef} />
        <ContactUs />
      </main>
    </>
  );
};

export default Home;
