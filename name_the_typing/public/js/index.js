
$(function(){

//bind all keys
	for(var i = 97 ; i < 123 ; i ++){
		var key = String.fromCharCode(i);
		myApp.bindMouseTrapEvent(key);
	}

//bind spacebar
	myApp.bindMouseTrapEvent('space');


//early sample
	var sample_text = 'aaaa ssss dddd ffff';

	$('.text-space').append(sample_text);
	//console.log($('.text-space').text().length)

	sample_text.length;


//login
	$('.login-append').hide();
	
	$('#login-button').on('click', function(){
		$('.login-append').show();
	})
	
	$('.keyboard').load('partials/keyboard.html');

	$('.login-append').load('partials/login.html');



//WHY DOESNT THIS WORK!!!!

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