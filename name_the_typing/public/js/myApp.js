
// var myApp = (function(){

// 	var app = {

		cursor_position: 0,

		incrementCursorPosition: function(){
			app.cursor_position++;
			return app.cursor_position;
		},

	//functions to pass to Mousetrap.bind; handles the keypress event structure
		keyPressEvent: function(key){
			//var key = String.fromCharCode(evt.charCode);  	//can read key straight from event
			var id_selector = '#' + 'key_' + key;
			//console.log(id_selector);
			$(id_selector).css('background-color', 'blue');
			app.sampleType(key)
		},

	//handles keyup event structure
		keyUpEvent: function(key){
			//var key = String.fromCharCode(evt.charCode);  	//can read key straight from event
			var id_selector = '#' + 'key_' + key;
			//console.log(id_selector);
			$(id_selector).css('background-color', 'white');
		},

	//function to eliminate use of individual Mousetrap.bind calls
		bindMouseTrapEvent: function(key){
			Mousetrap.bind(key, function(){app.keyPressEvent(key)});  //let Mousetrap handle 'keydown' or 'keypress'
			Mousetrap.bind(key, function(){app.keyUpEvent(key)}, 'keyup');  
		},

	//sample type testing	
		sampleType: function(typeKey, readKey, currentPosition){
			currentPosition = currentPosition || app.cursor_position
			var id = '#' + currentPosition;
			readKey = readKey || $(id).text()
			app.incrementCursorPosition();
			app.makeSampleKeyActive(app.cursor_position)
			$('.text-response').text('');
			if(typeKey === readKey){
				console.log('yes!')
				$('.text-response').append('YES!');
				return true;
			}
			$('.text-response').append('NO!');
			console.log('no..');
			return false;
		},

		appendSampleText: function(text){
			$('.text-space').text(text);
		},

		initiateSampleText: function(){

			var text = $('.text-space').text();
			$('.text-space').text('');
			var charArr = text.split('');

			var index = '';
			var appendText = '';

			for(var i = 0; i < charArr.length; i++){
				index = i + '';
				appendText = '<span class="char" id="' + index + '">' + charArr[i] + '</span>'
				$('.text-space').append(appendText);
			}

			app.makeSampleKeyActive(0);

		};

		makeSampleKeyActive: function(currentPosition){

			var id = '#' + currentPosition;
			$('.char').css('background-color', 'white')
			$(id).css('background-color', 'yellow');

		}


// 	}



// 	return app;

// })();