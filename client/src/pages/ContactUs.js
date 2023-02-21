import React, { useState } from 'react'
import "./css/contactUs.css"
import image from  "../utils/contact.jpg"

const ContactUs = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending....");
    const {name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form
     onSubmit={handleSubmit}
     >
      <div className='contact-img'>
        <img src={image} alt="" />
      </div>
      <div className="rectangle">
    <div className='tact'>
        <div className='left'>
          <h1>Contact Us</h1>
          <p>Fill up the form and our Team will get back <br />
to you within 24 hours</p>
<p>+91 1234567890</p>
<p>wastemanagement@gmail.com</p>
<p>10.2 street opp. raj bunglow 
gidc surat</p>
<button className='btn' type='submit'>{status}</button>
        </div>
        <div className='right'>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required/>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" required></textarea>
          </div>
        </div>
      </div>
    </div>
    </form>
  )
}

export default ContactUs
