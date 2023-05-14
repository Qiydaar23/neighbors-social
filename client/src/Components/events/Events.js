import React from 'react'
import EventCard from '../EventCard/EventCard';
import './events.css'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"


export default function Events() {
  
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch("/events").then((response)=>{
      console.log(response)
      return response.json()
    }).then((data)=>{
      console.log(data)
      setEvents(data.events)
    }).catch((error)=>{
      console.log(error)
    })
}, []);

  const eventsToDisplay = events ? events.map((event) => {
    return <EventCard event={event} />
  }) : null

  return (
    <div className='container'>
      {eventsToDisplay}
    </div>
  )
}
