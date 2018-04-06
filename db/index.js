var phrases;

exports.connect = function() {
	phrases = require("./ua");
}

exports.getPhrase = function(phrase) {
	if (!phrases[phrase]) {
		console.log("Notice! Phrase " + phrase + " not found!");
	} else {
		return phrases[phrase];
	}
}
