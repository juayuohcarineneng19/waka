import React from 'react'
import "./DestinationStyles.css"
import DestinationData from './DestinationData'
import Adventure from "../assets/children.avif"
import Adventure1 from "../assets/contact.avif"


function Destination() {
  return (
    <div className='destination'>
        <h1>Popular Beach Sites</h1>
        <p>Tours gives you an opportunity to see alot within a time frame.</p>

        <DestinationData
        className = "firstDesc"
        heading = " Seme Beach, Limbe"
        text = "Seme Beach Hotel, na seaside and tropical resort, the water paradise, private beach, 100 rooms, swimming-pool, tennis. Seme Beach Hotel get 3 restaurants wey serve quality service and ocean view. Dem dey start breakfast service from 5:30 to 10 am, and e fit dey available for room service. Hôtel Seme Beach get private beach with divers and natural pool, spa, relaxation center wey get plenty services like massages, body scrubs, and hammam. Dem still get fitness and sports complex (basketball, lawn tennis, handball, beach-volley)."
       img1 =   "https://media.istockphoto.com/id/615886796/nl/foto/kenyan-girl.jpg?s=612x612&w=0&k=20&c=ng9ZHVv-CaOAxavgcPOcPLuS-zoPVsD7m5zN9qROPQg="  //{Adventure};
       img2 =  "https://media.istockphoto.com/id/1477794481/nl/foto/a-family-at-the-beach.jpg?s=612x612&w=0&k=20&c=GOIfz0yPf4eA3EENF0N0fpPAgzOl7dhckDYoJMZnte8=" //{Adventure1}
        />

<DestinationData
        className = "secondDesc"
        heading = " Kribi,Douala "
        text = "The Kribi coastal beach dey for Gulf of Guinea, for Océan Department, for South Province, near the mouth of Kienké River. The beach dey almost 150 kilometers for road, south of Douala, wey be the biggest city for Cameroon and the place wey e dey most busy as seaport for the country. The area around Kribi fit be place wey dem fit put port wey dem go take export iron ore from like 500 kilometers away. Kribi get the best beaches for Cameroon and e dey perfect for holidays for Cameroon. With thick rainforests and beautiful dry land, this beach go catch your attention and make you wan stay longer."
       img1 =  "https://discover-cameroon.com/wp-content/uploads/2014/11/Ville-de-Kribi-au-Cameroun.jpg"   //{Adventure}
       img2 =  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS_8_JHysQ326KJCWmqavWiaNyc-PjIsDcls8aPeDm1z24QjVxRjYRKCJZCCgWMEzgHDY&usqp=CAU" // {Adventure1}
        />
    </div>
  )
}

export default Destination