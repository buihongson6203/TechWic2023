import React, { useState } from 'react';
import './FeedBack.css'; 

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event) => {
    setRating(event.target.value);
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
        <h2>Feedback Form</h2>
        <div className="Form">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="@Email" />
                <div className="Comment">
               
                <textarea value={comment} placeholder="Comment:" onChange={handleCommentChange} />
                </div>
                <button type="submit" className="btn">Send</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
