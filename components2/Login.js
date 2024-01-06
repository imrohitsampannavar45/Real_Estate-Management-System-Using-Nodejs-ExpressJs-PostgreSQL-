// Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../utils/logo'; // Import the Logo component
import Footer from '../utils/footer'; // Import the Footer component
import '../css/login.css';

// Placeholder authentication function
const authenticateUser = async (email, password) => {
  // Replace this with your actual authentication logic (e.g., API call, Firebase authentication, etc.)
  // For simplicity, let's assume a valid login for any non-empty email and password
  return email.trim() !== '' && password.trim() !== '';
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = async () => {
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
    } else if (!isValidPassword(password)) {
      setError('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.');
    } else {
      setError('');

      try {
        // Authenticate the user
        const isAuthenticated = await authenticateUser(email, password);

        if (isAuthenticated) {
          // Redirect to the dashboard using useNavigate
          navigate('/home');
        } else {
          setError('Invalid email or password.');
        }
      } catch (error) {
        console.error('Error during authentication:', error);
        setError('An error occurred during authentication. Please try again.');
      }
    }
  };

  return (
    <div className="login-container">
      <Logo />
      <h2 className="login-heading">Login</h2>
      <div className={`form-group ${error && 'error'}`}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={`form-group ${error && 'error'}`}>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      <div className="login-links">
        <p>
          Don't have an account? <Link to="/signin">Sign Up</Link>
        </p>
        <p>
          Forgot your password? <Link to="/forgot">Forgot Password</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
