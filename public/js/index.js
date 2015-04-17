
$(function(){

	$(".restart-button").hide();

	Mousetrap.bind('backspace', function(e) {
	    cursor_position = cursor_position > lower_limit ? (cursor_position-1) : cursor_position;
	    makeSampleKeyActive(cursor_position);
	    return false;     //prevent default action of browser back-page
	});

//load partials 

	loadSidebar();
	loadKeyboard();
	loadLeaderboard();


//bind spacebar
	bindMouseTrapEvent('space');
	bindMouseTrapEvent('-');
	bindMouseTrapEvent('.');
	bindMouseTrapEvent(',');
	bindMouseTrapEvent("'");
	bindMouseTrapEvent(';');
	bindMouseTrapEvent('enter');
	bindMouseTrapEvent('/');


//early sample
	$('.start-button').on('click', function(){
		cursor_position = 0;
		appendSampleText(sentences[0]);
		initiateSampleText();
		$('.restart-button').show();
	});

	$('.restart-button').on('click', function(){
		cursor_position = 0;
		clock.reset();
		appendSampleText(sentences[Math.floor(Math.random()*sentences.length)]);
		initiateSampleText();
	});


	$('.select-qwerty').on('click', function(){
		//setKeyBoard(qwerty);
	});
	$('.select-dvorak').on('click', function(){
		//setKeyBoard(dvorak);
	});

	function chooseKeyboard(keyboard){
		if(keyboard === 'dvorak'){
			//convertDvorak(key);
		}
		if(keyboard === 'qwerty'){

		}
	}



})