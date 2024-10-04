const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3002;

// Use middleware to parse JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Replace these values with your actual PostgreSQL database credentials
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'data1',
//   password: 'sohan@1237',
//   port: 5432,
// });

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
