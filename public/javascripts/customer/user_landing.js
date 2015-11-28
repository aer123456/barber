function landing() {
	var userId = $('.userId').val();
	var passWord = $('.passWord').val();
	var params="userId="+userId+"&passWord="+passWord;
	$.ajax({
	  	type: 'POST',
	  	url: '/user/landing',
	  	data: params,
	  	cache: false,
	  	success: function(data){
	  		alert('ajax');
	  		if(data == 'success') {
	  			alert('success');
		  		window.location.href = '/user/myAccount';
	  		} else {
	  			alert('用户名或密码不正确！');
	  			window.location.reload();
	  		}
	  	},
	  	error: function(){
	  		// window.location.href = '/';
	  	}
	});
}