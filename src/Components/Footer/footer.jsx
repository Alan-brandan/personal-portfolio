import React,{forwardRef} from 'react'
import './footer.css'

const Footer = (props,ref) => {
  return (
    <div className='footer-container' ref={ref}>
        <h2>Developed and designed by </h2>
        <span> © Alan Brandan 2023</span>
    </div>
  )
}

export default forwardRef(Footer)