var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/company-news-analysis', function(req, res, next) {
  res.json({test: 'hello test'})
})

module.exports = router;
