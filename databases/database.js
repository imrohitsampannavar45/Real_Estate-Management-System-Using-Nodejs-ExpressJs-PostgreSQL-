const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL database connection configuration
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'data1',
  password: 'sohan@1237',
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

// Create a table named 'logout'
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


// // Express middleware to parse JSON
// app.use(express.json());

// // Insert a record
// app.post('/insertBuyerEntry', async (req, res) => {
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

// // Update a record
// app.put('/updateBuyerEntry/:id', async (req, res) => {
//   const id = req.params.id;
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
//       UPDATE buyer_entry_page
//       SET
//         address = $1,
//         phone_number = $2,
//         price = $3,
//         road_width = $4,
//         facing = $5,
//         property_preference = $6,
//         square_feet = $7,
//         corner_plot = $8,
//         property_id = $9
//       WHERE id = $10
//       RETURNING *;
//     `, [address, phone_number, price, road_width, facing, property_preference, square_feet, corner_plot, property_id, id]);

//     if (result.rowCount === 0) {
//       res.status(404).json({ success: false, error: 'Record not found' });
//     } else {
//       res.json({ success: true, data: result.rows[0] });
//     }
//   } catch (error) {
//     console.error('Error updating data', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// });

// // Delete a record
// app.delete('/deleteBuyerEntry/:id', async (req, res) => {
//   const id = req.params.id;

//   try {
//     const result = await client.query(`
//       DELETE FROM buyer_entry_page
//       WHERE id = $1
//       RETURNING *;
//     `, [id]);

//     if (result.rowCount === 0) {
//       res.status(404).json({ success: false, error: 'Record not found' });
//     } else {
//       res.json({ success: true, message: 'Record deleted successfully' });
//     }
//   } catch (error) {
//     console.error('Error deleting data', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


// // Connect to PostgreSQL
// // Insert dummy data for buy
// const dummyData = [
//   {
//     address: '123 Main St',
//     phone_number: '555-1234',
//     price: 100000,
//     road_width: 20,
//     facing: 'North',
//     property_preference: 'Residential',
//     square_feet: 2000,
//     corner_plot: true,
//     property_id: '123',
//   },
//   // Add more dummy data entries as needed
// ];

// insertDummyData(dummyData)
//   .then(() => console.log('Dummy data inserted successfully'))
//   .catch(error => console.error('Error inserting dummy data', error))
//   .finally(() => client.end()); // Close the connection after inserting data

// // Function to insert dummy data into the buyer_entry_page table
// async function insertDummyData(dataArray) {
//   try {
//     for (const data of dataArray) {
//       const result = await client.query(`
//     INSERT INTO buyer_entry_page
//     (address, phone_number, price, road_width, facing, property_preference, square_feet, corner_plot, property_id)
//     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
//     RETURNING *;
//   `, [
//         data.address,
//         data.phone_number,
//         data.price,
//         data.road_width,
//         data.facing,
//         data.property_preference,
//         data.square_feet,
//         data.corner_plot,
//         data.property_id,
//       ]);

//       console.log(`Inserted data with ID: ${result.rows[0].id}`);
//     }
//   } catch (error) {
//     throw error;
//   }
// }
// dummy data for sales 
// const dummyData = [
//   {
//     address: '456 Market St',
//     phone_number: '555-5678',
//     price: 150000,
//     property_preference: 'Commercial',
//     power_of_attorney: true,
//     ownership: 'Private',
//     approval_authority: 'City Planning Department',
//     corner_plot: false,
//     photos_and_videos: 'http://example.com/photos',
//     facing: 'South',
//     square_feet: 3000,
//     road_width: 30,
//   },
//   // Add more dummy data entries as needed
// ];

// insertDummyData(dummyData, 'sales_entry_page')
//   .then(() => console.log('Dummy data inserted successfully'))
//   .catch(error => console.error('Error inserting dummy data', error))
//   .finally(() => client.end()); // Close the connection after inserting data


// // Function to insert dummy data into a specified table
// async function insertDummyData(dataArray, tableName) {
//   try {
//     for (const data of dataArray) {
//       const columns = Object.keys(data);
//       const values = columns.map((col, index) => `$${index + 1}`).join(', ');

