const express = require('express');
const app = express();
const path = require('path');

// endpoints

// serving frontend
app.use(express.static(path.join(__dirname, '../web', 'build')));
app.use(express.static('public'));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../web', 'build', 'index.html'));
});

// start express server on port 3000
app.listen(3000, () => {
  console.log('server started on port 3000');
});
