import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import AboutImg from '../assets/contact.avif'


function Contact() {
  return (
    <div>
       <Navbar/> 
      <Hero
      cName = "hero-mid"
      heroImg = {AboutImg}
      title = "Contact"
      btnClass = "hide"
      />
    </div>
  )
}

export default Contact