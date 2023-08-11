import React from 'react'
import Destination from '../Components/Destination'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Trip from '../Components/Trip'

function Home() {
  return (
    <div>    
      <Navbar/> 
      <Hero
      cName = "hero"
      heroImg = "https://images.unsplash.com/photo-1618245318763-a15156d6b23c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJlYWNoJTIwcGljdHVyZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      title = "KAM WE WAKA SMALL C PLACE DEM"
      text = "Choose Your Favorite Beach"
      buttonText = "Travel Plan"
      url = "/"
      btnClass = "show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </div>
  )
}

export default Home