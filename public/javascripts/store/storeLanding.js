function landing() {
	var userId = $('.userId').val();
	var passWord = $('.passWord').val();
	var landingInfo = Object();
	landingInfo.userId = userId;
	landingInfo.passWord = passWord;
	console.info(landingInfo);
	$.ajax({
	  type: 'get',
	  url: '/store/appointment',
	  data: landingInfo,
	  success: console.info('post-done')
	});
}