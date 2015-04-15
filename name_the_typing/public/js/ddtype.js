var ddTypeText = function(){

	var text = "abcdefghi";
	var charArr = text.split('');

	var index = '';
	var ddt_char_arr = [];

	for(var i = 0; i < charArr.length; i++){
		index = i + '';
		ddt_char_arr.push('<span class="ddchar" id="dd_' + index + '">' + charArr[i] + '</span>');
	}
	console.log(ddt_char_arr);

	var index = 0;

	$('.ddkey').text('');
	clearInterval(window.ddtypeInterval);

	window.ddtypeInterval = setInterval(function(){
		$('.ddkey').append(ddt_char_arr[index]);
		var id = '#dd_' + index;
		index++;
		fall(id);
	},100);



};

var fall = function(id){
	
	var top = 0;
	setInterval(function(){
		top += 5;
		$(id).css('top', top);
	}, 100)
}