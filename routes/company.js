var express = require('express');
var router = express.Router();

/* GET company news and analysis */
router.get('/news-analysis', function(req, res, next) {
  res.send('company news and analysis');
});

module.exports = router;
