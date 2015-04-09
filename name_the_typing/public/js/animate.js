
function keyDisappear(key_id){
	var op = 1.0;
	var height = 1;
	var width = 1;
	clearInterval(window.dissolveInterval, window.scaleInterval);

	function dissolve(){
		op -= 0.05;
		key_id.css('opacity',op);
		console.log(op);
		if(op < 0){
			clearInterval(window.dissolveInterval);
		}
	};

	window.dissolveInterval = setInterval(dissolve, 21);

	function scale(){	
		height += 0.18;
		width -= 0.01;
		key_id.css('transform', 'scale(' + width + ',' + height + ')');
		console.log(height);
		if(height > 5){
			clearInterval(window.scaleInterval);
		}
	};

	window.scaleInterval = setInterval(scale, 14);
}


var enterKeys = function(){
	var $row0 = $('.key_row0')
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

	window.interval = setInterval(animate, 40)
}