import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import '../css/Seller.css';
const SellerDetailForm = ({ addSellerToList }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    property_id: '',
    price: '',
    property_preference: '',
    power_of_attorney: '',
    ownership: '',
    approval_authority: '',
    corner_plot: '',
    facing: '',
    square_feet: '',
    road_width: '',

    // Add more fields as needed
  });

  const onDrop = (acceptedFiles) => {
    // Handle the dropped files
    setFormData((prevData) => ({
      ...prevData,
      photos_and_videos: acceptedFiles,
    }));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*,video/*', // Specify accepted file types
    multiple: true, // Allow multiple files to be dropped
  });

  const handleChange = (e) => {
    // Handle changes for non-file input fields
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the backend for storage
      const response = await axios.post('http://localhost:2000/addSeller', formData);
      console.log(response.data); // Log the response for debugging

      // Assuming the response contains the added seller data
      addSellerToList(response.data);

      // Clear the form after successful submission
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '',
        property_id: '',
        price: '',
        property_preference: '',
        power_of_attorney: '',
        ownership: '',
        approval_authority: '',
        corner_plot: '',
        facing: '',
        square_feet: '',
        road_width: '',


        // Add more fields as needed
      });

    } catch (error) {
      console.error('Error adding seller:', error);
    }
  };


  return (
    <div className="seller-detail-form">
      <h2>Seller Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <label>
          Property ID:
          <input
            type="text"
            name="property_id"
            value={formData.property_id}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Property Preference:
          <input
            type="text"
            name="property_preference"
            value={formData.property_preference}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Power of Attorney:
          <input
            type="text"
            name="power_of_attorney"
            value={formData.power_of_attorney}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Ownership:
          <input
            type="text"
            name="ownership"
            value={formData.ownership}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Approval Authority:
          <input
            type="text"
            name="approval_authority"
            value={formData.approval_authority}
            onChange={handleChange}
            required
          />

        </label>
        <label>
          Corner Plot:
          <input
            type="text"
            name="corner_plot"
            value={formData.corner_plot}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Facing:
          <input
            type="text"
            name="facing"
            value={formData.facing}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Square Feet:
          <input
            type="text"
            name="square_feet"
            value={formData.square_feet}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Road Width:
          <input
            type="text"
            name="road_width"
            value={formData.road_width}
            onChange={handleChange}
            required
          />
        </label>
        {/* <label>
          Photos and Videos:
         <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        </label> */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SellerDetailForm;