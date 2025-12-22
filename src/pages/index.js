import React, { useRef } from "react";
import HeroSection from './_landing/HeroSection'
import AboutUs from './_landing/AboutUs'
import Mission from './_landing/Mission'
import Vision from './_landing/Vision'
import Services from './_landing/Services'
import CounterNumbers from './_landing/CounterNumbers'
import WhyChooseUs from './_landing/WhyChooseUs'
import Testimonials from './_landing/Testimonials'
import Team from './_landing/Team'
import ContactUs from './_landing/ContactUs'
import Resources from './_landing/Resources'
import Achievements from './_landing/Achievements'
import useSpeakOnVisible from "../hooks/useSpeakOnVisible";

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
    achievementsRef
  ]);
  return (
    <div className='flex flex-col'>
      <HeroSection/>
      <AboutUs ref={aboutRef}/>
      <Mission ref={missionRef}/>
      <Vision ref={visionRef}/>
      <Services ref={servicesRef}/>
      <CounterNumbers/>
      <WhyChooseUs ref={whyChooseUsRef}/>
      <Testimonials ref={testimonialsRef}/>
      <Team ref={teamRef}/>
      <Resources ref={resourcesRef}/>
      <Achievements ref={achievementsRef}/>
      <ContactUs/>
    </div>
  )
}

export default Home