import React from "react"
import "../Styles/Image3.css"
import contactImg from "../BackImage/pic10.jpg"
 export default function Image3(){
    return(
        <div className="contact">
               <div  className="img">
                 <img src={contactImg} alt="" width="100%" height="100%"/>
               </div>
               <div className="form">
                <form>
               <label> Your Name</label>
               <input type="text"placeholder="TEXT YOUR NAME"></input>
               <label> Your Email  </label>
               <input type="text"placeholder="TEXT YOUR EMAIL"></input>
               <label> Your Number</label>
               <input type="number" placeholder="TEXT YOUR NUMBER"></input>
               <label> Your Comment </label>
               <textarea type="text" placeholder="TEXT YOUR COMMENT"></textarea>
               <button className="btn">Submit</button>
               
               </form>
            </div>
       </div>
    )
 }