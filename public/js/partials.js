
var loadKeyboard = function(){
		$('.keyboard-qwerty').load('partials/keyboard.html', function(){
	//bind all keys (letters/lowercase only)
		
		keyClick();

		for(var i = 97 ; i < 123 ; i ++){
			var key = String.fromCharCode(i);
			bindMouseTrapEvent(key);
			//bindMouseTrapEvent('shift + ' + key)
		}		
	//bind all uppercase letters
		for(var i = 65 ; i < 91 ; i ++){
			var key = String.fromCharCode(i);
			bindMouseTrapEvent(key);
		}
		for(var i = 0 ; i < 10 ; i++){
			var key = i + '';
			bindMouseTrapEvent(key)
		}
	});



	$('.keyboard-dvorak').load('partials/dvorak.html', function(){

		keyClick();


		for(var i = 97 ; i < 123 ; i ++){
			var key = String.fromCharCode(i);
			bindMouseTrapEvent(key);
			//bindMouseTrapEvent('shift + ' + key)
		}		
	//bind all uppercase letters
		for(var i = 65 ; i < 91 ; i ++){
			var key = String.fromCharCode(i);
			bindMouseTrapEvent(key);
		}
		for(var i = 0 ; i < 10 ; i++){
			var key = i + '';
			bindMouseTrapEvent(key)
		}

		$('.keyboard-dvorak').hide();

	});


	$('.select-qwerty').on('click', function(){
		$('.keyboard-dvorak').hide();
		$('.keyboard-qwerty').show();
	});

	$('.select-dvorak').on('click', function(){
		$('.keyboard-qwerty').hide();
		$('.keyboard-dvorak').show();
	});


	// for(var i = 0 ; i < arguments.length ; i++){
	// 	arguments[i].call();
	// }
}

var loadLogin = function(){
	$('.login-append').load('partials/login.html', function(){
	//bind login cancel button	
		$('.cancel-button').on('click', function(){
			console.log('#cancel-button')
			$('.login-input').val('');
			$('.signup-input').val('');
			$('.login-append').hide();
		});
	//bind login submit button	
		$('.submit-button').on('click', function(){
			var username = $('#login-username-input').val();
			var password = $('#login-password-input').val();
			$('.login-input').val('');
			$('.signup-input').val('');

			login(username, password);

			console.log(username, password);
			$('.login-append').hide();
		})
		$('.signup-submit-button').on('click', function(){
			var username = $('#signup-username-input').val();
			var password = $('#signup-password-input').val();
			var confirmPassword = $('#signup-confirm-password-input').val();
			$('#signup-username-input').val('');
			$('#signup-password-input').val('');
			$('#signup-confirm-password-input').val('');

			signup(username, password, confirmPassword);

			console.log(username, password);
			$('.login-append').hide();
		})
	});

}

var loadSidebar = function(){

	$('.side-bar').load('partials/sidebar.html', function(){
	//login
		$('.login-append').hide();
		$('.user-info').hide();

		$('#login-button').on('click', function(){
			$('.login-append').show();
			$('#login').show();
			$('#sign-up').hide();
		});
		$('#signup-button').on('click', function(){
			$('.login-append').show();
			$('#sign-up').show();
			$('#login').hide();
		});
		$('.logout').on('click', function(){
			logout();
		});
		loadLogin();  //must be called from within here or will try to bind before elements are available
	});

}