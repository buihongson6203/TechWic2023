import React, { useState } from 'react';
import './Contact.css'; 
import { FaMapMarkerAlt,FaPhone} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Swal from 'sweetalert2';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', name, email, message);
  };
  const mapStyle = {
    border: '0'
  };

  const handleSendClick = () => {
    Swal.fire({
      icon: 'success',
      title: 'Thanks for sending us contact',
      
    })
  };
  return (
    <div className="contact-us-container">
      
      <div className="Contact">
      <h2 className='tille'>Contact Us</h2>
        <form onSubmit={handleSubmit}>
            
                
            
            <input
            type="email"
            placeholder="Your Email"  className='mb-3'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
            placeholder="Your Message" className='mb-3'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className="btn btn-warning" onClick={handleSendClick}>Send</button>
        </form>
      </div>
      <div className="Map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.926558556676!2d105.81637567512934!3d21.035624380615364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0d6e603741%3A0x208a848932ac2109!2sAptech%20Computer%20Education!5e0!3m2!1svi!2s!4v1691580587069!5m2!1svi!2s"
          width="600"
          height="450"
          style={mapStyle}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>      
      </div>
      
    </div>
    
  );
};

export default ContactUs;