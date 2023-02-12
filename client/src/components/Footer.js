import React from 'react'
import './css/Footer.css'
import image from '../utils/11.jpg'

const Footer = () => {
  return (
    <>
    <div className= 'FootImg'>
        <div>
            <img src="https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
            alt=" img" />
        </div>
        <div className="foottext"> 
           <div>
            <img src={image} alt="" />
            </div>
            <div className="address">
                <p>There should be millions of people striving for zero waste rather than a select few who achieve it perfectly</p>
                <p> 2175 southside surat gujarat</p>
                <p>wictronix.com</p>
                <p>Mon-Sat 9:00am to 7:00pm</p>
            </div>
            <div className="links">
            <h3>Links</h3>
            <a href="Home">Home</a>
            <a href="Home">About Us</a>
            <a href="Home">Services</a>
            <a href="Home">Events</a>
            <a href="Home">Privacy Policy</a>
            </div>
        </div>
    
    </div>
    </>
  )
}

export default Footer
