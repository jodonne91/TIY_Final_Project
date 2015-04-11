
var running_index = 0;
var dissolve = [];
var scale = [];
var run = [];

function keyDisappear(key_id){
	var op = 1.0;
	var height = 1;
	var width = 1;


	var current_index = running_index;

	clearInterval(window.dissolve[current_index]);
	clearInterval(window.scale[current_index]);


	function dissolve(){
		op -= 0.05;
		key_id.css('opacity',op);
		console.log(op);
		//window.interval[running_index];
		if(op < 0){
			window.clearInterval(window.dissolve[current_index]);
		}
	};

	// window.run[current_index] = setInterval(function(){console.log(current_index)},1000);
	// setTimeout(function(){console.log(current_index);clearInterval(window.run[current_index])},10000);

	window.dissolve[current_index] = setInterval(dissolve, 21);
	setTimeout(function(){clearInterval(window.dissolve[current_index])},1500);

	function scale(){	
		height += 0.18;
		width -= 0.01;
		key_id.css('transform', 'scale(' + width + ',' + height + ')');
		console.log(height);
		window.scale[running_index];
		if(height > 5){
			clearInterval(window.scale[current_index]);
		}
	};

	window.scale[current_index] = setInterval(scale, 14);
	setTimeout(function(){clearInterval(window.scale[current_index])},1500);
	running_index++;
}

//unused -- way to animate entrance of keys
var enterKeys = function(){
	var $row0 = $('.key_row0');
	$row0.css('opacity', 0);
	var opacity = 0.0;

	function animate(){
		opacity += 0.1;
		$row0.css('opacity', opacity);

		if (opacity > 1){
			//console.log('threshold reached');
			clearInterval(window.interval);
		}
	}

	window.interval = setInterval(animate, 40);
}