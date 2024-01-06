// ForgotPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/forgot.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const isValidEmail = (email) => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleResetPassword = () => {
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      // Perform reset password logic here

      // Display success message
      setSuccess(true);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Forgot Password</h2>
      <div className={`form-group ${error && 'error'}`}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      {error && <p style={{ color: '#dc3545', marginBottom: '20px' }}>{error}</p>}
      {success && (
        <p style={{ color: '#28a745', marginBottom: '20px' }}>
          Password reset instructions sent to your email. Please check your inbox.
        </p>
      )}
      <button className="login-button" onClick={handleResetPassword}>
        Reset Password
      </button>
      <p>
        Remember your password? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
