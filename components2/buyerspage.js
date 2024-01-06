
import React, { useState, useEffect } from 'react';
import '../css/buyerspage.css';
// import { createRoot } from 'react-dom/client';
import Sidebar from '../components2/Siebar';
import { createRoot } from 'react-dom/client';

const BuyersPage = () => {
  const [showAddBuyerModal, setShowAddBuyerModal] = useState(false);
  const [buyerDetails, setBuyerDetails] = useState({
    address: '',
    phoneNumber: '',
    price: '',
    roadWidth: '',
    facing: '',
    propertyPreference: '',
    squareFeet: '',
    cornerPlot: '',
    propertyId: '',
  });
  const [buyersList, setBuyersList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyerDetails({
      ...buyerDetails,
      [name]: value,
    });
  };

  const handleAddBuyerSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3005/addBuyer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(buyerDetails),
      });

      if (response.status === 201) {
        console.log('Buyer added successfully');
        // Refresh the list of buyers after adding a new one
        fetchBuyersList();
      } else {
        console.error('Failed to add buyer');
      }
    } catch (error) {
      console.error('Error adding buyer:', error);
    }

    // Reset the form and close the modal
    setBuyerDetails({
      address: '',
      phoneNumber: '',
      price: '',
      roadWidth: '',
      facing: '',
      propertyPreference: '',
      squareFeet: '',
      cornerPlot: '',
      propertyId: '',
    });
    setShowAddBuyerModal(false);
  };

  const fetchBuyersList = async () => {
    try {
      const response = await fetch('http://localhost:3005/getBuyers');
      if (response.status === 200) {
        const buyers = await response.json();
        setBuyersList(buyers);
      } else {
        console.error('Failed to fetch buyers list');
      }
    } catch (error) {
      console.error('Error fetching buyers list:', error);
    }
  };

  // Fetch the list of buyers when the component mounts
  useEffect(() => {
    fetchBuyersList();
  }, []);

  return (
    <div className="buyers-page">
      <nav>
        <h2>Buyers Page</h2>
      </nav>

      <button onClick={() => setShowAddBuyerModal(true)}>Add Buyer</button>

      {showAddBuyerModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowAddBuyerModal(false)}>
              &times;
            </span>
            <form onSubmit={handleAddBuyerSubmit}>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={buyerDetails.address}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                Phone Number:
                <input
                  type="text"
                  name="phoneNumber"
                  value={buyerDetails.phoneNumber}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                Price:
                <input
                  type="text"
                  name="price"
                  value={buyerDetails.price}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                Road Width:
                <input
                  type="text"
                  name="roadWidth"
                  value={buyerDetails.roadWidth}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                Facing:
                <input
                  type="text"
                  name="facing"
                  value={buyerDetails.facing}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                Property Preference:
                <input
                  type="text"
                  name="propertyPreference"
                  value={buyerDetails.propertyPreference}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                Square Feet:
                <input
                  type="text"
                  name="squareFeet"
                  value={buyerDetails.squareFeet}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                Corner Plot:
                <input
                  type="text"
                  name="cornerPlot"
                  value={buyerDetails.cornerPlot}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                Property ID:
                <input
                  type="text"
                  name="propertyId"
                  value={buyerDetails.propertyId}
                  onChange={handleInputChange}
                />
              </label>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      <div>
        <h3>List of Buyers:</h3>
        {buyersList.length > 0 ? (
          <table className="buyers-table">
            <thead>
              <tr>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Price</th>
                <th>Road Width</th>
                <th>Facing</th>
                <th>Property Preference</th>
                <th>Square Feet</th>
                <th>Corner Plot</th>
                <th>Property ID</th>
              </tr>
            </thead>
            <tbody>
              {buyersList.map((buyer) => (
                <tr key={buyer.id}>
                  <td>{buyer.address}</td>
                  <td>{buyer.phone_number}</td>
                  <td>{buyer.price}</td>
                  <td>{buyer.roadWidth}</td>
                  <td>{buyer.facing}</td>
                  <td>{buyer.property_preference}</td>
                  <td>{buyer.square_feet}</td>
                  <td>{buyer.corner_plot}</td>
                  <td>{buyer.property_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No buyers available.</p>
        )}
      </div>

    </div>
  );
};

export default BuyersPage;