//       const result = await client.query(`
//     INSERT INTO ${tableName} (${columns.join(', ')})
//     VALUES (${values})
//     RETURNING *;
//   `, columns.map(col => data[col]));

//       console.log(`Inserted data with ID: ${result.rows[0].id}`);
//     }
//   } catch (error) {
//     throw error;
//   }
// }

// // Insert dummy data follow up
// const dummyData = [
//   {
//     name: 'John Doe',
//     phone: '555-9876',
//     meeting: 'Initial Discussion',
//     time_of_meeting: '2023-12-01T09:00:00', // Use an appropriate date-time format
//     todays_call: true,
//     followup_call: false,
//     property_id: '789',
//   },
//   // Add more dummy data entries as needed
// ];

// insertDummyData(dummyData, 'follow_up')
//   .then(() => console.log('Dummy data inserted successfully'))
//   .catch(error => console.error('Error inserting dummy data', error))
//   .finally(() => client.end()); // Close the connection after inserting data


// // Function to insert dummy data into a specified table
// async function insertDummyData(dataArray, tableName) {
//   try {
//     for (const data of dataArray) {
//       const columns = Object.keys(data);
//       const values = columns.map((col, index) => `$${index + 1}`).join(', ');

//       const result = await client.query(`
//     INSERT INTO ${tableName} (${columns.join(', ')})
//     VALUES (${values})
//     RETURNING *;
//   `, columns.map(col => data[col]));

//       console.log(`Inserted data with ID: ${result.rows[0].id}`);
//     }
//   } catch (error) {
//     throw error;
//   }
// }
//dummy data for records

// const dummyData = [
//   {
//     name: 'Alice Smith',
//     phone: '555-1111',
//     sales: true,
//     buyer: false,
//     sales_price: 120000,
//     buy_price: null, // Assuming buy_price is not applicable for sales
//     income: 50000,
//     address: '789 Park Avenue',
//   },
//   {
//     name: 'Bob Johnson',
//     phone: '555-2222',
//     sales: false,
//     buyer: true,
//     sales_price: null, // Assuming sales_price is not applicable for buyers
//     buy_price: 150000,
//     income: 60000,
//     address: '456 Oak Street',
//   },
//   // Add more dummy data entries as needed
// ];

// insertDummyData(dummyData, 'records')
//   .then(() => console.log('Dummy data inserted successfully'))
//   .catch(error => console.error('Error inserting dummy data', error))
//   .finally(() => client.end()); // Close the connection after inserting data


// // Function to insert dummy data into a specified table
// async function insertDummyData(dataArray, tableName) {
//   try {
//     for (const data of dataArray) {
//       const columns = Object.keys(data);
//       const values = columns.map((col, index) => `$${index + 1}`).join(', ');

//       const result = await client.query(`
//     INSERT INTO ${tableName} (${columns.join(', ')})
//     VALUES (${values})
//     RETURNING *;
//   `, columns.map(col => data[col]));

//       console.log(`Inserted data with ID: ${result.rows[0].id}`);
//     }
//   } catch (error) {
//     throw error;
//   }
// }
// dummy values for the login 
// const dummyData = [
//   {
//     email: 'john@example.com',
//     password: 'password123',
//   },
//   {
//     email: 'alice@example.com',
//     password: 'securePass456',
//   },
//   // Add more dummy data entries as needed
// ];

// insertDummyData(dummyData, 'login')
//   .then(() => console.log('Dummy data inserted successfully'))
//   .catch(error => console.error('Error inserting dummy data', error))
//   .finally(() => client.end()); // Close the connection after inserting data


// // Function to insert dummy data into a specified table
// async function insertDummyData(dataArray, tableName) {
//   try {
//     for (const data of dataArray) {
//       const columns = Object.keys(data);
//       const values = columns.map((col, index) => `$${index + 1}`).join(', ');

//       const result = await client.query(`
//     INSERT INTO ${tableName} (${columns.join(', ')})
//     VALUES (${values})
//     RETURNING *;
//   `, columns.map(col => data[col]));

