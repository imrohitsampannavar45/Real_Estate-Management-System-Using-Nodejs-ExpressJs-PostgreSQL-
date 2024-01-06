// SiteDetails.js

import React from 'react';

const SiteDetails = ({ selectedSite }) => {
  if (!selectedSite) {
    return null;
  }

  return (
    <div className="site-details">
      <h3>{selectedSite.name}</h3>
      <p>{selectedSite.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default SiteDetails;
