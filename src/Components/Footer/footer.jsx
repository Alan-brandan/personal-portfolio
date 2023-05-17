import React,{forwardRef} from 'react'
import './footer.css'

const Footer = (props,ref) => {
  return (
    <div className='footer-container' ref={ref}>
        <h2>Developed and designed by <span>© Alan Brandan 2023</span></h2>
    </div>
  )
}

export default forwardRef(Footer)