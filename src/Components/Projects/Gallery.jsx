import './Gallery.css';
import { forwardRef } from 'react';
import { motion } from "framer-motion";
import projects from './projectsData';

const Gallery = ( {items,filterItems}, ref ) => {

  return (
    <div className='projects-container'>
      <div className='projects-section' ref={ref}>
        <div className='proj-header'>
          <h2>Projects</h2>
          <p>Skills grow, so will this portfolio</p>
        </div>
        <div className='filter-container'>
          <button onClick={() => filterItems("All")}>All</button>
          <button onClick={() => filterItems("Web")}>Web</button>
          <button onClick={() => filterItems("Mobile")}>Mobile</button>
        </div>
        <motion.div  className='projectos'>
          {items.map((menuitem,i) => {
            const { id, title, image, desc, link } = menuitem;
            return <motion.div whileInView={{ y: 0, opacity: 1 }}  initial={{ y: 100,opacity: 0 }} exit={{ y: 100,opacity: 0 }} transition={{ duration: 0.5,delay:i*0.2 }} layout key={id} className='proj-card'>

              <img src={image} alt={title} />
              <a href={link} target='_blank' rel="noreferrer"></a>
              <div className='proj-card-title'>
                <div>
                  <h4>{title}</h4>
                </div>
              </div>

              <div className='proj-info'>
                <p>{desc}</p>
              </div>

            </motion.div>
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default forwardRef(Gallery)