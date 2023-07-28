import React, { forwardRef } from 'react'
import './Skills.css';
import skills from './skillsData';
import { motion } from "framer-motion";

const Skills = (props, ref) => {
  const skillSets = [
    { category: 'Web', title: '-Development-', containerClass: 'web' },
    { category: 'Soft', title: '-Software & Tools-', containerClass: 'soft' },
    { category: 'Design', title: '-Design-', containerClass: 'design' },
  ];

  const animateButton = (e) => {
    e.target.classList.add('animate');
    setTimeout(() => {
      e.target.classList.remove('animate');
    }, 700);
  };

  return (
    <div className='skill-container' ref={ref}>
      <h2 className='skills-spacer'><span>My skill set</span></h2>

      <div className='skills-container'>
        {skillSets.map((skillSet, index) => (
          <div className='skill-set' key={index}>
            <h2>{skillSet.title}</h2>
            <div className={skillSet.containerClass}>
              {skills
                .filter((item) => item.category === skillSet.category)
                .map((skillitem, i) => {
                  const { id, title, proficency, image } = skillitem;
                  return (
                    <motion.div
                      key={id}
                      data-tooltip={proficency}
                      whileInView={{ y: 0, opacity: 1 }}
                      initial={{ y: 150, opacity: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                    >
                      <img
                        className='skillbtn'
                        onClick={animateButton}
                        src={image}
                        alt={title}
                      />
                      <h3>{title}</h3>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
      <div className='divider-skills'></div>
    </div>
  );
};

export default forwardRef(Skills)