import React from 'react' 
import Typewriter from 'react-typewriter-effect';

const Project = ({project}) => {
    console.log(project)
  return (

      <div className={`project ${project.name}`}>
        <div className='project-name'>
          <h2 >
          <img style={{width:'20%',marginRight:'5px'}} alt='reactjs' src={project.icon}/>{project.name}</h2>
          
         </div>
      <div className='projectbottom'>
        <div className='projecttext'>
          <h1 style={{color:'#fce54b',marginBottom:'10px'}}>DISCRIPTION</h1>
        <Typewriter 
        startDelay={1000}
        cursorColor="transparent"
        multiText={[
            `${project.discription}`
          
        ]}
        loop={3}
        nextTextDelay={1000}
        typeSpeed={50}

        />
        </div>
        <div className='visitproject'><a href={project.link}>visit</a></div>
        </div>
      </div>
  )
}

export default Project