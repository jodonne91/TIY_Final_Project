

$(function(){

	//bind all keys
	for(var i = 97 ; i < 123 ; i ++){
		var key = String.fromCharCode(i);
		myApp.bindMouseTrapEvent(key);
	}

	//bind spacebar
	Mousetrap.bind('space', function(){
		$('#space').css('background-color', 'blue');
		myApp.sampleShowInTextSpace(' ');
	});
	Mousetrap.bind('space', function(evt){
		$('#space').css('background-color', 'white');
	}, 'keyup');


})