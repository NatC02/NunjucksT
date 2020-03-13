var express = require('express');
var router = express.Router();

//get / is getting the root directory

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { doglikes: req.query.mycat});
});

//render means to draw the file index to the webpage,
//after this its then getting the style css and other neccessary files

module.exports = router;
