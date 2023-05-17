
import React, { useRef, useState } from 'react';
import './contactform.css';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { delay, motion } from "framer-motion";

export const ContactForm = () => {

  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMailAnimation();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }



  const sendMailAnimation = () => {
    document.getElementById('plane').className = 'animation';
    document.getElementById('tilde').className = 'animation2';
  }


  const sendEmail = (e) => {
    e.preventDefault();
    sendMailAnimation();

    emailjs.sendForm('service_fq3jycg', 'template_yqvrptr', form.current, 'zECXffMcJao6RQU4Z')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");

        form.current.value=""
      }, (error) => {
        console.log(error.text);
      });
  };



  return (
    <motion.div className='form_container' whileInView={{ x: 0, y: 0, opacity: 1 }} initial={{ x: -100, y: 50, opacity: 0 }} transition={{ duration: 0.7 }}>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <div className='form-name'>
          <label >Name </label>
          <input type="text" name="user_name" required placeholder='What is your name?' />
          <FontAwesomeIcon aria-aria-hidden="true" className='icon' icon="fa-solid fa-user" />
        </div>
        <div className='form-email'>
          <label >Email </label>
          <input type="email" name="user_email" required placeholder='And your email adress?' />
        </div>
        <div className='form-message'>
          <label >Message </label>
          <textarea name="message" autoComplete='off' required pattern='/[0-9a-zA-Z]{10,}/' placeholder='Write your message...' />
        </div>
        <div className='sendbtn-container'>
          <div className='mail-btn' />


          <img src="https://i.cloudup.com/gBzAn-oW_S-2000x2000.png" id='plane' />

          <div className='tildebtn'>
            <img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" id='tilde' />
          </div>

          <input className='sendmail_btn' type="submit" value="" />
        </div>


      </form>
    </motion.div>
  )
}

export default ContactForm