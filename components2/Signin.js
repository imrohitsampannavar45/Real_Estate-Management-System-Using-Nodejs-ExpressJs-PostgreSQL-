// SignUp.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/signin.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    // Password validation regex (minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSignUp = () => {
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
    } else if (!isValidPassword(password)) {
      setError('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      setError('');
      // Perform sign-up logic (registration) here

      // Redirect to the dashboard using useNavigate
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Sign Up</h2>
      <div className={`form-group ${error && 'error'}`}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={`form-group ${error && 'error'}`}>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className={`form-group ${error && 'error'}`}>
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      {error && <p style={{ color: '#dc3545', marginBottom: '20px' }}>{error}</p>}
      <button className="login-button" onClick={handleSignUp}>
        Sign Up
      </button>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};

export default SignUp;
