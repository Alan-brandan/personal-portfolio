import React, { forwardRef } from 'react'
import './Skills.css';
import skills from './skillsData';
import { motion } from "framer-motion";


var animateButton = function (e) {
  e.target.classList.add('animate');
  setTimeout(function () {
    e.target.classList.remove('animate');
  }, 700);
};

const Skills = (props, ref) => {
  return (
    <div className='skill-container' ref={ref}>
      <h2 className='skills-spacer'><span>My skill set</span></h2>

      <div className='skills-container'>
        <div className='skill-set1'>
          <h2>-Development-</h2>
          <div className='web'>
            {skills.filter(function (item) { return item.category === 'Web'; }).map((skillitem, i) => {
              const { title, proficency, image } = skillitem;
              return <motion.div data-tooltip={proficency} whileInView={{ y: 0, opacity: 1 }} initial={{ y: 150, opacity: 0 }} transition={{ duration: 0.5, delay: i * 0.15 }}>
                <img className='skillbtn' onClick={animateButton} src={image} alt={title} />
                <h3>{title}</h3>
              </motion.div>
            })}
          </div>
        </div>
        <div className='skill-set2'>
          <h2>-Software & Tools-</h2>
          <div className='soft'>
            {skills.filter(function (item) { return item.category === 'Soft'; }).map((skillitem, i) => {
              const { title, proficency, image } = skillitem;
              return <motion.div data-tooltip={proficency} whileInView={{ y: 0, opacity: 1 }} initial={{ y: 150, opacity: 0 }} transition={{ duration: 0.5, delay: i * 0.15 }}>
                <img className='skillbtn' onClick={animateButton} src={image} alt={title} />
                <h3>{title}</h3>
              </motion.div>
            })}
          </div>
        </div>
        <div className='skill-set3'>
          <h2>-Design-</h2>
          <div className='design'>
            {skills.filter(function (item) { return item.category === 'Design'; }).map((skillitem, i) => {
              const { title, proficency, image } = skillitem;
              return <motion.div data-tooltip={proficency} whileInView={{ y: 0, opacity: 1 }} initial={{ y: 150, opacity: 0 }} transition={{ duration: 0.5, delay: i * 0.15 }}>
                <img className='skillbtn' onClick={animateButton} src={image} alt={title} />
                <h3>{title}</h3>
              </motion.div>
            })}
          </div>
        </div>
      </div>
      <div className='divider-skills'></div>
    </div>
  )
}

export default forwardRef(Skills)