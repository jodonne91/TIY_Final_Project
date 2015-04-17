

var text = "Hi boys. I'm Tina. Ok then, see you on our date! Put it on a t-shirt, Jimmy Jr, I don't want to hear it. I texted back a smiley face. She texted back some letters I don't understand. We can make this work. We can work out a dating wheel, just like a chore wheel. Let's put the try in triangle. Chad the Zombie touched the butt of that girl with the frosted hair from my art class. I think her name is Kristi. I'm torn. Dad raised me, but the shark gets me. Just when I think I'm out, those cheeks pull me right back in. There's a lot of carrots in that stew. I texted back a smiley face. She texted back some letters I don't understand. Yeah it's an acquired taste. That I just acquired. This is such a snore-gasm. Argh! Wait, I like the library. Sausage leather belts. If I drunk text you and you're asleep, don't text me in the morning, that ship has sailed. I need both ears to hold up my glasses. There is one place I like to go. The boys' locker room. You can only see up to their ankles. How do you know a python ate it? Did it leave a note? You had me at horses, but then you lost me at corpses. Give them ridiculous French accents. Thank you zombie boyfriends. YOU GORGEOUS IDIOT! I'll wave at you every day. I'm torn. Dad raised me, but the shark gets me. He did? That's the sleaziest, sneakiest, most romantic thing anyone's ever done to me. Chad the Zombie touched the butt of that girl with the frosted hair from my art class. I think her name is Kristi. Dear God, this is Tina from school. It's an erotic friend fiction story that I just wrote. I hope you like it, because you're all in it. Your body. I'm torn. Dad raised me, but the shark gets me. I'm compiling a list of people I can mate with to repopulate the Earth. My bra's chafing me. It's a mating list for when the world ends. Can I get your email? Not if you're a fish. Suddenly, Tina Belcher appeared in the doorway. She knew what she had to do. The second time hurt the most. I'm torn. Dad raised me, but the shark gets me. Detention is no big deal. Don't have a crap attack. I'm not spooked. What's the next thing after spooked? I'm that. Everyone began to touch each other's butts. Everyone began to touch each other's butts. Crap attack? Don't have one? This is where I thrash. I guess she doesn't like wearing clothes. I'm out of control. Ok then, see you on our date! I'm compiling a list of people I can mate with to repopulate the Earth. Our toaster is also confused. It doesn't know where bagels go. Please don't tell Mom and Dad. I'm gonna write the most erotic, graphic, freakiest friend fiction ever. I'm compiling a list of people I can mate with to repopulate the Earth. This is where I thrash. Jimmy Jr. had a chance to ride the Tina truck, but now it's headed straight for Joshville. Toot-toot. It's a mating list for when the world ends. Can I get your email? It's a mating list for when the world ends. Can I get your email? This is like watching two monkeys at the puberty zoo. Brr, it sure is cold in here. I wish some strong, chivalrous man would lend me his jacket, or his pants. He did? That's the sleaziest, sneakiest, most romantic thing anyone's ever done to me. My hearttttttttt. My hearttttttttt. He did? That's the sleaziest, sneakiest, most romantic thing anyone's ever done to me. Jimmy Jr. had a chance to ride the Tina truck, but now it's headed straight for Joshville. Toot-toot. Dad, you're the best pimp a girl could ever have. If I were a hamburger you'd come and watch! C'mon Dad, just let me bite down on the bean. She grabbed Jimmy Jr's butt and changed the world. Gene, you saved us. I owe you my life. I had no idea there was so much butt touching in baseball. Your body. Explore the morgue? Chad the Zombie touched the butt of that girl with the frosted hair from my art class. I think her name is Kristi. If you need me, I'll be down here on the floor. Dying. Is it possible to be in love with 25 people at once? There is one place I like to go. The boys' locker room. You can only see up to their ankles. Dr. Yap, once I was into you, but after seeing you torture my father, I think we should just be friends with dental benefits. Hey Jimmy Jr. Did you see those two squirrels fighting in the courtyard? Is it possible to be in love with 25 people at once? If we see any mermaids, I'm gonna ask them where their merginas are. We can make this work. We can work out a dating wheel, just like a chore wheel. Let's put the try in triangle. I can't tell where your back ends and your butt begins. Detention is no big deal. Don't have a crap attack. If I were a hamburger you'd come and watch! Sausage leather belts. This is like watching two monkeys at the puberty zoo. Dad, you're the best pimp a girl could ever have. I need to find a boy with a turtle bite on his finger. Dear Diary: Tonight I'm sneaking off to the abandoned taffy factory to look for treasure. Also, if boys had uteruses, they'd be called duderuses. uhhhhhhh Drop the towel. This is such a snore-gasm. This is such a snore-gasm. There is one place I like to go. The boys' locker room. You can only see up to their ankles. And I'm gonna read it to the whole school myself. I didn't know our county was bi. Good for us. It's an erotic friend fiction story that I just wrote. I hope you like it, because you're all in it. It's called 'Buttloose.' You're right. I'm a firestarter and a jinx. I'm going to destroy this whole family. I could go to jail, or hell, or jail-hell."

