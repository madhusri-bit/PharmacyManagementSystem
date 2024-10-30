import React, { useState } from 'react';
import './FeedbackPage.css';

function FeedbackPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [usefulness, setUsefulness] = useState(0);
  const [service, setService] = useState(0);
  const [comments, setComments] = useState('');
  const [clientFeedbacks, setClientFeedbacks] = useState([
    { name: 'Alice Brown', review: 'Great service and easy to use! Highly recommend MediTrack.' },
    { name: 'John Smith', review: 'The best pharmacy management system I’ve used so far.' },
    { name: 'Emily Johnson', review: 'Efficient and reliable. Keeps everything organized.' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && feedback) {
      setClientFeedbacks([
        ...clientFeedbacks,
        {
          name,
          review: `${feedback}\nRating: ${rating}/5\nUsefulness: ${usefulness}/5\nService: ${service}/5\nComments: ${comments}`,
        },
      ]);
      setName('');
      setEmail('');
      setFeedback('');
      setRating(0);
      setUsefulness(0);
      setService(0);
      setComments('');
    }
  };

  const handleStarClick = (setter) => (value) => {
    setter(value);
  };

  return (
    <div className="feedback-page">
      <h1>Client Feedback</h1>

      <div className="feedback-form">
        <h2>Submit Your Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback here..."
            required
          ></textarea>

          <div className="rating-section">
            <label>Rate Us:</label>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${rating >= star ? 'filled' : ''}`}
                onClick={() => handleStarClick(setRating)(star)}
              >
                ★ 
              </span>
            ))}
          </div>

          <div className="rating-section">
            <label>How Useful is Our Website:</label>
            
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${usefulness >= star ? 'filled' : ''}`}
                onClick={() => handleStarClick(setUsefulness)(star)}
              >
                ★
              </span>
            ))}
          </div>

          <div className="rating-section">
            <label>How Was Our Service:</label>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${service >= star ? 'filled' : ''}`}
                onClick={() => handleStarClick(setService)(star)}
              >
                ★
              </span>
            ))}
          </div>

          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Constructive comments (optional)"
          ></textarea>

          <button type="submit">Submit Feedback</button>
        </form>
      </div>

      <div className="feedback-list">
        <h2>Previous Client Reviews</h2>
        {clientFeedbacks.map((client, index) => (
          <div key={index} className="client-feedback">
            <p><strong>{client.name}</strong></p>
            <p>{client.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackPage;