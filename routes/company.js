var express = require('express');
var router = express.Router();

/* GET company news and analysis */
router.get('/news-analysis', function(req, res, next) {
  var NEWS_API_KEY = process.env.NEWS_API_KEY
  var BASE_URL = 'http://newsapi.org/v2'
  var NEWS_SEARCH_TYPE = '/everything?'
  var url = BASE_URL + NEWS_SEARCH_TYPE + 
          'q=TSLA&' +  
          'from=2020-04-01&' +
          'sortBy=popularity&' +
          'apiKey=' + 
          NEWS_API_KEY

  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    res.send(data)
  });
});

module.exports = router;
