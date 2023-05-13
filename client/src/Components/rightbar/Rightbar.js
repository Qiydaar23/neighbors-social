import "./rightbar.css"

// import {users} from "./../dataStorage"

  
export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
        <div className="ticketContainer">
          <img className="ticketImg" src ="https://img.freepik.com/premium-vector/two-tickets-icon-illustration-ticket-entrance-event_385450-19.jpg?w=2000" alt =""/>
          <span className="ticketText">
            <b>steve </b>and <b>4 others friends</b> purchased these tickets 
          </span>
        </div>
        <img className = "rightbarAd"src = "" alt = ""></img>
        <h4 className="rightbarTitle">EVENTS COMING SOON...</h4>
        
        <ul className="rightbarFriendList">
          <li>
            <img  className= "rightbarAds"src = "https://i.ytimg.com/vi/hdx31Pjtzx0/maxresdefault.jpg" alt = ""></img>
              <h4 className="eventname">Dog Derby </h4>
          </li>
          <li>
            <img className= "rightbarAds" src = "https://graphicriver.img.customer.envatousercontent.com/files/46167994/Preview-Image.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=70f91536f58dda82d7401d7a3103da54" alt = ""></img>
            <h4 className="eventname">Block Party</h4>
          </li>
          <li>
            <img className= "rightbarAds" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjsaPRNmTLdTxB8rctyOe6pMyK_37AjjdwLA&usqp=CAU" alt = ""></img>
            <h4 className="eventname">Russian Roulette</h4>
          </li>
          <li>
            <img className= "rightbarAds" src = "https://resizing.flixster.com/102wpi0p9rv7ygQffWn7zZrEiw0=/300x300/v2/https://flxt.tmsimg.com/assets/p10487536_v_h9_aj.jpg" alt = ""></img>
            <h4 className="eventname">Trip a cop day</h4>
          </li>  
          <li>
            <img className= "rightbarAds" src = "https://i.ytimg.com/vi/bQCaRpRex3k/maxresdefault.jpg" alt = ""></img>
            <h4 className="eventname">GG event</h4>
          </li>  
        </ul>
     
      </>
    )
  }
  const ProfileRightbar = () =>{
    return (<>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo"></div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City :</span>
          <span className="rightbarInfoValue">New York</span>
        </div>  
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From :</span>
          <span className="rightbarInfoValue">London</span>
        </div>  
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship :</span>
          <span className="rightbarInfoValue">Single</span>
        </div>  
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarfollowing">
          <img className="rightbarfollowingimg" src = "https://d1l3jc4magixw.cloudfront.net/cases/2021/US_2021_E-6560-536/2021_US_2021_E-6560-536_hero_1.jpg" alt = ""></img>
          <span className="rightbarFollowingName">jake from StateFarm</span>
          </div>
        </div>  
        <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img className="rightbarfollowingimg" src = "https://pbs.twimg.com/media/FBXnHHQXIAMnEjC.jpg:large" alt = ""></img>
          <span className="rightbarFollowingName">Liberty mutual Guy</span>
          </div>
        </div>  
        <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img className="rightbarfollowingimg"  src = "https://www.cheatsheet.com/wp-content/uploads/2018/12/Dennis-Haysbert.jpg?strip=all&quality=89" alt = ""></img>
          <span className="rightbarFollowingName">All State Guy</span>
          </div>
        </div>  
    </>)
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        { <ProfileRightbar/>}
      </div>
    </div>
  )
}
