import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/Sidebar.css';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar-container ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="sidebar">
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <i className={`fas ${isSidebarOpen ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
        </div>
        <Link to="/home">
          <div className="sidebar-item">
            <i className="fas fa-user"></i>
            <span>Home</span>
          </div>
        </Link>
        <Link to="/dashboard">
          <div className="sidebar-item">
            <i className="fas fa-chart-bar"></i>
            <span>Dashboard</span>
          </div>
        </Link>
        <Link to="/followup">
          <div className="sidebar-item">
            <i className="fas fa-clock"></i>
            <span>Follow-up</span>
          </div>
        </Link>
        <Link to="/records">
          <div className="sidebar-item">
            <i className="fas fa-file-alt"></i>
            <span>Records</span>
          </div>
        </Link>
        <Link to="/buyers">
          <div className="sidebar-item">
            <i className="fas fa-user"></i>
            <span>Buyers</span>
          </div>
        </Link>
        <Link to="/sellerPage">
          <div className="sidebar-item">
            <i className="fas fa-users"></i>
            <span>Sellers</span>
          </div>
        </Link>
        <Link to="/logout">
          <div className="sidebar-item">
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
