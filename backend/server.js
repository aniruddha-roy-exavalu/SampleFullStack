const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node backend 🚀' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Backend running on port ${port}`);
});
