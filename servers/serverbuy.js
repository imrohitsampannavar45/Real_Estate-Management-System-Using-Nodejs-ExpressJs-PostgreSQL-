
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pgp = require('pg-promise')();

const app = express();
const port = process.env.PORT || 3005;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database configuration
const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'data1',
  password: 'rohit',
  port: 5432,
};

const db = pgp(dbConfig);

// Route to handle adding a buyer (POST request)
app.post('/addBuyer', async (req, res) => {
  try {
    const {
      address,
      phoneNumber,
      price,
      roadWidth,
      facing,
      propertyPreference,
      squareFeet,
      cornerPlot,
      propertyId,
    } = req.body;

    console.log(req.body)
    // Insert the data into the database
    await db.query(
      'INSERT INTO buyer_entry_page (address, phone_number, price, road_width, facing, property_preference, square_feet, corner_plot, property_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
      [
        address,
        phoneNumber,
        price,
        roadWidth,
        facing,
        propertyPreference,
        squareFeet,
        cornerPlot,
        propertyId,
      ]
    );

    res.status(201).json({ message: 'Buyer added successfully' });
  } catch (error) {
    console.error('Error adding buyer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to retrieve all buyers (GET request)
app.get('/getBuyers', async (req, res) => {
  try {
    const buyers = await db.any('SELECT * FROM buyer_entry_page');
    res.status(200).json(buyers);
  } catch (error) {
    console.error('Error retrieving buyers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});