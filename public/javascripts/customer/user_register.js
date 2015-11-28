function register() {
	var userId = $('.userId').val();
	var passWord = $('.passWord').val();
	var birthdayYear = $('.birthday_year').val();
	var birthdayMonth = $('.birthday_month').val();
	var userEmail = $('.userEmail').val();
	var phoneNumber = $('.phoneNumber').val();
	var user = Object();
	user.userId = userId;
	user.passWord = passWord;
	user.year = birthdayYear;
	user.month = birthdayMonth;
	user.userEmail = userEmail;
	user.phoneNumber = phoneNumber;
	user.account = 0;
	console.info(user);

	$.ajax({
	 	type: 'POST',
	  	url: '/user/reg_new',
	  	data: user,
	  	cache: false,
	  	success: function(data){
	  		if(data == 'exist_user'){
	  			alert('该用户名已经存在！请选择其他用户名。');
	  			window.location.reload();
	  		} else if(data == 'newUser'){
	  			alert('new user');
	  			window.location.href = '/user/reg_success';
	  		}
	  	},
	  	error: function(){
	  		alert('数据提交失败，请重试');
	  		window.location.reload();
	  	}
	});
}