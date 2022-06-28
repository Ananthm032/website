import React from "react"
import Home from "./routes/Home"
import About from "./routes/About"
import Project from "./routes/Project"
import Contact  from "./routes/Contact"
import {Route ,Routes} from 'react-router-dom'
import "./index.css"
export default function App (){
    return(
  <div>
  <Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/project" element={<Project/>} />
<Route path="/contact" element={<Contact/>} />
 </Routes>
  </div>
    )
}