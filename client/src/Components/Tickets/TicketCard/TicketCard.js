// import React from 'react'
// import {useEffect, useState} from 'react'

// export default function TicketCard({ticket, event}) {



//   return (
    

//     <div className='Tickettcard'>
//         <div>
//           {event.name}<br></br>
//         </div>
//         <div>
//             {/* { <img className = "appImage" alt='eventimage' src={`${event.image}`}/> } */}
//         </div>
//         <div>
//           {event.date}
//         </div>
//         <div>
//           {event.description}
//         </div>
//     <br></br>
        
//       </div>
  
//   )
// }
import React from 'react'
import {useEffect, useState} from 'react'
import './TicketCard.css' 

export default function TicketCard({ticket, event}) {

  return (
    <div className='TicketCard'>
      <div className='TicketCard-content'>
        <div className='Event-name'>
          {event.name}
        </div>
        <div className='Event-image'>
          {/* { <img className = "appImage" alt='eventimage' src={`${event.image}`}/> } */}
        </div>
        <div className='Event-date'>
          {event.date}
        </div>
        <div className='Event-description'>
          {event.description}
        </div>
      </div>
    </div>
  )
}
