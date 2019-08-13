const movieOst = require('../models/movieOST.js');

const addUser = (req,res,callback) => {
  let entry = new movieOst(req.body);

  entry.save((error, response) => {
    if (error) {
      callback(error, null);
    } else {
      console.log('ENTRY HAS BEEN SAVED');
      callback(null, response);
      // res.status(200).end();
    };
  });
};

module.exports = { addUser } ;