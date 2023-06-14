import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import '../styles/contactstyle.css'


const Form = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fr4zw7h', 'template_tirjwwl', form.current, 'Zb_JsQWePR6nuze8A')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        console.log(form.current[1].value)
        form.current[0].value=''
        form.current[1].value=''
        form.current[2].value=''


      };
    
  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
      <h2>SEND A MAIL TO ME ...</h2>
      <label >NAME
      <input className='inputname' type="text" name="user_name" required/></label>
      <label >GMAIL
      <input className='inputemail' type="email" name="user_email" required/>
      </label>
      <label >DISCRIPTION
      <textarea className='textarea' name="message" />
      </label>
      <input className='inputsubmit' type="submit" value="Send" required/>
    </form>
    )
}

export default Form