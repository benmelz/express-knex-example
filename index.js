const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile.js');

const port = process.env.PORT || 3000;

const app = express(); // initialize express server
const pool = knex(knexConfig); // initialize database connection

// middleware

app.use(express.json()); // parse query string parameters as JSON (GET/DELETE)
app.use(express.urlencoded({ extended: true })); // parse body parameters as JSON (POST/PUT)

// routes

/** GET /api/managers
 *
 *    Fetches all entries from the managers table and sends it back as JSON.
 *
 */
app.get('/api/managers', (req, res) => {
  pool.select('*').from('managers').then((data) => {
    res.status(200).json(data);
  }).catch((err) => {
    // Send a 500 (internal server error) if something goes wrong (rejected promises are not caught by express).
    res.status(500).end();
  });
});

/** POST /api/managers
 *
 *    Creates a new entry in the managers table with the specified attributes.
 *
 */
app.post('/api/managers', (req, res) => {
  const attributes = req.body;
  pool.insert(attributes).into('managers').then(() => {
    res.status(200).end();
  }).catch((err) => {
    // Send a 500 (internal server error) if something goes wrong (rejected promises are not caught by express).
    res.status(500).end();
  })
});

/** unmatched routes
 *
 *    Catches unmatched routes and responds with a 404 (not found).
 */
app.use((req, res) => {
  res.status(404).end()
});

/** errors
 *
 *    Catches errors, logs them and responds with a 500 (internal server error).
 *
 */
app.use((err, req, res, _) => {
  console.log(err);
  res.status(500).end();
});

// boot the express server
app.listen(port, () => console.log(`Listening on port ${port}`));
