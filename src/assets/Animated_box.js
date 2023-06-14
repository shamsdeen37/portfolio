import React from 'react' 
import HTML from '../images/skillsimage/html_icon.png'
import css from '../images/skillsimage/css_icon.png'
import javascript from '../images/skillsimage/javascript_icon.png'
import reactjs from '../images/skillsimage/reactjs_icon.png'
import materialui from '../images/skillsimage/materialui_icon.png'
import tailwindcss from '../images/skillsimage/tailwindcss_icon.png'


const Animated_box = () => {
  return (
    <div className='box_container'>

    <div className='box'>
        <div className='card' id='front'><img alt='images' width='200px' src={HTML}/></div>
        <div className='card' id='right'><img alt='images' width='200px' src={css}/></div>
        <div className='card' id='left'><img alt='images' width='200px' src={javascript}/></div>
        <div className='card' id='top'><img alt='images' width='200px' src={reactjs}/></div>
        <div className='card' id='bottom'><img alt='images' width='200px' src={materialui}/></div>
        <div className='card' id='back'><img alt='images' width='200px' src={tailwindcss}/></div>

    </div>
    </div>
  )
}

export default Animated_box