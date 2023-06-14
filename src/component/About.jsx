import React, { forwardRef } from 'react'
import '../styles/aboutstyle.css'
import Typewriter from 'react-typewriter-effect';


const About = forwardRef ((props,ref) => {
  return (
    <div ref={ref} className="about-container">
      <div className='aboutbox'></div>
      <div className='about-me'>
        <h1 className='aboutletter'>ABOUT ME</h1>
      <Typewriter
            autoStart={true}
            startDelay={500}
            cursorColor="transparent"

            multiText={[
              `Hello, I'm Shamsudeen, a passionate front-end developer and recent graduate excited to embark on a career in web development. With a strong foundation in HTML, CSS, and JavaScript, I am eager to leverage my skills to create engaging and intuitive user interfaces.`

            ]}

          loop={3}
            nextTextDelay={200}
            typeSpeed={10}
          />

<Typewriter
            autoStart={true}
            startDelay={4500}
            cursorColor="transparent"

            multiText={[

            ' I graduate in BCA , During my studies, I had completed my own projects that allowed me to showcase my creativity and problem-solving abilities. I have experience in developing responsive web applications and I am particularly enthusiastic about utilizing React.js to build dynamic and interactive user experiences.'                            
            ]}

          loop={3}
            nextTextDelay={200}
            typeSpeed={10}
          />

<Typewriter
            autoStart={true}
            startDelay={8000}
            cursorColor="transparent"

            multiText={[
                        
        '  I am a detail-oriented individual with a passion for delivering high-quality work. I thrive in collaborative environments and am always eager to contribute my skills to a team. I am excited to bring my enthusiasm, fresh perspective, and willingness to learn to contribute to meaningful projects.'              
            ]}

          loop={3}
            nextTextDelay={200}
            typeSpeed={10}
          />

<Typewriter
            autoStart={true}
            startDelay={12000}
            cursorColor="transparent"

            multiText={[
             
              'If you are seeking a motivated and dedicated front-end developer to join your team or collaborate on a project, I would love to connect and explore opportunities. Feel free to reach out to me to discuss how we can create innovative and impactful web experiences together.'
            ]}

          loop={3}
            nextTextDelay={200}
            typeSpeed={10}
          />
          
      
      </div>
    </div>
  )
})

export default About