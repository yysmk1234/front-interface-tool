var express = require('express');
var router = express.Router();
var routerDataFromDb = require('../db/router').router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

routerDataFromDb.forEach( item => {
  router.get(item.path, function(req, res, next) {
    res.send(item.data);
  });
})


module.exports = router;
