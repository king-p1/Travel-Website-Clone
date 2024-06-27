import React from 'react'
import { destinationItems } from '../utils/destination'
import { BiSolidNavigation } from "react-icons/bi";


const Destination = () => {
  return (
    <div className='destination'>

     <h2>Top Selling</h2>

<h1>Top Destinations</h1>


<div className="destination-cards">


{    destinationItems.map(({img,duration,location,price},index)=>(
   <>
   <div className="destination-card" key={index}>
   <img src={img} alt="" />

   <div className="destination-card-content">

<div className="first-content">
<h3>{location}</h3>
<p>{price}</p>
</div>

<div className="second-content">
<BiSolidNavigation/>
<h3>{duration}</h3>
</div>

   </div>
   
   </div>
   </>

))} 
        </div>

    </div>
  )
}

export default Destination