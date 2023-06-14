import React, { forwardRef, useEffect, useState } from 'react';
import Html_icon from '../images/skillsimage/html_icon.png'
import css_icon from '../images/skillsimage/css_icon.png'
import javascript_icon from '../images/skillsimage/javascript_icon.png'
import reactjs_icon from '../images/skillsimage/reactjs_icon.png'
import tailwindcss_icon from '../images/skillsimage/tailwindcss_icon.png'
import materialui_icon from '../images/skillsimage/materialui_icon.png'
import { Mycount } from '../assets';

import '../styles/skillsstyle.css'


const Skills = forwardRef((props, ref) => {

  const [visibleclass, setVisibleclass] = useState('')
  const [htmlcount, setHtmlcount] = useState(0)
  const [csscount, setCsscount] = useState(0)
  const [javascriptcount, setJavascriptcount] = useState(0)
  const [reactjscount, setReactjscount] = useState(0)
  const [materialuicount, setMaterialuicount] = useState(0)
  const [tailwindcsscount, setTailwindcsscount] = useState(0)


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleclass('visibleclass')
          setHtmlcount(96)
          setCsscount(90)
          setJavascriptcount(85)
          setReactjscount(80)
          setMaterialuicount(70)
          setTailwindcsscount(60)
        }
        else {
          setVisibleclass('')
        }
      },
      { threshold: 0.8 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);

      }
    };
  },[]);


  return (
    <div ref={ref} className="skills-container">
      <div className='skillcircle'><p>SKILLS</p></div>

      <div className='skill-image'>
        <div className='skills' ><span>HTML</span><img alt='html' src={Html_icon} /><span >{<Mycount props={htmlcount} />}</span></div>
        <div className='skills'><span>CSS</span><img alt='css' src={css_icon} /><span className={`countspan ${visibleclass}`}>{<Mycount props={csscount} />}</span></div>
        <div className='skills'><span>JAVASCRIPT</span><img alt='javascript' src={javascript_icon} /><span className={`countspan ${visibleclass}`}>{<Mycount props={javascriptcount} />}</span></div>
        <div className='skills'><span>REACT JS</span><img alt='reactjs' src={reactjs_icon} /><span className={`countspan ${visibleclass}`}>{<Mycount props={reactjscount} />}</span></div>
        <div className='skills'><span>MATERIAL UI</span><img alt='materialUI' src={materialui_icon} /><span className={`countspan ${visibleclass}`}>{<Mycount props={materialuicount} />}</span></div>
        <div className='skills'><span>TAILWIND CSS</span><img alt='tailwindcss' src={tailwindcss_icon} /><span className={`countspan ${visibleclass}`}>{<Mycount props={tailwindcsscount} />}</span></div>

      </div>
      <div className='skills-percentage'>
        <div className='percentage'><svg><circle className={`htmlcircle ${visibleclass}`} cx='5vw' cy='10vh' r='8vw'></circle></svg></div>
        <div className='percentage'><svg><circle className={`csscircle ${visibleclass}`} cx='5vw' cy='10vh' r='8vw' /></svg></div>
        <div className='percentage'><svg><circle className={`javascriptcircle ${visibleclass}`} cx='5vw' cy='10vh' r='8vw' /></svg></div>
        <div className='percentage'><svg><circle className={`reactjscircle ${visibleclass}`} cx='5vw' cy='10vh' r='8vw' /></svg></div>
        <div className='percentage'><svg><circle className={`materialuicircle ${visibleclass}`} cx='5vw' cy='10vh' r='8vw' /></svg></div>
        <div className='percentage'><svg><circle className={`tailwindcsscircle ${visibleclass}`} cx='5vw' cy='10vh' r='8vw' /></svg></div>

      </div>



    </div>
  );
});

export default Skills;
