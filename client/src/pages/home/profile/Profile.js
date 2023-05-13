import React from 'react'
import "./profile.css"
import HeaderBar from '../../../Components/HeaderBar/HeaderBar'
import SideBar from '../../../Components/sidebar/SideBar'
import Feed from '../../../Components/feed/Feed'
import Rightbar from '../../../Components/rightbar/Rightbar'
import Events from '../../../Components/events/Events'



export default function Profile() {
  return (
    <>
    <HeaderBar />
    <div className='profile'>
        <SideBar/>
        <div className='profileRight'>
          <Events />
        </div>
    </div>
    
  </>    
  )
}
