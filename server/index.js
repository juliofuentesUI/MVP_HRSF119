const path = require('path');
const express = require('express');
const app = express();

const DIST_DIR = path.join(__dirname, '../client/dist');
const PORT = 3000;


app.use('/', express.static(DIST_DIR));


app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
})


