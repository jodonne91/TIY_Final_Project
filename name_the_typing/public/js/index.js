
$(function(){


	Mousetrap.bind('backspace', function(e) {
	    cursor_position = cursor_position > 0 ? (cursor_position-1) : cursor_position;
	    makeSampleKeyActive(cursor_position);
	    return false;     //prevent default action of browser back-page
	});

//load partials 
	$('.keyboard').load('partials/keyboard.html', function(){
	//bind all keys (letters/lowercase only)
		for(var i = 97 ; i < 123 ; i ++){
			var key = String.fromCharCode(i);
			bindMouseTrapEvent(key);
			//bindMouseTrapEvent('shift + ' + key)
		}		
	//bind all uppercase letters
		for(var i = 65 ; i < 90 ; i ++){
			var key = String.fromCharCode(i);
			bindMouseTrapEvent(key);
		}
		for(var i = 0 ; i < 10 ; i++){
			var key = i + '';
			bindMouseTrapEvent(key)
		}
	});

	$('.login-append').load('partials/login.html', function(){
	//bind login cancel button	
		$('#cancel-button').on('click', function(){
			console.log('#cancel-button')
			$('.login-append').hide();
		});
	//bind login submit button	
		$('#submit-button').on('click', function(){
			var username = $('#login-input').val();
			var password = $('#password-input').val();
			console.log(username, password);
			$('.login-append').hide();
		})
	});

//bind spacebar
	bindMouseTrapEvent('space');
	bindMouseTrapEvent('-');
	//bindMouseTrapEvent('=');
	bindMouseTrapEvent('enter');
	//bindMouseTrapEvent('shift');
	//myApp.bindMouseTrapEvent('/');  //doesn't work - jQuery error, invalid reference to 'key_/' --- no idea


//early sample
	cursor_position = 0;
	appendSampleText(sentences[0]);
	initiateSampleText();

	


//login
	$('.login-append').hide();

	$('#login-button').on('click', function(){
		$('.login-append').show();
	})


})