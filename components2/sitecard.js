// Assuming 'sitecard.js' is in the same directory as 'home'
// If it's in a different directory, adjust the import accordingly
import React from 'react';
// import './sitecard.css'; // Import your site card styles if you have any

const SiteCard = ({ site, onClick, className }) => {
  return (
    <div className={`site-card ${className}`} onClick={onClick}>
      <img src={site.image} alt={site.name} />
      <div>
        <h3>{site.name}</h3>
        <p>{site.type}</p>
      </div>
    </div>
  );
};

export default SiteCard;