//       console.log(`Inserted data with ID: ${result.rows[0].id}`);
//     }
//   } catch (error) {
//     throw error;
//   }
// }

// dummy values for the logout 

// const dummyData = [
//   {
//     user_id: 1,
//     logout_time: '2023-12-01T18:30:00', // Use an appropriate date-time format
//   },
//   {
//     user_id: 2,
//     logout_time: '2023-12-02T20:15:00',
//   },
//   // Add more dummy data entries as needed
// ];

// insertDummyData(dummyData, 'logout')
//   .then(() => console.log('Dummy data inserted successfully'))
//   .catch(error => console.error('Error inserting dummy data', error))
//   .finally(() => client.end()); // Close the connection after inserting data

// // Function to insert dummy data into a specified table
// async function insertDummyData(dataArray, tableName) {
//   try {
//     for (const data of dataArray) {
//       const columns = Object.keys(data);
//       const values = columns.map((col, index) => `$${index + 1}`).join(', ');

//       const result = await client.query(`
//     INSERT INTO ${tableName} (${columns.join(', ')})
//     VALUES (${values})
//     RETURNING *;
//   `, columns.map(col => data[col]));

//       console.log(`Inserted data with ID: ${result.rows[0].id}`);
//     }
//   } catch (error) {
//     throw error;
//   }
// }

// // Define the parameters for the update
// const buyerIdToUpdate = 123; // replace with the actual buyer ID
// const updatedValues = {
//   address: 'JP Nagar',
//   phoneNumber: '8431455095',
//   price: 1500000, // replace with the new value
//   roadWidth: 30, // replace with the new value
//   facing: 'west', // replace with the new value
//   propertyPreference: 'Office', // replace with the new value
//   squareFeet: 20000, // replace with the new value
//   cornerPlot: true, // replace with the new value
//   propertyId: '456', // replace with the new value
// };

// // Construct the SQL query for the update
// const updateQuery = `
//   UPDATE buyer_entry_page
//   SET
//     address = $1,
//     phone_number = $2,
//     price = $3,
//     road_width = $4,
//     facing = $5,
//     property_preference = $6,
//     square_feet = $7,
//     corner_plot = $8,
//     property_id = $9
//   WHERE id = $10
// `;

// // Execute the update query
// client.query(updateQuery, [
//   updatedValues.address,
//   updatedValues.phoneNumber,
//   updatedValues.price,
//   updatedValues.roadWidth,
//   updatedValues.facing,
//   updatedValues.propertyPreference,
//   updatedValues.squareFeet,
//   updatedValues.cornerPlot,
//   updatedValues.propertyId,
//   buyerIdToUpdate,
// ])
//   .then((result) => {
//     console.log('Entry updated successfully');
//   })
//   .catch((err) => {
//     console.error('Error updating entry:', err);
//   })
//   .finally(() => {
//     // Close the database connection
//     client.end();
//   });

// Call function to retrieve data



// function deleteData() {
//   const buyerIdToDelete = 123; // replace with the actual buyer ID to delete
//   const query = 'DELETE FROM buyer_entry_page WHERE id = $1';

//   // Execute the query
//   client.query(query, [buyerIdToDelete])
//     .then((result) => {
//       // Check the affected rows to confirm the deletion
//       const affectedRows = result.rowCount;
//       if (affectedRows > 0) {
//         console.log(`Deleted data for buyer with ID ${buyerIdToDelete}`);
//       } else {
//         console.log(`No data found for buyer with ID ${buyerIdToDelete}`);
//       }
//     })
//     .catch((err) => {
//       console.error('Error deleting data:', err);
//     })
//     .finally(() => {
//       // Close the database connection
//       client.end();
//     });
// }

retrieveData();

// Function to retrieve data from the buyer_table
function retrieveData() {
  const query = 'SELECT * FROM buyer_entry_page';

  // Execute the query
  client.query(query)
    .then((result) => {
      // Process the result
      const rows = result.rows;
      console.log('Retrieved data:');
      rows.forEach((row) => {
        console.log(row);
      });
    })
    .catch((err) => {
      console.error('Error retrieving data:', err);
    })
    .finally(() => {
      // Close the database connection
      client.end();
    });
}

