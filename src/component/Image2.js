import React from 'react'
import"../Styles/Image2.css"
import ProjectImg from "../BackImage/pic7.jpg"
import todoimg from "../BackImage/pic3.jpeg"
import NextImg from  "../BackImage/pic5.webp"
import TodoImg from "../BackImage/pic8.jpg"

export default function Image2() {
  return (
    <div className="project">
        <div>
        <img  className="pro-img" src={ProjectImg} alt="" width="100%" height="100%"/> 
        </div>
        <div className='intro'>
            <h1>TODO APP</h1>
            <p>
            Todo List App is a kind of app that generally used to maintain our day-to-day<br/>Tasks or list everything that we have to do, <br/>with the most important tasks at the top of the list,<br/> and the least important tasks at the bottom. <br/>It is helpful in planning our daily schedules. 
            </p>
            </div>
            <div className='image'>
             <img className="img1" src={todoimg} alt="" />
             <div>
                <img className="img2" src={TodoImg} alt="" />
                
                </div>
                </div>
                <div className='next'> 
<h1>NEXT PROJECT</h1>
<img   src={NextImg} alt=""/>
<p>An electronic card (e-card) is a special occasion, greeting or post card created and customized within a website and sent through the Internet to the recipient 
</p><h1>Features of the Ideal Todo App:
</h1>
                <p> *Reorder Tasks – This one is really simple.<br/> 
 *Prioritization – This is another basic time management feature. <br/> 
*Quick Entry/Capture – Todo apps should always be ready to quickly capture a random task.<br/>  
*Simple UI – Following on from quick capture, overall the app should be simple.</p><br/> 
                </div>
             </div>
          
  )
}
