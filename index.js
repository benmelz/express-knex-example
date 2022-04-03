const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes

app.get('/api/managers', (req, res) => {
  res.status(404).end();  // TODO: Implement
});

app.post('/api/managers', (req, res) => {
  const attributes = req.body;
  console.log(attributes);
  res.status(404).end(); // TODO: Implement
});

// errors

app.use((req, res) => res.status(404).end());
app.use((err, req, res, _) => {
  console.log(err);
  res.status(500).end();
});

// boot

app.listen(port, () => console.log(`Listening on port ${port}`));
