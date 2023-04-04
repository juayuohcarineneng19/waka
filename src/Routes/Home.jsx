import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'

function Home() {
  return (
    <div>    
      <Navbar/> 
      <Hero
      cName = "hero"
      heroImg = "https://images.unsplash.com/photo-1664027837004-20b2b56ebe82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      title = "Your Journey Your Story"
      text = "Choose Your Favorite Destination"
      buttonText = "Travel Plan"
      url = "/"
      btnClass = "show"
      />
    </div>
  )
}

export default Home