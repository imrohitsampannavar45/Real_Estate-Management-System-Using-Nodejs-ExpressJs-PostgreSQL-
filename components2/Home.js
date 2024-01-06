// Home.js

import React, { useState } from 'react';
import Sidebar from './Siebar'; // Make sure to use the correct path
import SiteCard from '../components2/sitecard.js';
import '../css/home.css';

const Home = () => {
  const [selectedSite, setSelectedSite] = useState(null);
  const [filterType, setFilterType] = useState('');

  const siteRecords = [
    { id: 1, name: 'Site 1', type: 'Residential', image: 'https://watermark.lovepik.com/photo/20211202/large/lovepik-construction-site-picture_501422338.jpg', description: 'Description 1' },
    { id: 2, name: 'Site 2', type: 'Commercial', image: 'https://www.shutterstock.com/image-photo/alley-office-buildings-modern-budapest-600nw-151122341.jpg', description: 'Description 2' },
    { id: 3, name: 'Site 3', type: 'Residential', image: 'https://www.growempire.com/upload/647/261/thumb_1_15d66b1379802b250b888e51d870c5e3.png', description: 'Description 3' },
    { id: 4, name: 'Site 4', type: 'Residential', image: 'https://leadrat-blob.s3.ap-south-1.amazonaws.com/PropertyGallery/2188280', description: 'Description 4' },
    { id: 6, name: 'Site 6', type: 'Commercial', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tbWVyY2lhbCUyMHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D', description: 'Description 6' },
    { id: 7, name: 'Site 7', type: 'Commercial', image: 'https://images.unsplash.com/photo-1581279813180-4dddc1008167?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbW1lcmNpYWwlMjByZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww', description: 'Description 4' },
    { id: 8, name: 'Site 8', type: 'Residential', image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/XZ/BS/XH/108963886/residential-plots-500x500.webp', description: 'Description 8' },
    { id: 5, name: 'Site 5', type: 'Residential', image: 'https://img.squareyards.com/cdn-cgi/image/width=285,height=165,quality=80,fit=crop,gravity=auto,format=webp/secondaryPortal/638338415903734146-2510230239503950.jpg', description: 'Description 4' },
    { id: 9, name: 'Site 9', type: 'Rental', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvk6yDIIdJDiaWwC2CqIy99q6N5yKZcsWgQw&usqp=CAU', description: 'Description 9' },
    { id: 10, name: 'Site 10', type: 'Residential', image: 'https://5.imimg.com/data5/GLADMIN/VideoImage/2023/7/327096252/KV/SB/LY/9727479/residential-land-plots-500x500.jpg', description: 'Description 4' },
    { id: 11, name: 'Site 11', type: 'Farming', image: 'https://property-panda-images.s3.ap-south-1.amazonaws.com/public/images/blog/123/blog%20image100.jpg', description: 'Description 4' },
    { id: 12, name: 'Site 12', type: 'Residential', image: 'https://www.chennaiproperties.in/property/18128/gallery/1200-Sq-Ft-Residential-Land-in-Sunguvarchatram-18128-1.jpg', description: 'Description 4' },
    { id: 13, name: 'Site 13', type: 'Farming', image: 'https://www.agrifarming.in/wp-content/uploads/2021/12/Agri_Land_India4-1024x683.jpg', description: 'Description 4' },
    { id: 14, name: 'Site 14', type: 'Farming', image: 'https://www.agrifarming.in/wp-content/uploads/2021/11/2-18.jpg', description: 'Description 14' },

    { id: 15, name: 'Site 15', type: 'Farming', image: 'https://images.livemint.com/img/2020/02/16/1600x900/agriland_1581847284971.jpg', description: 'Description 4' },

    { id: 16, name: 'Site 16', type: 'Residential', image: 'https://img.staticmb.com/mbcontent/images/crop/uploads/2023/1/challenges-in-buying-residential-land_0_1200.jpg', description: 'Description 4' },

    { id: 17, name: 'Site 17', type: 'Residential', image: 'https://www.hillsandwills.com/property_images/300_HW_33324_20231103152802.jpg', description: 'Description 4' },
    { id: 18, name: 'Site 18', type: 'Residential', image: 'https://dynamic.realestateindia.com/prop_images/1565465/1184661_1-350x350.jpeg', description: 'Description 4' },
    { id: 19, name: 'Site 19', type: 'Commercial', image: 'https://media.istockphoto.com/id/1333877335/photo/open-plan-industrial-style-office-space.jpg?s=612x612&w=0&k=20&c=U9sNNyTkhZlqr2y8YC5ypfrvtvUurbDZU0UUACvCw4A=', description: 'Description 4' },
    // ... (your existing data)
  ];

  const handleSiteClick = (site) => {
    setSelectedSite(site);
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleFilterClick = () => {
    setSelectedSite(null);
  };

  const filteredSites = filterType
    ? siteRecords.filter((site) => site.type.toLowerCase() === filterType.toLowerCase())
    : siteRecords;

  return (
    <>
      <div className='container-fluid'>
        <div className='row mr-3 mt-2'>
          <div className='col-md-12 text-center'>
            <div className="home-container">
              <div className="main-content">
                <h2>Real Estate Home Page</h2>
                <div className="filter-container">
                  <input
                    type="text"
                    placeholder="Search by Land Type"
                    value={filterType}
                    onChange={handleFilterChange}
                  />
                  <button onClick={handleFilterClick}>Filter</button>
                </div>
                <div className="site-list">
                  {filteredSites.map((site) => (
                    <SiteCard
                      key={site.id}
                      site={site}
                      onClick={() => handleSiteClick(site)}
                      className={selectedSite && selectedSite.id === site.id ? 'selected' : ''}
                    />
                  ))}
                </div>
                {selectedSite && (
                  <div className="site-description">
                    <h3>{selectedSite.name}</h3>
                    <p>{selectedSite.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;