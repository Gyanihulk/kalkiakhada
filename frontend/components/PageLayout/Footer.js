import React from 'react'

import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem",}}/>
                    <div>
                        <p>Sitapur Bypass road , Jwalapur </p>
                        <p>Haridwar, Uttarakhand (249401)</p>
                    </div>
                </div>
                <div className='phone'>
                    <FaPhone size={20} style={{color: "#fff", marginRight: "2rem",}}/>
                    <div>
                        <p>+91 7017-36-8626</p>
                    </div>
                </div>
                <div className='email'>
                    <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem",}}/>
                    <div>
                        <p>contact@kalkiakhada.com</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='about-me'>
                 <h4>The Revolution</h4> 
                 <p>We want you to be a machine. Apart from being you being dependent on one</p>
                </div>
                <div className='social-media'>
                    <FaFacebook size={20} style={{color: "#fff", marginRight: "0.5rem"}}/>
                    <FaInstagram size={20} style={{color: "#fff", marginRight: "0.5rem"}}/>
                    <FaLinkedin size={20} style={{color: "#fff", marginRight: "0.5rem"}}/>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Footer