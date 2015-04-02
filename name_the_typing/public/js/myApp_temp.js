
var text = "Hi boys. I'm Tina. Your body. We can make this work. We can work out a dating wheel, just like a chore wheel. Let's put the try in triangle. Everything I know to be true just went out the window. I'm compiling a list of people I can mate with to repopulate the Earth. Our toaster is also confused. It doesn't know where bagels go. uhhhhhhhhhhhhhhhh I can't tell where your back ends and your butt begins. I'm just not sure if I'll be any good on the grill with one free hand. Dear God, this is Tina from school. Is it possible to be in love with 25 people at once? Give them ridiculous French accents. I need to find a boy with a turtle bite on his finger. A pants-off. For me? It includes material that may not be suitable for all ages."
var sentences = _.shuffle(_.flatten(_.map(text.split('. '), function(str){return str.split('? ')})));
var current_sentence = 0;
var cursor_position = 0;
var text_length;
var logged_time;
var num_char;
var num_words;
var WPM;
var charPM;
var accuracy;
var accuracy_arr = [];

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
	var id_selector;
	if(key === '.'){
		id_selector = '#key_period';
	}
	else if(key === ','){
		id_selector = '#key_comma';
	}
	else if(key === '/'){
		id_selector === '#key_forward-slash';
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
	else if(key === ','){
		id_selector = '#key_comma';
	}
	else if(key === '/'){
		id_selector === '#key_forward-slash';
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




//sample type testing	
var sampleType = function(typeKey, readKey, currentPosition){
	currentPosition = currentPosition || cursor_position
	var id = '#' + currentPosition;
	readKey = readKey || $(id).text()
	incrementCursorPosition();
	var bool = true;
	makeSampleKeyActive(cursor_position);

	if(typeKey === readKey){
		console.log('yes!')
		$('.text-response').text('YES!');
		$(id).css('color', '#A3A5A3');
	}
	else {
		$('.text-response').text('NO!');
		console.log('no..');
		bool = false;
		$(id).css('color',  'red');
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

	var time = Date.now();
	var numWords = text.split(' ').length;
	var numChar = text.split('').length;


	calculateStats(time);

	num_words = numWords;
	num_char = numChar;
	accuracy_arr = [];
	logged_time = time;


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
	$('.char').css('background-color', 'aliceblue');
	$(id).css('background-color', 'yellow');
	//$(id).addClass('current');

	autoScroll();

	var id_highlighted = true;
	clearInterval(window.intervalID);
	window.intervalID = setInterval(function(){
		// console.log(id_highlighted)
		if(id_highlighted){
			//$(id).css('background-color', 'white')
			//$(id).css('text-decor')
			id_highlighted = false
		}
		else{
			//$(id).css('background-color', 'yellow')
			id_highlighted = true;
		}
	},800);

};


var calculateStats = function(time){

	WPM = (num_words/(time - logged_time))*60000;
	charPM = (num_char/(time - logged_time))*60000;
	var true_count = 0;
	for( var i = 0 ; i < accuracy_arr.length ; i++ ){
		if(accuracy_arr[i]){
			true_count += 1;
		}
	}
	accuracy = (true_count/accuracy_arr.length)*100;
	console.log(WPM, charPM, accuracy); 


	if(WPM){
		wpmText = (WPM + '').substring(0, 5);
		cpmText = (charPM + '').substring(0, 5);
		accuracyText = (accuracy + '').substring(0, 5) + '%';
		$('#WPM').text(wpmText);
		$('#CPM').text(cpmText);
		$('#accuracy').text(accuracyText)	
	}
	// WPM = words/minute

	// accuracy = letters_correct / letters_total

};


//attempt at creating autoscrolling -- works based on curser index, not 100% but pretty good;
var autoScroll = function(){

	// var currentOffset = $('.current').offset().left;
	// var containerOffset = $('.text-space').offset().left;
	// var currentPosition = $('.current').position().left;
	// var containerPosition = $('.text-space').position().left;

	//console.log(currentOffset, containerOffset, currentPosition, containerPosition)


	if(cursor_position <= 15){
		$('.text-space').scrollLeft(0)
	}

	if(cursor_position > 15){
		var index = cursor_position - 15;
		$('.text-space').scrollLeft(20 * index);
	}

}

var keyClick = function(){
	$('.key').on('click', function(evt){
		console.log(evt.target.id.substring(4));
		key = evt.target.id.substring(4);
		Mousetrap.trigger(key)
	});
}

var loginListener = function(){

}