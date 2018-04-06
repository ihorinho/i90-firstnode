var log = require("./logger")(module);
var db = require("./db");
db.connect();

run = function () {

	var user = require('./user');

	var vasya = new user.User("Вася");
	var petya = new user.User("Петя");

	vasya.hello(petya);
}

if (module.parent) {
	module.export.run = run;
} else {
	run();
}

log(db.getPhrase("Run successfully"));