import React from 'react'
import "../Styles/Footer.css"
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
 function Footer() {
   return (
    <div className="footer">
       <div className="footer-container">
    <div className="left">
    <div className="location"><HomeIcon size={20} style={{color:'white', marginRight:"2rem"}}/>
    <div>
    <p>SM Towers,perungudi</p>
    <p>Chennai-08</p>
    </div>
    </div>
    <div className='call'><CallIcon size={20} style={{color:'white', marginRight:"2rem"} }/>
        <h4>9994321692</h4> 
        </div>
    <div className='email'><EmailIcon size={20} style={{color:'white', marginRight:"2rem"}}/> 
     <p>ananthmani032@gmail.com</p>
     
     </div>
     </div>
     <div className="right">
       <p>About the company:</p>
        <p>According to the definition, a company profile is a professional introduction of the business which aims to inform the audience about its products and services. </p>
        <div className="social"><FacebookIcon size={30} style={{color:'white', marginRight:"1rem"}}/>
       
        <InstagramIcon size={30} style={{color:'white', marginRight:"1rem"}}/>
       
       <TwitterIcon  size={30} style={{color:'white', marginRight:"1rem"}}/>

    <LinkedInIcon size={30} style={{color:'white', marginRight:"1rem"}}/>
        </div>
      </div> 
    </div>
  </div>
 
   )

 }
 
 export default Footer