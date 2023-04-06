import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import AboutImg from '../assets/service.avif'
import Footer from '../Components/Footer'
import Trip from "../Components/Trip"


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
      <Trip/>
      <Footer/>
    </div>
  )
}

export default Service