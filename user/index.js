var phrases = require('./ua');

var User = function(name) {
	this.name = name;
}

User.prototype.hello = function(who) {
	console.log(phrases.Hello + ", " + who.name);
}

exports.User = User;