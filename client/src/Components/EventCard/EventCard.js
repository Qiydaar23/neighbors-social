import React from 'react'
import './eventcard.css'
import { useNavigate } from 'react-router-dom';

export default function EventCard({event}) {
    const navigate = useNavigate()

    const handleManage = (e) =>{
      navigate("/event/" + event.id)
    }
    
    const handleTicket = (e) =>{
      e.preventDefault()
      fetch("/tickets",{
        method: "POST" , 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"event_id": event.id}),
      }).then((response)=>{
        return response.json() 
  
      }).then((data)=>{
        console.log(data)
      })
       .catch((error)=>{
        console.log(error)
      })
      }
      // console.log(event)
  return (
    <div className='eventcard'>
        <div>
          {event.name}
        </div>
        <div>
            <img className = "appImage" alt='eventimage' src={`${event.image}`}/>
        </div>
        <div>
          {event.date}
        </div>
        <div>
          {event.description}
        </div>
        <button onClick={handleTicket}>Add to Cart</button>
        <button onClick={handleManage}>Purchase Event</button>
        {/* <div>
          
        </div>
        <div>
            <img className = "appImage" alt='eventimage' src={`${event.image}`}/>
        </div>   */}
      </div>
  )
}