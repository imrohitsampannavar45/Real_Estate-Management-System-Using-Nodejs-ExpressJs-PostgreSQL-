import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { PDFDownloadLink } from '@react-pdf-viewer';
import { saveAs } from 'file-saver';
import XLSX from 'xlsx';
import Sidebar from './Siebar';
import '../css/FollowupPage.css';


const FollowupPage = () => {
  const [followupDetails, setFollowupDetails] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    meeting: '',
    time_of_meeting: '',
    todays_call: '',
    followup_call: '',
    property_id: '',
  });

  useEffect(() => {
    fetchFollowupDetails();
  }, []);

  const fetchFollowupDetails = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/followup');
      setFollowupDetails(response.data);
    } catch (error) {
      console.error('Error fetching follow-up details:', error);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/followup', formData);
      fetchFollowupDetails();
      setShowForm(false);
      setFormData({
        name: '',
        phone: '',
        meeting: '',
        time_of_meeting: '',
        todays_call: '',
        followup_call: '',
        property_id: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/followup/${id}`);
      fetchFollowupDetails();
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  const exportToPDF = async () => {
    try {
      await axios.get('http://localhost:5000/api/export/pdf');
      const pdfBlob = await axios.get('http://localhost:5000/followup_details.pdf', { responseType: 'blob' });
      saveAs(pdfBlob.data, 'followup_details.pdf');
    } catch (error) {
      console.error('Error exporting to PDF:', error);
    }
  };

  const exportToExcel = async () => {
    try {
      await axios.get('http://localhost:5000/api/export/excel');
      const excelBlob = await axios.get('http://localhost:5000/followup_details.xlsx', { responseType: 'blob' });
      saveAs(excelBlob.data, 'followup_details.xlsx');
    } catch (error) {
      console.error('Error exporting to Excel:', error);
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row mr-3 mt-2'>
        <div className='col-md-12'>
          <div className='col-md-12 text-center'>
            <h1>Follow-up Details</h1>
            <button onClick={() => setShowForm(true)}>Add</button>
            <button onClick={exportToPDF}>Export to PDF</button>
            <button onClick={exportToExcel}>Export to Excel</button>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Meeting</th>
                  <th>Time of Meeting</th>
                  <th>Today's Call</th>
                  <th>Follow-up Call</th>
                  <th>Property ID</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {followupDetails.map((detail) => (
                  <tr key={detail.id}>
                    <td>{detail.id}</td>
                    <td>{detail.name}</td>
                    <td>{detail.phone}</td>
                    <td>{detail.meeting}</td>
                    <td>{detail.time_of_meeting}</td>
                    <td>{detail.todays_call}</td>
                    <td>{detail.followup_call}</td>
                    <td>{detail.property_id}</td>
                    <td>
                      <button onClick={() => handleDelete(detail.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>


      {/* Form Modal */}
      {showForm && (
        <div className='form-modal'>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />

            <label htmlFor='phone'>Phone:</label>
            <input
              type='text'
              id='phone'
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />

            <label htmlFor='meeting'>Meeting:</label>
            <input
              type='text'
              id='meeting'
              value={formData.meeting}
              onChange={(e) => setFormData({ ...formData, meeting: e.target.value })}
              required
            />

            <label htmlFor='time_of_meeting'>Time of Meeting:</label>
            <input
              type='text'
              id='time_of_meeting'
              value={formData.time_of_meeting}
              onChange={(e) => setFormData({ ...formData, time_of_meeting: e.target.value })}
              required
            />

            <label htmlFor='todays_call'>Today's Call:</label>
            <input
              type='text'
              id='todays_call'
              value={formData.todays_call}
              onChange={(e) => setFormData({ ...formData, todays_call: e.target.value })}
              required
            />

            <label htmlFor='followup_call'>Follow-up Call:</label>
            <input
              type='text'
              id='followup_call'
              value={formData.followup_call}
              onChange={(e) => setFormData({ ...formData, followup_call: e.target.value })}
              required
            />

            <label htmlFor='property_id'>Property ID:</label>
            <input
              type='text'
              id='property_id'
              value={formData.property_id}
              onChange={(e) => setFormData({ ...formData, property_id: e.target.value })}
              required
            />

            <button type='submit'>Submit</button>
          </form>
          <button onClick={() => setShowForm(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default FollowupPage;
