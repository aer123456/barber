var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: '主页' });
});

/* GET hair style page. */
router.get('/hair_style', function(req, res, next) {
  res.render('hairstyle', { title: '最新发型' });
});

/* GET all hair style page. */
router.get('/hair_all', function(req, res, next) {
  res.render('hair_all', { title: '所有发型' });
});

router.get('/error', function(req, res, next) {
  res.render('error', { title: '发生错误了' });
});

module.exports = router;
