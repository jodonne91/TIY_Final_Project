
var myApp = (function(){

	var app = {

		cursor_position: 0,

		incrementCursorPosition: function(){
			app.cursor_position++;
			return app.cursor_position;
		},

	//function to pass to Mousetrap.bind; handles the keyup internally
		keyPressEvent: function(key){
			//var key = String.fromCharCode(evt.charCode);  	//can read key straight from event
			var id_selector = '#' + 'key_' + key;
			//console.log(id_selector);
			$(id_selector).css('background-color', 'blue');
			//app.sampleShowInTextSpace(key);  					//append to .text-space
		},

		keyUpEvent: function(key){
			var id_selector = '#' + 'key_' + key;
			//console.log(id_selector);
			$(id_selector).css('background-color', 'white');
		},

	//function to eliminate use of individual Mousetrap.bind calls
		bindMouseTrapEvent: function(key){
			Mousetrap.bind(key, function(){app.keyPressEvent(key)});  //let Mousetrap handle 'keydown' or 'keypress'
			Mousetrap.bind(key, function(){app.keyUpEvent(key)}, 'keyup');  
		},

	//append text to .textspace
		sampleShowInTextSpace: function(key){
			$('.text-space').append(key);
			var length = ($('.text-space').text().length);
			if( length > 10 ){
			}
		},



	}



	return app;

})();