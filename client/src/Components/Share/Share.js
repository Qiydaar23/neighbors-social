import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from "@mui/icons-material"

export default function Share() {
  return (
    <div className = "share">
        <div className = "shareWrapper">
            <div className = "shareTop">
                <img  className = "shareProfileImg" src = "https://i.pinimg.com/550x/44/1d/e4/441de4a09c99760ce58e1d8e558f4f29.jpg" alt ="" />
                <input placeholder = "what we sharing?" className="shareInput"></input>
            </div>
            <hr className = "shareHr"></hr>
            <div className = "shareBottom"></div>
                <div className = "shareOptions">
                    <PermMedia htmlColor = "blue" className = "shareIcon"/>
                    <span className = "shareOptionText">Photo or Videoes</span>
                </div> 
                <div className = "shareOptions">
                    <Label htmlColor = "green" className = "shareIcon"/>
                    <span className = "shareOptionText">Tag</span>
                </div> 
                <div className = "shareOptions">
                    <Room htmlColor = "red"className = "shareIcon"/>
                      <span className = "shareOptionText">Location</span>
                      <div className = "shareOptions">
                    <EmojiEmotions htmlColor = "goldenrod"className = "shareIcon"/>
                    <span className = "shareOptionText">Reaction</span>
                    <button className="shareButton">Share</button> 
                    
                </div>        
                </div>     
                     
        </div>
        
    </div>
  )
}