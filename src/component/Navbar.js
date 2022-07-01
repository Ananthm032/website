
import React,{useState} from "react"
import {Link} from "react-router-dom"
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import "../Styles/Navbar.css"
import logoimg from "../BackImage/pic11.png"
const Navbar=()=>{

const[Click,setClick]=useState(false)
const handleClick=()=>setClick(!Click);

const[color,setColor]=useState(false)
const changeColor=()=>{
if(window.scrollY>=100){
  setColor(true)
}else{
  setColor(false)
}
}
window.addEventListener("scroll",changeColor)
return(
    <div className={color?" header header-bg":"header"}>
     <Link to="/" className="Logo">
     <img src={logoimg} alt="" width="50px" height="50px"/> <h1>WebDesi</h1>
     </Link>
  
       <ul className={Click ? "nav-ul.active":"nav-ul"}>
        <li> <Link to="/">Home</Link>
        </li>
    <li><Link to="/project">Project</Link>
    </li>
    <li> <Link to="/about">About</Link>
    </li>
    <li><Link to="/contact">Contact</Link>
    </li>
       </ul> 
     <div className="Bar" onClick={handleClick}>
     <AutoAwesomeMosaicIcon size={30} style={{color:"whitesmoke"}}/>
     </div>
</div> 

  )
}
export default Navbar;