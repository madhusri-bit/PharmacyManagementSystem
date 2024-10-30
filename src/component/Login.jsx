import React, { useState, useContext } from 'react';
import axios from 'axios';
import { FaUserMd } from 'react-icons/fa';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { AuthContext } from '../AuthContext';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/userActions'; // Adjust the import path if necessary

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const dispatch = useDispatch(); // Initialize Redux dispatch
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setMessage('');

    if (!username || !password) {
      setMessage('Please enter both username and password');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3001/users');
      const users = response.data;
      const user = users.find((user) => user.username === username && user.password === password);

      if (user) {
        dispatch(setUser(user)); // Dispatch user info to Redux
        loginUser(user); // Call the loginUser function from the context
        setMessage('Logged in successfully');
        navigate('/'); // Redirect to home on successful login
      } else {
        setMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = () => {
    navigate('/signup'); // Navigate to signup page
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <FaUserMd className="login-icon" />
        <h1>MediTrack</h1>
        <h2>Login</h2>
      </div>
      <form onSubmit={handleLogin}>
        {/* Username Field */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </span>
          </div>
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="form-group forgot-password-group">
          <div className="checkbox-group">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
        </div>

        {/* Submit Button */}
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Logging In...' : 'Login'}
        </button>
        <p className="success-message">{message}</p>
        <p>
          Don't have an account?{' '}
          <span onClick={handleChange} className="signup-link">
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
