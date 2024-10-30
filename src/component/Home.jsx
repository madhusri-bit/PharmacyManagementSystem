// import React, { useContext } from 'react';

// import { AuthContext } from '../AuthContext'; // Import AuthContext
// import { Link } from 'react-router-dom';
// import './Home.css';
// import profilePic from './newdp.jpeg';


// function Home() {
//   const { currentUser } = useContext(AuthContext); // Access currentUser from AuthContext

//   return (
//     <div className="home-container ">
//       <header className="hero-section ">
//         <div className="header-top">
//           <div className="profile-icon">
//           <img src={profilePic} alt="Profile" />

//           </div>
//           <nav className="nav-buttons">
//             <a href="#feature">
//               <Link to="/features">Features</Link>
//             </a>
//             <a href="#about">
//               <Link to="/about">About Us</Link>
//             </a>
//             <a href="#feedback">
//               <Link to="/feedback">Feedback</Link>
//             </a>
//             <a href="#contact">
//               <Link to="/contact">Contact Details</Link>
//             </a>
//             <a href="#contact">
//               <Link to="/prof">My Profile</Link>
//             </a>
//           </nav>
//           <div className="auth-buttons">
//             <button className="cta-button">
//               <Link to="/login">Sign Up / Login</Link>
//             </button>
//           </div>
//         </div>
//         <div className="hero-overlay">
//           <h1>Welcome to MediTrack</h1>
//           {currentUser ? ( // Display personalized greeting
//             <h2>Hello, {currentUser.username}!</h2>
//           ) : (
//             <Link to='/login'><h2>Please log in to continue.</h2></Link>
//           )}
//           <p>Your trusted partner in pharmacy management excellence.</p>
//           <button className="cta-button">Explore Now</button>
//         </div>
//       </header>

//       <section id="feature" className="features-section">
//         <h2>Features Overview</h2>
//         <div className="features-grid">
//           <div className="feature">
//             <i className="icon-inventory"></i>
//             <h3>Inventory Management</h3>
//             <p>Real-time tracking and efficient stock management.</p>
//           </div>
//           <div className="feature">
//             <i className="icon-prescription"></i>
//             <h3>Prescription Management</h3>
//             <p>Quick and easy prescription processing.</p>
//           </div>
//           <div className="feature">
//             <i className="icon-patient"></i>
//             <h3>Patient Management</h3>
//             <p>Comprehensive patient records at your fingertips.</p>
//           </div>
//           <div className="feature">
//             <i className="icon-analytics"></i>
//             <h3>Reporting & Analytics</h3>
//             <p>Insightful data to drive better decision-making.</p>
//           </div>
//           <div className="feature">
//             <i className="icon-billing"></i>
//             <h3>Billing & Payments</h3>
//             <p>Simplified billing with multiple payment options.</p>
//           </div>
//         </div>
//       </section>

//       <section className="benefits-section">
//         <h2 id="about">Why Choose Us?</h2>
//         <div className="benefits-grid">
//           <div className="benefit">
//             <h3>Efficiency</h3>
//             <p>Automate routine tasks and minimize errors.</p>
//           </div>
//           <div className="benefit">
//             <h3>Compliance</h3>
//             <p>Stay compliant with the latest healthcare regulations.</p>
//           </div>
//           <div className="benefit">
//             <h3>Accessibility</h3>
//             <p>Access the system from anywhere, anytime.</p>
//           </div>
//           <div className="benefit">
//             <h3>Security</h3>
//             <p>Advanced encryption to protect your data.</p>
//           </div>
//         </div>
//       </section>

//       <section className="testimonials-section">
//         <h2>What Our Clients Say</h2>
//         <div id="feedback" className="testimonial">
//           <p>“Our pharmacy’s efficiency has skyrocketed since we started using MediTrack Management System. It’s a game-changer!”</p>
//           <p>- Akshaya</p>
//         </div>
//       </section>

//       <footer className="footer">
//         <div id="contact" className="footer-links">
//           <a href="/about">About Us</a>
//           <a href="/contact">Contact Us</a>
//           <a href="/privacy">Privacy Policy</a>
//         </div>
//         <p>© 2024 MediTrack. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default Home;



import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext'; // Import AuthContext
import { Link } from 'react-router-dom';
import './Home.css';
import profilePic from './newdp.jpeg';

function Home() {
  const { currentUser, logoutUser } = useContext(AuthContext); // Access currentUser and logout

  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="header-top">
          <div className="profile-icon">
            <img src={profilePic} alt="Profile" />
          </div>
          <nav className="nav-buttons">
            <a href="#feature">
              <Link to="/features">Features</Link>
            </a>
            <a href="#about">
              <Link to="/about">About Us</Link>
            </a>
            <a href="#feedback">
              <Link to="/feedback">Feedback</Link>
            </a>
            <a href="#contact">
              <Link to="/contact">Contact Details</Link>
            </a>
            <a href="#profile">
              <Link to="/prof">My Profile</Link>
            </a>
            <a href="#orders">
              <Link to="/order">Place Order</Link>
            </a>
          </nav>
          <div className="auth-buttons">
            {currentUser ? (
              // Display Logout button if logged in
              <button className="cta-button" onClick={logoutUser}>Logout</button>
            ) : (
              // Display Sign Up / Login button if not logged in
              <button className="cta-button">
                <Link to="/login">Sign Up / Login</Link>
              </button>
            )}
          </div>
        </div>
        <div className="hero-overlay">
          <h1>Welcome to MediTrack</h1>
          {currentUser ? (
            <h2>Hello, {currentUser.username}!</h2> // Personalized greeting
          ) : (
            <Link to='/login'><h2>Please log in to continue.</h2></Link>
          )}
          <p>Your trusted partner in pharmacy management excellence.</p>
          <button className="cta-button">Explore Now</button>
        </div>
      </header>

      <section id="feature" className="features-section">
        <h2>Features Overview</h2>
        <div className="features-grid">
          <div className="feature">
            <i className="icon-inventory"></i>
            <h3>Inventory Management</h3>
            <p>Real-time tracking and efficient stock management.</p>
          </div>
          <div className="feature">
            <i className="icon-prescription"></i>
            <h3>Prescription Management</h3>
            <p>Quick and easy prescription processing.</p>
          </div>
          <div className="feature">
            <i className="icon-patient"></i>
            <h3>Patient Management</h3>
            <p>Comprehensive patient records at your fingertips.</p>
          </div>
          <div className="feature">
            <i className="icon-analytics"></i>
            <h3>Reporting & Analytics</h3>
            <p>Insightful data to drive better decision-making.</p>
          </div>
          <div className="feature">
            <i className="icon-billing"></i>
            <h3>Billing & Payments</h3>
            <p>Simplified billing with multiple payment options.</p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2 id="about">Why Choose Us?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <h3>Efficiency</h3>
            <p>Automate routine tasks and minimize errors.</p>
          </div>
          <div className="benefit">
            <h3>Compliance</h3>
            <p>Stay compliant with the latest healthcare regulations.</p>
          </div>
          <div className="benefit">
            <h3>Accessibility</h3>
            <p>Access the system from anywhere, anytime.</p>
          </div>
          <div className="benefit">
            <h3>Security</h3>
            <p>Advanced encryption to protect your data.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div id="feedback" className="testimonial">
          <p>“Our pharmacy’s efficiency has skyrocketed since we started using MediTrack Management System. It’s a game-changer!”</p>
          <p>- Akshaya</p>
        </div>
      </section>

      <footer className="footer">
        <div id="contact" className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <p>© 2024 MediTrack. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
