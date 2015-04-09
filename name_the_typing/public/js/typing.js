


//function to eliminate use of individual Mousetrap.bind calls

var bindMouseTrapEvent = function(key){
	Mousetrap.bind(key, function(){keyPressEvent(key); return false});  //let Mousetrap handle 'keydown' or 'keypress'
	Mousetrap.bind(key, function(){keyUpEvent(key)}, 'keyup');  
};


var incrementCursorPosition = function(){
	cursor_position++;
	return cursor_position;
};

//functions to pass to Mousetrap.bind; handles the keypress event structure
var keyPressEvent = function(key){
	//var key = String.fromCharCode(evt.charCode);  	//can read key straight from event
	//console.log(key);
	var id_selector;
	if(key === '.'){
		id_selector = '#key_period';
	}
	else if(key === '-'){
		id_selector = '#key_dash'
	}
	else if (key ===';'){
		id_selector = '#key_semi';
	}
	else if(key === ','){
		id_selector = '#key_comma';
	}
	else if(key === '/'){
		id_selector = '#key_forward-slash';
	}
	else if(key ==="'"){
		id_selector = '#key_quote'
	}
	else{
		id_selector = '#' + 'key_' + key.toLowerCase();
	}
	//console.log(id_selector);
	$(id_selector).css('background-color', 'blue');
	window.key_press_timeout = setTimeout(function(){$(id_selector).css('background-color', 'white')}, 750)
	if(key === 'space'){
		console.log(cursor_position);
		accuracy_arr[cursor_position] = sampleType(' ');
	}
	else if(key === 'enter'){
		sampleType('↵');
	}
	else {
		console.log(cursor_position)
		accuracy_arr[cursor_position] = sampleType(key);
	}
};

//handles keyup event structure
var keyUpEvent = function(key){
	//var key = String.fromCharCode(evt.charCode);  	//can read key straight from event
	//console.log(key.toLowerCase())
	var id_selector;
	if(key === '.'){
		id_selector = '#key_period';
	}
	else if(key === '-'){
		id_selector = '#key_dash';
	}
	else if (key ===';'){
		id_selector = '#key_semi';
	}
	else if(key === ','){
		id_selector = '#key_comma';
	}
	else if(key === '/'){
		id_selector = '#key_forward-slash';
	}
	else if(key ==="'"){
		id_selector = '#key_quote'
	}
	else{
		id_selector = '#' + 'key_' + key.toLowerCase();
	}
	console.log(id_selector);
	$(id_selector).css('background-color', 'white');
};

var sampleType = function(typeKey, readKey, currentPosition){
	var hit = true;
	var currentPosition = currentPosition || cursor_position
	var id = '#' + currentPosition;
	var $id = $(id);
	var readKey = readKey || $id.text()

	if (cursor_position === 0){
		clock.start();
	}

	incrementCursorPosition();
	makeSampleKeyActive(cursor_position);

	if(typeKey === readKey){
		console.log('yes!')
		console.log(id);
		//keyDisappear($id);
		$('.text-response').text(calculateAccuracy());
		$id.css('color', '#A3A5A3');
	}
	else {
		$('.text-response').text(calculateAccuracy());
		console.log('no..');
		hit = false;
		$id.css('color',  'red');
	}

	if(cursor_position === text_length){
		cursor_position = 0;
		calculateStats();
		appendStats();
		appendSampleText(sentences[Math.floor(Math.random()*sentences.length)]);
		initiateSampleText();
	}

	return hit;
};