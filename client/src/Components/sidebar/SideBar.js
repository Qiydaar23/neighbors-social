import "./sidebar.css" 
import { HelpOutline, RssFeed, WorkOutline , Event, School, QuestionAnswer, ReportProblem, Fireplace, Handshake, RailwayAlert}  from "@mui/icons-material"

export default function SideBar() {
  return (
  
    <div className="sidebar">
      <h3 className="sidebartitle">Connect with NEIGHBORS</h3>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemtext">Signal</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon"/>
            <span className="sidebarListItemtext">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon"/>
            <span className="sidebarListItemtext">Business</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon"/>
            <span className="sidebarListItemtext">Event</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon"/>
            <span className="sidebarListItemtext">School</span>
          </li>
          <li className="sidebarListItem">
            <QuestionAnswer className="sidebarIcon"/>
            <span className="sidebarListItemtext">Chat</span>
          </li>
          <li className="sidebarListItem">
            <ReportProblem className="sidebarIcon"/>
            <span className="sidebarListItemtext">Danger/issue</span>
          </li>
          <li className="sidebarListItem">
            <Fireplace className="sidebarIcon"/>
            <span className="sidebarListItemtext">Fire</span>
          </li>
          <li className="sidebarListItem">
            <Handshake className="sidebarIcon"/>
            <span className="sidebarListItemtext">Meet up</span>
          </li>
          <li className="sidebarListItem">
            <RailwayAlert className="sidebarIcon"/>
            <span className="sidebarListItemtext">Travel Delay</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More ..</button>
        <hr className="sidebarHr"/>
        <ul className="sidebrFriendList"></ul>
          <li className="sidebarfriend">
            <img className="sidebarFriendImg" src ="data:image/jpeg;base64,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" alt =""/>
            <span className="sidebarFriendName">Jill R.</span>
          </li>
          <li className="sidebarfriend">
            <img className="sidebarFriendImg" src ="https://img.freepik.com/premium-photo/handsome-man-pensive-emotion-avatar-portrait-round_279525-26564.jpg?w=2000" alt =""/>
            <span className="sidebarFriendName">Issac N.</span>
          </li>
          <li className="sidebarfriend">
            <img className="sidebarFriendImg" src ="https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg" alt =""/>
            <span className="sidebarFriendName">Ronald R.</span>
          </li>
          <li className="sidebarfriend">
            <img className="sidebarFriendImg" src ="https://i.pinimg.com/originals/73/aa/d0/73aad0d78ac1e1267aad164d5ea34112.png" alt =""/>
            <span className="sidebarFriendName">Emma S.</span>
          </li>  
      </div>

    </div>
  )
}
