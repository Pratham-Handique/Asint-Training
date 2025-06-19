const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Allow requests from different origins
app.use(express.json()); // Parse JSON request bodies

app.post('/submit', (req, res) => {
  console.log("Received data:", req.body);
  res.json({ message: 'Form submitted successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
