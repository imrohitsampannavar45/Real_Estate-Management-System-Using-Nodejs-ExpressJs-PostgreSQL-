// Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/logout.css';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions here (e.g., clearing authentication tokens)
    // ...

    // Redirect to the login page or another relevant location
    navigate("/login");
  };

  return (
    <div className="logout-container">
      <h2 className="logout-heading">See You Again!</h2>
      <p className="logout-message">You have been successfully logged out.</p>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
