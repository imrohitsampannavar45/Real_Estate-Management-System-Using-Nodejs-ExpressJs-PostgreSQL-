const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;

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


deleteData();

function deleteData() {
  const buyerIdToDelete = 1; // replace with the actual buyer ID to delete
  const deleteQuery = 'DELETE FROM buyer_entry_page WHERE id = $2';

  // Execute the delete query
  client.query(deleteQuery, [buyerIdToDelete])
    .then((result) => {
      // Check the affected rows to confirm the deletion
      const affectedRows = result.rowCount;
      if (affectedRows > 0) {
        console.log(`Deleted data for buyer with ID ${buyerIdToDelete}`);
      } else {
        console.log(`No data found for buyer with ID ${buyerIdToDelete}`);
      }
    })
    .catch((err) => {
      console.error('Error executing delete query:', err);
    })
    .finally(() => {
      // Close the database connection
      client.end();
    });
}


