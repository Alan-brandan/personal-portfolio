import React,{ forwardRef } from 'react'
import './AboutBanner.css';
import { motion } from "framer-motion";
import Pdf from '../../assets/documents/resume.pdf';
import ProfilePic from '../../assets/img/profile.png';
const AboutBanner = (props,ref) => {

  let text = ["I'm a web developer from Argentina with a passion for creating ", <span key='span1'> dynamic, entertaining user experiences.</span>,<br key='br1'/>, "I enjoy the process of turning ideas into reality using creative solutions.", <br key='br2' />, <br key='br3' />,
    "I'm also an independant game developer using the Unity engine along with C#. This experience provides me with a solid foundation of ", <span key='span2'>Object Oriented Programming</span>, " and a familiarity with ", <span key='span3'>SOLID principles</span>, ".", <br key='br4'/>, <br key='br5' />,
    "I'm a self-taugh and curious person by nature, as well as someone with many fields of interest and creative pursuits ", <br key='br6' />, <br key='br7' />,
    "Other than coding, I love making CAD designs, drawing and learning new things."];

  return (
    <div className='about-section'>
      <div className='About-content' ref={ref}>
        <img className='about-pic' src={ProfilePic} alt="profilepic" />
        <motion.div className='about-text' whileInView={{ y: 0, opacity: 1 }} initial={{ y: 70, opacity: 0 }} transition={{ duration: 0.8,delay:0.2}}>
          <h2>Who am i?</h2>
          <p>
            {text}
          </p>
          <motion.div  whileInView={{ y: 0, opacity: 1 }} initial={{ y: 90, opacity: 0 }} transition={{ duration: 0.9,delay:0.2}}>
            <a href={Pdf} target='_blank'>
              <button className='resume_btn'>Resume</button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default forwardRef(AboutBanner)