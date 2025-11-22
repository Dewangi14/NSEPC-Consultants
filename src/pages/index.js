import React from 'react'
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
import Footer from '../components/Footer'
import Resources from './_landing/Resources'
import Achievements from './_landing/Achievements'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <HeroSection/>
      <AboutUs/>
      <Mission/>
      <Vision/>
      <Services/>
      <CounterNumbers/>
      <WhyChooseUs/>
      <Testimonials/>
      <Team/>
      <Resources/>
      <Achievements/>
      <ContactUs/>
    </div>
  )
}

export default Home