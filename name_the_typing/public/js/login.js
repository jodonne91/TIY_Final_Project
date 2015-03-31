
$(function(){

	$('#cancel-button').on('click', function(){
		console.log('#cancel-button')
		$('.login-append').hide();
	});
	
	$('#submit-button').on('click', function(){
		var username = $('#login-input').val();
		var password = $('#password-input').val();
		console.log(username, password);
		$('.login-append').hide();
	})

	

})