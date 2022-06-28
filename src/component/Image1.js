import React from 'react'
import "../Styles/Image1.css"
import AboutImg from "../BackImage/pic2.webp"
import SkillImage from"../BackImage/pic4.jpg"
function Image1() {
  return (
    <div className='Bg-logo'>
        <div className="about">
        <img className="about-img" src={AboutImg} alt="" width="100%" height="100%"/>
        </div>
      <div>
     
        <p className="para"><h1>Introduction Myself<b/>:</h1> <br/><h3>Hi I’m Ananth, I'm from a small village, Since 6 months I’m working as web developer in Company Ping Us and location of Chennai.<br/>I have developed many website and apart from the I have been part of web design project, office work and as freelancer. <br/>
I Explore My skills different way.<br/>
1. HTML5, CSS3, Bootstrap, Javascript and React JS.<br/>
After that I gonna dll projects in my GitHub account.</h3></p>                     
        </div>
        <div className='Bg-logo2'>
            <img src={SkillImage} alt=""/>
            <p className='exp'><h2>Work Experience:</h2><br/>
                                      2020-2021  <br/>M7 It Solutions PVT. Ltd,
                       Web developer,<br/>
                            Coimbatore , Tamil Nadu<br/> <br/>
             2022-Present<br/> 
P               ing-Us  Solutions PVT. Ltd, Block Chain  Developer  , <br/> Chennai  , Tamil Nadu</p>
           </div><div className='Bg-logo3'>
            <h1>SKILL</h1>
            <h4>My Personal Skill:</h4>
            <div>
            <ol className='logo-ul'><li>Computer literacy.</li>

            <li>Strong numeracy skills.
</li>
            <li>Strong creative ability.
</li>
            <li>Attention to detail.
</li>
            <li>Strong communication skills.
</li>
            <li>Excellent problem-solving skills.
</li>
            <li>A logical approach to work.
</li>
            <li>The ability to explain technical matters clearly.
</li>
                </ol></div>
        </div>
   
 </div>
  )
}

export default Image1