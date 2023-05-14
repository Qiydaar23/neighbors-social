import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./navbar.css"
// import NavEvent from '../NavEvents/NavEvent';

export default function Navbar() {
    
  return (
   <div >
    <ul id = "navcss">
        <li>
            {/* <Link  to={"/NavEvent"} >Events</Link> */}
            <a href='./NavEvent' >Events</a>
        </li>
        <li>
            <Link to  ="#" >Tickets</Link>

        </li>
        <li>
            <Link to ="#" >About</Link>

        </li>
    </ul>
   </div>
  );
}