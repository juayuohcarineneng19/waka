import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import AboutImg from '../assets/children.avif'
import Footer from "../Components/Footer"
import AboutUs from '../Components/AboutUs'


function About() {
  return (
    <div>
      <Navbar/> 
      <Hero
      cName = "hero-mid"
      heroImg = {AboutImg}
      title = "About"
      btnClass = "hide"
      />
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default About