import React, { forwardRef } from 'react'
import { Form } from '../assets'

import '../styles/contactstyle.css'
import github from '../images/contactimage/github.png'
import linkedin from '../images/contactimage/linkedin.png'
import resume from '../images/contactimage/resume.png'
import Resume from '../images/Resume_shamsudeen.png'
import Resume_pdf from '../images/SHAMSUDEEN_M_RESUME.pdf'
import { useRef } from 'react'


const Contact = forwardRef((props,ref) => {
  const resume_ref = useRef()
  const displayresume = () =>{
     resume_ref.current.className=' visible resume-image'
    console.log(resume_ref.current.className)
  }
  const hideresume = () =>{
    resume_ref.current.className='resume-image'
   console.log(resume_ref.current.className)
 }
  


  return (
    <div ref={ref} className="contact-container">
      <div className='form-container'>

      <Form/>
      </div>
      <div className='contact-icons'>

        <div className='contact-icon'>
          <a href='https://github.com/shamsdeen37/'>

        <img alt='github' width='90px' src={github}/>GITHUB
          </a>
        </div>

        <div className='contact-icon'>
          <a href='https://www.linkedin.com/in/shamsu-deen-b0816227b'>

        <img alt='linkedin' width='90px' src={linkedin}/>LINKED IN
          </a>
        </div>

        <div className='contact-icon'>
          <div className='resume'  onClick={displayresume}>
        <img alt='mail' width='90px'  src={resume}/>RESUME
          </div>
        </div>

      </div>


      <div ref={resume_ref} className='resume-image'>
        <img alt='resume' src={Resume}/>
        <div className='resume-button'>
          <button className='downloadbutton'>
        <a href={Resume_pdf} download>DOWNLOAD</a>
          </button>
        <button className='canclebutton' onClick={hideresume}>CANCLE</button>
        </div>

      </div>
    </div>
  )
})

export default Contact