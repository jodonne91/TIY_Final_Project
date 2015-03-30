
var App = (function(){
	var app = {
		myFun: function(){
			console.log('from inside my function call');
		},
	}
	console.log('from inside initial function call');
	return app;
})();



$(function(){

	var sprite_left = 100;
	var sprite_top = 100;

	Mousetrap.bind('b', function(){console.log('b')});
	Mousetrap.bind('%', function(){console.log('5')});
	Mousetrap.bind('left', function(){
		console.log('you went left')
		sprite_left -= 20;
		$('.sprite').css('left', sprite_left + 'px');
	});
	Mousetrap.bind('right', function(){
		console.log('you went right')
		sprite_left += 20;
		$('.sprite').css('left', sprite_left + 'px');
	});
	Mousetrap.bind('up', function(){
		console.log('you went upward');
		sprite_top -= 20;
		$('.sprite').css('top', sprite_top + 'px');
	});
	Mousetrap.bind('down', function(){
		console.log('you went downward');
		sprite_top += 20;
		$('.sprite').css('top', sprite_top + 'px');
	});



	var text = 'asdf;lkj';

	$('.workspace').append(text);

	//console.log(text);

	App.myFun();

})