
var myApp = (function(){

	var app = {

		//function to pass to Mousetrap.bind, handles the keyup internally, passes event
		keyPressEvent: function(evt){
			var key = String.fromCharCode(evt.charCode);
			var id_selector = '#' + 'key_' + key;
			//console.log(id_selector);
			$(id_selector).css('background-color', 'blue');
			Mousetrap.bind(key, function(evt){
				$(id_selector).css('background-color', 'white');
			}, 'keyup');
			app.sampleShowInTextSpace(key);  //append to .text-space
		},

		//function to eliminate use of individual Mousetrap.bind calls
		bindMouseTrapEvent: function(key){
			Mousetrap.bind(key, app.keyPressEvent)
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