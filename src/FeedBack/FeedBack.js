import React, { useState } from 'react';
import './FeedBack.css'; 
import Swal from 'sweetalert2';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSendClick = () => {
    Swal.fire({
      icon: 'success',
      title: 'Thanks for sending us feedback',
      
    })
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Rating:', rating);
    console.log('Comment:', comment);
  };

  return (
    <div className="feedback-container">
      <div className="Container">
        <h2>Feedback </h2>
        <div className="Form">
            <form onSubmit={handleSubmit}>
                 <input className='mb-3' type="text" placeholder='your name'/>
                 <input className='mb-3' type="text" placeholder='subject'/>
                 <input className='mb-3' type="text" placeholder='your email'/>
                <div className="Comment">
               
                <textarea value={comment} placeholder="Comment: " onChange={handleCommentChange} />
                </div>
                <button type="submit" className="btn btn-warning" onClick={handleSendClick}>Send</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
