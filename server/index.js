const express = require('express');
require('dotenv').config();
const axios = require('axios');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

const PORT = process.env.PORT || 3000;

app.get('/shops', (req, res) => {
  axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.query.location.lat},${req.query.location.lng}&rankby=distance&keyword=boba&key=${process.env.GOOGLE_API_KEY}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log('Error fetching data from Google Places API: ', error);
    })
});

app.get('/geocode', (req, res) => {
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.query.newLocation}&key=${process.env.GOOGLE_API_KEY}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log('Error fetching data from Google Geocode API: ', error);
    })
});




app.listen(PORT, () => {
  console.log(`Server is LISTENING on PORT ${PORT}`);
});