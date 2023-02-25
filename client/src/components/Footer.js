import React from 'react'
import './css/Footer.css'
import image from '../utils/11.jpg'
import { GoHome } from 'react-icons/go';
import { BiMap } from 'react-icons/bi';
import { AiFillGoogleSquare, AiOutlineFieldTime } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
        <div className="foottext"> 
           <div>
            <img src={image} alt="" />
            </div>
            <div className="address">
                <p><BiMap/>There should be millions of people striving for zero waste rather than a select few who achieve it perfectly</p>
                <p>    2175 southside surat gujarat</p>
                <p><AiFillGoogleSquare/> wictronix.com</p>
                <p><AiOutlineFieldTime/> Mon-Sat 9:00am to 7:00pm</p>
            </div>
            <div className="links">
            <h3>Links</h3>
            <a href="Home"><GoHome/></a>
            <a href="Home">About Us</a>
            <a href="Home">Services</a>
            <a href="Home">Events</a>
            <a href="Home">Privacy Policy</a>
            </div>
        </div>
    </>
  )
}

export default Footer
