var express = require('express');
var router = express.Router();
var redis = require('redis');
    client = redis.createClient(); 

// redis 错误监听
client.on("error", function (err) {  
    console.error("数据库Redis-error：" + err);  
});

/* GET landing page. */
router.get('/', function(req, res, next) {
  res.render('landing', { title: '登录' });
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('customer/register', { title: '注册' });
});

/* GET register success page. */
router.get('/reg_success', function(req, res, next) {
  res.render('customer/reg_success', { title: '注册成功' });
});

/* GET first charge page. */
router.get('/first_charge', function(req, res, next) {
  res.render('customer/charge_first', { title: '首次充值' });
});

/* GET charge page. */
router.get('/charge', function(req, res, next) {
  res.render('customer/charge', { title: '充值' });
});
router.get('/charge.do', function(req, res, next) {
  res.render('customer/charge_do', { title: '充值成功' });
});

/* GET change password page. */
router.get('/changePasswd', function(req, res, next) {
  res.render('customer/changePasswd', { title: '修改密码'});
});
router.get('/change_do', function(req, res, next) {
  res.render('customer/change_do', { title: '修改密码成功'});
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
router.get('/appointing_do', function(req, res, next) {
  res.render('customer/appointing_do', { title: '预约成功'});
});

/* GET normal user page. */
router.get('/normal', function(req, res, next) {
  res.render('customer/normal', { title: '普通用户' });
});

/* GET normal user appointing page. */
router.get('/normal_appointing', function(req, res, next) {
  res.render('customer/normal_appoint', { title: '普通用户预约' });
});

/* GET normal user appointing success page. */
router.get('/normal_do', function(req, res, next) {
  res.render('customer/normal_do', { title: '普通用户预约成功' });
});

/* GET vip user page. */
router.get('/vip', function(req, res, next) {
  res.render('customer/vip', { title: 'vip用户' });
});

module.exports = router;