import React from 'react'
import"../Styles/Image2.css"
import ProjectImg from "../BackImage/pic7.jpg"
import todoimg from "../BackImage/pic3.jpeg"
import NextImg from  "../BackImage/pic5.webp"
import TodoImg from "../BackImage/pic8.jpg"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
export default function Image2() {
  const data=[
    {
      name: 'Jun',
     Activeuser: 4000,
     target:3000,
    
    },
    {
      name: 'Feb',
      Activeuser: 3000,
      target:2000,
    },
    {
      name: 'Mar',
      Activeuser: 2000,
      target:2500,
    },
    {
      name: 'Apr',
      Activeuser: 2780,
      target:3000,
      
    },
    {
      name: 'May',
      Activeuser: 1890,
      target:2000,
    },
    {
      name: 'June',
      Activeuser: 2390,
      target:2500,
    },
    {
      name: 'July',
      Activeuser: 3490,
      target:2500,
    },
    {
      name: 'Aug',
      Activeuser: 5490,
      target:4500,
    },
    {
      name: 'Sep',
      Activeuser: 3432,
      target:3500,
    },
  {  name: 'Oct',
    Activeuser: 1490,
    target:2500,
  },
  {  name: 'Nov',
  Activeuser: 2485,
  target:2500,
},
{  name: 'Dec',
Activeuser: 4320,
target:2500,
}
  ]
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
*Simple UI – Following on from quick capture, overall the app should be simple.</p><br/> </div>
       
        < div className='chart'>
        <h3 className='chart-title'>This year Project Analytic</h3>  
        <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
            <XAxis dataKey='name' stroke='#5550bd'/>
              <Line type='monotone' dataKey='Activeuser' stroke='#9900E6' /> 
              <Line type='monotone' dataKey="target" stroke='#004DE6'/>
        <CartesianGrid stroke='#3355FF' strokeDasharray='3'/>
        <Tooltip/>
        <Legend/>
         </LineChart>
        </ResponsiveContainer>
            </div>
            <div className='year'>
            <div className='sales'>
         <div className='salesperson'>
          <span className='box1'>Sales</span>
          <div className='arrow'>
            <span className='money'>$2341.08</span>
            <span className='rate'>+2.04<ArrowUpwardIcon className='img'/>
            </span>
         </div>
         <div>
<span className='compare'>This year</span>
         </div>
           </div>
            </div>
            <div className='sales'>
         <div className='salesperson'>
          <span className='box1'>Revenue</span>
          <div className='arrow'>
            <span className='money'>$3141.08</span>
            <span className='rate1'>-1.10<ArrowDownwardIcon className='img'/>
            </span>
         </div>
         <div>
<span className='compare'>This year</span>
         </div>
           </div>
            </div>
            <div className='sales'>
         <div className='salesperson'>
          <span className='box1'>Profit</span>
          <div className='arrow'>
            <span className='money'>$341.08</span>
            <span className='rate'>+2.04<ArrowUpwardIcon className='img'/>
            </span>
         </div>
         <div>
<span className='compare'>Compare to lastyear</span>
         </div>
           </div>
            </div>

            </div>
              </div>
              
                 
)
}
