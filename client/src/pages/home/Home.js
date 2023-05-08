import HeaderBar from "../../Components/HeaderBar/HeaderBar"
import SideBar from "../../Components/sidebar/SideBar"
import Feed from "../../Components/feed/Feed"
import Rightbar from "../../Components/rightbar/Rightbar"
import "./home.css"

export default function home() {
  return (
  <>
    <HeaderBar />
    <div className="homeContainer">
    <SideBar />
    <Feed />
    <Rightbar />
    </div>
  </>    
  )
}
