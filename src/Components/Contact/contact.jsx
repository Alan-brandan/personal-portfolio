import React,{forwardRef} from 'react'
import './contact.css';
import githubimg from "../../assets/img/github.png"
import linkedinimg from "../../assets/img/linkedin.png"
import ContactForm from './contactform';
import CopyToClipboard from 'react-copy-to-clipboard';

const Contact = (props,ref) => {

  return (
    <div>
      <div className='divider-contact'></div>

      <div className='contact-container' ref={ref}>
        <div className='contact-section'>
          <div className='contact-side'>
            <h2>Get In Touch</h2>
            <p>If you have any questions about me or my projects, fill out the form and i’ll be in touch as soon as possible.</p>
            <div className='contact-links'>

              <CopyToClipboard text="alanbrandan17@hotmail.com" data-tooltip="Copy to clipboard">
                <p>alanbrandan17@hotmail.com</p>
              </CopyToClipboard>

              <div className='contact-icons'>
                <a href="https://www.linkedin.com/in/alan-brandan/" target='_blank' ><img src={linkedinimg} alt="linkedin_icon" /></a>
                <a href="https://github.com/Alan-brandan" target='_blank' ><img src={githubimg} alt="github_icon" /></a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default forwardRef(Contact)