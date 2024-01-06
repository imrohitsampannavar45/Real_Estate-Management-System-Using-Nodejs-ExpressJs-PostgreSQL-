
import React, { useState, useEffect } from 'react';
import SellerDetailForm from './SellerDetailForm';
import axios from 'axios';

const SellersPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [sellers, setSellers] = useState([]);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const addSellerToList = async (newSeller) => {
    try {
      // Send the new seller data to the backend for storage
      const response = await axios.post('http://localhost:4000/adddSeller', newSeller);
      console.log(response.data); // Log the response for debugging
      setSellers((prevSellers) => [...prevSellers, response.data]); // Assuming the response contains the added seller data
    } catch (error) {
      console.error('Error adding seller:', error);
    }
  };

  const fetchSellers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/getSeller');
      setSellers(response.data);
    } catch (error) {
      console.error('Error fetching sellers:', error);
    }
  };

  useEffect(() => {
    fetchSellers();
  }, []); // Fetch sellers on component mount

  return (
    <div>
      <h1>Sellers Page</h1>
      <button onClick={handleButtonClick}>
        {showForm ? 'Hide Form' : 'Show Form'}
      </button>

      {showForm && <SellerDetailForm addSellerToList={addSellerToList} />}

      <h2>Seller List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Property ID</th>
            <th>Price</th>
            <th>Property Preference</th>
            <th>Power of Attorney</th>
            <th>Ownership</th>
            <th>Approval Authority</th>
            <th>Corner Plot</th>
            <th>Facing</th>
            <th>Square Feet</th>
            <th>Road Width</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller) => (
            <tr key={seller.id}>
              <td>{`${seller.first_name} ${seller.last_name}`}</td>
              <td>{seller.email}</td>
              <td>{seller.phone}</td>
              <td>{seller.address}</td>
              <td>{seller.property_id}</td>
              <td>{seller.price}</td>
              <td>{seller.property_preference}</td>
              <td>{seller.power_of_attorney}</td>
              <td>{seller.ownership}</td>
              <td>{seller.approval_authority}</td>
              <td>{seller.corner_plot}</td>
              <td>{seller.facing}</td>
              <td>{seller.square_feet}</td>
              <td>{seller.road_width}</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={fetchSellers}>Fetch Sellers</button>
    </div>
  );
};

export default SellersPage;
