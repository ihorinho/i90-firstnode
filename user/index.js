var log = require("../logger")(module);
var db = require("../db");


var User = function(name) {
	this.name = name;
}

User.prototype.hello = function(who) {
	log(db.getPhrase("Hello") + ", " + who.name);
}

exports.User = User;