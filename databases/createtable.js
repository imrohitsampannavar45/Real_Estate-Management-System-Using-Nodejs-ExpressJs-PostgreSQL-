const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 4001;

// PostgreSQL database connection configuration
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'data1',
  password: 'rohit',
  port: 5432,
});

// Connect to PostgreSQL
client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(error => console.error('Error connecting to PostgreSQL', error));

// // Create a table named 'buyer_entry_page'
// client.query(`
//   CREATE TABLE IF NOT EXISTS buyer_entry_page (
//     id SERIAL PRIMARY KEY,
//     address VARCHAR(255),
//     phone_number VARCHAR(15),
//     price NUMERIC,
//     road_width NUMERIC,
//     facing VARCHAR(255),
//     property_preference VARCHAR(255),
//     square_feet NUMERIC,
//     corner_plot BOOLEAN,
//     property_id SERIAL
//   );
// `).then(result => console.log('Table created successfully'))
//   .catch(error => console.error('Error creating table', error));

// // Express middleware to parse JSON
// app.use(express.json());

// // Express route to handle POST requests for inserting data into the table
// app.post('/insertData', async (req, res) => {
//   const {
//     address,
//     phone_number,
//     price,
//     road_width,
//     facing,
//     property_preference,
//     square_feet,
//     corner_plot,
//     property_id,
//   } = req.body;

//   try {
//     const result = await client.query(`
//       INSERT INTO buyer_entry_page
//       (address, phone_number, price, road_width, facing, property_preference, square_feet, corner_plot, property_id)
//       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
//       RETURNING *;
//     `, [address, phone_number, price, road_width, facing, property_preference, square_feet, corner_plot, property_id]);

//     res.json({ success: true, data: result.rows[0] });
//   } catch (error) {
//     console.error('Error inserting data', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// client.query(`
//   CREATE TABLE IF NOT EXISTS sales_entry_page (
//     id SERIAL PRIMARY KEY,
//     address VARCHAR(255),
//     phone_number VARCHAR(15),
//     price NUMERIC,
//     property_preference VARCHAR(255),
//     power_of_attorney BOOLEAN,
//     ownership VARCHAR(255),
//     approval_authority VARCHAR(255),
//     corner_plot BOOLEAN,
//     photos_and_videos VARCHAR(255),
//     facing VARCHAR(255),
//     square_feet NUMERIC,
//     road_width NUMERIC
//   );
// `).then(result => console.log('Table created successfully'))
//   .catch(error => console.error('Error creating table', error));

// // Express middleware to parse JSON
// app.use(express.json());

// // Express route to handle POST requests for inserting data into the table
// app.post('/insertSalesData', async (req, res) => {
//   const {
//     address,
//     phone_number,
//     price,
//     property_preference,
//     power_of_attorney,
//     ownership,
//     approval_authority,
//     corner_plot,
//     photos_and_videos,
//     facing,
//     square_feet,
//     road_width,
//   } = req.body;

//   try {
//     const result = await client.query(`
//       INSERT INTO sales_entry_page
//       (address, phone_number, price, property_preference, power_of_attorney, ownership, approval_authority, corner_plot, photos_and_videos, facing, square_feet, road_width)
//       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
//       RETURNING *;
//     `, [address, phone_number, price, property_preference, power_of_attorney, ownership, approval_authority, corner_plot, photos_and_videos, facing, square_feet, road_width]);

//     res.json({ success: true, data: result.rows[0] });
//   } catch (error) {
//     console.error('Error inserting sales data', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


// client.query(`
//   CREATE TABLE IF NOT EXISTS follow_up (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(255),
//     phone VARCHAR(15),
//     meeting VARCHAR(255),
//     time_of_meeting TIMESTAMP,
//     todays_call BOOLEAN,
//     followup_call BOOLEAN,
//     property_id SERIAL
//   );
// `).then(result => console.log('Table created successfully'))
//   .catch(error => console.error('Error creating table', error));

// // Express middleware to parse JSON
// app.use(express.json());

// // Express route to handle POST requests for inserting data into the table
// app.post('/insertFollowUpData', async (req, res) => {
//   const {
//     name,
//     phone,
//     meeting,
//     time_of_meeting,
//     todays_call,
//     followup_call,
//     property_id,
//   } = req.body;

//   try {
//     const result = await client.query(`
//       INSERT INTO follow_up
//       (name, phone, meeting, time_of_meeting, todays_call, followup_call, property_id)
//       VALUES ($1, $2, $3, $4, $5, $6, $7)
//       RETURNING *;
//     `, [name, phone, meeting, time_of_meeting, todays_call, followup_call, property_id]);

//     res.json({ success: true, data: result.rows[0] });
//   } catch (error) {
//     console.error('Error inserting follow-up data', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


// // Create a table named 'records'
// client.query(`
//   CREATE TABLE IF NOT EXISTS records (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(255),
//     phone VARCHAR(15),
//     sales BOOLEAN,
//     buyer BOOLEAN,
//     sales_price NUMERIC,
//     buyer_price NUMERIC,
//     income NUMERIC,
//     address VARCHAR(255)
//   );
// `).then(result => console.log('Table created successfully'))
//   .catch(error => console.error('Error creating table', error));

// // Express middleware to parse JSON
// app.use(express.json());

// // Express route to handle POST requests for inserting data into the table
// app.post('/insertRecord', async (req, res) => {
//   const {
//     name,
//     phone,
//     sales,
//     buyer,
//     sales_price,
//     buyer_price,
//     income,
//     address,
//   } = req.body;

//   try {
//     const result = await client.query(`
//       INSERT INTO records
//       (name, phone, sales, buyer, sales_price, buyer_price, income, address)
//       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
//       RETURNING *;
//     `, [name, phone, sales, buyer, sales_price, buyer_price, income, address]);

//     res.json({ success: true, data: result.rows[0] });
//   } catch (error) {
//     console.error('Error inserting record data', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// // Create a table named 'login'
// client.query(`
//   CREATE TABLE IF NOT EXISTS login (
//     id SERIAL PRIMARY KEY,
//     email VARCHAR(255) UNIQUE,
//     password VARCHAR(255)
//   );
// `).then(result => console.log('Table created successfully'))
//   .catch(error => console.error('Error creating table', error));

// // Express middleware to parse JSON
// app.use(express.json());

// // Express route to handle POST requests for inserting data into the table
// app.post('/insertLoginData', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const result = await client.query(`
//       INSERT INTO login (email, password)
//       VALUES ($1, $2)
//       RETURNING *;
//     `, [email, password]);

//     res.json({ success: true, data: result.rows[0] });
//   } catch (error) {
//     console.error('Error inserting login data', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


// client.query(`
//   CREATE TABLE IF NOT EXISTS logout (
//     id SERIAL PRIMARY KEY,
//     user_id INTEGER,
//     logout_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//   );
// `).then(result => console.log('Table created successfully'))
//   .catch(error => console.error('Error creating table', error));

// // Express middleware to parse JSON
// app.use(express.json());

// // Express route to handle POST requests for logging out
// app.post('/logout', async (req, res) => {
//   const { user_id } = req.body;

//   try {
//     const result = await client.query(`
//       INSERT INTO logout (user_id)
//       VALUES ($1)
//       RETURNING *;
//     `, [user_id]);

//     res.json({ success: true, data: result.rows[0] });
//   } catch (error) {
//     console.error('Error logging out user', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

