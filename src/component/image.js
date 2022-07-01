import React from "react"
import "../Styles/Image.css"
import LogoImage from "../BackImage/pic3.jpeg"
import {Link} from "react-router-dom"

const Image = () => {
  return (
    <div className="BG-logo">
    <div className="logo">
        <img className="logo-img" src={LogoImage} alt="" width="100%" height="100%"/>
        </div>
        <div className="content">
            <p className="p">Hi,I am Ananth, I Am a </p>
            <h1 className="h1">Web Developer</h1>
            <div>
<Link to="/project" className="btn">Project</Link>
<Link to="/contact" className="btn-light">Contact</Link>
            </div>
            <div>
            
            </div>
        </div>
    </div>
 
  )
}

export default Image