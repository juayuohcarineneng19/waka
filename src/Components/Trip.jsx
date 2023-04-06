import React from 'react'
import "./TripStyles.css"
import TripData from './TripData'
import Trip1 from "../assets/london.jpg"
import Trip2 from "../assets/london1.jpg"
import Trip3 from "../assets/paris.jpg"
// import Trip4 from "../assets/usa.jpg"
// import Trip5 from "../assets/usa1.jpg"
// import Trip6 from "../assets/outside.avif"

function Trip() {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps</p>

        <div className="tripCard">
            <TripData
            image ={Trip1}
            heading = "Trip in Indonesia"
            text = " Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laboriosam, aspernatur reprehend
            erit. Expedita, tempora nesciunt. Quos alias 
            error maxime maiores nihil necessitatibus 
           nobis, excepturi provident totam!"
            />
            <TripData
            image ={Trip3}
            heading = "Trip in United States"
            text = " Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laboriosam, aspernatur reprehend
            erit. Expedita, tempora nesciunt. Quos alias 
            error maxime maiores nihil necessitatibus 
           nobis, excepturi provident totam!"
            />
            <TripData
            image ={Trip2}
            heading = "Trip in London"
            text = " Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laboriosam, aspernatur reprehend
            erit. Expedita, tempora nesciunt. Quos alias 
            error maxime maiores nihil necessitatibus 
           nobis, excepturi provident totam!"
            />
        </div>

    </div>
  )
}

export default Trip