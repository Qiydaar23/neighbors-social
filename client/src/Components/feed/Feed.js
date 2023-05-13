import "./feed.css"
import Share from "../Share/Share"
import Post from  "../post/Post"
import {Posts} from "./../dataStorage/DataStorage"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map(p=>(
          <Post key={p.id} post={p}/>
        ))}
        
     
      </div>
    
    </div>
  )
}
