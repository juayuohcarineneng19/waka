import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import AboutImg from '../assets/contact.avif'
import Footer from '../Components/Footer'
import ContactForm from "../Components/ContactForm"


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
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact