// ContactUs.js

import React, { useState } from 'react';
import './Contact.css'; 
import { FaMapMarkerAlt,FaPhone} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', name, email, message);
  };

  return (
    <div className="contact-us-container">
      
      <div className="Contact">
      <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
            <div className="input">
                <input
                style={{ marginRight: '1.5em' }}
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input
                type="text"
                placeholder="subject"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className="btn">Send</button>
        </form>
      </div>
      <div className="Information">
        <h2>Information</h2>
        <div className="Infor">
            <p><span>Find solutions :</span> to common problems, or get help from a support agent industry's standard .</p>
            <div className="Address">
                <div className="AddressCss"><FaMapMarkerAlt /></div>
                <p><span>Address:</span> 285, Ba Dinh Doi Can</p>
            </div>
            <div className="Phone">
                <div className="PhoneCss"><FaPhone /></div>
                <p><span>Phone:</span> +84 86 296 319</p>
            </div>
            <div className="Email">
                <div className="EmailCss"><FiMail /></div>
                <p><span>Email:</span> long200312a1@gmail.com</p>
            </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default ContactUs;
