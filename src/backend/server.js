const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

app.get('/events', (req, res) => {
  axios.get('https://adonix.hackillinois.org/event/')
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      res.status(500).send("Error fetching the data");
    });
});

app.listen(4000, () => {
  console.log('Proxy server running on port 4000');
});
