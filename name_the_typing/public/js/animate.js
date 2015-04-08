

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