// const dummyDataList = [
//   {
//     address: '456 Oak St',
//     phoneNumber: '555-5678',
//     price: 180000,
//     roadWidth: 20,
//     facing: 'West',
//     propertyPreference: 'Residential',
//     squareFeet: 2500,
//     cornerPlot: true,
//     propertyId: 'ABC123',
//   },
//   {
//     address: '789 Pine St',
//     phoneNumber: '555-9876',
//     price: 220000,
//     roadWidth: 30,
//     facing: 'South',
//     propertyPreference: 'Industrial',
//     squareFeet: 3500,
//     cornerPlot: false,
//     propertyId: 'DEF456',
//   },
// ];


// // Function to insert dummy data into the buyer_table
// function insertDummyData(dummyBuyerData) {
//   const insertQuery = `
//     INSERT INTO buyer_entry_table
//       (address, phone_number, price, road_width, facing, property_preference, square_feet, corner_plot, property_id)
//     VALUES
//       ($1, $2, $3, $4, $5, $6, $7, $8, $9)
//   `;

//   // Execute the insert query
//   client.query(insertQuery, [
//     dummyBuyerData.address,
//     dummyBuyerData.phoneNumber,
//     dummyBuyerData.price,
//     dummyBuyerData.roadWidth,
//     dummyBuyerData.facing,
//     dummyBuyerData.propertyPreference,
//     dummyBuyerData.squareFeet,
//     dummyBuyerData.cornerPlot,
//     dummyBuyerData.propertyId,
//   ])
//     .then(() => {
//       console.log('Dummy data inserted successfully');
//     })
//     .catch((err) => {
//       console.error('Error inserting dummy data:', err);
//     });
// }

// // Close the database connection after all data is inserted
// client.end();






// // Insert dummy data for buy
// const dummyData = [
//   {
//     address: 'JP NAGAR',
//     phone_number: '555-125534',
//     price: 10044000,
//     road_width: 20,
//     facing: 'Nortdhh',
//     property_preference: 'Resifdhdential',
//     square_feet: 2000,
//     corner_plot: true,
//     property_id: '124443',
//   },
//   // Add more dummy data entries as needed
// ];

// insertDummyData(dummyData)
//   .then(() => console.log('Dummy data inserted successfully'))
//   .catch(error => console.error('Error inserting dummy data', error))
//   .finally(() => client.end()); // Close the connection after inserting data

// // Function to insert dummy data into the buyer_entry_page table
// async function insertDummyData(dataArray) {
//   try {
//     for (const data of dataArray) {
//       const result = await client.query(`
//     INSERT INTO buyer_entry_page
//     (address, phone_number, price, road_width, facing, property_preference, square_feet, corner_plot, property_id)
//     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
//     RETURNING *;
//   `, [
//         data.address,
//         data.phone_number,
//         data.price,
//         data.road_width,
//         data.facing,
//         data.property_preference,
//         data.square_feet,
//         data.corner_plot,
//         data.property_id,
//       ]);

//       console.log(`Inserted data with ID: ${result.rows[0].id}`);
//     }
//   } catch (error) {
//     throw error;
//   }
// }

// deleteData();

// function deleteData() {
//   const buyerIdToDelete = 1; // replace with the actual buyer ID to delete
//   const deleteQuery = 'DELETE FROM buyer_entry_page WHERE id = $1';

//   // Execute the delete query
//   client.query(deleteQuery, [buyerIdToDelete])
//     .then((result) => {
//       // Check the affected rows to confirm the deletion
//       const affectedRows = result.rowCount;
//       if (affectedRows > 0) {
//         console.log(`Deleted data for buyer with ID ${buyerIdToDelete}`);
//       } else {
//         console.log(`No data found for buyer with ID ${buyerIdToDelete}`);
//       }
//     })
//     .catch((err) => {
//       console.error('Error executing delete query:', err);
//     })
//     .finally(() => {
//       // Close the database connection
//       client.end();
//     });
// }