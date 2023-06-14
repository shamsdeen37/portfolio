import React, { forwardRef } from 'react' 
import '../styles/projectstyle.css'

import binarycrypto_icon from '../images/projecticon/cryptoicon.png'
import video_candy from '../images/projecticon/icons.png'
import gym_mate from '../images/projecticon/Gymicon.png'
import real_estate from '../images/projecticon/icons8-real-estate-55.png'



import Project from '../assets/Project';



const Projects = forwardRef((props,ref) => {

  const projects =[
    {
      name:'Video-candy',
      icon:video_candy,
      discription:'This is video searching web app . we can search videos and we can see from all over the world .',
      link:'https://video-candy.onrender.com/',
      },
    {
      name:'Gym-mate',
      icon:gym_mate,
      discription:'This is exercise searching  searching web app . we can search exercises and we can save the exercise',
      link:'https://gym-mate-2dt0.onrender.com/',
      },
    {
      name:'Binary-crypto',
      icon:binarycrypto_icon,
      discription:'This is crypto currency searching web app . we can search cryptos and there value from all over the world .',
      link:'https://crypto-verse.onrender.com/',
      },
    {
    name:'Real-estate',
    icon:real_estate,
    discription:'This is Realestate searching web app . we can search realestate properties and we can gather all information from there',
    link:'https://lighthearted-snickerdoodle-fd4f3a.netlify.app/',
    }
  ]


  return (
    <div ref={ref} className="projects-container">
      <div className='projectbox'>
      <div className='projects'>

        {
          projects.map((project,index)=>(

            <Project key={index} project={project}/>
          ))
}
      </div>
      </div>
    </div>
  )
})

export default Projects

