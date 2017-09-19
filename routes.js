const express = require('express');
const router = express.Router();
const City = require('./db/citySchema');
const User = require('./db/userSchema');



// router.get('/', function(req, res) {
//   // initial get to landing page
// });

router.get('/savedTrip', function(req, res) {
  // res.send all the saved trips from db
});


router.post('/saveNewTrip', function(req, res) {
  

  // City.create({

  // })

  // User.create({

  // })

});



module.exports = router;