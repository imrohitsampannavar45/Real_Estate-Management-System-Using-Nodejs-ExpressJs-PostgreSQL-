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
  // Add more dummy data entries as needed
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
// // dummy data for sales 
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
// //dummy data for records

// const dummyData = [
//   {
//     name: 'Alice Smith',
//     phone: '555-1111',
//     sales: true,
//     buyer: false,
//     sales_price: 120000,
//     buyer_price: null, // Assuming buy_price is not applicable for sales
//     income: 50000,
//     address: '789 Park Avenue',
//   },
//   {
//     name: 'Bob Johnson',
//     phone: '555-2222',
//     sales: false,
//     buyer: true,
//     sales_price: null, // Assuming sales_price is not applicable for buyers
//     buyer_price: 150000,
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
// //dummy values for the login 
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

// // //dummy values for the logout 

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

async function insertDummyLogoutData() {
    try {
    
  
      // Insert three dummy records
      const dummyRecords = [
        { user_id: 1, logout_time: new Date('2023-01-01T12:30:00') },
        { user_id: 2, logout_time: new Date('2023-01-02T14:45:00') },
        { user_id: 3, logout_time: new Date('2023-01-03T16:00:00') },
      ];
  
      for (const record of dummyRecords) {
        const { user_id, logout_time } = record;
  
        const query = {
          text: 'INSERT INTO logout (user_id, logout_time) VALUES ($1, $2)',
          values: [user_id, logout_time],
        };
  
        await client.query(query);
        console.log(`Dummy record for user ${user_id} inserted successfully.`);
      }
    } catch (error) {
      console.error('Error inserting dummy data:', error);
    } finally {
      await client.end();
    }
  }
  
  // Call the function to insert dummy data
  insertDummyLogoutData();