

var logged_in = false;
var active_user = {};

function User(username, password){
	this.username = username;
	this.password = password;
	this.WPM = null;
	this.CPM = null;
	this.accuracy = null;
	this.wordsTyped = null;
	this.charTyped = null;
}

var database = [];

function fetchUsersDatabase(){
	$.ajax({
		url: 'users',
		method: "GET",
		success: function(data){
			database = data;
			console.log('users database fetch successful');
			console.log(database);
		}
	})
}

fetchUsersDatabase();


var login = function(userName, passWord){

	var user = _.find(database, function(item){return item.username === userName});

	if(!user){
		console.log('user not found');
		return;
	}
	if(passWord === user.password){
		active_user = user;
		console.log('user login successful')
		runLogin(true);
		return true;
	}
	console.log('incorrect password');
	return false;
}


var runLogin = function(init){
	console.log('logging in..');
	if(init){
		logged_in = true;
		$('.login-append').hide();
		$('.buttons').hide();
		$('.user-info').show();
		$('.sidebar-username').text(active_user.username);
		$('.sidebar-userWPM').text(active_user.WPM);
		console.log('loggin successful');
		return true;
	}
	return false;
}


var signup = function(userName, passWord, confirmPassword){

	var user = _.find(database, function(item){return item.username === userName})
	if (_.findIndex(database,function(item){return item.username === userName}) > -1){
		console.log('usename already in use');
		return false;
	}
	if (!(passWord === confirmPassword)){
		console.log('password and confirmation password must match');
		return false;
	}
	database.push(new User(userName, passWord));
	login(userName, passWord);
	$.ajax({
		url: "/users",
		method: "POST",
		data: new User(userName, passWord),
		success: function(){
			console.log('signup post successful');
			return true;
		}
	});

}


var logout = function(){
	active_user = null;
	logged_in = false;
	$('.login-append').show();
	$('.buttons').show();
	$('.user-info').hide();
	$('.sidebar-username').text('');
	$('.sidebar-userWPM').text('');
	console.log('log out successful');
}