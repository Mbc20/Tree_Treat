
const express = require('express');
const oracledb = require('oracledb');

const app = express();
const PORT = 5000;

app.use(express.json());

async function runQuery() {
  const connection = await oracledb.getConnection({
    user          : 'TTPROJECT',
    password      : 'tt',
    connectString : 'localhost/orclpdb',
  });

  const result = await connection.execute(
    'SELECT DISTRICT FROM "TTPROJECT"."SELLER_LOCATION"'
  );

  await connection.close();

  return result.rows;
}

app.get('/api/seller-locations', async (req, res) => {
  try {
    const rows = await runQuery();
    res.json(rows);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

// Serve the static HTML file
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
