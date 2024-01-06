const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pgp = require('pg-promise')();

const app = express();
const port = process.env.PORT || 2000;

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
app.post('/addSeller', async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      address,
      property_id,
      price,
      property_preference,
      power_of_attorney,
      ownership,
      approval_authority,
      corner_plot,
      facing,
      square_feet,
      road_width
    } = req.body;

    console.log(req.body)

    await db.query(
      'INSERT INTO sales_entry_page (first_name, last_name, email, phone, address, property_id, price, property_preference, power_of_attorney, ownership, approval_authority, corner_plot, facing, square_feet, road_Width) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)',
      [
        first_name,
        last_name,
        email,
        phone,
        address,
        property_id,
        price,
        property_preference,
        power_of_attorney,
        ownership,
        approval_authority,
        corner_plot,
        facing,
        square_feet,
        road_width
      ]
    );
    res.status(201).json({ message: 'Seller added successfully' });
  } catch (error) {
    console.error('Error adding seller:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to retrieve all buyers (GET request)
app.get('/getSeller', async (req, res) => {
  try {
    const seller = await db.any('SELECT * FROM sales_entry_page');
    res.status(200).json(seller);
  } catch (error) {
    console.error('Error retrieving seller:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 