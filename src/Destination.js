import React from 'react'
import Destinations from './Destinations'

const Destination = ({ destinations,removeTour }) => {
  return (
    <section>
        <div className='title'>
           <h2>Our Tours</h2> 
           <div className='underline'></div>
        </div>
        <div>
            {
                destinations.map((destination)=>{
                 return <Destinations key={destination.id} {...destination} removeTour={removeTour} />
                })
            }
        </div>
    </section>
    
  )
}

export default Destination
