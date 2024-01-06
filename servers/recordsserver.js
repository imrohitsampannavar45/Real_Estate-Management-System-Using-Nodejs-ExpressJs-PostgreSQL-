const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const cors = require('cors');

const app = express();
const port = 6001;
app.use(cors())

// Replace these configuration values with your PostgreSQL credentials
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'data1',
  password: 'rohit',
  port: 5432,
});

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// Endpoint to get all sales records
app.get('/api/records', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM records');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching sales data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to add a new sales record
app.post('/api/records', async (req, res) => {


  console.log(req.body)
  const {
    id,
    name,
    phone,
    sales,
    buyer,
    sales_price,
    buyer_price,
    income,
    address,
    buy_price,
  } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO records VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
      [id, name, phone, sales, buyer, sales_price, buyer_price, income, address, buy_price]
    );
    res.json({ message: 'Record added successfully' });
  } catch (error) {
    console.error('Error adding record:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});






// Endpoint to delete a sales record by ID
app.delete('/api/records/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const result = await pool.query('DELETE FROM records WHERE id = $1', [id]);
    res.json({ message: 'Record deleted successfully' });
  } catch (error) {
    console.error('Error deleting record:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
