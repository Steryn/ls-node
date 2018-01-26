var express = require('express');
var router = express.Router();
var URL = require('url');
// var User = require('user');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* GET getUserInfo listing. */
router.get('/getUserInfo', function (req, res, next) {

  var user = {
    name: '',
    city: '',
    age: '',
  }

  var params = URL.parse(req.url, true).query;

  if (params.id == '1') {
    user.age = "1";
    user.city = "北京市";
    user.name = "ligh";
  } else {
    user.age = "1";
    user.city = "杭州市";
    user.name = "SPTING";
  }

  var response = {
    status: 1,
    data: user
  };
  res.send(JSON.stringify(response));

});

module.exports = router;