import React, { useEffect, useRef, useState } from 'react'

import projecticon from '../images/navbaricons/projecticon.png'

import abouticon from '../images/navbaricons/abouticon.png'
import contacticon from '../images/navbaricons/contacticon.png'
import homeicon from '../images/navbaricons/homeicon.png'
import skillsicon from '../images/navbaricons/skillicon.png'




const Navbar = (props) => {


  const navref = useRef()
  const lines = useRef()
  const line1 = useRef()
  const line2 = useRef()

  const home = useRef()
  const skills = useRef()
  const projects = useRef()
  const about = useRef()
  const contact = useRef()





  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // console.log(entry.target.className)

           const observed = entry.target.className
           console.log(observed)

          observednav(observed)
         
        }
        else {
        }
      },
      { threshold: 0.8 } 
    );

    if (props.homeref.current) {
      observer.observe(props.homeref.current);
    }
    if (props.skillref.current) {
      observer.observe(props.skillref.current);
    }
    if (props.projectref.current) {
      observer.observe(props.projectref.current);
    }
    if (props.aboutref.current) {
      observer.observe(props.aboutref.current);
    }
    if (props.contactref.current) {
      observer.observe(props.contactref.current);
    }

    return () => {
      if (props.homeref.current) {
        observer.unobserve(props.homeref.current);
      }
      if (props.skillref.current) {
        observer.unobserve(props.skillref.current);
      }
      if (props.projectref.current) {
        observer.unobserve(props.projectref.current);
      }
      if (props.aboutref.current) {
        observer.unobserve(props.aboutref.current);
      }
      if (props.contactref.current) {
        observer.unobserve(props.contactref.current);
      }
    };
  }, []);

  //console.log(entry.target.className)


  const gotohome=()=>{
    window.scrollTo({
      top:props.homeref.current.offsetTop,
      behavior:'smooth',
    })
  }

  const gotoskills=()=>{
    window.scrollTo({
      top:props.skillref.current.offsetTop,
      behavior:'smooth',
    })
  }
  const gotoproject=()=>{
    window.scrollTo({
      top:props.projectref.current.offsetTop,
      behavior:'smooth',
    })
  }
  const gotoabout=()=>{
    window.scrollTo({
      top:props.aboutref.current.offsetTop,
      behavior:'smooth',
    })
  }
  const gotocontact=()=>{
    window.scrollTo({
      top:props.contactref.current.offsetTop,
      behavior:'smooth',
    })
  }

  const observednav = (observed) =>{

    if(observed==="home-container"){
      home.current.style.width='90px'
      home.current.style.background='linear-gradient(30deg,#d7bb05,#fce54a)'
    }
    else{
      home.current.style.width='30px'
      home.current.style.background='transparent'

    }
    if(observed==="skills-container"){
      skills.current.style.width='90px'
      skills.current.style.background='linear-gradient(30deg,#d7bb05,#fce54a)'

    }
    else{
      skills.current.style.width='30px'
      skills.current.style.background='transparent'

    }
    if(observed==="projects-container"){
      projects.current.style.width='90px'
      projects.current.style.background='linear-gradient(30deg,#d7bb05,#fce54a)'

    }
    else{
      projects.current.style.width='30px'
      projects.current.style.background='transparent'

    }
    if(observed==="about-container"){
      about.current.style.width='90px'
      about.current.style.background='linear-gradient(30deg,#d7bb05,#fce54a)'

    }
    else{
      about.current.style.width='30px'
      about.current.style.background='transparent'

    }
    if(observed==="contact-container"){
      contact.current.style.width='90px'
      contact.current.style.background='linear-gradient(30deg,#d7bb05,#fce54a)'

    }
    else{
      contact.current.style.width='30px'
      contact.current.style.background='transparent'

    }

  }

  const showicons = () =>{
    console.log(navref.current.className)
    if(navref.current.className==="navbar-container showicon"){
      navref.current.className="navbar-container"
      line1.current.style.transform="rotate(0deg)"
      line2.current.style.transform="rotate(0deg)"
      lines.current.className="lines"
    }
    else{
    navref.current.className="navbar-container showicon"
    line1.current.style.transform="rotate(45deg)"
    line2.current.style.transform="rotate(315deg)"
    lines.current.className="lines linesbordernone"
    }

  }







  return (
    <div className='navbar'>
    <div ref={navref} className="navbar-container">
     <div ref={home} className="nav-components" onClick={gotohome}> <img alt='home' width='27px' height='27px' src={homeicon} /><span>Home</span></div>
      <div ref={skills} className="nav-components" onClick={gotoskills}><img alt='skills' width='27px' height='27px' src={skillsicon} /><span>Skills</span></div>
      <div ref={projects} className="nav-components" onClick={gotoproject}> <img alt='project'width='25px' height='25px' src={projecticon} /><span>Project</span></div>
       <div ref={about} className="nav-components" onClick={gotoabout}> <img alt='about' width='25px' height='25px' src={abouticon} /><span>About</span></div>
       <div ref={contact} className="nav-components" onClick={gotocontact}><img alt='contact' width='25px' height='25px' src={contacticon} /><span>Contact</span></div>
      </div>
      <div className='hamberger'onClick={showicons}>
        <div ref={lines}className='lines'>
        <div ref={line1} className='line'></div>
        <div ref={line2} className='line'></div>

        </div>

        </div>
        
    </div>
  )
}

export default Navbar
/*
#1976D2

#42A5F5

#90CAF9

*/