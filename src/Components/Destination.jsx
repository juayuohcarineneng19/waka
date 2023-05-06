import React from 'react'
import "./DestinationStyles.css"
import DestinationData from './DestinationData'
import Adventure from "../assets/children.avif"
import Adventure1 from "../assets/contact.avif"


function Destination() {
  return (
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Tours gives you an opportunity to see alot within a time frame.</p>

        <DestinationData
        className = "firstDesc"
        heading = " Taal Volcano, Batangas"
        text = "Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quibusdam minima molestiae tempore delectus
        , earum explicabo quisquam ullam inventore iste m
        inus doloribus consequuntur illum. Nisi pariatur
         quisquam dolor provident possimus. Eos exercitationem, reici
         endis possimus deserunt magnam dolorem quo quis fuga saepe nostrum 
         eaque excepturi aliquid minima non, quia dicta laudantium labore modi,
          numquam molestiae commodi dignissimos officia libero ad. Officiis animi
           harum nulla dolores cumque, fugiat adipisci voluptates debitis veritatis.
            Vero quas eum provident sed expedita, qui minus. Facilis placeat inventore autem et voluptate quos 
            dolorem, consequuntur, nulla consectetur accusamus, illo labore 
       sunt nesciunt molestias error iure incidunt tempore at ipsum?"
       img1 = {Adventure}
       img2 = {Adventure1}
        />

<DestinationData
        className = "secondDesc"
        heading = " Bafousam Resorts, "
        text = "Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quibusdam minima molestiae tempore delectus
        , earum explicabo quisquam  lorem ullam inventore iste m
        inus doloribus consequuntur illum. Nisi pariatur
         quisquam dolor provident possimus. Eos exercitationem, reici
         endis possimus deserunt magnam dolorem lorem  quo quis fuga saepe nostrum 
         eaque excepturi aliquid minima non, quia dicta laudantium labore modi,
          numquam molestiae commodi dignissimos officia libero ad. Officiis animi
           harum nulla dolores cumque, fugiat adipisci voluptates debitis veritatis.
            Vero quas eum provident sed expedita, qui minus. Facilis placeat inventore autem et voluptate quos 
            dolorem, consequuntur, nulla consectetur accusamus, illo labore 
       sunt nesciunt molestias error iure incidunt tempore at ipsum?"
       img1 = {Adventure}
       img2 = {Adventure1}
        />
    </div>
  )
}

export default Destination