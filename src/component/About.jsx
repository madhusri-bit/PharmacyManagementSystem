import React from 'react';
import './About.css';

function About() {
  return (
    <>
      <div className="background-overlay"></div>
      <div className="about-container">
        <h1>About MediTrack</h1>

        <div className="section mission-vision">
          <h2>Our Mission</h2>
          <p>To empower pharmacies with innovative technology, ensuring efficient management and top-notch service for their customers.</p>

          <h2>Our Vision</h2>
          <p>To become the leading pharmacy management system, trusted by healthcare providers worldwide for its reliability and ease of use.</p>
        </div>

        <div className="section owner-details">
          <h2>Owner</h2>
          <p><strong>Name:</strong> Madhusri </p>
          <p><strong>Phone:</strong> +91 8012147232</p>
          <p><strong>Email:</strong> madhusri@meditrack.com</p>
          <div className="social-media">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="section co-workers">
          <h2>Our Team</h2>

          <div className="co-worker">
            <p><strong>Name:</strong> Akshaya</p>
            <p><strong>Email:</strong> akshaya@meditrack.com</p>
          </div>

          <div className="co-worker">
            <p><strong>Name:</strong> Swetha</p>
            <p><strong>Email:</strong> swetha@meditrack.com</p>
          </div>

          <div className="co-worker">
            <p><strong>Name:</strong> Sathya</p>
            <p><strong>Email:</strong> sathya@meditrack.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;