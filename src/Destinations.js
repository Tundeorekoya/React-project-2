import React, { useState } from 'react'

const Destinations = ({id,image,info,price,name,removeTour}) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <div>
      <article className='single-tour'>
        <img src={image} alt={name} className=''/>
        <footer>
            <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
            </div>
            <p>
                {
                 readMore? info : `${info.substring(0,200)}...`
                }
            </p>
            <button onClick={()=>setReadMore(!readMore)}>{readMore? 'Show less' : 'Read More'}</button>
            <button onClick={()=> removeTour(id) } className='remove-btn'> remove tour</button>
        </footer>

      </article>
    </div>
  )
}

export default Destinations
