// Logo.js
import React from 'react';
import logoImage from '../utils/logo.png'; // replace with your logo image path
import '../utils/logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Logo" className="logo-image" />
      <h1 className="logo-text">AKRO Real Estate Pvt Ltd.</h1>
    </div>
  );
};

export default Logo;
