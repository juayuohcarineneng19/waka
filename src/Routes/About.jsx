import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import AboutImg from '../assets/children.avif'


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
    </div>
  )
}

export default About