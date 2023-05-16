import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./navbar.css"
// import NavEvent from '../NavEvents/NavEvent';

export default function Navbar({setUser}) {

    const handleLogout =() =>{
        localStorage.removeItem("user")
        setUser("")
    }
    
  return (
   <div >
    <ul id = "navcss">
        <li>
            {/* <Link  to={"/NavEvent"} >Events</Link> */}
            <Link to='/' >Events</Link>
        </li>
        <li>
            <Link to ="/tickets" >Tickets</Link>

        </li>
        <li>
            <Link to ="/newEvent" >Create Event</Link>

        </li>
        <li>
            <button onClick={handleLogout}>LOG OUT</button>
        </li>
    </ul>
   </div>
  );
}