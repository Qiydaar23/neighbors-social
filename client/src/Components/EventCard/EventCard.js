import React from 'react'
import './eventcard.css'
import { useNavigate } from 'react-router-dom';
export default function EventCard({event}) {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate("/event/1");
      }
      console.log(event)
  return (
    <div className='eventcard' onClick={handleClick}>
        <div>
          {event.name}
        </div>
        <div>
          {event.date}
        </div>
        <div>
            <img alt='eventimage' src={`${event.image}`}/>
        </div>  
      </div>
  )
}