
$(function(){

	$('.load-keyboard').on('click', function(){
		enterKeys();
	})




	Mousetrap.bind('backspace', function(e) {
	    cursor_position = cursor_position > 0 ? (cursor_position-1) : cursor_position;
	    makeSampleKeyActive(cursor_position);
	    return false;     //prevent default action of browser back-page
	});

//load partials 

	loadSidebar();
	loadKeyboard();


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
	$('.start').on('click', function(){
		cursor_position = 0;
		appendSampleText(sentences[0]);
		initiateSampleText();
	})


})