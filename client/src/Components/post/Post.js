import "./post.css"
import { MoreVert } from "@mui/icons-material"
import {Users} from "./../dataStorage/DataStorage"
import { useState } from "react"
// import { useEffect } from "react"

export default function Post({post}) {
  // const user = Users.filter(u =>u.id === 1)
  const [like, setlike] = useState(post.like)
  const [islike, setIslike] = useState(false)

  // const [ticket, setTicket] = useState(post.like)
  // const [isTicket, setIsTicket] = useState(false)



  // useEffect(()=>{
  //   fetch("http://127.0.0.1:5555/events")
  //   .then(res => res.json())
  //   .then(data => console.log(data) )
  // },[])


  // const handleTicket =()=>{
  //   setTicket(isTicket ? ticket-1: ticket+1)
  //   setIsTicket(!isTicket)
  console.log("logginPost")
  console.log(post)
  const handleLike =()=>{
    setlike(islike ? like-1: like+1)
    setIslike(!islike)
  }
  return (
    <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft"></div>
              <img className="postProfileImg" src ="" alt =  ""/>
              <span className="postUsername">
                {Users.filter((u) => u.id === post?.userId)[0]}</span><br></br>
              <span className="postDate">{post.date}</span>
            <div className="postTopRight"></div>
              <MoreVert />
          </div>
          <div className="postCenter">
            <span className="postText">{post.description}</span>
            <img  className = "postImg"src = {post.photo} alt = ""/>
          </div>
          <div className="postBottom"></div>
            <div className="postBottomLeft">
              <button onClick={handleLike}>❤️</button>
              {/* <button>👍</button> */}
              <br></br>
              <button >🎫➕</button>
              <button>🎟️➖</button>
            </div>  
              <span className="postLikeCounter">{like} people like this</span>
            <div className="postBottomRight">
              <span className="postCommentText">{post.comment}comments</span>
            </div>
        </div>
    </div>
  )
}
