// Records.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../components2/Siebar';
import '../css/Records.css';
import axios from 'axios';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { exportToExcel, exportToPDF } from '../utils/utils1';


const Records = () => {
  const [salesData, setSalesData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    phone: '',
    sales: '',
    buyer: '',
    sales_price: '',
    buyer_price: '',
    income: '',
    address: '',
    buy_price: '',
  });

  useEffect(() => {
    fetchSalesData();
  }, []);

  const fetchSalesData = async () => {
    try {
      const response = await fetch('http://localhost:6001/api/records');
      const data = await response.json();
      setSalesData(data);
    } catch (error) {
      console.error('Error fetching sales data:', error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddRecordSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios('http://localhost:6001/api/records', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          id: formData.id,
          name: formData.name,
          phone: formData.phone,
          sales: formData.sales,
          buyer: formData.buyer,
          sales_price: formData.sales_price,
          buyer_price: formData.buyer_price,
          income: formData.income,
          address: formData.address,
          buy_price: formData.buy_price
        }),
      });

      if (response.status === 200) {
        console.log('Record added successfully');
        // Refresh the list of records after adding a new one
        fetchSalesData();
      } else {
        console.error('Failed to add record');
      }
    } catch (error) {
      console.error('Error adding record:', error);
    }
  };

  const handleDeleteRecord = async (id) => {
    console.log(id);
    try {
      await axios(`http://localhost:6001/api/records/${id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        },
        method: 'DELETE',
      });

      fetchSalesData();
    } catch (error) {
      console.error('Error deleting record:', error.message);
    }
  };

  const handleExportExcel = () => {
    exportToExcel(salesData);
  };

  const handleExportPDF = () => {
    exportToPDF(salesData);
  };

  return (
    <>
      <div className='container-fluid'>
        <div className='row mr-3 mt-2'>
          <div className='col-md-12'>
            <div className='col-md-12 text-center'>
              <h2>Real Estate Sales Records</h2>
            </div>
            <div className='col-md-12'>
              <button onClick={() => setShowForm(true)}>Add Record</button>
              <button onClick={handleExportExcel}>Export to Excel</button>
              <button onClick={handleExportPDF}>Export to PDF</button>
              {showForm && (
                <div className='modal'>
                  <div className='modal-content'>
                    <span className='close' onClick={() => setShowForm(false)}>
                      &times;
                    </span>
                    <h2>Add Record</h2>
                    <form>
                      <label>ID:</label>
                      <input
                        type='text'
                        name='id'
                        value={formData.id}
                        onChange={handleInputChange}
                      />

                      <label>Name:</label>
                      <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                      />

                      <label>Phone:</label>
                      <input
                        type='text'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                      />

                      <label>Sales:</label>
                      <input
                        type='text'
                        name='sales'
                        value={formData.sales}
                        onChange={handleInputChange}
                      />

                      <label>Buyer:</label>
                      <input
                        type='text'
                        name='buyer'
                        value={formData.buyer}
                        onChange={handleInputChange}
                      />

                      <label>Sales Price:</label>
                      <input
                        type='text'
                        name='sales_price'
                        value={formData.sales_price}
                        onChange={handleInputChange}
                      />

                      <label>Buyer Price:</label>
                      <input
                        type='text'
                        name='buyer_price'
                        value={formData.buyer_price}
                        onChange={handleInputChange}
                      />

                      <label>Income:</label>
                      <input
                        type='text'
                        name='income'
                        value={formData.income}
                        onChange={handleInputChange}
                      />

                      <label>Address:</label>
                      <input
                        type='text'
                        name='address'
                        value={formData.address}
                        onChange={handleInputChange}
                      />

                      <label>Buy Price:</label>
                      <input
                        type='text'
                        name='buy_price'
                        value={formData.buy_price}
                        onChange={handleInputChange}
                      />

                      <button type='button' onClick={handleAddRecordSubmit}>
                        Add Record
                      </button>
                    </form>
                  </div>
                </div>
              )}
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>phone</th>
                    <th>sales</th>
                    <th>buyer</th>
                    <th>sales_price</th>
                    <th>buyer_price</th>
                    <th>income</th>
                    <th>address</th>
                    <th>buy_price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {salesData.map((sale) => (
                    <tr key={sale.id}>
                      <td>{sale.id}</td>
                      <td>{sale.name}</td>
                      <td>{sale.phone}</td>
                      <td>{sale.sales}</td>
                      <td>{sale.buyer}</td>
                      <td>{sale.sales_price}</td>
                      <td>{sale.buyer_price}</td>
                      <td>{sale.income}</td>
                      <td>{sale.address}</td>
                      <td>{sale.buy_price}</td>
                      <td>
                        <button onClick={() => handleDeleteRecord(sale.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Records;
