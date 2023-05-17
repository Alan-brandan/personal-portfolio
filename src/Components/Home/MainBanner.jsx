import React,{forwardRef}from 'react'
import './MainBanner.css';
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

const MainBanner = (props,ref) => {

  return (
    <div className='header-container' ref={ref}>
      <div className='home_content' >
        <div className='home_data'>
          <p>Hi, my name is</p>
          <h1>Alan Brandan</h1>
          <h2>
            I'm&nbsp;
            <Typewriter
              options={{
                strings: ['a Fullstack Developer', 'a Game Developer','an Artist'],
                autoStart: true,
                loop: true,
                cursor:"_",
                delay:90,
                deleteSpeed: 80,
                pauseFor:1900,
              }}
            />
          </h2>

        </div>
        <div className='home_items'>
          <div className='scroll_icon'><span></span></div>
        </div>
      </div>
      <div className='home_divider'></div>
    </div>
  )
}

export default forwardRef(MainBanner)