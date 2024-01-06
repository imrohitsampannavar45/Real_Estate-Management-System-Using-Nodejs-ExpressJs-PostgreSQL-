// routes/buyers.js
const express = require('express');
const router = express.Router();

module.exports = (pool) => {
  // Add a buyer
  router.post('/addBuyer', async (req, res) => {
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
        // Add other fields as needed
      } = req.body;

      const result = await pool.query(
        'INSERT INTO buyers (address, phone_number, price, road_width, facing, property_preference, square_feet, corner_plot, property_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
        [address, phoneNumber, price, roadWidth, facing, propertyPreference, squareFeet, cornerPlot, propertyId]
      );

      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error adding buyer:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Get the list of buyers
  router.get('/getBuyers', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM buyer_entry_page');
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error fetching buyers list:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Delete selected buyers
  router.delete('/deleteBuyers', async (req, res) => {
    const { buyerIds } = req.body;
    try {
      await pool.query('DELETE FROM buyer_entry_page WHERE id = ANY($1::int[])', [buyerIds]);
      res.status(200).json({ message: 'Buyers deleted successfully' });
    } catch (error) {
      console.error('Error deleting selected buyers:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  return router;
};
