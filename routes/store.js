var express = require('express');
var router = express.Router();

/* GET store page. */
router.get('/', function(req, res, next) {
    res.render('store/store', { title: '我是店家' });
});

/* GET appointment list page. */
router.get('/appointment', function(req, res, next) {
  
    res.render('store/appointment', { title: '预约列表', info: info });
});

/* GET appointment list page. */
router.get('/customer_list', function(req, res, next) {
    res.render('store/customer_list', { title: '会员列表' });
});



module.exports = router;
