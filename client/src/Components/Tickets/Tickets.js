import React from 'react'
import {useState, useEffect} from 'react'
import TicketCard from './TicketCard/TicketCard';

export default function Tickets() {

    const [tickets, setTickets] = useState([])

  useEffect(() => {
    fetch("/tickets").then((response)=>{
      // console.log(response)
      return response.json()
    }).then((data)=>{
      // console.log(data)
      setTickets(data.tickets)
    }).catch((error)=>{
      console.log(error)
    })
}, []);

  const TicketsToDisplay = tickets ? tickets.map((ticket) => {
    return <TicketCard key = {ticket.ticket.id} ticket = {ticket.ticket} event = {ticket.event} />
  }) : null




  return (
    <div>
    <div>🎫 Ticket Cart 🎟️</div>
    <div>
        {TicketsToDisplay}
    </div>
    </div>
  )
}
