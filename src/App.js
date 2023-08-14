import './index.css';
import React, { useState,useEffect } from 'react';
import Loading from './Loading';
import Destination from './Destination';

const url = 'https://course-api.com/react-tours-project' 

function App() {
  const [destinations, setDestinations] = useState([])
  const [ loading, setLoading] = useState(true)

  const removeTour = (id) =>{
   const newTour = destinations.filter((destination)=>destination.id !== id)
    setDestinations(newTour)
  }

  const fetchData = async ()=>{
      setLoading(true)
    try{

      const response = await fetch(url)
      const destinations = await response.json()
      setLoading(false);
      setDestinations(destinations);
      
    }catch(error){
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
    fetchData()
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if(loading){
    return(
      <Loading/>
    )
  
  }
  if (destinations.length === 0){
    return (
      <main>
        <div>
          <h2>No tour left </h2>
          <button className='btn' onClick={()=>fetchData()}>Refresh</button>
        </div>
      </main>
    )
  }
  
  return (
    <main>
     <Destination destinations={destinations} removeTour={removeTour}/>
    </main>

  )
   
 
  
}

export default App;
