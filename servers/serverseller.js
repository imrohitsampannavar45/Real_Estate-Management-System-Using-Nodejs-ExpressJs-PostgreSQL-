// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const path = require('path');

const app = express();
const port = process.env.PORT || 4005;

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'data1',
  password: 'rohit',
  port: 5432,
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

app.post('/api/submit', async (req, res) => {
  const formData = req.body;

  try {
    await client.connect();
    const result = await client.query(
      'INSERT INTO sales_entry_page' +
      '(address, phone_number, price, property_preference, power_of_attorney, ownership, ' +
      'approval_authority, corner_plot, photos_and_videos, facing, square_feet, road_width, ' +
      'first_name, last_name, email) ' +
      'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)',
      [
        formData.address,
        formData.phone_number,
        formData.price,
        formData.property_preference,
        formData.power_of_attorney,
        formData.ownership,
        formData.approval_authority,
        formData.corner_plot,
        formData.photos_and_videos,
        formData.facing,
        formData.square_feet,
        formData.road_width,
        formData.First_Name,
        formData.Last_Name,
        formData.Email,
      ]
    );

    console.log('Data inserted:', result.rows);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    await client.end();
  }
});

// Serve the React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
