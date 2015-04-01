
var text = 'Col. laboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource sucking relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.'
var sentences = text.split('. ');
var current_sentence = 0;
var cursor_position = 0;
var text_length;
var WPM;
var accuracy;

//function to eliminate use of individual Mousetrap.bind calls

var bindMouseTrapEvent = function(key){
	Mousetrap.bind(key, function(){keyPressEvent(key)});  //let Mousetrap handle 'keydown' or 'keypress'
	Mousetrap.bind(key, function(){keyUpEvent(key)}, 'keyup');  
};


var incrementCursorPosition = function(){
	cursor_position++;
	return cursor_position;
};

//functions to pass to Mousetrap.bind; handles the keypress event structure
var keyPressEvent = function(key){
	//var key = String.fromCharCode(evt.charCode);  	//can read key straight from event
	var id_selector = '#' + 'key_' + key.toLowerCase();
	//console.log(id_selector);
	$(id_selector).css('background-color', 'blue');
	window.key_press_timeout = setTimeout(function(){$(id_selector).css('background-color', 'white')}, 750)
	if(key === 'space'){
		sampleType(' ')
	}
	else if(key === 'enter'){
		sampleType('↵')
	}
	else {
		sampleType(key)
	}
};

//handles keyup event structure
var keyUpEvent = function(key){
	//var key = String.fromCharCode(evt.charCode);  	//can read key straight from event
	//console.log(key.toLowerCase())
	var id_selector = '#' + 'key_' + key.toLowerCase();
	console.log(id_selector);
	$(id_selector).css('background-color', 'white');
};




//sample type testing	
var sampleType = function(typeKey, readKey, currentPosition){
	currentPosition = currentPosition || cursor_position
	var id = '#' + currentPosition;
	readKey = readKey || $(id).text()
	incrementCursorPosition();
	var bool = true;
	makeSampleKeyActive(cursor_position)

	if(typeKey === readKey){
		console.log('yes!')
		$('.text-response').text('YES!');
		$(id).css('color', 'green')
	}
	else {
		$('.text-response').text('NO!');
		console.log('no..');
		bool = false;
		$(id).css('color',  'red')
	}

	if(cursor_position === text_length){
		cursor_position = 0;
		appendSampleText(sentences[++current_sentence]);
		initiateSampleText();
	}

	return bool;
};

var appendSampleText = function(text){

	text_length = text.length + 1;
	$('.text-space').text(text);

};

var initiateSampleText = function(){

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

	index = i + '';
	var appendText = '<span class="char" id="' + (index) + '">↵</span>'
	$('.text-space').append(appendText);

	(makeSampleKeyActive(0));

};

var makeSampleKeyActive = function(currentPosition){

	var id = '#' + currentPosition;
	$('.char').css('background-color', 'white');
	$(id).css('background-color', 'yellow');

	var id_highlighted = true;
	clearInterval(window.intervalID);
	window.intervalID = setInterval(function(){
		// console.log(id_highlighted)
		if(id_highlighted){
			//$(id).css('background-color', 'white')
			$(id).css('text-decor')
			id_highlighted = false
		}
		else{
			//$(id).css('background-color', 'yellow')
			id_highlighted = true;
		}
	},800);

};


var calculateStats = function(){

	// WPM = words/minute

	// accuracy = letters_correct / letters_total

}