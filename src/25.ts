// 1
const express = require('express');
const app = express();

// 2
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 3
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
