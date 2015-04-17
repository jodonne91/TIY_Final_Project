


var calculateAccuracy = function(){
	var true_count = 0;
	for( var i = 0 ; i < accuracy_arr.length ; i++ ){
		if(accuracy_arr[i]){
			true_count += 1;
		}
	}

	var accuracy = (true_count/accuracy_arr.length)*100;
	return accuracy;
}


var calculateStats = function(){

	var time = clock.report();

	var true_count = 0;
	for( var i = 0 ; i < accuracy_arr.length ; i++ ){
		if(accuracy_arr[i]){
			true_count += 1;
		}
	}

	var session_time = time;
	var session_accuracy = (true_count/accuracy_arr.length)*100;
	var session_WPM = (num_words/session_time)*60000;
	var session_charPM = (num_char/session_time)*60000;

	if(num_words){
		total_words += num_words;
	}
	if(num_char){
		total_characters += num_char;
	}
	if(session_time){
		total_time += session_time;
	}
	if(true_count){
		total_correct += true_count;
	}

	overallStats();
	appendStats(WPM, charPM, accuracy);
	// appendStats(session_WPM, session_charPM, session_accuracy);
	console.log(session_WPM, session_charPM, session_accuracy); 
}


var overallStats = function(){
	WPM = (total_words/total_time)*60000;
	charPM = (total_characters/total_time)*60000;
	accuracy = (total_correct/total_characters)*100;
	wpmText = (WPM + '').substring(0, 5);
	cpmText = (charPM + '').substring(0, 5);
	accuracyText = (accuracy + '').substring(0, 5) + '%';
	console.log('overall', WPM, charPM);
	if(active_user){
		active_user.wordsTyped += num_words;
		active_user.WPM = WPM;
		active_user.CPM = charPM;
		return;
	}
	//appendStats(WPM, charPM, accuracy);
}


var appendStats = function(wpm, cpm, accuracy){

	if(wpm){
		wpmText = (wpm + '').substring(0, 5);
		cpmText = (cpm + '').substring(0, 5);
		accuracyText = (accuracy + '').substring(0, 5) + '%';
		$('#WPM').text(wpmText);
		$('#CPM').text(cpmText);
		$('#accuracy').text(accuracyText);	
	}
	if(active_user){
		$('.sidebar-userWPM').text((active_user.WPM + '').substring(0,5));
		$('.sidebar-userCPM').text((active_user.CPM + '').substring(0,5));
	}

};
