const path = require('path');
const express = require('express');
const database = require('./../database/index.js');
const app = express();
const db = require('./../database/controllers/movie_controller.js');
const bodyParser = require('body-parser');

const DIST_DIR = path.join(__dirname, '../client/dist');
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', express.static(DIST_DIR));

app.get('/login/:username/:password', (req, res) => {
//GET DATA FROM DATABASE HERE
  console.log('LOGIN ATTEMPTED');
  console.log(req.params);
  const {username, password} = req.params; 
  if (username === 'julio' && password === 'julio') {
    res.status(200).send('authenticated');
  } else {
    res.status(404).send('sorry');
  }
});

app.post('/signup', (req,res) => {
  console.log('SIGNUP ROUTE RECEIVED');
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});


