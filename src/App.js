import React, {  useRef } from 'react'
import { About, Contact, Home, Navbar, Projects, Skills } from './component'

const App = () => {
  const homeelement = useRef(null)
  const skillelement = useRef(null)
  const projectelement = useRef(null)
  const aboutelement = useRef(null)
  const contactelement = useRef(null)

  




  return (
    <div className="main-container">
    <Navbar skillref={skillelement}  homeref={homeelement} projectref={projectelement} aboutref={aboutelement} contactref={contactelement} />
    <Home  ref={homeelement}/>
    <Skills  ref={skillelement}/>
    <Projects ref={projectelement}/> 
    <About ref={aboutelement}/>
    <Contact ref={contactelement}/>
    
    </div>
  )
}

export default App