var sentences = _.shuffle(_.flatten(_.map(text.split('. '), function(str){return str.split('! ')})));
var sentences = _.flatten(_.map(sentences, function(str){return str.split('? ')}));

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


//sample user stats:
var total_words = 0;
var total_characters = 0;
var total_time = 0;
var total_correct = 0;
var total_sentences = 0;
//limit ten sentences -- maybe


function Timer(){
	this.time = 0;
	var that = this;
	this.timer = function(){
		var seconds = that.time/1000
		$('.clock').text(seconds);
		that.time += 10;
	};

	this.start = function(){
		clearInterval(window.timer)
		window.timer = setInterval(that.timer, 10);
	}

	this.reset = function(){
		clearInterval(window.timer);
		this.time = 0;
		$('.clock').text(0);
	}

	this.report = function(){
		clearInterval(window.timer);
		var temp = this.time;
		this.time = 0;
		this.timer();
		return temp;
	}

}

var clock = new Timer;


var appendSampleText = function(text){

	text_length = text.length + 1;
	$('.text-space').text(text);

};

var initiateSampleText = function(){
	text_active = true;
	var text = $('.text-space').text();
	$('.text-space').text('');
	var charArr = text.split('');

	lower_limit = 0;
	var numWords = text.split(' ').length;
	var numChar = text.split('').length;


	num_words = numWords;
	num_char = numChar;
	accuracy_arr = [];


	var index = '';
	var appendText = '';

	for(var i = 0; i < charArr.length; i++){
		index = i + '';
		if(charArr[i] === ' '){
			charArr[i] = '_';
		}
		appendText = '<p class="char" id="' + index + '">' + charArr[i] + '</p>'
		$('.text-space').append(appendText);
	}

	index = i + '';
	var appendText = '<p class="char" id="' + (index) + '">↵</p>'
	$('.text-space').append(appendText);

	(makeSampleKeyActive(0));

};

var makeSampleKeyActive = function(currentPosition){

	var id = '#' + currentPosition;
	$('.char').css('background-color', '#A420FF');
	$(id).css('background-color', '#F9DF28');
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


//attempt at creating autoscrolling -- works based on curser index, not 100% but pretty good;
var autoScroll = function(){

	// var currentOffset = $('.current').offset().left;
	// var containerOffset = $('.text-space').offset().left;
	// var currentPosition = $('.current').position().left;
	// var containerPosition = $('.text-space').position().left;

	//console.log(currentOffset, containerOffset, currentPosition, containerPosition)

	if(cursor_position <= 14){
		$('.text-space').scrollLeft(0)
	}

	if(cursor_position > 14){
		var index = cursor_position - 14;
		$('.text-space').scrollLeft(23 * index);
	}

}

var keyClick = function(){
	$('.key').on('click', function(evt){
		console.log(evt.target.id.substring(4));
		key = evt.target.id.substring(4);
		Mousetrap.trigger(key);
	});
}

function convertDvorak(key){
		var return_key;
		switch(key){
			case 'q':
				return_key = "'";
				break;
			case 'w':
				return_key = ",";
				break;
			case 'e':
				return_key = ".";
				break;
			case 'r':
				return_key = 'p';
				break;
			case 't':
				return_key = 'y';
				break;
			case 'y':
				return_key = 'f';
				break;
			case 'u':
				return_key = 'g';
				break;
			case 'i':
				return_key = 'c';
				break;
			case 'o':
				return_key = 'r';
				break;
			case 'p':
				return_key = 'l';
				break;
			case 'a':
				return_key = 'a';
				break;
			case 's':
				return_key = 'o';
				break;
			case 'd':
				return_key = 'e';
				break;
			case 'f':
				return_key = 'u';
				break;
			case 'g':
				return_key = 'i';
				break;
			case 'h':
				return_key = 'd';
				break;
			case 'j':
				return_key = 'h';
				break;
			case 'k':
				return_key = 't';
				break;
			case 'l':
				return_key = 'n';
				break;
			case ';':
				return_key = 's';
				break;
			case "'":
				return_key = '-';
				break;
			case 'z':
				return_key = ';';
				break;
			case 'x':
				return_key = 'q';
				break;
			case 'c':
				return_key = 'j';
				break;
			case 'v':
				return_key = 'k';
				break;
			case 'b':
				return_key = 'x';
				break;
			case 'n':
				return_key = 'b';
				break;
			case 'm':
				return_key = 'm';
				break;
			case ',':
				return_key = 'w';
				break;
			case '.':
				return_key = 'v';
				break;
			case '/':
				return_key = 'z';
				break;

		}
		return return_key;
	}


