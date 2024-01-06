// followupserver.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const XLSX = require('xlsx');
const { saveAs } = require('file-saver');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// PostgreSQL configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'data1',
  password: 'rohit',
  port: 5432,
});

// Fetch follow-up details
app.get('/api/followup', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM follow_up');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching follow-up details:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Add a new follow-up entry
app.post('/api/followup', async (req, res) => {
  const { name, phone, meeting, time_of_meeting, todays_call, followup_call, property_id } = req.body;

  try {
    const { rows } = await pool.query(
      'INSERT INTO follow_up (name, phone, meeting, time_of_meeting, todays_call, followup_call, property_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [name, phone, meeting, time_of_meeting, todays_call, followup_call, property_id]
    );

    res.json(rows[0]);
  } catch (error) {
    console.error('Error adding follow-up entry:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete a follow-up entry
app.delete('/api/followup/:id', async (req, res) => {
  const followupId = req.params.id;

  try {
    await pool.query('DELETE FROM follow_up WHERE id = $1', [followupId]);
    res.json({ success: true, message: 'Follow-up entry deleted successfully' });
  } catch (error) {
    console.error('Error deleting follow-up entry:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Export follow-up details to PDF
app.get('/api/export/pdf', async (req, res) => {
  const follow_up = await follow_up();

  const pdfDoc = new PDFDocument();
  pdfDoc.pipe(fs.createWriteStream('followup_details.pdf'));

  pdfDoc.fontSize(14).text('Follow-up Details', { align: 'center' });
  pdfDoc.moveDown();

  pdfDoc.table({
    headers: ['ID', 'Name', 'Phone', 'Meeting', 'Time of Meeting', "Today's Call", 'Follow-up Call', 'Property ID'],
    rows: follow_up.map((detail) => [
      detail.id,
      detail.name,
      detail.phone,
      detail.meeting,
      detail.time_of_meeting,
      detail.todays_call,
      detail.followup_call,
      detail.property_id,
    ]),
  });

  pdfDoc.end();

  res.json({ success: true, message: 'PDF generated successfully' });
});

// Export follow-up details to Excel
app.get('/api/export/excel', async (req, res) => {
  const follow_up = await fetchFollowupDetails();

  const excelData = follow_up.map((detail) => ({
    ID: detail.id,
    Name: detail.name,
    Phone: detail.phone,
    Meeting: detail.meeting,
    'Time of Meeting': detail.time_of_meeting,
    "Today's Call": detail.todays_call,
    'Follow-up Call': detail.followup_call,
    'Property ID': detail.property_id,
  }));

  const ws = XLSX.utils.json_to_sheet(excelData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'FollowupDetails');
  const excelBlob = XLSX.write(wb, { bookType: 'xlsx', type: 'blob' });

  fs.writeFileSync('followup_details.xlsx', excelBlob);

  res.json({ success: true, message: 'Excel generated successfully' });
});

async function fetchFollowupDetails() {
  try {
    const { rows } = await pool.query('SELECT * FROM follow_up');
    return rows;
  } catch (error) {
    console.error('Error fetching follow-up details:', error);
    throw error;
  }
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
