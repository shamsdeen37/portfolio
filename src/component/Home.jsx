import React, { forwardRef } from 'react'
import Typewriter from 'react-typewriter-effect';
import '../styles/homestyle.css'
import Animatedbox from '../assets/Animated_box';

const Home = forwardRef((props, ref) => {

  return (
    <div ref={ref} className="home-container">
      <div className='circles'></div>
      <Animatedbox/>
      <div className="homeanimations-container">
        <div className='IAM-message'>
          <Typewriter
            autoStart={true}
            startDelay={500}
            cursorColor="transparent"
            multiText={[
              'HI !',
              'I AM',
            ]}
            loop={3}
            nextTextDelay={2000}
            typeSpeed={40}
          />
        </div>

        <div className='name'>
          <Typewriter
            autoStart={true}
            startDelay={5500}
            cursorColor="transparent"
            multiText={[
              'SHAMSUDEEN',
            ]}
            loop={3}
            nextTextDelay={1000}
            typeSpeed={50}
          />

        </div>


        <div className="carear-animation">
          <div className='iama'>
            <Typewriter
              autoStart={true}
              startDelay={9000}
              cursorColor="transparent"
              multiText={[
                'I AM A',
              ]}
              loop={3}
              nextTextDelay={1000}
              typeSpeed={50}

            />
          </div>
          <div className="carear">
            <Typewriter
              autoStart={true}
              startDelay={10000}
              cursorColor="white"
              multiText={[
                'WEB DESIGNER',
                'REACT DEVELOPER',
                'FRONTEND DEVELOPER',
                'WEB DESIGNER',
                'REACT DEVELOPER',
                'FRONTEND DEVELOPER',
                'WEB DESIGNER',
                'REACT DEVELOPER',
                'FRONTEND DEVELOPER',
                'WEB DESIGNER',
                'REACT DEVELOPER',
                'FRONTEND DEVELOPER',
                'WEB DESIGNER',
                'REACT DEVELOPER',
                'FRONTEND DEVELOPER',
                'WEB DESIGNER',
                'REACT DEVELOPER',
                'FRONTEND DEVELOPER',
                'WEB DESIGNER',
                'REACT DEVELOPER',
                'FRONTEND DEVELOPER',
                'WEB DESIGNER',
                'REACT DEVELOPER',
                'FRONTEND DEVELOPER',
                'WEB DESIGNER',
                'REACT DEVELOPER',
                'FRONTEND DEVELOPER',

              ]}
              loop={3}
              nextTextDelay={1000}
              typeSpeed={30}



            />
          </div>
        </div>
          <div className='home-para'>
          <Typewriter
              autoStart={true}
              startDelay={11000}
              cursorColor="transparent"
              multiText={[
                'PASSIONATE FRONT-END DEVELOPER WITH THE ABILITY TO CREATE RESPONSIVE WEB APPLICATIONS WITH REUSABLE COMPONENTS .'
              ]}
              loop={3}
              nextTextDelay={1000}
              typeSpeed={30}



            />
          </div>

      </div >

    </div>
  )
})

export default Home