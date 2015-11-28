var express = require('express');
var router = express.Router();
var redis = require('redis');
    client = redis.createClient(); 
var session = require('express-session');

// redis 错误监听
client.on("error", function (err) {  
    console.error("数据库Redis-error：" + err);  
});

/* GET landing page. */
router.get('/', function(req, res, next) {

    res.render('landing', { title: '登录' });
});

/* record landing info. */
router.post('/landing', function(req, res, next) {
    //传入用户ID和密码，查找数据库全部符合之后，返回success状态，否则返回fail
    console.info(req.body);
    var user = req.body.userId;
    var passWord =req.body.passWord;
    USERID = user;
    console.info(user);
    client.hget(user, 'userId', function(err, result){
        if(result){
            client.hget(user, 'passWord', function(err, msg){
                if(passWord = msg) {
                    console.info('landing路由查找成功');
                    res.status(200).send('success');
                } else {
                    console.info('landing路由查找失败');
                    res.status(200).send('fail');
                }
            });
        } else {
            console.info('landing路由查找失败');
            res.status(200).send('fail');
        }
    });

});

/* GET register page. */
router.get('/register', function(req, res, next) {
    res.render('customer/register', { title: '注册' });    
});

/* A new user register router. */
router.post('/reg_new', function(req, res, next) {
    //前端传入一个新注册用户的ID和相关信息，。
    //在数据库中查找，若是新用户则存进数据库。并将用户id作为唯一索引存入用户list方便之后查找。
    //如果ID已经存在，就返回用户已经存在。
    var user_info = req.body;
    var newUser = req.body.userId;
    console.info(newUser);
    client.hget(newUser, 'userId', function(err, data){
        if(data){
            res.status(200).send('exist_user');
        } else {
            //建立一张新的队列来存储用户名列表，从而以此为之后的唯一索引
            client.lpush('customer_list', newUser);
            //以用户名为索引建立用户信息队列
            client.hmset([
                user_info.userId,
                'userId', user_info.userId,
                'passWord', user_info.passWord,
                'birthdayYear', user_info.year,
                'birthdayMonth', user_info.month,
                'email', user_info.userEmail,
                'phone', user_info.phoneNumber,
                'account', user_info.account], 
                redis.print);
            res.status(200).send('newUser');
        }
    });
});

/* GET register success page. */
router.get('/reg_success', function(req, res, next){
    res.render('customer/reg_success', { title: '注册成功'});
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
    var userId = USERID;
    client.hgetall(userId, function(err, data){
        if(data){
            console.info('myAccount');
            console.info(data.userId);
            res.render('customer/myAccount', { title: '我的账户' , message: data});
        } else {
            res.status(500).send('server error');
        }
    });
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