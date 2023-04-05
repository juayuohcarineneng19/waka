import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import AboutImg from '../assets/service.avif'


function Service() {
  return (
    <div>
       <Navbar/> 
      <Hero
      cName = "hero-mid"
      heroImg = {AboutImg}
      title = "Service"
      btnClass = "hide"
      />
    </div>
  )
}

export default Service