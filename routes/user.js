var express = require('express');
var router = express.Router();

/* GET landing page. */
router.get('/', function(req, res, next) {
  res.render('landing', { title: '登录' });
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('customer/register', { title: '注册' });
});

/* GET change password page. */
router.get('/changePasswd', function(req, res, next) {
  res.render('customer/changePasswd', { title: '修改密码'});
});

/* GET user home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: '消费者主页'});
});

/* GET account info page. */
router.get('/myAccount', function(req, res, next) {
  res.render('customer/myAccount', { title: '我的账户' });
});

/* GET appointing page. */
router.get('/appointing', function(req, res, next) {
  res.render('customer/appointing', { title: '预约'});
});

/* GET normal user page. */
router.get('/normal', function(req, res, next) {
  res.render('customer/normal', { title: '普通用户' });
});

/* GET vip user page. */
router.get('/vip', function(req, res, next) {
  res.render('customer/vip', { title: 'vip用户' });
});

module.exports = router;