import React, { useState, useContext } from 'react';
import axios from 'axios';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { AuthContext } from '../AuthContext';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/userActions';

function Signup() {
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const dispatch = useDispatch(); // Initialize Redux dispatch
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const validatePassword = (password) => {
    const minLength = /.{8,}/;
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const digit = /\d/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (!minLength.test(password)) return "Password must be at least 8 characters long.";
    if (!uppercase.test(password)) return "Password must include at least one uppercase letter.";
    if (!lowercase.test(password)) return "Password must include at least one lowercase letter.";
    if (!digit.test(password)) return "Password must include at least one digit.";
    if (!specialChar.test(password)) return "Password must include at least one special character.";
    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!phone || !username || !firstName || !lastName || !email || !password) {
      setMessage('Please fill out all fields');
      return;
    }

    const validationMessage = validatePassword(password);
    if (validationMessage) {
      setMessage(validationMessage);
    } else {
      try {
        const response = await axios.post('http://localhost:3001/users', {
          phone,
          username,
          firstName,
          lastName,
          email,
          password
        });
        setMessage('Signed up successfully');
        dispatch(setUser(response.data)); // Dispatch user info to Redux
        loginUser(response.data); // Store user data in context
        navigate('/');
      } catch (error) {
        console.error('Error signing up:', error);
        setMessage('Sign up failed. Please try again.');
      }
    }
  };

  return (
    <div className="signup-container">
      <h1>Create Your Account</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Choose a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Set Password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className='signup-button'>Sign Up</button>
        <p className="success-message">{message}</p>
      </form>
    </div>
  );
}

export default Signup;
