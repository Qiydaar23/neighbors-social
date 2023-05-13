import "./Headerbar.css"
import {Person, Chat} from "@mui/icons-material"
import { Search , Notifications} from "@mui/icons-material"



export default function HeaderBar() {
  return (
    <div className="headerbarContainer">
        <div className="headerbarLeft"></div>
            <span className="logo"><Person />NEIGHBORS <Person /> SOCIAL <Person /></span>
        <div className="headerbarCenter"></div>
            <div className="Searchbar">
                
                
            </div>
        <div className="headerbarRight">
        <div className="headerbarLinks">
                <span className="headerbarLink">Homepage</span>
                <span className="headerLink">Feed</span>
        </div>        
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
