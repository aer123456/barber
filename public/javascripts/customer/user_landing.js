function landing() {
	var userId = $('.userId').val();
	var passWord = $('.passWord').val();
	var landingInfo = Object();
	landingInfo.userId = userId;
	landingInfo.passWord = passWord;
	console.info(landingInfo);
	
	$.ajax({
	  type: 'get',
	  url: '/user/vip',
	  data: landingInfo,
	  success: console.info('done')
	});
}