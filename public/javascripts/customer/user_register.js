function register() {
	var userId = $('.userId').val();
	var passWord = $('.passWord').val();
	var birthday = $('.birthday').val();
	var userEmail = $('userEmail').val();
	var phoneNumber = $('.phoneNumber').val();
	var user = Object();
	user.userId = userId;
	user.passWord = passWord;
	user.birthday = birthday;
	user.userEmail = userEmail;
	user.phoneNumber = phoneNumber;
	console.info(user);

	$.ajax({
	  type: 'get',
	  url: '/user',
	  data: user,
	  success: console.info('done')
	});
}