import "./Headerbar.css"
import {Person, Chat, } from "@mui/icons-material"
import { Search , Notifications} from "@mui/icons-material"
import Navbar from "../Navbar/Navbar"



export default function HeaderBar({setUser}) {
  return (
    <div className="headerbarContainer"> 
        <div className="headerbarLeft"></div>
            <span className="logo"><Person />EVENTS <Person /> SOCIAL </span>
        <div className="headerbarCenter"></div>
            <div>
            <Navbar setUser ={setUser}></Navbar>
            </div>
        
        <div className="headerbarIcon">
            <div className="headerIconItem">
                <Person />
                <span className="headerbarIconBadge">1</span>
            </div>
        </div>
        <div className="headerbarIcon">
            <div className="headerIconItem">
                <Chat />
                <span className="headerbarIconBadge">1</span>
            </div>
        </div>
        <div className="headerbarIcon">
            <div className="headerIconItem">
                <Notifications />
                <span className="headerbarIconBadge">1</span>
            </div>
        </div>
        <img src="https://www.africanamericangrants.org/wp-content/uploads/2021/05/AFRICAN-AMERICAN-IMAGE-NEWEST-AAG-800-X-400-4-copy-2-1.png" alt= "" className="headerbarImage"/>
    </div>
  )
}
